import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number().int().optional(),
    categories: z.array(z.enum(['brand', 'product', 'design-system', 'mobile', 'web', 'strategy', 'motion'])),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    summary: z.string(),
    contribution: z.string(),
    challenge: z.string(),
    verification: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
