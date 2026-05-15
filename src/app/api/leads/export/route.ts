import { NextResponse } from "next/server";
import { readLeadsFile } from "@/lib/leads-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function authorise(req: Request): boolean {
  const expected = process.env.LEADS_EXPORT_TOKEN;
  if (!expected) return false;

  const url = new URL(req.url);
  const queryToken = url.searchParams.get("token") ?? "";
  const headerToken =
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  const presented = queryToken || headerToken;
  if (!presented) return false;

  return timingSafeEqual(presented, expected);
}

export async function GET(req: Request) {
  if (!authorise(req)) {
    return NextResponse.json(
      {
        error:
          "Unauthorised. Set LEADS_EXPORT_TOKEN in .env.local and pass it as ?token=… or `Authorization: Bearer …`.",
      },
      { status: 401 }
    );
  }

  let buffer: Buffer;
  try {
    buffer = await readLeadsFile();
  } catch (err) {
    console.error("Failed to read leads file:", err);
    return NextResponse.json(
      { error: "Could not read leads file." },
      { status: 500 }
    );
  }

  const stamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .slice(0, 19);

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="leads-${stamp}.xlsx"`,
      "Cache-Control": "no-store",
    },
  });
}
