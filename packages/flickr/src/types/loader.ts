import type { GetPhotosQueryParams } from './flickr'

interface StandardOptions {
  /**
   * Your API application key. See here for more details: https://www.flickr.com/services/api/misc.api_keys.html
   */
  api_key?: string
  /**
   * Flickr username
   */
  username: string
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: GetPhotosQueryParams
}

export interface FlickrPeopleGetPhotosLoaderOptions extends StandardOptions {}

export interface FlickrPhotosetsGetListLoaderOptions extends StandardOptions {}

export interface FlickrPhotosetsGetListWithPhotosLoaderOptions extends StandardOptions {}
