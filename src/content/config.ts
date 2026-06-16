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
    modelViewer: z.object({
      src: z.string(),
      iosSrc: z.string().optional(),
      alt: z.string().optional(),
      caption: z.string().optional(),
      // rendering
      shadowIntensity: z.number().min(0).max(2).optional(),
      autoRotate: z.boolean().optional(),
      cameraControls: z.boolean().optional(),
      enableZoom: z.boolean().optional(),
      enableAR: z.boolean().optional(),
      arButtonText: z.string().optional(),
      interpolationDecay: z.number().optional(),
      environmentImage: z.string().optional(),
      // ACES filmic
      acesFilmic: z.boolean().optional(),
      bloom: z.boolean().optional(),
      // scroll animation
      scrollAnimation: z.boolean().optional(),
      startTheta: z.number().optional(),
      endTheta: z.number().optional(),
      startPhi: z.number().optional(),
      endPhi: z.number().optional(),
      startRadius: z.number().optional(),
      endRadius: z.number().optional(),
      // iOS Quick Look banner
      iosCheckoutTitle: z.string().optional(),
      iosCheckoutSubtitle: z.string().optional(),
      iosPrice: z.string().optional(),
      iosCallToAction: z.string().optional(),
      iosCanonicalUrl: z.string().optional(),
      // iOS Custom HTML banner
      iosCustomBannerUrl: z.string().optional(),
      iosCustomBannerHeight: z.enum(['small', 'medium', 'large']).optional(),
      iosAllowsContentScaling: z.boolean().optional(),
      // Android Scene Viewer
      arTitle: z.string().optional(),
      arLink: z.string().optional(),
    }).optional(),
    featured:  z.boolean().default(false),
    order:     z.number().int().default(99),
    draft:     z.boolean().default(false),
  }),
});

export const collections = { work };
