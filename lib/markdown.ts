import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import { codeToHtml } from 'shiki'
import type { Root, Element } from 'hast'
import { visit } from 'unist-util-visit'

export interface Heading {
  id: string
  text: string
  level: number
}

function extractText(node: Element): string {
  let text = ''
  for (const child of node.children) {
    if (child.type === 'text') {
      text += child.value
    } else if (child.type === 'element') {
      text += extractText(child)
    }
  }
  return text
}

function rehypeExtractHeadings(headings: Heading[]) {
  return () => (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (['h2', 'h3', 'h4'].includes(node.tagName)) {
        const id = (node.properties?.id as string) ?? ''
        const text = extractText(node)
        const level = parseInt(node.tagName.charAt(1), 10)
        headings.push({ id, text, level })
      }
    })
  }
}

function rehypeShikiHighlight() {
  return async (tree: Root) => {
    const codeNodes: { node: Element; parent: Element; lang: string; code: string }[] = []

    visit(tree, 'element', (node: Element, _index, parent) => {
      if (
        node.tagName === 'code' &&
        parent &&
        (parent as Element).tagName === 'pre'
      ) {
        const className = (node.properties?.className as string[]) ?? []
        const langClass = className.find(c => c.startsWith('language-'))
        const lang = langClass ? langClass.replace('language-', '') : 'text'
        const code = extractText(node)

        codeNodes.push({ node, parent: parent as Element, lang, code })
      }
    })

    for (const { parent, lang, code } of codeNodes) {
      const html = await codeToHtml(code, {
        lang,
        themes: {
          light: 'github-light-high-contrast',
          dark: 'github-dark-high-contrast',
        },
        defaultColor: false,
      })

      // Replace the pre element's children with the highlighted HTML
      parent.tagName = 'div'
      parent.properties = {
        ...parent.properties,
        className: ['code-block'],
        'data-language': lang,
        tabIndex: 0,
        role: 'region',
        'aria-label': `Code example in ${lang}`,
      }
      parent.children = [
        {
          type: 'raw',
          value: html,
        } as unknown as Element,
      ]
    }
  }
}

export async function renderMarkdown(
  content: string
): Promise<{ html: string; headings: Heading[] }> {
  const headings: Heading[] = []

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeExtractHeadings(headings))
    .use(rehypeShikiHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content)

  return {
    html: String(result),
    headings,
  }
}
