import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$OffMenu = createComponent(($$result, $$props, $$slots) => {
  const examples = [
    {
      code: "OM-001",
      title: "Full-Studio Brand Launch",
      desc: "A client needed naming, identity, packaging, web design, and launch photography \u2014 all from one team, under one vision. off_menu made it possible.",
      scope: "CX&Identity + WebCanvas + Lumina.raw"
    },
    {
      code: "OM-002",
      title: "Product + Digital Ecosystem",
      desc: "Hardware product design combined with a companion app and brand identity for a single cohesive launch. Cross-discipline, custom-scoped.",
      scope: "CMF_Nexus + WebCanvas + CX&Identity"
    },
    {
      code: "OM-003",
      title: "Brand Overhaul + Content Engine",
      desc: "A rebrand paired with an ongoing visual content system \u2014 photography and video produced monthly to maintain the new identity across channels.",
      scope: "CX&Identity + Lumina.raw (retainer)"
    },
    {
      code: "OM-004",
      title: "Discovery + Design Sprint",
      desc: "For a client who didn't know what they needed \u2014 a structured discovery engagement that delivered clarity, direction, and a design plan of action.",
      scope: "Strategy + Design Lab"
    }
  ];
  const process = [
    { n: "01", title: "Tell Us", desc: "Describe your situation, your goal, and whatever constraints you're working with. Nothing is too unusual." },
    { n: "02", title: "We Scope", desc: "We figure out the right mix of practices, people, and timeline. You get a clear proposal \u2014 no surprises." },
    { n: "03", title: "We Build", desc: "The work happens across whatever disciplines your project needs, coordinated internally by us." },
    { n: "04", title: "You Launch", desc: "Delivery is designed around your timeline. We stay through handoff and can continue as a retainer if needed." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "off_menu", "description": "off_menu is HS108's bespoke program \u2014 custom, tailor-made packages that address unique client requirements across disciplines.", "bodyClass": "theme-cool", "data-astro-cid-wrq54qti": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="om-hero" data-astro-cid-wrq54qti> <div class="container om-hero-inner" data-astro-cid-wrq54qti> <div class="om-overline" data-astro-cid-wrq54qti> <span class="t-label" style="opacity:0.4" data-astro-cid-wrq54qti>Program by HS108</span> <span class="t-label om-sep" data-astro-cid-wrq54qti>×</span> <span class="t-label om-badge tag tag--accent" data-astro-cid-wrq54qti>Bespoke</span> </div> <h1 class="t-hero om-title" data-astro-cid-wrq54qti>off_menu</h1> <div class="om-rule" data-astro-cid-wrq54qti></div> <p class="t-large om-tagline" data-astro-cid-wrq54qti>
Your project doesn't fit a standard package.<br data-astro-cid-wrq54qti>
That's exactly why off_menu exists.<br data-astro-cid-wrq54qti>
Custom scope. Tailored team. One seamless engagement.
</p> </div> </div> <div class="container om-body" data-astro-cid-wrq54qti> <!-- What it is --> <section class="om-section" data-astro-cid-wrq54qti> <div class="om-what-grid" data-astro-cid-wrq54qti> <div data-astro-cid-wrq54qti> <p class="t-label section-num" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-wrq54qti>What Is off_menu?</p> <h2 class="t-h2" data-astro-cid-wrq54qti>Design built around you.</h2> </div> <div class="prose om-prose" data-astro-cid-wrq54qti> <p data-astro-cid-wrq54qti>
Most design studios have fixed packages. You choose one, they deliver it. Simple — unless your needs don't fit the menu.
</p> <p data-astro-cid-wrq54qti>
off_menu is for clients who need something different. A cross-discipline project that spans branding, product design, and visual content. A brief that sits between categories. An engagement structure that doesn't match any retainer or one-off model.
</p> <p data-astro-cid-wrq54qti>
We take your actual situation — the scope, the team you need, the timeline you're working with — and build a bespoke engagement around it. All four HS108 practices are available to combine as the work demands.
</p> <p data-astro-cid-wrq54qti>
If standard packages feel like a compromise, off_menu is the alternative.
</p> </div> </div> </section> <hr data-astro-cid-wrq54qti> <!-- Example project types --> <section class="om-section" data-astro-cid-wrq54qti> <p class="t-label section-num" style="opacity:0.4; margin-bottom:3rem" data-astro-cid-wrq54qti>Example Engagements</p> <div class="om-grid" data-astro-cid-wrq54qti> ${examples.map((proj) => renderTemplate`<div class="om-card b-box" data-astro-cid-wrq54qti> <div class="om-card-header" data-astro-cid-wrq54qti> <span class="t-label om-code" data-astro-cid-wrq54qti>${proj.code}</span> </div> <h3 class="t-h3 om-card-title" data-astro-cid-wrq54qti>${proj.title}</h3> <p class="t-body om-card-desc" data-astro-cid-wrq54qti>${proj.desc}</p> <span class="tag om-scope" data-astro-cid-wrq54qti>${proj.scope}</span> </div>`)} </div> </section> <hr data-astro-cid-wrq54qti> <!-- How it works --> <section class="om-section" data-astro-cid-wrq54qti> <p class="t-label" style="opacity:0.4; margin-bottom:3rem" data-astro-cid-wrq54qti>How It Works</p> <div class="om-process" data-astro-cid-wrq54qti> ${process.map((step) => renderTemplate`<div class="om-step b-box" data-astro-cid-wrq54qti> <span class="t-label om-step-num" data-astro-cid-wrq54qti>${step.n}</span> <h3 class="t-h3 om-step-title" data-astro-cid-wrq54qti>${step.title}</h3> <p class="t-body om-step-desc" data-astro-cid-wrq54qti>${step.desc}</p> </div>`)} </div> </section> <hr data-astro-cid-wrq54qti> <!-- CTA --> <section class="om-section om-cta-section" data-astro-cid-wrq54qti> <div class="om-cta-grid" data-astro-cid-wrq54qti> <div data-astro-cid-wrq54qti> <h2 class="t-h2" style="margin-bottom:1rem" data-astro-cid-wrq54qti>Have something unusual in mind?</h2> <p class="t-body" style="opacity:0.6; max-width:45ch; margin-bottom:2rem" data-astro-cid-wrq54qti>
Tell us what you're trying to do — even if you're not sure how to frame it. That's where off_menu starts.
</p> <div class="om-ctas" data-astro-cid-wrq54qti> <a href="/contact" class="btn btn--primary" data-astro-cid-wrq54qti>Start a Conversation</a> <a href="mailto:contact.studio@hs108.in" class="btn btn--outline" data-astro-cid-wrq54qti>contact.studio@hs108.in</a> </div> </div> <div class="om-criteria-box inv-block" data-astro-cid-wrq54qti> <p class="t-label" style="opacity:0.4; margin-bottom:1.5rem" data-astro-cid-wrq54qti>off_menu is right for you if…</p> <ul class="om-criteria" data-astro-cid-wrq54qti> ${[
    "Your project spans more than one design discipline",
    "You need a single team across the full scope",
    "Standard packages don't reflect your actual needs",
    "You want one point of contact, not multiple agencies",
    "You're building something that doesn't have a precedent"
  ].map((c) => renderTemplate`<li class="t-mono" data-astro-cid-wrq54qti>${c}</li>`)} </ul> </div> </div> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Looking for something more standard?", "sub": "off_menu is for complex, bespoke projects. Our four core services handle more focused engagements.", "data-astro-cid-wrq54qti": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/off-menu.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/off-menu.astro";
const $$url = "/programs/off-menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OffMenu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
