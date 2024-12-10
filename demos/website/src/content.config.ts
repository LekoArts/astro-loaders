import { flickrPeopleGetPhotosLoader } from '@lekoarts/flickr-loader'
import { defineCollection } from 'astro:content'
import { FLICKR_USERNAME } from './constants'

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    username: FLICKR_USERNAME,
  }),
})

export const collections = {
  peopleGetPhotos,
}
