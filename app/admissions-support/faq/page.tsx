import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FaqList from "@/components/FaqList";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Admissions Support FAQs",
  description:
    "Common questions about WelcomeWorks post-secondary admissions support — how it works, what we can and can't do, costs, and guidance for students, parents, and international applicants.",
};

const faqs = [
  { q: "Do you work with specific colleges or universities?", a: "We provide general guidance for Ontario and Canadian post-secondary institutions. We'll discuss your specific targets during our initial conversation." },
  { q: "Can you guarantee I'll get accepted?", a: "No. And be cautious of any service that claims they can. Admission decisions rest entirely with the educational institution. We help you understand the process and put together a strong application." },
  { q: "Can parents contact you on behalf of their child?", a: "Yes. Parents and families are welcome to reach out. We're happy to help parents understand the process so they can support their child effectively." },
  { q: "Do you help with international student visa applications?", a: "We provide general information about the admissions process for international students. For immigration and visa matters, consult a Regulated Canadian Immigration Consultant (RCIC) or qualified immigration lawyer." },
  { q: "How much does admissions support cost?", a: "Contact us to discuss your specific situation. We'll give you a clear, honest picture of what we offer and what it costs." },
];

export default function AdmissionsFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions Support"
        title="Admissions support, answered"
        intro="Common questions about our post-secondary admissions support. Don't see yours? Reach out — we're happy to help."
        crumbs={[
          { label: "Admissions Support", href: "/admissions-support" },
          { label: "FAQs" },
        ]}
      />

      <section className="section">
        <div className="container container-narrow">
          <FaqList items={faqs} />
          <p className="text-center mt-2">
            <Link href="/admissions-support" className="arrow-link" style={{ display: "inline-flex" }}>
              Back to Admissions Support <ArrowRight />
            </Link>
          </p>
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
