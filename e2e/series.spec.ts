import { test, expect } from '@playwright/test'

test.describe('Series', () => {
  test('series page lists posts in order', async ({ page }) => {
    await page.goto('/series/architecting-for-everything')

    await expect(
      page.getByRole('heading', { level: 1, name: 'Architecting for Everything' })
    ).toBeVisible()
    await expect(page.getByText('7 posts in this series.')).toBeVisible()

    // Posts should be ordered by part number (scoped to main content, not breadcrumb ol)
    const items = page.locator('main > div > ol > li')
    const count = await items.count()
    expect(count).toBe(7)

    // First post should be Part 1
    await expect(items.first()).toContainText('Why We\'re Writing This')
  })

  test('series page has breadcrumbs', async ({ page }) => {
    await page.goto('/series/architecting-for-everything')
    const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(breadcrumb.getByRole('link', { name: 'Blog' })).toBeVisible()
  })

  test('clicking a series post navigates to it', async ({ page }) => {
    await page.goto('/series/architecting-for-everything')
    await page.getByRole('link', { name: /Multizone Gambit/ }).click()
    await expect(page).toHaveURL('/blog/the-multizone-gambit')
  })
})
