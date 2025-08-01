import type { z } from 'astro/zod'
import type { BaseTraktWatched as BaseTraktWatchedSchema, TraktUsersListsResponseSchema, TraktUsersStatsResponseSchema } from '../schema.js'

export type UsersStatsResponse = z.infer<typeof TraktUsersStatsResponseSchema>
export type UsersListsResponse = z.infer<typeof TraktUsersListsResponseSchema>
export type BaseTraktWatched = z.infer<typeof BaseTraktWatchedSchema>
