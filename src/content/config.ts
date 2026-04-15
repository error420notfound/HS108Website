import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title:      z.string(),
    client:     z.string(),
    year:       z.number().int().min(2018).max(2030),
    categories: z.array(
      z.enum(['brand', 'product', 'design-system', 'mobile', 'web', 'strategy', 'motion'])
    ),
    tags:       z.array(z.string()),
    coverImage: z.string(),          // relative path or URL
    coverAlt:   z.string(),
    color:      z.string().regex(/^#[0-9a-fA-F]{6}$/),
    outcome: z.object({
      label: z.string(),
      value: z.string(),
    }),
    summary:   z.string().max(280),
    services:  z.array(z.string()),
    duration:  z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).optional(),
    pullQuote: z.string().optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).max(3).optional(),
    featured:  z.boolean().default(false),
    order:     z.number().int().default(99),
    draft:     z.boolean().default(false),
  }),
});

export const collections = { work };
