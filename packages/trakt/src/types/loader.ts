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

export interface TraktUsersWatchedLoaderOptions extends StandardOptions, TraktApiParamsExtended<typeof TraktApiExtended.Full | typeof TraktApiExtended.NoSeasons> {
  type: 'movies' | 'shows'
}
