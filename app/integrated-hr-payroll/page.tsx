import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import FaqList from "@/components/FaqList";
import Photo from "@/components/Photo";
import { Users, Wallet, Handshake, ArrowRight, ChevronRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrated HR & Payroll",
  description:
    "One provider for HR and payroll. Every HR decision — hire, raise, leave, termination — flows into accurate payroll. WelcomeWorks manages both together for Ontario small businesses.",
};

const triggers = [
  ["New hire", "correct setup in payroll from day one"],
  ["Raise or promotion", "updated rate, right pay period, proper documentation"],
  ["Parental or medical leave", "ESA obligations, ROE filing, coordinated return"],
  ["Workplace accommodation", "policy, records, and pay adjustments aligned"],
  ["Termination", "ESA calculations, final pay, vacation pay, ROE — all done correctly"],
  ["Attendance issues", "accurate records required for accurate payroll"],
];

const hrItems = [
  "Employment contracts & offer letters",
  "Onboarding documentation",
  "Job descriptions & role classification",
  "Policy development & employee handbooks",
  "Performance management guidance",
  "Leave management (medical, parental, personal)",
  "Accommodation support (duty to accommodate)",
  "Workplace investigations",
  "Progressive discipline documentation",
  "Termination support & documentation",
  "Ontario ESA compliance guidance",
  "Human Rights Code awareness",
  "Employee record maintenance",
];

const payItems = [
  "Payroll calculations (hourly, salary, commission)",
  "Statutory deductions (CPP, EI, income tax)",
  "CRA payroll remittances",
  "Direct deposit administration",
  "Vacation pay tracking & processing",
  "Statutory holiday & overtime calculations",
  "New hire setup & termination pay processing",
  "Records of Employment (ROE)",
  "Year-end T4 preparation & CRA filing",
  "Payroll records & audit support",
];

const scenarios = [
  ["New Hire", "Offer letter, job classification, payroll setup, and first-pay accuracy — handled as one step."],
  ["Promotion", "Employment record updated, new terms documented, payroll reflects the change on the correct date."],
  ["Parental Leave", "Ontario obligations confirmed, leave documents prepared, ROE filed on time, return coordinated."],
  ["Workplace Complaint", "Investigation supported — procedurally sound, properly documented, compensation impacts addressed."],
  ["Termination", "ESA entitlements calculated, final pay accurate, ROE filed, process handled with care."],
];

const faqs = [
  {
    q: "We already have a bookkeeper handling payroll. Can you just do HR?",
    a: "Yes. We offer standalone HR consulting and can coordinate with your existing payroll arrangement where needed.",
  },
  {
    q: "What if there's an employment standards complaint?",
    a: "We help you build documentation that protects you from the start. If an issue arises, we can support your response process. For legal proceedings, we'd recommend also engaging qualified legal counsel.",
  },
  {
    q: "How quickly can you get our setup running?",
    a: "We'll give you a clear timeline during the consultation based on your current setup and payroll complexity.",
  },
];

const learnMore = [
  ["Payroll Services", "Detailed payroll-only breakdown", "/payroll-services"],
  ["Why Choose WelcomeWorks", "How we compare to alternatives", "/why-welcomeworks"],
  ["Industries We Serve", "Sector-specific HR & payroll context", "/industries"],
  ["FAQ", "Full list of common questions and answers", "/faq"],
];

export default function IntegratedPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Service"
        title="Integrated HR & Payroll"
        intro="One provider. Both functions. Nothing falling through the cracks."
        crumbs={[{ label: "Integrated HR & Payroll" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow prose">
          <p className="lead">
            Most small businesses treat HR and payroll as two separate things. Different systems,
            sometimes different vendors, rarely coordinated. The problem: every HR decision — a hire,
            a raise, a leave, a termination — has a direct payroll consequence. When those functions
            aren&apos;t connected, errors follow.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            <strong>WelcomeWorks manages both together.</strong> One point of contact for everything
            related to your people and their pay.
          </p>
        </div>
      </section>

      {/* Media band */}
      <section className="section-tight">
        <div className="container">
          <div className="media-band reverse">
            <Reveal className="media-text">
              <span className="eyebrow">One point of contact</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.8rem 0 1rem" }}>
                When information flows, errors don&apos;t
              </h2>
              <p className="lead">
                With HR and payroll under one roof, every people decision reaches payroll accurately
                and on time — no re-explaining your business to a second vendor, no gaps between
                systems.
              </p>
            </Reveal>
            <Reveal>
              <Photo
                src="/images/handshake.jpg"
                alt="Two professionals shaking hands over a desk"
                ratio="4 / 3"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why together */}
      <section className="section-tight bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Why they belong together</span>
            <h2>The everyday events that trigger payroll changes</h2>
          </div>
          <div className="grid grid-2">
            {triggers.map(([tag, out], i) => (
              <Reveal key={tag} delay={i * 60}>
                <div className="scenario">
                  <h4>{tag}</h4>
                  <p>{out}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center lead mt-3" style={{ maxWidth: "56ch", margin: "2rem auto 0" }}>
            When one team handles both, the information flows. When two vendors manage each separately, it doesn&apos;t.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What&apos;s included</span>
            <h2>Two functions, one coordinated service</h2>
          </div>
          <div className="split-panel">
            <div className="panel hr">
              <div className="panel-title">
                <span className="dot"><Users style={{ width: 22, height: 22 }} /></span>
                <div><h3>Human Resources</h3><span>People, policy &amp; compliance</span></div>
              </div>
              <ul className="checklist">
                {hrItems.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div className="panel pay">
              <div className="panel-title">
                <span className="dot"><Wallet style={{ width: 22, height: 22 }} /></span>
                <div><h3>Payroll Administration</h3><span>Accurate pay &amp; filings</span></div>
              </div>
              <ul className="checklist">
                {payItems.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Real scenarios, real outcomes</span>
            <h2>How integrated support plays out</h2>
          </div>
          <div className="grid grid-3">
            {scenarios.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="card">
                  <div className="card-icon"><Handshake /></div>
                  <h3 style={{ fontSize: "1.15rem" }}>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Common questions</span>
            <h2>Good to know</h2>
          </div>
          <FaqList items={faqs} />
          <p className="text-center mt-2">
            <Link href="/faq" className="arrow-link">See all questions <ArrowRight /></Link>
          </p>
        </div>
      </section>

      {/* Learn more */}
      <section className="section-tight bg-mist">
        <div className="container container-narrow">
          <div className="section-head center">
            <h2 style={{ fontSize: "var(--fs-h3)" }}>Learn more</h2>
          </div>
          <div className="divider-links">
            {learnMore.map(([t, d, href]) => (
              <Link key={href} href={href}>
                <span><b>{t}</b><br /><small>{d}</small></span>
                <ChevronRight className="chev" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="One provider. Two critical functions. Zero dropped balls."
        text="Let's talk about how integrated HR and payroll support can work for your business."
      />
    </>
  );
}
