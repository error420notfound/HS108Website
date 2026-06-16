import { c as createComponent, m as maybeRenderHead, d as renderTemplate, e as createAstro, f as addAttribute, r as renderComponent, F as Fragment } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CBKMY8k1.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9NUf4jN.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="container hero-inner" data-astro-cid-bbe6dxrz> <div class="hero-overline" data-astro-cid-bbe6dxrz> <span class="t-label" data-astro-cid-bbe6dxrz>Independent Design Studio</span> <span class="hero-sep" data-astro-cid-bbe6dxrz>—</span> <span class="t-label" data-astro-cid-bbe6dxrz>Est. 2019</span> <span class="hero-sep" data-astro-cid-bbe6dxrz>—</span> <span class="t-label hero-status" data-astro-cid-bbe6dxrz> <span class="hero-dot" data-astro-cid-bbe6dxrz></span>
Accepting Projects
</span> </div> <h1 class="hero-headline" data-astro-cid-bbe6dxrz>
Design<br data-astro-cid-bbe6dxrz>
Built to<br data-astro-cid-bbe6dxrz> <span class="hero-headline-accent" data-astro-cid-bbe6dxrz>Scale.</span> </h1> <div class="hero-bottom" data-astro-cid-bbe6dxrz> <p class="t-large hero-sub" data-astro-cid-bbe6dxrz>
We build brands and digital products for companies<br class="hero-br" data-astro-cid-bbe6dxrz>
ready to grow. No generalists. No templates. Just systems<br class="hero-br" data-astro-cid-bbe6dxrz>
that work at scale.
</p> <div class="hero-ctas" data-astro-cid-bbe6dxrz> <a href="/contact" class="btn btn--primary" data-astro-cid-bbe6dxrz>Start a Project</a> <a href="/work" class="btn btn--outline" data-astro-cid-bbe6dxrz>See Our Work →</a> </div> </div> </div> </section> `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://hs108.in");
const $$StatBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatBar;
  const { stats, invert = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["stat-strip", { "inv-block": invert, "stat-strip--inv": invert }], "class:list")} data-astro-cid-7ymq7b2t> ${stats.map((stat) => renderTemplate`<div class="stat-item" data-astro-cid-7ymq7b2t> <p class="stat-value" data-astro-cid-7ymq7b2t>${stat.value}</p> <p class="t-label stat-label" data-astro-cid-7ymq7b2t>${stat.label}</p> ${stat.sub && renderTemplate`<p class="t-mono stat-sub" data-astro-cid-7ymq7b2t>${stat.sub}</p>`} </div>`)} </div> `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/StatBar.astro", void 0);

