import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    showDate: z.boolean().optional(),
    showAuthor: z.boolean().optional(),
    toc: z.boolean().optional(),
  }),
});

const highlights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    showDate: z.boolean().optional(),
    showAuthor: z.boolean().optional(),
    toc: z.boolean().optional(),
  }),
});

export const collections = { posts, highlights };
