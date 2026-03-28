import { describe, it, expect } from 'vitest'
import { renderMarkdown } from '@/lib/markdown'

describe('markdown', () => {
  describe('renderMarkdown', () => {
    it('renders basic markdown to HTML', async () => {
      const { html } = await renderMarkdown('# Hello World\n\nA paragraph.')
      expect(html).toContain('<h1')
      expect(html).toContain('Hello World')
      expect(html).toContain('<p>A paragraph.</p>')
    })

    it('extracts headings for TOC', async () => {
      const content = `
## First Section

Some content.

### Subsection

More content.

## Second Section

Final content.
`
      const { headings } = await renderMarkdown(content)
      expect(headings).toHaveLength(3)
      expect(headings[0]).toEqual({ id: 'first-section', text: 'First Section', level: 2 })
      expect(headings[1]).toEqual({ id: 'subsection', text: 'Subsection', level: 3 })
      expect(headings[2]).toEqual({ id: 'second-section', text: 'Second Section', level: 2 })
    })

    it('adds IDs to headings via rehype-slug', async () => {
      const { html } = await renderMarkdown('## My Heading')
      expect(html).toContain('id="my-heading"')
    })

    it('renders GFM tables', async () => {
      const content = `
| Name | Value |
|------|-------|
| A    | 1     |
| B    | 2     |
`
      const { html } = await renderMarkdown(content)
      expect(html).toContain('<table>')
      expect(html).toContain('<th')
      expect(html).toContain('<td')
    })

    it('renders inline code', async () => {
      const { html } = await renderMarkdown('Use `const x = 1` here.')
      expect(html).toContain('<code>')
      expect(html).toContain('const x = 1')
    })

    it('renders fenced code blocks', async () => {
      const content = '```typescript\nconst x: number = 1\n```'
      const { html } = await renderMarkdown(content)
      // Should contain shiki output
      expect(html).toContain('shiki')
    })

    it('renders blockquotes', async () => {
      const { html } = await renderMarkdown('> A quote.')
      expect(html).toContain('<blockquote>')
    })

    it('renders lists', async () => {
      const content = `
- Item 1
- Item 2
- Item 3
`
      const { html } = await renderMarkdown(content)
      expect(html).toContain('<ul>')
      expect(html).toContain('<li>')
    })

    it('renders links', async () => {
      const { html } = await renderMarkdown('[Example](https://example.com)')
      expect(html).toContain('href="https://example.com"')
      expect(html).toContain('Example')
    })

    it('handles empty content', async () => {
      const { html, headings } = await renderMarkdown('')
      expect(html).toBe('')
      expect(headings).toHaveLength(0)
    })
  })
})
