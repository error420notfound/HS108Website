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

**Deployment:** GitHub Pages is configured. Source set to "GitHub Actions" (done). Push to `main` → site deploys automatically via `.github/workflows/deploy.yml`.

---

## Design Direction: Brutalist / Bold

This is the most important creative decision. Do NOT drift from it.

### Colour System

Full orange scale is defined in `src/styles/global.css`. Always use the semantic tokens, not raw hex values in components.

| Token | Value | Use |
|---|---|---|
| `--surface-base` / `--white-native` | `#FFE1D8` | Page background |
| `--surface-elevated` / `--orange-50` | `#FFF4F0` | Alt section bg, card bg |
| `--black-native` | `#120600` | All text, borders, inverted section bg |
| `--accent` / `--orange-500` | `#ED582A` | Primary accent, hover fills, active nav |
| `--accent-strong` / `--orange-700` | `#B13F1C` | Button hover, blockquote colour |
| `--action-primary-bg` | `#ED582A` | Filled (primary) buttons |
| `--action-strong-bg` | `#B13F1C` | Button hover state |
| `--action-inverse-bg` | `#120600` | Inverted dark buttons |
| `--text-on-dark` | `#FFE1D8` | Text on dark/inverted sections |
| `--orange-100` | `#FFE1D8` | Subtle borders, inverted section dividers |
| `--orange-200` | `#FFC3B0` | Hover borders, soft dividers |

- **Inverted sections:** `#120600` background + `#FFE1D8` text
- Legacy aliases still work: `--c-yellow` → orange-500, `--c-black` → black-native, `--c-white` → surface-base

### Typography

Three fonts. Each has a specific job. Do not mix them up.

| Font | Variable | Use |
|---|---|---|
| **Instrument Serif** | `--font-display` | All headlines, display text, `.t-h1/.t-h2/.t-h3/.t-hero` |
| **Geist** | `--font-body` | All body copy, `.t-body`, `.t-large`, paragraphs |
| **Geist Mono** | `--font-mono` | ALL buttons, ALL labels, CTAs, micro copy, `.t-label`, `.t-mono`, nav links |

Loaded via Google Fonts CDN. `@import` is in `src/styles/typography.css`.

**Instrument Serif notes:**
- Only one weight exists: `400` (regular). Do NOT use `font-weight: 700` with this font.
- The signature treatment is **italic** — use `font-style: italic` on display headings.
- Upright + orange accent word creates contrast (e.g. hero "Scale." is upright + `color: var(--orange-500)`)
- No `text-transform: uppercase` needed — the natural letterforms are the statement.

**Geist Mono notes:**
- Used at `font-size: var(--size-label)` (11px), uppercase, `letter-spacing: 0.12–0.14em`
- This is the "voice" of the studio in UI — buttons, nav links, tags, stat labels

### Brutalist Rules (never violate)

- `border-radius: 0` on everything — zero rounding, always
- No `box-shadow`, no `filter: blur`, no glassmorphism
- All borders: `var(--border-width)` (2px) solid `var(--black-native)`
- Hover: orange background fill swap — NOT underline, NOT glow, NOT scale
- Section dividers: `<hr>` at 2px full-width
- Labels: Geist Mono, uppercase, `opacity: 0.4` when decorative
- Focus rings: `3px solid var(--orange-500)`, no border-radius

---

## Site Structure

```
/                               Home
/work                           Work showcase index (filterable by category)
/work/[slug]                    Individual case study (dynamic from MDX)
/about                          About the studio
/services                       Service offerings (6 services)
/process                        How we work (4 phases)
/why-us                         Why choose HS108
/contact                        Contact form (Formspree) + email
/programs/creative-department   Internal R&D lab
/programs/off-menu              Speculative / experimental projects
```

---

## Components Reference

| File | What it does |
|---|---|
| `src/layouts/BaseLayout.astro` | Root layout — `<html>`, `<head>`, SEO meta, imports all 3 CSS files, mounts Nav + Footer |
| `src/layouts/PageLayout.astro` | BaseLayout + standard page header (label + h1) |
| `src/layouts/WorkLayout.astro` | BaseLayout + full case study chrome (meta, hero image, next project nav) |
| `src/components/Nav.astro` | Fixed top nav. Desktop: logo + links + CTA. Mobile ≤900px: hamburger → dropdown menu |
| `src/components/Footer.astro` | Full footer with nav columns, status dot, email |
| `src/components/Hero.astro` | Home page hero — Instrument Serif italic headline, stat strip, CTAs |
| `src/components/WorkCard.astro` | Project card (image, title, outcome metric, category tags) |
| `src/components/StatBar.astro` | Horizontal strip of bordered stat cells |
| `src/components/ContactCTA.astro` | Reusable bottom-of-page CTA band (has `invert` prop) |

---

## Nav Component — Mobile Behaviour

The Nav has a working mobile menu. Key details for future edits:

- At `≤900px`: desktop links + CTA button hide; hamburger button appears
- Hamburger is a `<button>` with 3 `.bar` spans. Each bar needs `width: 100%` explicitly — do NOT remove this, it's what makes the bars visible.
- Hamburger animates to × when `aria-expanded="true"` (CSS transforms on `.bar` nth-child)
- Mobile menu is a **dropdown** (not full-screen overlay) — `position: absolute; top: 100%` under the nav bar
- Menu closes on: link click, outside click
- All nav links + "Get In Touch" button are present in the dropdown
- Logo uses `var(--font-mono)` (Geist Mono) at `font-weight: 500` — NOT Instrument Serif (which has no bold weight)

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
color:      string (hex, exactly 6 digits, e.g. "#ed582a")
outcome:
  label: string
  value: string
