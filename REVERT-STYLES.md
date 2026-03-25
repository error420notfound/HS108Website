# Style Revert Reference

This file documents every value changed during the **warm editorial redesign** (March 2026).
To roll back to the original **brutalist/orange** design, apply the changes below in order.

---

## 1. `src/styles/global.css`

### 1a. Root token values to restore

```css
/* In :root — find and replace these two lines */

/* CURRENT (editorial) → RESTORE TO (brutalist) */
--black-native: #1A1917;   →   --black-native: #120600;
--white-native: #F7F5F0;   →   --white-native: #FFE1D8;
```

### 1b. Font variables to restore

```css
/* In :root — find and replace these two lines */

/* CURRENT (editorial) → RESTORE TO (brutalist) */
--font-display: 'Cormorant Garamond', Georgia, serif;  →  --font-display: 'Instrument Serif', Georgia, serif;
--font-body:    'DM Sans', system-ui, sans-serif;      →  --font-body:    'Geist', 'Arial', sans-serif;
```

### 1c. Remove the redesign token block

Find and delete everything between these two comments (inclusive):

```css
/* =====================================
   REDESIGN TOKENS (§1)
   ...
   --ease-std:   cubic-bezier(0.4, 0, 0.2, 1);
*/
```

(It sits at the very end of `:root`, just before the closing `}`.)

### 1d. Restore the body rule

Replace the current body + heading block with:

```css
body {
  background-color: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--size-body);
  line-height: 1.6;
  overflow-x: hidden;
}
```

Then delete everything from `h1 {` down through the `.eyebrow` class and the `@keyframes fadeUp` block.

### 1e. Remove the GLSL canvas rules

Delete:

```css
/* --- GLSL canvas --- */
#glsl-canvas { ... }
.site-wrapper { ... }
```

---

## 2. `src/styles/typography.css`

### Restore the @import line

```css
/* CURRENT (editorial) — replace with the line below */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...');

/* RESTORE TO (brutalist) */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Genos:ital,wght@0,400;0,700;1,400;1,700&family=Michroma&family=Rajdhani:wght@300;400;500;600;700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
```

---

## 3. `src/layouts/BaseLayout.astro`

### Remove glsl prop and canvas

**Props interface** — remove `glsl?: boolean;` and `glsl = false,`.

**Body** — replace:

```astro
<body class={bodyClass}>
  {glsl && <canvas id="glsl-canvas" aria-hidden="true"></canvas>}
  <div class="site-wrapper">
    <Nav />
    <main><slot /></main>
    <Footer />
  </div>
  {glsl && <script src="/scripts/glsl-field.js" defer></script>}
</body>
```

With:

```astro
<body class={bodyClass}>
  <Nav />
  <main><slot /></main>
  <Footer />
</body>
```

---

## 4. `src/layouts/PageLayout.astro`

Remove `glsl?: boolean;` from Props and `glsl = false,` from destructuring.
Remove `glsl={glsl}` from `<BaseLayout>`.

---

## 5. `src/components/Nav.astro`

### Remove aboutLinks array

Delete:

```js
const aboutLinks = [
  { label: 'Studio',    sub: 'Who we are',    href: '/about' },
  { label: 'Why HS108', sub: 'Why choose us', href: '/why-us' },
  { label: 'Process',   sub: 'How we work',   href: '/process' },
];
```

### Restore desktop nav links

Replace the About dropdown `<li>` block with:

```astro
<li>
  <a href="/process" class:list={['nav-link', { active: currentPath.startsWith('/process') }]}>Process</a>
</li>
<li>
  <a href="/about" class:list={['nav-link', { active: currentPath.startsWith('/about') }]}>About</a>
</li>
```

### Restore mobile nav links

Replace the About accordion `<li class="nav-mobile-accordion">` block with:

```astro
<li>
  <a href="/process" class:list={['nav-mobile-link', { active: currentPath.startsWith('/process') }]}>Process</a>
</li>
<li>
  <a href="/about" class:list={['nav-mobile-link', { active: currentPath.startsWith('/about') }]}>About</a>
</li>
```

