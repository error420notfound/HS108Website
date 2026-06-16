import { e as createAstro, c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, g as renderSlot } from './astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_CBKMY8k1.mjs';
/* empty css                         */

const $$Astro = createAstro("https://hs108.in");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-3zbxo6iv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-header container" data-astro-cid-3zbxo6iv> ${label && renderTemplate`<p class="t-label section-num" data-astro-cid-3zbxo6iv>${label}</p>`} <h1 class="t-h1" data-astro-cid-3zbxo6iv>${title}</h1> </div> <hr data-astro-cid-3zbxo6iv> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
