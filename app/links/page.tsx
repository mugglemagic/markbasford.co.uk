import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Links to Mark Basford\'s profiles, projects, and writing.',
  alternates: { canonical: '/links' },
}

interface LinkItem {
  title: string
  description: string
  href: string
  category: string
  icon?: ReactNode
}

const links: LinkItem[] = [
  {
    title: 'GitHub',
    description: 'Open source projects and contributions',
    href: 'https://github.com/mugglemagic',
    category: 'Social',
    icon: <GitHubIcon size={20} />,
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile and network',
    href: 'https://www.linkedin.com/in/mark-basford-78a43390',
    category: 'Social',
    icon: <LinkedInIcon size={20} />,
  },
  {
    title: 'X (Twitter)',
    description: 'Thoughts on frontend and accessibility',
    href: 'https://x.com/markbasford',
    category: 'Social',
  },
  {
    title: 'Medium',
    description: 'Long-form writing and technical articles',
    href: 'https://medium.com/@mugglemagic',
    category: 'Social',
    icon: <Image src="/icons/medium.jpg" alt="" aria-hidden="true" width={20} height={20} className="rounded-full" />,
  },
  {
    title: 'DEV Community',
    description: 'Articles and discussions on dev.to',
    href: 'https://dev.to/mugglemagic',
    category: 'Social',
    icon: <Image src="/icons/devto.webp" alt="" aria-hidden="true" width={20} height={20} className="rounded" />,
  },
  {
    title: 'Themis',
    description: 'WCAG 2.2 AAA component library built on React Aria',
    href: 'https://github.com/Tribepad/themis',
    category: 'Projects',
  },
  {
    title: 'Blog',
    description: 'Architecting for Everything — the Eos frontend series',
    href: '/blog',
    category: 'Writing',
  },
  {
    title: 'White Papers',
    description: 'In-depth technical papers on component architecture',
    href: '/papers',
    category: 'Writing',
  },
  {
    title: 'RSS Feed',
    description: 'Subscribe to new posts via your feed reader',
    href: '/feed.xml',
    category: 'Writing',
  },
]

export default function LinksPage() {
  const categories = [...new Set(links.map(l => l.category))]

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1
        className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: 'var(--content-foreground)' }}
      >
        Links
      </h1>

      {categories.map(category => (
        <section key={category} aria-labelledby={`category-${category}`} className="mb-10">
          <h2
            id={`category-${category}`}
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {category}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {links
              .filter(l => l.category === category)
              .map(link => {
                const isExternal = link.href.startsWith('http')
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="card-hover rounded-lg border p-4"
                    style={{
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--content-background)',
                    }}
                  >
                    <h3
                      className="mb-1 flex items-center gap-2 text-sm font-semibold"
                      style={{ color: 'var(--content-foreground)' }}
                    >
                      {link.icon}
                      {link.title}
                      {isExternal && (
                        <span className="ml-1" aria-label="(opens in new tab)">
                          &#8599;
                        </span>
                      )}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {link.description}
                    </p>
                  </a>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}
