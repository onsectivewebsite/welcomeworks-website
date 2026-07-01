import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import FaqList from "@/components/FaqList";
import {
  GraduationCap, Users, Heart, Building, TrendingUp, FileText,
  Handshake, Layers, ChevronRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Post-Secondary Admissions Support",
  description:
    "Information, guidance, and referral for students navigating Canadian post-secondary admissions. A supplementary service from WelcomeWorks — we support your application; institutions make all admission decisions.",
};

const audiences = [
  ["Canadian Students", "Recent high school graduates, mature students, and career changers applying to Ontario colleges and universities.", <GraduationCap key="i" />],
  ["International Students", "Applicants from outside Canada navigating Canadian post-secondary admissions, documentation requirements, and institution selection.", <Building key="i" />],
  ["Parents & Families", "Parents who want to understand the process and support their child's application without adding to the confusion.", <Heart key="i" />],
  ["Mature Students", "Adults returning to formal education after time in the workforce — pursuing second careers or upgrading credentials.", <Users key="i" />],
  ["Career Changers", "Professionals seeking to enter a new field through post-secondary programs, certificates, or degrees.", <TrendingUp key="i" />],
];

const provide = [
  ["Information & Guidance", "We help you understand how Canadian post-secondary admissions work — timelines, documentation requirements, prerequisite courses, and what institutions are typically looking for."],
  ["Program Research Support", "Not sure which program or institution fits your goals? We help you think through your options based on your interests, career direction, and academic background."],
  ["Application Support", "We review your application materials and provide guidance on presenting your background effectively. We do not write applications for you — we help you understand what's expected and how to put your best effort forward."],
  ["Referral Services", "Where appropriate, we refer clients to specific institutions, programs, or qualified education advisors who can provide specialized guidance for their situation."],
  ["International Student Guidance", "We help international applicants understand the Canadian admissions landscape and general application process. For immigration and visa matters, we strongly recommend consulting a Regulated Canadian Immigration Consultant (RCIC) or qualified immigration lawyer."],
];

const faqs = [
  { q: "Do you work with specific colleges or universities?", a: "We provide general guidance for Ontario and Canadian post-secondary institutions. We'll discuss your specific targets during our initial conversation." },
  { q: "Can you guarantee I'll get accepted?", a: "No. And be cautious of any service that claims they can. Admission decisions rest entirely with the educational institution. We help you understand the process and put together a strong application." },
  { q: "Can parents contact you on behalf of their child?", a: "Yes. Parents and families are welcome to reach out. We're happy to help parents understand the process so they can support their child effectively." },
  { q: "Do you help with international student visa applications?", a: "We provide general information about the admissions process for international students. For immigration and visa matters, consult a Regulated Canadian Immigration Consultant (RCIC) or qualified immigration lawyer." },
  { q: "How much does admissions support cost?", a: "Contact us to discuss your specific situation. We'll give you a clear, honest picture of what we offer and what it costs." },
];

const core = [
  ["Integrated HR & Payroll", "Our flagship service for Ontario businesses", "/integrated-hr-payroll"],
  ["Payroll Services", "Standalone payroll administration", "/payroll-services"],
  ["Contact Us", "Reach out to get started", "/contact"],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Supplementary Service"
        title="Post-Secondary Admissions Support"
        intro="Information, guidance, and referral for students navigating Canadian admissions."
        crumbs={[{ label: "Admissions Support" }]}
      />

      <section className="section">
        <div className="container container-narrow">
          <div className="note-box" style={{ marginBottom: "2rem" }}>
            <strong>Note on scope:</strong> This is a supplementary service offered by WelcomeWorks
            alongside our core HR and payroll work. It is a standalone offering — not bundled with
            employment services.
          </div>
          <div className="prose">
            <p className="lead">
              Whether you&apos;re a high school student figuring out your first application, an
              international student navigating Canadian admissions from abroad, a parent trying to
              understand how the system works, or an adult thinking about going back to school — the
              post-secondary admissions process can feel overwhelming.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              WelcomeWorks provides information, guidance, referral, and admissions support to help
              you make informed decisions and move forward with confidence.
            </p>
          </div>
          <div className="note-box warn" style={{ marginTop: "1.5rem" }}>
            <strong>Important:</strong> Admission decisions are made solely by educational
            institutions. WelcomeWorks provides support and guidance — we do not guarantee admission
            outcomes.
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section className="section-tight bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Who we support</span>
            <h2>Support for every kind of applicant</h2>
          </div>
          <div className="grid grid-3">
            {audiences.map(([t, d, icon], i) => (
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

      {/* What we provide */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What we provide</span>
            <h2>Guidance at every step</h2>
          </div>
          <div className="grid grid-2">
            {provide.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 80}>
                <div className="card">
                  <div className="card-icon"><FileText /></div>
                  <h3 style={{ fontSize: "1.15rem" }}>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-tight">
        <div className="container container-narrow">
          <div className="note-box warn">
            WelcomeWorks provides information, guidance, referral, and admissions support. All
            admission decisions are made solely by the educational institution. We do not influence,
            guarantee, or represent any institution&apos;s admissions decisions. We are not a
            registered immigration consultant and do not provide immigration advice.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-paper">
        <div className="container container-narrow">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Common questions</span>
            <h2>Admissions support, answered</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      {/* Back to core services */}
      <section className="section-tight bg-mist">
        <div className="container container-narrow">
          <div className="section-head center">
            <h2 style={{ fontSize: "var(--fs-h3)" }}>Back to our core services</h2>
            <p>WelcomeWorks is primarily an HR and payroll firm. If you&apos;re a business owner looking for employment support:</p>
          </div>
          <div className="divider-links">
            {core.map(([t, d, href]) => (
              <Link key={href} href={href}>
                <span><b>{t}</b><br /><small>{d}</small></span>
                <ChevronRight className="chev" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="You don't have to navigate admissions alone"
        text="WelcomeWorks is here to help you move forward with confidence."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
