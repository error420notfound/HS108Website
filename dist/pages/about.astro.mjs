import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DbQN9vuV.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const values = [
    { num: "01", title: "Systems First", body: "We design things that scale. Every decision is made with the long game in mind \u2014 not just the launch, but the second version, the pivot, and the growth that comes after." },
    { num: "02", title: "Senior Always", body: "No bait-and-switch. The people you meet in the pitch are the people doing the work. Every project is led by someone with real experience, not supervised by them." },
    { num: "03", title: "Small on Purpose", body: "We deliberately stay small. It keeps us sharp, invested, and close to the work. Big agencies have overhead. We have attention." },
    { num: "04", title: "Honest Work", body: "We'll tell you if something doesn't work \u2014 even if it's your idea. Good design is a conversation, not a service delivery. We'd rather be right than agreeable." }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "About", "label": "Who We Are", "description": "HS108 is an independent design studio founded in 2019. We build brands and digital products for companies ready to scale.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container about-intro" data-astro-cid-kh7btl4r> <div class="about-intro-grid" data-astro-cid-kh7btl4r> <div class="about-story" data-astro-cid-kh7btl4r> <h2 class="t-h2" data-astro-cid-kh7btl4r>A studio built for scale.</h2> <div class="prose about-body" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
HS108 was founded in 2019 on a single thesis: that most design studios are either too big to care or too small to be reliable. We built something in between — small enough to be invested, structured enough to deliver.
</p> <p data-astro-cid-kh7btl4r>
We work with companies at inflection points. Seed-stage startups about to launch. Growth-stage companies whose brand no longer fits their ambition. Enterprises that need their product design system rebuilt from scratch.
</p> <p data-astro-cid-kh7btl4r>
What we're not: a generalist shop that does anything for anyone. We do brand, product, and systems — and we do them exceptionally.
</p> </div> </div> <div class="about-numbers" data-astro-cid-kh7btl4r> <div class="about-num-item b-box" data-astro-cid-kh7btl4r> <span class="about-big-num" data-astro-cid-kh7btl4r>2019</span> <span class="t-label" data-astro-cid-kh7btl4r>Founded</span> </div> <div class="about-num-item b-box" data-astro-cid-kh7btl4r> <span class="about-big-num" data-astro-cid-kh7btl4r>38+</span> <span class="t-label" data-astro-cid-kh7btl4r>Clients Served</span> </div> <div class="about-num-item b-box" data-astro-cid-kh7btl4r> <span class="about-big-num" data-astro-cid-kh7btl4r>100%</span> <span class="t-label" data-astro-cid-kh7btl4r>Senior Team</span> </div> <div class="about-num-item b-box inv-block" data-astro-cid-kh7btl4r> <span class="about-big-num" style="color: var(--c-yellow)" data-astro-cid-kh7btl4r>HS108</span> <span class="t-label" style="color: rgba(255,255,255,0.5)" data-astro-cid-kh7btl4r>Independent</span> </div> </div> </div> </div> <hr data-astro-cid-kh7btl4r>  <section class="section container" data-astro-cid-kh7btl4r> <p class="t-label section-num" style="margin-bottom:1rem" data-astro-cid-kh7btl4r>Our Values</p> <h2 class="t-h2" style="margin-bottom:3rem" data-astro-cid-kh7btl4r>What We Stand For</h2> <div class="values-grid" data-astro-cid-kh7btl4r> ${values.map((v) => renderTemplate`<div class="value-card b-box" data-astro-cid-kh7btl4r> <span class="t-label value-num" data-astro-cid-kh7btl4r>${v.num}</span> <h3 class="t-h3 value-title" data-astro-cid-kh7btl4r>${v.title}</h3> <p class="t-body value-body" data-astro-cid-kh7btl4r>${v.body}</p> </div>`)} </div> </section> <hr data-astro-cid-kh7btl4r>  <section class="section container" data-astro-cid-kh7btl4r> <p class="t-label section-num" style="margin-bottom:2rem" data-astro-cid-kh7btl4r>Who We've Worked With</p> <div class="clients-row" data-astro-cid-kh7btl4r> ${["NovaPay", "Urbane Property", "HealthOS", "Luma Commerce", "MedFlow", "VeritasAI", "PocketScale", "OrbitEd"].map((name) => renderTemplate`<span class="client-name t-h3" data-astro-cid-kh7btl4r>${name}</span>`)} </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/about.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
