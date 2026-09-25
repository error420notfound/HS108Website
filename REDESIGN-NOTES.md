# HS108 redesign: audit and content review

## Diagnosis

- **Current positioning:** The live site leads with “Design Built to Scale” and four named services. The relationship among brand, physical product, digital experience, and governance is hard to see.
- **First viewport:** The studio category and two actions appear, but the headline does not state the business problem or the value of connected disciplines. The visual space does not demonstrate the work.
- **Audience and goal:** Founders, product leaders, and business owners evaluating a substantial design engagement need to understand relevance, inspect credible work, and start a useful conversation. Qualified enquiries are the primary business goal.
- **Information architecture:** Services and programs receive similar navigation weight. Process, About, and Why Us repeat broad claims. A long paid booking funnel interrupts the enquiry path.
- **Strengths:** The HS108 mark, warm surfaces, expressive serif, fine alignment, direct language, and named practice areas provide a useful starting identity.
- **Weaknesses and risks:** Uniform cards, many saturated page themes, repeated slogans, animated text hidden by scripts, tiny metadata, and dense mobile navigation reduce clarity. Remote fonts and unoptimised images affect loading. Missing case-study media paths and static output need deliberate handling.
- **Credibility:** The repository provides no substantiation for growth metrics, client list entries, testimonial, capacity limits, timelines, current availability, or the contact page’s payment and booking claims. Its payment button advances to “confirmed” without a transaction.

## Content provenance

| Status | Material | Treatment |
| --- | --- | --- |
| Supplied in the redesign brief | Independent studio in India; brand, product, digital, visual content, and governance capabilities; senior designers lead the studio | Used as the factual base for the new structure. |
| Proposed copy | “One direction across brand, product, and digital”; founder and team audience line; capability and approach explanations | Draft language for HS108 to approve. No quantified outcome is implied. |
| Requires confirmation | NovaPay, Urbane Property, HealthOS relationships and scopes; original dates, metrics, accessibility claims, quote, availability, program terms, service timelines | Public archive pages state their provisional status. Confirm before using them as proof. |

## Assets

- Preserve the HS108 logo and favicon.
- The existing NovaPay cover shows an unrelated street scene; another “NovaPay” image is a generic colour-swatch workbench. These do not establish project provenance and are withheld from the redesigned site. The Urbane Property and HealthOS image paths have no matching files in `public/work`.
- The hero’s brand, industrial design, and interface artifacts are HTML/CSS/SVG studio concepts, labelled as illustrative rather than client work.
- `design/homepage-direction.png` is the visual direction reference generated for this redesign. It is a mockup, not a published work image; the live UI is implemented in Astro.

## Interaction intent

| Element | Trigger and motion | Reduced motion or no JavaScript |
| --- | --- | --- |
| First viewport | A short, nonblocking opacity and 8 px rise on copy and artifact, under 0.6 s; establishes reading order. | Static content appears immediately. |
| Navigation | Native `details` disclosure opens instantly; JavaScript adds Escape and outside-pointer closing while returning focus on Escape. | The native summary still opens and closes with keyboard or touch. |
| Project visual | A small image scale on hover where real imagery is available; indicates the linked preview. | Link and label remain visible; no transform. |
| Enquiry | Native field validity and inline errors; submit opens a composed email draft and explains that the visitor must send it. | The HTML form falls back to `mailto:` and the direct email address remains visible. |

## Technical notes

Astro, MDX, static output, and GitHub Pages deployment remain in place. The CSS uses semantic tokens in `src/styles/studio.css`. The existing Analytics property is retained. The build now derives a sitemap from the generated routes because the installed sitemap package expects a newer Astro build hook than this repository provides.
