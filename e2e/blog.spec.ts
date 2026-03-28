import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test('blog index lists all posts', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible()

    const articles = page.getByRole('article')
    const count = await articles.count()
    expect(count).toBeGreaterThanOrEqual(8)
  })

  test('blog index shows series cards', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByRole('heading', { name: 'Series' })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /Architecting for Everything/ })
    ).toBeVisible()
  })

  test('blog post renders with full content', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')

    // Header elements
    await expect(page.getByRole('heading', { level: 1, name: 'The 44px Illusion' })).toBeVisible()
    await expect(page.locator('article').getByText('Mark Basford')).toBeVisible()
    await expect(page.getByText('5 February 2025')).toBeVisible()
    await expect(page.locator('article header').getByText('10 min')).toBeVisible()
  })

  test('blog post has breadcrumb navigation', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(breadcrumb).toBeVisible()
    await expect(breadcrumb.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(breadcrumb.getByRole('link', { name: 'Blog' })).toBeVisible()
  })

  test('blog post has series badge linking to series page', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    const badge = page.getByRole('link', { name: /Architecting for Everything — Part 4/ })
    await expect(badge).toBeVisible()
    await badge.click()
    await expect(page).toHaveURL('/series/architecting-for-everything')
  })

  test('blog post has tags', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    await expect(page.getByRole('link', { name: 'accessibility' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'wcag', exact: true })).toBeVisible()
  })

  test('blog post has series navigation', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    const seriesNav = page.getByRole('navigation', { name: 'Series navigation' })
    await expect(seriesNav).toBeVisible()
    await expect(seriesNav.getByText(/Previous/)).toBeVisible()
    await expect(seriesNav.getByText(/Next/)).toBeVisible()
  })

  test('blog post renders code blocks', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    const codeBlocks = page.locator('.code-block')
    const count = await codeBlocks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('code blocks contain syntax-highlighted content', async ({ page }) => {
    await page.goto('/blog/the-44px-illusion')
    const shikiBlock = page.locator('.shiki').first()
    await expect(shikiBlock).toBeVisible()
  })
})
