import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { normalize } from '../normalize'

import peopleGetPhotosFixture from './fixtures/people-getPhotos.json'
import photosetsGetList from './fixtures/photosets-getList.json'

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
})
