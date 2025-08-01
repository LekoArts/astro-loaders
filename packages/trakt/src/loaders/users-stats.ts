import type { Loader } from 'astro/loaders'
import type { TraktUsersStatsLoaderOptions } from '../types/loader.js'
import type { UsersStatsResponse } from '../types/trakt.js'
import { AstroError } from 'astro/errors'
import { createTrakt } from '../ky.js'
import { TraktUsersStatsResponseSchema } from '../schema.js'
import { toGenitive } from '../utils.js'

export function traktUsersStatsLoader({ api_key = import.meta.env.TRAKT_API_KEY, id }: TraktUsersStatsLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Trakt API key. Define the TRAKT_API_KEY environment variable or pass it as an option.')
  }

  const trakt = createTrakt(api_key)

  return {
    name: 'trakt-users-stats',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} stats`)

      const response = await trakt.get<UsersStatsResponse>(`users/${id}/stats`).json()

      const data = await parseData({ id, data: response })
      const digest = generateDigest(data)

      store.set({
        id,
        data,
        digest,
      })
    },
    schema: TraktUsersStatsResponseSchema,
  }
}
