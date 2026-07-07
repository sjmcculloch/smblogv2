import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>

/** Published posts, newest first (mirrors the Gatsby allMdx query). */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => data.published)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/** Listable posts: published and not unlisted. */
export async function getListedPosts(): Promise<Post[]> {
  return (await getPublishedPosts()).filter(post => !post.data.unlisted)
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getListedPosts()
  return [...new Set(posts.flatMap(post => post.data.tags))].sort()
}

/** Same 265wpm heuristic Gatsby's timeToRead used. */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 265))
}

/** Plain-text excerpt from a markdown body (for post cards + meta description). */
export function excerpt(body: string, length = 160): string {
  const text = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > length ? `${text.slice(0, length).trimEnd()}…` : text
}
