import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i}>
                <span aria-hidden="true"> / </span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
