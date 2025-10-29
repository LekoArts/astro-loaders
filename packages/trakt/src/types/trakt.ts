import type { z } from 'astro/zod'
import type { BaseTraktHistory as BaseTraktHistorySchema, BaseTraktRating as BaseTraktRatingSchema, BaseTraktWatched as BaseTraktWatchedSchema, TraktUsersListsResponseSchema, TraktUsersStatsResponseSchema } from '../schema.js'

export type UsersStatsResponse = z.infer<typeof TraktUsersStatsResponseSchema>
export type UsersListsResponse = z.infer<typeof TraktUsersListsResponseSchema>
export type BaseTraktWatched = z.infer<typeof BaseTraktWatchedSchema>
export type BaseTraktRatings = z.infer<ReturnType<typeof BaseTraktRatingSchema>>
export type BaseTraktHistory = z.infer<ReturnType<typeof BaseTraktHistorySchema>>
