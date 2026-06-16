import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DbQN9vuV.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const phases = [
    {
      num: "01",
      title: "Understand",
      sub: "Weeks 1\u20132",
      summary: "We never design blind. Every project starts with a structured discovery phase \u2014 client interviews, user research, competitive analysis, and market mapping.",
      activities: [
        "Stakeholder interviews",
        "User research & persona development",
        "Competitive landscape mapping",
        "Brand / product audit",
        "Goal and success metric definition"
      ],
      output: "Discovery report + project brief"
    },
    {
      num: "02",
      title: "Design",
      sub: "Weeks 3\u20138",
      summary: "Concepts. Iteration. Refinement. We work in cycles with regular check-ins, not big reveals. You see the work as it evolves.",
      activities: [
        "Concept exploration (multiple directions)",
        "Feedback and iteration cycles",
        "Prototype development",
        "Usability testing (where applicable)",
        "Direction lock-down"
      ],
      output: "Approved design files (Figma)"
    },
    {
      num: "03",
      title: "Build",
      sub: "Weeks 6\u201314",
      summary: "Production-ready design. We run concurrent with engineering where possible, providing specs, answering questions, and reviewing implementation.",
      activities: [
        "Final UI refinement",
        "Developer handoff package",
        "Asset export & optimization",
        "Implementation support",
        "QA review cycles"
      ],
      output: "Shipped product / live brand"
    },
    {
      num: "04",
      title: "Scale",
      sub: "Ongoing",
      summary: "The project doesn't end at launch. We offer retainer partnerships for clients who want design embedded as they grow \u2014 new features, new campaigns, new challenges.",
      activities: [
        "Monthly design sprints",
        "Async task management",
        "Quarterly strategy reviews",
        "Brand and product evolution",
        "Design system maintenance"
      ],
      output: "Ongoing partnership"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Process", "label": "How We Work", "description": "HS108's four-phase design process \u2014 Understand, Design, Build, Scale. Built for clarity, not ceremony.", "data-astro-cid-zbmu5bal": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container process-intro" data-astro-cid-zbmu5bal> <p class="t-large process-lede" data-astro-cid-zbmu5bal>
Our process is built for clarity, not ceremony. Four phases, regular check-ins,
      no surprises. You always know where we are and what's next.
</p> </div> <hr data-astro-cid-zbmu5bal> <div class="process-phases container" data-astro-cid-zbmu5bal> ${phases.map((phase, i) => renderTemplate`<div class="phase-row" data-astro-cid-zbmu5bal> <div class="phase-left" data-astro-cid-zbmu5bal> <span class="t-label phase-num" data-astro-cid-zbmu5bal>${phase.num}</span> <h2 class="t-h2 phase-title" data-astro-cid-zbmu5bal>${phase.title}</h2> <span class="tag phase-sub" data-astro-cid-zbmu5bal>${phase.sub}</span> </div> <div class="phase-right" data-astro-cid-zbmu5bal> <p class="t-large phase-summary" data-astro-cid-zbmu5bal>${phase.summary}</p> <div class="phase-details" data-astro-cid-zbmu5bal> <div class="phase-activities" data-astro-cid-zbmu5bal> <p class="t-label phase-label" data-astro-cid-zbmu5bal>Activities</p> <ul class="phase-list" data-astro-cid-zbmu5bal> ${phase.activities.map((a) => renderTemplate`<li class="t-mono" data-astro-cid-zbmu5bal>${a}</li>`)} </ul> </div> <div class="phase-output" data-astro-cid-zbmu5bal> <p class="t-label phase-label" data-astro-cid-zbmu5bal>Output</p> <p class="t-mono phase-output-text" data-astro-cid-zbmu5bal>${phase.output}</p> </div> </div> </div> ${i < phases.length - 1 && renderTemplate`<div class="phase-connector" data-astro-cid-zbmu5bal> <span class="t-label" data-astro-cid-zbmu5bal>↓</span> </div>`} </div>`)} </div> <hr data-astro-cid-zbmu5bal>  <section class="section container" data-astro-cid-zbmu5bal> <p class="t-label section-num" style="margin-bottom:1rem" data-astro-cid-zbmu5bal>Common Questions</p> <h2 class="t-h2" style="margin-bottom:3rem" data-astro-cid-zbmu5bal>What To Expect</h2> <div class="faq-list" data-astro-cid-zbmu5bal> ${[
    { q: "How do check-ins work?", a: "We schedule regular sync calls (weekly or bi-weekly) plus share progress async in Figma. You're never waiting to see the work." },
    { q: "Do you work with our engineering team?", a: "Yes. We prefer to. We'll join standups if helpful, answer questions in Slack, and review implementations before launch." },
    { q: "What if we need changes after launch?", a: "That's what retainers are for. Project clients also get 4 weeks of post-launch support included in every engagement." },
    { q: "How many projects do you run at once?", a: "We limit ourselves to 3 active projects at any time. This is non-negotiable \u2014 it's how we maintain quality." }
  ].map((item) => renderTemplate`<div class="faq-item b-top" data-astro-cid-zbmu5bal> <h3 class="t-h3 faq-q" data-astro-cid-zbmu5bal>${item.q}</h3> <p class="t-body faq-a" data-astro-cid-zbmu5bal>${item.a}</p> </div>`)} </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Ready to start?", "sub": "Tell us about your project and we'll put together a plan.", "data-astro-cid-zbmu5bal": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/process.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/process.astro";
const $$url = "/process";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Process,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
