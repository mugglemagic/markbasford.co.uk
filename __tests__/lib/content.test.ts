import { describe, it, expect } from 'vitest'
import {
  getAllPosts,
  getPostBySlug,
  getAllSeries,
  getPostsBySeries,
  getPostsByTag,
  getAllTags,
  getAllPapers,
  getPaperBySlug,
  slugifySeries,
  unslugifySeries,
} from '@/lib/content'

describe('content', () => {
  describe('getAllPosts', () => {
    it('returns all blog posts', async () => {
      const posts = await getAllPosts()
      expect(posts.length).toBeGreaterThan(0)
    })

    it('sorts posts by date descending', async () => {
      const posts = await getAllPosts()
      for (let i = 1; i < posts.length; i++) {
        const prevDate = new Date(posts[i - 1]!.frontmatter.date).getTime()
        const currDate = new Date(posts[i]!.frontmatter.date).getTime()
        expect(prevDate).toBeGreaterThanOrEqual(currDate)
      }
    })

    it('parses frontmatter correctly', async () => {
      const posts = await getAllPosts()
      const post = posts.find(p => p.slug === 'why-we-are-writing-this')
      expect(post).toBeDefined()
      expect(post!.frontmatter.title).toBe('Why We\'re Writing This (And Why Now)')
      expect(post!.frontmatter.author).toBe('Mark Basford')
      expect(post!.frontmatter.series).toBe('Architecting for Everything')
      expect(post!.frontmatter.tags).toContain('architecture')
    })

    it('normalises date fields to strings', async () => {
      const posts = await getAllPosts()
      for (const post of posts) {
        expect(typeof post.frontmatter.date).toBe('string')
      }
    })
  })

  describe('getPostBySlug', () => {
    it('returns the correct post', async () => {
      const post = await getPostBySlug('the-multizone-gambit')
      expect(post).not.toBeNull()
      expect(post!.frontmatter.title).toBe('The Multizone Gambit')
    })

    it('returns null for non-existent slug', async () => {
      const post = await getPostBySlug('non-existent-post')
      expect(post).toBeNull()
    })
  })

  describe('getAllSeries', () => {
    it('returns at least one series', async () => {
      const series = await getAllSeries()
      expect(series.length).toBeGreaterThan(0)
    })

    it('includes series name, slug, and post count', async () => {
      const series = await getAllSeries()
      const archSeries = series.find(s => s.name === 'Architecting for Everything')
      expect(archSeries).toBeDefined()
      expect(archSeries!.slug).toBe('architecting-for-everything')
      expect(archSeries!.postCount).toBeGreaterThan(0)
    })
  })

  describe('getPostsBySeries', () => {
    it('returns posts sorted by part number', async () => {
      const posts = await getPostsBySeries('Architecting for Everything')
      expect(posts.length).toBeGreaterThan(1)
      for (let i = 1; i < posts.length; i++) {
        expect(posts[i]!.frontmatter.part).toBeGreaterThan(posts[i - 1]!.frontmatter.part)
      }
    })
  })

  describe('getPostsByTag', () => {
    it('returns posts with the given tag', async () => {
      const posts = await getPostsByTag('architecture')
      expect(posts.length).toBeGreaterThan(0)
      for (const post of posts) {
        expect(post.frontmatter.tags).toContain('architecture')
      }
    })

    it('returns empty array for non-existent tag', async () => {
      const posts = await getPostsByTag('non-existent-tag-xyz')
      expect(posts).toHaveLength(0)
    })
  })

  describe('getAllTags', () => {
    it('returns sorted unique tags', async () => {
      const tags = await getAllTags()
      expect(tags.length).toBeGreaterThan(0)
      for (let i = 1; i < tags.length; i++) {
        expect(tags[i]!.localeCompare(tags[i - 1]!)).toBeGreaterThan(0)
      }
    })
  })

  describe('papers', () => {
    it('returns all papers', async () => {
      const papers = await getAllPapers()
      expect(papers.length).toBeGreaterThan(0)
    })

    it('returns paper by slug', async () => {
      const paper = await getPaperBySlug('three-layer-component-architecture')
      expect(paper).not.toBeNull()
      expect(paper!.frontmatter.title).toBe('The Three-Layer Component Architecture')
      expect(paper!.frontmatter.author).toBe('Mark Basford')
    })

    it('returns null for non-existent paper', async () => {
      const paper = await getPaperBySlug('non-existent-paper')
      expect(paper).toBeNull()
    })
  })

  describe('slugifySeries', () => {
    it('converts series name to slug', () => {
      expect(slugifySeries('Architecting for Everything')).toBe('architecting-for-everything')
      expect(slugifySeries('Developer Experience')).toBe('developer-experience')
    })

    it('handles special characters', () => {
      expect(slugifySeries('A & B: Testing!')).toBe('a-b-testing')
    })
  })

  describe('unslugifySeries', () => {
    it('returns original series name from slug', async () => {
      const posts = await getAllPosts()
      const name = unslugifySeries('architecting-for-everything', posts)
      expect(name).toBe('Architecting for Everything')
    })

    it('returns null for non-existent series slug', async () => {
      const posts = await getAllPosts()
      const name = unslugifySeries('non-existent-series', posts)
      expect(name).toBeNull()
    })
  })
})
