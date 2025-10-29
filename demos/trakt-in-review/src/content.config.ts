import { traktUsersHistoryLoader, traktUsersListsLoader, traktUsersRatingsLoader, traktUsersStatsLoader, traktUsersWatchedLoader } from '@lekoarts/trakt-loader'
import { defineCollection } from 'astro:content'

const TRAKT_USERNAME = 'arsaurea'

const traktStats = defineCollection({
  loader: traktUsersStatsLoader({
    id: TRAKT_USERNAME,
  }),
})

const traktLists = defineCollection({
  loader: traktUsersListsLoader({
    id: TRAKT_USERNAME,
  }),
})

const traktWatchedShows = defineCollection({
  loader: traktUsersWatchedLoader({
    id: TRAKT_USERNAME,
    type: 'shows',
    extended: ['full', 'noseasons'],
  }),
})

const traktWatchedMovies = defineCollection({
  loader: traktUsersWatchedLoader({
    id: TRAKT_USERNAME,
    type: 'movies',
    extended: 'full',
  }),
})

const traktMovieRatings = defineCollection({
  loader: traktUsersRatingsLoader({
    id: TRAKT_USERNAME,
    type: 'movies',
  }),
})

const traktShowRatings = defineCollection({
  loader: traktUsersRatingsLoader({
    id: TRAKT_USERNAME,
    type: 'shows',
  }),
})

const traktHistoryMovies = defineCollection({
  loader: traktUsersHistoryLoader({
    id: TRAKT_USERNAME,
    type: 'movies',
  }),
})

const traktHistoryEpisodes = defineCollection({
  loader: traktUsersHistoryLoader({
    id: TRAKT_USERNAME,
    type: 'episodes',
  }),
})

export const collections = {
  traktStats,
  traktLists,
  traktWatchedShows,
  traktWatchedMovies,
  traktMovieRatings,
  traktShowRatings,
  traktHistoryMovies,
  traktHistoryEpisodes,
}
