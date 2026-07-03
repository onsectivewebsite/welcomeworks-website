import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FaqList, { type QA } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about WelcomeWorks HR and payroll services, admissions support, compliance, onboarding, and pricing for Ontario small businesses.",
};

const groups: { heading: string; items: QA[] }[] = [
  {
    heading: "HR & Payroll — General",
    items: [
      { q: "What exactly does WelcomeWorks do?", a: "We're the HR and payroll team for small businesses that aren't ready to hire full-time HR or payroll staff. You can have it all looked after together, get payroll on its own, add HR training for your team, or bring us in for standalone HR help — whatever fits where you are." },
      { q: "Why should HR and payroll be handled together?", a: "Every HR decision — a hire, a raise, a leave, a termination — has a direct payroll consequence. When one team handles both, information flows and errors are avoided. When two separate vendors manage each, things fall through the cracks." },
      { q: "We already have a bookkeeper handling payroll. Can you just do HR?", a: "Yes. We offer standalone HR consulting and can coordinate with your existing payroll arrangement where needed." },
      { q: "How quickly can you get our setup running?", a: "We'll give you a clear timeline during the consultation based on your current setup and payroll complexity." },
      { q: "Do you only work with businesses in Milton?", a: "We're based in Milton, Ontario and serve small businesses across the province. We'll confirm fit during your consultation." },
    ],
  },
  {
    heading: "Payroll",
    items: [
      { q: "How do you receive payroll information from us each period?", a: "We set up a simple, secure process during onboarding — typically a brief hours submission by email or an agreed format. We keep it as simple as possible for your team." },
      { q: "What payroll software do you use?", a: "We discuss platform options during the consultation and recommend based on your size and needs. We're not tied to one platform." },
      { q: "Can you handle hourly and salaried staff in the same payroll?", a: "Yes. We process mixed workforces and can handle commission calculations as well." },
      { q: "Do you file T4s directly with CRA?", a: "Yes. Year-end T4 preparation and CRA filing is included in our payroll service." },
      { q: "What if our business grows and we add more employees?", a: "Our service scales with you. As your team grows, we adjust our process — no need to switch providers." },
      { q: "Do you handle CRA remittances and Records of Employment?", a: "Yes. We track and meet CRA remittance deadlines and prepare and submit ROEs for departing employees and leaves." },
    ],
  },
  {
    heading: "HR & Compliance",
    items: [
      { q: "What if there's an employment standards complaint?", a: "We help you build documentation that protects you from the start. If an issue arises, we can support your response process. For legal proceedings, we'd recommend also engaging qualified legal counsel." },
      { q: "Can you help with terminations?", a: "Yes. We support termination documentation and coordinate the payroll side — ESA entitlements, final pay, vacation pay, and ROE — so the process is handled correctly and with care." },
      { q: "Do you provide legal advice?", a: "No. We provide HR guidance aligned with Ontario's ESA and awareness of the Human Rights Code. For legal proceedings or legal advice, we recommend engaging qualified legal counsel." },
      { q: "Can you develop policies and an employee handbook for us?", a: "Yes. Policy development and employee handbooks are part of our HR service, tailored to your business." },
      { q: "Do you offer HR training for our team?", a: "Yes! We run practical, plain-language HR training and workshops for owners, managers, and teams — on-site or online. It's a great fit if you want your people to handle everyday situations with confidence." },
    ],
  },
  {
    heading: "Admissions Support",
    items: [
      { q: "Do you work with specific colleges or universities?", a: "We provide general guidance for Ontario and Canadian post-secondary institutions. We'll discuss your specific targets during our initial conversation." },
      { q: "Can you guarantee I'll get accepted?", a: "No. And be cautious of any service that claims they can. Admission decisions rest entirely with the educational institution. We help you understand the process and put together a strong application." },
      { q: "Can parents contact you on behalf of their child?", a: "Yes. Parents and families are welcome to reach out. We're happy to help parents understand the process so they can support their child effectively." },
      { q: "Do you help with international student visa applications?", a: "We provide general information about the admissions process for international students. For immigration and visa matters, consult a Regulated Canadian Immigration Consultant (RCIC) or qualified immigration lawyer." },
      { q: "How much does admissions support cost?", a: "Contact us to discuss your specific situation. We'll give you a clear, honest picture of what we offer and what it costs." },
    ],
  },
  {
    heading: "Getting Started",
    items: [
      { q: "How do we get started?", a: "Book a free consultation. We'll learn about your business, your current setup, and what you need — then outline how we can help and what it costs." },
      { q: "How much does it cost?", a: "Pricing depends on your team size and the complexity of your HR and payroll needs. We'll give you a clear, honest picture during the consultation — no surprises." },
      { q: "Is the first consultation really free?", a: "Yes. The initial consultation is free and there's no obligation. It's how we both decide if we're a good fit." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Common questions about our HR, payroll, and admissions support. Don't see yours? Reach out — we're happy to help."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="section">
        <div className="container container-narrow">
          {groups.map((g) => (
            <div key={g.heading} style={{ marginBottom: "2.8rem" }}>
              <h2 style={{ fontSize: "var(--fs-h3)", marginBottom: "1.2rem", color: "var(--navy-800)" }}>
                {g.heading}
              </h2>
              <FaqList items={g.items} />
            </div>
          ))}
          <p className="text-center lead">
            Still have a question?{" "}
            <Link href="/contact" className="arrow-link" style={{ display: "inline-flex" }}>Contact us</Link>
          </p>
        </div>
      </section>

      <CTABand
        title="Let's talk about your business"
        text="Book a free, no-obligation consultation and get straight answers about HR and payroll support for your team."
      />
    </>
  );
}
