import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DbQN9vuV.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$WhyUs = createComponent(($$result, $$props, $$slots) => {
  const differentiators = [
    { num: "01", title: "Senior talent, always", body: "Every project is led by a senior designer with real experience \u2014 not handed to a junior after the pitch." },
    { num: "02", title: "Systems-first thinking", body: "We design for scale, not just launch. Everything we build is made to grow with your company." },
    { num: "03", title: "Brutal honesty", body: "We'd rather tell you something doesn't work than take your money to ship something bad. This makes the work better for everyone." },
    { num: "04", title: "Small by design", body: "We deliberately cap at 3 active projects. Your work gets real attention, not account management." },
    { num: "05", title: "Process, not chaos", body: "Structured discovery. Regular check-ins. Clear deliverables. You always know where we are and what's next." },
    { num: "06", title: "Long-term thinking", body: "We're not optimising for the invoice. We're optimising for the outcome. Half our clients are on long-term retainers because it works." }
  ];
  const comparison = [
    { attr: "Senior-led work", hs108: true, agency: false, freelancer: "maybe" },
    { attr: "Brand + product + systems", hs108: true, agency: "sometimes", freelancer: false },
    { attr: "Max 3 concurrent projects", hs108: true, agency: false, freelancer: "maybe" },
    { attr: "Structured process", hs108: true, agency: true, freelancer: false },
    { attr: "Direct communication", hs108: true, agency: false, freelancer: true },
    { attr: "Long-term retainers", hs108: true, agency: true, freelancer: "sometimes" },
    { attr: "R&D / creative programs", hs108: true, agency: false, freelancer: false }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Why HS108", "label": "Why Choose Us", "description": "Why clients choose HS108 over generalist agencies and freelancers. Senior talent, systems thinking, brutal honesty.", "data-astro-cid-w27onklj": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container why-intro" data-astro-cid-w27onklj> <p class="t-large why-lede" data-astro-cid-w27onklj>
Most studios are too big to care or too small to be reliable.
      HS108 is built to be neither.
</p> </div> <hr data-astro-cid-w27onklj> <section class="section container" data-astro-cid-w27onklj> <p class="t-label section-num" style="margin-bottom:3rem" data-astro-cid-w27onklj>Our Differentiators</p> <div class="diff-grid" data-astro-cid-w27onklj> ${differentiators.map((d) => renderTemplate`<div class="diff-item b-box" data-astro-cid-w27onklj> <span class="t-label diff-num" data-astro-cid-w27onklj>${d.num}</span> <h3 class="t-h3 diff-title" data-astro-cid-w27onklj>${d.title}</h3> <p class="t-body diff-body" data-astro-cid-w27onklj>${d.body}</p> </div>`)} </div> </section> <hr data-astro-cid-w27onklj>  <section class="section container" data-astro-cid-w27onklj> <p class="t-label section-num" style="margin-bottom:1rem" data-astro-cid-w27onklj>How We Compare</p> <h2 class="t-h2" style="margin-bottom:3rem" data-astro-cid-w27onklj>HS108 vs. The Alternatives</h2> <div class="compare-table b-box" data-astro-cid-w27onklj> <div class="compare-header" data-astro-cid-w27onklj> <div class="compare-attr t-label" data-astro-cid-w27onklj>Attribute</div> <div class="compare-col t-label" data-astro-cid-w27onklj>HS108</div> <div class="compare-col t-label muted" data-astro-cid-w27onklj>Big Agency</div> <div class="compare-col t-label muted" data-astro-cid-w27onklj>Freelancer</div> </div> ${comparison.map((row) => renderTemplate`<div class="compare-row b-top" data-astro-cid-w27onklj> <div class="compare-attr t-mono" data-astro-cid-w27onklj>${row.attr}</div> <div class="compare-col" data-astro-cid-w27onklj> ${row.hs108 === true ? renderTemplate`<span class="compare-yes" data-astro-cid-w27onklj>✓ Yes</span>` : row.hs108 === false ? renderTemplate`<span class="compare-no" data-astro-cid-w27onklj>✗ No</span>` : renderTemplate`<span class="compare-maybe" data-astro-cid-w27onklj>${row.hs108}</span>`} </div> <div class="compare-col muted" data-astro-cid-w27onklj> ${row.agency === true ? renderTemplate`<span data-astro-cid-w27onklj>✓</span>` : row.agency === false ? renderTemplate`<span data-astro-cid-w27onklj>✗</span>` : renderTemplate`<span data-astro-cid-w27onklj>${row.agency}</span>`} </div> <div class="compare-col muted" data-astro-cid-w27onklj> ${row.freelancer === true ? renderTemplate`<span data-astro-cid-w27onklj>✓</span>` : row.freelancer === false ? renderTemplate`<span data-astro-cid-w27onklj>✗</span>` : renderTemplate`<span data-astro-cid-w27onklj>${row.freelancer}</span>`} </div> </div>`)} </div> </section> <hr data-astro-cid-w27onklj>  <section class="section container" data-astro-cid-w27onklj> <div class="testimonial inv-block" data-astro-cid-w27onklj> <p class="t-label" style="opacity:0.4; margin-bottom:2rem" data-astro-cid-w27onklj>What Clients Say</p> <blockquote class="testimonial-quote" data-astro-cid-w27onklj>
"HS108 didn't just design our product — they redesigned how we think about design.
        The system they built let us ship 3× faster within two months of handoff."
</blockquote> <div class="testimonial-attr" data-astro-cid-w27onklj> <span class="t-mono" style="opacity:0.5" data-astro-cid-w27onklj>— Founder, HealthOS</span> </div> </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Let's talk.", "sub": "Tell us what you're working on and we'll tell you how we can help.", "data-astro-cid-w27onklj": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/why-us.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/why-us.astro";
const $$url = "/why-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhyUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
