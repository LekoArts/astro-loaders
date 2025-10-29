import type { Loader } from 'astro/loaders'
import type { TraktUsersRatingsLoaderOptions } from '../types/loader.js'
import type { BaseTraktRatings } from '../types/trakt.js'
import { AstroError } from 'astro/errors'
import { createTrakt } from '../ky.js'
import { TraktRatingsResponseSchema } from '../schema.js'
import { toGenitive } from '../utils.js'

interface TraktIdHelper {
  ids: {
    trakt: number
  }
}

type Res = BaseTraktRatings & {
  movie?: TraktIdHelper
  show?: TraktIdHelper
  season?: any
  episode?: TraktIdHelper
}

/**
 * Get a user's ratings filtered by type. You can optionally filter for a specific rating between 1 and 10. Send a comma separated string for rating if you need multiple ratings.
 */
export function traktUsersRatingsLoader({ api_key = import.meta.env.TRAKT_API_KEY, id, rating, type, extended }: TraktUsersRatingsLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Trakt API key. Define the TRAKT_API_KEY environment variable or pass it as an option.')
  }

  const trakt = createTrakt(api_key)

  return {
    name: 'trakt-users-ratings',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} '${type}' ratings`)

      const extendedNormalized = Array.isArray(extended) ? extended.join(',') : extended
      const searchParams = extended ? { extended: extendedNormalized } : {}
      const ratingPostfix = rating ? `/${rating}` : ''

      const response = await trakt.get<Array<Res>>(`users/${id}/ratings/${type}${ratingPostfix}`, { searchParams }).json()

      for (const entry of response) {
        let trakt_id: number | undefined
        switch (entry.type) {
          case 'movie':
            trakt_id = entry.movie?.ids.trakt
            break
          case 'show':
            trakt_id = entry.show?.ids.trakt
            break
          case 'season':
            trakt_id = entry.show?.ids.trakt
            break
          case 'episode':
            trakt_id = entry.episode?.ids.trakt
            break
        }

        if (!trakt_id) {
          logger.debug(`No trakt ID found for entry: ${JSON.stringify(entry)}`)
          continue
        }

        const data = await parseData({ id: trakt_id.toString(), data: entry })
        const digest = generateDigest(data)

        store.set({
          id: trakt_id.toString(),
          data,
          digest,
        })
      }
    },
    schema: TraktRatingsResponseSchema({ type, extended }),
  }
}
