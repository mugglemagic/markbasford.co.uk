import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders hero with name and tagline', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Mark Basford' })).toBeVisible()
    await expect(page.getByText('The web should work for everyone.')).toBeVisible()
    await expect(page.getByText('Not most people. Everyone.')).toBeVisible()
  })

  test('renders profile image', async ({ page }) => {
    const img = page.getByRole('img', { name: 'Mark Basford' })
    await expect(img).toBeVisible()
  })

  test('renders CTA buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About Me' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Read the Blog' })).toBeVisible()
  })

  test('renders latest writing section with blog cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Latest Writing' })).toBeVisible()
    const articles = page.getByRole('article')
    await expect(articles).toHaveCount(3)
  })

  test('renders white paper section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'White Paper' })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /Three-Layer Component Architecture/ })
    ).toBeVisible()
  })

  test('CTA links navigate correctly', async ({ page }) => {
    await page.getByRole('link', { name: 'About Me' }).click()
    await expect(page).toHaveURL('/about')

    await page.goto('/')
    await page.getByRole('link', { name: 'Read the Blog' }).click()
    await expect(page).toHaveURL('/blog')
  })
})