### Restore nav styles

In the `<style>` block, restore:

```css
.nav-wrap { background: var(--bg); border-bottom: var(--border-width) solid var(--border); }
.nav { height: 64px; /* no explicit padding */ }
.nav-logo-text { font-family: var(--font-mono); font-size: 18px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--black-native); }
.nav-link { font-family: var(--font-mono); font-size: var(--size-label); letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 14px; color: var(--black-native); height: 64px; }
.nav-link:hover, .nav-link.active { background: var(--orange-500); color: var(--black-native); }
.nav-dropdown { background: var(--bg); border: var(--border-width) solid var(--border); border-top: none; /* no border-radius */ }
.nav-dropdown-item { border-bottom: 1px solid var(--orange-100); }
.nav-dropdown-item:hover { background: var(--orange-500); }
.nav-dropdown-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--black-native); }
.nav-dropdown-sub { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.4; color: var(--black-native); }
/* Remove .nav-cta override — it inherits from .btn.btn--primary */
```

---

## 6. `src/components/Hero.astro`

Restore the full original content:

```astro
---
---

<section class="hero">
  <div class="container hero-inner">
    <div class="hero-overline">
      <span class="t-label">Independent Design Studio</span>
      <span class="hero-sep">—</span>
      <span class="t-label">Est. 2019</span>
      <span class="hero-sep">—</span>
      <span class="t-label hero-status">
        <span class="hero-dot"></span>
        Accepting Projects
      </span>
    </div>

    <h1 class="hero-headline">
      Design<br />
      Built to<br />
      <span class="hero-headline-accent">Scale.</span>
    </h1>

    <div class="hero-bottom">
      <p class="t-large hero-sub">
        We build brands and digital products for companies<br class="hero-br" />
        ready to grow. No generalists. No templates. Just systems<br class="hero-br" />
        that work at scale.
      </p>
      <div class="hero-ctas">
        <a href="/contact" class="btn btn--primary">Start a Project</a>
        <a href="/work" class="btn btn--outline">See Our Work →</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: calc(100svh - 64px);
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: var(--border-width) solid var(--border);
    position: relative;
  }
  .hero-inner { padding-top: 4rem; padding-bottom: 4rem; display: flex; flex-direction: column; gap: 2rem; }
  .hero-overline { display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding: 12px 0; border-top: var(--border-width) solid var(--border); border-bottom: var(--border-width) solid var(--border); }
  .hero-sep { font-family: var(--font-mono); font-size: 11px; opacity: 0.3; }
  .hero-status { display: flex; align-items: center; gap: 6px; }
  .hero-dot { display: inline-block; width: 7px; height: 7px; background: var(--color-status-green); border-radius: 50%; }
  .hero-headline { font-family: var(--font-display); font-size: var(--size-hero); font-weight: 400; font-style: italic; line-height: 0.9; letter-spacing: -0.01em; padding-bottom: 2rem; border-bottom: var(--border-width) solid var(--border); }
  .hero-headline-accent { font-style: normal; color: var(--orange-500); }
  .hero-bottom { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 3rem; }
  .hero-sub { max-width: 55ch; opacity: 0.65; line-height: 1.55; }
  .hero-ctas { display: flex; flex-direction: column; gap: 1rem; flex-shrink: 0; }
  @media (max-width: 900px) {
    .hero-headline-accent { -webkit-text-stroke-width: 2px; }
    .hero-bottom { grid-template-columns: 1fr; }
    .hero-ctas { flex-direction: row; flex-wrap: wrap; }
  }
  @media (max-width: 600px) { .hero-br { display: none; } }
</style>
```

---

## 7. `src/pages/index.astro`

### Restore StatBar import

```js
import StatBar from '@components/StatBar.astro';
```

And restore the stats array:

```js
const stats = [
  { value: '38+',  label: 'Brands Scaled',  sub: 'Since 2019' },
  { value: '5×',   label: 'Avg. Growth',     sub: 'Across active clients' },
  { value: '100%', label: 'Senior Talent',   sub: 'No juniors on your work' },
  { value: '6 yrs', label: 'In Business',   sub: 'Independent, bootstrapped' },
];
```

