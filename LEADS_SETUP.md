# Lead capture — where the data lands

Every submission from the popup, the hero form, and any other
`ThemedLeadForm` instance hits the same endpoint:

```
POST /api/lead
```

From there it splits into two destinations, both real-time:

1. **Local Excel file** — `data/leads.xlsx` (works in dev and on any VPS / EC2 / Render / Railway / self-hosted box).
2. **Google Sheet** — set up below (works **everywhere**, including Vercel / Netlify / serverless).

You can run one, the other, or both at the same time.

---

## A. Local Excel file (default — no setup)

Already wired. Every lead appends a row to `data/leads.xlsx` with these
columns:

| Received At (IST) | Name | Phone | Email | State | Programme | University | Source URL | User Agent |
|---|---|---|---|---|---|---|---|---|

Open the file directly in Excel / Numbers, or download a timestamped copy:

```bash
# .env.local
LEADS_EXPORT_TOKEN="some-long-random-secret"
```

```bash
curl -OJ "http://localhost:3000/api/leads/export?token=some-long-random-secret"
# or
curl -H "Authorization: Bearer some-long-random-secret" \
     -o leads.xlsx \
     http://localhost:3000/api/leads/export
```

**Caveat:** on serverless hosts (Vercel, Netlify Functions, Lambda) the
filesystem is ephemeral — the file resets between deployments and cold
starts. Use the Google Sheet option below for those hosts.

---

## B. Google Sheet (durable, works everywhere)

This routes every lead into a Google Sheet you own. Zero cost, no API
keys, no servers to run.

### 1. Create the sheet

1. Go to <https://sheets.new>.
2. Rename it something obvious like **Edutech — Leads**.

### 2. Paste the receiver script

1. In your sheet: **Extensions → Apps Script**.
2. Delete the placeholder `function myFunction() {…}`.
3. Open `scripts/google-sheet-webhook.gs` from this repo, copy the
   entire file, paste it into the editor.
4. **Save** (⌘ S / Ctrl S). Give the project a name when it asks.

### 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Fill in:
   - **Description:** `Edutech leads webhook v1`
   - **Execute as:** *Me*
   - **Who has access:** *Anyone*
4. Click **Deploy**.
5. Google will ask you to authorise the script — click **Authorise access**,
   pick your account, click **Advanced → Go to … (unsafe)** (this is your
   own script, that warning is generic), then **Allow**.
6. Copy the **Web app URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfycb…/exec
   ```

### 4. Wire it up

In `.env.local`:

```dotenv
LEAD_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb…/exec"
```

Restart `npm run dev`. Submit a test lead. A new row should appear in
the **Leads** tab of your Google Sheet within a second.

### 5. Re-deploying after script changes

If you tweak the Apps Script, click **Deploy → Manage deployments →
✏️ → Version: New version → Deploy** to push the change. The URL
**stays the same**, so `.env.local` doesn't need to change.

---

## Production env (Vercel / Netlify / …)

Set these in your hosting dashboard:

| Variable | Value |
|---|---|
| `LEAD_WEBHOOK_URL` | Google Apps Script web app URL from step B4 |
| `LEADS_EXPORT_TOKEN` | Optional. Only needed if you want `/api/leads/export` to work in prod — but on serverless the local xlsx isn't durable, so the Google Sheet is your source of truth |

The API route forwards every lead to both destinations independently —
if the Google Sheet write fails for any reason, the local xlsx still
captures the lead, and vice versa.

---

## Common questions

**Q. Can I download from the Google Sheet as Excel?**
Yes — **File → Download → Microsoft Excel (.xlsx)** inside Google
Sheets.

**Q. What happens if both fail?**
The API returns HTTP 500 with the error so the form shows the user a
retry message. No silent loss.

**Q. Can I add more fields later?**
Yes — add the field to `ThemedLeadForm`, the zod schema in
`/api/lead/route.ts`, and the `COLUMNS` list in both
`src/lib/leads-store.ts` (local xlsx) and `scripts/google-sheet-webhook.gs`
(Google Sheet). Then re-deploy the Apps Script per step B5.

**Q. Where's the master test?**
```bash
curl -X POST http://localhost:3000/api/lead \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","phone":"+91-9876543210","email":"t@test.in","state":"Uttarakhand","program":"B.Tech CSE / AI / Cyber","university":"Uttaranchal University","consent":true}'
```
Both `data/leads.xlsx` and the Google Sheet should have a new row.
