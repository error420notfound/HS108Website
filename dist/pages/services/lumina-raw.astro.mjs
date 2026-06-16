import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$LuminaRaw = createComponent(($$result, $$props, $$slots) => {
  const deliverables = [
    { group: "Photography", items: ["Product photography", "Campaign & editorial photography", "Brand lifestyle shoots", "Photo retouching & colour grading", "Social media image packages"] },
    { group: "Videography", items: ["Brand films & documentaries", "Product videos", "Campaign & commercial shoots", "Event & interview coverage", "Drone & location footage"] },
    { group: "Post-Production", items: ["Video editing & colour grade", "Motion graphics & title design", "Sound design & music licensing", "Short-form cuts (Reels, TikTok)", "Final export in all required formats"] }
  ];
  const process = [
    { n: "01", title: "Brief", desc: "We align on story, tone, and visual language before anything goes in front of a lens." },
    { n: "02", title: "Pre-Production", desc: "Shot lists, location scouting, talent & equipment planning \u2014 nothing improvised." },
    { n: "03", title: "Production", desc: "The shoot. Controlled, efficient, and directed with a clear creative eye." },
    { n: "04", title: "Edit", desc: "Post-production with full colour work, motion graphics, and formats for every platform." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Lumina.raw \u2014 Photo & Video", "description": "Lumina.raw is HS108's photo and video production practice \u2014 photography, videography, and post-production for brand storytelling.", "bodyClass": "theme-green", "data-astro-cid-36u65ko5": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="svc-hero inv-block" id="svc-hero" data-astro-cid-36u65ko5> <div class="container svc-hero-inner" data-astro-cid-36u65ko5> <div class="svc-hero-top" data-astro-cid-36u65ko5> <span class="t-label svc-service-label" data-astro-cid-36u65ko5>A Service by HS108</span> <span class="t-label svc-code" data-astro-cid-36u65ko5>Lumina.raw</span> </div> <div class="svc-hero-body" data-astro-cid-36u65ko5> <div class="svc-hero-title-wrap" data-astro-cid-36u65ko5> <h1 class="svc-hero-title" data-astro-cid-36u65ko5>Photo<br data-astro-cid-36u65ko5>&amp; <em data-astro-cid-36u65ko5>Video.</em></h1> </div> <div class="svc-hero-right" data-astro-cid-36u65ko5> <p class="svc-tagline" data-astro-cid-36u65ko5>
Visuals that stop the scroll. We produce photography and video content that tells your story with precision — edited and ready to publish.
</p> <div class="svc-meta-row" data-astro-cid-36u65ko5> <div class="svc-meta-item" data-astro-cid-36u65ko5> <span class="svc-meta-label" data-astro-cid-36u65ko5>Timeline</span> <span class="svc-meta-val" data-astro-cid-36u65ko5>1–6 weeks</span> </div> <div class="svc-meta-item" data-astro-cid-36u65ko5> <span class="svc-meta-label" data-astro-cid-36u65ko5>Output</span> <span class="svc-meta-val" data-astro-cid-36u65ko5>Fully edited, platform-ready files</span> </div> <div class="svc-meta-item" data-astro-cid-36u65ko5> <span class="svc-meta-label" data-astro-cid-36u65ko5>Scope</span> <span class="svc-meta-val" data-astro-cid-36u65ko5>Photography · Videography · Motion</span> </div> </div> <div class="svc-hero-tags" data-astro-cid-36u65ko5> <span class="tag svc-tag" data-astro-cid-36u65ko5>Photography</span> <span class="tag svc-tag" data-astro-cid-36u65ko5>Videography</span> <span class="tag svc-tag" data-astro-cid-36u65ko5>Motion</span> </div> </div> </div> </div> </section>  <section class="svc-section svc-manifesto" data-astro-cid-36u65ko5> <div class="container" data-astro-cid-36u65ko5> <p class="t-label svc-section-label" data-wipe data-astro-cid-36u65ko5>What We Do</p> <div class="svc-statement-wrap" data-astro-cid-36u65ko5> <h2 class="svc-statement" data-wipe data-astro-cid-36u65ko5>Visuals that carry<br data-astro-cid-36u65ko5><em data-astro-cid-36u65ko5>the full story.</em></h2> </div> <div class="svc-manifesto-body" data-astro-cid-36u65ko5> <p class="svc-prose" data-fade data-astro-cid-36u65ko5>
Lumina.raw is the visual production arm of HS108. We shoot, direct, and edit photography and video content for brands that understand that how something looks is part of what it says.
</p> <p class="svc-prose" data-fade data-astro-cid-36u65ko5>
We work across product photography, campaign shoots, brand films, and ongoing content production. Every project starts with a brief that's as clear about emotion and narrative as it is about format and platform.
</p> <p class="svc-prose" data-fade data-astro-cid-36u65ko5>
The name reflects the approach: raw capture handled with precision and intention — not filtered presets and generic stock aesthetics.
</p> </div> </div> </section> <hr data-astro-cid-36u65ko5>  <section class="svc-section svc-deliverables" data-astro-cid-36u65ko5> <div class="container" data-astro-cid-36u65ko5> <p class="t-label svc-section-label" data-wipe data-astro-cid-36u65ko5>Deliverables</p> <div class="del-rows" data-astro-cid-36u65ko5> ${deliverables.map((group) => renderTemplate`<div class="del-row" data-fade data-astro-cid-36u65ko5> <div class="del-row-left" data-astro-cid-36u65ko5> <p class="t-label del-group-name" data-astro-cid-36u65ko5>${group.group}</p> </div> <ul class="del-row-items" data-astro-cid-36u65ko5> ${group.items.map((item) => renderTemplate`<li class="t-mono del-item" data-astro-cid-36u65ko5>${item}</li>`)} </ul> </div>`)} </div> </div> </section> <hr data-astro-cid-36u65ko5>  <section class="svc-section svc-process" data-astro-cid-36u65ko5> <div class="container" data-astro-cid-36u65ko5> <p class="t-label svc-section-label" data-wipe data-astro-cid-36u65ko5>How We Work</p> <div class="process-rows" data-astro-cid-36u65ko5> ${process.map((step) => renderTemplate`<div class="process-row" data-fade data-astro-cid-36u65ko5> <span class="process-num" data-astro-cid-36u65ko5>${step.n}</span> <div class="process-content" data-astro-cid-36u65ko5> <h3 class="process-title" data-astro-cid-36u65ko5>${step.title}</h3> <p class="process-desc" data-astro-cid-36u65ko5>${step.desc}</p> </div> </div>`)} </div> </div> </section> <hr data-astro-cid-36u65ko5>  <section class="svc-section svc-cta inv-block" data-astro-cid-36u65ko5> <div class="container svc-cta-inner" data-astro-cid-36u65ko5> <div class="svc-cta-left" data-astro-cid-36u65ko5> <p class="t-label svc-section-label svc-section-label--inv" data-wipe data-astro-cid-36u65ko5>Start a project</p> <h2 class="svc-cta-headline" data-wipe data-astro-cid-36u65ko5>
Capture what makes<br data-astro-cid-36u65ko5><em data-astro-cid-36u65ko5>your brand worth watching.</em> </h2> <p class="svc-cta-sub" data-fade data-astro-cid-36u65ko5>
Tell us what you need to capture — a product launch, a brand film, or an ongoing content system. We'll handle it end to end.
</p> <div class="svc-cta-btns" data-fade data-astro-cid-36u65ko5> <a href="/contact?domain=lumina-raw" class="btn btn--outline-inv" data-astro-cid-36u65ko5>Get In Touch</a> <a href="/services" class="btn btn--outline-inv svc-btn-ghost" data-astro-cid-36u65ko5>← All Services</a> </div> </div> <div class="svc-cta-stats" data-fade data-astro-cid-36u65ko5> <div class="svc-stat" data-astro-cid-36u65ko5> <span class="svc-stat-val" data-astro-cid-36u65ko5>1–6</span> <span class="svc-stat-label" data-astro-cid-36u65ko5>Weeks typical engagement</span> </div> <div class="svc-stat" data-astro-cid-36u65ko5> <span class="svc-stat-val" data-astro-cid-36u65ko5>All</span> <span class="svc-stat-label" data-astro-cid-36u65ko5>Formats delivered — social to broadcast</span> </div> <div class="svc-stat" data-astro-cid-36u65ko5> <span class="svc-stat-val" data-astro-cid-36u65ko5>RAW</span> <span class="svc-stat-label" data-astro-cid-36u65ko5>Files always delivered. No locked formats.</span> </div> </div> </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Need the full picture?", "sub": "Lumina.raw pairs with CX&Identity and WebCanvas for launch-ready brand assets across every medium.", "domain": "lumina-raw", "data-astro-cid-36u65ko5": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/services/lumina-raw.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/services/lumina-raw.astro";
const $$url = "/services/lumina-raw";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LuminaRaw,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