### Restore hero + stats + ticker in template

```astro
<Hero />
<StatBar stats={stats} />
<div class="marquee-track" aria-hidden="true">
  <div class="marquee-inner">
    {Array(4).fill(null).map(() => (
      <>
        <span>WebCanvas</span><span>·</span>
        <span>CX&amp;Identity</span><span>·</span>
        <span>CMF_Nexus</span><span>·</span>
        <span>Lumina.raw</span><span>·</span>
        <span>Creative Department</span><span>·</span>
        <span>off_menu</span><span>·</span>
      </>
    ))}
  </div>
</div>
```

### Revert eyebrow → t-label patterns

| Current | Restore to |
|---|---|
| `<p class="eyebrow">Selected Work</p>` | `<p class="t-label section-num">Selected Work</p>` |
| `<p class="eyebrow">What We Do</p>` | `<p class="t-label section-num">What We Do</p>` |
| `<p class="eyebrow" ...>How We Work</p>` | `<p class="t-label section-num" style="opacity:0.4">How We Work</p>` |
| `<h2>Our Services</h2>` | `<h2 class="t-h2">Our Services</h2>` |
| `<h2>Our Process</h2>` | `<h2 class="t-h2" style="margin-bottom:3rem">Our Process</h2>` |
| `<p class="eyebrow">Beyond Projects</p>` | `<p class="t-label section-num">Beyond Projects</p>` |

### Restore program cards

```astro
<a href={`/programs/${prog.slug}`} class="program-card b-box">
  <p class="t-label program-name">{prog.name}</p>
  <p class="t-body program-desc">{prog.desc}</p>
  <span class="t-mono program-cta">Learn More →</span>
</a>
```

And restore program card styles:

```css
.program-card { padding: var(--space-card); display: flex; flex-direction: column; gap: 1rem; transition: background var(--transition); }
.program-card:hover { background: var(--orange-500); }
.program-name { color: var(--accent); }
.program-card:hover .program-name { color: var(--black-native); }
.program-desc { opacity: 0.6; line-height: 1.6; flex: 1; font-size: 14px; }
.program-cta { font-size: 10px; opacity: 0.45; margin-top: auto; }
.program-card:hover .program-cta { opacity: 1; }
```

### Remove Field Notes capture block

Delete the `<!-- Field Notes capture -->` section and its styles (`.fn-home-*`).

### Remove `glsl={true}` from BaseLayout

```astro
<BaseLayout title="HS108" description="...">  <!-- no glsl prop -->
```

---

## 8. `src/components/WorkCard.astro`

### Restore class on the anchor

```astro
<a href={`/work/${slug}`} class:list={['work-card b-box', { 'work-card--large': large }]}>
```

### Restore card styles

```css
.work-card { display: flex; flex-direction: column; overflow: hidden; transition: border-color var(--transition), transform var(--transition); text-decoration: none; }
.work-card:hover { border-color: var(--c-yellow); }
.work-card:hover .work-card-img img { transform: scale(1.03); }
.work-card-img img { transition: transform var(--transition); }
.work-card-body { padding: var(--space-card); border-top: var(--border-width) solid var(--border); display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
.work-card-meta { display: flex; justify-content: space-between; align-items: center; opacity: 0.45; }
.work-card-title { line-height: 1.05; }
.work-card-summary { opacity: 0.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.work-card-footer { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; margin-top: auto; padding-top: 1rem; border-top: var(--border-width) solid var(--overlay-light); }
.work-card-cats { display: flex; flex-wrap: wrap; gap: 6px; }
.work-card-outcome { display: flex; flex-direction: column; align-items: flex-end; flex-shrink: 0; }
.work-card-value { font-family: var(--font-display); font-size: 1.5rem; font-weight: 400; letter-spacing: -0.02em; line-height: 1; }
```

---

## 9. `src/pages/about.astro`

### Revert eyebrow labels

