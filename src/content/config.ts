import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Mettre 'data' si c'était du JSON/YAML
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    // Ajoutez ici tous les champs de votre frontmatter
  }),
});

export const collections = {
  'blog': blogCollection,
};