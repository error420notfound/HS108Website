import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B3U45OOC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DuZmoy6O.mjs';
import 'clsx';

const frontmatter = {
  "title": "Urbane — Luxury Real Estate Platform",
  "client": "Urbane Property",
  "year": 2024,
  "categories": ["brand", "web", "product"],
  "tags": ["Identity", "Web Design", "Real Estate", "Luxury", "Figma"],
  "coverImage": "/work/urbane-cover.jpg",
  "coverAlt": "Urbane property platform shown on desktop browser",
  "color": "#2D2417",
  "outcome": {
    "label": "Lead Quality",
    "value": "+310%"
  },
  "summary": "A luxury real estate platform rebuilt from the ground up — new brand, new website, new product experience — resulting in 310% increase in qualified leads.",
  "services": ["Brand Identity", "Web Design", "Product Strategy"],
  "duration": "4 months",
  "pullQuote": "Luxury is not decoration. It's restraint, precision, and confidence.",
  "stats": [{
    "label": "Qualified Leads",
    "value": "+310%"
  }, {
    "label": "Avg. Time on Site",
    "value": "4:45"
  }, {
    "label": "Exclusive Listings",
    "value": "3 signed"
  }],
  "images": [{
    "src": "/work/urbane-01.jpg",
    "caption": "Brand identity — geometric serif wordmark with restrained palette"
  }, {
    "src": "/work/urbane-02.jpg",
    "caption": "Property listing page — editorial photography-first layout"
  }],
  "featured": true,
  "order": 2,
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
    "slug": "brand-identity",
    "text": "Brand Identity"
  }, {
    "depth": 3,
    "slug": "web-platform",
    "text": "Web Platform"
  }, {
    "depth": 3,
    "slug": "conversion-flows",
    "text": "Conversion Flows"
  }, {
    "depth": 2,
    "slug": "the-outcome",
    "text": "The Outcome"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
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
      children: "Urbane operated in Mumbai’s premium real estate segment but their digital presence screamed mid-market. Prospective buyers in the ₹5Cr+ category weren’t converting — the site felt outdated and untrustworthy for transactions of that scale."
    }), "\n", createVNode(_components.h2, {
      id: "our-approach",
      children: "Our Approach"
    }), "\n", createVNode(_components.p, {
      children: "Luxury is not decoration. It’s restraint, precision, and confidence. We applied this principle to every decision — from the typeface choice to the micro-interactions on the property listing page."
    }), "\n", createVNode(_components.h3, {
      id: "brand-identity",
      children: "Brand Identity"
    }), "\n", createVNode(_components.p, {
      children: "New wordmark built on a geometric serif. A restrained palette of deep brown, warm cream, and gold. Photography guidelines that prioritized architecture over people."
    }), "\n", createVNode(_components.h3, {
      id: "web-platform",
      children: "Web Platform"
    }), "\n", createVNode(_components.p, {
      children: "The new website was designed to feel like an editorial magazine, not a listings database. Property pages lead with cinematic photography, followed by curated architectural details, and finally the practical information."
    }), "\n", createVNode(_components.h3, {
      id: "conversion-flows",
      children: "Conversion Flows"
    }), "\n", createVNode(_components.p, {
      children: "We redesigned the inquiry flow from a generic contact form to a curated conversation — asking buyers about their vision before asking for their number. This qualification step improved lead quality dramatically."
    }), "\n", createVNode(_components.h2, {
      id: "the-outcome",
      children: "The Outcome"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "310% increase in qualified leads (₹5Cr+ segment)"
      }), "\n", createVNode(_components.li, {
        children: "Average time on site increased from 1:20 to 4:45"
      }), "\n", createVNode(_components.li, {
        children: "3 major developers signed exclusive listing agreements within 6 months of launch"
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

const url = "src/content/work/urbane-property.mdx";
const file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/urbane-property.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/urbane-property.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
