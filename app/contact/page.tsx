import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock, Handshake } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with WelcomeWorks Group Inc. HR and payroll support for Ontario small businesses. Based in Vaughan, Ontario. Email welcomeworksg@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Book a free consultation"
        intro="Tell us about your business and what you need. We'll get back to you with a clear, honest picture of how we can help — and what it costs."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Details */}
            <div>
              <h2 style={{ fontSize: "var(--fs-h3)", marginBottom: "1.4rem" }}>Get in touch</h2>

              <div className="contact-detail">
                <span className="ic"><Mail /></span>
                <div>
                  <b>Email</b>
                  <a href="mailto:welcomeworksg@gmail.com">welcomeworksg@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="ic"><MapPin /></span>
                <div>
                  <b>Location</b>
                  <span>Vaughan, Ontario — serving businesses across Ontario</span>
                </div>
              </div>

              <div className="contact-detail">
                <span className="ic"><Clock /></span>
                <div>
                  <b>Response time</b>
                  <span>We aim to respond to every enquiry promptly, usually within one business day.</span>
                </div>
              </div>

              <div className="note-box" style={{ marginTop: "1.5rem" }}>
                <Handshake style={{ width: 22, height: 22, color: "var(--green-600)", marginBottom: "0.5rem" }} />
                <strong>The first consultation is free.</strong> No obligation — it&apos;s how we
                both decide whether we&apos;re a good fit for your business.
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
