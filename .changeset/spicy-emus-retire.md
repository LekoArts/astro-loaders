---
"@lekoarts/flickr-loader": minor
---

Add `flickrPhotosetsGetPhotosLoader()` and `flickrPhotosetsGetListWithPhotosLoader()` loaders.

#### `flickrPhotosetsGetPhotosLoader`

Get the list of photos in a photoset.

Flickr API: [`flickr.photosets.getPhotos`](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html)

##### Required options

- `username` (string)
- `photoset_id` (string)

##### Usage

```ts
import { flickrPhotosetsGetPhotosLoader } from '@lekoarts/flickr-loader'

const photosetsGetPhotos = defineCollection({
  loader: flickrPhotosetsGetPhotosLoader({
    username: 'flickr-username',
    photoset_id: '72177720313250218',
  }),
})
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
