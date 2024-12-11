import { z } from 'astro/zod'

const PhotoMeta = z.object({
  height: z.number(),
  width: z.number(),
  orientation: z.enum(['landscape', 'portrait', 'square']),
  url: z.string(),
})

const imageUrls = z.object({
  'sq_75px': PhotoMeta.optional(),
  '100px': PhotoMeta.optional(),
  'sq_150px': PhotoMeta.optional(),
  '240px': PhotoMeta.optional(),
  '320px': PhotoMeta.optional(),
  '500px': PhotoMeta.optional(),
  '640px': PhotoMeta.optional(),
  '800px': PhotoMeta.optional(),
  '1024px': PhotoMeta.optional(),
  '1600px': PhotoMeta.optional(),
  '2048px': PhotoMeta.optional(),
  'original': PhotoMeta.optional(),
})

export const NormalizedResponse = z.object({
  id: z.string(),
  owner: z.string(),
})

export const PeopleGetPhotos = NormalizedResponse.extend({
  title: z.string(),
  is_public: z.boolean(),
  is_friend: z.boolean(),
  is_family: z.boolean(),
  description: z.string().optional(),
  date_last_update: z.date().optional(),
  date_taken: z.date().optional(),
  views: z.number().optional(),
  media: z.string().optional(),
  media_status: z.string().optional(),
  imageUrls,
})

export const PhotosetsGetList = NormalizedResponse.extend({
  title: z.string(),
  description: z.string().optional(),
  username: z.string(),
  primary: z.string(),
  views: z.number().optional(),
  comments: z.number().optional(),
  photos: z.number().optional(),
  videos: z.number().optional(),
  date_create: z.date().optional(),
  date_last_update: z.date().optional(),
})
