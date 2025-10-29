import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('peopleGetPhotos', async ({ page }) => {
  const images = await page.getByTestId('flickr-peopleGetPhotos-wrapper').getByRole('img')

  await expect(images).toHaveCount(5)

  for (const image of await images.all()) {
    await expect(image).toBeVisible()
  }
})

test('photosetsGetList', async ({ page }) => {
  const photosets = await page.getByTestId('flickr-photosetsGetList-item')

  await expect(photosets).toHaveCount(2)

  // Items have the text pattern "Name (<number>)"
  for (const photoset of await photosets.all()) {
    await expect(photoset).toHaveText(/(.+) \(\d+\)/)
  }
})

test('photosetsGetPhotos', async ({ page }) => {
  const images = await page.getByTestId('flickr-photosetsGetPhotos-wrapper').getByRole('img')
  const text = await page.getByTestId('flickr-photosetsGetPhotos-text')

  await expect(text).toHaveText('Title: 3D - Total images: 3')

  await expect(images).toHaveCount(3)

  for (const image of await images.all()) {
    await expect(image).toBeVisible()
  }
})

test('photosetsGetListWithPhotos', async ({ page }) => {
  const titleZero = await page.getByTestId('flickr-photosetsGetListWithPhotos-text-0')
  const titleOne = await page.getByTestId('flickr-photosetsGetListWithPhotos-text-1')

  await expect(titleZero).toHaveText('Title: 3D - Total images: 3')
  await expect(titleOne).toHaveText('Title: Winter - Total images: 2')

  const imagesZero = await page.getByTestId('flickr-photosetsGetListWithPhotos-wrapper-0').getByRole('img')
  const imagesOne = await page.getByTestId('flickr-photosetsGetListWithPhotos-wrapper-1').getByRole('img')

  await expect(imagesZero).toHaveCount(3)
  await expect(imagesOne).toHaveCount(2)

  for (const image of await imagesZero.all()) {
    await expect(image).toBeVisible()
  }

  for (const image of await imagesOne.all()) {
    await expect(image).toBeVisible()
  }
})
