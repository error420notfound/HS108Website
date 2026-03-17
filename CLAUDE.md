# HS108 Website — Claude Context File

This file is read automatically by Claude at the start of every session.
It documents the project plan, decisions made, work completed, and rules to follow.

---

## Project Overview

**Client:** HS108 (Design Studio)
**Domain:** hs108.in (GitHub Pages, custom CNAME)
**Framework:** Astro 4.16 (static output)
**Repo:** `/Users/hs108/Downloads/Vedik's Identity/VS Code/HS108 Website/HS108Website`

HS108 is an independent design studio. This is a full multi-page marketing + portfolio site
rebuilt from a single HTML file into a proper Astro project.

---

## Design Direction: Brutalist / Bold

This is the most important creative decision. Do NOT drift from it.

### Colour System

Full orange scale is defined in `global.css`. Key semantic tokens:

| Token | Value | Use |
|---|---|---|
| `--surface-base` | `#FFE1D8` (white-native) | Page background |
| `--surface-elevated` | `#FFF4F0` (orange-50) | Alt sections, cards |
| `--black-native` | `#120600` | Text, borders, inverted bg |
| `--accent` / `--orange-500` | `#ED582A` | Primary accent, hover fills |
| `--accent-strong` / `--orange-700` | `#B13F1C` | Strong hover, blockquote colour |
| `--action-primary-bg` | `#ED582A` | Filled buttons |
| `--action-inverse-bg` | `#120600` | Dark/inverted buttons |
| `--text-on-dark` | `#FFE1D8` (orange-100) | Text on dark sections |

- **Inverted sections:** `#120600` background with `#FFE1D8` text
- Legacy aliases (`--c-yellow`, `--c-black`, `--c-white`) still work in components

### Typography

- **Display/Headlines:** `Instrument Serif` — regular weight, italic style is the signature treatment
- **Body:** `Geist` — clean geometric sans, 400/500 weight
- **Micro copy / CTAs / Labels:** `Geist Mono` — 500 weight, uppercase, letter-spaced
- Loaded via Google Fonts CDN (TODO: self-host)

**Font variable names:**
- `--font-display` → Instrument Serif
- `--font-body` → Geist
- `--font-mono` → Geist Mono (used in ALL buttons, ALL `.t-label` elements)

**Brutalist rules (never violate these):**
- All cards, buttons, borders: `border-radius: 0` — zero rounding, always
- No blur, no transparency, no glassmorphism, no box-shadow
- All borders: `2px solid #0D0D0D` (or rgba for inverted sections)
- Hover state: yellow background swap, NOT underline, NOT glow
- Section dividers: full-width `<hr>` at 2px
- Section labels: IBM Plex Mono, uppercase, `opacity: 0.4`
- Focus rings: `3px solid #FFE600`, no border-radius

---

## Site Structure

```
/                           Home
/work                       Work showcase index
/work/[slug]                Individual case study (dynamic from MDX)
/about                      About the studio
/services                   Service offerings
/process                    How we work (4 phases)
/why-us                     Why choose HS108
/contact                    Contact form + email
/programs/creative-department   Internal R&D program
/programs/off-menu              Experimental / speculative projects
```

---

## Content Collections (Work Showcase)

Case studies live as `.mdx` files in `src/content/work/`.
Schema is defined in `src/content/config.ts`.

**Required frontmatter fields:**
```yaml
title:      string
client:     string
year:       number (2018–2030)
categories: array of enum ['brand','product','design-system','mobile','web','strategy','motion']
tags:       array of strings
coverImage: string (path like "/work/project-cover.jpg")
coverAlt:   string
color:      string (hex, exactly 6 digits, e.g. "#0a84ff")
outcome:
  label: string
  value: string
summary:    string (max 280 chars)
services:   array of strings
duration:   string (optional)
featured:   boolean (default false) — shown on home page
order:      number (default 99) — manual sort order
draft:      boolean (default false) — set true to hide from build
```

**Existing sample files:**
- `src/content/work/novapay.mdx` — fintech rebrand, featured
- `src/content/work/urbane-property.mdx` — real estate platform, featured
- `src/content/work/healthos.mdx` — healthcare design system, featured

**To add a new case study:** create a new `.mdx` file in `src/content/work/` with the frontmatter above, then write the case study body using standard markdown headings, paragraphs, blockquotes, etc.

---

## Known Issue: Work Collection Empty During Build

**Status:** Active bug as of the initial build session (March 2026).

**Symptom:** `astro build` warns "The collection 'work' does not exist or is empty"
and generates no `/work/[slug]` pages. The dev server (`npm run dev`) works correctly.

**Root cause:** Likely a bug in Astro 4.16's content collection static build pipeline.
The content types ARE generated correctly (`.astro/astro/content.d.ts` has all 3 entries),
but `getCollection('work')` returns empty at build time.

