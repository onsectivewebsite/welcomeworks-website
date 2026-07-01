"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./icons";

type Status = "idle" | "sending" | "ok" | "err";

const services = [
  "Integrated HR & Payroll",
  "Payroll Services (standalone)",
  "HR Consulting (standalone)",
  "Post-Secondary Admissions Support",
  "Not sure yet — help me decide",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // honeypot
    if (data.company_website) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      setMessage(json.message || "Thanks — we'll be in touch shortly.");
      form.reset();
    } catch (err) {
      setStatus("err");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please email welcomeworksg@gmail.com."
      );
    }
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      {status === "ok" && <div className="form-status ok" role="status">{message}</div>}
      {status === "err" && <div className="form-status err" role="alert">{message}</div>}

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name <span className="req">*</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" />
        </div>
        <div className="field">
          <label htmlFor="business">Business name</label>
          <input id="business" name="business" type="text" autoComplete="organization" placeholder="Your company" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email <span className="req">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">What can we help with?</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service…</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="employees">Approx. number of employees</label>
        <select id="employees" name="employees" defaultValue="">
          <option value="" disabled>Select a range…</option>
          <option>Just me / hiring soon</option>
          <option>1–5</option>
          <option>6–15</option>
          <option>16–50</option>
          <option>50+</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">How can we help? <span className="req">*</span></label>
        <textarea id="message" name="message" required placeholder="Tell us a little about your business and what you need…" />
      </div>

      {/* honeypot */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ width: "100%" }}>
        {status === "sending" ? "Sending…" : "Book My Free Consultation"} <ArrowRight />
      </button>
      <p className="form-note">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:welcomeworksg@gmail.com" style={{ color: "var(--green-ink)", fontWeight: 600 }}>
          welcomeworksg@gmail.com
        </a>. We&apos;ll never share your information.
      </p>
    </form>
  );
}
