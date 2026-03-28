import { test, expect } from '@playwright/test'

test.describe('Papers', () => {
  test('papers index lists white papers', async ({ page }) => {
    await page.goto('/papers')
    await expect(page.getByRole('heading', { level: 1, name: 'White Papers' })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /Three-Layer Component Architecture/ })
    ).toBeVisible()
  })

  test('paper page renders full content', async ({ page }) => {
    await page.goto('/papers/three-layer-component-architecture')
    // The page header h1 (not the one inside prose content)
    await expect(
      page.locator('article header h1')
    ).toContainText('Three-Layer Component Architecture')
    await expect(page.locator('article header').getByText('Mark Basford')).toBeVisible()
  })

  test('paper page has breadcrumbs', async ({ page }) => {
    await page.goto('/papers/three-layer-component-architecture')
    const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(breadcrumb).toBeVisible()
    await expect(breadcrumb.getByText('Papers')).toBeVisible()
  })

  test('paper page has table of contents', async ({ page }) => {
    // TOC only visible on large viewports
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/papers/three-layer-component-architecture')
    const toc = page.getByRole('navigation', { name: 'Table of contents' })
    await expect(toc).toBeVisible()
  })
})
