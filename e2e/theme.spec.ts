import { test, expect } from '@playwright/test'

test.describe('Theme switching', () => {
  test('defaults to light theme', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    await expect(html).toHaveAttribute('data-theme', 'light')
  })

  test('cycles through themes on button click', async ({ page }) => {
    await page.goto('/')
    const themeButton = page.getByRole('button', { name: /Current theme/ })
    const html = page.locator('html')

    // Light → Dark
    await themeButton.click()
    await expect(html).toHaveAttribute('data-theme', 'dark')

    // Dark → High Contrast
    await themeButton.click()
    await expect(html).toHaveAttribute('data-theme', 'highContrast')

    // High Contrast → Light
    await themeButton.click()
    await expect(html).toHaveAttribute('data-theme', 'light')
  })

  test('persists theme across page navigation', async ({ page }) => {
    await page.goto('/')

    // Switch to dark
    await page.getByRole('button', { name: /Current theme/ }).click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

    // Navigate to about
    await page.goto('/about')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })

  test('dark theme applies dark background', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /Current theme/ }).click()

    const body = page.locator('body')
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor)
    // Dark theme page-background: #0A0A0A = rgb(10, 10, 10)
    expect(bgColor).toBe('rgb(10, 10, 10)')
  })

  test('high contrast theme applies black background', async ({ page }) => {
    await page.goto('/')
    const themeButton = page.getByRole('button', { name: /Current theme/ })

    // Light → Dark → High Contrast
    await themeButton.click()
    await themeButton.click()

    const body = page.locator('body')
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor)
    // High contrast page-background: #000000
    expect(bgColor).toBe('rgb(0, 0, 0)')
  })
})
