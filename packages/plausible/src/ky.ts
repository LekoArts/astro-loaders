import type { KyInstance } from 'ky'
import ky from 'ky'

export function createPlausible(api_key: string, api_url: string): KyInstance {
  return ky.create({
    headers: {
      'user-agent': '@lekoarts/plausible-loader',
      'authorization': `Bearer ${api_key}`,
    },
    prefixUrl: api_url,
  })
}
