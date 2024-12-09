# Astro Flickr loader

This package provides multiple Astro [Flickr](https://flickr.com/) content loader for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). Each loader corresponds to a Flickr API endpoint but isn't just a wrapper around it. The data returned from Flickr is normalized and cleaned up, so that each loader's response is similar and easy to work with.

## Prerequisites

- Astro 5 or later installed
- Your Flickr API key
  - Create an account on Flickr, go to [App Garden](https://www.flickr.com/services/apps/create/) to register an app and copy the `Key`

## Installation

```shell
npm install @lekoarts/flickr-loader
```

## Usage

Import `@lekoarts/flickr-loader` into `src/content.config.ts` and define your collections. You can import various loaders that correspond to their respective Flickr API endpoints.

You can either define the Flickr API key as an environment variable (`FLICKR_API_KEY`) or pass it to every loader with the `api_key` argument.

### `flickrPeopleGetPhotosLoader`

Return photos from the given user's photostream. Only photos visible to the calling user will be returned.

Flickr API: [`flickr.people.getPhotos`](https://www.flickr.com/services/api/flickr.people.getPhotos.html)

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
