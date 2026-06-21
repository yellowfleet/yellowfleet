# YellowFleet

India's next-generation electric marine mobility company. Corporate presentation website built for government stakeholder meetings and public-facing credibility.

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS (v4, CSS-variable theme)
- **Motion:** Framer Motion
- **Backend:** Supabase (Postgres + client SDK)
- **Deployment:** Vercel

## Brand

| Token | Hex |
|---|---|
| Navy (primary) | `#002B6B` |
| Gold (accent) | `#F4B400` |
| White | `#FFFFFF` |

Tokens live in `src/app/globals.css` as CSS variables (`--color-navy`, `--color-gold`, etc.) and are exposed to Tailwind via `@theme inline`, so they're usable as `bg-navy`, `text-gold`, etc.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in Supabase values
npm run dev
```

## Project structure

```
src/
  app/                  routes (App Router): /, /about, /fleet, /projects, /sustainability, /contact
  components/
    layout/             page-level layout wrappers
    navigation/         header / nav
    footer/             footer
    sections/           homepage sections (hero, vision, etc.)
    ui/                 small reusable primitives (buttons, cards, etc.)
  content/              typed placeholder copy — single source of truth for site copy
  lib/
    supabase/           browser + server Supabase clients
    queries/             data-access functions (currently backed by content/, swap for
                         Supabase queries in Phase 2 with no component changes)
  types/                shared TypeScript types, mirrored to the Supabase schema
  hooks/                shared React hooks
```

## Content layer

All copy lives in `src/content/*.ts` as typed objects, not hardcoded inside components. This keeps content edits fast during early iteration and gives a clean seam for the Phase 2 Supabase swap.

- `content/company.ts` — company-wide copy (mission, vision, contact info)
- `content/fleet.ts` — placeholder vessel data, typed as `Vessel[]`
- `content/projects.ts` — placeholder project data, typed as `Project[]`

Files containing placeholder (non-final) content are explicitly flagged with a comment block at the top. **Do not ship placeholder content to a government-facing deployment without reviewing these files first.**

## Data layer (Phase 1 → Phase 2 path)

`src/lib/queries/*.ts` currently returns data from `content/*.ts`. When Supabase tables are live, only these files change — components calling `getFleet()` / `getProjects()` are unaffected.

## Database schema (planned, Supabase)

- `contact_inquiries` — id, name, email, phone, company, message, created_at
- `vessels` — id, name, description, capacity, range_km, speed_knots, image_url, active, created_at
- `projects` — id, title, slug, description, status, image_url, created_at
- `site_settings` — company_name, phone, email, address

## Scope (MVP)

**Included:** responsive multi-page site, contact form, Supabase integration, SEO fundamentals, Vercel deployment.

**Not included yet (Phase 2/3):** CMS, admin dashboard, authentication, booking engine, payments. The architecture is built so these can be added later without major refactoring.
