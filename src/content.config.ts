import { defineCollection, z } from 'astro:content';

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string(),
    tagline: z.string(),
    summary: z.string(),
    releaseWindow: z.string().optional(),
    heroImage: z.string(),
    gallery: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
      }),
    ),
    highlights: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const site = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    lede: z.string(),
    itchUrl: z.string().url(),
    fpeUrl: z.string().url(),
  }),
});

export const collections = { games, site };
