import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div className="container container-narrow text-center">
        <span className="eyebrow" style={{ justifyContent: "center" }}>404</span>
        <h1 style={{ fontSize: "var(--fs-h1)", margin: "0.8rem 0 0.6rem" }}>Page not found</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Back to home <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
