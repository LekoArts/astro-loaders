import type { Loader } from 'astro/loaders'
import type { PhotosetsGetListResponse } from '../types/flickr'
import type { FlickrPhotosetsGetListLoaderOptions } from '../types/loader'
import { AstroError } from 'astro/errors'
import { createFlickr } from 'flickr-sdk'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PhotosetsGetList } from '../schema.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
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
    throw new AstroError('Missing Flickr API key. Define the FLICKR_API_KEY environment variable or pass it as an option.')
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-photosets-get-list',
    load: async ({ logger, parseData, store }) => {
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
          extras: DEFAULT_OPTIONS.extras,
          ...queryParams,
        }) as Promise<PhotosetsGetListResponse>
      }

      const result = await paginate(getPhotosetsList)
      const flattenedResult = result.flatMap(r => r.photosets.photoset)

      for (const result of flattenedResult) {
        if (!result.id) {
          continue
        }

        const normalized = normalize(result)
        const data = await parseData({ id: normalized.id, data: normalized })

        store.set({
          id: normalized.id,
          data,
        })
      }

      logger.info(`Loaded ${flattenedResult.length} photosets`)
    },
    schema: PhotosetsGetList,
  }
}
