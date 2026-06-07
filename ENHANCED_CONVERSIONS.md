# Enhanced Conversions — Implementation Plan

**For:** Marketing team → share with any developer.
**What it does:** Sends hashed lead data (name, phone, email, state) to Google Ads so it can match more form submits back to ad clicks. Result: 5–15% more conversions reported + better Smart Bidding.

---

## What developer needs to do

### Step 1 — Add 2 environment variables

In `.env.local` (and in the production hosting dashboard):

```bash
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=AbC-d_EfGhIjKlMn
```

Marketing gets these from **Google Ads → Goals → Conversions → [your lead action] → Tag setup**. Look for `send_to: 'AW-1234567890/AbC-...'`. The part before `/` is the ID, after `/` is the label.

### Step 2 — Fire the conversion on form submit

After a successful lead submission, add this:

```ts
// Build user data (Google hashes it client-side before sending)
const userData = {
  email: values.email,
  phone_number: `+91${values.phone.replace(/\D/g, "").slice(-10)}`,
  address: {
    first_name: values.name.split(" ")[0],
    last_name: values.name.split(" ").slice(1).join(" "),
    country: "IN",
    region: values.state,
  },
};

// Attach user data + fire conversion
window.gtag("set", "user_data", userData);
window.gtag("event", "conversion", {
  send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
  user_data: userData,
});
```

That's it for the code.

### Step 3 — Turn it on in Google Ads (marketing does this)

1. Google Ads → **Goals → Conversions** → click the lead conversion action.
2. Open **"Enhanced conversions for leads"** → toggle **ON**.
3. Choose **"Google tag (gtag.js)"** as the method.
4. Tick the fields: email, phone, first name, last name, country, region.
5. Accept the customer data terms → Save.

### Step 4 — Verify

Install the **Tag Assistant Companion** Chrome extension → submit a test lead → confirm it shows **"Enhanced conversions: User-provided data detected"**.

---

## Status on this codebase

Already implemented. Files involved:
- `src/lib/enhanced-conversions.ts` — helper that formats user data
- `src/components/LeadForm.tsx`, `HomePopupForm.tsx`, `college/UULeadForm.tsx`, `college/ThemedLeadForm.tsx` — fire the conversion on submit
- `src/app/thank-you/ThankYouTracking.tsx` — re-fires on the thank-you page as a backup
- `src/app/layout.tsx` — loads `gtag.js`

**Only thing missing:** the 2 env vars in Step 1. Add them and redeploy.

> Heads-up: `NEXT_PUBLIC_*` vars are baked at build time. After adding them, you must redeploy — they aren't read at runtime.
