import { flickrPeopleGetPhotosLoader } from '@lekoarts/flickr-loader'
import { defineCollection } from 'astro:content'
import { FLICKR_USER_ID } from './constants'

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    user_id: FLICKR_USER_ID,
  }),
})

export const collections = {
  peopleGetPhotos,
}
