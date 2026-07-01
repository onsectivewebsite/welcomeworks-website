"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Close, ArrowRight } from "./icons";

const services = [
  { href: "/integrated-hr-payroll", title: "Integrated HR & Payroll", desc: "Our flagship service" },
  { href: "/payroll-services", title: "Payroll Services", desc: "Standalone payroll administration" },
  { href: "/admissions-support", title: "Admissions Support", desc: "Post-secondary guidance" },
];

const mainNav = [
  { href: "/why-welcomeworks", label: "Why Us" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="WelcomeWorks Group — home">
          <Image src="/logo.jpeg" alt="WelcomeWorks Group logo" width={46} height={46} priority />
          <span className="brand-text">
            <b>WelcomeWorks</b>
            <span>Group Inc.</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <div className="nav-item">
            <button className="nav-trigger" aria-haspopup="true">
              Services <ChevronDown />
            </button>
            <div className="dropdown" role="menu">
              {services.map((s) => (
                <Link key={s.href} href={s.href} role="menuitem">
                  <strong>{s.title}</strong>
                  <small>{s.desc}</small>
                </Link>
              ))}
            </div>
          </div>
          {mainNav.map((n) => (
            <Link key={n.href} href={n.href} className={pathname === n.href ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link href="/contact" className="btn btn-primary btn-nav-desktop">
            Book a Consultation <ArrowRight />
          </Link>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-nav${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <button className="m-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Close />
          </button>
          <span className="m-label">Services</span>
          {services.map((s) => (
            <Link key={s.href} href={s.href}>{s.title}</Link>
          ))}
          <span className="m-label">Company</span>
          {mainNav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary btn-lg">
            Book a Consultation <ArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
