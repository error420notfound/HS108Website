import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DbQN9vuV.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      num: "01",
      code: "WebCanvas",
      name: "Digital Design",
      desc: "End-to-end digital experiences \u2014 from the first wireframe to the final pixel. We design websites, apps, and product interfaces that are intuitive, accessible, and built to perform.",
      deliverables: ["Web design (marketing, product, landing pages)", "App UI design (iOS & Android)", "UX research & user journey mapping", "Wireframes & interactive prototypes", "Responsive design across all breakpoints", "Developer handoff (Figma)"],
      timeline: "4\u201316 weeks",
      accent: "Web \xB7 App \xB7 UI \xB7 UX",
      href: "/services/webcanvas"
    },
    {
      num: "02",
      code: "CX&Identity",
      name: "Branding & Identity",
      desc: "A brand is more than a logo. We build the full identity system \u2014 strategy, visual language, and the guidelines that keep it coherent as your company grows.",
      deliverables: ["Brand strategy & positioning", "Logo system & wordmark", "Type, colour & imagery system", "Packaging design", "Brand guidelines document", "Launch assets & stationery"],
      timeline: "6\u201310 weeks",
      accent: "Logo \xB7 Identity \xB7 Packaging",
      href: "/services/cx-identity"
    },
    {
      num: "03",
      code: "CMF_Nexus",
      name: "Product Design",
      desc: "From concept sketch to production-ready file. We blend design thinking with engineering rigour to develop products that look right, work right, and manufacture efficiently.",
      deliverables: ["Concept sketches & ideation", "CAD modelling & 3D design", "CMF (colour, material, finish) specification", "Prototyping & model making", "Production-ready design files", "Manufacture liaison support"],
      timeline: "8\u201320 weeks",
      accent: "CAD \xB7 Prototype \xB7 Production",
      href: "/services/cmf-nexus"
    },
    {
      num: "04",
      code: "Lumina.raw",
      name: "Photo & Video",
      desc: "Visuals that stop the scroll. We produce photography and video content that tells your story with precision \u2014 from product shoots to brand films, edited and ready to publish.",
      deliverables: ["Product & campaign photography", "Photo editing & retouching", "Brand & documentary videography", "Video editing & post-production", "Social media content packages", "Motion graphics"],
      timeline: "1\u20136 weeks",
      accent: "Photo \xB7 Video \xB7 Motion",
      href: "/services/lumina-raw"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Services", "label": "What We Do", "description": "HS108 design services \u2014 WebCanvas, CX&Identity, CMF_Nexus, and Lumina.raw. Digital design, branding, product design, and visual production.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container svc-intro" data-astro-cid-ucd2ps2b> <div class="svc-intro-statement-wrap" data-astro-cid-ucd2ps2b> <p class="svc-intro-statement" data-wipe data-astro-cid-ucd2ps2b>
Four specialised practices.<br data-astro-cid-ucd2ps2b><em data-astro-cid-ucd2ps2b>One studio.</em> </p> </div> <p class="svc-intro-lede" data-fade data-astro-cid-ucd2ps2b>
We don't offer everything — we offer the things we're exceptional at.
      Each practice is deep, not broad. Senior talent, strategic thinking, and craft at every level.
</p> </div> <hr data-astro-cid-ucd2ps2b>  <div class="svc-list" data-astro-cid-ucd2ps2b> ${services.map((svc, i) => renderTemplate`<a${addAttribute(svc.href, "href")} class="svc-row" data-fade data-astro-cid-ucd2ps2b> <div class="container svc-row-inner" data-astro-cid-ucd2ps2b> <div class="svc-row-left" data-astro-cid-ucd2ps2b> <span class="svc-row-num" data-astro-cid-ucd2ps2b>${svc.num}</span> <div class="svc-row-name-block" data-astro-cid-ucd2ps2b> <span class="svc-row-code" data-astro-cid-ucd2ps2b>${svc.code}</span> <h2 class="svc-row-name" data-astro-cid-ucd2ps2b>${svc.name}</h2> </div> </div> <div class="svc-row-mid" data-astro-cid-ucd2ps2b> <p class="svc-row-desc" data-astro-cid-ucd2ps2b>${svc.desc}</p> </div> <div class="svc-row-right" data-astro-cid-ucd2ps2b> <span class="svc-row-timeline" data-astro-cid-ucd2ps2b>${svc.timeline}</span> <span class="svc-row-arrow" data-astro-cid-ucd2ps2b>&rarr;</span> </div> </div> </a>`)} </div> <hr data-astro-cid-ucd2ps2b>  <div class="container svc-detail" data-astro-cid-ucd2ps2b> <p class="t-label svc-detail-label" data-wipe data-astro-cid-ucd2ps2b>What's Included</p> <div class="svc-detail-grid" data-astro-cid-ucd2ps2b> ${services.map((svc) => renderTemplate`<div class="svc-detail-card" data-fade data-astro-cid-ucd2ps2b> <div class="svc-detail-header" data-astro-cid-ucd2ps2b> <span class="svc-detail-code" data-astro-cid-ucd2ps2b>${svc.code}</span> <span class="svc-detail-name" data-astro-cid-ucd2ps2b>${svc.name}</span> </div> <ul class="svc-detail-list" data-astro-cid-ucd2ps2b> ${svc.deliverables.map((d) => renderTemplate`<li class="svc-detail-item" data-astro-cid-ucd2ps2b>${d}</li>`)} </ul> <a${addAttribute(svc.href, "href")} class="svc-detail-link" data-astro-cid-ucd2ps2b>Full Practice &rarr;</a> </div>`)} </div> </div> <hr data-astro-cid-ucd2ps2b>  <div class="container svc-programs" data-astro-cid-ucd2ps2b> <p class="t-label svc-programs-label" data-wipe data-astro-cid-ucd2ps2b>Also From HS108</p> <div class="programs-grid" data-astro-cid-ucd2ps2b> <a href="/programs/creative-department" class="program-card" data-fade data-astro-cid-ucd2ps2b> <p class="t-label program-code" data-astro-cid-ucd2ps2b>Creative Department</p> <p class="program-desc" data-astro-cid-ucd2ps2b>Our flagship retainer — an embedded design team that grows with your business.</p> <span class="program-link" data-astro-cid-ucd2ps2b>Learn More &rarr;</span> </a> <a href="/programs/design-lab" class="program-card" data-fade data-astro-cid-ucd2ps2b> <p class="t-label program-code" data-astro-cid-ucd2ps2b>Design Lab</p> <p class="program-desc" data-astro-cid-ucd2ps2b>Research and discovery for high-demand, complex design challenges.</p> <span class="program-link" data-astro-cid-ucd2ps2b>Learn More &rarr;</span> </a> <a href="/programs/off-menu" class="program-card" data-fade data-astro-cid-ucd2ps2b> <p class="t-label program-code" data-astro-cid-ucd2ps2b>off_menu</p> <p class="program-desc" data-astro-cid-ucd2ps2b>Bespoke, tailor-made packages for clients with unique requirements.</p> <span class="program-link" data-astro-cid-ucd2ps2b>Learn More &rarr;</span> </a> <a href="/programs/field-notes" class="program-card" data-fade data-astro-cid-ucd2ps2b> <p class="t-label program-code" data-astro-cid-ucd2ps2b>Field Notes</p> <p class="program-desc" data-astro-cid-ucd2ps2b>A platform for discourse with designers, artisans, and industry thinkers.</p> <span class="program-link" data-astro-cid-ucd2ps2b>Learn More &rarr;</span> </a> </div> </div>  <section class="inv-block" data-fade data-astro-cid-ucd2ps2b> <div class="container svc-callout" data-astro-cid-ucd2ps2b> <p class="t-label svc-callout-label" data-astro-cid-ucd2ps2b>Not sure what you need?</p> <h2 class="svc-callout-headline" data-astro-cid-ucd2ps2b>Start with a conversation.</h2> <p class="svc-callout-sub" data-astro-cid-ucd2ps2b>
Most projects don't fit neatly into one service. Tell us what you're building
        and we'll figure out the right scope together.
</p> <a href="/contact" class="btn btn--outline-inv" data-astro-cid-ucd2ps2b>Get In Touch</a> </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "invert": false, "data-astro-cid-ucd2ps2b": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/services.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
