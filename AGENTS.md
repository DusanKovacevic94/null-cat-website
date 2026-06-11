# Agent Instructions

## Project

Null Cat marketing website for an IT services company. The site is a bilingual Next.js landing page for startups and small or medium businesses that need automation, web development, AI integrations, data digitalisation, and practical technical partnership.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Resend for the contact API
- Docker Compose + Caddy for VPS deployment

## Important Operating Notes

- Do not start, stop, or restart the dev server unless the user explicitly asks. The user commonly runs it locally on port `3000`.
- Do not run `npm run build` while the user's dev server is running unless the user asks. Rebuilding can rewrite `.next` and cause stale chunk errors in the active dev server.
- Prefer static checks for normal edits:

```bash
npm run typecheck
npm run lint
```

- If a stale Next cache error appears, such as `Cannot find module './331.js'`, the usual fix is for the user to stop their dev server and run:

```bash
rm -rf .next
npm run dev
```

Do not run that cleanup yourself unless explicitly requested.

## Code Map

- `app/[locale]/page.tsx`: main bilingual landing page template for `/en` and `/sr`.
- `app/page.tsx`: redirects `/` to `/en`.
- `lib/i18n.ts`: all English and Serbian page copy.
- `components/ContactForm.tsx`: localized contact form UI.
- `lib/contact.ts`: contact payload validation and stable select values.
- `app/api/contact/route.ts`: Resend-backed contact form API.
- `components/Logo.tsx`: inline SVG logo.
- `components/ServiceConsole.tsx`: interactive services panel.
- `components/ScrollReveal.tsx`: scroll animation wrapper.
- `app/globals.css`: global styling, background image layer, animations.
- `public/bg.png`: main technology background image.
- `DEPLOYMENT.md`: production deployment instructions.

## Style Direction

- Dark, technical, sharp, and premium, but still practical.
- Keep the interface service-focused, not a generic SaaS landing page.
- Avoid literal Serbian translations. Serbian copy should sound natural for business and technical buyers.
- Use Latin Serbian unless the user asks otherwise.
- Keep hero copy short and high-impact.
- Avoid adding fake testimonials, client logos, or case studies.

## Contact Form Rules

- Current fields: name, email, company, project type, message.
- Budget range was intentionally removed.
- Project type values are stable IDs from `lib/contact.ts`; display labels are localized in `lib/i18n.ts`.
- The API email should use English labels for internal clarity.

## Deployment Rules

- Production is intended to run via Docker Compose.
- Caddy handles HTTPS.
- Required env vars:
  - `SITE_ADDRESS`
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`
- Next is configured with `output: "standalone"` for Docker.
