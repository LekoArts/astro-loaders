import { describe, expect, it } from 'vitest'
import { isNumber, isObjectLike, isPaginatedLike } from '../types.js'

describe('type guards', () => {
  describe('isNumber', () => {
    it('returns true for numbers', () => {
      expect(isNumber(42)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-1)).toBe(true)
    })

    it('returns false for non-numbers', () => {
      expect(isNumber('42')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
      expect(isNumber({})).toBe(false)
      expect(isNumber([])).toBe(false)
    })
  })

  describe('isPaginatedLike', () => {
    it('returns true for paginated objects', () => {
      const paginated = {
        data: [{ id: '1', createdAt: 123, updatedAt: 456, _raw: { id: '1', created_at: 123, updated_at: 456 } }],
        totalCount: 1,
      }
      expect(isPaginatedLike(paginated)).toBe(true)
    })

    it('returns false for non-paginated objects', () => {
      expect(isPaginatedLike(null)).toBe(false)
      expect(isPaginatedLike({})).toBe(false)
      expect(isPaginatedLike({ data: [] })).toBe(false)
      expect(isPaginatedLike({ totalCount: 0 })).toBe(false)
      expect(isPaginatedLike([])).toBe(false)
    })
  })

  describe('isObjectLike', () => {
    it('returns true for object-like values', () => {
      const obj = { id: '1', _raw: { id: '1' } }
      expect(isObjectLike(obj)).toBe(true)
      expect(isObjectLike({})).toBe(true)
    })

    it('returns false for non-object-like values', () => {
      expect(isObjectLike(null)).toBe(false)
      expect(isObjectLike(undefined)).toBe(false)
      expect(isObjectLike([])).toBe(false)
      expect(isObjectLike('string')).toBe(false)
      expect(isObjectLike(42)).toBe(false)
    })
  })
})
