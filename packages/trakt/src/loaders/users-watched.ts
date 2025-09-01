import type { Loader } from 'astro/loaders'
import type { TraktUsersWatchedLoaderOptions } from '../types/loader.js'
import type { BaseTraktWatched } from '../types/trakt.js'
import { AstroError } from 'astro/errors'
import { createTrakt } from '../ky.js'
import { TraktUsersWatchedResponseSchema } from '../schema.js'
import { toGenitive } from '../utils.js'

interface TraktIdHelper {
  ids: {
    trakt: number
  }
}

type Res = BaseTraktWatched & {
  show?: TraktIdHelper
  movie?: TraktIdHelper
  seasons?: any
}

/**
 * Returns all movies or shows a user has watched sorted by most plays.
 */
export function traktUsersWatchedLoader({ api_key = import.meta.env.TRAKT_API_KEY, id, type, extended }: TraktUsersWatchedLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Trakt API key. Define the TRAKT_API_KEY environment variable or pass it as an option.')
  }

  const trakt = createTrakt(api_key)

  return {
    name: 'trakt-users-watched',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} watched ${type}`)

      const extendedNormalized = Array.isArray(extended) ? extended.join(',') : extended
      const postfix = extended ? `?extended=${extendedNormalized}` : ''
      const response = await trakt.get<Array<Res>>(`users/${id}/watched/${type}${postfix}`).json()

      for (const entry of response) {
        const trakt_id = type === 'movies' ? entry.movie?.ids.trakt : entry.show?.ids.trakt

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
    schema: TraktUsersWatchedResponseSchema({ type, extended }),
  }
}
