import type { Loader } from 'astro/loaders'
import type { TraktUsersHistoryLoaderOptions } from '../types/loader.js'
import type { BaseTraktHistory } from '../types/trakt.js'
import { AstroError } from 'astro/errors'
import { DEFAULT_LIMIT } from '../constants.js'
import { createTrakt } from '../ky.js'
import { TraktUsersHistoryResponseSchema } from '../schema.js'
import { paginate, toGenitive } from '../utils.js'

interface TraktIdHelper {
  ids: {
    trakt: number
  }
}

type Res = BaseTraktHistory & {
  movie?: TraktIdHelper
  show?: TraktIdHelper
  episode?: TraktIdHelper
}

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
    name: 'trakt-users-history',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} '${type}' history`)

      const extendedNormalized = Array.isArray(extended) ? extended.join(',') : extended
      const itemIdPostfix = item_id ? `/${item_id}` : ''
      const searchParams = new URLSearchParams()

      if (extendedNormalized) {
        searchParams.append('extended', extendedNormalized)
      }
      if (start_at) {
        searchParams.append('start_at', start_at)
      }
      if (end_at) {
        searchParams.append('end_at', end_at)
      }

      const response = await paginate<Res>(
        (page) => {
          const params = new URLSearchParams(searchParams)
          params.set('page', page.toString())
          params.set('limit', DEFAULT_LIMIT.toString())
          return trakt.get(`users/${id}/history/${type}${itemIdPostfix}`, {
            searchParams: params,
          })
        },
      )

      for (const entry of response) {
        const trakt_id = entry.id.toString()

        if (!trakt_id) {
          logger.debug(`No trakt ID found for entry: ${JSON.stringify(entry)}`)
          continue
        }

        const data = await parseData({ id: trakt_id, data: entry })
        const digest = generateDigest(data)

        store.set({
          id: trakt_id,
          data,
          digest,
        })
      }
    },
    schema: TraktUsersHistoryResponseSchema({ type, extended }),
  }
}
