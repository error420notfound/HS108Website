# HS108 Frontend System — Build Rules

This file is referenced by CLAUDE.md.
These rules govern all frontend work on HS108 projects.

---

## DESIGN TOKEN RULES

All values live in `src/styles/global.css`. No exceptions.

**Never hardcode these in components:**
- Hex colours or `rgba()` values — use semantic tokens
- Pixel values not on the 8pt scale — use token steps
- Animation durations — use `--transition`, `--duration-marquee`, etc.
- Font families — use `--font-display`, `--font-body`, `--font-mono`

**The locked token set:**
```
COLORS (semantic — use these, not raw palette)
--bg / --fg                 Page background / foreground
--surface-base              Default surface
--surface-elevated          Card / panel background
--accent                    Primary accent (theme-aware)
--accent-strong             Hover / emphasis (theme-aware)
--accent-soft               Tinted background (theme-aware)
--border                    All standard borders
--border-inv                Borders on dark/inverted sections
--border-inv-warm           Warm-tinted border on dark sections
--overlay-light             Subtle divider on light backgrounds
--color-status-green        "Available" indicator dot

Named colour aliases (use when hue is intentional regardless of theme)
--accent-orange             #ED582A
--accent-orange-dark        #B13F1C
--accent-orange-soft        #FFC3B0

TYPOGRAPHY
--font-display              Instrument Serif (400 only — never 700)
--font-body                 Geist
--font-mono                 Geist Mono
--size-hero / --size-h1 / --size-h2 / --size-h3 / --size-body / --size-small / --size-label

SPACING (fluid)
--space-section             clamp(72px, 10vw, 140px)
--space-gap                 clamp(16px, 2vw, 32px)
--space-card                clamp(20px, 2.5vw, 40px)
--gutter                    clamp(16px, 4vw, 64px)
--max-width                 1440px

MOTION
--transition                150ms ease  (hover states only)
--duration-marquee          30s         (marquee ticker)
```

---

## COMPONENT RULES

Build in this order: tokens → base styles → layout → components → page assembly.

**Each component must define:**
- Default state
- Hover state (if interactive) using token-based fill swap, not scale/glow
- Focus state (keyboard nav — always, use `3px solid var(--orange-500)`)
- Mobile layout if different from desktop

**Strict rules:**
- No one-off styles. If a pattern appears more than once, it becomes a component or utility class.
- No inline styles except for truly dynamic values (e.g. JS-set widths, `color` from frontmatter).
- No magic numbers. Every spacing value traces to a token.
- No layout logic inside a component. Components are unaware of their container.
- `border-radius: 0` on everything — zero rounding, always.
- `font-weight: 400` on Instrument Serif — it only has one weight. Never use 700.

---

## LAYOUT SYSTEM

| Breakpoint | Width    | Columns | Behaviour              |
|------------|----------|---------|------------------------|
| Mobile     | < 768px  | 4       | Stack, full-width      |
| Tablet     | 768–1024px | 8     | Adapt, not redesign    |
| Desktop    | > 1024px | 12      | Full layout            |

- All layouts use `.container` (max-width: 1440px, margin-inline: auto, padding-inline: var(--gutter))
- Spacing between sections uses `--space-section` only
- Max-width wrapper applied at the `.container` level — never per-component

---

## MOTION RULES

Motion serves clarity. Not decoration.

**What is allowed:**
- Hover transitions: `background`, `color`, `border-color` using `var(--transition)` (150ms)
- Functional state transitions: hamburger open/close, accordion expand
- The marquee ticker (carries content, not decoration)

**What is never allowed:**
- Scroll-triggered reveal animations (stagger, fade-up, inView)
- Page/section entrance animations (fade-in on load)
- Pulse animations on decorative elements
- Scale transforms on hover (`transform: scale(...)`)
- Any use of the `motion` library for cosmetic effects
- Animating layout properties (width, height, padding)

**The test:** If removing the animation makes the content harder to understand, keep it. If removing it makes no difference to comprehension, remove it.

---

## HARD REFUSALS — never ship these

From the SIAM filter applied to frontend:

- Decorative animations with no functional purpose
- Gradients used for visual interest rather than depth
- Drop shadows (`box-shadow`) as decoration
- `filter: blur` or glassmorphism
- Layouts that require explanation to navigate
- Motion on every element (restraint signals confidence)
- Typography mixing more than 2 families in a single context
- `font-weight: 700` on Instrument Serif
- Hardcoded hex, rgba, or pixel values in component `<style>` blocks

---

## PRE-SHIP VALIDATION CHECKLIST

Run every item before calling a build done.

**Tokens**
- [ ] No hardcoded hex / rgba in components — all via CSS custom properties
- [ ] No hardcoded px values not on 8pt scale
- [ ] No hardcoded animation durations — use token

**Typography**
- [ ] `font-weight: 400` on all Instrument Serif elements
- [ ] Max 2 font families active in any single page context

**Visual**
- [ ] Primary action is the clearest element (3-second scan test)
- [ ] Spacing is consistent — all values on 8pt scale
- [ ] Color contrast meets AA minimum for all text

**Interaction**
- [ ] No decorative animations
- [ ] All interactive elements have focus states
- [ ] Hover states use fill swap, not scale or glow

**Responsive**
- [ ] Tested at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets minimum 44px on mobile

---

## FILE STRUCTURE (Astro)

```
src/
  components/         Reusable UI components (.astro)
  layouts/
    BaseLayout.astro  Root — html, head, SEO, Nav, Footer, all 3 CSS imports
    PageLayout.astro  BaseLayout + standard page header (label + h1)
    WorkLayout.astro  BaseLayout + full case study chrome
  styles/
    global.css        ALL token definitions + reset + layout utilities
    typography.css    Font imports + type scale classes
    brutalist.css     Buttons, tags, borders, grid utilities
  pages/              Route files
  content/work/       MDX case studies
```

Token values live in `global.css`. Never in component `<style>` blocks.
