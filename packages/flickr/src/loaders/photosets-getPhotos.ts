import type { Loader } from 'astro/loaders'
import type { z } from 'astro/zod'
import type { FlickrPhotosetsGetPhotosLoaderOptions } from '../types/loader'
import { AstroError } from 'astro/errors'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PhotosetsGetPhotos } from '../schema.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
import { createFlickr } from '../utils/ky.js'
import { normalize } from '../utils/normalize.js'
import { paginate } from '../utils/paginate.js'

type Res = z.infer<typeof PhotosetsGetPhotos>

/**
 * Get the list of photos in a set.
 */
export function flickrPhotosetsGetPhotosLoader({
  api_key = import.meta.env.FLICKR_API_KEY,
  username,
  photoset_id,
  queryParams,
}: FlickrPhotosetsGetPhotosLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Flickr API key. Define the FLICKR_API_KEY environment variable or pass it as an option.')
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-photosets-get-photos',
    load: async ({ logger, parseData, store, generateDigest }) => {
      logger.info(`Fetching photos from photoset ${photoset_id}`)
      let user_id: string

      try {
        user_id = await getUserIdFromUsername(username, flickr)
      }
      catch (e) {
        logger.error('Failed to get user ID from username. Original error:')
        throw e
      }

      function getPhotosetsPhotos(page: number) {
        return flickr('flickr.photosets.getPhotos', {
          user_id,
          photoset_id,
          per_page: DEFAULT_OPTIONS.per_page,
          page: page.toString(),
          extras: DEFAULT_OPTIONS.extras,
          ...queryParams,
        })
      }

      const result = await paginate(getPhotosetsPhotos)
      const flattenedPhotos = result.flatMap(r => r.photoset.photo)

      const photoset = {
        id: result[0]!.photoset.id,
        primary: result[0]!.photoset.primary,
        owner: result[0]!.photoset.owner,
        ownername: result[0]!.photoset.ownername,
        title: result[0]!.photoset.title,
        total: result[0]!.photoset.total,
      } satisfies Res['photoset']

      for (const result of flattenedPhotos) {
        if (!result.id) {
          continue
        }

        const normalized = normalize(result)
        const data = await parseData({ id: normalized.id, data: { ...normalized, photoset } })
        const digest = generateDigest(data)

        store.set({
          id: normalized.id,
          data,
          digest,
        })
      }

      logger.info(`Loaded ${flattenedPhotos.length} photos from photoset ${photoset_id}`)
    },
    schema: PhotosetsGetPhotos,
  }
}
