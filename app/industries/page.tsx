import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Photo from "@/components/Photo";
import { Store, Utensils, FileText, Wrench, HeartPulse, Heart, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Sector-aware HR and payroll for Ontario small businesses — retail, restaurants, professional services, trades, health & wellness, and non-profits. Each sector has its own rules; we know them.",
};

const industries = [
  {
    icon: <Store />, title: "Retail & Hospitality",
    desc: "Variable schedules, part-time and seasonal staff, and public-holiday pay make retail payroll deceptively complex.",
    points: ["Public holiday & premium pay", "Part-time & seasonal onboarding", "Scheduling-driven hours tracking"],
  },
  {
    icon: <Utensils />, title: "Restaurants & Food Service",
    desc: "High turnover, tipped roles, and mixed hourly teams demand accurate records and fast, correct onboarding.",
    points: ["Tip & gratuity handling", "High-turnover ROEs & final pay", "Overtime across split shifts"],
  },
  {
    icon: <FileText />, title: "Professional Services",
    desc: "Salaried teams, commission structures, and growth hiring benefit from clean contracts and coordinated pay changes.",
    points: ["Employment contracts & offers", "Commission & bonus processing", "Promotion & raise documentation"],
  },
  {
    icon: <Wrench />, title: "Trades & Construction",
    desc: "Project-based crews and overtime rules require careful hours tracking and compliant termination handling.",
    points: ["Overtime per Ontario ESA", "Job classification & rates", "Layoff & recall documentation"],
  },
  {
    icon: <HeartPulse />, title: "Health & Wellness",
    desc: "Clinics and practices juggle mixed employment types, leaves, and accommodation obligations.",
    points: ["Leave & accommodation support", "Mixed hourly / salaried payroll", "Policy & handbook development"],
  },
  {
    icon: <Heart />, title: "Non-Profit & Community",
    desc: "Lean teams and grant-funded roles need dependable, cost-effective HR and payroll they can trust.",
    points: ["Cost-effective administration", "Grant-role classification", "Compliant record-keeping"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Sector-aware HR & payroll for Ontario"
        intro="Different industries carry different rules — scheduling, tips, overtime, seasonal hiring. We tailor HR and payroll support to how your sector actually operates."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="section-tight">
        <div className="container">
          <div className="media-band">
            <Reveal className="media-text">
              <span className="eyebrow">Local businesses, local rules</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.8rem 0 1rem" }}>
                We speak your sector&apos;s language
              </h2>
              <p className="lead">
                A retail schedule, a restaurant&apos;s tipped roles, a trades crew&apos;s overtime —
                each carries its own compliance quirks. We shape HR and payroll around how your
                business actually operates day to day.
              </p>
            </Reveal>
            <Reveal>
              <Photo
                src="/images/retail-shop.jpg"
                alt="Interior aisle of a small retail shop"
                ratio="4 / 3"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) * 80}>
                <div className="card">
                  <div className="card-icon">{ind.icon}</div>
                  <h3 style={{ fontSize: "1.15rem" }}>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <ul className="checklist simple" style={{ marginTop: "1rem" }}>
                    {ind.points.map((p) => <li key={p} style={{ fontSize: "0.92rem" }}>{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="note-box mt-3" style={{ maxWidth: 760, margin: "3rem auto 0", textAlign: "center" }}>
            <Users style={{ width: 22, height: 22, margin: "0 auto 0.6rem", color: "var(--green-600)" }} />
            Don&apos;t see your industry? We work with small businesses across Ontario. If you have
            employees, we can help — <strong>reach out and we&apos;ll talk through your specifics.</strong>
          </div>
        </div>
      </section>

      <CTABand
        title="HR & payroll tuned to your sector"
        text="Tell us about your business and the way your team works — we'll show you how integrated support fits your industry."
      />
    </>
  );
}
