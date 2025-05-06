import type { FindByUsernameResponse, GetPhotosQueryParams, GetPhotosResponse, PeopleFindByUsernameParams, PhotosetsGetListParams, PhotosetsGetListResponse, PhotosetsGetPhotosParams, PhotosetsGetPhotosResponse } from '../types/flickr.js'
import ky from 'ky'
import { BASE_URL, DEFAULT_OPTIONS } from '../constants.js'

interface API {
  'flickr.people.getPhotos': [
    GetPhotosQueryParams,
    GetPhotosResponse,
  ]
  'flickr.photosets.getPhotos': [
    PhotosetsGetPhotosParams,
    PhotosetsGetPhotosResponse,
  ]
  'flickr.photosets.getList': [
    PhotosetsGetListParams,
    PhotosetsGetListResponse,
  ]
  'flickr.people.findByUsername': [
    PeopleFindByUsernameParams,
    FindByUsernameResponse,
  ]
}

export interface Flickr {
  <T extends keyof API>(method: T, params: API[T][0]): Promise<API[T][1]>
}

export function createFlickr(api_key: string) {
  return {
    flickr: <T extends keyof API>(method: T, params: API[T][0]): Promise<API[T][1]> => {
      return ky(BASE_URL, {
        method: 'get',
        headers: {
          'user-agent': '@lekoarts/flickr-loader',
        },
        searchParams: {
          api_key,
          format: 'json',
          nojsoncallback: 1,
          extras: DEFAULT_OPTIONS.extras,
          per_page: DEFAULT_OPTIONS.per_page,
          method,
          ...params,
        },
      }).json()
    },
  }
}
