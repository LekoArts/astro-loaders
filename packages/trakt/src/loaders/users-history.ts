import type { Loader } from 'astro/loaders'
import type { TraktUsersHistoryLoaderOptions } from '../types/loader.js'
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

type Res = ''

/**
 * Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`.
 *
 * Specify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.
 */
export function traktUsersHistoryLoader({ api_key = import.meta.env.TRAKT_API_KEY, id, item_id, type, start_at, end_at, extended }: TraktUsersHistoryLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Trakt API key. Define the TRAKT_API_KEY environment variable or pass it as an option.')
  }

  const trakt = createTrakt(api_key)

  return {
    name: 'trakt-users-ratings',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} '${type}' ratings`)

      const extendedNormalized = Array.isArray(extended) ? extended.join(',') : extended
      const extPostfix = extended ? `?extended=${extendedNormalized}` : ''
      const ratingPostfix = rating ? `/${rating}` : ''
      const response = await trakt.get<Array<Res>>(`users/${id}/ratings/${type}${ratingPostfix}${extPostfix}`).json()

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
