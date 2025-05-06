import { AstroError } from 'astro/errors'

export function missingApiKey(): void {
  throw new AstroError('Missing Flickr API key. Define the FLICKR_API_KEY environment variable or pass it as an option.')
}
