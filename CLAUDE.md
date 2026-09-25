# HS108 Website — Claude Context File

This file is read automatically by Claude at the start of every session.
It documents the project plan, decisions made, work completed, and rules to follow.

---

## Design Skills Reference

Two supporting files govern all design and frontend decisions on this project.
Read them before making any visual, layout, or interaction change.

| File | What it covers |
|---|---|
| [`SIAM-FILTER.md`](SIAM-FILTER.md) | Four decision questions, energy defaults, hierarchy model, hard refusals |
| [`FRONTEND-SYSTEM.md`](FRONTEND-SYSTEM.md) | Token rules, component rules, motion rules, layout system, pre-ship checklist |

**The short version:**
- Quiet over loud. Grounded over expressive. Restrained over bold.
- No decorative animations. No hardcoded values. No `font-weight: 700` on Instrument Serif.
- Every decision must answer: does this serve function or perform expression?

---

## Project Overview

**Client:** HS108 (Design Studio)
**Domain:** hs108.in (GitHub Pages, custom CNAME)
**Framework:** Astro 7.3 (static output, Node.js 24.21.0)
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

## Studio Identity

HS108 is an independent design studio established in 2019.
Tagline: *"Design Built to Scale."*
Core promise: brands and digital products for companies ready to grow. No generalists. No templates. Systems that work at scale.

---

## Services (4 Practices)

These are HS108's four client-facing services. Use these exact code names — they are brand terms.

| Code | Practice Name | Scope |
|---|---|---|
| **WebCanvas** | Digital Design | Web design, app UI, UX design, prototypes, developer handoff |
| **CX&Identity** | Branding & Identity | Logo, brand identity system, packaging design, brand guidelines |
| **CMF_Nexus** | Product Design | Concept sketches, CAD, CMF spec, prototyping, production-ready files |
| **Lumina.raw** | Photo & Video | Photography, photo editing, videography, video editing, motion graphics |

Page: `src/pages/services.astro`

---

## Programs (4 Programs)

These are HS108's engagement models and community initiatives — distinct from the 4 services above.

### Creative Department (`/programs/creative-department`)
**Type:** Flagship retainer program
**What:** Ongoing design support for businesses — a dedicated team embedded in the client's workflow. Covers all four practices under one monthly engagement. Senior talent only.
**Email:** `contact.studio@hs108.in`

### Design Lab (`/programs/design-lab`)
**Type:** Research & discovery program
**What:** For high-demand, complex design challenges. Structured discovery, research sprints, design audits, concept development, and experimental prototyping. Output is clarity and brief — not finished product.
**When to use:** Client problems that are too ambiguous or high-stakes to go straight into execution.

### off_menu (`/programs/off-menu`)
**Type:** Bespoke / custom package
**What:** Custom, tailor-made engagements for clients whose needs span multiple disciplines or don't fit a standard scope. Combines any of the four practices as the project requires.
**Email:** `contact.studio@hs108.in`
**Note:** Name is always `off_menu` — lowercase, underscore, no space.

### Field Notes (`/programs/field-notes`)
**Type:** Community / conversation platform
**What:** HS108's channel for discourse with designers, artisans, and industry experts. Covers topics: Material & Craft, Design & Commerce, Systems Design, Visual Culture. Not client-facing — community and field contribution.
**Email:** `contact.studio@hs108.in`
**Note:** Previously called "Atelier Discourse" — renamed to "Field Notes". File: `programs/field-notes.astro`, route: `/programs/field-notes`.

---

## Site Structure

```
/                               Home
/work                           Work showcase index (filterable by category)
/work/[slug]                    Individual case study (dynamic from MDX)
/about                          About the studio
/services                       4 services: WebCanvas, CX&Identity, CMF_Nexus, Lumina.raw
/services/webcanvas             WebCanvas service page (theme-blue)
/services/cx-identity           CX&Identity service page (theme-purple)
/services/cmf-nexus             CMF_Nexus service page (theme-vermilion)
/services/lumina-raw            Lumina.raw service page (theme-green)
/process                        How we work (4 phases)
/why-us                         Why choose HS108
/contact                        Contact form (Formspree) + email
/programs                       Programs list/index page (all 4 programs)
/programs/creative-department   Retainer program (theme-rose)
/programs/design-lab            Research & discovery program (theme-vermilion)
/programs/off-menu              Bespoke / custom package (theme-cool)
/programs/field-notes           Field Notes community platform (theme-teal)
```

---

## Components Reference

