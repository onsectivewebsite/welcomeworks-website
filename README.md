# WelcomeWorks Group Inc. — Website

Marketing website for **WelcomeWorks Group Inc.**, a Vaughan, Ontario firm providing
integrated HR support and payroll administration for small businesses, plus supplementary
post-secondary admissions support.

Built with **Next.js (App Router)** + **TypeScript**. No CSS framework — a hand-built design
system in `app/globals.css` keyed to the brand (navy · white · green) with WCAG-minded contrast,
focus states, reduced-motion support, and full responsiveness.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/integrated-hr-payroll` | Integrated HR & Payroll (flagship) |
| `/payroll-services` | Payroll Services |
| `/admissions-support` | Post-Secondary Admissions Support |
| `/why-welcomeworks` | Why Choose WelcomeWorks |
| `/industries` | Industries We Serve |
| `/about` | About Us |
| `/faq` | FAQ |
| `/contact` | Contact (form) |

## Structure

- `app/` — routes, layout, global styles, `sitemap.ts`, `robots.ts`, API route
- `components/` — `Header`, `Footer`, `PageHero`, `CTABand`, `FaqList`, `ContactForm`, `Reveal`, `icons`
- `public/logo.jpeg` — brand logo

## Content notes

- Copy for **Integrated HR & Payroll**, **Payroll Services**, and **Admissions Support** is taken
  directly from the client brief. Home, Why Us, Industries, About, and the extended FAQ are
  professionally drafted and can be refined.
- **Images:** Labelled placeholders (`.imgph`) mark where authentic small-business / workplace
  photography should be dropped in. Replace them with real images and use `next/image`.

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which validates input and logs
the enquiry server-side. To deliver enquiries to `welcomeworksg@gmail.com`, wire an email provider
(Resend / SendGrid / SMTP) in the route handler — see the commented example there. Store any API
key in an environment variable (e.g. `RESEND_API_KEY`).

## Deploy

Any Next.js host works. Easiest is [Vercel](https://vercel.com): import the repo and deploy — no
config needed.
