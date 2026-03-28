import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SkipLink } from '@/components/SkipLink'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getThemeFromCookie } from '@/lib/theme'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.css'

const SITE_URL = 'https://markbasford.dev'

export const metadata: Metadata = {
  title: {
    default: 'Mark Basford',
    template: '%s | Mark Basford',
  },
  description:
    'Principal Software Engineer at Tribepad. The web should work for everyone — accessibility, performance, and architecture are foundations, not features.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Mark Basford',
    description:
      'Principal Software Engineer at Tribepad. The web should work for everyone.',
    url: SITE_URL,
    siteName: 'Mark Basford',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@markbasford',
    title: 'Mark Basford',
    description:
      'Principal Software Engineer at Tribepad. The web should work for everyone.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': `${SITE_URL}/feed.xml`,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Mark Basford',
      url: SITE_URL,
      description:
        'Principal Software Engineer at Tribepad. The web should work for everyone.',
    },
    {
      '@type': 'Person',
      name: 'Mark Basford',
      url: SITE_URL,
      jobTitle: 'Principal Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Tribepad',
      },
      sameAs: [
        'https://github.com/mugglemagic',
        'https://www.linkedin.com/in/mark-basford-78a43390',
        'https://x.com/markbasford',
        'https://medium.com/@mugglemagic',
      ],
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const serverTheme = getThemeFromCookie(cookieStore.toString())
  const colorScheme = serverTheme === 'dark' || serverTheme === 'highContrast' ? 'dark' : 'light'

  return (
    <html
      lang="en"
      data-theme={serverTheme}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={{ colorScheme }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <SkipLink />
        <ThemeProvider serverTheme={serverTheme}>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