| File | What it does |
|---|---|
| `src/layouts/BaseLayout.astro` | Root layout — `<html>`, `<head>`, SEO meta, imports all 3 CSS files, mounts Nav + Footer |
| `src/layouts/PageLayout.astro` | BaseLayout + standard page header (label + h1) |
| `src/layouts/WorkLayout.astro` | BaseLayout + full case study chrome (meta, hero image, next project nav) |
| `src/components/Nav.astro` | Fixed top nav. Desktop: logo + links + CTA. Mobile ≤900px: hamburger → dropdown with all 4 programs listed |
| `src/components/Footer.astro` | Full footer with nav columns, status dot, email |
| `src/components/Hero.astro` | Home page hero — Instrument Serif italic headline, stat strip, CTAs |
| `src/components/WorkCard.astro` | Project card (image, title, outcome metric, category tags) |
| `src/components/StatBar.astro` | Horizontal strip of bordered stat cells |
| `src/components/ContactCTA.astro` | Reusable bottom-of-page CTA band (has `invert` prop) |

---

## Per-Page Colour Theming

Individual pages can be given a colour theme by passing `bodyClass` to `BaseLayout`:

```astro
<BaseLayout title="..." bodyClass="theme-blue">
```

This sets the `class` on `<body>` and overrides all semantic colour tokens (`--bg`, `--fg`, `--accent`, `--surface-base`, etc.) for that page. Every theme class **explicitly** sets `--bg` and `--fg` directly — do not rely on intermediate variable inheritance.

**Current theme assignments:**

| Page | Theme |
|---|---|
| `/services/webcanvas` | `theme-blue` |
| `/services/cx-identity` | `theme-purple` |
| `/services/cmf-nexus` | `theme-vermilion` |
| `/services/lumina-raw` | `theme-green` |
| `/programs/creative-department` | `theme-rose` |
| `/programs/design-lab` | `theme-vermilion` |
| `/programs/off-menu` | `theme-cool` |
| `/programs/field-notes` | `theme-teal` |

All 18 theme classes are defined in `src/styles/global.css`. Available themes: `theme-orange` (default), `theme-lime`, `theme-yellow`, `theme-green`, `theme-blue`, `theme-rose`, `theme-indigo`, `theme-pink`, `theme-purple`, `theme-cyan`, `theme-teal`, `theme-mint`, `theme-amber`, `theme-brown`, `theme-red`, `theme-vermilion`, `theme-warm`, `theme-cool`, `theme-neutral`.

**Font pair modifiers** (can be combined with theme classes):
- `.font-pair-a` — switches display to Genos (700 italic) + body to Rajdhani
- `.font-pair-b` — switches display to Michroma + body to IBM Plex Serif

**CSS variable fix:** The `--bg` / `--fg` aliases defined on `:root` do NOT auto-resolve when intermediate tokens are overridden on `body`. Always set `--bg` and `--fg` directly inside every theme class — never rely on the chain.

---

## Nav Component — Mobile Behaviour

The Nav has a working mobile menu. Key details for future edits:

- At `≤900px`: desktop links + CTA button hide; hamburger button appears
- Hamburger is a `<button>` with 3 `.bar` spans. Each bar needs `width: 100%` explicitly — do NOT remove this, it's what makes the bars visible.
- Hamburger animates to × when `aria-expanded="true"` (CSS transforms on `.bar` nth-child)
- Mobile menu is a **dropdown** (not full-screen overlay) — `position: absolute; top: 100%` under the nav bar
- Menu closes on: link click, outside click
- All main nav links + all 4 program sub-links + "Get In Touch" button are in the dropdown
- Programs appear as a sub-group with a label: `Creative Department`, `Design Lab`, `off_menu`, `Atelier Discourse`
- Desktop "Programs" nav link goes to `/programs` (the programs index page)
- Desktop **Services** and **Programs** links show a hover dropdown with sub-links (service/program name + category label). Implemented with CSS `:hover` + `position: absolute` dropdown panel — no JS needed.
- Mobile: Services and Programs are **accordion buttons** that expand inline to show sub-links. Each accordion has its own `aria-expanded` state toggled via JS. Close behaviour: link click or outside click collapses the main menu.
- Logo uses `var(--font-mono)` (Geist Mono) at `font-weight: 500` — NOT Instrument Serif (which has no bold weight)

---

## Homepage Sections (index.astro)

