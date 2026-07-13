import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  business?: string;
  phone?: string;
  service?: string;
  employees?: string;
  message?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bots without doing anything.
  if (body.company_website) {
    return NextResponse.json({ message: "Thanks — we'll be in touch shortly." });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submission = {
    name,
    email,
    business: (body.business || "").trim(),
    phone: (body.phone || "").trim(),
    service: (body.service || "").trim(),
    employees: (body.employees || "").trim(),
    message,
    receivedAt: new Date().toISOString(),
  };

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_CC,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Not configured — log so nothing is lost, but tell the user honestly.
    console.error("[contact] SMTP not configured; enquiry logged only:", submission);
    return NextResponse.json(
      { error: "Sorry, our contact form isn't sending right now. Please email welcomeworksgroup@outlook.com directly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false, // STARTTLS on 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: Array<[string, string]> = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Business", submission.business || "—"],
    ["Phone", submission.phone || "—"],
    ["Service", submission.service || "—"],
    ["Employees", submission.employees || "—"],
  ];

  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessage:\n${submission.message}\n\nReceived: ${submission.receivedAt}`;

  const htmlBody = `
    <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;color:#1a1a1a;line-height:1.5">
      <h2 style="margin:0 0 12px">New website enquiry</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#555;font-weight:600;vertical-align:top">${esc(
                k
              )}</td><td style="padding:4px 0">${esc(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px;color:#555;font-weight:600">Message</p>
      <p style="margin:0;white-space:pre-wrap">${esc(submission.message)}</p>
      <p style="margin:16px 0 0;color:#888;font-size:12px">Received ${esc(submission.receivedAt)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"WelcomeWorks Website" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      cc: CONTACT_CC || undefined,
      replyTo: `"${submission.name}" <${submission.email}>`,
      subject: `New enquiry from ${submission.name}${submission.business ? ` (${submission.business})` : ""}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("[contact] send failed:", err, "\nenquiry:", submission);
    return NextResponse.json(
      { error: "Sorry, we couldn't send your message. Please email welcomeworksgroup@outlook.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Thank you! Your message has been received — we'll be in touch shortly.",
  });
}
