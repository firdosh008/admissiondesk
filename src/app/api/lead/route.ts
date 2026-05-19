import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLead, type LeadRecord } from "@/lib/leads-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z
    .string()
    .transform((v) => v.replace(/[\s().+-]/g, ""))
    .pipe(z.string().regex(/^(?:91)?[6-9]\d{9}$/)),
  email: z
    .string()
    .email()
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
  state: z.string().max(40).optional().default(""),
  program: z.string().min(1).max(200),
  university: z.string().min(1).max(80),
  consent: z.literal(true),
  programLevel: z
    .string()
    .max(4)
    .default("")
    .transform((v) => (v === "UG" || v === "PG" ? v : "")),
  specializationRequested: z.boolean().default(false),
  cfTurnstileToken: z.string().optional().default(""),
});

function formatIST(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(
    formatter.formatToParts(date).map((p) => [p.type, p.value])
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  // Verify Cloudflare Turnstile token when secret key is configured
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = parsed.data.cfTurnstileToken;
    if (!token) {
      return NextResponse.json(
        { error: "Bot verification required. Please complete the security check." },
        { status: 400 }
      );
    }
    try {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret: turnstileSecret, response: token }),
        }
      );
      const { success } = (await verifyRes.json()) as { success: boolean };
      if (!success) {
        return NextResponse.json(
          { error: "Bot verification failed. Please refresh and try again." },
          { status: 400 }
        );
      }
    } catch (err) {
      console.error("[lead] Turnstile verification error:", err);
      // Don't block submission if Cloudflare's API is unreachable
    }
  }

  const record: LeadRecord = {
    receivedAt: formatIST(new Date()),
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email,
    state: parsed.data.state,
    program: parsed.data.program,
    university: parsed.data.university,
    programLevel: parsed.data.programLevel,
    specializationInterest: parsed.data.specializationRequested ? "Yes" : "No",
    source: req.headers.get("referer") ?? "direct",
    userAgent: req.headers.get("user-agent") ?? "unknown",
  };

  // Start xlsx write immediately (non-blocking).
  const xlsxResult = appendLead(record)
    .then(() => true as const)
    .catch((err) => {
      console.error("[lead] xlsx write failed (expected on Vercel/serverless):", err);
      return false as const;
    });

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    // No webhook — xlsx is the only persistence path.
    if (!(await xlsxResult)) {
      return NextResponse.json(
        { error: "Could not save your enquiry. Please try again." },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  // Start webhook in parallel with the xlsx write already in flight.
  console.log("[lead] Firing webhook to:", webhook);
  const webhookResult = fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  })
    .then(async (res) => {
      if (!res.ok) {
        console.error("[lead] Webhook returned:", res.status, res.statusText);
        return false as const;
      }
      console.log("[lead] Webhook OK");
      return true as const;
    })
    .catch((err) => {
      console.error("[lead] Webhook failed:", err);
      return false as const;
    });

  // Return as soon as xlsx confirms — it's fast locally and avoids blocking on
  // slow webhook cold-starts (Google Apps Script can take 5–15 s).
  // On Vercel/serverless xlsx always fails, so we fall through to await webhook.
  const xlsxOk = await xlsxResult;
  if (xlsxOk) return NextResponse.json({ ok: true });

  // xlsx failed (serverless) — webhook is the only path, must await it.
  if (!(await webhookResult)) {
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
