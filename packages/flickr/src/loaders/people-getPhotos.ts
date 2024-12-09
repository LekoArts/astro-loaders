import type { Loader } from 'astro/loaders'
import type { GetPhotosQueryParams, GetPhotosResponse } from '../types/flickr'
import { AstroError } from 'astro/errors'
import { createFlickr } from 'flickr-sdk'
import { DEFAULT_OPTIONS } from '../constants.js'
import { NormalizedPhoto } from '../schema.js'
import { normalizePhoto } from '../utils/normalize.js'
import { paginate } from '../utils/paginate.js'

export interface FlickrPeopleGetPhotosLoaderOptions {
  /**
   * Your API application key. See here for more details: https://www.flickr.com/services/api/misc.api_keys.html
   */
  api_key?: string
  /**
   * User ID
   */
  user_id: string
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: GetPhotosQueryParams
}

/**
 * Return photos from the given user's photostream. Only photos visible to the calling user will be returned.
 */
export function flickrPeopleGetPhotosLoader({
  api_key = import.meta.env.FLICKR_API_KEY,
  user_id,
  queryParams,
}: FlickrPeopleGetPhotosLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Flickr API key. Set it in the FLICKR_API_KEY environment variable or pass it as an option.')
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-people-get-photos-loader',
    load: async ({ logger, parseData, store }) => {
      logger.info('Fetching photostream photos')

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
        const normalized = normalizePhoto(result)
        const data = await parseData({ id: normalized.id, data: normalized })

        store.set({
          id: normalized.id,
          data,
        })
      }

      logger.info(`Loaded ${flattenedResult.length} photos`)
    },
    schema: NormalizedPhoto,
  }
}
