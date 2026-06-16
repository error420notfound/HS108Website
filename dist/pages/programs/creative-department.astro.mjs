import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                                  */
export { renderers } from '../../renderers.mjs';

const $$CreativeDepartment = createComponent(($$result, $$props, $$slots) => {
  const included = [
    { label: "Dedicated Design Team", desc: "Senior designers allocated to your account \u2014 no juniors, no generalists." },
    { label: "Monthly Design Sprints", desc: "Structured cycles of briefing, design, and review. Predictable, fast, repeatable." },
    { label: "All Four Practices", desc: "Access to WebCanvas, CX&Identity, CMF_Nexus, and Lumina.raw under one retainer." },
    { label: "Async Collaboration", desc: "No time zone friction. We work in your tools, on your schedule." },
    { label: "Quarterly Strategy Reviews", desc: "We step back from the work every quarter to align on direction, priorities, and goals." },
    { label: "Unlimited Requests", desc: "Raise design needs as they come. No scope debates, no change orders for small asks." }
  ];
  const suits = [
    "Companies with ongoing, evolving design needs",
    "Brands that want embedded design \u2014 not freelancers",
    "Teams that have shipped product and need design to keep pace with growth",
    "Businesses replacing or augmenting an internal design function"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Creative Department", "description": "Creative Department is HS108's flagship retainer program \u2014 a dedicated design team embedded in your business for ongoing support, consistency, and growth.", "bodyClass": "theme-rose", "data-astro-cid-xtwzwrkt": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="cd-hero inv-block" data-astro-cid-xtwzwrkt> <div class="container cd-hero-inner" data-astro-cid-xtwzwrkt> <div class="cd-logo" data-astro-cid-xtwzwrkt> <span class="t-label" style="opacity:0.4" data-astro-cid-xtwzwrkt>Program by HS108</span> <h1 class="t-h1 cd-title" data-astro-cid-xtwzwrkt>Creative<br data-astro-cid-xtwzwrkt>Department</h1> <span class="tag tag--inv cd-tag" data-astro-cid-xtwzwrkt>Retainer</span> </div> <p class="t-large cd-tagline" data-astro-cid-xtwzwrkt>
Your design team, without the overhead of hiring one.
        A dedicated allocation of senior design talent, embedded in your business
        and available as your needs evolve.
</p> </div> </div> <div class="container cd-body" data-astro-cid-xtwzwrkt> <!-- What it is --> <section class="cd-section" data-astro-cid-xtwzwrkt> <div class="cd-section-grid" data-astro-cid-xtwzwrkt> <div class="cd-section-left" data-astro-cid-xtwzwrkt> <p class="t-label section-num" style="opacity:0.4" data-astro-cid-xtwzwrkt>What It Is</p> </div> <div class="cd-section-right" data-astro-cid-xtwzwrkt> <div class="prose" data-astro-cid-xtwzwrkt> <p data-astro-cid-xtwzwrkt>
Creative Department is HS108's flagship retainer program. It gives businesses consistent, high-quality design support without the cost and complexity of building an in-house team.
</p> <p data-astro-cid-xtwzwrkt>
Instead of briefing a studio project-by-project — waiting for quotes, negotiating scope, onboarding teams repeatedly — Creative Department clients get a dedicated design function that knows their brand, their product, and their goals.
</p> <p data-astro-cid-xtwzwrkt>
It's the model that makes sense when design is not a one-off need but an ongoing engine of your business.
</p> </div> </div> </div> </section> <hr data-astro-cid-xtwzwrkt> <!-- What's included --> <section class="cd-section" data-astro-cid-xtwzwrkt> <p class="t-label" style="opacity:0.4; margin-bottom:3rem" data-astro-cid-xtwzwrkt>What's Included</p> <div class="included-grid" data-astro-cid-xtwzwrkt> ${included.map((item) => renderTemplate`<div class="included-row b-box" data-astro-cid-xtwzwrkt> <p class="t-label included-label" data-astro-cid-xtwzwrkt>${item.label}</p> <p class="t-body included-desc" data-astro-cid-xtwzwrkt>${item.desc}</p> </div>`)} </div> </section> <hr data-astro-cid-xtwzwrkt> <!-- Who it suits --> <section class="cd-section" data-astro-cid-xtwzwrkt> <div class="cd-section-grid" data-astro-cid-xtwzwrkt> <div class="cd-section-left" data-astro-cid-xtwzwrkt> <p class="t-label" style="opacity:0.4" data-astro-cid-xtwzwrkt>Who It's For</p> </div> <div class="cd-section-right" data-astro-cid-xtwzwrkt> <ul class="suits-list" data-astro-cid-xtwzwrkt> ${suits.map((s) => renderTemplate`<li class="suits-item t-body" data-astro-cid-xtwzwrkt> <span class="suits-tick" data-astro-cid-xtwzwrkt>→</span> ${s} </li>`)} </ul> </div> </div> </section> <hr data-astro-cid-xtwzwrkt> <!-- Start --> <section class="cd-section cd-start" data-astro-cid-xtwzwrkt> <div class="cd-start-grid" data-astro-cid-xtwzwrkt> <div data-astro-cid-xtwzwrkt> <h2 class="t-h2" style="margin-bottom:1rem" data-astro-cid-xtwzwrkt>Ready to talk?</h2> <p class="t-body" style="opacity:0.65; max-width:48ch; margin-bottom:2rem" data-astro-cid-xtwzwrkt>
Creative Department engagements are scoped to each client. Tell us where you are and what you need — we'll put together the right structure.
</p> <div class="cd-ctas" data-astro-cid-xtwzwrkt> <a href="/contact" class="btn btn--primary" data-astro-cid-xtwzwrkt>Start a Conversation</a> <a href="mailto:contact.studio@hs108.in" class="btn btn--outline" data-astro-cid-xtwzwrkt>contact.studio@hs108.in</a> </div> </div> <div class="cd-stat-box inv-block" data-astro-cid-xtwzwrkt> <p class="t-label" style="opacity:0.4; margin-bottom:2rem" data-astro-cid-xtwzwrkt>The Creative Department Difference</p> <div class="cd-stats" data-astro-cid-xtwzwrkt> <div class="cd-stat" data-astro-cid-xtwzwrkt> <span class="t-hero cd-stat-val" data-astro-cid-xtwzwrkt>100%</span> <span class="t-label cd-stat-label" data-astro-cid-xtwzwrkt>Senior talent</span> </div> <div class="cd-stat" data-astro-cid-xtwzwrkt> <span class="t-hero cd-stat-val" data-astro-cid-xtwzwrkt>4</span> <span class="t-label cd-stat-label" data-astro-cid-xtwzwrkt>Practices under one retainer</span> </div> </div> </div> </div> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Interested in our project-based services?", "sub": "Creative Department is our retainer model. For one-time projects, explore our full service offering.", "data-astro-cid-xtwzwrkt": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/creative-department.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/creative-department.astro";
const $$url = "/programs/creative-department";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreativeDepartment,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
