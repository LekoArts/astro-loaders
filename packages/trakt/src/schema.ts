import type { TraktUsersRatingsLoaderOptions, TraktUsersWatchedLoaderOptions } from './types/loader.js'
import { z } from 'astro/zod'

function hasFull(extended: unknown) {
  return extended === 'full' || (Array.isArray(extended) && extended.includes('full'))
}
function hasImages(extended: unknown) {
  return extended === 'images' || (Array.isArray(extended) && extended.includes('images'))
}

export const TraktUsersStatsResponseSchema = z.object({
  movies: z.object({
    plays: z.number(),
    watched: z.number(),
    minutes: z.number(),
    collected: z.number(),
    ratings: z.number(),
    comments: z.number(),
  }),
  shows: z.object({
    watched: z.number(),
    collected: z.number(),
    ratings: z.number(),
    comments: z.number(),
  }),
  seasons: z.object({
    ratings: z.number(),
    comments: z.number(),
  }),
  episodes: z.object({
    plays: z.number(),
    watched: z.number(),
    minutes: z.number(),
    collected: z.number(),
    ratings: z.number(),
    comments: z.number(),
  }),
  network: z.object({
    friends: z.number(),
    followers: z.number(),
    following: z.number(),
  }),
  ratings: z.object({
    total: z.number(),
    distribution: z.record(z.string(), z.number()),
  }),
})

export const TraktUsersListsResponseSchema = z.object({
  name: z.string(),
  description: z.string(),
  privacy: z.enum(['private', 'friends', 'public', 'link']),
  share_link: z.string().url(),
  display_numbers: z.boolean(),
  allow_comments: z.boolean(),
  sort_by: z.enum([
    'rank',
    'added',
    'title',
    'released',
    'runtime',
    'popularity',
    'percentage',
    'votes',
    'my_rating',
    'random',
    'watched',
    'collected',
  ]),
  sort_how: z.enum(['asc', 'desc']),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  item_count: z.number(),
  comment_count: z.number(),
  likes: z.number(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
  }),
  type: z.enum(['watchlist', 'favorites', 'personal']),
})

const TraktImage = z.object({
  fanart: z.array(z.string()),
  poster: z.array(z.string()),
  logo: z.array(z.string()),
  clearart: z.array(z.string()),
  banner: z.array(z.string()),
  thumb: z.array(z.string()),
})

export const BaseTraktWatched = z.object({
  plays: z.number(),
  last_watched_at: z.string().datetime(),
  last_updated_at: z.string().datetime(),
  reset_at: z.string().datetime().nullable().optional(),
})

const TraktMovieShort = z.object({
  title: z.string(),
  year: z.number().nullable(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
    imdb: z.string().nullable(),
    tmdb: z.number().nullable(),
  }),
})

const TraktMovieExtended = TraktMovieShort.extend({
  tagline: z.string(),
  overview: z.string(),
  released: z.string().nullable(),
  runtime: z.number(),
  country: z.string().length(2).nullable(),
  updated_at: z.string().datetime(),
  trailer: z.string().url().nullable(),
  homepage: z.string().url().nullable(),
  status: z.enum(['released', 'in production', 'post production', 'planned', 'rumored', 'canceled']),
  rating: z.number(),
  votes: z.number(),
  comment_count: z.number(),
  language: z.string().length(2),
  available_translations: z.array(z.string().length(2)),
  genres: z.array(z.string()),
  certification: z.string().nullable(),
  images: TraktImage.optional(),
})

const TraktWatchedEpisode = z.object({
  number: z.number(),
  plays: z.number(),
  last_watched_at: z.string().datetime(),
})

const TraktWatchedSeason = z.object({
  number: z.number(),
  episodes: z.array(TraktWatchedEpisode),
})

const TraktShowShort = z.object({
  title: z.string(),
  year: z.number(),
  ids: z.object({
    trakt: z.number(),
    slug: z.string(),
    imdb: z.string().nullable(),
    tvdb: z.number().nullable(),
    tmdb: z.number().nullable(),
  }),
})

const TraktShowExtended = TraktShowShort.extend({
  tagline: z.string(),
  overview: z.string().nullable(),
  first_aired: z.string().datetime(),
  airs: z.object({
    day: z.string().nullable(),
    time: z.string().nullable(),
    timezone: z.string().nullable(),
  }),
  runtime: z.number(),
  certification: z.string().nullable(),
  network: z.string().nullable(),
  country: z.string().length(2),
  updated_at: z.string().datetime(),
  trailer: z.string().url().nullable(),
  homepage: z.string().url().nullable(),
  status: z.enum(['returning series', 'continuing', 'in production', 'planned', 'upcoming', 'pilot', 'canceled', 'ended']),
  rating: z.number().min(0).max(10),
  votes: z.number(),
  comment_count: z.number(),
  language: z.string().length(2),
  available_translations: z.array(z.string().length(2)),
  genres: z.array(z.string()),
  aired_episodes: z.number(),
  images: TraktImage.optional(),
})

type TraktWatchedResponseSchemaParams = Omit<TraktUsersWatchedLoaderOptions, 'api_key' | 'id'>

