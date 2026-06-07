# Project Stage

**As of 2026-05-25** — Branch: `main` (clean)

## Current stage: Production / Post-launch polish

The site is **live and capturing leads**. Recent work is focused on UI bug fixes, image issues, and analytics tuning rather than new feature development.

## What is done

### Pages (shipped)
- `/` — Home page (Hero → Promise → Partners → Programs → CTABand → Stats → PartnerLogos → Process → Placements → Testimonials → Counselling → FAQ)
- `/uttaranchal-university` — Full college landing page (~20 sub-components)
- `/graphic-era` — College landing page
- `/thank-you` — Themed by `?college=` query param
- `/about-us`, `/privacy`, `/terms`, `/policies` — Static info pages
- `/upes`, `/dev-bhoomi` — Currently redirect to `/` (disabled)

### Core systems (working)
- **Lead capture pipeline** — `POST /api/lead` writes to local xlsx + Google Sheets webhook (dual-write, no silent data loss)
- **Lead export** — `GET /api/leads/export`, token-protected
- **Popup form system** — `HomeLeadPopup` auto-opens on every page (1200ms delay) + on CTA click via `HOME_POPUP_EVENT`
- **4 form variants** sharing cascading Level → Category → Programme + CSE track logic (`useCascadingPrograms`, shared Zod schema)
- **Analytics fully wired** — GTM, Meta Pixel `Lead`, Google Ads conversion, GA4 `generate_lead` (including on `/thank-you`)
- **Phone validation + submission timing** on forms
- **Cloudflare Turnstile** integration
- **SEO** — `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, structured data, GSC verification

### Stack in place
- Next.js 16.2 (App Router) + React 19.2
- Tailwind CSS v4 (theme in `globals.css`)
- TypeScript strict, ExcelJS, react-hook-form + zod, Framer Motion

## Recent work (last 20 commits)

Theme: **UI polish + analytics correctness**, not feature build-out.

- Image bug fix
- UI bugs + thank-you page GTM fix
- Form area UI fix
- Dev Bhoomi page marked ready (but route currently redirects)
- GTM enhancements, thank-you page GTM, multiple GTM test iterations
- Phone validation + submission time
- Cloudflare integration update
- Uttaranchal page completion

## What's not done / open questions

- **`/upes` and `/dev-bhoomi`** — Routes exist but redirect to `/`. Dev Bhoomi was marked "page ready" in commits but is still disabled. Decide whether to ship or remove.
- **No automated tests** in the repo. No `test` script in `package.json`.
- **`examplsource.txt` (313KB) and `uu-full-1.jpeg` (981KB)** sit at the repo root — likely cleanup candidates.

## How to run

```bash
npm run dev     # Turbopack dev server
npm run build   # Production build + type-check
npm run lint    # ESLint
```

Required `.env.local` keys are documented in `CLAUDE.md`.
