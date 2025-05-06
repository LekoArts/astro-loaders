import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { normalize } from '../normalize.js'

// @ts-expect-error - Does not matter
import peopleGetPhotosFixture from './fixtures/people-getPhotos.json'
// @ts-expect-error - Does not matter
import photosetsGetList from './fixtures/photosets-getList.json'
// @ts-expect-error - Does not matter
import photosetsGetPhotos from './fixtures/photosets-getPhotos.json'

describe('normalize', () => {
  let originalTZ: string | undefined

  beforeAll(() => {
    originalTZ = process.env.TZ
    process.env.TZ = 'UTC'
  })

  afterAll(() => {
    process.env.TZ = originalTZ
  })

  it('should normalize people-getPhotos response', () => {
    const normalized = normalize(peopleGetPhotosFixture)

    expect(normalized).toMatchSnapshot()
  })

  it('should normalize photosets-getList response', () => {
    const normalized = normalize(photosetsGetList.photosets.photoset[0]!)

    expect(normalized).toMatchSnapshot()
  })

  it('should normalize photosets-getPhotos response', () => {
    const normalized = normalize(photosetsGetPhotos.photoset.photo[0]!)

    expect(normalized).toMatchSnapshot()
  })
})
