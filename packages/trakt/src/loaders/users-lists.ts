import type { Loader } from 'astro/loaders'
import type { TraktUsersListsLoaderOptions } from '../types/loader.js'
import type { UsersListsResponse } from '../types/trakt.js'
import { AstroError } from 'astro/errors'
import { createTrakt } from '../ky.js'
import { TraktUsersListsResponseSchema } from '../schema.js'
import { toGenitive } from '../utils.js'

/**
 * Returns all personal lists for a user.
 */
export function traktUsersListsLoader({ api_key = import.meta.env.TRAKT_API_KEY, id }: TraktUsersListsLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Trakt API key. Define the TRAKT_API_KEY environment variable or pass it as an option.')
  }

  const trakt = createTrakt(api_key)

  return {
    name: 'trakt-users-lists',
    load: async ({ logger, generateDigest, store, parseData }) => {
      logger.info(`Fetching ${toGenitive(id)} lists`)

      const response = await trakt.get<Array<UsersListsResponse>>(`users/${id}/lists`).json()

      for (const list of response) {
        const data = await parseData({ id: list.name, data: list })
        const digest = generateDigest(data)

        store.set({
          id: list.name,
          data,
          digest,
        })
      }
    },
    schema: TraktUsersListsResponseSchema,
  }
}
