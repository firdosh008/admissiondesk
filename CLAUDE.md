# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack & versions

- **Next.js 16.2** (App Router) + **React 19.2** — This version has breaking changes from earlier Next.js. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
- **Tailwind CSS v4** — Uses `@tailwindcss/postcss` in PostCSS config. No `tailwind.config.ts`; theme is defined in CSS via `@theme` blocks in `src/app/globals.css`.
- **TypeScript 5**, strict mode. Path alias `@/*` → `src/*`.
- **Framer Motion** for animations, **Lucide React** for icons, **react-hook-form** + **zod** for form validation, **ExcelJS** for xlsx read/write.

## Commands

```bash
npm run dev        # Development server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

## Environment variables

Set in `.env.local` (not committed):

| Variable | Purpose |
|---|---|
| `LEAD_WEBHOOK_URL` | Google Apps Script webhook for lead capture (primary durable storage) |
| `LEADS_EXPORT_TOKEN` | Protects the `GET /api/leads/export` endpoint |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (defaults to `https://admissiondesk.in`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (defaults to `GTM-W6RHJM8L`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook pixel |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads ID for conversion tracking |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Google Ads conversion label |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification token |

## Architecture

This is a multi-page landing site for **admissiondesk**, a free admission counselling service for Uttarakhand universities. The business model: students get free counselling; partner universities compensate admissiondesk when students enroll.

### Page structure

- **`/`** — Home page (`src/app/page.tsx`). Page sections are composed from shared components: `Header`, `Hero`, `Promise`, `Partners`, `Programs`, `Stats`, `Process`, `Placements`, `Counselling`, `FAQ`, `Footer`, `StickyCTA`, and `StructuredData` (JSON-LD schemas).
- **`/uttaranchal-university`** — College-specific page. Uses `UUPageContent` which orchestrates ~20 college sub-components (`UUHeroSlider`, `UULeadForm`, `UUProgramFinder`, etc.) all in `src/components/college/`.
- **`/graphic-era`**, **`/upes`**, **`/dev-bhoomi`** — Thinner college pages (mostly lead-gen with some brand content).
- **`/thank-you`** — Post-form submission confirmation. Renders a college-themed thank you page based on `?college=` query param.
- **`/privacy`**, **`/terms`**, **`/about`**, **`/about-us`**, **`/policies`** — Static-ish legal/info pages.

### Lead capture (the core flow)

Every form submission hits `POST /api/lead` (`src/app/api/lead/route.ts`). From there it splits into two independent destinations:

1. **Local xlsx** (`data/leads.xlsx`) — always attempted, works on any Node.js host. Uses `src/lib/leads-store.ts` which wraps ExcelJS with a serialized write queue to avoid corruption from concurrent writes.
2. **Google Sheets webhook** — if `LEAD_WEBHOOK_URL` is configured, the record is forwarded as JSON to a Google Apps Script endpoint (`scripts/google-sheet-webhook.gs`). This is the durable path on serverless hosts (Vercel/Netlify) where the local filesystem is ephemeral.

If both fail, the API returns 502/500 so the form shows a retry message. No silent data loss.

**Lead export**: `GET /api/leads/export` returns the xlsx file, protected by `LEADS_EXPORT_TOKEN` (timing-safe comparison, accepted via query param or Bearer header).

### Form pattern

`ThemedLeadForm` (`src/components/college/ThemedLeadForm.tsx`) is a generic client component that accepts CSS class strings as props (`classes.form`, `classes.field`, `classes.button`, etc.). Each college page passes its own themed Tailwind classes, making the same form render in the college's brand colors. Validation uses zod schema + react-hook-form. On success it fires Meta Pixel `Lead` event, Google Ads conversion, GA4 `generate_lead` event, then redirects to `/thank-you?college=<slug>`.

The `UULeadForm` component is a more complex variant with cascading programme selection (Level → Category → Programme → CSE track) specific to Uttaranchal University, using the same `/api/lead` endpoint.

### Data layer

- **`src/lib/constants.ts`** — All structured content: `COLLEGES` array (4 universities with stats, recruiters, highlights), `PROGRAMS` (program families), `STATS`, `PROCESS` steps, `FAQS`, `TOP_RECRUITERS`, `ADMITS`. `VISIBLE_COLLEGES` is a filtered subset shown on the home page.
- **`src/lib/site.ts`** — Site-wide config: name, contact info, social links, address. Plus `PAGE_CONTACTS` (per-college phone/WhatsApp overrides) and `ANALYTICS` (IDs from env vars).
- **`src/lib/uuPrograms.ts`** — Uttaranchal University programme data with cascading Level → Category → Programme + CSE specialization tracks.

### Styling

Tailwind CSS v4 with a design system of CSS custom properties defined in `:root` of `globals.css`: forest greens (`--forest`, `--forest-deep`), ivory/cream tones (`--ivory`, `--cream`), gold accents (`--gold`, `--gold-deep`). Components reference these via `text-[color:var(--forest)]` etc. Utility classes like `.container-x`, `.btn-primary`, `.btn-whatsapp` are defined in globals.css `@layer utilities`.