| Current | Restore to |
|---|---|
| `<p class="eyebrow" style="margin-bottom:1rem">Our Values</p>` | `<p class="t-label section-num" style="margin-bottom:1rem">Our Values</p>` |
| `<p class="eyebrow" style="margin-bottom:2rem">Who We've Worked With</p>` | `<p class="t-label section-num" style="margin-bottom:2rem">Who We've Worked With</p>` |
| `<h2 style="margin-bottom:3rem">What We Stand For</h2>` | `<h2 class="t-h2" style="margin-bottom:3rem">What We Stand For</h2>` |

### Revert client list

```astro
<div class="clients-row">
  {['NovaPay', 'Urbane Property', 'HealthOS', 'Luma Commerce', 'MedFlow', 'VeritasAI', 'PocketScale', 'OrbitEd'].map(name => (
    <span class="client-name t-h3">{name}</span>
  ))}
</div>
```

Remove the `.client-list a` style block and `client-list` class from the div.

### Remove `glsl={true}` from PageLayout

---

## 10. `src/layouts/WorkLayout.astro`

### Remove the servicesUsedMap and caseStudyServices variables

Delete everything from `// Services used per case study` down to `const caseStudyServices = ...`.

### Remove the Field Notes capture block

Delete the `<!-- Field Notes capture -->` section from the template.

### Remove the Services used block

Delete the `<!-- Services used (§8) -->` section from the template.

### Remove the associated CSS

Delete all styles from `/* ── Field Notes capture */` to the end of the `<style>` block.

---

## 11. `src/components/ContactCTA.astro`

### Restore sub copy

```js
sub = "We're currently accepting new projects. Tell us what you're working on.",
```

### Restore CTA buttons

```astro
<a href="/contact" class:list={['btn', invert ? 'btn--outline-inv' : 'btn--primary']}>Get In Touch</a>
<a href="mailto:contact.studio@hs108.in" class:list={['btn', invert ? 'btn--primary' : 'btn--outline']}>contact.studio@hs108.in</a>
```

---

## 12. `src/pages/contact.astro`

### Remove the path chooser block

Delete the `<!-- Path chooser (Step 0) -->` section from the template.

### Remove path chooser CSS

Delete the `/* ── Path chooser (§9) ── */` block from `<style>`.

### Remove path chooser JS

Delete the `// ── Path chooser (§9) ──` block from `<script>`.

### Remove `glsl={true}` from BaseLayout

---

## 13. `src/pages/why-us.astro` and `src/pages/process.astro`

Remove `glsl={true}` from each page's `<PageLayout>` tag.

---

## 14. Delete `public/scripts/glsl-field.js`

This file was created new — just delete it.

---

## Summary of changed files

| File | What changed |
|---|---|
| `src/styles/global.css` | Token values, font variables, body/heading rules, eyebrow class, GLSL canvas rule, redesign token block |
| `src/styles/typography.css` | Google Fonts @import |
| `src/layouts/BaseLayout.astro` | `glsl` prop + canvas/script |
| `src/layouts/PageLayout.astro` | `glsl` prop forwarding |
| `src/layouts/WorkLayout.astro` | Services-used section + Field Notes capture |
| `src/components/Nav.astro` | About dropdown (added), Process/About standalone links (removed), nav styles |
| `src/components/Hero.astro` | Full rewrite (eyebrow, h1 em/strong, metrics panel, ticker, animations) |
| `src/components/WorkCard.astro` | Card shell styles (border, radius, bg tokens) |
| `src/components/ContactCTA.astro` | Sub copy, secondary CTA link |
| `src/pages/index.astro` | StatBar removal, eyebrow classes, program card styles, Field Notes capture, glsl prop |
| `src/pages/about.astro` | Eyebrow classes, client links, glsl prop |
| `src/pages/why-us.astro` | `glsl` prop |
| `src/pages/process.astro` | `glsl` prop |
| `src/pages/contact.astro` | Path chooser HTML/CSS/JS, glsl prop |
| `public/scripts/glsl-field.js` | New file — delete to revert |
