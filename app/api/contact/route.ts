import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const company = (form.get("company") as string) || "";
  if (company) return NextResponse.json({ ok: true }); // honeypot

  const name = (form.get("name") as string) ?? "";
  const email = (form.get("email") as string) ?? "";
  const topic = (form.get("topic") as string) ?? "";
  const message = (form.get("message") as string) ?? "";

  try {
    await resend.emails.send({
      from: "X-Centered <noreply@xcentered.design>",
      to: ["YOUR_EMAIL@EXAMPLE.COM"],
      subject: `Contact: ${topic || "New message"}`,
      replyTo: email,
      text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
    });
    return NextResponse.redirect(new URL("/?sent=1", req.url));
  } catch (e) {
    return NextResponse.redirect(new URL("/?sent=0", req.url));
  }
}
