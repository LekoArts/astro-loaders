import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has <title>', async ({ page }) => {
  await expect(page).toHaveTitle(/Astro Loaders by LekoArts/)
})

test('has <h1>', async ({ page }) => {
  const h1 = await page.locator('h1')
  await expect(h1).toHaveText('Astro Loaders by LekoArts')
})

test('has link to "Star on GitHub"', async ({ page }) => {
  const link = await page.locator('a:has-text("Star on GitHub")')
  await expect(link).toHaveAttribute('href', 'https://github.com/LekoArts/astro-loaders')
})

test('has install links', async ({ page }) => {
  const loaders = [
    ['@lekoarts/flickr-loader', 'flickr'],
  ]

  for (const details of loaders) {
    const link = await page.locator(`a:has-text("Install ${details[0]}")`)
    await expect(link).toHaveAttribute('href', `https://github.com/LekoArts/astro-loaders/tree/main/packages/${details[1]}`)
  }
})
