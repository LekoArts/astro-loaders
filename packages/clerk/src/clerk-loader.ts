import type { Loader } from 'astro/loaders'
import type { ClerkLoaderOptions, GetNamespaceAndMethod, PaginatedLike, PathsAutocomplete, SimplifiedReturnType } from './types.js'
import { createClerkClient } from '@clerk/backend'
import { AstroError } from 'astro/errors'
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from './constants.js'
import { clerkApiReponseToZodSchema } from './schema.js'
import { isNumber, isObjectLike, isPaginatedLike } from './types.js'
import { paginate } from './utils.js'

/**
 * Access certain Clerk Backend APIs by choosing a method name.
 */
export function clerkLoader<MethodName extends PathsAutocomplete>(
  options: ClerkLoaderOptions<MethodName>,
): Loader {
  let secretKey: string

  if (options?.clientOptions?.secretKey) {
    secretKey = options.clientOptions.secretKey
  }
  else {
    const { CLERK_SECRET_KEY } = import.meta.env

    if (!CLERK_SECRET_KEY) {
      throw new AstroError('Missing Clerk Secret Key. Define the CLERK_SECRET_KEY environment variable or pass it as an option to clientOptions.')
    }

    secretKey = CLERK_SECRET_KEY
  }

  const clerk = createClerkClient({ ...(options?.clientOptions ? options.clientOptions : {}), secretKey })

  return {
    name: 'clerk',
    load: async ({ logger, store, generateDigest, parseData }) => {
      logger.info(`Calling ${options.method.name}`)

      const [namespace, method] = options.method.name.split('.') as GetNamespaceAndMethod<MethodName>
      const methodOptions = options.method?.options ?? {}

      function getResponse(limit: number, offset: number): Promise<PaginatedLike> {
        // @ts-expect-error - FIXME
        return clerk[namespace][method]({ ...methodOptions, limit, offset })
      }

      let result: SimplifiedReturnType

      try {
        // @ts-expect-error - FIXME
        result = await clerk[namespace][method](methodOptions)
      }
      catch (e) {
        logger.error(`Failed to call ${options.method.name}. Original error:`)
        throw e
      }

      if (isNumber(result)) {
        const data = { count: result }
        const digest = generateDigest(data)
        const id = generateDigest({ name: options.method.name, count: result })

        store.set({
          id,
          data,
          digest,
        })
      }
      else if (isPaginatedLike(result)) {
        const limit = (methodOptions as { limit?: number })?.limit ?? DEFAULT_LIMIT
        const offset = (methodOptions as { offset?: number })?.offset ?? DEFAULT_OFFSET

        let paginatedResult: PaginatedLike[]

        /**
         * At this point the first API call has already been made, so result is already populated with the first entries. Now we need to paginate through the rest of the entries (if any).
         */
        try {
          paginatedResult = await paginate(
            getResponse,
            limit,
            offset + limit,
            [result],
          )
        }
        catch (e) {
          logger.error(`Failed to call ${options.method.name}. Original error:`)
          throw e
        }

        const flattenedResult = paginatedResult.flatMap(r => r.data)

        for (const result of flattenedResult) {
          if (!result.id) {
            continue
          }

          const id = result.id
          const data = await parseData({ id, data: result._raw })
          const digest = generateDigest(String(data.updated_at))

          store.set({
            id,
            data,
            digest,
          })
        }

        logger.info(`Loaded ${flattenedResult.length} entries from ${options.method.name}`)
      }
      else if (isObjectLike(result)) {
        const id = result.id
        const data = await parseData({ id, data: result._raw })
        const digest = generateDigest(data)

        store.set({
          id,
          data,
          digest,
        })
      }
      else {
        throw new AstroError(`Unexpected return type from ${options.method.name}`)
      }
    },
    schema: () => clerkApiReponseToZodSchema(options.method.name),
  }
}
