import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

type Props = {
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
};

export default function PolicyPage({ title, intro, updated = "July 2026", children }: Props) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container container-narrow prose">
          <p className="form-note" style={{ marginBottom: "1.6rem" }}>Last updated: {updated}</p>
          <div className="note-box" style={{ marginBottom: "2rem" }}>
            This page is a plain-language starting template provided for the website. WelcomeWorks
            Group Inc. should review and confirm the final wording (with legal counsel where
            appropriate) before relying on it. To publish your official document, replace this
            content or link the approved file.
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
