// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const ORIGINS = new Set([
  "https://xcentered-design.vercel.app",
  "https://xcentered.design",
  "http://localhost:3000",
]);

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  if (origin && !ORIGINS.has(origin)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const form = await req.formData();
  if ((form.get("company") as string) || "") {
    return NextResponse.json({ ok: true });
  }

  const name = ((form.get("name") as string) ?? "").trim();
  const email = ((form.get("email") as string) ?? "").trim();
  const topic = ((form.get("topic") as string) ?? "").trim();
  const message = ((form.get("message") as string) ?? "").trim();

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !isEmail || !message) {
    return NextResponse.json(
      { ok: false, error: "Invalid input" },
      { status: 400 }
    );
  }
  if (name.length > 120 || topic.length > 200 || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Too long" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "X-Centered <noreply@xcentered.design>",
      to: [process.env.CONTACT_EMAIL || "moilanenmime@gmail.com"],
      subject: `[X-Centered Contact] ${topic || "New message"}`,
      // Use camelCase property name expected by the SDK:
      replyTo: email,
      text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
    });

    return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
  } catch (err: unknown) {
    console.error("Email sending failed:", err);
    return NextResponse.redirect(new URL("/?sent=0", req.url), { status: 303 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
