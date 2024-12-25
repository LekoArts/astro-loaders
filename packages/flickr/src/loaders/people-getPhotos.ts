import type { Loader } from 'astro/loaders'
import type { FlickrPeopleGetPhotosLoaderOptions } from '../types/loader'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PeopleGetPhotos } from '../schema.js'
import { missingApiKey } from '../utils/errors.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
import { createFlickr } from '../utils/ky.js'
import { normalize } from '../utils/normalize.js'
import { paginate } from '../utils/paginate.js'

/**
 * Return photos from the given user's photostream. Only photos visible to the calling user will be returned.
 */
export function flickrPeopleGetPhotosLoader({
  api_key = import.meta.env.FLICKR_API_KEY,
  username,
  queryParams,
}: FlickrPeopleGetPhotosLoaderOptions): Loader {
  if (!api_key) {
    missingApiKey()
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-people-get-photos',
    load: async ({ logger, parseData, store, generateDigest }) => {
      logger.info('Fetching photostream photos')
      let user_id: string

      try {
        user_id = await getUserIdFromUsername(username, flickr)
      }
      catch (e) {
        logger.error('Failed to get user ID from username. Original error:')
        throw e
      }

      function getPhotos(page: number) {
        return flickr('flickr.people.getPhotos', {
          user_id,
          per_page: DEFAULT_OPTIONS.per_page,
          page: page.toString(),
          extras: DEFAULT_OPTIONS.extras,
          ...queryParams,
        })
      }

      const result = await paginate(getPhotos)
      const flattenedResult = result.flatMap(r => r.photos.photo)

      for (const result of flattenedResult) {
        if (!result.id) {
          continue
        }

        const normalized = normalize(result)
        const data = await parseData({ id: normalized.id, data: normalized })
        const digest = generateDigest(data)

        store.set({
          id: normalized.id,
          data,
          digest,
        })
      }

      logger.info(`Loaded ${flattenedResult.length} photos`)
    },
    schema: PeopleGetPhotos,
  }
}
