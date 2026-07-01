import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import FaqList from "@/components/FaqList";
import Photo from "@/components/Photo";
import {
  Wallet, FileText, Calendar, Lock, Check, Clock,
  Users, ChevronRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Payroll Services",
  description:
    "Accurate, on-time payroll every pay period. CRA remittances, direct deposit, vacation & stat holiday pay, ROEs, and year-end T4 filing — WelcomeWorks takes payroll off your plate.",
};

const included = [
  ["Payroll Processing", "Accurate gross-to-net calculations for hourly, salaried, and commission employees — every pay period.", <Wallet key="i" />],
  ["CRA Remittances", "Timely submission of payroll deductions to the Canada Revenue Agency. Deadlines tracked and met.", <FileText key="i" />],
  ["Direct Deposit", "Setup and ongoing administration of direct deposit for all employees.", <Wallet key="i" />],
  ["Vacation Pay", "Accurate accrual and processing in accordance with Ontario's Employment Standards Act.", <Calendar key="i" />],
  ["Statutory Holiday Pay", "Correct public holiday pay calculations, including premium pay where applicable.", <Calendar key="i" />],
  ["Overtime Calculations", "Tracking and calculating overtime per Ontario ESA requirements.", <Clock key="i" />],
  ["New Hire Setup", "Adding employees to payroll correctly from their first day.", <Users key="i" />],
  ["Termination Pay", "Final pay calculations including ESA minimum notice and vacation pay entitlements.", <FileText key="i" />],
  ["Records of Employment", "ROE preparation and submission for departing employees and leaves.", <FileText key="i" />],
  ["T4 Preparation & Filing", "Year-end T4 slip preparation and direct filing with the CRA.", <FileText key="i" />],
  ["Payroll Records", "Maintaining compliant records for Ontario and federal record-keeping requirements.", <Lock key="i" />],
];

const expect = [
  ["Accuracy", "Calculations reviewed before every payroll run."],
  ["Timeliness", "Your employees are paid on time, every time."],
  ["Compliance", "Processing aligned with CRA, ESA, and Ontario requirements."],
  ["Confidentiality", "Payroll data handled with complete discretion."],
  ["Communication", "We're accessible when you have questions or last-minute changes."],
  ["Documentation", "Proper records maintained for audit and legal purposes."],
];

const faqs = [
  { q: "How do you receive payroll information from us each period?", a: "We set up a simple, secure process during onboarding — typically a brief hours submission by email or an agreed format. We keep it as simple as possible for your team." },
  { q: "What payroll software do you use?", a: "We discuss platform options during the consultation and recommend based on your size and needs. We're not tied to one platform." },
  { q: "Can you handle hourly and salaried staff in the same payroll?", a: "Yes. We process mixed workforces and can handle commission calculations as well." },
  { q: "Do you file T4s directly with CRA?", a: "Yes. Year-end T4 preparation and CRA filing is included in our payroll service." },
  { q: "What if our business grows and we add more employees?", a: "Our service scales with you. As your team grows, we adjust our process — no need to switch providers." },
];

const related = [
  ["Integrated HR & Payroll", "How HR decisions drive payroll outcomes", "/integrated-hr-payroll"],
  ["Why Choose WelcomeWorks", "Comparison with full-time hire and payroll software", "/why-welcomeworks"],
  ["FAQ", "Full answers to common payroll and HR questions", "/faq"],
  ["Contact Us", "Set up a payroll consultation", "/contact"],
];

export default function PayrollPage() {
  return (
    <>
      <PageHero
        eyebrow="Standalone Service"
        title="Payroll Services"
        intro="Accurate. On time. Every pay period."
        crumbs={[{ label: "Payroll Services" }]}
      />

      <section className="section">
        <div className="container container-narrow prose">
          <p className="lead">
            Payroll sounds simple until it isn&apos;t. One miscalculated deduction, one missed
            remittance deadline, one incorrect ROE — and you&apos;re dealing with employee
            frustration, CRA penalties, or both.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            WelcomeWorks takes payroll off your plate entirely. We process your payroll accurately,
            remit on time, maintain proper records, and handle year-end reporting — so you can focus
            on your business.
          </p>
        </div>
      </section>

      {/* Media band */}
      <section className="section-tight">
        <div className="container">
          <div className="media-band">
            <Reveal className="media-text">
              <span className="eyebrow">Off your plate</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.8rem 0 1rem" }}>
                Deductions, remittances, and filings — handled
              </h2>
              <p className="lead">
                From CPP, EI, and income tax to ROEs and year-end T4s, we track every deadline and
                keep your records clean and audit-ready — so a missed remittance never turns into a
                CRA penalty.
              </p>
            </Reveal>
            <Reveal>
              <Photo
                src="/images/payroll-desk.jpg"
                alt="Payroll paperwork and a calculator on a desk"
                ratio="4 / 3"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-tight bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What&apos;s included</span>
            <h2>Full-service payroll administration</h2>
          </div>
          <div className="grid grid-3">
            {included.map(([t, d, icon], i) => (
              <Reveal key={t as string} delay={(i % 3) * 70}>
                <div className="card">
                  <div className="card-icon">{icon as React.ReactNode}</div>
                  <h3 style={{ fontSize: "1.12rem" }}>{t as string}</h3>
                  <p>{d as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk management */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Risk management</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.7rem 0 1rem" }}>
                Why professional payroll is risk management
              </h2>
              <div className="note-box warn">
                Getting any of these wrong — even unintentionally — can result in CRA penalties,
                Ministry of Labour orders, and employee complaints.
              </div>
            </div>
            <div className="prose">
              <p>
                Ontario&apos;s <strong>Employment Standards Act</strong> governs pay frequency,
                vacation pay, overtime, public holidays, and termination entitlements. The
                <strong> Income Tax Act</strong> and <strong>Employment Insurance Act</strong> add
                federal obligations on top.
              </p>
              <p>
                Professional payroll administration is not a luxury for businesses with employees.
                <strong> It&apos;s protection.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What you can expect</span>
            <h2>Payroll you can count on</h2>
          </div>
          <div className="grid grid-3">
            {expect.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 70}>
                <div className="card">
                  <div className="card-icon"><Check /></div>
                  <h3 style={{ fontSize: "1.12rem" }}>{t}</h3>
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
            <h2>Payroll, answered</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="section-tight bg-mist">
        <div className="container container-narrow">
          <div className="section-head center">
            <h2 style={{ fontSize: "var(--fs-h3)" }}>Related pages</h2>
            <p>If you need HR support alongside payroll, or want to understand how the two connect.</p>
          </div>
          <div className="divider-links">
            {related.map(([t, d, href]) => (
              <Link key={href} href={href}>
                <span><b>{t}</b><br /><small>{d}</small></span>
                <ChevronRight className="chev" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Payroll you can count on — every pay period"
        text="Let's talk about taking payroll off your to-do list."
        primaryLabel="Book a Payroll Consultation"
      />
    </>
  );
}
