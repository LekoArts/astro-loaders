import type { Flickr } from './ky.js'

export async function getUserIdFromUsername(username: string, flickr: Flickr) {
  const res = await flickr('flickr.people.findByUsername', {
    username,
  })

  return res.user.nsid
}
