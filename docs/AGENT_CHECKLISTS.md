# Agent Checklists

## Before Editing

- Check current user request against existing files.
- Do not assume the dev server is available or yours to control.
- Avoid running `npm run build` if the user has an active dev server, unless build verification is explicitly needed and accepted.

## After Normal Code or Copy Edits

Run:

```bash
npm run typecheck
npm run lint
```

Do not start or restart the server just to verify visuals unless the user asks.

## Bilingual Copy Edits

- Edit `lib/i18n.ts`.
- Keep English and Serbian structurally aligned unless the user asks for different positioning.
- Serbian should be idiomatic, not literal.
- Check both `en` and `sr` dictionary objects satisfy the same structure.

## Contact Form Edits

- UI labels live in `lib/i18n.ts`.
- Client behavior lives in `components/ContactForm.tsx`.
- Validation lives in `lib/contact.ts`.
- Email sending lives in `app/api/contact/route.ts`.
- Keep submitted select values stable and language-independent.

## Visual Design Edits

- Main page layout: `app/[locale]/page.tsx`.
- Global background/animations: `app/globals.css`.
- Logo SVG: `components/Logo.tsx`.
- Interactive services panel: `components/ServiceConsole.tsx`.
- Scroll reveal wrapper: `components/ScrollReveal.tsx`.

When tuning background visibility:

- `.site-bg-image` `opacity` controls the whole image layer.
- The `rgba(5, 7, 8, ...)` values in gradients are dark overlays; increasing them makes the image darker.
- If the user says "more visible", usually lower gradient alpha or raise only image layer opacity.

## Deployment Edits

- Docker production setup:
  - `Dockerfile`
  - `docker-compose.yml`
  - `Caddyfile`
  - `.dockerignore`
  - `DEPLOYMENT.md`
- Next standalone output is required for current Dockerfile.
- Keep secrets out of git. Use `.env` on the VPS.
