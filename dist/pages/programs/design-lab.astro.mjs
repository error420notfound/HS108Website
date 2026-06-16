import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$DesignLab = createComponent(($$result, $$props, $$slots) => {
  const capabilities = [
    {
      code: "DL-01",
      title: "Design Research",
      desc: "Deep-dive user research, competitor audits, and market mapping to surface the real problem before any design begins.",
      status: "Available"
    },
    {
      code: "DL-02",
      title: "Discovery Sprints",
      desc: "Structured two-to-four week engagements that take ambiguous briefs and turn them into clear design direction and a prioritised roadmap.",
      status: "Available"
    },
    {
      code: "DL-03",
      title: "Complex Systems Design",
      desc: "Design challenges that sit at the intersection of multiple domains \u2014 products that require systems thinking, not just visual execution.",
      status: "Available"
    },
    {
      code: "DL-04",
      title: "Concept Development",
      desc: "Rapid exploration of design directions at the front end of large projects \u2014 before committing to a single path.",
      status: "Available"
    },
    {
      code: "DL-05",
      title: "Design Audits",
      desc: "A structured review of existing products, brands, or systems \u2014 with a clear diagnosis and a concrete recommendation.",
      status: "Available"
    },
    {
      code: "DL-06",
      title: "Experimental Prototyping",
      desc: "High-fidelity prototypes built to test specific hypotheses \u2014 faster than full production, more reliable than assumptions.",
      status: "Available"
    }
  ];
  const suits = [
    "Organisations tackling a design problem they haven't solved before",
    "Teams that need clarity before committing to a large engagement",
    "Companies with technical or cross-disciplinary design challenges",
    "Clients who have tried other approaches and need a fresh diagnostic"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Design Lab", "description": "Design Lab is HS108's research and discovery program \u2014 purpose-built for high-demand design challenges that require investigation, experimentation, and rigorous thinking.", "bodyClass": "theme-vermilion", "data-astro-cid-oetmsi3x": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="dl-hero inv-block" data-astro-cid-oetmsi3x> <div class="container dl-hero-inner" data-astro-cid-oetmsi3x> <div class="dl-header-left" data-astro-cid-oetmsi3x> <span class="t-label" style="opacity:0.4" data-astro-cid-oetmsi3x>Program by HS108</span> <h1 class="t-h1 dl-title" data-astro-cid-oetmsi3x>Design<br data-astro-cid-oetmsi3x>Lab</h1> <span class="tag dl-tag" data-astro-cid-oetmsi3x>Research & Discovery</span> </div> <div class="dl-header-right" data-astro-cid-oetmsi3x> <p class="t-large dl-tagline" data-astro-cid-oetmsi3x>
For the design problems that don't have obvious answers.
          Rigorous research, structured experimentation, and discovery
          that gives you clarity before commitment.
</p> <p class="t-body dl-sub" style="opacity:0.45; margin-top:1.5rem" data-astro-cid-oetmsi3x>
When the brief is complex, the stakes are high, or the path forward isn't clear — Design Lab is where we start.
</p> </div> </div> </div> <div class="container dl-body" data-astro-cid-oetmsi3x> <!-- What it is --> <section class="dl-section" data-astro-cid-oetmsi3x> <div class="dl-two-col" data-astro-cid-oetmsi3x> <div data-astro-cid-oetmsi3x> <p class="t-label" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-oetmsi3x>What It Is</p> <h2 class="t-h2" data-astro-cid-oetmsi3x>Research before execution.</h2> </div> <div class="prose dl-prose" data-astro-cid-oetmsi3x> <p data-astro-cid-oetmsi3x>
Design Lab is HS108's research and discovery program. It exists for one reason: some design challenges are too complex, too high-stakes, or too ambiguous to solve with execution alone.
</p> <p data-astro-cid-oetmsi3x>
Before a project goes into design production, Design Lab asks harder questions. Who is this actually for? What problem does it genuinely solve? What have others tried? What constraints are we not seeing?
</p> <p data-astro-cid-oetmsi3x>
The output of a Design Lab engagement is not a finished product — it's the foundation that makes the finished product better. Research findings, design direction, prioritised opportunities, and a clear brief that the rest of the studio can execute against.
</p> </div> </div> </section> <hr data-astro-cid-oetmsi3x> <!-- Capabilities --> <section class="dl-section" data-astro-cid-oetmsi3x> <p class="t-label" style="opacity:0.4; margin-bottom:3rem" data-astro-cid-oetmsi3x>Capabilities</p> <div class="dl-cap-grid" data-astro-cid-oetmsi3x> ${capabilities.map((cap) => renderTemplate`<div class="dl-cap-row b-box" data-astro-cid-oetmsi3x> <div class="dl-cap-header" data-astro-cid-oetmsi3x> <span class="t-label dl-cap-code" data-astro-cid-oetmsi3x>${cap.code}</span> <span class="tag" data-astro-cid-oetmsi3x>${cap.status}</span> </div> <h3 class="t-h3 dl-cap-title" data-astro-cid-oetmsi3x>${cap.title}</h3> <p class="t-body dl-cap-desc" data-astro-cid-oetmsi3x>${cap.desc}</p> </div>`)} </div> </section> <hr data-astro-cid-oetmsi3x> <!-- Who it suits --> <section class="dl-section" data-astro-cid-oetmsi3x> <div class="dl-two-col" data-astro-cid-oetmsi3x> <div data-astro-cid-oetmsi3x> <p class="t-label" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-oetmsi3x>Who It's For</p> <h2 class="t-h2" data-astro-cid-oetmsi3x>When execution isn't the problem.</h2> </div> <ul class="suits-list" data-astro-cid-oetmsi3x> ${suits.map((s) => renderTemplate`<li class="suits-item t-body" data-astro-cid-oetmsi3x> <span class="suits-tick" data-astro-cid-oetmsi3x>→</span> ${s} </li>`)} </ul> </div> </section> <hr data-astro-cid-oetmsi3x> <!-- CTA --> <section class="dl-section dl-cta" data-astro-cid-oetmsi3x> <h2 class="t-h2" style="margin-bottom:1rem" data-astro-cid-oetmsi3x>Have a complex problem?</h2> <p class="t-body" style="opacity:0.65; max-width:50ch; margin-bottom:2rem" data-astro-cid-oetmsi3x>
Design Lab engagements typically start with a short diagnostic call. Describe the challenge — we'll tell you whether it's a Lab engagement or a straight production brief.
</p> <div class="dl-ctas" data-astro-cid-oetmsi3x> <a href="/contact" class="btn btn--primary" data-astro-cid-oetmsi3x>Start a Conversation</a> <a href="/services" class="btn btn--outline" data-astro-cid-oetmsi3x>See Core Services →</a> </div> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Ready to move from research to execution?", "sub": "Design Lab delivers the brief. Our four practices deliver the work.", "data-astro-cid-oetmsi3x": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/design-lab.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/design-lab.astro";
const $$url = "/programs/design-lab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DesignLab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
