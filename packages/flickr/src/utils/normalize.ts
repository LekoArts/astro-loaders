import type { z } from 'astro/zod'
import type { PeopleGetPhotos, PhotosetsGetList } from '../schema.js'
import type { FlickrResponse } from '../types/flickr.js'
import { SIZES } from '../constants.js'

type Res = z.infer<typeof PeopleGetPhotos> & z.infer<typeof PhotosetsGetList>
type SizesArray = Array<keyof typeof SIZES>
type SizesUnion = keyof typeof SIZES

interface ImageUrl {
  url: string
  height: number
  width: number
  orientation: 'landscape' | 'portrait' | 'square'
}

/**
 * The responses you get back from Flickr's API are a mess. They mix naming conventions, different data types for the same category, and so on. This function tries to normalize the data a bit.
 */
export function normalize(res: FlickrResponse): Res {
  const { server, farm, secret, ...rest } = res
  const copy = { ...rest } as Partial<FlickrResponse>
  const output = {
    id: rest.id,
  } as Res

  if (Object.hasOwn(copy, 'owner')) {
    if (typeof copy.owner !== 'undefined') {
      output.owner = copy.owner
    }
  }

  ;(Object.keys(SIZES) as SizesArray).forEach((suffix) => {
    if (Object.hasOwn(copy, `height_${suffix}`)) {
      copy[`height_${suffix}`] = Number.parseInt(copy[`height_${suffix}`] as string, 10)
    }
    if (Object.hasOwn(copy, `width_${suffix}`)) {
      copy[`width_${suffix}`] = Number.parseInt(copy[`width_${suffix}`] as string, 10)
    }
  })

  if (Object.hasOwn(copy, 'ispublic')) {
    output.is_public = copy.ispublic === 1
  }

  if (Object.hasOwn(copy, 'isfriend')) {
    output.is_friend = copy.isfriend === 1
  }

  if (Object.hasOwn(copy, 'isfamily')) {
    output.is_family = copy.isfamily === 1
  }

  if (Object.hasOwn(copy, 'description')) {
    output.description = copy.description?._content
  }

  if (Object.hasOwn(copy, 'lastupdate')) {
    if (copy.lastupdate) {
      output.date_last_update = new Date(+copy.lastupdate * 1000)
    }
  }

  if (Object.hasOwn(copy, 'datetaken')) {
    if (copy.datetaken) {
      output.date_taken = new Date(copy.datetaken)
    }
  }

  if (Object.hasOwn(copy, 'views')) {
    if (typeof copy.views !== 'undefined') {
      output.views = Number.parseInt(copy.views, 10)
    }
  }

  if (Object.hasOwn(copy, 'media')) {
    output.media = copy.media
  }

  if (Object.hasOwn(copy, 'media_status')) {
    output.media_status = copy.media_status
  }

  if (Object.hasOwn(copy, 'title')) {
    if (typeof copy.title === 'string') {
      output.title = copy.title
    }
    else if (copy.title?._content) {
      output.title = copy.title._content
    }
  }

  if (Object.hasOwn(copy, 'username')) {
    output.username = copy.username!
  }

  if (Object.hasOwn(copy, 'primary')) {
    output.primary = copy.primary!
  }

  if (Object.hasOwn(copy, 'count_views')) {
    if (typeof copy.count_views !== 'undefined') {
      output.views = Number.parseInt(copy.count_views, 10)
    }
  }

  if (Object.hasOwn(copy, 'count_comments')) {
    if (copy.count_comments) {
      output.comments = Number.parseInt(copy.count_comments, 10)
    }
  }

  if (Object.hasOwn(copy, 'count_photos')) {
    if (typeof copy.count_photos !== 'undefined') {
      output.photos = copy.count_photos
    }
  }

  if (Object.hasOwn(copy, 'count_videos')) {
    if (typeof copy.count_videos !== 'undefined') {
      output.videos = copy.count_videos
    }
  }

  if (Object.hasOwn(copy, 'date_create')) {
    if (copy.date_create) {
      output.date_create = new Date(+copy.date_create * 1000)
    }
  }

  if (Object.hasOwn(copy, 'date_update')) {
    if (copy.date_update) {
      output.date_last_update = new Date(+copy.date_update * 1000)
    }
  }

  const hasImageUrls = Object.keys(copy).some(key => key.startsWith('url_'))

  if (!hasImageUrls) {
    // Early return so we don't have to create the imageUrls object
    return output
  }

  output.imageUrls = {}

  for (const key in copy) {
    if (Object.hasOwn(copy, key)) {
      const firstElem = key.toString().split(`_`).shift()
      const lastElem = key.toString().split(`_`).pop() as SizesUnion

      if (firstElem && lastElem && (Object.keys(SIZES) as Array<keyof typeof SIZES>).includes(lastElem)) {
        const sizeKey = SIZES[lastElem]
        // @ts-expect-error - Fixme
        const newElem = firstElem === `url` ? { [firstElem]: copy[key] } : { [firstElem]: copy[key] }
        // @ts-expect-error - Fixme
        output.imageUrls[sizeKey] = { ...output.imageUrls[sizeKey], ...newElem }
      }

      for (const image in output.imageUrls) {
        if (Object.hasOwn(output.imageUrls, image)) {
          // @ts-expect-error - Fixme
          const element: ImageUrl = output.imageUrls[image]

          element.orientation = element.width === element.height ? `square` : element.width > element.height ? `landscape` : `portrait`
        }
      }
    }
  }

  return output
}
