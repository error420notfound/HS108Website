import { e as createAstro, c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute, F as Fragment, g as renderSlot } from '../../chunks/astro/server_B3U45OOC.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C9NUf4jN.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBKMY8k1.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_dFzyciVm.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://hs108.in");
const $$WorkLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkLayout;
  const {
    title,
    client,
    year,
    categories,
    tags,
    coverImage,
    coverAlt,
    color,
    outcome,
    summary,
    services,
    duration,
    slug,
    pullQuote,
    stats,
    images,
    modelViewer
  } = Astro2.props;
  let mvIosSrc = modelViewer?.iosSrc;
  if (modelViewer?.iosSrc) {
    const hashParams = new URLSearchParams();
    if (modelViewer.iosCustomBannerUrl) {
      const bannerParams = new URLSearchParams();
      bannerParams.set("customHeight", modelViewer.iosCustomBannerHeight ?? "large");
      bannerParams.set("allowsContentScaling", modelViewer.iosAllowsContentScaling ? "1" : "0");
      hashParams.set("custom", `${modelViewer.iosCustomBannerUrl}?${bannerParams.toString()}`);
    }
    if (modelViewer.iosCheckoutTitle) hashParams.set("checkoutTitle", modelViewer.iosCheckoutTitle);
    if (modelViewer.iosCheckoutSubtitle) hashParams.set("checkoutSubtitle", modelViewer.iosCheckoutSubtitle);
    if (modelViewer.iosPrice) hashParams.set("price", modelViewer.iosPrice);
    if (modelViewer.iosCallToAction) hashParams.set("callToAction", modelViewer.iosCallToAction);
    if (modelViewer.iosCanonicalUrl) hashParams.set("canonicalWebPageURL", modelViewer.iosCanonicalUrl);
    const hashStr = hashParams.toString().replace(/\+/g, "%20");
    if (hashStr) mvIosSrc = `${modelViewer.iosSrc}#${hashStr}`;
  }
  const allWork = await getCollection("work", ({ data }) => !data.draft);
  const sorted = allWork.sort((a, b) => a.data.order - b.data.order);
  const currentIdx = sorted.findIndex((e) => e.slug === slug);
  const nextEntry = sorted[(currentIdx + 1) % sorted.length];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} \u2014 ${client}`, "description": summary, "data-astro-cid-zyclsntz": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="cs-hero" id="cs-hero" data-astro-cid-zyclsntz> <div class="cs-hero-overlay"${addAttribute(`background-color: ${color}26`, "style")} data-astro-cid-zyclsntz></div> <img${addAttribute(coverImage, "src")}${addAttribute(coverAlt, "alt")} class="cs-hero-img img-raw" id="cs-hero-img" loading="eager" data-astro-cid-zyclsntz> <div class="cs-hero-gradient-blend-mix" data-astro-cid-zyclsntz></div> <div class="cs-hero-gradient" data-astro-cid-zyclsntz></div> <div class="cs-hero-caption container" data-astro-cid-zyclsntz> <p class="t-label cs-hero-client" data-astro-cid-zyclsntz>${client} &mdash; ${year}</p> <h1 class="cs-hero-title" data-astro-cid-zyclsntz>${title}</h1> <p class="cs-hero-scroll t-label" data-astro-cid-zyclsntz>Scroll to read &darr;</p> </div> </div>  <div class="cs-meta-bar" id="cs-meta-bar" aria-hidden="true" data-astro-cid-zyclsntz> <div class="cs-meta-bar-inner container" data-astro-cid-zyclsntz> <div class="cs-meta-item" data-astro-cid-zyclsntz> <span class="cs-meta-label" data-astro-cid-zyclsntz>Client</span> <span class="cs-meta-value" data-astro-cid-zyclsntz>${client}</span> </div> <div class="cs-meta-item" data-astro-cid-zyclsntz> <span class="cs-meta-label" data-astro-cid-zyclsntz>Year</span> <span class="cs-meta-value" data-astro-cid-zyclsntz>${year}</span> </div> ${duration && renderTemplate`<div class="cs-meta-item" data-astro-cid-zyclsntz> <span class="cs-meta-label" data-astro-cid-zyclsntz>Duration</span> <span class="cs-meta-value" data-astro-cid-zyclsntz>${duration}</span> </div>`} <div class="cs-meta-item cs-meta-item--services" data-astro-cid-zyclsntz> <span class="cs-meta-label" data-astro-cid-zyclsntz>Services</span> <span class="cs-meta-value" data-astro-cid-zyclsntz>${services.join(", ")}</span> </div> <div class="cs-meta-item cs-meta-item--outcome" data-astro-cid-zyclsntz> <span class="cs-meta-label" data-astro-cid-zyclsntz>${outcome.label}</span> <span class="cs-meta-value cs-meta-outcome" data-astro-cid-zyclsntz>${outcome.value}</span> </div> </div> </div>  ${stats && stats.length > 0 && renderTemplate`<div class="cs-stats-strip" data-astro-cid-zyclsntz> ${stats.map((s) => renderTemplate`<div class="cs-stat-cell" data-astro-cid-zyclsntz> <p class="t-label cs-stat-label" data-astro-cid-zyclsntz>${s.label}</p> <p class="cs-stat-value" data-astro-cid-zyclsntz>${s.value}</p> </div>`)} </div>`} <div class="cs-body container" data-astro-cid-zyclsntz> <!-- Summary intro --> <div class="cs-intro" data-astro-cid-zyclsntz> <p class="cs-summary" data-astro-cid-zyclsntz>${summary}</p> </div> <hr class="cs-rule" data-astro-cid-zyclsntz> <!-- Pull quote (if present) --> ${pullQuote && renderTemplate`<div class="cs-pullquote-wrap" data-astro-cid-zyclsntz> <blockquote class="cs-pullquote-text" data-astro-cid-zyclsntz>${pullQuote}</blockquote> </div>`} <!-- 3D model viewer (optional) --> ${modelViewer && renderTemplate`<div class="cs-model-viewer-wrap" id="cs-model-viewer"${addAttribute(modelViewer.scrollAnimation !== false ? "true" : void 0, "data-scroll")}${addAttribute(modelViewer.startTheta ?? -90, "data-start-theta")}${addAttribute(modelViewer.endTheta ?? 180, "data-end-theta")}${addAttribute(modelViewer.startPhi ?? 75, "data-start-phi")}${addAttribute(modelViewer.endPhi ?? 90, "data-end-phi")}${addAttribute(modelViewer.startRadius ?? 2, "data-start-radius")}${addAttribute(modelViewer.endRadius ?? 1, "data-end-radius")} data-astro-cid-zyclsntz>  ${renderComponent($$result2, "model-viewer", "model-viewer", { "id": "mv-instance", "src": modelViewer.src, "ios-src": mvIosSrc, "alt": modelViewer.alt ?? "3D Model", "shadow-intensity": modelViewer.shadowIntensity ?? 1, "camera-controls": modelViewer.cameraControls !== false ? true : void 0, "auto-rotate": modelViewer.autoRotate !== false ? true : void 0, "ar": modelViewer.enableAR !== false ? true : void 0, "ar-modes": "scene-viewer webxr quick-look", "ar-title": modelViewer.arTitle, "ar-link": modelViewer.arLink, "disable-zoom": !modelViewer.enableZoom ? true : void 0, "interaction-prompt": "none", "touch-action": "pan-y", "camera-orbit": "0deg 75deg 1m", "max-camera-orbit": "auto 180deg auto", "min-camera-orbit": "auto 90deg auto", "interpolation-decay": modelViewer.interpolationDecay ?? 200, "environment-image": modelViewer.environmentImage ?? "", "style": "width:100%;height:100%;display:block;", "data-astro-cid-zyclsntz": true }, { "default": () => renderTemplate` ${modelViewer.acesFilmic !== false && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-zyclsntz": true }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "effect-composer", "effect-composer", { "render-mode": "quality", "msaa": "8", "data-astro-cid-zyclsntz": true }, { "default": () => renderTemplate`  ${modelViewer.bloom !== false && renderTemplate`${renderComponent($$result3, "bloom-effect", "bloom-effect", { "data-astro-cid-zyclsntz": true })}`}  ${renderComponent($$result3, "color-grade-effect", "color-grade-effect", { "tonemapping": "aces_filmic", "blend-mode": "default", "data-astro-cid-zyclsntz": true })} ` })} ` })}`} <button slot="ar-button" class="mv-ar-btn t-label" data-astro-cid-zyclsntz> ${modelViewer.arButtonText ?? "View in AR"} </button> ` })} ${modelViewer.caption && renderTemplate`<p class="cs-model-caption t-label" data-astro-cid-zyclsntz>${modelViewer.caption}</p>`} </div>`} <!-- Prose content from MDX --> <div class="prose cs-prose" data-astro-cid-zyclsntz> ${renderSlot($$result2, $$slots["default"])} </div> <!-- Image gallery (if present) --> ${images && images.length > 0 && renderTemplate`<div class="cs-gallery" data-astro-cid-zyclsntz> ${images.map((img) => renderTemplate`<figure class="cs-gallery-item" data-astro-cid-zyclsntz> <img${addAttribute(img.src, "src")}${addAttribute(img.caption ?? "", "alt")} class="img-raw cs-gallery-img" loading="lazy" data-astro-cid-zyclsntz> ${img.caption && renderTemplate`<figcaption class="t-label cs-gallery-caption" data-astro-cid-zyclsntz>${img.caption}</figcaption>`} </figure>`)} </div>`} </div> <hr data-astro-cid-zyclsntz>  ${nextEntry && renderTemplate`<div class="cs-next container" data-astro-cid-zyclsntz> <p class="t-label cs-next-label" data-astro-cid-zyclsntz>Next Project</p> <a${addAttribute(`/work/${nextEntry.slug}`, "href")} class="cs-next-link" data-astro-cid-zyclsntz> <span class="cs-next-title" data-astro-cid-zyclsntz>${nextEntry.data.title}</span> <span class="cs-next-arrow" data-astro-cid-zyclsntz>&rarr;</span> </a> </div>`}${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-zyclsntz": true })} ` })}  `;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/layouts/WorkLayout.astro", void 0);

const $$Astro = createAstro("https://hs108.in");
async function getStaticPaths() {
  const entries = await getCollection("work", ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "title": entry.data.title, "client": entry.data.client, "year": entry.data.year, "categories": entry.data.categories, "tags": entry.data.tags, "coverImage": entry.data.coverImage, "coverAlt": entry.data.coverAlt, "color": entry.data.color, "outcome": entry.data.outcome, "summary": entry.data.summary, "services": entry.data.services, "duration": entry.data.duration, "slug": entry.slug, "pullQuote": entry.data.pullQuote, "stats": entry.data.stats, "images": entry.data.images, "modelViewer": entry.data.modelViewer }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
