import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How WelcomeWorks Group Inc. uses cookies on this website, the types of cookies used, and how you can manage your choices.",
};

export default function CookiePolicy() {
  return (
    <PolicyPage
      title="Cookie Policy"
      intro="What cookies we use and how you can control them."
    >
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the
        site work properly and help us understand how it&apos;s used. This policy explains the
        cookies we use and how you can manage them.
      </p>

      <h2>Types of cookies we use</h2>
      <ul className="checklist simple">
        <li><strong>Essential</strong> — needed for the website to function. These are always on.</li>
        <li><strong>Analytics</strong> — help us understand how visitors use the site so we can improve it.</li>
        <li><strong>Marketing</strong> — may be used to make any future advertising more relevant.</li>
      </ul>

      <h2>Managing your choices</h2>
      <p>
        When you first visit, our cookie banner lets you <strong>Accept all cookies</strong> or{" "}
        <strong>Personalize</strong> your choices. You can also control cookies through your browser
        settings at any time. Essential cookies cannot be turned off, as the site needs them to work.
      </p>

      <h2>More information</h2>
      <p>
        For details on how we handle personal information, see our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. Questions? Email{" "}
        <a href="mailto:welcomeworksg@gmail.com">welcomeworksg@gmail.com</a>.
      </p>
    </PolicyPage>
  );
}
