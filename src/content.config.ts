import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Frontmatter carried over unchanged from the Gatsby site.
// `cover` stays a plain string (paths are inconsistent across old posts:
// ./cover.jpg vs ./images/cover.png) — body images are optimised by Astro
// automatically; card/social covers are a follow-up.
const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/posts' }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date(),
      published: z.boolean().default(true),
      unlisted: z.boolean().default(false),
      language: z.string().default('en'),
      cover: z.string().optional(),
      imageShare: z.string().optional(),
      tags: z.array(z.string()).default([]),
      translations: z
        .array(z.object({ link: z.string(), language: z.string() }))
        .optional(),
    })
    .passthrough(),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      cover: z.string().optional(),
    })
    .passthrough(),
})

export const collections = { posts, pages }
