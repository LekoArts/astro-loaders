import type { CollectionEntry } from 'astro:content'
import { borderColors, colors } from './constants'

type TraktWatchedMovie = CollectionEntry<'traktWatchedMovies'>
type TraktWatchedShow = CollectionEntry<'traktWatchedShows'>
type TraktRatedMovie = CollectionEntry<'traktMovieRatings'>
type TraktRatedShow = CollectionEntry<'traktShowRatings'>

/**
 * Get the last item in an array.
 * @param arr The array to get the last item from.
 * @returns The last item in the array, or undefined if the array is empty.
 *
 * @example
 * ```ts
 * const lastItem = getLastItem([1, 2, 3])
 * console.log(lastItem) // 3
 * ```
 */
export function getLastItem<T>(arr: T[]) {
  return arr[arr.length - 1]
}

/**
 * Sort an array of movie/show objects by their 'last_watched_at' property.
 * @param items The array of movie/show objects to sort.
 * @returns A new array sorted by 'last_watched_at' in descending order.
 *
 * @example
 * ```ts
 * const sorted = sortByLastWatchedAt(watchedItems)
 * console.log(sorted[0].data.last_watched_at) // Most recent watched date first
 * ```
 */
export function sortByLastWatchedAt<T extends TraktWatchedMovie | TraktWatchedShow>(items: T[]): T[] {
  return items.toSorted((a, b) => {
    const aDate = new Date(a.data.last_watched_at)
    const bDate = new Date(b.data.last_watched_at)
    return bDate.getTime() - aDate.getTime()
  })
}

/**
 * Sort an array of movie/show objects by their 'plays' property.
 * @param items The array of movie/show objects to sort.
 * @returns A new array sorted by 'plays' in descending order.
 *
 * @example
 * ```ts
 * const sorted = sortByPlays(watchedItems)
 * console.log(sorted[0].data.plays) // Highest plays first
 * ```
 */
export function sortByPlays<T extends TraktWatchedMovie | TraktWatchedShow>(items: T[]): T[] {
  return items.toSorted((a, b) => {
    return b.data.plays - a.data.plays
  })
}

/**
 * Converts and structures the user's statistics data.
 *
 * @example
 * ```ts
 * const stats = convertStats(statsEntry)
 * console.log(stats.movies.plays) // Total plays for movies
 * console.log(stats.episodes.plays) // Total plays for episodes
 * ```
 */
export function getAllTimeTotals(_stats: CollectionEntry<'traktStats'>, _lists: CollectionEntry<'traktLists'>[]) {
  const stats = _stats.data

  return {
    totals: {
      plays: stats.movies.plays + stats.episodes.plays,
      hours: Math.floor((stats.movies.minutes + stats.episodes.minutes) / 60),
      collected: stats.movies.collected + stats.shows.collected + stats.episodes.collected,
      ratings: stats.ratings.total,
      comments: stats.movies.comments + stats.shows.comments + stats.seasons.comments + stats.episodes.comments,
      lists: _lists.length + 2, // +2 for 'watchlist' and 'favorites'
    },
    shows: {
      plays: stats.episodes.plays,
      hours: Math.floor(stats.episodes.minutes / 60),
    },
    movies: {
      plays: stats.movies.plays,
      hours: Math.floor(stats.movies.minutes / 60),
    },
  }
}

/**
 * Compare a movie and show by their last watched date. Depending on the 'sort' parameter, return the latest or earliest watched item.
 *
 * @example
 * ```ts
 * const latest = compareLastWatched(show, movie, 'latest')
 * const earliest = compareLastWatched(show, movie, 'earliest')
 * ```
 */
export function compareLastWatched(a: TraktWatchedMovie | TraktWatchedShow, b: TraktWatchedMovie | TraktWatchedShow, sort: 'latest' | 'earliest') {
  const aDate = new Date(a.data.last_watched_at)
  const bDate = new Date(b.data.last_watched_at)

  if (sort === 'latest') {
    return bDate.getTime() - aDate.getTime() ? b : a
  }
  else {
    return aDate.getTime() - bDate.getTime() ? a : b
  }
}

/**
 * Type-guard if the given object is a Trakt Movie
 *
 * @example
 * ```ts
 * if (isTraktWatchedMovie(item)) {
 *   // item is a TraktWatchedMovie
 *   console.log(item.data.movie?.title)
 * }
 * ```
 */
export function isTraktWatchedMovie(item: TraktWatchedMovie | TraktWatchedShow): item is TraktWatchedMovie {
  return 'movie' in item.data
}
/**
 * Type-guard if the given object is a Trakt Show
 *
 * @example
 * ```ts
 * if (isTraktWatchedShow(item)) {
 *   // item is a TraktWatchedShow
 *   console.log(item.data.show?.title)
 * }
 * ```
 */
export function isTraktWatchedShow(item: TraktWatchedMovie | TraktWatchedShow): item is TraktWatchedShow {
  return 'show' in item.data
}

/**
 * Transform lowercase string or kebab-case string to Title Case.
 * @param str The string to transform.
 * @returns The transformed string in Title Case.
 *
 * @example
 * ```ts
 * const title = toTitleCase('hello world')
 * console.log(title) // "Hello World"
 *
 * const kebabTitle = toTitleCase('hello-world')
 * console.log(kebabTitle) // "Hello World"
 * ```
 */
export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^|\s|-)(\w)/g, match => match.toUpperCase())
    .replace(/-/g, ' ')
}

