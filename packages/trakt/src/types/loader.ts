// eslint-disable-next-line unused-imports/no-unused-vars
const TraktApiExtended = {
  Full: 'full',
  Metadata: 'metadata',
  GuestStars: 'guest_stars',
  Episodes: 'episodes',
  NoSeasons: 'noseasons',
  Vip: 'vip',
  Comments: 'comments',
  Images: 'images',
  All: 'all',
} as const

type TraktApiExtends = (typeof TraktApiExtended)[keyof typeof TraktApiExtended]

interface StandardOptions {
  /**
   * Your Trakt.tv "Client ID". Go to https://trakt.tv/oauth/applications and create a new application. The "Client ID" is your API key.
   */
  api_key?: string
  /**
   * The Trakt.tv username to fetch information for.
   */
  id: string
}

interface TraktApiParamsExtended<E extends TraktApiExtends | void = TraktApiExtends> {
  /**
   * Increases the verbosity of the response.
   *
   * Note: This returns a lot of extra data, so please only use extended parameters if you actually need them!
   */
  extended?: E | E[]
}

export interface TraktUsersStatsLoaderOptions extends StandardOptions {}

export interface TraktUsersListsLoaderOptions extends StandardOptions {}

export interface TraktUsersRatingsLoaderOptions extends StandardOptions, TraktApiParamsExtended<typeof TraktApiExtended.Full | typeof TraktApiExtended.Images> {
  /**
   * The type of content to fetch ratings for.
   */
  type: 'movies' | 'shows' | 'seasons' | 'episodes' | 'all'
  /**
   * The specific rating to fetch. Send a comma separated string for rating if you need multiple ratings.
   */
  rating?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | string
}

export interface TraktUsersWatchedLoaderOptions extends StandardOptions, TraktApiParamsExtended<typeof TraktApiExtended.Full | typeof TraktApiExtended.NoSeasons> {
  /**
   * Whether to get movies or shows the user has watched.
   */
  type: 'movies' | 'shows'
}

export interface TraktUsersHistoryLoaderOptions extends StandardOptions, TraktApiParamsExtended<typeof TraktApiExtended.Full> {
  /**
   * Get the history for a specific type.
   */
  type: 'movies' | 'shows' | 'seasons' | 'episodes'
  /**
   * Trakt ID for a specific item.
   */
  item_id?: number
  /**
   * Starting date for the history.
   */
  start_at?: string
  /**
   * Ending date for the history.
   */
  end_at?: string
}
