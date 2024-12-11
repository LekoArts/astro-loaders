import type { Loader } from 'astro/loaders'
import type { PhotosetsGetListResponse, PhotosetsGetPhotosResponse } from '../types/flickr'
import type { FlickrPhotosetsGetListWithPhotosLoaderOptions } from '../types/loader'
import { AstroError } from 'astro/errors'
import { createFlickr } from 'flickr-sdk'
import { DEFAULT_OPTIONS } from '../constants.js'
import { PhotosetsGetListWithPhotos } from '../schema.js'
import { getUserIdFromUsername } from '../utils/get-user-id.js'
import { normalize } from '../utils/normalize.js'
import { paginate } from '../utils/paginate.js'

/**
 * Returns the photosets belonging to the specified user.
 */
export function flickrPhotosetsGetListWithPhotosLoader({
  api_key = import.meta.env.FLICKR_API_KEY,
  username,
  queryParams,
  in: _in,
  nin: _nin,
}: FlickrPhotosetsGetListWithPhotosLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Flickr API key. Define the FLICKR_API_KEY environment variable or pass it as an option.')
  }
  const { flickr } = createFlickr(api_key)

  return {
    name: 'flickr-photosets-get-list-with-photos',
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

      logger.info(`Loaded ${flattenedResult.length} photosets`)

      let photosetCounter = 0

      for (const result of flattenedResult) {
        // If no photoset ID is present there's no use in calling another API with that ID
        if (!result.id) {
          continue
        }

        // Handle the "in" and "nin" options a user may provide. With "in" they say: Only fetch photosets with these IDs. With "nin" they say: Fetch all photosets except these.
        if (_in && !_in.includes(result.id)) {
          continue
        }
        if (_nin && _nin.includes(result.id)) {
          continue
        }

        const normalizedPhotoset = normalize(result)

        function getPhotosetsPhotos(page: number) {
          return flickr('flickr.photosets.getPhotos', {
            user_id,
            photoset_id: normalizedPhotoset.id,
            per_page: DEFAULT_OPTIONS.per_page,
            page: page.toString(),
            extras: DEFAULT_OPTIONS.extras,
            ...queryParams,
          }) as Promise<PhotosetsGetPhotosResponse>
        }

        // Fetch all images of the given photoset
        const photosResult = await paginate(getPhotosetsPhotos)
        const flattenedPhotosResult = photosResult.flatMap(r => r.photoset.photo)
        const photos = flattenedPhotosResult.map(normalize)

        const data = await parseData({ id: normalizedPhotoset.id, data: {
          ...normalizedPhotoset,
          photos,
        } })

        store.set({
          id: normalizedPhotoset.id,
          data,
        })

        photosetCounter++
      }

      logger.info(`Processed ${photosetCounter} photosets`)
    },
    schema: PhotosetsGetListWithPhotos,
  }
}
