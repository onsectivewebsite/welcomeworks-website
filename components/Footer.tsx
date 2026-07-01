import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo-mark.png" alt="WelcomeWorks Group logo" width={50} height={50} />
            <b>WelcomeWorks Group Inc.</b>
            <p>
              Integrated HR and payroll support for Ontario small businesses — one trusted partner
              for everything related to your people and their pay.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/integrated-hr-payroll">Integrated HR &amp; Payroll</Link>
            <Link href="/payroll-services">Payroll Services</Link>
            <Link href="/admissions-support">Admissions Support</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/why-welcomeworks">Why WelcomeWorks</Link>
            <Link href="/industries">Industries We Serve</Link>
            <Link href="/about">About Us</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
              <MapPin style={{ width: 18, height: 18, flex: "none", marginTop: 3 }} />
              Vaughan, Ontario
            </p>
            <a href="mailto:welcomeworksg@gmail.com" style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start" }}>
              <Mail style={{ width: 18, height: 18, flex: "none", marginTop: 3 }} />
              welcomeworksg@gmail.com
            </a>
            <Link href="/contact" style={{ color: "var(--green-400)", fontWeight: 700 }}>
              Book a Free Consultation →
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WelcomeWorks Group Inc. · Vaughan, Ontario</span>
          <span>HR support &amp; payroll administration for Ontario small businesses</span>
        </div>
      </div>
    </footer>
  );
}
