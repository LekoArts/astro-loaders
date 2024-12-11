# @lekoarts/flickr-loader

## 1.1.0

### Minor Changes

- [#5](https://github.com/LekoArts/astro-loaders/pull/5) [`75d239b`](https://github.com/LekoArts/astro-loaders/commit/75d239ba438b2e7dfb288d8d576925b1aa56d147) Thanks [@LekoArts](https://github.com/LekoArts)! - Add `flickrPhotosetsGetListLoader()` loader. It returns the photosets belonging to the specified user. Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html).

  Required options:

  - `username`

  Usage:

  ```ts
  import { flickrPhotosetsGetListLoader } from "@lekoarts/flickr-loader";

  const photosetsGetList = defineCollection({
    loader: flickrPhotosetsGetListLoader({
      username: "flickr-username",
    }),
  });
  ```

## 1.0.1

### Patch Changes

- [#2](https://github.com/LekoArts/astro-loaders/pull/2) [`741d8ba`](https://github.com/LekoArts/astro-loaders/commit/741d8ba4bde0030b33de0b7b7aef1895da06c06f) Thanks [@LekoArts](https://github.com/LekoArts)! - Swap user_id with username
