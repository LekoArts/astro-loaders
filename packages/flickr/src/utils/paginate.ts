import type { GetPhotosResponse, PhotosetsGetListResponse, PhotosetsGetPhotosResponse } from '../types/flickr'

type Response = GetPhotosResponse | PhotosetsGetListResponse | PhotosetsGetPhotosResponse

// Typeguard functions to check which response type we're dealing with

export function isGetPhotosResponse(response: Response): response is GetPhotosResponse {
  return 'photos' in response
}

export function isPhotosetsGetListResponse(response: Response): response is PhotosetsGetListResponse {
  return 'photosets' in response
}

export function isPhotosetsGetPhotosResponse(response: Response): response is PhotosetsGetPhotosResponse {
  return 'photoset' in response
}

/**
 * Unwrap data to have access to "pages" and "page" properties.
 */
function unwrap(response: Response) {
  if (isGetPhotosResponse(response)) {
    return response.photos
  }
  if (isPhotosetsGetListResponse(response)) {
    return response.photosets
  }
  if (isPhotosetsGetPhotosResponse(response)) {
    return response.photoset
  }
}

/**
 * Paginate through flickr() API calls. They always provide a `page` and `pages` property in the response.
 */
export function paginate<T extends Response>(fn: (page: number) => Promise<T>, page = 1, results: T[] = []): Promise<T[]> {
  return fn(page).then((data) => {
    results.push(data)

    const unwrapped = unwrap(data)

    if (unwrapped) {
      if (page < unwrapped.pages) {
        return paginate(fn, page + 1, results)
      }
    }

    return results
  })
}
