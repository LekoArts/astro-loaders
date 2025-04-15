# @lekoarts/flickr-loader

## 1.2.4

### Patch Changes

- [#70](https://github.com/LekoArts/astro-loaders/pull/70) [`f59b4ec`](https://github.com/LekoArts/astro-loaders/commit/f59b4ecb4ed91e3b6f56944372c1864d93aff1cf) Thanks [@LekoArts](https://github.com/LekoArts)! - Add all available image sizes to `extras` query parameter (`url_l` etc.). Previously only a subset was added which caused not all available sizes to be queryable.

## 1.2.3

### Patch Changes

- [`9e3eed1`](https://github.com/LekoArts/astro-loaders/commit/9e3eed1acf0c5ed76133f678589c019d34d1e213) Thanks [@LekoArts](https://github.com/LekoArts)! - Improve README by adding other package managers to install instructions

## 1.2.2

### Patch Changes

- [#15](https://github.com/LekoArts/astro-loaders/pull/15) [`003756a`](https://github.com/LekoArts/astro-loaders/commit/003756ac7f107d9d8eb04a6cb101531ee2bc7f37) Thanks [@LekoArts](https://github.com/LekoArts)! - Adjust TypeScript types to more accurately represent the `queryParams` you can pass as an option to the loaders.

  Internally the `flickr-sdk` has been replaced with custom fetch calls making the package leaner.

## 1.2.1

### Patch Changes

- [#11](https://github.com/LekoArts/astro-loaders/pull/11) [`b6bee0b`](https://github.com/LekoArts/astro-loaders/commit/b6bee0b09647388ceaeac04e8237af29f962c40d) Thanks [@LekoArts](https://github.com/LekoArts)! - Internal change: Use generateDigest

## 1.2.0

### Minor Changes

- [#7](https://github.com/LekoArts/astro-loaders/pull/7) [`c05cafa`](https://github.com/LekoArts/astro-loaders/commit/c05cafa9b2be79c7696398cd28b8425f6691757a) Thanks [@LekoArts](https://github.com/LekoArts)! - Add `flickrPhotosetsGetPhotosLoader()` and `flickrPhotosetsGetListWithPhotosLoader()` loaders.

  #### `flickrPhotosetsGetPhotosLoader`

  Get the list of photos in a photoset.

  Flickr API: [`flickr.photosets.getPhotos`](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)

  ##### Required options

  - `username` (string)
  - `photoset_id` (string)

  ##### Usage

  ```ts
  import { flickrPhotosetsGetPhotosLoader } from "@lekoarts/flickr-loader";

  const photosetsGetPhotos = defineCollection({
    loader: flickrPhotosetsGetPhotosLoader({
      username: "flickr-username",
      photoset_id: "72177720313250218",
    }),
  });
  ```

  #### `flickrPhotosetsGetListWithPhotosLoader`

  This loader combines the `flickrPhotosetsGetListLoader()` and `flickrPhotosetsGetPhotosLoader()` loaders to get the most out of photosets. You'll get back the photosets and their list of photos.

  Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html) + [`flickr.photosets.getPhotos`](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)

  ##### Required options

  - `username` (string)

  ##### Optional options

  - `in` (string[]) - Array of photoset IDs to match against
  - `nin` (string[]) - Array of photoset IDs to exclude

  ##### Usage

  Fetching all photosets a user has.

  ```ts
  import { flickrPhotosetsGetListWithPhotosLoader } from "@lekoarts/flickr-loader";

  const photosetsGetListWithPhotos = defineCollection({
    loader: flickrPhotosetsGetListWithPhotosLoader({
      username: "flickr-username",
    }),
  });
  ```

  Only fetching the photosets `123` and `456`.

  ```ts
  import { flickrPhotosetsGetListWithPhotosLoader } from "@lekoarts/flickr-loader";

  const photosetsGetListWithPhotos = defineCollection({
    loader: flickrPhotosetsGetListWithPhotosLoader({
      username: "flickr-username",
      in: ["123", "456"],
    }),
  });
  ```

  Excluding the photosets `789` and `001`.

  ```ts
  import { flickrPhotosetsGetListWithPhotosLoader } from "@lekoarts/flickr-loader";

  const photosetsGetListWithPhotos = defineCollection({
    loader: flickrPhotosetsGetListWithPhotosLoader({
      username: "flickr-username",
      nin: ["789", "001"],
    }),
  });
  ```

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
