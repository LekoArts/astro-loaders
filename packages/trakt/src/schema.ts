import type { TraktUsersWatchedLoaderOptions } from './types/loader.js'
import { z } from 'astro/zod'

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
  fanart: z.array(z.string().url()),
  poster: z.array(z.string().url()),
  logo: z.array(z.string().url()),
  clearart: z.array(z.string().url()),
  banner: z.array(z.string().url()),
  thumb: z.array(z.string().url()),
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
  rating: z.number(),
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
    if (extended === 'full') {
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
  else if (extended === 'full') {
    return BaseTraktWatched.extend({
      show: TraktShowExtended,
      seasons: z.array(TraktWatchedSeason),
    })
  }
  else if (extended?.includes('noseasons') && extended?.includes('full')) {
    return BaseTraktWatched.extend({
      show: TraktShowExtended,
    })
  }
  else {
    return BaseTraktWatched.extend({
      show: TraktShowShort,
      seasons: z.array(TraktWatchedSeason),
    })
  }
}
