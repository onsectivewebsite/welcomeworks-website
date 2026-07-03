import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to your use of the WelcomeWorks Group Inc. website.",
};

export default function Terms() {
  return (
    <PolicyPage
      title="Terms of Use"
      intro="The terms that apply when you use this website."
    >
      <p>
        By using this website, you agree to these terms. If you don&apos;t agree, please don&apos;t
        use the site.
      </p>

      <h2>Information only</h2>
      <p>
        The content on this website is provided for general information about WelcomeWorks Group Inc.
        and our services. It is not legal, tax, or professional advice, and it doesn&apos;t create a
        client relationship on its own. For advice about your situation, please contact us or a
        qualified professional.
      </p>

      <h2>No guarantees</h2>
      <p>
        We work hard to keep the site accurate and up to date, but we don&apos;t guarantee it is
        error-free or always available. Details of our services may change.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The WelcomeWorks name, logo, and website content are owned by WelcomeWorks Group Inc. Please
        don&apos;t copy or reuse them without our permission.
      </p>

      <h2>External links</h2>
      <p>
        Our site may link to other websites we don&apos;t control. We&apos;re not responsible for
        their content or practices.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Province of Ontario and the laws of Canada that
        apply there.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:welcomeworksg@gmail.com">welcomeworksg@gmail.com</a>.
      </p>
    </PolicyPage>
  );
}
