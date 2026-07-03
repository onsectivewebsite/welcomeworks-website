import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Photo from "@/components/Photo";
import Testimonials from "@/components/Testimonials";
import {
  ArrowRight, Check, Users, Wallet, Shield, Handshake,
  Layers, Clock, MapPin, ChevronRight, Presentation,
} from "@/components/icons";

const triggers = [
  { tag: "New hire", out: "correct setup in payroll from day one" },
  { tag: "Raise or promotion", out: "updated rate, right pay period, proper documentation" },
  { tag: "Parental / medical leave", out: "ESA obligations, ROE filing, coordinated return" },
  { tag: "Accommodation", out: "policy, records, and pay adjustments aligned" },
  { tag: "Termination", out: "ESA calculations, final pay, vacation pay, ROE — done correctly" },
];

const services = [
  {
    icon: <Layers />, href: "/integrated-hr-payroll", tag: "Most popular",
    title: "Integrated HR & Payroll",
    desc: "Your HR and payroll, handled together by one friendly team — so every hire, raise, and leave lands in payroll correctly, without the cost of full-time staff.",
  },
  {
    icon: <Wallet />, href: "/payroll-services", tag: "Standalone",
    title: "Payroll Services",
    desc: "Accurate, on-time payroll every pay period. We take care of CRA remittances, ROEs, T4s, and the ESA rules — so you don't have to.",
  },
  {
    icon: <Presentation />, href: "/hr-training", tag: "For your team",
    title: "HR Training",
    desc: "Practical, plain-language workshops that give owners and managers the confidence to handle everyday people situations the right way.",
  },
];

