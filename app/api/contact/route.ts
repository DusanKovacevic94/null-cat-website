import { NextResponse } from "next/server";
import { Resend } from "resend";
import { projectTypeEmailLabels, validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Null Cat <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { ok: false, message: "Contact email is not configured yet." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, company, projectType, message } = validation.data;
  const projectTypeLabel = projectTypeEmailLabels[projectType as keyof typeof projectTypeEmailLabels] || projectType;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Null Cat inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Project type: ${projectTypeLabel}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not send the message. Try again later." },
      { status: 502 },
    );
  }
}