export function TraktUsersWatchedResponseSchema({ type, extended }: TraktWatchedResponseSchemaParams) {
  if (type === 'movies') {
    if (hasFull(extended)) {
      return BaseTraktWatched.extend({
        movie: TraktMovieExtended,
      })
    }
    else {
      return BaseTraktWatched.extend({
        movie: TraktMovieShort,
      })
    }
  }

  if (extended === 'noseasons') {
    return BaseTraktWatched.extend({
      show: TraktShowShort,
    })
  }
  else if (extended?.includes('noseasons') && hasFull(extended)) {
    return BaseTraktWatched.extend({
      show: TraktShowExtended,
    })
  }
  else if (hasFull(extended)) {
    return BaseTraktWatched.extend({
      show: TraktShowExtended,
      seasons: z.array(TraktWatchedSeason),
    })
  }
  else {
    return BaseTraktWatched.extend({
      show: TraktShowShort,
      seasons: z.array(TraktWatchedSeason),
    })
  }
}

export function BaseTraktRating({ type }: { type: TraktUsersRatingsLoaderOptions['type'] }) {
  if (type === 'all') {
    return z.object({
      rating: z.number().min(0).max(10),
      rated_at: z.string().datetime(),
      type: z.enum(['movie', 'show', 'season', 'episode']),
    })
  }

  let _type: 'movie' | 'show' | 'season' | 'episode'

  switch (type) {
    case 'movies':
      _type = 'movie'
      break
    case 'shows':
      _type = 'show'
      break
    case 'seasons':
      _type = 'season'
      break
    case 'episodes':
      _type = 'episode'
      break
  }

  return z.object({
    rating: z.number().min(0).max(10),
    rated_at: z.string().datetime(),
    type: z.literal(_type),
  })
}

const TraktSeasonShort = z.object({
  number: z.number(),
  ids: z.object({
    trakt: z.number(),
    tvdb: z.number().nullable(),
    tmdb: z.number().nullable(),
  }),
})

const TraktSeasonExtended = TraktSeasonShort.extend({
  rating: z.number().min(0).max(10),
  votes: z.number(),
  episode_count: z.number(),
  aired_episodes: z.number(),
  title: z.string(),
  overview: z.string().nullable(),
  first_aired: z.string().datetime(),
  updated_at: z.string().datetime(),
  network: z.string().nullable(),
  original_title: z.string().nullable(),
  images: TraktImage.partial().optional(),
})

const TraktEpisodeShort = z.object({
  season: z.number(),
  number: z.number(),
  title: z.string(),
  ids: z.object({
    trakt: z.number(),
    imdb: z.string().nullable(),
    tvdb: z.number().nullable(),
    tmdb: z.number().nullable(),
  }),
})

const TraktEpisodeExtended = TraktEpisodeShort.extend({
  number_abs: z.number().nullable(),
  overview: z.string().nullable(),
  rating: z.number().min(0).max(10),
  votes: z.number(),
  comment_count: z.number(),
  first_aired: z.string().datetime(),
  updated_at: z.string().datetime(),
  available_translations: z.array(z.string().length(2)),
  runtime: z.number(),
  episode_type: z.enum(['season_finale', 'standard', 'series_premiere']),
  original_title: z.string().nullable(),
  after_credits: z.boolean(),
  during_credits: z.boolean(),
})

type TraktRatingsResponseSchemaParams = Omit<TraktUsersRatingsLoaderOptions, 'api_key' | 'id'>

export function TraktRatingsResponseSchema({ type, extended }: TraktRatingsResponseSchemaParams) {
  const movieSchema = () => {
    if (hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        movie: TraktMovieExtended,
      })
    }
    else if (hasImages(extended) && hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        movie: TraktMovieExtended,
      })
    }
    else if (hasImages(extended)) {
      return BaseTraktRating({ type }).extend({
        movie: TraktMovieShort.extend({
          images: TraktImage,
        }),
      })
    }

    return BaseTraktRating({ type }).extend({
      movie: TraktMovieShort,
    })
  }

  const showSchema = () => {
    if (hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowExtended,
      })
    }
    else if (hasImages(extended) && hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowExtended,
      })
    }
    else if (hasImages(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowShort.extend({
          images: TraktImage,
        }),
      })
    }

    return BaseTraktRating({ type }).extend({
      show: TraktShowShort,
    })
  }

  const seasonSchema = () => {
    if (hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowExtended,
        season: TraktSeasonExtended,
      })
    }
    else if (hasImages(extended) && hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowExtended,
        season: TraktSeasonExtended,
      })
    }
    else if (hasImages(extended)) {
      return BaseTraktRating({ type }).extend({
        show: TraktShowShort.extend({
          images: TraktImage,
        }),
        season: TraktSeasonShort.extend({
          images: TraktImage.partial(),
        }),
      })
    }

    return BaseTraktRating({ type }).extend({
      show: TraktShowShort,
      season: TraktSeasonShort,
    })
  }

  const episodeSchema = () => {
    if (hasFull(extended)) {
      return BaseTraktRating({ type }).extend({
        episode: TraktEpisodeExtended,
        show: TraktShowExtended,
      })
    }
    else if (hasFull(extended) && hasImages(extended)) {
      return BaseTraktRating({ type }).extend({
        episode: TraktEpisodeExtended,
        show: TraktShowExtended,
      })
    }
    else if (hasImages(extended)) {
      return BaseTraktRating({ type }).extend({
        episode: TraktEpisodeShort.extend({
          images: TraktImage,
        }),
        show: TraktShowShort.extend({
          images: TraktImage,
        }),
      })
    }

    return BaseTraktRating({ type }).extend({
      episode: TraktEpisodeShort,
      show: TraktShowShort,
    })
  }

  if (type === 'movies')
    return movieSchema()
  if (type === 'shows')
    return showSchema()
  if (type === 'seasons')
    return seasonSchema()
  if (type === 'episodes')
    return episodeSchema()

  if (type === 'all') {
    return z.union([
      movieSchema(),
      showSchema(),
      seasonSchema(),
      episodeSchema(),
    ])
  }
}
