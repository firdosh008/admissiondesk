import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLead, type LeadRecord } from "@/lib/leads-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^[+\d][\d\s-]{8,15}$/),
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

  // Best-effort local xlsx write (fails on serverless — that's fine).
  let xlsxOk = false;
  try {
    await appendLead(record);
    xlsxOk = true;
  } catch (err) {
    console.error("[lead] xlsx write failed (expected on Vercel/serverless):", err);
  }

  // Primary durable storage: webhook to Google Sheets / CRM.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      console.log("[lead] Firing webhook to:", webhook);
      const whRes = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!whRes.ok) {
        console.error("[lead] Webhook returned:", whRes.status, whRes.statusText);
        return NextResponse.json(
          { error: "Could not save your enquiry. Please try again." },
          { status: 502 }
        );
      }
      console.log("[lead] Webhook OK");
    } catch (err) {
      console.error("[lead] Webhook failed:", err);
      return NextResponse.json(
        { error: "Could not save your enquiry. Please try again." },
        { status: 502 }
      );
    }
  } else if (!xlsxOk) {
    // No webhook configured AND xlsx failed — nothing was saved.
    console.error("[lead] No webhook configured and xlsx write failed");
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
