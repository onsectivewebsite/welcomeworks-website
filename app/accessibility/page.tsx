import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "WelcomeWorks Group Inc.'s commitment to an accessible website, aligned with WCAG 2.1 AA and Ontario's AODA.",
};

export default function Accessibility() {
  return (
    <PolicyPage
      title="Accessibility"
      intro="Our commitment to a website everyone can use."
    >
      <p>
        WelcomeWorks Group Inc. is committed to making our website welcoming and usable for everyone,
        including people with disabilities.
      </p>

      <h2>Our approach</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, and to
        support the goals of Ontario&apos;s Accessibility for Ontarians with Disabilities Act (AODA).
        In practice, that means we work toward:
      </p>
      <ul className="checklist simple">
        <li>Clear, readable text with strong colour contrast</li>
        <li>Keyboard-friendly navigation and visible focus states</li>
        <li>Descriptive text for images and meaningful headings</li>
        <li>Support for reduced-motion preferences</li>
        <li>A responsive layout that works across devices</li>
      </ul>

      <h2>Feedback</h2>
      <p>
        We&apos;re always improving. If you run into a barrier on our website, or need information in
        another format, please let us know and we&apos;ll do our best to help. Email{" "}
        <a href="mailto:welcomeworksgroupca@gmail.com">welcomeworksgroupca@gmail.com</a> and we&apos;ll respond
        as quickly as we can.
      </p>
    </PolicyPage>
  );
}
