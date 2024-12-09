# Astro Flickr loader

This package provides an Astro Flickr content loader for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). TODO

## Prerequisites

- Astro 5 or later installed
- A Flickr ID
  - You can get it by visiting the profile and extracting it from the URL: With `https://www.flickr.com/people/192975453@N04/` the user ID is `192975453@N04`
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
    user_id: 'user-id',
  }),
})

export const collections = {
  peopleGetPhotos,
}
```
