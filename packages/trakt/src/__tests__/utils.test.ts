import type { KyResponse } from 'ky'
import { describe, expect, it, vi } from 'vitest'
import { DEFAULT_PAGE } from '../constants.js'
import { getPaginationHeaders, paginate, toGenitive } from '../utils.js'

function createMockResponse(data: unknown, headers: Record<string, string> = {}): KyResponse {
  const headersMap = new Map(Object.entries(headers))
  return {
    json: vi.fn().mockResolvedValue(data),
    headers: {
      get: vi.fn((key: string) => headersMap.get(key) || null),
    },
  } as unknown as KyResponse
}

describe('toGenitive', () => {
  it('should add apostrophe-s to words not ending in s', () => {
    expect(toGenitive('John')).toBe('John\'s')
    expect(toGenitive('a')).toBe('a\'s')
    expect(toGenitive('')).toBe('\'s')
  })

  it('should add only apostrophe to words ending in s (case-insensitive)', () => {
    expect(toGenitive('James')).toBe('James\'')
    expect(toGenitive('s')).toBe('s\'')
    expect(toGenitive('JAMES')).toBe('JAMES\'')
    expect(toGenitive('JAMEs')).toBe('JAMEs\'')
  })
})

describe('getPaginationHeaders', () => {
  it('should return pagination headers when all headers are present', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '2',
      'X-Pagination-Limit': '10',
      'X-Pagination-Page-Count': '5',
      'X-Pagination-Item-Count': '42',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toEqual({
      page: 2,
      limit: 10,
      pageCount: 5,
      itemCount: 42,
    })
  })

  it('should return null when page header is missing', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Limit': '10',
      'X-Pagination-Page-Count': '5',
      'X-Pagination-Item-Count': '42',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toBeNull()
  })

  it('should return null when limit header is missing', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '2',
      'X-Pagination-Page-Count': '5',
      'X-Pagination-Item-Count': '42',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toBeNull()
  })

  it('should return null when pageCount header is missing', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '2',
      'X-Pagination-Limit': '10',
      'X-Pagination-Item-Count': '42',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toBeNull()
  })

  it('should return null when itemCount header is missing', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '2',
      'X-Pagination-Limit': '10',
      'X-Pagination-Page-Count': '5',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toBeNull()
  })

  it('should return null when all headers are missing', () => {
    const mockResponse = createMockResponse([])

    const result = getPaginationHeaders(mockResponse)

    expect(result).toBeNull()
  })

  it('should parse string values to integers', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '100',
      'X-Pagination-Limit': '50',
      'X-Pagination-Page-Count': '200',
      'X-Pagination-Item-Count': '9999',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toEqual({
      page: 100,
      limit: 50,
      pageCount: 200,
      itemCount: 9999,
    })
    expect(typeof result?.page).toBe('number')
    expect(typeof result?.limit).toBe('number')
    expect(typeof result?.pageCount).toBe('number')
    expect(typeof result?.itemCount).toBe('number')
  })

  it('should handle zero values', () => {
    const mockResponse = createMockResponse([], {
      'X-Pagination-Page': '0',
      'X-Pagination-Limit': '0',
      'X-Pagination-Page-Count': '0',
      'X-Pagination-Item-Count': '0',
    })

    const result = getPaginationHeaders(mockResponse)

    expect(result).toEqual({
      page: 0,
      limit: 0,
      pageCount: 0,
      itemCount: 0,
    })
  })
})