1. Hero (Instrument Serif italic, stat strip, CTAs)
2. StatBar (38+ brands, 5× avg growth, 100% senior talent, 6 yrs in business)
3. Marquee ticker (service + program names scrolling)
4. Featured Work (from content collection — 3 projects, first is wide)
5. Services teaser (all 4 services with code names)
6. Process teaser (inverted section — 4 phases)
7. **Programs section** (all 4 programs as linked cards)
8. ContactCTA

---

## Content Collections (Work Showcase)

Case studies live as `.mdx` files in `src/content/work/`.
Schema and the Content Layer loader are defined in `src/content.config.ts`.

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
- `src/content/work/novapay.mdx` — fintech rebrand, featured, order 1 **(includes 3D model viewer)**
- `src/content/work/urbane-property.mdx` — real estate platform, featured, order 2
- `src/content/work/healthos.mdx` — healthcare design system, featured, order 3

---

## 3D Model Viewer (Google Model-Viewer)

Interactive 3D models can be embedded in case study pages via the optional `modelViewer` frontmatter field. Uses Google's [`<model-viewer>` web component](https://modelviewer.dev/) with scroll-driven camera animation, AR support (iOS Quick Look + Android Scene Viewer), and ACES filmic post-processing.

**Implementation:**
- Component: [src/layouts/WorkLayout.astro](src/layouts/WorkLayout.astro) — renders `<model-viewer>` custom element + scroll listener
- Schema: [src/content.config.ts](src/content.config.ts) — work collection schema and loader
- Example: [src/content/work/novapay.mdx](src/content/work/novapay.mdx) — see `modelViewer` frontmatter for full usage

**How it works:**
1. The viewer loads the Google model-viewer script dynamically via `<script type="module">` in the page head
2. Server-side (in Astro frontmatter): iOS USDZ URL is built with hash params for Quick Look customization (checkout title, subtitle, price, custom HTML banner)
3. Client-side (browser JS): scroll listener reads `data-*` attributes on the wrapper and interpolates camera orbit (theta, phi, radius) from start to end values as user scrolls

**Frontmatter fields (all optional except `src`):**

| Field | Type | Use |
|---|---|---|
| `src` | string | GLB file URL (required) |
| `iosSrc` | string | USDZ file URL for iOS Quick Look |
| `alt` | string | Alt text for the model |
| `caption` | string | Caption below the viewer |
| **Rendering** | | |
| `shadowIntensity` | number (0–2) | Shadow darkness (default: 1) |
| `autoRotate` | boolean | Auto-rotate model (default: true) |
| `cameraControls` | boolean | Allow user pan/rotate (default: true) |
| `enableZoom` | boolean | Allow pinch zoom (default: false) |
| `enableAR` | boolean | Show AR button (default: true) |
| `arButtonText` | string | AR button label (default: "View in AR") |
| `arTitle` | string | Android Scene Viewer title |
| `arLink` | string | Android Scene Viewer link |
| `interpolationDecay` | number | Camera ease-out speed (default: 200ms) |
| `environmentImage` | string | Lighting env map (default: empty = neutral) |
| **Post-processing** | | |
| `acesFilmic` | boolean | Enable ACES filmic tone mapping (default: true) |
| `bloom` | boolean | Enable bloom effect (default: true) |
| **Scroll Animation** | | |
| `scrollAnimation` | boolean | Drive camera on scroll (default: true) |
| `startTheta` | number | Initial camera X angle in degrees (default: -90) |
| `endTheta` | number | Final camera X angle at bottom (default: 180) |
| `startPhi` | number | Initial camera Y angle (default: 75) |
| `endPhi` | number | Final camera Y angle (default: 90) |
| `startRadius` | number | Initial distance in meters (default: 2) |
| `endRadius` | number | Final distance in meters (default: 1) |
| **iOS Quick Look Banner** | | |
| `iosCheckoutTitle` | string | Checkout title (mutually exclusive with custom HTML) |
| `iosCheckoutSubtitle` | string | Checkout subtitle |
| `iosPrice` | string | Price display |
| `iosCallToAction` | string | CTA button text |
| `iosCanonicalUrl` | string | Web page canonical URL in banner |
| **iOS Custom HTML Banner** | | |
| `iosCustomBannerUrl` | string | Custom HTML file URL (overrides checkout fields) |
| `iosCustomBannerHeight` | enum | Banner height: `small`, `medium`, `large` |
| `iosAllowsContentScaling` | boolean | Allow banner zoom (default: false) |

