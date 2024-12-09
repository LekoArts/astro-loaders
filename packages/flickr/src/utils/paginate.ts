import type { GetPhotosResponse } from '../types/flickr'

/**
 * Paginate through flickr() API calls. They always provide a `page` and `pages` property in the response.
 */
export function paginate<T extends GetPhotosResponse>(fn: (page: number) => Promise<T>, page = 1, results: T[] = []): Promise<T[]> {
  return fn(page).then((data) => {
    results.push(data)
    if (page < data.photos.pages) {
      return paginate(fn, page + 1, results)
    }
    return results
  })
}
