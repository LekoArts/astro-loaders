import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { normalizePhoto } from '../normalize'

import peopleGetPhotosFixture from './fixtures/people-getPhotos.json'

describe('normalizePhoto', () => {
  let originalTZ: string | undefined

  beforeAll(() => {
    originalTZ = process.env.TZ
    process.env.TZ = 'UTC'
  })

  afterAll(() => {
    process.env.TZ = originalTZ
  })

  it('should normalize people-getPhotos response', () => {
    const normalized = normalizePhoto(peopleGetPhotosFixture)

    expect(normalized).toMatchSnapshot()
  })
})
