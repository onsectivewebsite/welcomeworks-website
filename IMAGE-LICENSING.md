# Image Licensing Audit

_Last reviewed: 2026-07-07_

**Bottom line:** The photos currently in `public/images/` were added without any recorded
source or license (the files carry no author/copyright metadata, and the commit that added them
—"add real imagery"— does not name where they came from). **Their provenance cannot be verified,
so we cannot currently guarantee they are free of copyright issues.** This document lists every
image, where it is used, and the recommended fix.

## How to make every image copyright-safe

Pick one of these for each photo:

1. **Use royalty-free stock (recommended, free).** Download a replacement from a source whose
   license permits free commercial use with no attribution, then save it over the same filename
   in `public/images/` — no code changes needed. Safe sources:
   - **Unsplash** — https://unsplash.com/license (free, commercial use OK, no attribution required)
   - **Pexels** — https://www.pexels.com/license/ (same)
   - **Pixabay** — https://pixabay.com/service/license-summary/ (same)
   Record the photo URL + photographer in the table below when you swap one in.
2. **Use the client's own photos.** Any photo WelcomeWorks owns (staff, office, real clients with
   written consent) is safe. Drop it in over the same filename.
3. **Buy a licensed image** from a paid stock library (Shutterstock, Adobe Stock, iStock) and keep
   the license receipt on file.

> Do NOT pull images from Google Image search, competitor sites, or social media — those are the
> common source of copyright claims.

## Photos in use

| File | Used on | Source / license | Status |
|------|---------|------------------|--------|
| `business-woman.jpg` | Contact (`/contact`) | _unknown_ | ⚠️ Verify or replace |
| `diverse-office.jpg` | Why WelcomeWorks (`/why-welcomeworks`) | _unknown_ | ⚠️ Verify or replace |
| `handshake.jpg` | Integrated HR & Payroll (`/integrated-hr-payroll`) | _unknown_ | ⚠️ Verify or replace |
| `hr-training.jpg` | HR Training (`/hr-training`) | _unknown_ | ⚠️ Verify or replace |
| `office-collab.jpg` | About (`/about`) | _unknown_ | ⚠️ Verify or replace |
| `payroll-desk.jpg` | Payroll Services (`/payroll-services`) | _unknown_ | ⚠️ Verify or replace |
| `retail-shop.jpg` | Industries (`/industries`) | _unknown_ | ⚠️ Verify or replace |
| `small-business-owner.jpg` | Home (`/`) | _unknown_ | ⚠️ Verify or replace |
| `students-campus.jpg` | Admissions Support (`/admissions-support`) | _unknown_ | ⚠️ Verify or replace |
| `team-meeting.jpg` | Home (`/`) | _unknown_ | ⚠️ Verify or replace |

## Logo / brand assets

| File | Notes | Status |
|------|-------|--------|
| `public/logo.png`, `public/logo.jpeg`, `public/logo-mark.png` | Company logo — supplied by the client, owned by WelcomeWorks | ✅ OK (confirm it's your own artwork) |
| `WhatsApp Image 2026-07-01 at 10.14.33.jpeg` (repo root) | Appears to be a client-supplied source image; not referenced by the site and can be deleted | ✅ / removable |

_After you confirm or replace each photo, update its "Source / license" cell and change the status
to ✅ so this file stays an accurate record._