const $$Astro = createAstro("https://hs108.in");
const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const {
    slug,
    title,
    client,
    year,
    categories,
    coverImage,
    coverAlt,
    color,
    outcome,
    summary,
    large = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/work/${slug}`, "href")}${addAttribute(["work-card b-box", { "work-card--large": large }], "class:list")} data-astro-cid-r7kjq4ip> <div class="work-card-img aspect-16-9"${addAttribute(`background-color: ${color}18`, "style")} data-astro-cid-r7kjq4ip> <img${addAttribute(coverImage, "src")}${addAttribute(coverAlt, "alt")} class="img-raw" loading="lazy" data-astro-cid-r7kjq4ip> </div> <div class="work-card-body" data-astro-cid-r7kjq4ip> <div class="work-card-meta" data-astro-cid-r7kjq4ip> <span class="t-label" data-astro-cid-r7kjq4ip>${client}</span> <span class="t-label muted" data-astro-cid-r7kjq4ip>${year}</span> </div> <h3${addAttribute(["work-card-title", large ? "t-h2" : "t-h3"], "class:list")} data-astro-cid-r7kjq4ip>${title}</h3> <p class="t-body work-card-summary" data-astro-cid-r7kjq4ip>${summary}</p> <div class="work-card-footer" data-astro-cid-r7kjq4ip> <div class="work-card-cats" data-astro-cid-r7kjq4ip> ${categories.slice(0, 3).map((c) => renderTemplate`<span class="tag" data-astro-cid-r7kjq4ip>${c}</span>`)} </div> <div class="work-card-outcome" data-astro-cid-r7kjq4ip> <span class="t-label muted" data-astro-cid-r7kjq4ip>${outcome.label}</span> <span class="work-card-value" data-astro-cid-r7kjq4ip>${outcome.value}</span> </div> </div> </div> </a> `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/components/WorkCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allWork = await getCollection("work", ({ data }) => !data.draft && data.featured);
  const featured = allWork.sort((a, b) => a.data.order - b.data.order).slice(0, 3);
  const stats = [
    { value: "38+", label: "Brands Scaled", sub: "Since 2019" },
    { value: "5\xD7", label: "Avg. Growth", sub: "Across active clients" },
    { value: "100%", label: "Senior Talent", sub: "No juniors on your work" },
    { value: "6 yrs", label: "In Business", sub: "Independent, bootstrapped" }
  ];
  const services = [
    { num: "01", code: "WebCanvas", name: "Digital Design", desc: "Web, app, UI, and UX design. Intuitive digital experiences that captivate audiences and perform at every touchpoint." },
    { num: "02", code: "CX&Identity", name: "Branding & Identity", desc: "Logo, brand identity, and packaging design. A strong, recognisable presence that resonates with your audience and lasts." },
    { num: "03", code: "CMF_Nexus", name: "Product Design", desc: "From concept sketch and CAD to prototyping and production-ready files. Design meets engineering precision." },
    { num: "04", code: "Lumina.raw", name: "Photo & Video", desc: "Photography, videography, and editing. Visuals that tell your brand story and stop the scroll." }
  ];
  const programs = [
    { name: "Creative Department", slug: "creative-department", desc: "Our flagship retainer \u2014 embedded design support for businesses that need design ongoing, not one-off." },
    { name: "Design Lab", slug: "design-lab", desc: "Research and discovery for complex, high-demand design challenges before execution begins." },
    { name: "off_menu", slug: "off-menu", desc: "Bespoke, tailor-made packages for clients whose needs don't fit a standard scope." },
    { name: "Field Notes", slug: "field-notes", desc: "Our platform for discourse with designers, artisans, and industry experts." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "HS108", "description": "HS108 is an independent design studio building brands and products that scale.", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "StatBar", $$StatBar, { "stats": stats, "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<div class="marquee-track" aria-hidden="true" data-astro-cid-j7pv25f6> <div class="marquee-inner" data-astro-cid-j7pv25f6> ${Array(4).fill(null).map(() => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <span data-astro-cid-j7pv25f6>WebCanvas</span> <span data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>CX&amp;Identity</span> <span data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>CMF_Nexus</span> <span data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>Lumina.raw</span> <span data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>Creative Department</span> <span data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>off_menu</span> <span data-astro-cid-j7pv25f6>·</span> ` })}`)} </div> </div>  <section class="section container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="t-label section-num" data-astro-cid-j7pv25f6>Selected Work</p> <h2 class="t-h2" data-astro-cid-j7pv25f6>What We've Built</h2> </div> <a href="/work" class="btn btn--outline" data-astro-cid-j7pv25f6>All Projects →</a> </div> <div class="featured-grid" data-astro-cid-j7pv25f6> ${featured.map((entry, i) => renderTemplate`<div${addAttribute(["featured-item", { "featured-item--wide": i === 0 }], "class:list")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "WorkCard", $$WorkCard, { "slug": entry.slug, "title": entry.data.title, "client": entry.data.client, "year": entry.data.year, "categories": entry.data.categories, "coverImage": entry.data.coverImage, "coverAlt": entry.data.coverAlt, "color": entry.data.color, "outcome": entry.data.outcome, "summary": entry.data.summary, "large": i === 0, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> </section> <hr data-astro-cid-j7pv25f6>  <section class="section container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="t-label section-num" data-astro-cid-j7pv25f6>What We Do</p> <h2 class="t-h2" data-astro-cid-j7pv25f6>Our Services</h2> </div> <a href="/services" class="btn btn--outline" data-astro-cid-j7pv25f6>Full Services →</a> </div> <div class="services-list" data-astro-cid-j7pv25f6> ${services.map((svc) => renderTemplate`<div class="service-row b-top" data-astro-cid-j7pv25f6> <span class="t-label service-num" data-astro-cid-j7pv25f6>${svc.num}</span> <div class="service-name-block" data-astro-cid-j7pv25f6> <span class="t-label service-code" data-astro-cid-j7pv25f6>${svc.code}</span> <h3 class="t-h3 service-name" data-astro-cid-j7pv25f6>${svc.name}</h3> </div> <p class="t-body service-desc" data-astro-cid-j7pv25f6>${svc.desc}</p> </div>`)} </div> </section> <hr data-astro-cid-j7pv25f6>  <section class="section section--inv" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <p class="t-label section-num" style="opacity:0.4" data-astro-cid-j7pv25f6>How We Work</p> <h2 class="t-h2" style="margin-bottom:3rem" data-astro-cid-j7pv25f6>Our Process</h2> <div class="process-strip stat-strip" data-astro-cid-j7pv25f6> ${[
    { n: "01", title: "Understand", desc: "Deep research. Client interviews. Market mapping. We never design blind." },
    { n: "02", title: "Design", desc: "Strategic concepts, iteration, and refinement until we hit something true." },
    { n: "03", title: "Build", desc: "Production-ready files, handoff docs, and implementation support." },
    { n: "04", title: "Scale", desc: "Systems that grow with your company. Retainers for ongoing partnership." }
  ].map((step) => renderTemplate`<div class="process-step" data-astro-cid-j7pv25f6> <span class="t-label process-num" data-astro-cid-j7pv25f6>${step.n}</span> <h3 class="t-h3 process-title" data-astro-cid-j7pv25f6>${step.title}</h3> <p class="t-body process-desc" data-astro-cid-j7pv25f6>${step.desc}</p> </div>`)} </div> <div style="margin-top:3rem" data-astro-cid-j7pv25f6> <a href="/process" class="btn btn--outline-inv" data-astro-cid-j7pv25f6>See Full Process →</a> </div> </div> </section> <hr data-astro-cid-j7pv25f6>  <section class="section container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="t-label section-num" data-astro-cid-j7pv25f6>Beyond Projects</p> <h2 class="t-h2" data-astro-cid-j7pv25f6>Our Programs</h2> </div> <a href="/programs/creative-department" class="btn btn--outline" data-astro-cid-j7pv25f6>Explore Programs →</a> </div> <div class="programs-grid" data-astro-cid-j7pv25f6> ${programs.map((prog) => renderTemplate`<a${addAttribute(`/programs/${prog.slug}`, "href")} class="program-card b-box" data-astro-cid-j7pv25f6> <p class="t-label program-name" data-astro-cid-j7pv25f6>${prog.name}</p> <p class="t-body program-desc" data-astro-cid-j7pv25f6>${prog.desc}</p> <span class="t-mono program-cta" data-astro-cid-j7pv25f6>Learn More →</span> </a>`)} </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/index.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
