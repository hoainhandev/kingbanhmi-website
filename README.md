
# Redesign Kingbanhmi

This is a code bundle for Redesign Kingbanhmi. The original project is available at https://www.figma.com/design/qgEz8iT2FVqO0ubG6qigTT/Redesign-Kingbanhmi.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Copy `.env.example` to `.env` and set the Google Apps Script web app URLs before submitting forms in production.

## Careers form setup

The Careers page (`/careers`) posts JSON to a **separate** Google Apps Script deployment from the Franchise form.

1. Create a new Google Sheet for career applications.
2. Open **Extensions → Apps Script**, paste the contents of [`apps-script/careers.gs`](apps-script/careers.gs), and save.
3. Update `CONFIG.HR_EMAIL` (and other values in the `CONFIG` block if needed).
4. Run **`setupSheet()`** once from the Apps Script editor to create the `Applications` tab and header row.
5. Deploy as a **Web app** (Execute as: Me, Who has access: Anyone) and copy the deployment URL.
6. Set `VITE_CAREERS_SCRIPT_URL` in your `.env` file to that URL.

The Franchise form continues to use `VITE_GOOGLE_SCRIPT_URL` and the existing `google_app_script.js` handler — do not change that script for Careers.
