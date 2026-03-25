# HS108 Website — Claude Context File

This file is read automatically by Claude at the start of every session.
It documents the project plan, decisions made, work completed, and rules to follow.

---

## Design Skills Reference

Two supporting files govern design and frontend decisions.

| File | What it covers |
|---|---|
| [`SIAM-FILTER.md`](SIAM-FILTER.md) | Four decision questions, energy defaults, hierarchy model |
| [`FRONTEND-SYSTEM.md`](FRONTEND-SYSTEM.md) | Token rules, component rules, motion rules, layout system |
| [`REVERT-STYLES.md`](REVERT-STYLES.md) | Full rollback instructions to restore the original brutalist/orange design |

---

## Project Overview

**Client:** HS108 (Design Studio)
**Domain:** hs108.in (GitHub Pages, custom CNAME)
**Framework:** Astro 4.16 (static output)
**Repo:** `/Users/hs108/Downloads/Vedik's Identity/VS Code/HS108 Website/HS108Website`

HS108 is an independent design studio. This is a full multi-page marketing + portfolio site.

**Deployment:** GitHub Pages via GitHub Actions. Push to `main` → auto-deploy via `.github/workflows/deploy.yml`.

---

## Design Direction: Warm Editorial

The site was redesigned from a brutalist/orange palette to a warm, refined editorial aesthetic in March 2026. To revert to the original brutalist design, see [`REVERT-STYLES.md`](REVERT-STYLES.md).

### Colour System

Two token layers exist in `global.css`. Always use the **redesign tokens** (`--color-*`) in new and updated components. The legacy tokens (`--bg`, `--accent`, `--border`) remain for backward compatibility with un-updated components.

#### Redesign tokens (use these)

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F7F5F0` | Page background |
| `--color-bg-surface` | `#FDFCF9` | Card / panel surface |
| `--color-bg-subtle` | `#F0EDE5` | Hover states, subtle fills |
| `--color-text-primary` | `#1A1917` | All headings and primary text |
| `--color-text-muted` | `#7A7870` | Secondary text, subheadings |
| `--color-text-faint` | `#B5B3AA` | Labels, eyebrows, captions |
| `--color-border` | `#E2DFD8` | Default 1px borders |
| `--color-border-mid` | `#C8C5BC` | Hover / emphasis borders |
| `--color-border-dark` | `#1A1917` | Active / selected borders |

#### Legacy semantic tokens (still used in un-updated components)

`--bg`, `--fg`, `--accent`, `--border`, `--border-width`, `--surface-base`, `--surface-elevated`, `--black-native` (`#1A1917`), `--white-native` (`#F7F5F0`).

The orange accent (`--orange-500: #ED582A`) is still present in the palette and theme system but is no longer the primary UI colour.

### Typography

Three fonts. Core display and body have changed; mono is unchanged.

| Font | Variable | Use |
|---|---|---|
| **Cormorant Garamond** | `--font-display` | All headlines (h1, h2, card titles, display text) |
| **DM Sans** | `--font-body` | All body copy, eyebrow labels, nav links, UI text |
| **Geist Mono** | `--font-mono` | Code, mono labels — rarely used in UI now |

**Cormorant Garamond notes:**
- Available weights: 300 (light) and 400 (regular), both normal and italic
- Use `font-weight: 300` for display headings — this is the spec default
- Italic treatment: `h1 em` → italic muted (color: `--color-text-muted`); `h1 strong` → upright roman
- Do NOT use `font-weight: 700` — it does not exist in this font

**DM Sans notes:**
- Available: weights 300, 400, 500; also italic 300
- Use 300 for body copy, 400–500 for UI labels and buttons
- Eyebrows use 500 weight, `text-transform: uppercase`, `letter-spacing: 0.1em`

### Type Scale Tokens

```css
--text-xs:   10px;   /* eyebrows, labels */
--text-sm:   12px;   /* captions, secondary UI */
--text-base: 15px;   /* body copy */
--text-lg:   18px;   /* lead paragraphs */
--text-h3:   clamp(22px, 2.5vw, 28px);
--text-h2:   clamp(28px, 3.5vw, 40px);
--text-h1:   clamp(48px, 6.5vw, 96px);
```

### Spacing Tokens (8pt scale)

```css
--sp-1: 4px  --sp-2: 8px   --sp-3: 16px  --sp-4: 24px  --sp-5: 32px
--sp-6: 48px --sp-7: 64px  --sp-8: 96px  --sp-9: 128px
```

### Motion Tokens

