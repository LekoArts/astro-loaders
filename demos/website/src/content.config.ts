import { flickrPeopleGetPhotosLoader, flickrPhotosetsGetListLoader, flickrPhotosetsGetListWithPhotosLoader, flickrPhotosetsGetPhotosLoader } from '@lekoarts/flickr-loader'
import { defineCollection } from 'astro:content'
import { FLICKR_USERNAME } from './constants'

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    username: FLICKR_USERNAME,
  }),
})

const photosetsGetList = defineCollection({
  loader: flickrPhotosetsGetListLoader({
    username: FLICKR_USERNAME,
  }),
})

const photosetsGetPhotos = defineCollection({
  loader: flickrPhotosetsGetPhotosLoader({
    username: FLICKR_USERNAME,
    photoset_id: '72177720313250218',
  }),
})

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: FLICKR_USERNAME,
    nin: ['72177720300732809', '72177720300725772'],
  }),
})

export const collections = {
  peopleGetPhotos,
  photosetsGetList,
  photosetsGetPhotos,
  photosetsGetListWithPhotos,
}
