/**
 * Convert a string to genitive case.
 */
export function toGenitive(str: string): string {
  // Simple rules for genitive case in English
  if (str.endsWith('s')) {
    return `${str}'`
  }
  else {
    return `${str}'s`
  }
}
