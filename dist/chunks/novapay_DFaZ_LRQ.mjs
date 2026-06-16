import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B3U45OOC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DuZmoy6O.mjs';
import 'clsx';

const frontmatter = {
  "title": "NovaPay Fintech Rebrand",
  "client": "NovaPay",
  "year": 2024,
  "categories": ["brand", "product", "design-system"],
  "tags": ["Identity", "UX", "Figma", "Component Library", "Fintech"],
  "coverImage": "/work/novapay-cover.jpg",
  "coverAlt": "NovaPay brand system displayed across mobile and desktop",
  "color": "#0a85ff",
  "outcome": {
    "label": "Revenue Growth",
    "value": "7×"
  },
  "summary": "A complete identity and product overhaul that turned a commodity fintech into a premium financial brand, driving 7× revenue growth in 14 months.",
  "services": ["Brand Identity", "Product Design", "Design System"],
  "duration": "5 months",
  "pullQuote": "Trusted and fast — but nobody felt that when they looked at the product. We fixed that.",
  "stats": [{
    "label": "Revenue Growth",
    "value": "7×"
  }, {
    "label": "Onboarding Drop-off",
    "value": "−42%"
  }, {
    "label": "Enterprise Clients",
    "value": "3→19"
  }],
  "images": [{
    "src": "/work/novapay-01.jpg",
    "caption": "New wordmark and brand system across product surfaces"
  }, {
    "src": "/work/novapay-02.jpg",
    "caption": "Component library — 200+ elements, Figma-to-CSS token mapping"
  }],
  "modelViewer": {
    "src": "https://error420notfound.github.io/anoka/Untitled555%20v3.glb",
    "iosSrc": "https://error420notfound.github.io/anoka/Untitled555%20v3.usdz",
    "alt": "NovaPay brand identity 3D model",
    "caption": "3D model — NovaPay brand system",
    "shadowIntensity": 1,
    "autoRotate": true,
    "acesFilmic": true,
    "bloom": true,
    "scrollAnimation": true,
    "startTheta": -90,
    "endTheta": 180,
    "startPhi": 75,
    "endPhi": 90,
    "startRadius": 2,
    "endRadius": 1,
    "arButtonText": "View in AR",
    "arTitle": "NovaPay Brand Model",
    "arLink": "https://hs108.in/work/novapay",
    "iosCustomBannerUrl": "https://hs108.in/ar-banner.html",
    "iosCustomBannerHeight": "large",
    "iosAllowsContentScaling": true,
    "iosCanonicalUrl": "https://hs108.in/work/novapay"
  },
  "featured": true,
  "order": 1,
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-challenge",
    "text": "The Challenge"
  }, {
    "depth": 2,
    "slug": "our-approach",
    "text": "Our Approach"
  }, {
    "depth": 3,
    "slug": "phase-1-brand-foundation",
    "text": "Phase 1: Brand Foundation"
  }, {
    "depth": 3,
    "slug": "phase-2-product-redesign",
    "text": "Phase 2: Product Redesign"
  }, {
    "depth": 3,
    "slug": "phase-3-design-system",
    "text": "Phase 3: Design System"
  }, {
    "depth": 2,
    "slug": "the-outcome",
    "text": "The Outcome"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "NovaPay was operating in an overcrowded fintech market with no clear differentiator. Their existing brand felt like every other payments app — generic iconography, safe blue palette, forgettable typography. Conversion was struggling and enterprise clients weren’t taking them seriously."
    }), "\n", createVNode(_components.h2, {
      id: "our-approach",
      children: "Our Approach"
    }), "\n", createVNode(_components.p, {
      children: ["We started with a two-week discovery phase, interviewing their top 20 clients and 50 end-users. The insight was consistent: NovaPay was trusted, reliable, and fast — but nobody ", createVNode(_components.em, {
        children: "felt"
      }), " that when they looked at the product."]
    }), "\n", createVNode(_components.h3, {
      id: "phase-1-brand-foundation",
      children: "Phase 1: Brand Foundation"
    }), "\n", createVNode(_components.p, {
      children: "We rebuilt the brand from the ground up — new wordmark, type system, color palette, and iconography. The new identity communicates precision and confidence without sacrificing warmth."
    }), "\n", createVNode(_components.h3, {
      id: "phase-2-product-redesign",
      children: "Phase 2: Product Redesign"
    }), "\n", createVNode(_components.p, {
      children: "With the brand locked, we redesigned the core product flows — onboarding, dashboard, transactions, and settings. Every screen was designed in Figma and handed off with a component library of 200+ elements."
    }), "\n", createVNode(_components.h3, {
      id: "phase-3-design-system",
      children: "Phase 3: Design System"
    }), "\n", createVNode(_components.p, {
      children: "The final deliverable was a fully documented design system, complete with usage guidelines, do’s and don’ts, and Figma tokens mapped to production CSS variables."
    }), "\n", createVNode(_components.h2, {
      id: "the-outcome",
      children: "The Outcome"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "7× revenue growth in 14 months post-launch"
      }), "\n", createVNode(_components.li, {
        children: "42% reduction in onboarding drop-off"
      }), "\n", createVNode(_components.li, {
        children: "Enterprise clients increased from 3 to 19"
      }), "\n", createVNode(_components.li, {
        children: "Design system adopted by 6-person product team within 2 weeks of handoff"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/work/novapay.mdx";
const file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/novapay.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/novapay.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
