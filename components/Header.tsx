'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@tribepad/themis/elements/Button'
import { cn } from '@tribepad/themis/utils'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/papers', label: 'Papers' },
  { href: '/links', label: 'Links' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: 'var(--content-background)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold"
          style={{ color: 'var(--content-foreground)' }}
        >
          Mark Basford
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link rounded-md px-3 py-2 text-sm font-medium',
                pathname.startsWith(link.href) && 'font-semibold'
              )}
              style={{
                color: pathname.startsWith(link.href)
                  ? 'var(--text-link)'
                  : 'var(--content-foreground)',
              }}
              aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            visualSize="icon"
            onPress={() => setMobileOpen(prev => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={mobileOpen ? 'false' : 'true'}
        className={cn(
          'mobile-nav-transition overflow-hidden border-t md:hidden',
          mobileOpen ? 'mobile-nav-open' : 'mobile-nav-closed'
        )}
        style={{ borderColor: mobileOpen ? 'var(--border)' : 'transparent' }}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-hover block rounded-md px-3 py-2 text-sm font-medium"
                style={{
                  color: pathname.startsWith(link.href)
                    ? 'var(--text-link)'
                    : 'var(--content-foreground)',
                }}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
