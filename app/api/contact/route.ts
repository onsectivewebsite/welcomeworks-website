import { NextResponse } from "next/server";

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

  // ---------------------------------------------------------------------------
  // Delivery.
  //
  // This logs the enquiry server-side so nothing is lost. To email it to
  // welcomeworksg@gmail.com, wire up a provider below (e.g. Resend, SendGrid,
  // or SMTP via nodemailer) using an API key stored in an environment variable.
  //
  // Example (Resend):
  //   const key = process.env.RESEND_API_KEY;
  //   if (key) {
  //     await fetch("https://api.resend.com/emails", {
  //       method: "POST",
  //       headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         from: "WelcomeWorks Website <website@welcomeworksgroup.ca>",
  //         to: "welcomeworksg@gmail.com",
  //         reply_to: email,
  //         subject: `New enquiry from ${name}`,
  //         text: JSON.stringify(submission, null, 2),
  //       }),
  //     });
  //   }
  // ---------------------------------------------------------------------------
  console.log("[contact] new enquiry:", submission);

  return NextResponse.json({
    message: "Thank you! Your message has been received — we'll be in touch shortly.",
  });
}
