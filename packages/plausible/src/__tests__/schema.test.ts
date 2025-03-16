import { describe, expect, it } from 'vitest'
import { PlausibleResponseSchema } from '../schema.js'
import { responses } from './fixtures/responses.js'

describe('plausibleResponseSchema', () => {
  it.each(responses)('validates response %#', (res) => {
    const result = PlausibleResponseSchema.safeParse(res)

    expect(result.success).toBe(true)
  })
})
