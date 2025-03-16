import type { Loader } from 'astro/loaders'
import type { PlausibleLoaderOptions, PlausibleResponse } from './types.js'
import { AstroError } from 'astro/errors'
import { createPlausible } from './ky.js'
import { PlausibleResponseSchema } from './schema.js'

const PLAUSIBLE_API_URL = 'https://plausible.io'

export function plausibleLoader({
  api_key = import.meta.env.PLAUSIBLE_API_KEY,
  api_url = PLAUSIBLE_API_URL,
  query,
}: PlausibleLoaderOptions): Loader {
  if (!api_key) {
    throw new AstroError('Missing Plausible API key. Define the PLAUSIBLE_API_KEY environment variable or pass it as an option.')
  }

  const plausible = createPlausible(api_key, api_url)

  return {
    name: 'plausible',
    load: async ({ logger, store, generateDigest, parseData }) => {
      logger.info(`Fetching stats for ${query.site_id}`)

      const { results, meta, query: executedQuery } = await plausible.post<PlausibleResponse>('api/v2/query', {
        json: query,
      }).json()

      logger.debug(`Executed query:
${JSON.stringify(executedQuery, null, 2)}
`)

      const result = { results, meta }
      const id = generateDigest(JSON.stringify(executedQuery))
      const data = await parseData({ id, data: result })
      const digest = generateDigest(data)

      store.set({
        id,
        data,
        digest,
      })

      logger.info('Loaded successfully')
    },
    schema: () => PlausibleResponseSchema,
  }
}