summary:    string (max 280 chars)
services:   array of strings
duration:   string (optional)
featured:   boolean (default false) — shown on home page featured grid
order:      number (default 99) — manual sort order on /work
draft:      boolean (default false) — set true to hide
```

**Existing sample files (placeholder content — replace with real work):**
- `src/content/work/novapay.mdx` — fintech rebrand, featured, order 1
- `src/content/work/urbane-property.mdx` — real estate platform, featured, order 2
- `src/content/work/healthos.mdx` — healthcare design system, featured, order 3

---

## Known Issue: Work Collection Empty During Build

**Status:** Active bug (not yet fixed).

**Symptom:** `astro build` warns "The collection 'work' does not exist or is empty" and generates no `/work/[slug]` pages. Dev server (`npm run dev`) works correctly — content loads fine there.

**Root cause:** Bug in Astro 4.16 static build pipeline. Types ARE generated correctly (all 3 entries appear in `.astro/astro/content.d.ts`) but `getCollection('work')` returns empty at build time.

**Fix:** Upgrade to Astro 5: `npx @astrojs/upgrade`

**Do NOT:** Re-architect the content system, switch to hardcoded data, or use `import.meta.glob` as a workaround. The schema and MDX setup are correct — only the Astro version needs bumping.

---

## Technical Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Astro 4.16 | → upgrade to v5 to fix work collection |
| Content | MDX + Astro Content Collections | Legacy `type: 'content'` |
| Styling | Raw CSS custom properties | NO framework, NO Tailwind |
| Fonts | Google Fonts CDN | TODO: self-host woff2 files |
| Deployment | GitHub Pages via GitHub Actions | ✅ Working — source set to "GitHub Actions" |
| Forms | Formspree | Contact page — endpoint ID not yet set |
| Sitemap | Removed temporarily | Crashed on v4 — re-add after Astro 5 upgrade |

---

## File Structure

```
HS108Website/
├── .github/workflows/deploy.yml    CI/CD → GitHub Pages (working)
├── public/
│   ├── CNAME                       "hs108.in"
│   ├── favicon.svg
│   ├── fonts/                      (empty — TODO: add woff2 files here)
│   ├── robots.txt
│   └── work/                       (empty — TODO: add project cover images here)
├── src/
│   ├── content/
│   │   ├── config.ts               Zod schema for work collection
│   │   └── work/*.mdx              Case study MDX files
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── WorkLayout.astro
│   ├── components/
│   │   ├── Nav.astro               ← mobile dropdown menu is here
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── WorkCard.astro
│   │   ├── StatBar.astro
│   │   └── ContactCTA.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── process.astro
│   │   ├── services.astro
│   │   ├── why-us.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── programs/
│   │       ├── creative-department.astro
│   │       └── off-menu.astro
│   └── styles/
│       ├── global.css              Color tokens + reset + layout utilities
│       ├── typography.css          Font imports + type scale classes
│       └── brutalist.css           Buttons, tags, borders, grid utilities
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Node / npm

Node is installed via nvm. The shell does not have nvm in PATH by default.
Always prefix commands like this:

```bash
PATH="/Users/hs108/.nvm/versions/node/v24.14.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run dev
npm run build
npm install
```

---

## Pending TODOs (Priority Order)

1. **Fix work collection** — upgrade Astro to v5: `npx @astrojs/upgrade` (set PATH first)
2. **Formspree endpoint** — replace `REPLACE_WITH_YOUR_ID` in `src/pages/contact.astro` with a real Formspree form ID from formspree.io
3. **Real case study content** — replace the 3 sample MDX files with real HS108 project write-ups
4. **Real project cover images** — add actual images to `public/work/` matching the `coverImage` paths in each MDX file
5. **Real copy across all pages** — about, services, process, why-us, programs pages all have placeholder text
6. **Self-host fonts** — download Instrument Serif, Geist, Geist Mono woff2 files → `public/fonts/` → replace the `@import` in `typography.css` with `@font-face` declarations
7. **Sitemap** — re-add `@astrojs/sitemap` after Astro 5 upgrade
8. **OG image** — add `public/og-default.jpg` (1200×630) for social sharing previews

---

## Programs (Important Distinction)

HS108 has two internal programs — these are NOT client services:

- **Creative Department** (`/programs/creative-department`) — internal R&D lab. Research, published findings, experimental work. Contact: `cd@hs108.in`
- **off_menu** (`/programs/off-menu`) — speculative / experimental projects outside traditional design. The name is always lowercase with underscore: `off_menu`. Contact: `offmenu@hs108.in`

These are separate from the 6 client-facing services on `/services`.

---

## What NOT To Do

- Do NOT add `border-radius` to any element
- Do NOT use Tailwind, Bootstrap, or any CSS framework
- Do NOT add `box-shadow` or `filter: blur`
- Do NOT use glassmorphism or transparency effects
- Do NOT set `font-weight: 700` (or any bold weight) on `Instrument Serif` — it only has weight 400
- Do NOT use `--font-display` (Instrument Serif) for the Nav logo or any small UI text — use `--font-mono` (Geist Mono) for that
- Do NOT use dark backgrounds as the main page bg — dark is only for specific `.inv-block` / `.section--inv` elements
- Do NOT add animations without intent (no spin, bounce, parallax, scroll-triggered)
- Do NOT use emojis in the UI
- Do NOT use `!important` in CSS
- Do NOT add unrequested features or refactor code that isn't broken
