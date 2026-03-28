import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const PAPERS_DIR = path.join(process.cwd(), 'content', 'papers')

export interface PostFrontmatter {
  ref: string
  title: string
  author: string
  date: string
  tags: string[]
  series: string
  part: number
  word_count: number
  estimated_reading_time: string
  research_sources?: string[]
  published?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface PaperFrontmatter {
  title: string
  author: string
  date: string
  tags: string[]
  estimated_reading_time: string
}

export interface Paper {
  slug: string
  frontmatter: PaperFrontmatter
  content: string
}

function normaliseDates(data: Record<string, unknown>): Record<string, unknown> {
  const result = { ...data }
  for (const [key, value] of Object.entries(result)) {
    if (value instanceof Date) {
      result[key] = value.toISOString().split('T')[0]
    }
  }
  return result
}

function readMarkdownFiles<T>(dir: string): { slug: string; frontmatter: T; content: string }[] {
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

  return files.map(filename => {
    const filePath = path.join(dir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const slug = filename.replace(/\.md$/, '')

    return {
      slug,
      frontmatter: normaliseDates(data) as T,
      content,
    }
  })
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = readMarkdownFiles<PostFrontmatter>(BLOG_DIR)
  return posts
    .filter(p => p.frontmatter.published !== false)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = readMarkdownFiles<PostFrontmatter>(BLOG_DIR)
  return posts.find(p => p.slug === slug && p.frontmatter.published !== false) ?? null
}

export async function getAllSeries(): Promise<{ name: string; slug: string; postCount: number }[]> {
  const posts = await getAllPosts()
  const seriesMap = new Map<string, number>()

  for (const post of posts) {
    if (post.frontmatter.series) {
      const count = seriesMap.get(post.frontmatter.series) ?? 0
      seriesMap.set(post.frontmatter.series, count + 1)
    }
  }

  return Array.from(seriesMap.entries()).map(([name, postCount]) => ({
    name,
    slug: slugifySeries(name),
    postCount,
  }))
}

export async function getPostsBySeries(seriesName: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts
    .filter(p => p.frontmatter.series === seriesName)
    .sort((a, b) => a.frontmatter.part - b.frontmatter.part)
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(p => p.frontmatter.tags.includes(tag))
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tagSet = new Set<string>()
  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}

export async function getAllPapers(): Promise<Paper[]> {
  return readMarkdownFiles<PaperFrontmatter>(PAPERS_DIR)
}

export async function getPaperBySlug(slug: string): Promise<Paper | null> {
  const papers = readMarkdownFiles<PaperFrontmatter>(PAPERS_DIR)
  return papers.find(p => p.slug === slug) ?? null
}

export function slugifySeries(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function unslugifySeries(slug: string, posts: Post[]): string | null {
  for (const post of posts) {
    if (post.frontmatter.series && slugifySeries(post.frontmatter.series) === slug) {
      return post.frontmatter.series
    }
  }
  return null
}
