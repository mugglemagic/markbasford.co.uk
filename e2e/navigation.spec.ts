import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('header contains all nav links', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Main navigation' })
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Blog' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Papers' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Links' })).toBeVisible()
  })

  test('logo links to home', async ({ page }) => {
    await page.goto('/about')
    await page.getByRole('link', { name: 'Mark Basford' }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('skip link targets main content', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.getByRole('link', { name: 'Skip to main content' })
    await expect(skipLink).toBeAttached()
    const main = page.locator('#main-content')
    await expect(main).toBeAttached()
  })

  test('active page is indicated in nav', async ({ page }) => {
    await page.goto('/blog')
    const blogLink = page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Blog' })
    await expect(blogLink).toHaveAttribute('aria-current', 'page')
  })

  test('footer renders with links', async ({ page }) => {
    await page.goto('/')
    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()
    await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Themis' })).toBeVisible()
  })

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    const mobileNav = page.locator('#mobile-nav')

    // Nav should be hidden initially
    await expect(mobileNav).toHaveAttribute('aria-hidden', 'true')

    // Open menu
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await expect(mobileNav).toHaveAttribute('aria-hidden', 'false')

    // Close menu
    await page.getByRole('button', { name: 'Close navigation menu' }).click()
    await expect(mobileNav).toHaveAttribute('aria-hidden', 'true')
  })
})
