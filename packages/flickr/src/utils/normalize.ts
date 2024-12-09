import type { z } from 'astro/zod'
import type { NormalizedPhoto } from '../schema.js'
import type { FlickrPhoto } from '../types/flickr'
import { SIZES } from '../constants.js'

type Photo = z.infer<typeof NormalizedPhoto>
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
export function normalizePhoto(photo: FlickrPhoto): Photo {
  const { server, farm, secret, ...rest } = photo
  const copy = { ...rest } as Partial<FlickrPhoto>
  const output = {
    id: rest.id,
    owner: rest.owner,
    title: rest.title,
  } as Photo

  ;(Object.keys(SIZES) as SizesArray).forEach((suffix) => {
    if (Object.prototype.hasOwnProperty.call(copy, `height_${suffix}`)) {
      copy[`height_${suffix}`] = Number.parseInt(copy[`height_${suffix}`] as string, 10)
    }
    if (Object.prototype.hasOwnProperty.call(copy, `width_${suffix}`)) {
      copy[`width_${suffix}`] = Number.parseInt(copy[`width_${suffix}`] as string, 10)
    }
  })

  if (Object.prototype.hasOwnProperty.call(copy, 'ispublic')) {
    output.is_public = copy.ispublic === 1
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'isfriend')) {
    output.is_friend = copy.isfriend === 1
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'isfamily')) {
    output.is_family = copy.isfamily === 1
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'description')) {
    output.description = copy.description?._content
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'lastupdate')) {
    if (copy.lastupdate) {
      output.date_last_update = new Date(+copy.lastupdate * 1000)
    }
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'datetaken')) {
    if (copy.datetaken) {
      output.date_taken = new Date(copy.datetaken)
    }
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'views')) {
    if (copy.views) {
      output.views = Number.parseInt(copy.views, 10)
    }
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'media')) {
    output.media = copy.media
  }

  if (Object.prototype.hasOwnProperty.call(copy, 'media_status')) {
    output.media_status = copy.media_status
  }

  output.imageUrls = {}

  for (const key in copy) {
    if (Object.prototype.hasOwnProperty.call(copy, key)) {
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
        if (Object.prototype.hasOwnProperty.call(output.imageUrls, image)) {
          // @ts-expect-error - Fixme
          const element: ImageUrl = output.imageUrls[image]

          element.orientation = element.width === element.height ? `square` : element.width > element.height ? `landscape` : `portrait`
        }
      }
    }
  }

  return output
}
