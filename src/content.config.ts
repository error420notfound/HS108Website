import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
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