const whyPoints = [
  { icon: <Handshake />, title: "One friendly team", desc: "One team looks after everything to do with your people and their pay — no bouncing between vendors." },
  { icon: <Shield />, title: "Stay onside, stay protected", desc: "We keep you aligned with the ESA, CRA, and Human Rights Code, so small mistakes don't turn into big penalties." },
  { icon: <Users />, title: "Built for small business", desc: "Support sized — and priced — for small business. It's the HR and payroll help you'd hire if you could." },
  { icon: <Clock />, title: "Accurate and on time", desc: "We double-check every payroll run, so your team is paid correctly and on time, every time." },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">HR &amp; Payroll · Ontario Small Business</span>
            <h1>
              One friendly partner for your <span className="accent">people</span> and their <span className="accent">pay</span>.
            </h1>
            <p className="lead">
              You don&apos;t need to hire full-time HR and payroll staff to get it done right.
              WelcomeWorks gives Ontario small businesses connected HR and payroll support — so every
              hire, raise, and leave is handled properly, and nothing slips through the cracks.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book a Free Consultation <ArrowRight />
              </Link>
              <Link href="/integrated-hr-payroll" className="btn btn-ghost btn-lg">
                See how it works
              </Link>
            </div>
            <div className="hero-trust">
              <span><Check /> ESA &amp; CRA compliant</span>
              <span><Check /> One point of contact</span>
              <span><MapPin /> Milton, Ontario</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <Photo
                src="/images/small-business-owner.jpg"
                alt="A small business owner and customer at the front counter of a shop"
                ratio="4 / 3"
                priority
                sizes="(max-width: 900px) 90vw, 40vw"
              />
              <div className="hero-badge">
                <span className="ic"><Layers style={{ width: 20, height: 20 }} /></span>
                HR + Payroll,<br />coordinated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What we do</span>
            <h2>The HR &amp; payroll department you don&apos;t have to hire</h2>
            <p>Have it all handled together, get payroll on its own, or bring in training for your team — whatever fits where your business is right now.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link href={s.href} className="card" style={{ display: "block" }}>
                  <div className="card-icon">{s.icon}</div>
                  <span className="pill" style={{ fontSize: "0.72rem", padding: "0.25rem 0.7rem", marginBottom: "0.7rem", display: "inline-block" }}>{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="arrow-link" style={{ marginTop: "1rem" }}>
                    Learn more <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="text-center lead" style={{ marginTop: "2rem", maxWidth: "60ch", marginInline: "auto" }}>
            Helping a student in the family, too? We also offer{" "}
            <Link href="/admissions-support" className="arrow-link" style={{ display: "inline-flex" }}>
              Post-Secondary Admissions Support <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------- WHY TOGETHER (infographic) ---------------- */}
      <section className="section bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>The core idea</span>
            <h2>Every HR decision has a payroll consequence</h2>
            <p>When one team handles both, the information flows. When two vendors manage each separately, it doesn&apos;t — and errors follow.</p>
          </div>

          <Reveal>
            <div className="flow">
              <div className="flow-node hr">
                <span className="badge"><Users style={{ width: 16, height: 16 }} /> Human Resources</span>
                <ul className="trigger-list">
                  {triggers.map((t) => (
                    <li key={t.tag}>
                      <span className="arrow">→</span>
                      <span><span className="tag">{t.tag}</span> {t.out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flow-connector" aria-hidden="true">
                <Handshake />
              </div>

              <div className="flow-node pay">
                <span className="badge"><Wallet style={{ width: 16, height: 16 }} /> Payroll</span>
                <p style={{ color: "var(--ink-500)", textAlign: "left" }}>
                  Each event triggers a precise payroll action — the right rate, the right pay period,
                  the right filing, the right documentation.
                </p>
                <ul className="checklist simple" style={{ marginTop: "1rem" }}>
                  <li>Correct rates &amp; pay periods</li>
                  <li>ESA-compliant calculations</li>
                  <li>ROEs &amp; T4s filed on time</li>
                  <li>Records that stand up to audit</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="text-center mt-3">
            <Link href="/integrated-hr-payroll" className="btn btn-navy">
              Why HR and payroll belong together <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Why WelcomeWorks</span>
            <h2>Big-company know-how, small-business friendly</h2>
          </div>
          <div className="grid grid-4">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card">
                  <div className="card-icon">{p.icon}</div>
                  <h3 style={{ fontSize: "1.15rem" }}>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/why-welcomeworks" className="arrow-link">
              See how we compare to a full-time hire and to software <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- MEDIA BAND ---------------- */}
      <section className="section bg-mist">
        <div className="container">
          <div className="media-band">
            <Reveal className="media-text">
              <span className="eyebrow">A real partner</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.8rem 0 1rem" }}>
                Someone who knows your business — and picks up the phone
              </h2>
              <p className="lead" style={{ marginBottom: "1.4rem" }}>
                You get a knowledgeable point of contact, not a ticket queue. We handle the
                paperwork, the deadlines, and the difficult moments — hires, leaves, terminations —
                so you can stay focused on running your business.
              </p>
              <ul className="checklist">
                <li>Clear advice in plain language</li>
                <li>Documentation that protects you</li>
                <li>Accurate, on-time payroll every period</li>
              </ul>
            </Reveal>
            <Reveal>
              <Photo
                src="/images/team-meeting.jpg"
                alt="A small business team collaborating around a table with laptops"
                ratio="5 / 4"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- STATS / TRUST ---------------- */}
      <section className="section-tight bg-navy">
        <div className="container">
          <div className="stat-strip">
            <div className="stat"><b>2-in-1</b><span>HR &amp; payroll from one provider</span></div>
            <div className="stat"><b>ESA</b><span>Ontario compliance guidance</span></div>
            <div className="stat"><b>CRA</b><span>Remittances &amp; T4 filing</span></div>
            <div className="stat"><b>0</b><span>dropped balls between vendors</span></div>
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES teaser ---------------- */}
      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Who we serve</span>
            <h2>Sector-aware HR &amp; payroll for Ontario</h2>
            <p>Different industries, different rules — retail scheduling, restaurant tip handling, trades overtime, and more.</p>
          </div>
          <div className="pill-row" style={{ justifyContent: "center", maxWidth: 760, margin: "0 auto" }}>
            {["Retail & Hospitality", "Restaurants & Food Service", "Professional Services", "Trades & Construction", "Health & Wellness", "Non-Profit"].map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link href="/industries" className="btn btn-ghost">
              Explore industries we serve <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials />

      <CTABand
        title="Let's take HR & payroll off your plate"
        text="You don't need to hire a full-time team to get it done right. Book a free, friendly consultation and we'll map out connected HR and payroll support that fits your business."
      />
    </>
  );
}
