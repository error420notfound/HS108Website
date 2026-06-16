import { e as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, d as renderTemplate, r as renderComponent, g as renderSlot, l as renderHead } from './astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://hs108.in");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const serviceLinks = [
    { label: "WebCanvas", sub: "Digital Design", href: "/services/webcanvas" },
    { label: "CX&Identity", sub: "Branding & Identity", href: "/services/cx-identity" },
    { label: "CMF_Nexus", sub: "Product Design", href: "/services/cmf-nexus" },
    { label: "Lumina.raw", sub: "Photo & Video", href: "/services/lumina-raw" }
  ];
  const programLinks = [
    { label: "Creative Department", sub: "Retainer", href: "/programs/creative-department" },
    { label: "Design Lab", sub: "Research", href: "/programs/design-lab" },
    { label: "off_menu", sub: "Bespoke", href: "/programs/off-menu" },
    { label: "Field Notes", sub: "Community", href: "/programs/field-notes" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="nav-wrap" data-astro-cid-dmqpwcec> <nav class="nav container" data-astro-cid-dmqpwcec> <a href="/" class="nav-logo" aria-label="HS108 Home" data-astro-cid-dmqpwcec> <img src="/logo.svg" alt="HS108" class="nav-logo-image" data-astro-cid-dmqpwcec> </a> <!-- Desktop links --> <ul class="nav-links" role="list" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec> <a href="/work"${addAttribute(["nav-link", { active: currentPath.startsWith("/work") }], "class:list")} data-astro-cid-dmqpwcec>Work</a> </li> <!-- Services dropdown --> <li class="nav-item--dropdown" data-astro-cid-dmqpwcec> <a href="/services"${addAttribute(["nav-link nav-link--dropdown", { active: currentPath.startsWith("/services") }], "class:list")} data-astro-cid-dmqpwcec>
Services <span class="nav-chevron" data-astro-cid-dmqpwcec>▾</span> </a> <div class="nav-dropdown" data-astro-cid-dmqpwcec> ${serviceLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(["nav-dropdown-item", { active: currentPath === link.href }], "class:list")} data-astro-cid-dmqpwcec> <span class="nav-dropdown-label" data-astro-cid-dmqpwcec>${link.label}</span> <span class="nav-dropdown-sub" data-astro-cid-dmqpwcec>${link.sub}</span> </a>`)} </div> </li> <li data-astro-cid-dmqpwcec> <a href="/process"${addAttribute(["nav-link", { active: currentPath.startsWith("/process") }], "class:list")} data-astro-cid-dmqpwcec>Process</a> </li> <li data-astro-cid-dmqpwcec> <a href="/about"${addAttribute(["nav-link", { active: currentPath.startsWith("/about") }], "class:list")} data-astro-cid-dmqpwcec>About</a> </li> <!-- Programs dropdown --> <li class="nav-item--dropdown" data-astro-cid-dmqpwcec> <a href="/programs"${addAttribute(["nav-link nav-link--dropdown", { active: currentPath.startsWith("/programs") }], "class:list")} data-astro-cid-dmqpwcec>
Programs <span class="nav-chevron" data-astro-cid-dmqpwcec>▾</span> </a> <div class="nav-dropdown" data-astro-cid-dmqpwcec> ${programLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(["nav-dropdown-item", { active: currentPath === link.href }], "class:list")} data-astro-cid-dmqpwcec> <span class="nav-dropdown-label" data-astro-cid-dmqpwcec>${link.label}</span> <span class="nav-dropdown-sub" data-astro-cid-dmqpwcec>${link.sub}</span> </a>`)} </div> </li> </ul> <a href="/contact" class="btn btn--primary nav-cta" data-astro-cid-dmqpwcec>Get In Touch</a> <!-- Mobile hamburger --> <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile" data-astro-cid-dmqpwcec> <span class="bar" data-astro-cid-dmqpwcec></span> <span class="bar" data-astro-cid-dmqpwcec></span> <span class="bar" data-astro-cid-dmqpwcec></span> </button> </nav> <!-- Mobile dropdown menu --> <div class="nav-mobile" id="nav-mobile" aria-hidden="true" data-astro-cid-dmqpwcec> <ul role="list" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec> <a href="/work"${addAttribute(["nav-mobile-link", { active: currentPath.startsWith("/work") }], "class:list")} data-astro-cid-dmqpwcec>Work</a> </li> <!-- Services accordion --> <li class="nav-mobile-accordion" data-astro-cid-dmqpwcec> <button class="nav-mobile-link nav-mobile-accordion-btn" aria-expanded="false" data-astro-cid-dmqpwcec>
Services <span class="nav-acc-chevron" data-astro-cid-dmqpwcec>▾</span> </button> <ul class="nav-mobile-submenu" role="list" data-astro-cid-dmqpwcec> <li class="nav-mobile-group-label" data-astro-cid-dmqpwcec> <span class="t-label" style="opacity:0.4" data-astro-cid-dmqpwcec>Services</span> </li> ${serviceLinks.map((link) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(link.href, "href")}${addAttribute(["nav-mobile-link nav-mobile-link--sub", { active: currentPath === link.href }], "class:list")} data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec>${link.label}</span> <span class="nav-sub-tag" data-astro-cid-dmqpwcec>${link.sub}</span> </a> </li>`)} </ul> </li> <li data-astro-cid-dmqpwcec> <a href="/process"${addAttribute(["nav-mobile-link", { active: currentPath.startsWith("/process") }], "class:list")} data-astro-cid-dmqpwcec>Process</a> </li> <li data-astro-cid-dmqpwcec> <a href="/about"${addAttribute(["nav-mobile-link", { active: currentPath.startsWith("/about") }], "class:list")} data-astro-cid-dmqpwcec>About</a> </li> <!-- Programs accordion --> <li class="nav-mobile-accordion" data-astro-cid-dmqpwcec> <button class="nav-mobile-link nav-mobile-accordion-btn" aria-expanded="false" data-astro-cid-dmqpwcec>
Programs <span class="nav-acc-chevron" data-astro-cid-dmqpwcec>▾</span> </button> <ul class="nav-mobile-submenu" role="list" data-astro-cid-dmqpwcec> <li class="nav-mobile-group-label" data-astro-cid-dmqpwcec> <span class="t-label" style="opacity:0.4" data-astro-cid-dmqpwcec>Programs</span> </li> ${programLinks.map((link) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(link.href, "href")}${addAttribute(["nav-mobile-link nav-mobile-link--sub", { active: currentPath === link.href }], "class:list")} data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec>${link.label}</span> <span class="nav-sub-tag" data-astro-cid-dmqpwcec>${link.sub}</span> </a> </li>`)} </ul> </li> </ul> <div class="nav-mobile-footer" data-astro-cid-dmqpwcec> <a href="/contact" class="btn btn--primary nav-mobile-cta" data-astro-cid-dmqpwcec>Get In Touch →</a> </div> </div> </header>  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" }
  ];
  const programs = [
    { label: "Creative Department", href: "/programs/creative-department" },
    { label: "Design Lab", href: "/programs/design-lab" },
    { label: "off_menu", href: "/programs/off-menu" },
    { label: "Field Notes", href: "/programs/field-notes" }
  ];
  const subdomains = [
    { label: "docs.hs108.in", href: "https://docs.hs108.in", desc: "Design Documents" },
    { label: "field-notes.hs108.in", href: "https://field-notes.hs108.in", desc: "Blog" },
    { label: "toolkit.hs108.in", href: "https://toolkit.hs108.in", desc: "Design Toolkit" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-main container" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <a href="/" class="footer-logo" aria-label="HS108 Home" data-astro-cid-sz7xmlte> <img src="/logo.svg" alt="HS108" class="footer-logo-image" data-astro-cid-sz7xmlte> </a> <p class="t-body footer-tagline" data-astro-cid-sz7xmlte>
An independent design studio<br data-astro-cid-sz7xmlte>building brands &amp; products that scale.
</p> <a href="mailto:contact.studio@hs108.in" class="footer-email link-swap" data-astro-cid-sz7xmlte>contact.studio@hs108.in</a> <a href="https://we.directory/hs108" class="footer-featured" target="_blank" rel="noopener noreferrer" aria-label="HS108 on we.directory" data-astro-cid-sz7xmlte> <span class="t-mono footer-featured-copy" data-astro-cid-sz7xmlte>Featured on we.directory</span> <img src="/we_logo1_black.svg" alt="we.directory badge" class="footer-featured-badge" data-astro-cid-sz7xmlte> </a> </div> <div class="footer-cols" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="t-label footer-col-label" data-astro-cid-sz7xmlte>Navigation</p> <ul role="list" data-astro-cid-sz7xmlte> ${footerLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${link.label}</a></li>`)} </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="t-label footer-col-label" data-astro-cid-sz7xmlte>Programs</p> <ul role="list" data-astro-cid-sz7xmlte> ${programs.map((p) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(p.href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${p.label}</a></li>`)} </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="t-label footer-col-label" data-astro-cid-sz7xmlte>HS108 Network</p> <ul role="list" data-astro-cid-sz7xmlte> ${subdomains.map((s) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(s.href, "href")} class="footer-link footer-link--ext" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> ${s.label} <span class="footer-link-desc" data-astro-cid-sz7xmlte>${s.desc}</span> </a> </li>`)} </ul> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="t-label footer-col-label" data-astro-cid-sz7xmlte>Status</p> <div class="footer-status" data-astro-cid-sz7xmlte> <span class="status-dot" data-astro-cid-sz7xmlte></span> <span class="t-mono" data-astro-cid-sz7xmlte>Accepting projects</span> </div> <p class="t-mono footer-location" data-astro-cid-sz7xmlte>Based in India<br data-astro-cid-sz7xmlte>Working worldwide</p> </div> </div> </div> <div class="footer-bar container" data-astro-cid-sz7xmlte> <p class="t-mono footer-copy" data-astro-cid-sz7xmlte>&copy; ${year} HS108. All rights reserved.</p> <p class="t-mono" data-astro-cid-sz7xmlte>Designed &amp; built in-house.</p> </div> </footer> `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/Footer.astro", void 0);

const $$DevBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="dev-banner" class="dev-banner" role="alert" aria-live="polite" data-astro-cid-yqf56exm> <p class="dev-banner-msg" data-astro-cid-yqf56exm> <span class="dev-banner-tag" data-astro-cid-yqf56exm>Dev Preview</span>
This site is under development — content is subject to change. For any concerns, reach us at
<a href="mailto:contact.studio@hs108.in" data-astro-cid-yqf56exm>contact.studio@hs108.in</a> </p> <button id="dev-banner-close" class="dev-banner-close" aria-label="Dismiss notice" data-astro-cid-yqf56exm>✕</button> </div>  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/DevBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hs108.in");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "HS108 \u2014 An independent design studio building brands and products that scale.",
    ogImage = "/socialshare.png",
    bodyClass = ""
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const siteURL = Astro2.site ?? new URL("https://hs108.in");
  const absoluteImage = new URL(ogImage, siteURL).toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', ' \u2014 HS108</title><meta name="description"', '><link rel="canonical"', '><!-- OG / Social --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1280"><meta property="og:image:height" content="640"><meta property="og:image:type" content="image/png"><meta property="og:url"', '><meta property="og:site_name" content="HS108"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGX332HQF0"><\/script><!-- Preconnect for Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Anti-FOUC: hide banner offset immediately if previously dismissed --><script>
      if (localStorage.getItem('hs108-dev-banner-dismissed') === 'true') {
        document.documentElement.style.setProperty('--banner-h', '0px');
      }
    <\/script>`, "</head> <body", "> ", " ", " <main> ", " </main> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(`${title} \u2014 HS108`, "content"), addAttribute(description, "content"), addAttribute(absoluteImage, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} \u2014 HS108`, "content"), addAttribute(description, "content"), addAttribute(absoluteImage, "content"), renderHead(), addAttribute(bodyClass, "class"), renderComponent($$result, "DevBanner", $$DevBanner, {}), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
