---
"@lekoarts/flickr-loader": minor
---

Add `flickrPhotosetsGetListLoader()` loader. It returns the photosets belonging to the specified user. Flickr API: [`flickr.photosets.getList`](https://www.flickr.com/services/api/flickr.photosets.getList.html).

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
