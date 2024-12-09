import { describe, expect, it } from 'vitest'
import { normalizePhoto } from '../normalize'

import peopleGetPhotosFixture from './fixtures/people-getPhotos.json'

describe('normalizePhoto', () => {
  it('should normalize people-getPhotos response', () => {
    const normalized = normalizePhoto(peopleGetPhotosFixture)

    expect(normalized).toMatchSnapshot()
  })
})
