import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Photo from "@/components/Photo";
import { Handshake, Shield, Heart, Users, MapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WelcomeWorks Group Inc. is a Vaughan, Ontario HR and payroll firm helping small businesses manage their people and their pay — as a trusted, knowledgeable, approachable partner.",
};

const values = [
  { icon: <Handshake />, title: "Approachable", desc: "We speak plainly and stay accessible. No jargon walls, no ticket queues — a real partner who knows your business." },
  { icon: <Shield />, title: "Trustworthy", desc: "We treat compliance as protection and handle your data with complete discretion. What we tell you is honest and clear." },
  { icon: <Users />, title: "Knowledgeable", desc: "We work within Ontario's ESA, the Human Rights Code, and CRA requirements so you don't have to become an expert in them." },
  { icon: <Heart />, title: "Small-business first", desc: "We're built for the realities of small business — right-sized support, sensible cost, and care in every interaction." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WelcomeWorks"
        title="A trusted partner for your people and their pay"
        intro="WelcomeWorks Group Inc. helps Ontario small businesses handle HR and payroll the right way — without the cost of a full-time hire or the gaps of piecemeal vendors."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="prose">
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.7rem 0 1rem" }}>
                Built around a simple observation
              </h2>
              <p>
                Most small businesses treat HR and payroll as two separate things — different systems,
                sometimes different vendors, rarely coordinated. But every HR decision has a payroll
                consequence. When those functions aren&apos;t connected, errors follow, and small
                businesses are the ones left exposed.
              </p>
              <p>
                WelcomeWorks was built to close that gap. We bring HR and payroll together under one
                roof so information flows, filings are correct, and nothing falls through the cracks —
                delivered by a partner who actually knows your business.
              </p>
              <p>
                We think of ourselves as a knowledgeable business partner, not a traditional corporate
                consulting firm. Clear advice, careful documentation, and a steady hand when the
                complicated moments arrive.
              </p>
            </div>
            <Reveal>
              <Photo
                src="/images/office-collab.jpg"
                alt="Two colleagues celebrating at a desk in a small business office"
                ratio="4 / 3"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What we stand for</span>
            <h2>The way we work</h2>
          </div>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card">
                  <div className="card-icon">{v.icon}</div>
                  <h3 style={{ fontSize: "1.12rem" }}>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="section">
        <div className="container container-narrow text-center">
          <div className="card-icon" style={{ margin: "0 auto 1.2rem", background: "var(--navy-700)", color: "#fff", border: "none" }}>
            <MapPin />
          </div>
          <h2 style={{ fontSize: "var(--fs-h3)" }}>Based in Vaughan, serving Ontario</h2>
          <p className="lead" style={{ marginTop: "0.8rem" }}>
            WelcomeWorks Group Inc. is proud to support small businesses across Ontario from our home
            base in Vaughan. Wherever you are in the province, if you have employees, we can help.
          </p>
        </div>
      </section>

      <CTABand
        title="Let's build something dependable together"
        text="Book a free consultation and see what a trusted, knowledgeable HR and payroll partner can do for your business."
      />
    </>
  );
}
