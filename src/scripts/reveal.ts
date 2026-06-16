/**
 * HS108 Motion Helpers
 * Built on the `motion` package (vanilla JS).
 * Import from any Astro <script> block.
 *
 * Usage:
 *   import { revealEl, revealGroup, revealOnLoad, revealGroupOnLoad } from '../scripts/reveal';
 */

import { animate, inView, stagger } from 'motion';

export const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/** Fade + slide up a single element when it scrolls into view */
export function revealEl(
  el: Element | null,
  opts: { y?: number; duration?: number; delay?: number; amount?: number } = {}
) {
  if (!el) return;
  const { y = 20, duration = 0.55, delay = 0, amount = 0.15 } = opts;
  (el as HTMLElement).style.opacity = '0';
  inView(el, () => {
    animate(
      el as HTMLElement,
      { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
      { duration, easing: ease, delay }
    );
  }, { amount });
}

/** Stagger children of a parent element when parent enters the viewport */
export function revealGroup(
  parent: Element | null,
  childSel: string,
  opts: { staggerDelay?: number; duration?: number; y?: number; amount?: number } = {}
) {
  if (!parent) return;
  const { staggerDelay = 0.07, duration = 0.5, y = 20, amount = 0.1 } = opts;
  const children = parent.querySelectorAll<HTMLElement>(childSel);
  if (!children.length) return;
  children.forEach(c => { c.style.opacity = '0'; });
  inView(parent, () => {
    animate(
      children,
      { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
      { duration, easing: ease, delay: stagger(staggerDelay) }
    );
  }, { amount });
}

/** Fade + slide up — fires immediately on load (no scroll trigger) */
export function revealOnLoad(
  el: Element | null,
  opts: { y?: number; duration?: number; delay?: number } = {}
) {
  if (!el) return;
  const { y = 20, duration = 0.55, delay = 0 } = opts;
  (el as HTMLElement).style.opacity = '0';
  animate(
    el as HTMLElement,
    { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
    { duration, easing: ease, delay }
  );
}

/** Stagger children — fires immediately on load (no scroll trigger) */
export function revealGroupOnLoad(
  parent: Element | null,
  childSel: string,
  opts: { staggerDelay?: number; duration?: number; y?: number } = {}
) {
  if (!parent) return;
  const { staggerDelay = 0.07, duration = 0.5, y = 20 } = opts;
  const children = parent.querySelectorAll<HTMLElement>(childSel);
  if (!children.length) return;
  children.forEach(c => { c.style.opacity = '0'; });
  animate(
    children,
    { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
    { duration, easing: ease, delay: stagger(staggerDelay) }
  );
}