**Example frontmatter:**
```yaml
modelViewer:
  src: "https://example.com/model.glb"
  iosSrc: "https://example.com/model.usdz"
  alt: "3D product model"
  caption: "Interactive 3D model"
  autoRotate: true
  acesFilmic: true
  bloom: true
  scrollAnimation: true
  startTheta: -90
  endTheta: 180
  startPhi: 75
  endPhi: 90
  startRadius: 2
  endRadius: 1
  arButtonText: "View in AR"
  iosCustomBannerUrl: "https://example.com/banner.html"
  iosCustomBannerHeight: "large"
  iosCanonicalUrl: "https://hs108.in/work/project"
```

**iOS Quick Look Notes:**
- **Custom HTML banner** takes priority — if `iosCustomBannerUrl` is set, all checkout fields are ignored
- Requires HTTPS and a valid `.usdz` file URL in `iosSrc`
- Example banner: [public/ar-banner.html](public/ar-banner.html) — brutalist-styled, uses HS108 tokens
- Externally hosted banner: `https://error420notfound.github.io/webHTML/arBanner1.html`

**Android Scene Viewer Notes:**
- Uses `ar-title` and `ar-link` attributes
- Requires Android device with Google Play Services

**Styling:**
- Model viewer block: `.cs-model-viewer-wrap` — 4:3 aspect ratio, 2px border, token colours
- AR button: `.mv-ar-btn` — Geist Mono uppercase, orange hover fill, no border-radius
- Caption: `.cs-model-caption` — opacity 0.5, uppercase label style

---

## Resolved Issue: Work Collection Empty During Build

**Status:** Resolved in the Astro 7 upgrade.

The work collection now uses the Content Layer `glob()` loader from `src/content.config.ts`. Keep the MDX files in `src/content/work/` and query them through `getCollection('work')`; the static build must generate a page for every non-draft entry.

---

## HS108 Network — Subdomains

Three subdomains linked from the footer "HS108 Network" column. All open in a new tab.

| Subdomain | URL | Purpose |
|---|---|---|
| docs.hs108.in | `https://docs.hs108.in` | Internal design documents |
| field-notes.hs108.in | `https://field-notes.hs108.in` | Blog / editorial |
| toolkit.hs108.in | `https://toolkit.hs108.in` | Design tools & resources built in-house |

These are external links — not pages inside the Astro project.

---

## Contact Page — Stepped UX Flow

The contact page (`/contact`) uses a 3-step multi-step form inspired by Apple's Mac checkout flow. No modal — single-page stepped panels revealed in sequence.

**Steps:**
1. **What you need** — checkbox choice cards (8 options, maps to all 4 services + 4 programs). Multiple selection allowed.
2. **Your project** — textarea (brief), timeline select, budget select.
3. **Your details** — name, email, company, how-found. Summary card shows selected services.
4. **Confirmation** — shown after successful Formspree submit. No page reload.

**Key behaviours:**
- Progress bar (2px orange fill) advances at each step (33% → 67% → 100%)
- Step indicators (01/02/03) light up as user advances
- "Back" button returns to previous step, form state is preserved
- Form submits via `fetch()` (AJAX) to Formspree — no page reload on success
- Confirmation panel replaces form content on success
- Aside panel (email, programs, response time) is sticky on desktop, stacks below on mobile

**Layout:** 2-col grid — form (left, wider) + aside (right, 320px, sticky). Collapses to 1-col below 1024px.

**Uses:** `BaseLayout` directly (not `PageLayout`) so the full-width header section can be custom.

**TODO:** Replace `REPLACE_WITH_YOUR_ID` in the form action URL with a real Formspree endpoint.

---

