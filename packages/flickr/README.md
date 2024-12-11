# Astro Flickr loader

This package provides multiple [Flickr](https://flickr.com/) content loaders for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). Most loaders correspond to a single Flickr API endpoint, however some loaders call multiple one for better results. The data returned from Flickr is normalized and cleaned up, so that each loader's response is similar and easy to work with.

**Want to see an overview of all my loaders? Visit [astro-loaders.lekoarts.de](https://astro-loaders.lekoarts.de) ✨**

## Prerequisites

- Astro 5 or later installed
- A Flickr API key
  - Create an account on Flickr, go to [App Garden](https://www.flickr.com/services/apps/create/) to register an app, and copy the `Key`

## Installation

```shell
npm install @lekoarts/flickr-loader
```

## Usage

Import `@lekoarts/flickr-loader` into `src/content.config.ts` and define your collections. You can import various loaders that correspond to their respective Flickr API endpoints.

**Important:** You need to either define the Flickr API key as an environment variable (`FLICKR_API_KEY`) or pass it to every loader with the `api_key` argument.

### `flickrPeopleGetPhotosLoader`

Return photos from the given user's photostream. Only photos visible to the calling user will be returned.

Flickr API: [`flickr.people.getPhotos`](https://www.flickr.com/services/api/flickr.people.getPhotos.html)

Required options:

- `username`

Usage:

```ts
import { flickrPeopleGetPhotosLoader } from '@lekoarts/flickr-loader'
import { defineCollection } from 'astro:content'

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    username: 'flickr-username',
  }),
})

export const collections = {
  peopleGetPhotos,
}
```

### `flickrPhotosetsGetListLoader`

Returns the photosets belonging to the specified user.

Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html)

Required options:

- `username`

Usage:

```ts
import { flickrPhotosetsGetListLoader } from '@lekoarts/flickr-loader'

const photosetsGetList = defineCollection({
  loader: flickrPhotosetsGetListLoader({
    username: 'flickr-username',
  }),
})
```
