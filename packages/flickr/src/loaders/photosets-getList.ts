import type { Loader } from 'astro/loaders'
import type { FlickrPhotosetsGetListLoaderOptions } from '../types/loader'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PhotosetsGetList } from '../schema.js'
import { missingApiKey } from '../utils/errors.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
import { createFlickr } from '../utils/ky.js'
import { normalize } from '../utils/normalize.js'
import { paginate } from '../utils/paginate.js'

/**
 * Returns the photosets belonging to the specified user.
 */
export function flickrPhotosetsGetListLoader({
  api_key = import.meta.env.FLICKR_API_KEY,
  username,
  queryParams,
}: FlickrPhotosetsGetListLoaderOptions): Loader {
  if (!api_key) {
    missingApiKey()
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-photosets-get-list',
    load: async ({ logger, parseData, store, generateDigest }) => {
      logger.info('Fetching photosets list')
      let user_id: string

      try {
        user_id = await getUserIdFromUsername(username, flickr)
      }
      catch (e) {
        logger.error('Failed to get user ID from username. Original error:')
        throw e
      }

      function getPhotosetsList(page: number) {
        return flickr('flickr.photosets.getList', {
          user_id,
          per_page: DEFAULT_OPTIONS.per_page,
          page: page.toString(),
          ...queryParams,
        })
      }

      const result = await paginate(getPhotosetsList)
      const flattenedResult = result.flatMap(r => r.photosets.photoset)

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

      logger.info(`Loaded ${flattenedResult.length} photosets`)
    },
    schema: PhotosetsGetList,
  }
}