describe('paginate', () => {
  it('should fetch single page when no pagination headers present', async () => {
    const mockData = [{ id: 1 }, { id: 2 }]
    const mockResponse = createMockResponse(mockData)
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(DEFAULT_PAGE)
    expect(result).toEqual(mockData)
  })

  it('should fetch single page when on last page', async () => {
    const mockData = [{ id: 1 }, { id: 2 }]
    const mockResponse = createMockResponse(mockData, {
      'X-Pagination-Page': '3',
      'X-Pagination-Limit': '10',
      'X-Pagination-Page-Count': '3',
      'X-Pagination-Item-Count': '25',
    })
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn, 3)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(3)
    expect(result).toEqual(mockData)
  })

  it('should fetch multiple pages recursively', async () => {
    const mockData1 = [{ id: 1 }, { id: 2 }]
    const mockData2 = [{ id: 3 }, { id: 4 }]
    const mockData3 = [{ id: 5 }]

    const mockResponse1 = createMockResponse(mockData1, {
      'X-Pagination-Page': '1',
      'X-Pagination-Limit': '2',
      'X-Pagination-Page-Count': '3',
      'X-Pagination-Item-Count': '5',
    })

    const mockResponse2 = createMockResponse(mockData2, {
      'X-Pagination-Page': '2',
      'X-Pagination-Limit': '2',
      'X-Pagination-Page-Count': '3',
      'X-Pagination-Item-Count': '5',
    })

    const mockResponse3 = createMockResponse(mockData3, {
      'X-Pagination-Page': '3',
      'X-Pagination-Limit': '2',
      'X-Pagination-Page-Count': '3',
      'X-Pagination-Item-Count': '5',
    })

    const mockFn = vi.fn()
      .mockResolvedValueOnce(mockResponse1)
      .mockResolvedValueOnce(mockResponse2)
      .mockResolvedValueOnce(mockResponse3)

    const result = await paginate(mockFn)

    expect(mockFn).toHaveBeenCalledTimes(3)
    expect(mockFn).toHaveBeenNthCalledWith(1, DEFAULT_PAGE)
    expect(mockFn).toHaveBeenNthCalledWith(2, 2)
    expect(mockFn).toHaveBeenNthCalledWith(3, 3)
    expect(result).toEqual([...mockData1, ...mockData2, ...mockData3])
  })

  it('should use custom starting page', async () => {
    const mockData = [{ id: 5 }, { id: 6 }]
    const mockResponse = createMockResponse(mockData, {
      'X-Pagination-Page': '5',
      'X-Pagination-Limit': '2',
      'X-Pagination-Page-Count': '5',
      'X-Pagination-Item-Count': '10',
    })
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn, 5)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(5)
    expect(result).toEqual(mockData)
  })

  it('should accumulate results with pre-existing results array', async () => {
    const existingResults = [{ id: 0 }]
    const mockData = [{ id: 1 }]
    const mockResponse = createMockResponse(mockData)
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn, DEFAULT_PAGE, existingResults)

    expect(result).toEqual([{ id: 0 }, { id: 1 }])
  })

  it('should handle empty page data', async () => {
    const mockData: never[] = []
    const mockResponse = createMockResponse(mockData)
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  })

  it('should continue pagination when current page is less than pageCount', async () => {
    const mockData1 = [{ id: 1 }]
    const mockData2 = [{ id: 2 }]

    const mockResponse1 = createMockResponse(mockData1, {
      'X-Pagination-Page': '1',
      'X-Pagination-Limit': '1',
      'X-Pagination-Page-Count': '2',
      'X-Pagination-Item-Count': '2',
    })

    const mockResponse2 = createMockResponse(mockData2, {
      'X-Pagination-Page': '2',
      'X-Pagination-Limit': '1',
      'X-Pagination-Page-Count': '2',
      'X-Pagination-Item-Count': '2',
    })

    const mockFn = vi.fn()
      .mockResolvedValueOnce(mockResponse1)
      .mockResolvedValueOnce(mockResponse2)

    const result = await paginate(mockFn, 1)

    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(result).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should stop pagination when current page equals pageCount', async () => {
    const mockData = [{ id: 10 }]
    const mockResponse = createMockResponse(mockData, {
      'X-Pagination-Page': '10',
      'X-Pagination-Limit': '1',
      'X-Pagination-Page-Count': '10',
      'X-Pagination-Item-Count': '10',
    })
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn, 10)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockData)
  })

  it('should handle complex objects in data array', async () => {
    const mockData = [
      { id: 1, name: 'Item 1', nested: { value: 'test' } },
      { id: 2, name: 'Item 2', nested: { value: 'test2' } },
    ]
    const mockResponse = createMockResponse(mockData)
    const mockFn = vi.fn().mockResolvedValue(mockResponse)

    const result = await paginate(mockFn)

    expect(result).toEqual(mockData)
  })
})
