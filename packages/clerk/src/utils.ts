import type { PaginatedLike } from './types.js'
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from './constants.js'

/**
 * If the Clerk API returns a paginated response, it will always have a `data` array and a `totalCount` number. If the data array length is smaller than the total count, it means there are more pages to fetch.
 *
 * You can pass a `limit` and `offset` option to the API calls.
 * If the sum of offset and limit is bigger than the total count, the recursion will stop.
 */
export function paginate<T extends PaginatedLike>(
  fn: (limit: number, offset: number) => Promise<T>,
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
  results: T[] = [],
): Promise<T[]> {
  return fn(limit, offset).then((data) => {
    results.push(data)

    if (offset + limit < data.totalCount) {
      return paginate(fn, limit, offset + limit, results)
    }

    return results
  })
}
