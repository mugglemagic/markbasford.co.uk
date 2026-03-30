import { getAllPosts } from '@/lib/content'

const SITE_URL = 'https://markbasford.dev'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = await getAllPosts()

  const items = posts
    .map(
      post => `
    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.frontmatter.series ? `${post.frontmatter.series} — Part ${post.frontmatter.part}. ${post.frontmatter.estimated_reading_time} read.` : `${post.frontmatter.estimated_reading_time} read.`)}</description>
      ${post.frontmatter.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mark Basford</title>
    <link>${SITE_URL}</link>
    <description>Writing about frontend architecture, accessibility, and building at scale.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
