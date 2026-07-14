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
    OUTLOOK_CLIENT_ID,
    OUTLOOK_CLIENT_SECRET,
    OUTLOOK_REFRESH_TOKEN,
  } = process.env;

  const host = SMTP_HOST || "smtp-mail.outlook.com";
  const port = Number(SMTP_PORT) || 587;

  // Prefer OAuth2 (modern auth) — required for personal Outlook.com, which no
  // longer accepts SMTP passwords. Fall back to a plain password if that's how
  // the configured account works (e.g. a relay or Gmail app password).
  const useOAuth = Boolean(OUTLOOK_CLIENT_ID && OUTLOOK_CLIENT_SECRET && OUTLOOK_REFRESH_TOKEN);

  if (!SMTP_USER || (!useOAuth && !SMTP_PASS)) {
    console.error("[contact] mail not configured; enquiry logged only:", submission);
    return NextResponse.json(
      { error: "Sorry, our contact form isn't sending right now. Please email welcomeworksgroupca@gmail.com directly." },
      { status: 500 }
    );
  }

  let transporter;
  if (useOAuth) {
    // Exchange the refresh token for a short-lived access token with the exact
    // scope Microsoft's SMTP endpoint expects, then hand it to nodemailer.
    let accessToken: string;
    try {
      const tokenRes = await fetch(
        "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            client_id: OUTLOOK_CLIENT_ID!,
            client_secret: OUTLOOK_CLIENT_SECRET!,
            grant_type: "refresh_token",
            refresh_token: OUTLOOK_REFRESH_TOKEN!,
            scope: "offline_access https://outlook.office.com/SMTP.Send",
          }),
        }
      );
      const tokenJson = await tokenRes.json();
      if (!tokenJson.access_token) throw new Error(JSON.stringify(tokenJson));
      accessToken = tokenJson.access_token;
    } catch (err) {
      console.error("[contact] OAuth token fetch failed:", err, "\nenquiry:", submission);
      return NextResponse.json(
        { error: "Sorry, we couldn't send your message. Please email welcomeworksgroupca@gmail.com directly." },
        { status: 502 }
      );
    }
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // STARTTLS on 587
      auth: { type: "OAuth2", user: SMTP_USER, accessToken },
    });
  } else {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // STARTTLS on 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

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

  // 1) Lead notification to the business (CC the person managing leads).
  try {
    await transporter.sendMail({
      from: `"WelcomeWorks Group" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      cc: CONTACT_CC || undefined,
      replyTo: `"${submission.name}" <${submission.email}>`,
      subject: `New enquiry from ${submission.name}${submission.business ? ` (${submission.business})` : ""}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("[contact] notification send failed:", err, "\nenquiry:", submission);
    return NextResponse.json(
      { error: "Sorry, we couldn't send your message. Please email welcomeworksgroupca@gmail.com directly." },
      { status: 502 }
    );
  }

  // 2) Auto-confirmation to the person who filled the form. Best-effort — the
  //    lead is already captured above, so a failure here shouldn't block success.
  const firstName = submission.name.split(/\s+/)[0] || "there";
  const confirmText =
    `Hi ${firstName},\n\n` +
    `Thanks for reaching out to WelcomeWorks Group — we've received your message ` +
    `and a member of our team will be in touch shortly.\n\n` +
    `For your records, here's what you sent:\n\n` +
    `${submission.service ? `Service: ${submission.service}\n` : ""}` +
    `Message:\n${submission.message}\n\n` +
    `Warm regards,\nWelcomeWorks Group\nwelcomeworksgroupca@gmail.com`;
  const confirmHtml = `
    <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;color:#1a1a1a;line-height:1.6">
      <p>Hi ${esc(firstName)},</p>
      <p>Thanks for reaching out to <strong>WelcomeWorks Group</strong> — we've received your
         message and a member of our team will be in touch shortly.</p>
      <p style="margin:16px 0 4px;color:#555;font-weight:600">Your message</p>
      ${submission.service ? `<p style="margin:0 0 8px"><strong>Service:</strong> ${esc(submission.service)}</p>` : ""}
      <p style="margin:0;white-space:pre-wrap">${esc(submission.message)}</p>
      <p style="margin:20px 0 0">Warm regards,<br/>WelcomeWorks Group</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"WelcomeWorks Group" <${SMTP_USER}>`,
      to: `"${submission.name}" <${submission.email}>`,
      replyTo: CONTACT_TO || SMTP_USER,
      subject: "We've received your message — WelcomeWorks Group",
      text: confirmText,
      html: confirmHtml,
    });
  } catch (err) {
    console.error("[contact] confirmation send failed (lead still captured):", err);
  }

  return NextResponse.json({
    message: "Thank you! Your message has been received — we'll be in touch shortly.",
  });
}
