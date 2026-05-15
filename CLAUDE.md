# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack & versions

- **Next.js 16.2** (App Router) + **React 19.2** — Breaking changes from earlier Next.js. Read `node_modules/next/dist/docs/` before writing framework-specific code.
- **Tailwind CSS v4** — Uses `@tailwindcss/postcss`. No `tailwind.config.ts`; theme is in CSS via `@theme` blocks in `src/app/globals.css`.
- **TypeScript 5**, strict mode. Path alias `@/*` → `src/*`.
- **react-hook-form** + **zod** for form validation, **ExcelJS** for xlsx read/write, **Framer Motion** for animations, **Lucide React** for icons.

## Commands

```bash
npm run dev        # Development server (Turbopack)
npm run build      # Production build + type-check
npm run start      # Production server
npm run lint       # ESLint
```

## Environment variables

Set in `.env.local` (not committed). Production domain is `admission-desk.online`.

| Variable | Purpose |
|---|---|
| `LEAD_WEBHOOK_URL` | Google Apps Script webhook for lead capture (durable storage on serverless) |
| `LEADS_EXPORT_TOKEN` | Protects `GET /api/leads/export` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook pixel |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads ID |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Google Ads conversion label |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification token |

## Architecture

Multi-page landing site for **admissiondesk** — free admission counselling for Uttarakhand universities. Business model: free counselling for students; partner universities compensate admissiondesk on enrollment.

### Page structure

- **`/`** — Home page. Composed from ~15 section components + `HomeLeadPopup` (auto-opens 1200ms after mount + on CTA clicks).
- **`/uttaranchal-university`** — Full college landing page. `UUPageContent` orchestrates ~20 sub-components in `src/components/college/`. Uses `HomeLeadPopup` with `university="Uttaranchal University"`.
- **`/graphic-era`** — College landing page. Uses `HomeLeadPopup` with `university="Graphic Era"`.
- **`/upes`**, **`/dev-bhoomi`** — Redirect to `/` (disabled).
- **`/thank-you`** — Post-submission confirmation, themed by `?college=` query param.
- **`/privacy`**, **`/terms`**, **`/about`**, **`/about-us`**, **`/policies`** — Static info pages. `/about` redirects to `/about-us`.

### Home page section order

`Hero` → `EditorialPromise` → `Partners` → `Programs` → `CTABand` → `Stats` → `PartnerLogos` → `Process` → `Placements` → `Testimonials` → `Counselling` → `FAQ`

### Popup form system

"Apply Now" / "Get free counselling" buttons do NOT scroll to `#counselling`. Instead they dispatch a custom event that opens a modal. The popup also **auto-opens** on every page mount (1200ms delay).

- **`HomeLeadPopup`** — Universal modal wrapper used on all pages. Auto-opens on mount, listens for `HOME_POPUP_EVENT`, backdrop click + Escape to close, body scroll lock. Accepts optional `university` prop: when provided, the university select is hidden; when omitted (home page), a university select is shown.
- **`HomePopupForm`** — The form inside the popup. Same UU cascading fields as all other forms. Accepts `onSuccess` callback and optional `university` prop.
- **`dispatchHomePopup()`** — Helper that fires `HOME_POPUP_EVENT`. Import and call from any client component.
- Callers: `Header`, `Hero`, `CTABand`, `Partners`, `StickyCTA`, `UUStickyCTA`, `UUApplyTrigger`.

### Form system

All 4 form components use the **same cascading field structure** (Level → Category → Programme → optional CSE track), posting to `POST /api/lead`. Shared logic lives in:

- **`src/lib/lead-form-schema.ts`** — Shared Zod schema (with `.superRefine()` for CSE track validation), `STATES` array, `resolveSubmittedProgram()`, `getCollegeSlug()`, default values.
- **`src/hooks/useCascadingPrograms.ts`** — Shared hook for cascading select logic (category/program/CSE option derivation, auto-reset on level/program change).