```css
--dur-fast: 150ms   --dur-base: 250ms   --dur-slow: 400ms
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-std: cubic-bezier(0.4, 0, 0.2, 1)
```

### Design Rules (current)

- Border radius: `3px` on cards/panels; `2px` on buttons; `4px` on nav dropdown and small tags; `20px` on pill tags
- Borders: `1px solid var(--color-border)` — not `2px` any more
- Hover states: border-color shift (`--color-border` → `--color-border-mid`) + background shift (`--color-bg-surface` → `--color-bg-subtle`)
- Eyebrow pattern: `.eyebrow` class (defined globally) — `::before` pseudo-element adds a 24px line automatically
- Hero animations: staggered `fadeUp` (opacity + translateY 12px) — respects `prefers-reduced-motion`
- GLSL background: `<canvas id="glsl-canvas">` with `position: fixed; z-index: 0`. Enabled on: `/`, `/about`, `/why-us`, `/process`, `/contact`. Script at `public/scripts/glsl-field.js`.

### What NOT to do (current design)

- Do NOT add hardcoded hex/rgba values in component styles — use `--color-*` tokens
- Do NOT use `font-weight: 700` on Cormorant Garamond — only 300 and 400 exist
- Do NOT use Tailwind, Bootstrap, or any CSS framework
- Do NOT use `!important` in CSS
- Do NOT add unrequested features or refactor code that isn't broken
- Do NOT rename service codes (WebCanvas, CX&Identity, CMF_Nexus, Lumina.raw) — brand terms
- Do NOT rename `off_menu` — always lowercase with underscore

---

## Studio Identity

**Name:** HS108
**Tagline:** *"Design Built to Scale."*
**Established:** 2019
**Email:** contact.studio@hs108.in

---

## Services (4 Practices)

| Code | Practice Name | Scope |
|---|---|---|
| **WebCanvas** | Digital Design | Web design, app UI, UX design, prototypes, developer handoff |
| **CX&Identity** | Branding & Identity | Logo, brand identity system, packaging design, brand guidelines |
| **CMF_Nexus** | Product Design | Concept sketches, CAD, CMF spec, prototyping, production-ready files |
| **Lumina.raw** | Photo & Video | Photography, photo editing, videography, video editing, motion graphics |

---

## Programs (4 Programs)

### Creative Department (`/programs/creative-department`) — `theme-rose`
Flagship retainer. Ongoing embedded design support. All four practices under one monthly engagement.

### Design Lab (`/programs/design-lab`) — `theme-vermilion`
Research & discovery for complex, ambiguous challenges. Output is clarity and brief — not finished product.

### off_menu (`/programs/off-menu`) — `theme-cool`
Bespoke custom packages. Name is always `off_menu` (lowercase, underscore).

### Field Notes (`/programs/field-notes`) — `theme-teal`
Community/discourse platform. Not client-facing. Previously called "Atelier Discourse".

---

## Site Structure

```
/                               Home (glsl bg)
/work                           Work showcase index (filterable)
/work/[slug]                    Case study (dynamic from MDX)
/about                          About the studio (glsl bg)
/services                       Services overview
/services/webcanvas             WebCanvas (theme-blue)
/services/cx-identity           CX&Identity (theme-purple)
/services/cmf-nexus             CMF_Nexus (theme-vermilion)
/services/lumina-raw            Lumina.raw (theme-green)
/process                        How we work (glsl bg)
/why-us                         Why choose HS108 (glsl bg)
/contact                        Contact form (glsl bg)
/programs                       Programs index
/programs/creative-department   Retainer (theme-rose)
/programs/design-lab            Research (theme-vermilion)
/programs/off-menu              Bespoke (theme-cool)
/programs/field-notes           Community (theme-teal)
```

---

## Components Reference

| File | What it does |
|---|---|
| `src/layouts/BaseLayout.astro` | Root layout. Props: `title`, `description`, `ogImage`, `bodyClass`, `glsl` (boolean — enables GLSL canvas) |
| `src/layouts/PageLayout.astro` | BaseLayout + page header. Props: `title`, `description`, `label`, `glsl` |
| `src/layouts/WorkLayout.astro` | Case study layout — includes services-used section (slug-keyed) and Field Notes capture |
| `src/components/Nav.astro` | Fixed nav. Desktop dropdowns: Services, About (Studio / Why HS108 / Process), Programs. Mobile: hamburger → accordions |
| `src/components/Footer.astro` | 4-column footer — Navigation, Programs, HS108 Network, Status |
| `src/components/Hero.astro` | Homepage hero — eyebrow, h1 with em/strong, metrics panel (4 stats), CTAs, ticker. No external props needed. |
| `src/components/WorkCard.astro` | Project card — warm card style with `--color-border` borders and `border-radius: 3px` |
| `src/components/StatBar.astro` | Horizontal strip of bordered stat cells (not used on homepage — metrics are in Hero) |
| `src/components/ContactCTA.astro` | Bottom-of-page CTA band. Props: `headline`, `sub`, `invert`. Secondary link: "Book a 20-min call" → `/contact?path=call` |

