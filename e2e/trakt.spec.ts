import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('trakt', async ({ page }) => {
  const queryResult = await page.getByTestId('trakt-item')

  await expect(queryResult).toContainText('movies')
  await expect(queryResult).toContainText('shows')
  await expect(queryResult).toContainText('episodes')
  await expect(queryResult).toContainText('ratings')
})
