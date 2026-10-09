# Ignite Co. | Home Service Growth Website

A standalone, responsive Ignite Co. marketing website inspired by the layout language of trygtm.com, built with original Ignite messaging and an interactive lead journey demo. No pricing is displayed.

## Files
- `index.html`, `styles.css`, `script.js`: static website and interactive lead simulation
- `favicon.svg`: vector site icon
- `api/lead.js`: Vercel serverless contact form endpoint
- `supabase/migrations/20261009_ignite_website_leads.sql`: isolated lead capture table, safe to add to an approved Supabase project

## Run locally
`python3 -m http.server 8080` then open `http://localhost:8080` (the lead API works only after a Vercel deployment).

## Deploy
1. Create a GitHub repo dedicated to this site and push these files to its default branch.
2. Import the repo to Vercel (Framework: Other; build command and output directory unset) or deploy the files to a new Vercel project.
3. Apply the SQL migration to the chosen Supabase project.
4. In Vercel, set server-side environment variables `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` for the production environment, then redeploy.
5. Test a submission before routing paid traffic to the site. Until Supabase is configured, the contact form transparently falls back to a prefilled email to `asher.igniteco@gmail.com`.

## Editing
- Update brand/copy in `index.html`.
- Update the interactive demo steps in `script.js`.
- Update contact email in `index.html` and `script.js` if needed.
- If you have a calendar scheduling URL, change the CTA links or add it after lead capture.

## Privacy
The demo is illustrative. It does not display real clients, real messages, or guarantee any result. No third-party prospecting or payment functionality is included.