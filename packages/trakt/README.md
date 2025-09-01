# Astro Trakt.tv loader

This package provides a [Trakt.tv](https://trakt.tv) content loader for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). The content loaders correspond to specific [Trakt API endpoints](https://trakt.docs.apiary.io/).

**Want to see an overview of all my loaders? Visit [astro-loaders.lekoarts.de](https://astro-loaders.lekoarts.de) ✨**

<!-- automd:badges license -->

[![npm version](https://img.shields.io/npm/v/@lekoarts/trakt-loader)](https://npmjs.com/package/@lekoarts/trakt-loader)
[![npm downloads](https://img.shields.io/npm/dm/@lekoarts/trakt-loader)](https://npm.chart.dev/@lekoarts/trakt-loader)
[![license](https://img.shields.io/github/license/LekoArts/astro-loaders)](https://github.com/LekoArts/astro-loaders/blob/main/LICENSE)

<!-- /automd -->

## Prerequisites

- Astro 5 or later installed
- A Trakt.tv API key
  - Go to your [Trakt Applications](https://trakt.tv/oauth/applications) page and create a new application. The **Client ID** is your API key.

## Installation

<!-- automd:pm-install separate auto=false -->

```sh
# npm
npm install @lekoarts/trakt-loader
```

```sh
# yarn
yarn add @lekoarts/trakt-loader
```

```sh
# pnpm
pnpm install @lekoarts/trakt-loader
```

<!-- /automd -->

## Usage

Import `@lekoarts/trakt-loader` into `src/content.config.ts` and define your collections. You can import various loaders that correspond to their respective Trakt API endpoints.

**Important:** You need to either define the Trakt API key as an environment variable (`TRAKT_API_KEY`) or pass it as the `api_key` option.

### `traktUsersListsLoader`

Returns all personal lists for a user.

#### Required options

- `id` (string): The Trakt username or slug.

#### Usage

```ts
import { traktUsersListsLoader } from '@lekoarts/trakt-loader'

const usersLists = defineCollection({
  loader: traktUsersListsLoader({
    id: 'trakt-username',
  }),
})
```

### `traktUsersRatingsLoader`

Get a user's ratings filtered by type. You can optionally filter for a specific rating between 1 and 10. Send a comma separated string for rating if you need multiple ratings.

#### Required options

- `id` (string): The Trakt username or slug.
- `type` (string): One of `movies`, `shows`, `seasons`, `episodes`, or `all`.

#### Optional options

- `rating` (string): Filter for a specific rating (1-10 or comma-separated).
- `extended` (string | string[]): Request additional fields.

#### Usage

Fetching all movie ratings for a user:

```ts
import { traktUsersRatingsLoader } from '@lekoarts/trakt-loader'

const usersRatings = defineCollection({
  loader: traktUsersRatingsLoader({
    id: 'trakt-username',
    type: 'movies',
  }),
})
```

Fetching only 10-star show ratings with extended info:

```ts
import { traktUsersRatingsLoader } from '@lekoarts/trakt-loader'

const usersRatings = defineCollection({
  loader: traktUsersRatingsLoader({
    id: 'trakt-username',
    type: 'shows',
    rating: 10,
    extended: ['full'],
  }),
})
```

### `traktUsersStatsLoader`

Returns stats about the movies, shows, and episodes a user has watched, collected, and rated.

#### Required options

- `id` (string): The Trakt username or slug.

#### Usage

```ts
import { traktUsersStatsLoader } from '@lekoarts/trakt-loader'

const usersStats = defineCollection({
  loader: traktUsersStatsLoader({
    id: 'trakt-username',
  }),
})
```

### `traktUsersWatchedLoader`

Returns all movies or shows a user has watched sorted by most plays.

#### Required options

- `id` (string): The Trakt username or slug.
- `type` (string): Either `movies` or `shows`.

#### Optional options

- `extended` (string | string[]): Request additional fields.

#### Usage

Fetching all watched movies:

```ts
import { traktUsersWatchedLoader } from '@lekoarts/trakt-loader'

const usersWatched = defineCollection({
  loader: traktUsersWatchedLoader({
    id: 'trakt-username',
    type: 'movies',
  }),
})
```

Fetching all watched shows with extended info:

```ts
import { traktUsersWatchedLoader } from '@lekoarts/trakt-loader'

const usersWatched = defineCollection({
  loader: traktUsersWatchedLoader({
    id: 'trakt-username',
    type: 'shows',
    extended: ['full'],
  }),
})
```
