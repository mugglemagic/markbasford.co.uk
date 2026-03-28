import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('every page has at least one h1', async ({ page }) => {
    const pages = ['/', '/about', '/blog', '/papers', '/links', '/blog/the-44px-illusion']

    for (const url of pages) {
      await page.goto(url)
      await page.waitForLoadState('domcontentloaded')
      const h1Count = await page.locator('h1').count()
      expect(h1Count, `${url} should have at least 1 h1`).toBeGreaterThanOrEqual(1)
    }
  })

  test('every page has lang attribute', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('every page has main landmark', async ({ page }) => {
    const pages = ['/', '/about', '/blog', '/links']
    for (const url of pages) {
      await page.goto(url)
      await page.waitForLoadState('domcontentloaded')
      await expect(page.locator('main'), `${url} missing main`).toBeAttached()
    }
  })

  test('every page has banner and contentinfo', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator('header')).toBeAttached()
    await expect(page.locator('footer')).toBeAttached()
  })

  test('all images have alt text', async ({ page }) => {
    const pages = ['/', '/about']
    for (const url of pages) {
      await page.goto(url)
      const images = page.locator('img:not([aria-hidden="true"])')
      const count = await images.count()
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt')
        expect(alt, `Image ${i} on ${url} missing alt`).toBeTruthy()
      }
    }
  })

  test('no heading level is skipped', async ({ page }) => {
    const pages = ['/', '/blog', '/blog/the-44px-illusion']

    for (const url of pages) {
      await page.goto(url)
      const headings = await page.locator('h1,h2,h3,h4,h5,h6').all()
      let prevLevel = 0

      for (const heading of headings) {
        const tagName = await heading.evaluate(el => el.tagName)
        const level = parseInt(tagName.charAt(1))
        if (prevLevel > 0) {
          expect(
            level <= prevLevel + 1,
            `${url}: ${tagName} after H${prevLevel} (skipped level)`
          ).toBe(true)
        }
        prevLevel = level
      }
    }
  })

  test('skip link is focusable via keyboard', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Tab to first interactive element
    await page.keyboard.press('Tab')

    // The skip link should receive focus
    const focused = await page.evaluate(() => document.activeElement?.textContent)
    expect(focused).toBe('Skip to main content')
  })

  test('external links have proper attributes', async ({ page }) => {
    await page.goto('/links')
    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel')
      expect(rel, `External link ${i} missing noopener`).toContain('noopener')
    }
  })
})
