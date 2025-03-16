import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('clerk', async ({ page }) => {
  const userList = await page.getByTestId('clerk-getUserList-item')

  await expect(userList).toHaveCount(6)

  await expect(userList.last()).toHaveText('arsaurea')
})
