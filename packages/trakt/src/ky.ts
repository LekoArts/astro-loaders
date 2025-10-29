import type { KyInstance } from 'ky'
import ky from 'ky'
import { API_URL } from './constants.js'

export function createTrakt(api_key: string): KyInstance {
  return ky.create({
    headers: {
      'user-agent': '@lekoarts/trakt-loader',
      'trakt-api-version': '2',
      'trakt-api-key': api_key,
    },
    prefixUrl: API_URL,
  })
}
