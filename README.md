# DIVINE Solutions — Website

A plain Vite + React + React Router rebuild of the DIVINE Solutions site (converted from the original TanStack Start version).

## Stack
- Vite + React 19 + TypeScript
- React Router v6 (client-side routing)
- Tailwind CSS v4
- Google Apps Script + Google Sheets (contact form submissions — see below)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Pages
- `/` — Home
- `/services` — Services
- `/portfolio` — Portfolio (ELITE Construction USA, Pbody's, Roma Italian Restaurant)
- `/about` — About
- `/contact` — Contact

There is no Careers page — it was intentionally removed.

## Contact form setup (Google Sheets) — ACTION REQUIRED

The contact form at `/contact` posts directly to a Google Apps Script web app, which appends every submission as a new row in a Google Sheet you own. There's no third-party service, no email service, and no submission cap — just a Sheet acting as your lead list.

### Steps

1. Create a new Google Sheet (just a blank one, any name).
2. Rename the first tab to **Submissions** (or update `SHEET_NAME` in the script if you'd rather keep a different name).
3. In the Sheet, go to **Extensions → Apps Script**.
4. Delete any starter code, then copy the full contents of `apps-script/Code.gs` (included in this project) into the editor.
5. Click **Deploy → New deployment**, choose type **Web app**, set "Execute as" to **Me** and "Who has access" to **Anyone**, then click **Deploy**.
6. Google will ask you to authorize permissions (it needs to write to your Sheet) — approve them.
7. Copy the **Web app URL** it gives you. It looks like `https://script.google.com/macros/s/XXXXXXXX/exec`.
8. Open `src/pages/Contact.tsx` and replace the placeholder near the top of the file:

```ts
const FORM_ENDPOINT = "YOUR_APPS_SCRIPT_WEB_APP_URL";
```

with the real URL from step 7.

9. Save, redeploy (or restart `npm run dev`), and submit a test message from the live form. A new row should appear in your Sheet within a few seconds.

**Where form data goes today:** every submission becomes a row in your Google Sheet with timestamp, name, email, project type, and message — searchable, sortable, exportable to CSV, and entirely under your control with no third-party storing it. There is no email notification built in by default; if you'd like one, a few lines can be added inside `Code.gs` using `MailApp.sendEmail()` to also notify divinesolutionsdev@gmail.com whenever a row is added — let your developer know if you want this added.

**Important:** if you ever redeploy the Apps Script with code changes, choose "New deployment" (not "Manage deployments → edit") if you want a fresh URL, or "Manage deployments → Edit → Deploy" to keep the same URL active with updated code.

## Notes on placeholder content still in the codebase

- **About page team section**: removed for now. There's a natural slot for it between "What we believe" (values) and the stats band in `src/pages/About.tsx` — add it back in once you have real team members to feature.
- **Portfolio images**: the three project cards currently reuse the original generic stock-style placeholder images (`work-web.jpg`, `work-mobile.jpg`, `work-ecom.jpg`) since real screenshots weren't provided. Swap these for actual screenshots of constructionelite.pages.dev, pbody.pages.dev, and italianroma.pages.dev for accuracy.
