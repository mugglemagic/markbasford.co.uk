import Link from 'next/link'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="mt-auto border-t"
      style={{
        backgroundColor: 'var(--footer-background)',
        borderColor: 'var(--footer-border)',
        color: 'var(--footer-foreground)',
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p
          className="text-sm"
          style={{ color: 'var(--footer-muted)' }}
        >
          &copy; {currentYear} Mark Basford
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/mugglemagic"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover inline-flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--footer-text-link)' }}
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mark-basford-78a43390"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover inline-flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--footer-text-link)' }}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/feed.xml"
                className="link-hover inline-flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--footer-text-link)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="6.18" cy="17.82" r="2.18" />
                  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                </svg>
                RSS
              </a>
            </li>
            <li>
              <Link
                href="/links"
                className="link-hover text-sm"
                style={{ color: 'var(--footer-text-link)' }}
              >
                All Links
              </Link>
            </li>
          </ul>
        </nav>

        <p
          className="text-xs"
          style={{ color: 'var(--footer-muted)' }}
        >
          Built with{' '}
          <a
            href="https://github.com/Tribepad/themis"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--footer-text-link)' }}
          >
            Themis
          </a>
        </p>
      </div>
    </footer>
  )
}
