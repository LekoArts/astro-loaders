/**
 * ---------------
 * CONSTANTS
 * ---------------
 */

const SIZE_CODE = {
  Thumb: 'url_t',
  Square75: 'url_sq',
  Square150: 'url_q',
  Small240: 'url_s',
  Small320: 'url_n',
  Medium500: 'url_m',
  Medium640: 'url_z',
  Medium800: 'url_c',
  Large1024: 'url_l',
  Large1600: 'url_h',
  Large2048: 'url_k',
  Original: 'url_o',
} as const

interface Content {
  _content: string
}

/**
 * ---------------
 * INPUT
 * ---------------
 */

/**
 * Query parameters you can pass to the request. Check the Flickr API documentation for more details.
 */
export interface GetPhotosQueryParams {
  content_types?: string
  safe_search?: string
  min_upload_date?: string
  max_upload_date?: string
  min_taken_date?: string
  max_taken_date?: string
  privacy_filter?: string
  extras?: string
  per_page?: string
  page?: string
}

/**
 * ---------------
 * OUTPUT
 * ---------------
 */

/**
 * A minimal photo object from Flickr's API.
 */
interface FlickrMinimalResponse {
  id: string
  owner: string
  secret: string
  server: string
  farm: number
  title: string | { _content: string }
  ispublic: number
  isfriend: number
  isfamily: number
}

interface SizeInfo {
  [SIZE_CODE.Square75]?: string
  height_sq?: number | string
  width_sq?: number | string
  [SIZE_CODE.Thumb]?: string
  height_t?: number | string
  width_t?: number | string
  [SIZE_CODE.Small240]?: string
  height_s?: number | string
  width_s?: number | string
  [SIZE_CODE.Square150]?: string
  height_q?: number | string
  width_q?: number | string
  [SIZE_CODE.Medium500]?: string
  height_m?: number | string
  width_m?: number | string
  [SIZE_CODE.Small320]?: string
  height_n?: number | string
  width_n?: number | string
  [SIZE_CODE.Medium640]?: string
  height_z?: number | string
  width_z?: number | string
  [SIZE_CODE.Medium800]?: string
  height_c?: number | string
  width_c?: number | string
  [SIZE_CODE.Large1024]?: string
  height_l?: number | string
  width_l?: number | string
  [SIZE_CODE.Large1600]?: string
  height_h?: number | string
  width_h?: number | string
  [SIZE_CODE.Large2048]?: string
  height_k?: number | string
  width_k?: number | string
  [SIZE_CODE.Original]?: string
  height_o?: number | string
  width_o?: number | string
}

interface PhotosetsGetListEntry extends FlickrMinimalResponse {
  username: string
  primary: string
  count_views: string
  count_comments: string
  count_photos: number
  count_videos: number
  description: Content
  can_comment: number
  date_create: string
  date_update: string
  sorting_option_id: string
  photos: number
  videos: number
  visibility_can_see_set: number
  needs_interstitial: number
}

interface GetPhotosPhoto extends FlickrMinimalResponse, SizeInfo {
  description?: Content
  lastupdate?: string
  datetaken?: string
  datetakengranularity?: number
  datetakenunknown?: string
  views?: string
  media?: string
  media_status?: string
}

export interface FlickrResponse extends Partial<GetPhotosPhoto>, Partial<PhotosetsGetListEntry> {}

export interface GetPhotosResponse {
  photos: {
    page: number
    pages: number
    perpage: number
    total: number
    photo: GetPhotosPhoto[]
  }
}

export interface PhotosetsGetListResponse {
  photosets: {
    page: number
    pages: number
    perpage: number
    total: string
    photoset: PhotosetsGetListEntry[]
  }
}

export interface PhotosetsGetPhotosResponse {
  photoset: {
    id: string
    primary: string
    owner: string
    ownername: string
    page: number
    per_page: number
    perpage: number
    pages: number
    title: string
    total: number
    photo: GetPhotosPhoto[]
  }
}
