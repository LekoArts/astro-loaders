# Astro Flickr loader

This package provides multiple [Flickr](https://flickr.com/) content loaders for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). Most loaders correspond to a single Flickr API endpoint, however some loaders call multiple one for better results. The data returned from Flickr is normalized and cleaned up, so that each loader's response is similar and easy to work with.

**Want to see an overview of all my loaders? Visit [astro-loaders.lekoarts.de](https://astro-loaders.lekoarts.de) ✨**

<!-- automd:badges license -->

[![npm version](https://img.shields.io/npm/v/@lekoarts/flickr-loader)](https://npmjs.com/package/@lekoarts/flickr-loader)
[![npm downloads](https://img.shields.io/npm/dm/@lekoarts/flickr-loader)](https://npm.chart.dev/@lekoarts/flickr-loader)
[![license](https://img.shields.io/github/license/LekoArts/astro-loaders)](https://github.com/LekoArts/astro-loaders/blob/main/LICENSE)

<!-- /automd -->

## Prerequisites

- Astro 5 or later installed
- A Flickr API key
  - Create an account on Flickr, go to [App Garden](https://www.flickr.com/services/apps/create/) to register an app, and copy the `Key`

## Installation

<!-- automd:pm-install separate auto=false -->

```sh
# npm
npm install @lekoarts/flickr-loader
```

```sh
# yarn
yarn add @lekoarts/flickr-loader
```

```sh
# pnpm
pnpm install @lekoarts/flickr-loader
```

<!-- /automd -->

## Usage

Import `@lekoarts/flickr-loader` into `src/content.config.ts` and define your collections. You can import various loaders that correspond to their respective Flickr API endpoints.

**Important:** You need to either define the Flickr API key as an environment variable (`FLICKR_API_KEY`) or pass it to every loader with the `api_key` argument.

### `flickrPeopleGetPhotosLoader`

Return photos from the given user's photostream. Only photos visible to the calling user will be returned.

Flickr API: [`flickr.people.getPhotos`](https://www.flickr.com/services/api/flickr.people.getPhotos.html)

#### Required options

- `username` (string)

#### Usage

```ts
import { flickrPeopleGetPhotosLoader } from '@lekoarts/flickr-loader'

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    username: 'flickr-username',
  }),
})
```

### `flickrPhotosetsGetListLoader`

Returns the photosets belonging to the specified user.

Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html)

#### Required options

- `username` (string)

#### Usage

```ts
import { flickrPhotosetsGetListLoader } from '@lekoarts/flickr-loader'

const photosetsGetList = defineCollection({
  loader: flickrPhotosetsGetListLoader({
    username: 'flickr-username',
  }),
})
```

### `flickrPhotosetsGetPhotosLoader`

Get the list of photos in a photoset.

Flickr API: [`flickr.photosets.getPhotos`](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)

#### Required options

- `username` (string)
- `photoset_id` (string)

#### Usage

```ts
import { flickrPhotosetsGetPhotosLoader } from '@lekoarts/flickr-loader'

const photosetsGetPhotos = defineCollection({
  loader: flickrPhotosetsGetPhotosLoader({
    username: 'flickr-username',
    photoset_id: '72177720313250218',
  }),
})
```

### `flickrPhotosetsGetListWithPhotosLoader`

This loader combines the `flickrPhotosetsGetListLoader()` and `flickrPhotosetsGetPhotosLoader()` loaders to get the most out of photosets. You'll get back the photosets and their list of photos.

Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html) + [`flickr.photosets.getPhotos`](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)

#### Required options

- `username` (string)

#### Optional options

- `in` (string[]) - Array of photoset IDs to match against
- `nin` (string[]) - Array of photoset IDs to exclude

#### Usage

Fetching all photosets a user has.

```ts
import { flickrPhotosetsGetListWithPhotosLoader } from '@lekoarts/flickr-loader'

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: 'flickr-username',
  }),
})
```

Only fetching the photosets `123` and `456`.

```ts
import { flickrPhotosetsGetListWithPhotosLoader } from '@lekoarts/flickr-loader'

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: 'flickr-username',
    in: ['123', '456'],
  }),
})
```

Excluding the photosets `789` and `001`.

```ts
import { flickrPhotosetsGetListWithPhotosLoader } from '@lekoarts/flickr-loader'

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: 'flickr-username',
    nin: ['789', '001'],
  }),
})
```
