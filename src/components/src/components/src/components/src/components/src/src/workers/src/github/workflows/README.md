# AutoLabel (mobile-first PWA)

What this repo contains
- A mobile-first React + Tailwind PWA scaffold for AutoLabel.
- Client-side AI helpers (Tesseract.js, TensorFlow.js, ColorThief).
- Offline/local storage (localforage), queue helper, worker scaffold.
- Export helpers (PDF/ZIP), and GitHub Actions workflow to deploy to Pages.

Quick mobile steps to finish and publish (do these after Batch 5 commits)

1) Upload PWA icons (recommended)
- Repo → Add file → Upload files → select two PNGs from your phone:
  - public/icons/pwa-192.png
  - public/icons/pwa-512.png
- Commit.

2) Add Supabase secrets (optional but recommended for backups/history)
- Create free Supabase project: https://app.supabase.com
- In GitHub: Repo → Settings → Secrets and variables → Actions → New repository secret
  - Add: VITE_SUPABASE_URL (value: your Supabase URL)
  - Add: VITE_SUPABASE_ANON_KEY (value: anon key)

3) Wait for Actions to run
- After you committed the workflow file (.github/workflows/pages-deploy.yml), go to the Actions tab.
- Click the latest run and watch logs. If errors occur, copy the log or screenshot and share here — I’ll help debug.

4) Visit Pages
- When deploy succeeds, open the Pages URL shown in repo → Pages (or in Actions logs).
- On your phone, open the Pages URL and choose “Add to Home screen” to install PWA.

Optional local dev (if you have Termux / PC)
- npm ci
- npm run dev
- Open the provided local URL in your phone browser.

Troubleshooting tips
- If Actions fails on "npm ci", ensure package.json was committed and file names are correct.
- If build errors point to missing imports, check that file paths match exactly (case-sensitive).
- If you see 404 at https://<your-user>.github.io/<repo> after deploy, give it a few minutes or open repo → Pages to get the correct URL.

If you want, I can:
- Help debug any Actions failures (paste error log here).
- Provide a short how-to for creating Supabase project and obtaining secrets.
- Create a simple visual checklist for you to follow on phone.

License: MIT
