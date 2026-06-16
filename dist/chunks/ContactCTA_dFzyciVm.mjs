import { e as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, d as renderTemplate } from './astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://hs108.in");
const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  const {
    headline = "Let's build\nsomething together.",
    sub = "We're currently accepting new projects. Tell us what you're working on.",
    invert = true,
    domain
  } = Astro2.props;
  const ctaHref = domain ? `/contact?domain=${domain}` : "/contact";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["cta-section", { "inv-block": invert }], "class:list")} data-astro-cid-rcdzuq3a> <div class="container cta-inner" data-astro-cid-rcdzuq3a> <div class="cta-text" data-astro-cid-rcdzuq3a> <p${addAttribute(["t-label section-num", [{ "inv": invert }]], "class:list")} data-astro-cid-rcdzuq3a>Start a Project</p> <h2 class="t-h1 cta-headline" data-astro-cid-rcdzuq3a>${headline}</h2> <p class="t-body cta-sub" data-astro-cid-rcdzuq3a>${sub}</p> </div> <div class="cta-actions" data-astro-cid-rcdzuq3a> <a${addAttribute(ctaHref, "href")}${addAttribute(["btn", invert ? "btn--outline-inv" : "btn--primary"], "class:list")} data-astro-cid-rcdzuq3a>
Get In Touch
</a> <a href="mailto:contact.studio@hs108.in"${addAttribute(["btn", invert ? "btn--primary" : "btn--outline"], "class:list")} data-astro-cid-rcdzuq3a>
contact.studio@hs108.in
</a> </div> </div> </section> `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
