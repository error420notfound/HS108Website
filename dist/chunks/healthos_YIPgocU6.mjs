import { o as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B3U45OOC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DuZmoy6O.mjs';
import 'clsx';

const frontmatter = {
  "title": "HealthOS — Healthcare SaaS Design System",
  "client": "HealthOS",
  "year": 2023,
  "categories": ["design-system", "product", "web"],
  "tags": ["Design System", "Healthcare", "SaaS", "Figma", "React", "Accessibility"],
  "coverImage": "/work/healthos-cover.jpg",
  "coverAlt": "HealthOS design system documentation and component library",
  "color": "#00C47D",
  "outcome": {
    "label": "Dev Velocity",
    "value": "3× faster"
  },
  "summary": "A comprehensive design system for a healthcare SaaS platform — 340+ components, full accessibility compliance, and adoption by a 12-person engineering team in 6 weeks.",
  "services": ["Design System", "Product Design", "UX Research"],
  "duration": "6 months",
  "pullQuote": "847 unique elements reduced to 67 core components. That's the work before the work.",
  "stats": [{
    "label": "Dev Velocity",
    "value": "3× faster"
  }, {
    "label": "Components Built",
    "value": "340+"
  }, {
    "label": "Accessibility",
    "value": "WCAG AA"
  }],
  "images": [{
    "src": "/work/healthos-01.jpg",
    "caption": "Token architecture — color, spacing, and motion mapped to CSS custom properties"
  }, {
    "src": "/work/healthos-02.jpg",
    "caption": "Component library documentation — 340 components across 12 categories"
  }],
  "featured": true,
  "order": 3,
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
    "slug": "audit-and-inventory",
    "text": "Audit and Inventory"
  }, {
    "depth": 3,
    "slug": "design-tokens",
    "text": "Design Tokens"
  }, {
    "depth": 3,
    "slug": "component-library",
    "text": "Component Library"
  }, {
    "depth": 3,
    "slug": "documentation",
    "text": "Documentation"
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
      children: "HealthOS’s product team had grown from 2 to 12 engineers in 18 months. What once was consistent had become fragmented — 4 different button styles, 3 modal patterns, inconsistent spacing, and zero accessibility compliance. Healthcare software has zero margin for UX confusion."
    }), "\n", createVNode(_components.h2, {
      id: "our-approach",
      children: "Our Approach"
    }), "\n", createVNode(_components.p, {
      children: "We embedded with the team for two weeks before writing a single line of design. Understanding their component architecture, their React setup, and their git workflow was as important as the design itself."
    }), "\n", createVNode(_components.h3, {
      id: "audit-and-inventory",
      children: "Audit and Inventory"
    }), "\n", createVNode(_components.p, {
      children: "We catalogued every UI pattern across the product — 847 unique elements reduced to 67 core components. This gave us the foundation for the system."
    }), "\n", createVNode(_components.h3, {
      id: "design-tokens",
      children: "Design Tokens"
    }), "\n", createVNode(_components.p, {
      children: "We built a token architecture covering color, typography, spacing, elevation, and motion. Tokens were implemented in Figma and mapped directly to CSS custom properties in the codebase."
    }), "\n", createVNode(_components.h3, {
      id: "component-library",
      children: "Component Library"
    }), "\n", createVNode(_components.p, {
      children: "340 components across 12 categories, each with multiple states, sizes, and variants. Every component includes usage guidelines, accessibility notes, and “what not to do” examples."
    }), "\n", createVNode(_components.h3, {
      id: "documentation",
      children: "Documentation"
    }), "\n", createVNode(_components.p, {
      children: "A Storybook-powered documentation site that engineers and designers use as a shared reference."
    }), "\n", createVNode(_components.h2, {
      id: "the-outcome",
      children: "The Outcome"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "3× faster feature development within 3 months of adoption"
      }), "\n", createVNode(_components.li, {
        children: "100% WCAG 2.1 AA compliance achieved"
      }), "\n", createVNode(_components.li, {
        children: "Engineering team autonomy — designers spend 40% less time in review cycles"
      }), "\n", createVNode(_components.li, {
        children: "Used as reference for 2 new product verticals launched post-engagement"
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

const url = "src/content/work/healthos.mdx";
const file = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/healthos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/hs108/Downloads/VS Code/website2/HS108Website/src/content/work/healthos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
