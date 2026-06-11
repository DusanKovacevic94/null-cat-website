# Project Context

## Business

Null Cat is a tech company offering practical IT work:

- Automation and process cleanup
- Web development
- AI integrations
- Data digitalisation
- Startup and SMB technical partnership

The site should attract buyers who have a messy operational or technical problem and need someone to turn it into a working system.

## Current Site Shape

The site is bilingual:

- `/en`: English
- `/sr`: Serbian
- `/`: redirects to `/en`

The landing page currently includes:

- Sticky header with logo, navigation, language switcher, and CTA
- Animated hero with a delivery/status panel
- Metrics strip
- Interactive services console
- Process section with scroll reveal
- Outcomes section
- Contact form
- Footer

## Brand Notes

- Logo: geometric cat outline in pine green, inline SVG in `components/Logo.tsx`.
- Color direction: near-black background, pine/teal accents, cool off-white text.
- Background image: `public/bg.png`, displayed through `.site-bg-image` in `app/globals.css`.
- Font: Plus Jakarta Sans for main UI text, Geist Mono retained for small console-style numeric labels.

## Serbian Copy Guidance

Use natural Serbian business/technical phrasing. Avoid direct English structures.

Preferred phrasing examples:

- `automatizacija procesa`, not just `automatizacija` when clarity matters.
- `konkretna isporuka`, not `izvršenje`.
- `tehnička analiza`, not `tehnički audit` unless the user prefers English business jargon.
- `prilagođene aplikacije`, not `custom sistemi`.
- `uvodni poziv`, not `discovery poziv`, unless intentionally using startup jargon.

Keep Latin script by default.

## Current UX Preferences From User

- User wants a stronger wow factor and interactive feel.
- User did not want the old hero-side logo card.
- User asked for shorter hero text.
- User prefers SR/EN text switcher over flag emoji.
- User wants background image visible but still controlled by gradients.
- User may be tuning visual values live, so keep visual edits small and reversible.
