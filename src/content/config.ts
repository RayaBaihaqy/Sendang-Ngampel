import { defineCollection, z } from 'astro:content';

const legendaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    location: z.string(),
    verifiedDate: z.string(),
    sourceNote: z.string(),
  }),
});

export const collections = {
  legenda: legendaCollection,
};