---

## Nav Structure (desktop)

```
Work  |  Services ▾  |  About ▾  |  Programs ▾  |  Get In Touch
                          └─ Studio (/about)
                          └─ Why HS108 (/why-us)
                          └─ Process (/process)
```

Process and Why HS108 are accessible only through the About dropdown (not top-level). Both remain in the footer nav.

---

## GLSL Background

- Canvas ID: `#glsl-canvas` — `position: fixed; inset: 0; z-index: 0; pointer-events: none`
- Site content wraps in `.site-wrapper` — `position: relative; z-index: 1`
- Script: `public/scripts/glsl-field.js` — warm field shader, ~30fps, GPU-based
- Low-end guard: skipped when `navigator.hardwareConcurrency <= 2`
- WebGL fallback: canvas hidden, page background falls back to `--color-bg` (`#F7F5F0`)
- Enable on a page: pass `glsl={true}` to BaseLayout or PageLayout

---

## Hero Component

Metrics panel (inline, no external data prop — hardcoded in Hero.astro):
- 38+ Brands Scaled
- 5× Avg. Growth
- 100% Senior Talent
- 6 yrs In Business

StatBar (`src/components/StatBar.astro`) is no longer used on the homepage. It still exists for other uses.

---

## Homepage Sections (index.astro)

1. Hero (Cormorant Garamond, metrics panel, staggered animations, ticker)
2. Featured Work (3 projects from content collection)
3. Services teaser (4 services)
4. Process teaser (inverted section)
5. Programs (4 program cards — warm card style)
6. Field Notes email capture
7. ContactCTA (with "Book a 20-min call" secondary link)

---

## Contact Page — Stepped UX Flow

**Step 0 (new — path chooser):** Two cards — "Starting a project" (project path) and "Looking for ongoing support" (retainer path). Clicking a card reveals the form. `?path=call` URL param pre-selects the retainer card.

**Project path (Steps 1–3):**
1. Service picker (checkboxes) + live price estimate
2. Brief, timeline, budget
3. Name, email, company, how-found

**Key behaviours:**
- Progress bar advances 33% → 66% → 100%
- AJAX submit to Google Apps Script (URL already set in the script)
- `?path=call` handled via JS on page load

---

## Case Study Pages — Services Used

`WorkLayout.astro` renders a "Services used on this project" grid above "Next Project", keyed by slug:

| Slug | Cards |
|---|---|
| `novapay` | CX&Identity, WebCanvas (2 cards) |
| `urbane-property` | CX&Identity, WebCanvas, WebCanvas (3 cards) |
| `healthos` | WebCanvas, WebCanvas (2 cards) |

All case study pages also show a **Field Notes email capture** block after the MDX body.

---

## Per-Page Colour Theming

Pass `bodyClass` to BaseLayout to apply a theme:

```astro
<BaseLayout title="..." bodyClass="theme-blue">
```

All 18 theme classes are defined in `global.css`. Available: `theme-orange` (default), `theme-lime`, `theme-yellow`, `theme-green`, `theme-blue`, `theme-rose`, `theme-indigo`, `theme-pink`, `theme-purple`, `theme-cyan`, `theme-teal`, `theme-mint`, `theme-amber`, `theme-brown`, `theme-red`, `theme-vermilion`, `theme-warm`, `theme-cool`, `theme-neutral`.

Note: Themed pages (services/programs) use the existing `--bg`/`--fg` token system. The redesign `--color-*` tokens are not overridden by theme classes — they remain warm-neutral on themed pages.

---

## Content Collections (Work Showcase)

Case studies: `.mdx` files in `src/content/work/`. Schema in `src/content/config.ts`.

**Required frontmatter:**
```yaml
title, client, year, categories, tags, coverImage, coverAlt, color,
outcome: { label, value }, summary, services, duration, featured, order, draft
```

**Existing files:** `novapay.mdx`, `urbane-property.mdx`, `healthos.mdx`

---

## Known Issue: Work Collection Empty During Build

**Status:** Active bug (not yet fixed).
**Symptom:** Build warns "collection 'work' is empty" — no `/work/[slug]` pages generated. Dev server works.
**Fix:** Upgrade to Astro 5: `npx @astrojs/upgrade` (set PATH first).
**Do NOT** re-architect the content system as a workaround.

