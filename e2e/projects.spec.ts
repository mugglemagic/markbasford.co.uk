import { test, expect } from '@playwright/test'

test.describe('Projects', () => {
  test('projects index lists projects', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible()
    await expect(page.getByRole('link', { name: /Stargate Loader/ })).toBeVisible()
  })

  test('index links through to the project page', async ({ page }) => {
    await page.goto('/projects')
    await page.getByRole('link', { name: /Stargate Loader/ }).click()
    await expect(page).toHaveURL('/projects/stargate-loader')
    await expect(page.getByRole('heading', { level: 1, name: 'Stargate Loader' })).toBeVisible()
  })

  test('project page has breadcrumbs', async ({ page }) => {
    await page.goto('/projects/stargate-loader')
    const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(breadcrumb).toBeVisible()
    await expect(breadcrumb.getByRole('link', { name: 'Projects' })).toBeVisible()
  })

  test('project page links to the source and flags the missing npm package', async ({ page }) => {
    await page.goto('/projects/stargate-loader')
    const github = page.getByRole('link', { name: /View on GitHub/ })
    await expect(github).toHaveAttribute('href', 'https://github.com/mugglemagic/stargate-loader')
    await expect(github).toHaveAttribute('rel', /noopener/)
    await expect(page.getByText('not published to npm yet')).toBeVisible()
  })

  test('the demo loads and the gate dials in manual mode', async ({ page }) => {
    await page.goto('/projects/stargate-loader')

    const gates = page.locator('gate-loader')
    await expect(gates).toHaveCount(2)

    const manualGate = gates.nth(1)
    await expect(manualGate).toHaveAttribute('mode', 'manual')
    // Shadow DOM rendered — the status line is the component's own live region.
    await expect(manualGate.locator('.status')).toContainText('standby')

    await page.getByRole('button', { name: 'Engage next chevron' }).click()
    await expect(manualGate.locator('.status')).toContainText('chevron one', {
      timeout: 15_000,
    })
    await expect(page.getByRole('list', { name: 'Events' })).toContainText('chevron 1')

    await page.getByRole('button', { name: 'Reset' }).click()
    await expect(manualGate.locator('.status')).toContainText('standby')
  })

  test('the looping gate can be shut down', async ({ page }) => {
    await page.goto('/projects/stargate-loader')
    await expect(page.locator('gate-loader')).toHaveCount(2)

    await page.getByRole('button', { name: 'Shut down the gate' }).click()
    await expect(page.getByText('The gate is shut down.')).toBeVisible()
    await expect(page.locator('gate-loader')).toHaveCount(1)

    await page.getByRole('button', { name: 'Start dialling' }).click()
    await expect(page.locator('gate-loader')).toHaveCount(2)
  })
})
