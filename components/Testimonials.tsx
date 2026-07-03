import Link from "next/link";
import { approvedTestimonials } from "@/data/testimonials";
import Reveal from "@/components/Reveal";
import { Star, Chat, ArrowRight } from "@/components/icons";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < n ? "on" : "off"} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const items = approvedTestimonials;

  return (
    <section className="section bg-mist">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>In their words</span>
          <h2>What our clients say</h2>
          <p>We only ever publish reviews with our clients&apos; permission and our own approval.</p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-3">
            {items.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <figure className="testimonial">
                  {t.rating ? <Stars n={t.rating} /> : null}
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <b>{t.name}</b>
                    <span>
                      {t.role}, {t.company}
                      {t.location ? ` · ${t.location}` : ""}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="testimonial-empty">
            <div className="card-icon" style={{ margin: "0 auto 1.1rem" }}>
              <Chat />
            </div>
            <h3 style={{ fontSize: "var(--fs-h3)" }}>Reviews coming soon</h3>
            <p>
              We&apos;re gathering feedback from the Ontario small businesses we work with. Approved
              client reviews will appear here — published only with our clients&apos; permission and
              our approval.
            </p>
            <p style={{ marginTop: "0.4rem" }}>
              Worked with us and happy to share your experience?{" "}
              <Link href="/contact" className="arrow-link" style={{ display: "inline-flex" }}>
                Send us a note <ArrowRight />
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