---

## HS108 Network — Subdomains

| Subdomain | URL | Purpose |
|---|---|---|
| docs.hs108.in | `https://docs.hs108.in` | Internal design documents |
| field-notes.hs108.in | `https://field-notes.hs108.in` | Blog / editorial |
| toolkit.hs108.in | `https://toolkit.hs108.in` | Design tools & resources |

---

## Technical Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Astro 4.16 | → upgrade to v5 to fix work collection |
| Content | MDX + Astro Content Collections | Legacy `type: 'content'` |
| Styling | Raw CSS custom properties | No framework, no Tailwind |
| Fonts | Google Fonts CDN | Cormorant Garamond, DM Sans, Geist Mono |
| Deployment | GitHub Pages via GitHub Actions | ✅ Working |
| Forms | Google Apps Script | Endpoint already set in contact.astro |
| Sitemap | Removed temporarily | Re-add after Astro 5 upgrade |

---

## File Structure

```
HS108Website/
├── .github/workflows/deploy.yml
├── public/
│   ├── CNAME                       "hs108.in"
│   ├── favicon.svg
│   ├── fonts/                      (empty — TODO: add woff2 files)
│   ├── scripts/
│   │   └── glsl-field.js           GLSL warm field shader
│   ├── robots.txt
│   └── work/                       (empty — TODO: add cover images)
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── work/*.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro        glsl prop
│   │   ├── PageLayout.astro        glsl prop forwarded
│   │   └── WorkLayout.astro        services-used + field notes
│   ├── components/
│   │   ├── Nav.astro               About dropdown (Studio/Why HS108/Process)
│   │   ├── Footer.astro
│   │   ├── Hero.astro              eyebrow + h1 em/strong + metrics + ticker
│   │   ├── WorkCard.astro          warm card style
│   │   ├── StatBar.astro           (not used on homepage)
│   │   └── ContactCTA.astro        "Book a 20-min call" secondary link
│   ├── pages/
│   │   ├── index.astro             glsl, field notes capture
│   │   ├── about.astro             glsl, client links
│   │   ├── contact.astro           glsl, path chooser
│   │   ├── process.astro           glsl
│   │   ├── services.astro
│   │   ├── why-us.astro            glsl
│   │   ├── work/index.astro
│   │   ├── work/[slug].astro
│   │   ├── services/*.astro
│   │   └── programs/*.astro
│   └── styles/
│       ├── global.css              Tokens (legacy + redesign), reset, body/heading rules, eyebrow
│       ├── typography.css          Font imports (Cormorant Garamond, DM Sans + originals)
│       └── brutalist.css           Buttons, tags, grids (unchanged)
├── CLAUDE.md                       ← this file
├── REVERT-STYLES.md                ← rollback instructions
├── SIAM-FILTER.md
├── FRONTEND-SYSTEM.md
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Node / npm

Node via nvm. Always prefix:

```bash
PATH="/Users/hs108/.nvm/versions/node/v24.14.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run dev
npm run build
npm install
```

---

## Pending TODOs (Priority Order)

1. **Fix work collection** — upgrade Astro to v5: `npx @astrojs/upgrade` (set PATH first)
2. **Real case study content** — replace the 3 sample MDX files with real HS108 project write-ups
3. **Real project cover images** — add actual images to `public/work/`
4. **Real copy** — about.astro, why-us.astro, process.astro still have placeholder text
5. **Field Notes form endpoint** — replace `action="#"` in Field Notes forms with a real endpoint (Formspree or similar)
6. **Self-host fonts** — download Cormorant Garamond, DM Sans, Geist Mono woff2 files → `public/fonts/`
7. **OG image** — add `public/og-default.jpg` (1200×630)
8. **Sitemap** — re-add `@astrojs/sitemap` after Astro 5 upgrade

---

## Completed

- ✅ Created `/programs/index.astro`
- ✅ Applied theme classes to all service/program pages
- ✅ Updated Nav "Programs" desktop link → `/programs`
- ✅ Renamed "Atelier Discourse" → "Field Notes"
- ✅ Footer: 4 programs + HS108 Network column
- ✅ Nav: hover dropdowns (Services, Programs) + mobile accordions
- ✅ Contact page: 3-step multi-step flow with AJAX submit
- ✅ **Redesign (March 2026):** Warm editorial design system — tokens, fonts, hero, nav, cards, GLSL, services-used, Field Notes capture, contact path chooser, client links, footer CTA
