import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WelcomeWorks Group Inc. collects, uses, and protects your personal information under Canadian privacy law (PIPEDA).",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How we collect, use, and protect your personal information."
    >
      <p>
        WelcomeWorks Group Inc. (&ldquo;WelcomeWorks,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        respects your privacy. This policy explains what information we collect through this website,
        how we use it, and the choices you have. We handle personal information in line with
        Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA).
      </p>

      <h2>What we collect</h2>
      <p>When you contact us through the website, we may collect:</p>
      <ul className="checklist simple">
        <li>Your name and business name</li>
        <li>Your email address and phone number</li>
        <li>Details you choose to share about your business and enquiry</li>
        <li>Basic technical and usage data through cookies (see our <Link href="/cookie-policy">Cookie Policy</Link>)</li>
      </ul>

      <h2>How we use it</h2>
      <p>We use your information to:</p>
      <ul className="checklist simple">
        <li>Respond to your enquiry and provide the services you ask about</li>
        <li>Communicate with you about your consultation or engagement</li>
        <li>Improve and maintain our website</li>
        <li>Meet our legal and record-keeping obligations</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. We only share it with trusted service providers who
        help us operate (for example, email or hosting providers), and only as needed to provide our
        services — or where required by law.
      </p>

      <h2>How we protect it</h2>
      <p>
        We use reasonable safeguards to protect your information and handle it with confidentiality.
        We keep it only as long as needed for the purposes above or as required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask to access, correct, or delete the personal information we hold about you, or
        withdraw consent, subject to legal limits. To make a request, email us at{" "}
        <a href="mailto:welcomeworksg@gmail.com">welcomeworksg@gmail.com</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date above shows
        when it last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about your privacy? Email{" "}
        <a href="mailto:welcomeworksg@gmail.com">welcomeworksg@gmail.com</a> — WelcomeWorks Group
        Inc., Milton, Ontario.
      </p>
    </PolicyPage>
  );
}
