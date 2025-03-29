import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    brief: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean(),
    img: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { posts };
