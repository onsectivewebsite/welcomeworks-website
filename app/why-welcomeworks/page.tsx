import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { Check, Close, Handshake, Shield, Layers, Users, Clock, Scale } from "@/components/icons";

export const metadata: Metadata = {
  title: "Why Choose WelcomeWorks",
  description:
    "How WelcomeWorks compares to hiring a full-time HR/payroll employee or relying on payroll software alone. Integrated, right-sized HR and payroll support for Ontario small businesses.",
};

const reasons = [
  { icon: <Layers />, title: "HR and payroll under one roof", desc: "The information that drives payroll — hires, raises, leaves, terminations — originates in HR. We keep both connected so nothing is lost in handoff between vendors." },
  { icon: <Shield />, title: "Compliance is protection, not paperwork", desc: "We work within Ontario's ESA, the Human Rights Code, and CRA requirements to reduce your exposure to penalties, orders, and complaints before they happen." },
  { icon: <Users />, title: "Right-sized for small business", desc: "You get knowledgeable support scaled to your team — not the overhead of a full-time hire or the impersonality of a national provider." },
  { icon: <Handshake />, title: "One point of contact", desc: "A real person who knows your business, not a ticket queue. Questions and last-minute changes get answered." },
  { icon: <Clock />, title: "Accurate and on time", desc: "Calculations reviewed before every payroll run. Deadlines tracked and met, every period." },
  { icon: <Scale />, title: "Documentation that stands up", desc: "Records maintained properly from day one — so if a question or audit ever comes, you're ready." },
];

type Row = { feature: string; ww: boolean | string; hire: boolean | string; software: boolean | string };
const rows: Row[] = [
  { feature: "HR + payroll coordinated", ww: true, hire: "Sometimes", software: false },
  { feature: "Ontario ESA compliance guidance", ww: true, hire: "Depends on hire", software: false },
  { feature: "One point of contact who knows you", ww: true, hire: true, software: false },
  { feature: "CRA remittances & T4 filing", ww: true, hire: true, software: "You do it" },
  { feature: "Scales as you grow", ww: true, hire: "New hires needed", software: true },
  { feature: "Cost of a full-time salary", ww: "No", hire: "Yes", software: "No" },
  { feature: "Handles complex cases (leaves, terminations)", ww: true, hire: "Depends", software: false },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <span style={{ color: "var(--green-ink)", display: "inline-flex" }}><Check style={{ width: 20, height: 20 }} /></span>;
  if (v === false) return <span style={{ color: "var(--ink-300)", display: "inline-flex" }}><Close style={{ width: 20, height: 20 }} /></span>;
  return <span style={{ fontSize: "0.9rem", color: "var(--ink-500)" }}>{v}</span>;
}

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why WelcomeWorks"
        title="A knowledgeable partner — not a corporate overlay"
        intro="We're built for Ontario small businesses that need HR and payroll done right, without the cost of a full-time hire or the gaps of software alone."
        crumbs={[{ label: "Why WelcomeWorks" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <div className="card">
                  <div className="card-icon">{r.icon}</div>
                  <h3 style={{ fontSize: "1.15rem" }}>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>How we compare</span>
            <h2>WelcomeWorks vs. a full-time hire vs. software</h2>
            <p>Three common ways small businesses handle HR and payroll — and where each one leaves gaps.</p>
          </div>

          <Reveal>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
                  <thead>
                    <tr style={{ background: "var(--navy-800)", color: "#fff" }}>
                      <th style={{ textAlign: "left", padding: "1rem 1.2rem", fontFamily: "var(--font-display)" }}>Consideration</th>
                      <th style={{ padding: "1rem", fontFamily: "var(--font-display)", color: "var(--green-400)" }}>WelcomeWorks</th>
                      <th style={{ padding: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Full-time hire</th>
                      <th style={{ padding: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Software only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r.feature} style={{ borderTop: "1px solid var(--cloud)", background: i % 2 ? "var(--paper)" : "#fff" }}>
                        <td style={{ padding: "0.9rem 1.2rem", fontWeight: 600, color: "var(--navy-800)" }}>{r.feature}</td>
                        <td style={{ padding: "0.9rem 1rem", textAlign: "center", background: "var(--green-50)" }}><Cell v={r.ww} /></td>
                        <td style={{ padding: "0.9rem 1rem", textAlign: "center" }}><Cell v={r.hire} /></td>
                        <td style={{ padding: "0.9rem 1rem", textAlign: "center" }}><Cell v={r.software} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="form-note text-center mt-2">
            Comparison shown for general guidance. The right fit depends on your team size, complexity, and budget — we&apos;ll talk it through in a free consultation.
          </p>
        </div>
      </section>

      <CTABand
        title="See if integrated support is the right fit"
        text="Tell us about your business and we'll give you an honest read on whether WelcomeWorks, a hire, or software makes the most sense for you."
      />
    </>
  );
}
