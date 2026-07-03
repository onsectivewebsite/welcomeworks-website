import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Photo from "@/components/Photo";
import FaqList from "@/components/FaqList";
import {
  Presentation, Users, Shield, ClipboardCheck, Chat, Scale,
  Heart, Check, ChevronRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "HR Training for Small Business Teams",
  description:
    "Practical, plain-language HR training and workshops for Ontario small business owners, managers, and teams — from ESA basics and respectful workplaces to hiring, performance conversations, and leaves.",
};

const topics = [
  { icon: <Scale />, title: "ESA essentials for managers", desc: "The Ontario Employment Standards Act basics every supervisor should know — hours, breaks, overtime, and public holidays, in plain English." },
  { icon: <Heart />, title: "Respectful workplace & harassment awareness", desc: "Build a workplace people feel safe in — what harassment and discrimination look like, and how to respond early." },
  { icon: <Users />, title: "Hiring & onboarding done right", desc: "Set new hires up for success, from fair interviews to a welcoming first week and the paperwork that protects everyone." },
  { icon: <Chat />, title: "Everyday performance conversations", desc: "How to give feedback, coach, and document tricky conversations without the dread — clear, kind, and consistent." },
  { icon: <Shield />, title: "Leaves & accommodation basics", desc: "Handle medical, parental, and personal leaves — and your duty to accommodate — with confidence and care." },
  { icon: <ClipboardCheck />, title: "Documentation & record-keeping", desc: "What to write down and why, so your records support your team and stand up if a question ever comes." },
];

const formats = [
  ["On-site or virtual workshops", "Interactive sessions delivered at your workplace or online — whatever works for your team."],
  ["Manager coaching", "One-on-one support for owners and new supervisors stepping into people-leadership."],
  ["New-hire orientation", "A friendly, consistent welcome so every new team member starts on the same page."],
  ["Lunch & learns", "Short, focused sessions on a single topic — easy to fit into a busy week."],
];

const faqs = [
  { q: "Who is the training for?", a: "Owners, managers, new supervisors, or your whole team. We tailor the depth and topics to who's in the room." },
  { q: "Do you come to us, or is it online?", a: "Either works. We deliver sessions on-site at your workplace or online — whatever is easiest for your team." },
  { q: "Can you build a session around our specific situation?", a: "Yes. We'll shape the content around your industry, your policies, and the real situations your team runs into." },
  { q: "Is this legal advice?", a: "No. We provide practical HR guidance and training aligned with Ontario's ESA and the Human Rights Code. For legal advice or proceedings, we'd recommend qualified legal counsel." },
  { q: "How much does training cost?", a: "It depends on the format and how many sessions you'd like. Reach out and we'll put together a simple, honest quote." },
];

const related = [
  ["Integrated HR & Payroll", "Ongoing HR and payroll support, together", "/integrated-hr-payroll"],
  ["Why Choose WelcomeWorks", "How we compare to a full-time hire", "/why-welcomeworks"],
  ["Contact Us", "Ask about a training session", "/contact"],
];

export default function HrTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="For Your Team"
        title="HR training that actually helps your team"
        intro="Practical, plain-language workshops that give owners and managers the confidence to handle everyday people situations — without needing an HR department of their own."
        crumbs={[{ label: "HR Training" }]}
      />

      <section className="section">
        <div className="container container-narrow prose">
          <p className="lead">
            Most small business managers learn HR the hard way — in the middle of a tricky situation,
            with no one to ask. It doesn&apos;t have to be like that.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Our training gives your team the everyday know-how to hire well, have the hard
            conversations kindly, and stay onside with Ontario&apos;s rules — all in friendly,
            jargon-free language. You bring the questions; we&apos;ll make it make sense.
          </p>
        </div>
      </section>

      {/* Media band */}
      <section className="section-tight">
        <div className="container">
          <div className="media-band">
            <Reveal className="media-text">
              <span className="eyebrow">Confidence, not jargon</span>
              <h2 style={{ fontSize: "var(--fs-h2)", margin: "0.8rem 0 1rem" }}>
                Give your managers a playbook they&apos;ll actually use
              </h2>
              <p className="lead">
                When your team understands the basics, small issues get handled early — before they
                become big, expensive ones. That&apos;s good for your people and good for your
                business.
              </p>
            </Reveal>
            <Reveal>
              <Photo
                src="/images/hr-training.jpg"
                alt="A diverse small business team taking part in a workplace training session"
                ratio="4 / 3"
                overlay
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-tight bg-mist">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>What we cover</span>
            <h2>Training built around real situations</h2>
            <p>Pick the topics that fit your team — or let us suggest a starting point.</p>
          </div>
          <div className="grid grid-3">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70}>
                <div className="card">
                  <div className="card-icon">{t.icon}</div>
                  <h3 style={{ fontSize: "1.12rem" }}>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>How it works</span>
            <h2>Training that fits a busy week</h2>
          </div>
          <div className="grid grid-4">
            {formats.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="card">
                  <div className="card-icon"><Presentation /></div>
                  <h3 style={{ fontSize: "1.08rem" }}>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="note-box mt-3" style={{ maxWidth: 760, margin: "2.5rem auto 0", textAlign: "center" }}>
            <Check style={{ width: 22, height: 22, margin: "0 auto 0.5rem", color: "var(--green-ink)" }} />
            Already work with us for HR &amp; payroll? Training slots in easily alongside your
            ongoing support — <strong>just ask and we&apos;ll set it up.</strong>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-paper">
        <div className="container container-narrow">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Common questions</span>
            <h2>Good to know</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="section-tight bg-mist">
        <div className="container container-narrow">
          <div className="section-head center">
            <h2 style={{ fontSize: "var(--fs-h3)" }}>Related pages</h2>
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
        title="Let's give your team the HR confidence it deserves"
        text="Tell us about your team and we'll suggest a simple training plan that fits — no jargon, no pressure."
        primaryLabel="Ask About Training"
      />
    </>
  );
}
