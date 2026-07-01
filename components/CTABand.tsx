import Link from "next/link";
import { ArrowRight, Mail } from "./icons";

type Props = {
  eyebrow?: string;
  title: string;
  text: string;
  primaryLabel?: string;
};

export default function CTABand({
  eyebrow = "Let's talk",
  title,
  text,
  primaryLabel = "Book a Free Consultation",
}: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <span className="eyebrow" style={{ justifyContent: "center", color: "var(--green-400)" }}>
            {eyebrow}
          </span>
          <h2 style={{ marginTop: "0.8rem" }}>{title}</h2>
          <p>{text}</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              {primaryLabel} <ArrowRight />
            </Link>
            <a href="mailto:welcomeworksg@gmail.com" className="btn btn-ghost btn-lg">
              <Mail style={{ width: 18, height: 18 }} /> welcomeworksg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