## Technical Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Astro 7.3 | Node.js 24.21.0 |
| Content | MDX + Astro Content Layer | `glob()` loader for `src/content/work/` |
| Styling | Design-system CSS custom properties + Tailwind 4 Vite plugin | Tailwind preflight disabled to preserve existing styles |
| Fonts | Google Fonts CDN | TODO: self-host woff2 files |
| Deployment | GitHub Pages via GitHub Actions | ✅ Working — source set to "GitHub Actions" |
| Forms | Formspree | Contact page — endpoint ID not yet set |
| Sitemap | Generated after the static build | `scripts/generate-sitemap.mjs` walks generated routes |

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
│   ├── content.config.ts          Work collection schema and loader
│   ├── content/work/*.mdx         Case study MDX files
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── WorkLayout.astro
│   ├── components/
│   │   ├── Nav.astro               ← mobile dropdown with all 4 program links
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
│   │   ├── services.astro          ← 4 services: WebCanvas, CX&Identity, CMF_Nexus, Lumina.raw
│   │   ├── why-us.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── services/
│   │   │   ├── webcanvas.astro             ← theme-blue
│   │   │   ├── cx-identity.astro           ← theme-purple
│   │   │   ├── cmf-nexus.astro             ← theme-vermilion
│   │   │   └── lumina-raw.astro            ← theme-green
│   │   └── programs/
│   │       ├── index.astro                 ← programs list page (mirrors services index)
│   │       ├── creative-department.astro   ← theme-rose
│   │       ├── design-lab.astro            ← theme-vermilion
│   │       ├── off-menu.astro              ← theme-cool
│   │       └── field-notes.astro           ← theme-teal (renamed from atelier-discourse)
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
PATH="/Users/hs108/.nvm/versions/node/v24.21.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run dev
npm run build
npm install
```

---

## Pending TODOs (Priority Order)

1. **Formspree endpoint** ? replace `REPLACE_WITH_YOUR_ID` in `src/pages/contact.astro` with a real Formspree form ID from formspree.io
2. **Real case study content** ? replace the 3 sample MDX files with real HS108 project write-ups
3. **Real project cover images** ? add actual images to `public/work/` matching the `coverImage` paths in each MDX file
4. **Real copy on secondary pages** ? about.astro, why-us.astro, process.astro still have placeholder text
5. **Self-host fonts** ? download Instrument Serif, Geist, Geist Mono woff2 files to `public/fonts/` and replace the `@import` in `typography.css` with `@font-face` declarations
6. **OG image** ? add `public/og-default.jpg` (1200x630) for social sharing previews

---

## Completed

- ✅ Created `/programs/index.astro` — programs list page (mirrors services index structure, 4 program rows + services teaser + callout)
- ✅ Applied `theme-rose` to `creative-department.astro`
- ✅ Applied `theme-vermilion` to `design-lab.astro`
- ✅ Applied `theme-cool` to `off-menu.astro`
- ✅ Applied `theme-teal` to `field-notes.astro`
- ✅ Updated Nav "Programs" desktop link → `/programs`
- ✅ **3D Model Viewer integration** — added Google `<model-viewer>` web component with scroll-driven camera, AR support (iOS Quick Look + Android Scene Viewer), ACES filmic post-processing, and customizable iOS banner. Implemented in [WorkLayout.astro](src/layouts/WorkLayout.astro) with full property controls in frontmatter. Example: [novapay.mdx](src/content/work/novapay.mdx)
- ✅ Renamed "Atelier Discourse" → "Field Notes" (file renamed `atelier-discourse.astro` → `field-notes.astro`, route `/programs/field-notes`)
- ✅ Footer: added all 4 programs, added "HS108 Network" column with 3 subdomain links (docs, field-notes, toolkit)
- ✅ Nav: added hover dropdown for Services and Programs on desktop; accordion submenu for both in mobile
- ✅ Contact page: rebuilt as 3-step Apple-style multi-step flow (choice cards → project brief → contact details → AJAX confirmation)

---

## What NOT To Do

See [`SIAM-FILTER.md`](SIAM-FILTER.md) and [`FRONTEND-SYSTEM.md`](FRONTEND-SYSTEM.md) for the full decision framework.

**Hard stops — project-specific:**
- Do NOT add `border-radius` to any element
- Keep pages on design-system CSS tokens; do not convert them to utility-first CSS. Tailwind 4 is available through the Vite plugin with preflight disabled.
- Do NOT add `box-shadow` or `filter: blur`
- Do NOT use glassmorphism or transparency effects
- Do NOT set `font-weight: 700` (or any bold weight) on `Instrument Serif` — it only has weight 400
- Do NOT use `--font-display` (Instrument Serif) for the Nav logo or any small UI text — use `--font-mono` (Geist Mono) for that
- Do NOT use dark backgrounds as the main page bg — dark is only for specific `.inv-block` / `.section--inv` elements
- Do NOT add scroll-triggered reveal animations, entrance fades, or pulse effects
- Do NOT hardcode hex, rgba, or px values in component `<style>` blocks — use tokens from `global.css`
- Do NOT use emojis in the UI
- Do NOT use `!important` in CSS
- Do NOT add unrequested features or refactor code that isn't broken
- Do NOT rename service codes (WebCanvas, CX&Identity, CMF_Nexus, Lumina.raw) — these are brand terms
- Do NOT rename `off_menu` — it's always lowercase with underscore
