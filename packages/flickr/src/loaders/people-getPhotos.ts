import type { Loader } from 'astro/loaders'
import type { GetPhotosResponse } from '../types/flickr'
import type { FlickrPeopleGetPhotosLoaderOptions } from '../types/loader'
import { AstroError } from 'astro/errors'
import { createFlickr } from 'flickr-sdk'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PeopleGetPhotos } from '../schema.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
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
    throw new AstroError('Missing Flickr API key. Define the FLICKR_API_KEY environment variable or pass it as an option.')
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-people-get-photos',
    load: async ({ logger, parseData, store }) => {
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
        }) as Promise<GetPhotosResponse>
      }

      const result = await paginate(getPhotos)
      const flattenedResult = result.flatMap(r => r.photos.photo)

      for (const result of flattenedResult) {
        const normalized = normalize(result)
        const data = await parseData({ id: normalized.id, data: normalized })

        store.set({
          id: normalized.id,
          data,
        })
      }

      logger.info(`Loaded ${flattenedResult.length} photos`)
    },
    schema: PeopleGetPhotos,
  }
}
