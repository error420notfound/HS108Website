import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DbQN9vuV.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const programs = [
    {
      num: "01",
      code: "Creative Department",
      name: "Embedded Design Team",
      desc: "Our flagship retainer \u2014 a dedicated design team embedded in your business. Senior designers allocated to your account, across all four HS108 practices, working in structured monthly sprints.",
      features: ["Dedicated senior designers", "All four practices under one retainer", "Monthly sprints + quarterly strategy", "Unlimited design requests", "Async collaboration in your tools", "No change orders for small asks"],
      model: "Retainer",
      accent: "Ongoing \xB7 Embedded \xB7 Senior",
      href: "/programs/creative-department",
      theme: "theme-rose"
    },
    {
      num: "02",
      code: "Design Lab",
      name: "Research & Discovery",
      desc: "For design problems that don't have obvious answers. Rigorous user research, structured discovery sprints, and systems thinking \u2014 before any execution begins.",
      features: ["Deep-dive user research", "Discovery sprints (2\u20134 weeks)", "Complex systems design", "Concept development & exploration", "Co-design workshops", "Research outputs + design briefs"],
      model: "Project",
      accent: "Research \xB7 Discovery \xB7 Thinking",
      href: "/programs/design-lab",
      theme: "theme-vermilion"
    },
    {
      num: "03",
      code: "off_menu",
      name: "Bespoke Packages",
      desc: "Your project doesn't fit a standard package. off_menu is for clients who need a custom scope \u2014 combining disciplines, structures, and timelines in ways that standard services don't allow.",
      features: ["Cross-discipline engagements", "Custom scope + team assembly", "All four practices available to combine", "Flexible engagement structure", "Tailored timeline and milestones", "Single point of contact"],
      model: "Bespoke",
      accent: "Custom \xB7 Cross-Discipline \xB7 Tailored",
      href: "/programs/off-menu",
      theme: "theme-cool"
    },
    {
      num: "04",
      code: "Field Notes",
      name: "Design Conversations",
      desc: "A platform for discourse with designers, artisans, and industry thinkers. Conversations, publications, and events that engage with the ideas that shape the practice of design.",
      features: ["Design conversations & interviews", "Published essays & criticism", "Material & craft dialogues", "Design & commerce discussions", "Visual culture explorations", "Open to practitioners at all stages"],
      model: "Community",
      accent: "Conversations \xB7 Publications \xB7 Events",
      href: "/programs/field-notes",
      theme: "theme-teal"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Programs", "label": "Beyond Client Work", "description": "HS108 programs \u2014 Creative Department, Design Lab, off_menu, and Field Notes. Retainers, research, bespoke packages, and design conversations.", "data-astro-cid-fkpbwzxa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container programs-intro" data-astro-cid-fkpbwzxa> <p class="t-large programs-lede" data-astro-cid-fkpbwzxa>
Four programs. Each one a different relationship with design.
      Client services are what we do — programs are how we think about it.
</p> </div> <div class="programs-list" data-astro-cid-fkpbwzxa> ${programs.map((prog) => renderTemplate`<div class="prog-row container" data-astro-cid-fkpbwzxa> <div class="prog-header" data-astro-cid-fkpbwzxa> <span class="t-label prog-num" data-astro-cid-fkpbwzxa>${prog.num}</span> <div class="prog-name-block" data-astro-cid-fkpbwzxa> <span class="t-label prog-code" data-astro-cid-fkpbwzxa>${prog.code}</span> <h2 class="t-h2 prog-name" data-astro-cid-fkpbwzxa>${prog.name}</h2> </div> <span class="tag prog-accent" data-astro-cid-fkpbwzxa>${prog.accent}</span> <span class="tag" data-astro-cid-fkpbwzxa>${prog.model}</span> <a${addAttribute(prog.href, "href")} class="btn btn--outline prog-detail-btn" data-astro-cid-fkpbwzxa>Explore →</a> </div> <div class="prog-body" data-astro-cid-fkpbwzxa> <p class="t-body prog-desc" data-astro-cid-fkpbwzxa>${prog.desc}</p> <div class="prog-features" data-astro-cid-fkpbwzxa> <p class="t-label prog-feat-label" data-astro-cid-fkpbwzxa>What's Included</p> <ul class="prog-feat-list" data-astro-cid-fkpbwzxa> ${prog.features.map((f) => renderTemplate`<li class="t-mono" data-astro-cid-fkpbwzxa>${f}</li>`)} </ul> </div> </div> <hr data-astro-cid-fkpbwzxa> </div>`)} </div>  <div class="container programs-services" data-astro-cid-fkpbwzxa> <p class="t-label" style="opacity:0.4; margin-bottom:1.5rem" data-astro-cid-fkpbwzxa>Not a Program? Try a Service</p> <div class="svc-grid" data-astro-cid-fkpbwzxa> <div class="svc-card b-box" data-astro-cid-fkpbwzxa> <p class="t-label svc-label" data-astro-cid-fkpbwzxa>WebCanvas</p> <p class="t-body svc-desc" data-astro-cid-fkpbwzxa>Digital design — websites, apps, and product interfaces.</p> <a href="/services/webcanvas" class="btn btn--outline" data-astro-cid-fkpbwzxa>View Service →</a> </div> <div class="svc-card b-box" data-astro-cid-fkpbwzxa> <p class="t-label svc-label" data-astro-cid-fkpbwzxa>CX&amp;Identity</p> <p class="t-body svc-desc" data-astro-cid-fkpbwzxa>Branding and identity systems built to last.</p> <a href="/services/cx-identity" class="btn btn--outline" data-astro-cid-fkpbwzxa>View Service →</a> </div> <div class="svc-card b-box" data-astro-cid-fkpbwzxa> <p class="t-label svc-label" data-astro-cid-fkpbwzxa>CMF_Nexus</p> <p class="t-body svc-desc" data-astro-cid-fkpbwzxa>Product design from concept sketch to production.</p> <a href="/services/cmf-nexus" class="btn btn--outline" data-astro-cid-fkpbwzxa>View Service →</a> </div> <div class="svc-card b-box" data-astro-cid-fkpbwzxa> <p class="t-label svc-label" data-astro-cid-fkpbwzxa>Lumina.raw</p> <p class="t-body svc-desc" data-astro-cid-fkpbwzxa>Photography and video that stops the scroll.</p> <a href="/services/lumina-raw" class="btn btn--outline" data-astro-cid-fkpbwzxa>View Service →</a> </div> </div> </div>  <div class="container programs-callout inv-block" data-astro-cid-fkpbwzxa> <p class="t-label" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-fkpbwzxa>Not sure which program fits?</p> <h2 class="t-h2" style="margin-bottom:1.5rem" data-astro-cid-fkpbwzxa>Start with a conversation.</h2> <p class="t-body" style="opacity:0.6; max-width:50ch; margin-bottom:2rem" data-astro-cid-fkpbwzxa>
Programs work differently to standard services. Tell us what you're trying to build
      and we'll explain what makes sense for your situation.
</p> <a href="/contact" class="btn btn--outline-inv" data-astro-cid-fkpbwzxa>Get In Touch</a> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "invert": false, "data-astro-cid-fkpbwzxa": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/index.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/index.astro";
const $$url = "/programs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
