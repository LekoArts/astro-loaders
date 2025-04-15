export const SIZES = {
  sq: 'sq_75px',
  q: 'sq_150px',
  t: '100px',
  s: '240px',
  n: '320px',
  m: '500px',
  z: '640px',
  c: '800px',
  l: '1024px',
  h: '1600px',
  k: '2048px',
  o: 'original',
} as const

const SIZES_AS_EXTRA_STRING = Object.keys(SIZES).map(k => `url_${k}`).join(',')

export const DEFAULT_OPTIONS = {
  extras: `description,last_update,date_taken,media,views,original_format,${SIZES_AS_EXTRA_STRING}`,
  per_page: '300',
}

export const BASE_URL = 'https://api.flickr.com/services/rest/'
