import type { KyResponse } from 'ky'
import { DEFAULT_PAGE } from './constants.js'

/**
 * Convert a string to genitive case.
 */
export function toGenitive(str: string): string {
  // Simple rules for genitive case in English
  if (str.endsWith('s')) {
    return `${str}'`
  }
  else {
    return `${str}'s`
  }
}

interface PaginationHeaders {
  page: number
  limit: number
  pageCount: number
  itemCount: number
}

/**
 * Extract pagination information from Trakt API response headers
 */
function getPaginationHeaders(response: KyResponse): PaginationHeaders | null {
  const page = response.headers.get('X-Pagination-Page')
  const limit = response.headers.get('X-Pagination-Limit')
  const pageCount = response.headers.get('X-Pagination-Page-Count')
  const itemCount = response.headers.get('X-Pagination-Item-Count')

  if (!page || !limit || !pageCount || !itemCount) {
    return null
  }

  return {
    page: Number.parseInt(page, 10),
    limit: Number.parseInt(limit, 10),
    pageCount: Number.parseInt(pageCount, 10),
    itemCount: Number.parseInt(itemCount, 10),
  }
}

/**
 * Paginate through Trakt API calls that support pagination.
 *
 * Trakt uses HTTP headers for pagination metadata:
 * - X-Pagination-Page: Current page
 * - X-Pagination-Limit: Items per page
 * - X-Pagination-Page-Count: Total number of pages
 * - X-Pagination-Item-Count: Total number of items
 *
 * @param fn - Function that takes page number and returns a Promise with the KyResponse
 * @param page - Starting page number (default: 1)
 * @param results - Accumulated results array (used internally for recursion)
 * @returns Promise resolving to array of all fetched data
 */
export async function paginate<T>(
  fn: (page: number) => Promise<KyResponse>,
  page: number = DEFAULT_PAGE,
  results: T[] = [],
): Promise<T[]> {
  const response = await fn(page)
  const data = await response.json<T[]>()

  for (const item of data) {
    results.push(item)
  }

  const paginationHeaders = getPaginationHeaders(response)

  if (!paginationHeaders) {
    return results
  }

  if (page < paginationHeaders.pageCount) {
    return paginate(fn, page + 1, results)
  }

  return results
}
