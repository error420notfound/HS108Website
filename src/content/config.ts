import { defineCollection, z } from 'astro:content';

const relatedItem = z.object({
  label: z.string(),
  title: z.string(),
  href: z.string(),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number().int().min(2018).max(2030),
    categories: z.array(z.enum(['brand', 'product', 'design-system', 'mobile', 'web', 'strategy', 'motion'])),
    tags: z.array(z.string()),
    coverImage: z.string(),
    coverAlt: z.string(),
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    summary: z.string().max(360),
    services: z.array(z.string()),
    duration: z.string().optional(),
    businessChallenge: z.string().optional(),
    diagnosis: z.string().optional(),
    constraints: z.array(z.string()).optional(),
    strategicOpportunity: z.string().optional(),
    intervention: z.string().optional(),
    outcome: z.object({
      label: z.string(),
      value: z.string(),
    }),
    transferableInsight: z.string().optional(),
    relatedFrameworks: z.array(relatedItem).optional(),
    relatedThinking: z.array(relatedItem).optional(),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).optional(),
    pullQuote: z.string().optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).max(3).optional(),
    modelViewer: z.any().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    draft: z.boolean().default(false),
  }),
});

const thinking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    question: z.string(),
    summary: z.string(),
    category: z.enum(['Field Note', 'Essay', 'Observation', 'Analysis']).default('Field Note'),
    readingTime: z.string(),
    order: z.number().int().default(99),
    featured: z.boolean().default(false),
    relatedFrameworks: z.array(relatedItem).optional(),
    relatedWork: z.array(relatedItem).optional(),
  }),
});

const frameworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    inputs: z.array(z.string()),
    process: z.array(z.string()),
    output: z.string(),
    example: z.string(),
    helps: z.string(),
    applies: z.string(),
    order: z.number().int().default(99),
    relatedThinking: z.array(relatedItem).optional(),
    relatedWork: z.array(relatedItem).optional(),
  }),
});

export const collections = { work, thinking, frameworks };
