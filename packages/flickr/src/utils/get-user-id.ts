import type { Flickr } from 'flickr-sdk'

interface FindByUsernameResponse {
  user: {
    id: string
    nsid: string
    username: {
      _content: string
    }
  }
}

export async function getUserIdFromUsername(username: string, flickr: Flickr) {
  const res = await flickr('flickr.people.findByUsername', {
    username,
  }) as FindByUsernameResponse

  return res.user.nsid
}
