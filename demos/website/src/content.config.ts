import { clerkLoader } from '@lekoarts/clerk-loader'
import { flickrPeopleGetPhotosLoader, flickrPhotosetsGetListLoader, flickrPhotosetsGetListWithPhotosLoader, flickrPhotosetsGetPhotosLoader } from '@lekoarts/flickr-loader'
import { plausibleLoader } from '@lekoarts/plausible-loader'
import { traktUsersStatsLoader } from '@lekoarts/trakt-loader'
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
    photoset_id: '72177720329881463',
  }),
})

const photosetsGetListWithPhotos = defineCollection({
  loader: flickrPhotosetsGetListWithPhotosLoader({
    username: FLICKR_USERNAME,
    in: ['72177720329881458', '72177720329881463'],
  }),
})

const clerk = defineCollection({
  loader: clerkLoader({
    method: {
      name: 'users.getUserList',
    },
  }),
})

const plausible = defineCollection({
  loader: plausibleLoader({
    query: {
      site_id: 'lekoarts.de',
      metrics: ['visitors'],
      date_range: ['2024-08-01', '2024-08-15'],
    },
  }),
})

const traktStats = defineCollection({
  loader: traktUsersStatsLoader({
    id: 'arsaurea',
  }),
})

export const collections = {
  peopleGetPhotos,
  photosetsGetList,
  photosetsGetPhotos,
  photosetsGetListWithPhotos,
  clerk,
  plausible,
  traktStats,
}
