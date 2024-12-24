/* eslint-disable node/prefer-global/process */
import { flickrPeopleGetPhotosLoader, flickrPhotosetsGetListLoader, flickrPhotosetsGetListWithPhotosLoader, flickrPhotosetsGetPhotosLoader } from '@lekoarts/flickr-loader'
import { defineCollection } from 'astro:content'
import { FLICKR_USERNAME } from './constants'

const api_key = import.meta.env.FLICKR_API_KEY || process.env.FLICKR_API_KEY

const peopleGetPhotos = defineCollection({
  loader: flickrPeopleGetPhotosLoader({
    username: FLICKR_USERNAME,
    api_key,
  }),
})

const photosetsGetList = defineCollection({
  loader: flickrPhotosetsGetListLoader({
    username: FLICKR_USERNAME,
    api_key,
  }),
})

const photosetsGetPhotos = defineCollection({
  loader: flickrPhotosetsGetPhotosLoader({
    username: FLICKR_USERNAME,
    photoset_id: '72177720313250218',
    api_key,
  }),
})

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: FLICKR_USERNAME,
    in: ['72177720317993398', '72177720317980095'],
    api_key,
  }),
})

export const collections = {
  peopleGetPhotos,
  photosetsGetList,
  photosetsGetPhotos,
  photosetsGetListWithPhotos,
}
