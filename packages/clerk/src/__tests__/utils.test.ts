import type { PaginatedLike } from '../types'
import { describe, expect, it, vi } from 'vitest'
import { paginate } from '../utils'

describe('paginate', () => {
  it('should handle single page of results', async () => {
    const mockData: PaginatedLike = {
      // @ts-expect-error - Testing purposes
      data: [1, 2, 3],
      totalCount: 3,
    }
    const mockFn = vi.fn().mockResolvedValue(mockData)

    const results = await paginate(mockFn)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(results).toEqual([mockData])
  })

  it('should handle multiple pages of results', async () => {
    const page1: PaginatedLike = {
      // @ts-expect-error - Testing purposes
      data: [1, 2],
      totalCount: 4,
    }
    const page2: PaginatedLike = {
      // @ts-expect-error - Testing purposes
      data: [3, 4],
      totalCount: 4,
    }

    const mockFn = vi.fn()
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const results = await paginate(mockFn, 2)

    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenNthCalledWith(1, 2, 0)
    expect(mockFn).toHaveBeenNthCalledWith(2, 2, 2)
    expect(results).toEqual([page1, page2])
  })

  it('should respect custom limit and offset', async () => {
    const mockData: PaginatedLike = {
      // @ts-expect-error - Testing purposes
      data: [1],
      totalCount: 1,
    }
    const mockFn = vi.fn().mockResolvedValue(mockData)

    await paginate(mockFn, 10, 20)

    expect(mockFn).toHaveBeenCalledWith(10, 20)
  })
})
