# HS108 Design System
### A complete reference for building sites that feel like HS108

Use this document to build any HS108 subdomain site (docs, field-notes, toolkit) that shares the same visual language, motion, and feel as the main site. Copy the CSS sections directly — they are the exact source of truth.

---

## Table of Contents

1. [Philosophy](#1-philosophy)
2. [Stack & Setup](#2-stack--setup)
3. [Fonts](#3-fonts)
4. [Type Scale & Classes](#4-type-scale--classes)
5. [Color Palette](#5-color-palette)
6. [Semantic Tokens](#6-semantic-tokens)
7. [Theming System](#7-theming-system)
8. [Spacing & Layout](#8-spacing--layout)
9. [CSS Reset & Base](#9-css-reset--base)
10. [Utility Classes](#10-utility-classes)
11. [Buttons](#11-buttons)
12. [Tags & Labels](#12-tags--labels)
13. [Component Patterns](#13-component-patterns)
14. [Section Patterns](#14-section-patterns)
15. [Motion System](#15-motion-system)
16. [The Don'ts](#16-the-donts)

---

## 1. Philosophy

**Brutalist. Bold. No decoration for decoration's sake.**

Every design decision should be intentional and structural. The aesthetic comes from the grid, the type, the border, and the color — not from shadows, gradients, or rounded corners.

### Core rules

- `border-radius: 0` on **everything**. Always.
- No `box-shadow`. No `filter: blur`. No glassmorphism.
- All borders are `2px solid` — never `1px`, never dashed.
- Hover states are **fill swaps** — the background fills with the accent color. Never underline, never glow, never scale.
- Section dividers are `<hr>` at full width, 2px.
- Labels and UI text are always Geist Mono, uppercase, `letter-spacing: 0.12–0.14em`.
- Inverted sections use a dark background (`--black-native`) with light text. Nothing else.
- Animations are intentional entrances — no bounce, no parallax, no scroll-triggered decorative motion.

---

## 2. Stack & Setup

```
Framework:  Astro (static output preferred)
CSS:        Raw CSS custom properties — no Tailwind, no Bootstrap
Fonts:      Google Fonts CDN (or self-hosted woff2)
Motion:     motion (npm package — vanilla JS, same creator as Framer Motion)
Forms:      Formspree (no backend needed)
```

### Install motion

```bash
npm install motion
```

### 3 CSS files to copy

Copy these exact files into your project:

| File | Purpose |
|---|---|
| `global.css` | Color tokens, theme classes, reset, layout utilities |
| `typography.css` | Font imports, type scale classes |
| `brutalist.css` | Buttons, tags, borders, grid utilities |

Import all three in your root layout `<head>`:

```html
<link rel="stylesheet" href="/styles/global.css" />
<link rel="stylesheet" href="/styles/typography.css" />
<link rel="stylesheet" href="/styles/brutalist.css" />
```

---

## 3. Fonts

### Google Fonts import

Paste this at the top of `typography.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Genos:ital,wght@0,400;0,700;1,400;1,700&family=Michroma&family=Rajdhani:wght@300;400;500;600;700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
```

### Font roles

| Font | Variable | Weight | Use |
|---|---|---|---|
| **Instrument Serif** | `--font-display` | 400 only | All headlines, hero text, display type |
| **Geist** | `--font-body` | 300–700 | All body copy, paragraphs |
| **Geist Mono** | `--font-mono` | 400–500 | ALL buttons, ALL labels, CTAs, nav links, micro copy |
| Genos | `--font-alt-a-display` | 700 italic | Alt pair A — bold display (selective use) |
| Rajdhani | `--font-alt-a-body` | 400–600 | Alt pair A — body companion |
| Michroma | `--font-alt-b-display` | 400 | Alt pair B — geometric technical display |
| IBM Plex Serif | `--font-alt-b-body` | 400–600 | Alt pair B — editorial body |

### Critical font rules

- **Instrument Serif only has weight 400.** Never set `font-weight: 700` on it. It will fall back to system serif and look wrong.
- **The signature treatment is italic.** Use `font-style: italic` on display headings. This is the studio's visual identity.
- **Geist Mono for all UI text.** Nav links, button text, tags, form labels, stat labels — all Geist Mono. Never use Instrument Serif for small text.
- Genos and Michroma are available but used selectively on specific program/service pages. Do not use them as a default.

### CSS variables

```css
:root {
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body:    'Geist', 'Arial', sans-serif;
  --font-mono:    'Geist Mono', 'Courier New', monospace;

  --font-alt-a-display: 'Genos', sans-serif;
  --font-alt-a-body:    'Rajdhani', sans-serif;
  --font-alt-b-display: 'Michroma', sans-serif;
  --font-alt-b-body:    'IBM Plex Serif', Georgia, serif;
}
```

---

## 4. Type Scale & Classes

### Size tokens

```css
:root {
  --size-hero:  clamp(64px, 12vw, 160px);
  --size-h1:    clamp(40px, 6.5vw, 88px);
  --size-h2:    clamp(28px, 4vw, 52px);
  --size-h3:    clamp(20px, 2.2vw, 30px);
  --size-body:  clamp(15px, 1.1vw, 18px);
  --size-small: 13px;
  --size-label: 11px;
}
```

### Type utility classes

```css
/* Hero headline — italic serif at maximum scale */
.t-hero {
  font-family: var(--font-display);
  font-size: var(--size-hero);
  font-weight: 400;
  font-style: italic;
  line-height: 0.9;
  letter-spacing: -0.01em;
}

/* Hero upright — accent word, no italic */
.t-hero-upright {
  font-family: var(--font-display);
  font-size: var(--size-hero);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.01em;
}

.t-h1 {
  font-family: var(--font-display);
  font-size: var(--size-h1);
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -0.01em;
}

.t-h2 {
  font-family: var(--font-display);
  font-size: var(--size-h2);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.005em;
}

.t-h3 {
  font-family: var(--font-display);
  font-size: var(--size-h3);
  font-weight: 400;
  line-height: 1.2;
}

.t-body {
  font-family: var(--font-body);
  font-size: var(--size-body);
  font-weight: 400;
  line-height: 1.65;
}

.t-large {
  font-family: var(--font-body);
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 400;
  line-height: 1.45;
}

/* Labels — always Geist Mono, uppercase */
.t-label {
  font-family: var(--font-mono);
  font-size: var(--size-label);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* Mono body — for code, data, small captions */
.t-mono {
  font-family: var(--font-mono);
  font-size: var(--size-small);
  font-weight: 400;
  line-height: 1.5;
}
```

### Heading patterns

**The accent word** — in hero headlines, one key word is upright (not italic) and colored with `--accent`:

```html
<h1 class="t-hero">
  Design Built to<br />
  <span style="font-style: normal; color: var(--accent)">Scale.</span>
</h1>
```

**Italic heading + upright label above it** — the standard section header pattern:

```html
<p class="t-label" style="opacity: 0.4">Section Label</p>
<h2 class="t-h2"><em>Heading in italic</em></h2>
```

---

## 5. Color Palette

All 19 hue scales are available. Each scale has 11 steps (50–950) plus two anchors: `*-black-native` (the darkest version of the hue's black) and `*-white-native` (the lightest, used as page background on that theme).

### The primary palette — Orange (site default)

```css
--orange-50:  #FFF4F0;
--orange-100: #FFE1D8;   /* ← page background in default theme */
--orange-200: #FFC3B0;
--orange-300: #FFA287;
--orange-400: #FF825E;
--orange-500: #ED582A;   /* ← primary accent */
--orange-600: #D04C23;
--orange-700: #B13F1C;   /* ← button hover, blockquote */
--orange-800: #933215;
--orange-900: #6C240E;
--orange-950: #3A1307;
--orange-black-native: #120600;   /* ← all text, borders */
--orange-white-native: #FFE1D8;
```

### All available hue names

`orange` · `lime` · `yellow` · `green` · `blue` · `rose` · `indigo` · `pink` · `purple` · `cyan` · `teal` · `mint` · `amber` · `brown` · `red` · `vermilion` · `warm` · `cool` · `neutral`

Every hue follows the same naming pattern: `--{hue}-50` through `--{hue}-950` plus `--{hue}-black-native` and `--{hue}-white-native`.

> **Never use raw hex values in components.** Always use semantic tokens or hue-scale variables. Raw values break when themes switch.

---

## 6. Semantic Tokens

These are the variables you reference in components. They automatically adapt when a theme class is applied.

```css
:root {
  /* Surfaces */
  --bg:               var(--surface-base);      /* page background */
  --fg:               var(--text-on-light);     /* all text */
  --surface-base:     var(--white-native);       /* = --orange-100 */
  --surface-elevated: var(--orange-50);          /* cards, alt sections */

  /* Text */
  --text-on-dark:     var(--orange-100);         /* text on inverted sections */

  /* Accents */
  --accent:           var(--orange-500);
  --accent-strong:    var(--orange-700);
  --accent-soft:      var(--orange-100);

  /* Actions */
  --action-primary-bg:   var(--orange-500);
  --action-primary-fg:   var(--black-native);
  --action-strong-bg:    var(--orange-700);
  --action-strong-fg:    var(--orange-50);
  --action-inverse-bg:   var(--black-native);
  --action-inverse-fg:   var(--orange-500);

  /* Borders */
  --border:           var(--black-native);
  --border-width:     2px;

  /* Fixed */
  --black-native:     #120600;
  --white-native:     #FFE1D8;

  /* Transitions */
  --transition:       150ms ease;
}
```

### Using tokens correctly

```css
/* CORRECT — uses semantic tokens */
.my-card {
  background: var(--surface-elevated);
  border: var(--border-width) solid var(--border);
  color: var(--fg);
}

.my-card:hover {
  background: var(--accent);
  color: var(--black-native);
}

/* WRONG — hardcoded values break theming */
.my-card {
  background: #FFF4F0;
  border: 2px solid #120600;
}
```

---

## 7. Theming System

Apply a theme by adding a class to `<body>` (or to a section wrapper).

```html
<body class="theme-blue">
```

Each theme class overrides all semantic tokens. **The key rule:** always set `--bg` and `--fg` explicitly in every theme class — never rely on the `var(--surface-base)` inheritance chain, because that chain breaks when intermediate variables are overridden on `body`.

### Available theme classes

| Class | Bg color | Accent | Feel |
|---|---|---|---|
| `theme-orange` | `#FFE1D8` | `#ED582A` | Default HS108 (warm, bold) |
| `theme-blue` | `#CFE6FE` | `#2186EB` | Digital, clean, WebCanvas |
| `theme-green` | `#D3FCE1` | `#36D35E` | Fresh, Lumina.raw |
| `theme-purple` | `#F1EAF9` | `#7F56C2` | CX&Identity |
| `theme-vermilion` | `#FFE6DF` | `#F03A17` | Intense, CMF_Nexus |
| `theme-rose` | `#FFE0E0` | `#E63946` | Warm editorial, Creative Dept |
| `theme-teal` | `#E5F4F0` | `#2F9E8F` | Field Notes |
| `theme-cool` | `#EEF2F6` | `#88919A` | off_menu, understated |
| `theme-lime` | `#F3F8C9` | `#9EC70A` | Energetic |
| `theme-yellow` | `#FFF9CC` | `#FFF600` | Bright, playful |
| `theme-indigo` | `#E7E2FE` | `#6A48EC` | Deep, strategic |
| `theme-pink` | `#FDE6EC` | `#D84C78` | Soft editorial |
| `theme-cyan` | `#E6F6F8` | `#2FB3C2` | Light tech |
| `theme-mint` | `#E6F6F1` | `#44AE94` | Calm, natural |
| `theme-amber` | `#FEEED0` | `#F08C00` | Rich, warm |
| `theme-brown` | `#F3EDE5` | `#8E6F54` | Earthy, craft |
| `theme-red` | `#FEE5E3` | `#DC2626` | Urgent |
| `theme-warm` | `#F2F1EE` | `#8E8A82` | Warm neutral |
| `theme-neutral` | `#F3F3F3` | `#888888` | Pure neutral |

### Theme class structure (copy this pattern for any hue)

```css
.theme-blue {
  --bg:                  var(--blue-100);
  --fg:                  var(--blue-black-native);
  --white-native:        var(--blue-white-native);
  --black-native:        var(--blue-black-native);
  --surface-base:        var(--blue-100);
  --surface-elevated:    var(--blue-50);
  --accent:              var(--blue-500);
  --accent-strong:       var(--blue-700);
  --accent-soft:         var(--blue-100);
  --text-on-dark:        var(--blue-100);
  --action-primary-bg:   var(--blue-500);
  --action-primary-fg:   var(--blue-black-native);
  --action-secondary-bg: var(--blue-100);
  --action-secondary-fg: var(--blue-black-native);
  --action-strong-bg:    var(--blue-700);
  --action-strong-fg:    var(--blue-white-native);
  --action-inverse-bg:   var(--blue-black-native);
  --action-inverse-fg:   var(--blue-400);
  --hue-on-dark:         var(--blue-950);
  --text-on-hue:         var(--blue-black-native);
}
```

### Font pair modifiers

Combine with a theme class to switch fonts for alt-style pages:

```html
<body class="theme-blue font-pair-a">   <!-- Genos + Rajdhani -->
<body class="theme-cool font-pair-b">   <!-- Michroma + IBM Plex Serif -->
```

```css
.font-pair-a {
  --font-display: var(--font-alt-a-display);  /* Genos */
  --font-body:    var(--font-alt-a-body);     /* Rajdhani */
}

.font-pair-b {
  --font-display: var(--font-alt-b-display);  /* Michroma */
  --font-body:    var(--font-alt-b-body);     /* IBM Plex Serif */
}
```

---

## 8. Spacing & Layout

### Spacing tokens

```css
:root {
  --space-section: clamp(72px, 10vw, 140px);   /* padding between major sections */
  --space-gap:     clamp(16px, 2vw, 32px);      /* gap inside grids */
  --space-card:    clamp(20px, 2.5vw, 40px);    /* padding inside cards */
  --max-width:     1440px;                       /* container max width */
  --gutter:        clamp(16px, 4vw, 64px);       /* horizontal page padding */
}
```

### Container

```css
.container {
  width: 100%;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
```

### Section spacing

```css
.section {
  padding-block: var(--space-section);
}

.section--inv {
  background-color: var(--black-native);
  color: var(--text-on-dark);
}

.section--alt {
  background-color: var(--surface-elevated);
}
```

### Grid system

```css
.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-gap); }
.grid-2  { display: grid; grid-template-columns: repeat(2, 1fr);  gap: var(--space-gap); }
.grid-3  { display: grid; grid-template-columns: repeat(3, 1fr);  gap: var(--space-gap); }

/* Span helpers for grid-12 */
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }

@media (max-width: 768px) {
  .grid-12, .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .col-4, .col-6, .col-8, .col-12 { grid-column: span 12; }
}
```

---

## 9. CSS Reset & Base

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--size-body);
  line-height: 1.6;
  overflow-x: hidden;
}

img, video {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

ul, ol { list-style: none; }

/* Divider */
hr {
  border: none;
  border-top: var(--border-width) solid var(--border);
  width: 100%;
}

hr.inv {
  border-top-color: rgba(255, 230, 210, 0.15);
}

/* Selection */
::selection {
  background-color: var(--accent);
  color: var(--black-native);
}

/* Focus ring */
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent-soft); }
```

---

## 10. Utility Classes

```css
/* Inverted dark block */
.inv-block {
  background: var(--black-native);
  color: var(--text-on-dark);
}

/* Text highlight in accent color */
.mark-accent {
  background: var(--accent);
  color: var(--black-native);
  padding: 0 4px;
}

/* Link with background swap on hover */
.link-swap {
  display: inline;
  transition: color var(--transition), background var(--transition);
  padding: 0 2px;
}
.link-swap:hover {
  background: var(--accent);
  color: var(--black-native);
}

/* Borders */
.b-box    { border: var(--border-width) solid var(--border); }
.b-top    { border-top: var(--border-width) solid var(--border); }
.b-bottom { border-bottom: var(--border-width) solid var(--border); }
.b-left   { border-left: var(--border-width) solid var(--border); }
.b-right  { border-right: var(--border-width) solid var(--border); }

/* Section numbering */
.section-num {
  font-family: var(--font-mono);
  font-size: var(--size-label);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.4;
}

/* Image utilities */
.img-raw {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0;
}

.aspect-16-9 { aspect-ratio: 16 / 9; overflow: hidden; }
.aspect-4-3  { aspect-ratio: 4 / 3;  overflow: hidden; }
.aspect-square { aspect-ratio: 1 / 1; overflow: hidden; }
```

---

## 11. Buttons

All buttons use Geist Mono, uppercase, 2px border. Zero radius.

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-family: var(--font-mono);
  font-size: var(--size-label);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: var(--border-width) solid var(--border);
  cursor: pointer;
  transition: background var(--transition), color var(--transition), border-color var(--transition);
  white-space: nowrap;
  border-radius: 0;
}

/* Primary — accent fill */
.btn--primary {
  background: var(--action-primary-bg);
  color: var(--action-primary-fg);
  border-color: var(--action-primary-bg);
}
.btn--primary:hover {
  background: var(--action-strong-bg);
  color: var(--action-strong-fg);
  border-color: var(--action-strong-bg);
}

/* Outline — transparent, dark border */
.btn--outline {
  background: transparent;
  color: var(--black-native);
  border-color: var(--black-native);
}
.btn--outline:hover {
  background: var(--action-primary-bg);
  color: var(--action-primary-fg);
  border-color: var(--action-primary-bg);
}

/* Outline on dark/inverted backgrounds */
.btn--outline-inv {
  background: transparent;
  color: var(--text-on-dark);
  border-color: rgba(255, 225, 216, 0.35);
}
.btn--outline-inv:hover {
  background: var(--action-primary-bg);
  color: var(--action-primary-fg);
  border-color: var(--action-primary-bg);
}
```

### HTML usage

```html
<a href="/contact" class="btn btn--primary">Start a Project</a>
<a href="/work" class="btn btn--outline">See Our Work →</a>
<a href="/process" class="btn btn--outline-inv">See Full Process →</a>
```

---

## 12. Tags & Labels

Square tags (zero radius, 2px border) in Geist Mono:

```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border: var(--border-width) solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--size-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
  border-radius: 0;
}

.tag--accent {
  background: var(--action-primary-bg);
  border-color: var(--action-primary-bg);
  color: var(--action-primary-fg);
}

.tag--inv {
  border-color: rgba(255,255,255,0.3);
  color: var(--text-on-dark);
}
```

```html
<span class="tag">Brand</span>
<span class="tag tag--accent">Active</span>
<span class="tag tag--inv">Case Study</span>
```

---

## 13. Component Patterns

### Stat strip — bordered grid of metrics

```css
.stat-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: var(--border-width) solid var(--border);
  border-left: var(--border-width) solid var(--border);
}

.stat-strip > * {
  border-right: var(--border-width) solid var(--border);
  border-bottom: var(--border-width) solid var(--border);
  padding: var(--space-card);
}

@media (max-width: 640px) {
  .stat-strip { grid-template-columns: repeat(2, 1fr); }
}
```

```html
<div class="stat-strip">
  <div>
    <p class="t-h2">38+</p>
    <p class="t-label" style="opacity:0.5">Brands Scaled</p>
    <p class="t-mono" style="opacity:0.35">Since 2019</p>
  </div>
  <!-- repeat for each stat -->
</div>
```

### Card with border — the generic container

```html
<div class="b-box" style="padding: var(--space-card)">
  <p class="t-label" style="color: var(--accent); opacity: 0.6">Label</p>
  <h3 class="t-h3">Card Title</h3>
  <p class="t-body" style="opacity: 0.6">Description text goes here.</p>
  <a href="#" class="btn btn--outline">Learn More →</a>
</div>
```

### Prose list (numbered with `—` prefix)

```css
.prose ul li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}
.prose ul li::before {
  content: '—';
  position: absolute;
  left: 0;
  font-family: var(--font-mono);
  font-size: 10px;
  opacity: 0.4;
  top: 5px;
}
```

### Marquee ticker (CSS-only)

```css
.marquee-track {
  overflow: hidden;
  white-space: nowrap;
  border-top: var(--border-width) solid var(--border);
  border-bottom: var(--border-width) solid var(--border);
  padding-block: 12px;
}

.marquee-inner {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}

.marquee-inner span {
  padding-inline: 48px;
  font-family: var(--font-mono);
  font-size: var(--size-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

```html
<!-- Duplicate content 4× so the loop is seamless -->
<div class="marquee-track" aria-hidden="true">
  <div class="marquee-inner">
    <span>Item One</span><span>·</span>
    <span>Item Two</span><span>·</span>
    <!-- repeat × 4 -->
  </div>
</div>
```

### Two-column layout (editorial)

```css
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; gap: 2rem; }
}
```

### Status indicator dot

```css
.status-dot {
  width: 8px;
  height: 8px;
  background: #00C47D;
  border-radius: 50%;
  animation: pulse-status 2s ease-in-out infinite;
}

@keyframes pulse-status {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
```

```html
<div style="display:flex; align-items:center; gap:8px">
  <span class="status-dot"></span>
  <span class="t-mono">Accepting projects</span>
</div>
```

---

## 14. Section Patterns

### Hero section

```html
<section class="hero">
  <div class="container hero-inner">

    <!-- Overline bar — bordered top and bottom -->
    <div class="hero-overline">
      <span class="t-label">Independent Design Studio</span>
      <span style="font-family:var(--font-mono);font-size:11px;opacity:0.3">—</span>
      <span class="t-label">Est. 2019</span>
    </div>

    <!-- Main headline — italic serif, large -->
    <h1 class="t-hero">
      Design Built to<br />
      <span style="font-style:normal; color:var(--accent)">Scale.</span>
    </h1>

    <!-- Sub and CTAs -->
    <div class="hero-bottom">
      <p class="t-large" style="opacity:0.65; max-width:55ch">
        Studio tagline. One or two sentences maximum.
      </p>
      <div style="display:flex; flex-direction:column; gap:1rem">
        <a href="/contact" class="btn btn--primary">Start a Project</a>
        <a href="/work" class="btn btn--outline">See Our Work →</a>
      </div>
    </div>
  </div>
</section>
```

```css
.hero {
  min-height: calc(100svh - 64px);
  margin-top: 64px;
  display: flex;
  align-items: center;
  border-bottom: var(--border-width) solid var(--border);
}

.hero-inner {
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-overline {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 12px 0;
  border-top: var(--border-width) solid var(--border);
  border-bottom: var(--border-width) solid var(--border);
}

.hero-bottom {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 3rem;
}
```

### Page header (sub-pages)

```html
<div class="page-header container">
  <span class="t-label" style="opacity:0.4">Section Label</span>
  <h1 class="t-h1">Page Title</h1>
</div>
<hr />
```

```css
.page-header {
  margin-top: 64px;
  padding-top: 4rem;
  padding-bottom: 3rem;
}
```

### Inverted (dark) section

```html
<section class="section section--inv container">
  <p class="t-label" style="opacity:0.4">Label</p>
  <h2 class="t-h2" style="margin-bottom:2rem">Dark Section Heading</h2>
  <p class="t-body" style="opacity:0.6; max-width:55ch">Content here.</p>
  <div style="margin-top:2.5rem">
    <a href="#" class="btn btn--outline-inv">CTA →</a>
  </div>
</section>
```

### Section header pattern (reused on every content section)

```html
<div class="section-header">
  <div>
    <p class="t-label section-num">01 — What We Do</p>
    <h2 class="t-h2">Section Heading</h2>
  </div>
  <a href="/services" class="btn btn--outline">See All →</a>
</div>
```

```css
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: var(--border-width) solid var(--border);
}
```

---

## 15. Motion System

### Library

Use **motion** (npm: `motion`) — vanilla JS, by Matt Perry (creator of Framer Motion). Works in any HTML/JS/Astro project without React.

```bash
npm install motion
```

```js
import { animate, inView, stagger } from 'motion';
```

### The standard easing curve

This is the curve used across the entire HS108 site. It reads as confident and resolved — fast exit, clean stop, no bounce:

```js
const ease = [0.16, 1, 0.3, 1]; // cubic-bezier — ease-out-expo feel
```

Do not use bounce/spring easing. Do not use linear. Do not use `ease-in`.

### Animation values

| Element | Y travel | Duration | Delay |
|---|---|---|---|
| Nav | `8px` | `0.4s` | `0` |
| Hero overline | `14px` | `0.5s` | `0.05s` |
| Hero headline | `28px` | `0.7s` | `0.18s` |
| Hero sub/CTAs | `18px` | `0.55s` | `0.44s` |
| Stat items (stagger) | `20px` | `0.5s` | `stagger(0.08)` |
| Section headers | `16px` | `0.55s` | `0` |
| Card grid (stagger) | `20px` | `0.5s` | `stagger(0.07)` |
| List rows (stagger) | `20px` | `0.5s` | `stagger(0.09)` |

Never exceed `28px` of Y travel. Never exceed `0.7s` duration on any single element.

### Pattern 1 — On-load entrance (hero)

```js
import { animate } from 'motion';

const ease = [0.16, 1, 0.3, 1];

const overline = document.querySelector('.hero-overline');
const headline = document.querySelector('.hero-headline');
const bottom   = document.querySelector('.hero-bottom');

// Hide before first paint
[overline, headline, bottom].forEach(el => {
  if (el) el.style.opacity = '0';
});

// Staggered entrance
if (overline) animate(overline, { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0px)'] }, { duration: 0.5, easing: ease, delay: 0.05 });
if (headline) animate(headline, { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0px)'] }, { duration: 0.7, easing: ease, delay: 0.18 });
if (bottom)   animate(bottom,   { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] }, { duration: 0.55, easing: ease, delay: 0.44 });
```

### Pattern 2 — Scroll-triggered entrance (single element)

```js
import { animate, inView } from 'motion';

const ease = [0.16, 1, 0.3, 1];

const el = document.querySelector('.my-section-header');
if (el) {
  el.style.opacity = '0';

  inView(el, () => {
    animate(el,
      { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
      { duration: 0.55, easing: ease }
    );
  }, { amount: 0.15 }); // trigger when 15% of element is visible
}
```

### Pattern 3 — Staggered children on scroll

```js
import { animate, inView, stagger } from 'motion';

const ease = [0.16, 1, 0.3, 1];

const grid = document.querySelector('.my-card-grid');
if (grid) {
  const cards = grid.querySelectorAll('.card');
  cards.forEach(c => { c.style.opacity = '0'; });

  inView(grid, () => {
    animate(
      cards,
      { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
      { duration: 0.5, easing: ease, delay: stagger(0.07) }
    );
  }, { amount: 0.1 });
}
```

### Pattern 4 — Reusable helper function

This is the cleanest approach for pages with many animated sections:

```js
import { animate, inView, stagger } from 'motion';

const ease = [0.16, 1, 0.3, 1];

/**
 * Reveal individual elements when each enters the viewport.
 */
function revealOnScroll(selector, options = {}) {
  const { y = 20, duration = 0.55, amount = 0.15 } = options;

  document.querySelectorAll(selector).forEach(el => {
    el.style.opacity = '0';
    inView(el, () => {
      animate(el,
        { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
        { duration, easing: ease }
      );
    }, { amount });
  });
}

/**
 * Reveal children inside a parent with stagger when parent enters viewport.
 */
function revealStagger(parentSelector, childSelector, options = {}) {
  const { staggerDelay = 0.07, duration = 0.5, amount = 0.1 } = options;

  document.querySelectorAll(parentSelector).forEach(parent => {
    const children = parent.querySelectorAll(childSelector);
    children.forEach(c => { c.style.opacity = '0'; });

    inView(parent, () => {
      animate(
        children,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
        { duration, easing: ease, delay: stagger(staggerDelay) }
      );
    }, { amount });
  });
}

// Usage
revealOnScroll('.section-header');
revealStagger('.card-grid', '.card');
revealStagger('.services-list', '.service-row', { staggerDelay: 0.09 });
```

### In Astro — add to a `<script>` tag at the bottom of the page

```astro
<script>
  import { animate, inView, stagger } from 'motion';
  const ease = [0.16, 1, 0.3, 1] as const;

  // ... animation code here
</script>
```

Astro bundles and tree-shakes these automatically via Vite. The import only loads what you use.

### What NOT to animate

| Avoid | Why |
|---|---|
| `scale` transforms | Feels playful/bouncy — not brutalist |
| `rotate` on anything other than a deliberate UI element | Decorative, not structural |
| Infinite loops (other than the marquee ticker) | Distracting |
| Parallax on scroll | Too editorial/lifestyle |
| Stagger delays beyond `0.12s` | Feels sluggish |
| Durations beyond `0.7s` | Nothing should take longer to appear |
| Animating things that were already visible on page load | Only animate entrances |

---

## 16. The Don'ts

A final checklist. If any of these appear in a codebase, remove them.

```
✗  border-radius on any element (even inputs, selects, images)
✗  box-shadow anywhere
✗  filter: blur or any filter
✗  background gradients
✗  Tailwind, Bootstrap, or any CSS utility framework
✗  font-weight: 700 on Instrument Serif (only weight 400 exists)
✗  Instrument Serif on nav, buttons, labels, or small text
✗  Dark page background (dark is for .inv-block sections only)
✗  Hover states that use underline, glow, or scale
✗  Animations with spring/bounce easing
✗  Scroll-triggered animations that play on exit
✗  !important in CSS
✗  Inline styles for layout (only for one-off opacity/color tweaks)
✗  Emojis in the UI
✗  Raw hex values in component CSS (always use tokens)
```

---

## Quick-start template (Astro)

Minimum viable page structure that follows all the above:

```astro
---
// src/layouts/BaseLayout.astro
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <title>{Astro.props.title}</title>
  <link rel="stylesheet" href="/styles/global.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
  <link rel="stylesheet" href="/styles/brutalist.css" />
</head>
<body class={Astro.props.bodyClass ?? ''}>
  <slot />
</body>
</html>
```

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="My Page" bodyClass="theme-blue">

  <!-- Hero -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-overline">
        <span class="t-label">Site Label</span>
      </div>
      <h1 class="t-hero">
        Page Headline<br />
        <span style="font-style:normal;color:var(--accent)">Accent.</span>
      </h1>
      <div class="hero-bottom">
        <p class="t-large" style="opacity:0.65">Supporting text here.</p>
        <a href="#" class="btn btn--primary">Primary CTA</a>
      </div>
    </div>
  </section>

  <hr />

  <!-- A content section -->
  <section class="section container">
    <div class="section-header">
      <div>
        <p class="t-label section-num">01</p>
        <h2 class="t-h2">Section Heading</h2>
      </div>
    </div>

    <div class="grid-3" id="my-grid">
      {items.map(item => (
        <div class="b-box card" style="padding: var(--space-card)">
          <p class="t-label" style="color:var(--accent)">{item.label}</p>
          <h3 class="t-h3">{item.title}</h3>
          <p class="t-body" style="opacity:0.6">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>

</BaseLayout>

<script>
  import { animate, inView, stagger } from 'motion';
  const ease = [0.16, 1, 0.3, 1] as const;

  // Hero entrance
  const headline = document.querySelector<HTMLElement>('.t-hero');
  if (headline) {
    headline.style.opacity = '0';
    animate(headline,
      { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0px)'] },
      { duration: 0.7, easing: ease, delay: 0.15 }
    );
  }

  // Card grid stagger on scroll
  const grid = document.querySelector<HTMLElement>('#my-grid');
  if (grid) {
    const cards = grid.querySelectorAll<HTMLElement>('.card');
    cards.forEach(c => { c.style.opacity = '0'; });
    inView(grid, () => {
      animate(cards,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
        { duration: 0.5, easing: ease, delay: stagger(0.07) }
      );
    }, { amount: 0.1 });
  }
</script>
```

---

*This document is the source of truth for the HS108 design system. Copy the CSS directly. Follow the motion patterns exactly. When in doubt, do less — the restraint is the aesthetic.*
