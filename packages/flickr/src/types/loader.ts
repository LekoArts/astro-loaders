import type { GetPhotosQueryParams, PhotosetsGetListParams, PhotosetsGetPhotosParams } from './flickr.js'

export interface StandardOptions {
  /**
   * Your API application key. See here for more details: https://www.flickr.com/services/api/misc.api_keys.html
   */
  api_key?: string
  /**
   * Flickr username
   */
  username: string
}

export interface FlickrPeopleGetPhotosLoaderOptions extends StandardOptions {
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: GetPhotosQueryParams
}

export interface FlickrPhotosetsGetListLoaderOptions extends StandardOptions {
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: PhotosetsGetListParams
}

export interface FlickrPhotosetsGetPhotosLoaderOptions extends StandardOptions {
  /**
   * The ID of the photoset you want to fetch photos from
   */
  photoset_id: string
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: PhotosetsGetPhotosParams
}

type FlickrPhotosetsGetListWithPhotos = {
  /**
   * Array of photoset IDs to match against
   */
  in?: string[]
  /**
   * Array of photoset IDs to exclude
   */
  nin?: never
} | {
  /**
   * Array of photoset IDs to match against
   */
  in?: never
  /**
   * Array of photoset IDs to exclude
   */
  nin?: string[]
}

export type FlickrPhotosetsGetListWithPhotosLoaderOptions = StandardOptions & FlickrPhotosetsGetListWithPhotos & {
  /**
   * Optional query parameters you can pass to the request. By passing options here you will override any defaults that may be set.
   */
  queryParams?: PhotosetsGetListParams
}
