import type { MetadataRoute } from 'next'
import { getAllPosts, getAllSeries, getAllPapers } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://markbasford.dev'

  const posts = await getAllPosts()
  const series = await getAllSeries()
  const papers = await getAllPapers()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/papers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/links`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const safeDate = (value: unknown): Date => {
    if (value instanceof Date && !isNaN(value.getTime())) return value
    if (typeof value === 'string' || typeof value === 'number') {
      const d = new Date(value)
      if (!isNaN(d.getTime())) return d
    }
    return new Date()
  }

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: safeDate(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const seriesPages: MetadataRoute.Sitemap = series.map(s => ({
    url: `${baseUrl}/series/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const paperPages: MetadataRoute.Sitemap = papers.map(paper => ({
    url: `${baseUrl}/papers/${paper.slug}`,
    lastModified: safeDate(paper.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages, ...seriesPages, ...paperPages]
}
