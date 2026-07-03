import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://welcomeworksgroup.ca"),
  title: {
    default: "WelcomeWorks Group Inc. — Integrated HR & Payroll for Ontario Small Businesses",
    template: "%s · WelcomeWorks Group Inc.",
  },
  description:
    "Connected HR and payroll support for Ontario small businesses that can't afford full-time HR and payroll staff. One friendly partner in Milton, Ontario — so nothing slips through the cracks.",
  keywords: [
    "HR support Ontario",
    "payroll administration",
    "small business HR",
    "Milton payroll services",
    "ESA compliance",
    "integrated HR and payroll",
  ],
  openGraph: {
    title: "WelcomeWorks Group Inc. — Connected HR & Payroll",
    description:
      "Connected HR and payroll support for small businesses that can't afford full-time HR and payroll staff. A friendly Ontario partner for your people and their pay.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
