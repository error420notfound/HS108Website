import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_dFzyciVm.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9NUf4jN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allWork = await getCollection("work", ({ data }) => !data.draft);
  const sorted = allWork.sort((a, b) => a.data.order - b.data.order);
  const categories = ["All", "brand", "product", "design-system", "web", "mobile", "strategy"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work", "description": "Selected projects from HS108 \u2014 brand identity, product design, and design systems for ambitious companies.", "data-astro-cid-57l5znwr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="work-header container" data-astro-cid-57l5znwr> <p class="t-label section-num" data-astro-cid-57l5znwr>Selected Work</p> <h1 class="t-h1" data-astro-cid-57l5znwr>Our Work</h1> <p class="t-large work-desc" data-astro-cid-57l5znwr>
A selection of projects across brand, product, and systems design.<br data-astro-cid-57l5znwr>
Each one built to last.
</p> </div> <hr data-astro-cid-57l5znwr>  <div class="work-filters container" id="filter-bar" data-astro-cid-57l5znwr> ${categories.map((cat) => renderTemplate`<button${addAttribute(["btn work-filter-btn", { "btn--primary": cat === "All" }], "class:list")}${addAttribute(cat === "All" ? "all" : cat, "data-filter")} data-astro-cid-57l5znwr> ${cat === "All" ? "All" : cat.replace("-", " ")} </button>`)} </div>  <div class="work-list" id="work-grid" data-astro-cid-57l5znwr> ${sorted.map((entry, i) => renderTemplate`<article${addAttribute(["work-row", i % 2 !== 0 ? "work-row--reverse" : ""], "class:list")}${addAttribute(entry.data.categories.join(","), "data-categories")} data-astro-cid-57l5znwr> <a${addAttribute(`/work/${entry.slug}`, "href")} class="work-row-inner" data-astro-cid-57l5znwr> <!-- Image half --> <div class="work-row-img"${addAttribute(`background-color: ${entry.data.color}18`, "style")} data-astro-cid-57l5znwr> <img${addAttribute(entry.data.coverImage, "src")}${addAttribute(entry.data.coverAlt, "alt")} class="img-raw"${addAttribute(i === 0 ? "eager" : "lazy", "loading")} data-astro-cid-57l5znwr> </div> <!-- Text half --> <div class="work-row-text" data-astro-cid-57l5znwr> <div class="work-row-meta" data-astro-cid-57l5znwr> <span class="t-label work-row-client" data-astro-cid-57l5znwr>${entry.data.client}</span> <span class="t-label work-row-year muted" data-astro-cid-57l5znwr>${entry.data.year}</span> </div> <h2 class="t-h2 work-row-title" data-astro-cid-57l5znwr>${entry.data.title}</h2> <p class="t-body work-row-summary" data-astro-cid-57l5znwr>${entry.data.summary}</p> <div class="work-row-outcome" data-astro-cid-57l5znwr> <span class="t-label muted" data-astro-cid-57l5znwr>${entry.data.outcome.label}</span> <span class="work-row-value" data-astro-cid-57l5znwr>${entry.data.outcome.value}</span> </div> <div class="work-row-cats" data-astro-cid-57l5znwr> ${entry.data.categories.map((c) => renderTemplate`<span class="tag" data-astro-cid-57l5znwr>${c.replace("-", " ")}</span>`)} </div> <span class="work-row-cta t-label" data-astro-cid-57l5znwr>View Project →</span> </div> </a> </article>`)} </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-57l5znwr": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/work/index.astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
