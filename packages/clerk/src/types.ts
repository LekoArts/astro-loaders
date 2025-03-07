import type { ClerkClient, ClerkOptions } from '@clerk/backend'
import type { Get, Paths } from 'type-fest'

/**
 * It doesn't make sense to allow all available methods of Clerk's backend API to be called since only a subset of them are useful in the context of a static site. Only `GET` methods should be allowed.
 *
 * This interface defines the methods that are allowed to be called by the Clerk loader.
 */
export interface PublicLoaderAPI {
  users: {
    getUserList: ClerkClient['users']['getUserList']
    getUser: ClerkClient['users']['getUser']
    getCount: ClerkClient['users']['getCount']
    getOrganizationMembershipList: ClerkClient['users']['getOrganizationMembershipList']
  }
  organizations: {
    getOrganization: ClerkClient['organizations']['getOrganization']
    getOrganizationList: ClerkClient['organizations']['getOrganizationList']
    getOrganizationMembershipList: ClerkClient['organizations']['getOrganizationMembershipList']
    getOrganizationInvitationList: ClerkClient['organizations']['getOrganizationInvitationList']
  }
  invitations: {
    getInvitationList: ClerkClient['invitations']['getInvitationList']
  }
  emailAddresses: {
    getEmailAddress: ClerkClient['emailAddresses']['getEmailAddress']
  }
  phoneNumbers: {
    getPhoneNumber: ClerkClient['phoneNumbers']['getPhoneNumber']
  }
  samlConnections: {
    getSamlConnectionList: ClerkClient['samlConnections']['getSamlConnectionList']
    getSamlConnection: ClerkClient['samlConnections']['getSamlConnection']
  }
}

/**
 * Extract the function parameters from the method name inside PublicLoaderAPI.
 * @example
 * type Params = GetNestedMethodParams<'users.getUser'>
 */
export type GetNestedMethodParams<Path extends PathsAutocomplete> = Parameters<Get<PublicLoaderAPI, Path>>[0]

/**
 * Extract the return type from the method name inside PublicLoaderAPI.
 * @example
 * type ReturnType = GetNestedReturnType<'users.getUser'>
 */
export type GetNestedReturnType<Path extends PathsAutocomplete> = Awaited<ReturnType<Get<PublicLoaderAPI, Path>>>

/**
 * Extract the namespace and method name from the method name.
 * @example
 * type NamespaceAndMethod = GetNamespaceAndMethod<'users.getUser'>
 * // ['users', 'getUser']
 */
export type GetNamespaceAndMethod<MethodName extends PathsAutocomplete> = MethodName extends `${infer Namespace}.${infer Method}`
  ? [Namespace, Method]
  : never

/**
 * Union of all available method names as dot notation path
 */
export type PathsAutocomplete = Paths<PublicLoaderAPI, { leavesOnly: true }>

export interface PaginatedLike {
  data: Array<{
    id: string
    createdAt: number
    updatedAt: number
    _raw: {
      id: string
      created_at: number
      updated_at: number
      [key: string]: unknown
    }
    [key: string]: unknown
  }>
  totalCount: number
}

export interface ObjectLike {
  id: string
  _raw: {
    id: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

export type SimplifiedReturnType = number | ObjectLike | PaginatedLike

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function isPaginatedLike(value: unknown): value is PaginatedLike {
  return typeof value === 'object' && value !== null && 'data' in value && 'totalCount' in value
}

export function isObjectLike(value: unknown): value is ObjectLike {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export interface ClerkLoaderOptions<MethodName extends PathsAutocomplete> {
  clientOptions?: ClerkOptions
  method: {
    name: MethodName
    options?: GetNestedMethodParams<MethodName>
  }
}