| Component | Where used | UI styling |
|---|---|---|
| `LeadForm` | Home page inline (counselling section) | Home page UI: `.card-paper`, pulsing dot ribbon, 2-col grid, university select |
| `HomePopupForm` | Inside `HomeLeadPopup` (all pages) | Home popup UI: `field-label`/`field-input`/`field-select`, 2-col grid, "or" divider removed |
| `UULeadForm` | UU page inline | CSS classes via `classes` prop, `useId()` for field IDs, 2-col grid |
| `ThemedLeadForm` | College pages inline (GE) | CSS classes via `classes` prop, 2-col grid. Does NOT accept `programs` prop — uses cascading fields. |

All forms fire Meta Pixel `Lead`, Google Ads conversion, and GA4 `generate_lead` on success, then redirect to `/thank-you?college=<slug>`. No WhatsApp fallback in any form.

### Lead capture (the core flow)

`POST /api/lead` (`src/app/api/lead/route.ts`) writes to two destinations:

1. **Local xlsx** — `data/leads.xlsx`, via `src/lib/leads-store.ts` (ExcelJS + serialized write queue).
2. **Google Sheets webhook** — If `LEAD_WEBHOOK_URL` is set, forwards as JSON to Google Apps Script (`scripts/google-sheet-webhook.gs`). Primary durable path on Vercel/Netlify.

Both must fail for the API to return 502/500. No silent data loss.

**Export**: `GET /api/leads/export` returns the xlsx, protected by `LEADS_EXPORT_TOKEN` (timing-safe comparison, query param or Bearer header).

### Data layer

- **`src/lib/constants.ts`** — All structured content: `COLLEGES` (4 universities), `VISIBLE_COLLEGES` (filtered subset for home page), `PROGRAMS` (6 program families), `STATS`, `PROCESS`, `FAQS`, `TOP_RECRUITERS`, `ADMITS`, `TESTIMONIALS` (6 student quotes), `PARTNER_LOGOS`, `DEHRADUN_COUNSELLING_COLLEGES`.
- **`src/lib/site.ts`** — Site config: name, contact (`admissions@admission-desk.online`, `+91 82736 25802`), social links, address. `PAGE_CONTACTS` (per-college phone/WhatsApp overrides), `ANALYTICS` (IDs from env vars).
- **`src/lib/uuPrograms.ts`** — UU programme data with cascading Level → Category → Programme + CSE specializations.

### Styling

Tailwind CSS v4. Design system in `:root` of `globals.css`:

- **Colors**: Forest greens (`--forest`, `--forest-deep`, `--moss`, `--sage`), ivory/cream (`--ivory`, `--cream`, `--parchment`), gold (`--gold`, `--gold-deep`, `--gold-soft`), ink (`--ink`, `--ink-soft`, `--muted`).
- **Shadows**: Stacked system — `--shadow-hairline`, `--shadow-subtle`, `--shadow-card`, `--shadow-float`, `--shadow-modal`. Never use a single heavy drop-shadow.
- **Section banding**: `.section-light` (cream bg), `.section-parchment` (warm parchment + radial gradient), `.section-dark` (forest-deep with dot pattern). Alternating creates depth through polarity flips.
- **Cards**: `.card-paper` (default), `.card-elevated` (feature highlights), `.card-dark` (dark surface). All have hover lift + shadow transitions.
- **Buttons**: `.btn-primary` (forest fill, pill), `.btn-secondary` (outline, pill), `.btn-whatsapp` (green fill, pill), `.btn-ghost` (transparent).
- **Utilities**: `.eyebrow`, `.rule-ornament`, `.swash-underline`, `.accent-dot`, `.number-callout`, `.container-x`, `.hairline`, `.tag`, `.field-input`, `.field-select`, `.field-label`.

### Shared icons

- **`src/components/icons/WhatsAppIcon.tsx`** — Official WhatsApp brand icon (green circle #25D366 + white logo, CC0). Use `<WhatsAppIcon size={N} />` in any component that needs the WhatsApp logo.

### Navigation pattern

`Header` is a shared component receiving optional `phone`, `whatsapp`, `applyLabel`, and `navLinks` props. The "Apply Now" button dispatches `HOME_POPUP_EVENT` to open the popup form. College pages can override contact info via `PAGE_CONTACTS` and pass custom nav links.