/**
 * A show/movie object contains a 'genres' property. 'genres' is an array of strings.
 * Aggregate all genres by their unique name and sort them by their count.
 *
 * @example
 * ```ts
 * const genres = aggregateGenres(watchedItems)
 * console.log(genres) // [ { name: 'Drama', count: 10 }, { name: 'Comedy', count: 5 }, ... ]
 * ```
 */
export function aggregateGenres(items: (TraktWatchedMovie | TraktWatchedShow)[]) {
  const genreMap = new Map<string, number>()

  for (const item of items) {
    const genres = isTraktWatchedMovie(item) ? item.data.movie.genres : item.data.show.genres

    for (const genre of genres) {
      const normalizedGenre = toTitleCase(genre.toLowerCase())
      genreMap.set(normalizedGenre, (genreMap.get(normalizedGenre) || 0) + 1)
    }
  }

  return Array.from(genreMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

/**
 * A show/movie object can contain a couple of properties like 'country', 'network' that are a string or number.
 * Aggregate all these properties by their unique name and sort them by their count.
 *
 * @example
 * ```ts
 * const countries = aggregateProperties(watchedItems, 'country')
 * console.log(countries) // [ { name: 'US', count: 10 }, { name: 'UK', count: 5 }, ... ]
 * ```
 */
export function aggregateProperties(items: (TraktWatchedMovie | TraktWatchedShow)[], property: 'country' | 'network') {
  const propertyMap = new Map<string, number>()

  for (const item of items) {
    // @ts-expect-error - Not all properties are guaranteed to exist on both types
    const propValue = isTraktWatchedMovie(item) ? item.data.movie?.[property] : item.data.show?.[property]
    if (!propValue)
      continue

    const values = Array.isArray(propValue) ? propValue : [propValue]
    for (const value of values) {
      propertyMap.set(value, (propertyMap.get(value) || 0) + 1)
    }
  }

  return Array.from(propertyMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

/**
 * A show/movie object contains a 'year' property. It's the release year as a number.
 * Aggregate all years by their unique value and sort them by their count. During the aggregation missing years in between the min and max year are added with a count of 0.
 *
 * @example
 * ```ts
 * const years = aggregateYears(watchedItems)
 * console.log(years) // [ { name: 2020, count: 5 }, { name: 2021, count: 10 }, ... ]
 * ```
 */
export function aggregateYears(items: (TraktWatchedMovie | TraktWatchedShow)[]) {
  const yearMap = new Map<number, number>()

  for (const item of items) {
    const year = isTraktWatchedMovie(item) ? item.data.movie.year : item.data.show.year
    if (!year)
      continue

    yearMap.set(year, (yearMap.get(year) || 0) + 1)
  }

  const minYear = Math.min(...yearMap.keys())
  const maxYear = Math.max(...yearMap.keys())

  for (let year = minYear; year <= maxYear; year++) {
    if (!yearMap.has(year)) {
      yearMap.set(year, 0)
    }
  }

  return Array.from(yearMap.entries())
    .map(([year, count]) => ({ x: year, y: count }))
    .sort((a, b) => a.x - b.x)
}

// Helper function to calculate adjusted percentage for bar chart
export function calculateAdjustedPercentage(genres: any[], genreCount: number): number {
  const totalCount = genres.reduce((sum: number, g: any) => sum + g.count, 0)
  const minWidth = 100 / genres.length * 0.9
  const rawPercentage = (genreCount / totalCount) * 100
  return Math.max(minWidth, rawPercentage * 0.2 + (100 / genres.length) * 0.7)
}

export function getRandomColor(index: number): { colorClass: string, borderClass: string } {
  return {
    colorClass: colors[index % colors.length],
    borderClass: borderColors[index % borderColors.length],
  }
}

/**
 * Sort an array of movie/show objects by their 'rating' property.
 * @param items The array of movie/show objects to sort.
 * @returns A new array sorted by 'rating' in descending order.
 *
 * @example
 * ```ts
 * const sorted = sortByRating(watchedItems)
 * console.log(sorted[0].data.rating) // Highest rating first
 * ```
 */
export function sortByRating<T extends TraktRatedMovie | TraktRatedShow>(items: T[]) {
  return [...items].sort((a, b) => (b.data.rating || 0) - (a.data.rating || 0))
}

const DICT_RATING: Record<number, string> = {
  1: 'Weak',
  2: 'Terrible',
  3: 'Bad',
  4: 'Poor',
  5: 'Meh',
  6: 'Fair',
  7: 'Good',
  8: 'Great',
  9: 'Superb',
  10: 'Totally Ninja!',
}

/**
 * A show/movie object contains a 'rating' property. It's the rating as a number.
 * Aggregate all ratings by their unique value and sort them by their count. During the aggregation missing ratings in between the min and max rating are added with a count of 0.
 *
 * @example
 * ```ts
 * const ratings = aggregateRatings(watchedItems)
 * console.log(ratings) // [ { name: 5, count: 5 }, { name: 6, count: 10 }, ... ]
 * ```
 */
export function aggregateRatings(items: (TraktRatedMovie | TraktRatedShow)[]) {
  const ratingMap = new Map<number, number>()

  for (const item of items) {
    const rating = item.data.rating
    if (!rating)
      continue

    ratingMap.set(rating, (ratingMap.get(rating) || 0) + 1)
  }

  const minRating = Math.min(...ratingMap.keys())
  const maxRating = Math.max(...ratingMap.keys())

  for (let rating = minRating; rating <= maxRating; rating++) {
    if (!ratingMap.has(rating)) {
      ratingMap.set(rating, 0)
    }
  }

  return Array.from(ratingMap.entries())
    .map(([rating, count]) => ({ name: `${rating} - ${DICT_RATING[rating]}`, count, rating }))
    .sort((a, b) => a.rating - b.rating)
}
