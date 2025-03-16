import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('photosetsGetList', async ({ page }) => {
  const queryResult = await page.getByTestId('plausible-item')

  await expect(queryResult).toContainText('results')
  await expect(queryResult).toContainText('metrics')
  await expect(queryResult).toContainText('dimensions')
  await expect(queryResult).toContainText('744')
  await expect(queryResult).toContainText('meta')
  await expect(queryResult).not.toContainText('query')
})