**Recommended fix:** Upgrade to Astro 5, which has a completely rewritten content layer.
Run: `npx @astrojs/upgrade`

**Do NOT:** Re-architect the content system, switch to hardcoded data, or use `import.meta.glob`
as a workaround — the content collection schema and MDX setup is correct, it just needs the
Astro version bump.

---

## Technical Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Astro 4.16 (→ upgrade to 5) | Static output, no SSR |
| Content | MDX + Astro Content Collections | Legacy `type: 'content'` |
| Styling | Raw CSS custom properties | NO CSS framework, NO Tailwind |
| Fonts | Google Fonts CDN (temporary) | TODO: self-host woff2 |
| Deployment | GitHub Pages | Via GitHub Actions |
| Forms | Formspree | Contact page — needs real endpoint ID |
| Sitemap | Removed temporarily | Re-add after Astro 5 upgrade |

---

## File Structure

```
HS108Website/
├── .github/workflows/deploy.yml    CI/CD → GitHub Pages
├── public/
│   ├── CNAME                       "hs108.in"
│   ├── favicon.svg
│   ├── fonts/                      (empty — TODO: add woff2 files)
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── config.ts               Zod schema for work collection
│   │   └── work/*.mdx              Case study files
│   ├── layouts/
│   │   ├── BaseLayout.astro        <html>, <head>, Nav, Footer, CSS imports
│   │   ├── PageLayout.astro        BaseLayout + standard page header
│   │   └── WorkLayout.astro        BaseLayout + case study chrome
│   ├── components/
│   │   ├── Nav.astro               Fixed top nav, mobile hamburger
│   │   ├── Footer.astro
│   │   ├── Hero.astro              Home page hero section
│   │   ├── WorkCard.astro          Card used in work grids
│   │   ├── StatBar.astro           Stat strip with bordered cells
│   │   └── ContactCTA.astro        Reusable bottom CTA section
│   ├── pages/                      (all routes listed above)
│   └── styles/
│       ├── global.css              CSS custom properties + reset
│       ├── typography.css          Type classes + Google Fonts import
│       └── brutalist.css           Border, grid, button, tag utilities
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Node / npm

Node is installed via nvm. Run commands using the full path or export PATH first:

```bash
PATH="/Users/hs108/.nvm/versions/node/v24.14.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
# then: npm run dev / npm run build / npm install
```

The terminal shell does not have nvm in PATH by default — always prefix or set PATH before
running npm/node commands.

---

## Pending TODOs (Priority Order)

1. **Fix work collection** — upgrade Astro to v5: `npx @astrojs/upgrade`
2. **Formspree endpoint** — replace `REPLACE_WITH_YOUR_ID` in `src/pages/contact.astro`
   with a real Formspree form ID (create at formspree.io)
3. **Real copy** — all pages currently have placeholder/sample copy; replace with real HS108 content
4. **Real work images** — add actual project images to `public/work/` for cover images
5. **Real case studies** — replace sample MDX files with real HS108 project write-ups
6. **Self-host fonts** — download Space Grotesk + IBM Plex Mono woff2 files,
   place in `public/fonts/`, and replace the Google Fonts `@import` in `typography.css`
   with `@font-face` declarations
7. **Sitemap** — re-add `@astrojs/sitemap` after Astro 5 upgrade (it crashed on v4)
8. **OG image** — add a real `public/og-default.jpg` for social sharing
9. **GitHub Pages settings** — ✅ MUST DO: go to repo Settings → Pages → Build and deployment → Source → change to "GitHub Actions" (not "Deploy from a branch"). Without this, GitHub runs Jekyll instead of our deploy.yml and the build fails.

---

## Programs (Important Distinction)

HS108 has two internal programs that are NOT client services:

- **Creative Department** (`/programs/creative-department`) — the studio's R&D lab.
  Research initiatives, published findings, experimental internal work. Email: `cd@hs108.in`

- **off_menu** (`/programs/off-menu`) — speculative / experimental projects that fall
  outside traditional design scope. Wild ideas, typefaces, civic design, etc.
  The name stays lowercase with underscore: `off_menu`. Email: `offmenu@hs108.in`

These are distinct from the 6 client services on the `/services` page.

---

## What NOT To Do

- Do NOT add border-radius to any element (brutalist rule)
- Do NOT use Tailwind, Bootstrap, or any CSS framework
- Do NOT add box-shadow or blur effects
- Do NOT use glassmorphism (the old site had it — we deliberately moved away)
- Do NOT use dark backgrounds for the main site (dark sections are for specific inverted blocks only)
- Do NOT add animations that aren't intentional (no spin, no bounce, no parallax)
- Do NOT use emojis in the UI
- Do NOT use `!important` in CSS
- Do NOT add features not requested — keep additions minimal and focused
