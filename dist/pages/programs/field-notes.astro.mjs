import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$FieldNotes = createComponent(($$result, $$props, $$slots) => {
  const topics = [
    {
      code: "AD-001",
      title: "Material & Craft",
      desc: "Conversations at the intersection of traditional craft and contemporary design \u2014 with artisans, makers, and material innovators.",
      status: "Ongoing"
    },
    {
      code: "AD-002",
      title: "Design & Commerce",
      desc: "How design creates business value. With founders, brand directors, and designers who work at the intersection of aesthetics and outcomes.",
      status: "Ongoing"
    },
    {
      code: "AD-003",
      title: "The Design of Systems",
      desc: "Complex, interconnected design challenges \u2014 from design systems and service design to urban infrastructure and policy.",
      status: "Upcoming"
    },
    {
      code: "AD-004",
      title: "Visual Culture",
      desc: "Image-making, typography, photography, and the broader visual landscape \u2014 with practitioners who shape how things look.",
      status: "Ongoing"
    }
  ];
  const who = [
    "Practising designers across disciplines",
    "Artisans and makers working at the edge of craft",
    "Industry experts from adjacent fields",
    "Founders and leaders with a design-led perspective",
    "Researchers and academics working in design-related domains"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Field Notes", "description": "Field Notes is HS108's platform for design conversations \u2014 with designers, artisans, and industry experts on topics that matter to the field.", "bodyClass": "theme-teal", "data-astro-cid-aqmbneci": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="ad-hero" data-astro-cid-aqmbneci> <div class="container ad-hero-inner" data-astro-cid-aqmbneci> <div class="ad-overline" data-astro-cid-aqmbneci> <span class="t-label" style="opacity:0.4" data-astro-cid-aqmbneci>Program by HS108</span> </div> <h1 class="t-hero ad-title" data-astro-cid-aqmbneci>Field<br data-astro-cid-aqmbneci><em data-astro-cid-aqmbneci>Notes</em></h1> <hr class="ad-rule" data-astro-cid-aqmbneci> <div class="ad-hero-footer" data-astro-cid-aqmbneci> <p class="t-large ad-tagline" data-astro-cid-aqmbneci>
Design doesn't happen in isolation. The best thinking
          in the field comes from conversations across disciplines,
          craft, and commerce.
</p> <div class="ad-hero-meta" data-astro-cid-aqmbneci> <div class="ad-meta-item" data-astro-cid-aqmbneci> <span class="t-label ad-meta-label" data-astro-cid-aqmbneci>Format</span> <span class="t-mono ad-meta-val" data-astro-cid-aqmbneci>Conversations & Publications</span> </div> <div class="ad-meta-item" data-astro-cid-aqmbneci> <span class="t-label ad-meta-label" data-astro-cid-aqmbneci>Audience</span> <span class="t-mono ad-meta-val" data-astro-cid-aqmbneci>Designers, Makers, Thinkers</span> </div> </div> </div> </div> </div> <div class="container ad-body" data-astro-cid-aqmbneci> <!-- What it is --> <section class="ad-section" data-astro-cid-aqmbneci> <div class="ad-two-col" data-astro-cid-aqmbneci> <div data-astro-cid-aqmbneci> <p class="t-label" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-aqmbneci>What It Is</p> <h2 class="t-h2" data-astro-cid-aqmbneci>A culture of discourse.</h2> </div> <div class="prose ad-prose" data-astro-cid-aqmbneci> <p data-astro-cid-aqmbneci>
Field Notes is HS108's platform for conversations about design — with the people who practice it, teach it, fund it, and push it forward.
</p> <p data-astro-cid-aqmbneci>
It's not a podcast. Not a newsletter. It's a commitment to the ongoing exchange of ideas between HS108 and the broader design community. We engage with designers, artisans, and industry experts on topics that matter to the field: craft, commerce, systems, visual culture, and the future of design practice.
</p> <p data-astro-cid-aqmbneci>
These conversations keep us sharp. They expose us to ideas and perspectives we wouldn't encounter inside client work alone. And they contribute something back to a field that has given us a great deal.
</p> </div> </div> </section> <hr data-astro-cid-aqmbneci> <!-- Discussion topics --> <section class="ad-section" data-astro-cid-aqmbneci> <p class="t-label" style="opacity:0.4; margin-bottom:3rem" data-astro-cid-aqmbneci>Discussion Threads</p> <div class="ad-grid" data-astro-cid-aqmbneci> ${topics.map((topic) => renderTemplate`<div class="ad-card b-box" data-astro-cid-aqmbneci> <div class="ad-card-header" data-astro-cid-aqmbneci> <span class="t-label ad-code" data-astro-cid-aqmbneci>${topic.code}</span> <span${addAttribute(["tag", { "tag--accent": topic.status === "Ongoing" }], "class:list")} data-astro-cid-aqmbneci> ${topic.status} </span> </div> <h3 class="t-h3 ad-card-title" data-astro-cid-aqmbneci>${topic.title}</h3> <p class="t-body ad-card-desc" data-astro-cid-aqmbneci>${topic.desc}</p> </div>`)} </div> </section> <hr data-astro-cid-aqmbneci> <!-- Who we talk with --> <section class="ad-section" data-astro-cid-aqmbneci> <div class="ad-two-col" data-astro-cid-aqmbneci> <div data-astro-cid-aqmbneci> <p class="t-label" style="opacity:0.4; margin-bottom:1rem" data-astro-cid-aqmbneci>Who We Talk With</p> <h2 class="t-h2" data-astro-cid-aqmbneci>Practitioners, not pundits.</h2> </div> <ul class="ad-who-list" data-astro-cid-aqmbneci> ${who.map((w) => renderTemplate`<li class="ad-who-item t-body" data-astro-cid-aqmbneci> <span class="ad-tick" data-astro-cid-aqmbneci>→</span> ${w} </li>`)} </ul> </div> </section> <hr data-astro-cid-aqmbneci> <!-- Participate --> <section class="ad-section" data-astro-cid-aqmbneci> <div class="ad-participate-grid" data-astro-cid-aqmbneci> <div data-astro-cid-aqmbneci> <h2 class="t-h2" style="margin-bottom:1rem" data-astro-cid-aqmbneci>Want to be part of the conversation?</h2> <p class="t-body" style="opacity:0.65; max-width:50ch; margin-bottom:2rem" data-astro-cid-aqmbneci>
Field Notes occasionally invites contributors — practitioners with something worth saying on topics we're actively exploring. If you're a designer, maker, or thinker working in an interesting domain, reach out.
</p> <a href="mailto:contact.studio@hs108.in" class="btn btn--primary" data-astro-cid-aqmbneci>Get In Touch</a> </div> <div class="ad-values inv-block" data-astro-cid-aqmbneci> <p class="t-label" style="opacity:0.4; margin-bottom:1.5rem" data-astro-cid-aqmbneci>What We Value in Discourse</p> <ul class="ad-values-list" data-astro-cid-aqmbneci> ${[
    "Specificity over generality",
    "Practice over theory",
    "Honest disagreement over polite consensus",
    "Cross-discipline thinking",
    "Work that stands on its own"
  ].map((v) => renderTemplate`<li class="t-mono ad-value-item" data-astro-cid-aqmbneci>${v}</li>`)} </ul> </div> </div> </section> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "headline": "Looking for our client work?", "sub": "Field Notes is our community platform. For design services, visit what we offer.", "data-astro-cid-aqmbneci": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/field-notes.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/programs/field-notes.astro";
const $$url = "/programs/field-notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FieldNotes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
