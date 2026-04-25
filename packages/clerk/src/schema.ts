import type { ZodTypeAny } from 'astro/zod'
import type { PathsAutocomplete } from './types.js'
import { z } from 'astro/zod'
import { GetEmailAddressResponse, GetOrganizationResponse, GetPhoneNumberResponse, GetSAMLConnectionResponse, GetUserListResponse, GetUserResponse, ListInvitationsResponse, ListOrganizationInvitationsResponse, ListOrganizationMembershipsResponse, ListOrganizationsResponse, UsersGetOrganizationMembershipsResponse } from './openapi.js'

const METHOD_TO_SCHEMA_MAP: Record<PathsAutocomplete, ZodTypeAny> = {
  'users.getUserList': GetUserListResponse.element,
  'users.getUser': GetUserResponse,
  'users.getCount': z.object({ count: z.number() }),
  'users.getOrganizationMembershipList': UsersGetOrganizationMembershipsResponse.shape.data.element,
  'organizations.getOrganization': GetOrganizationResponse,
  'organizations.getOrganizationList': ListOrganizationsResponse.shape.data.element,
  'organizations.getOrganizationMembershipList': ListOrganizationMembershipsResponse.shape.data.element,
  'organizations.getOrganizationInvitationList': ListOrganizationInvitationsResponse.shape.data.element,
  'invitations.getInvitationList': ListInvitationsResponse.element,
  'emailAddresses.getEmailAddress': GetEmailAddressResponse,
  'phoneNumbers.getPhoneNumber': GetPhoneNumberResponse,
  'samlConnections.getSamlConnectionList': GetSAMLConnectionResponse,
  'samlConnections.getSamlConnection': GetSAMLConnectionResponse,
} as const

export function clerkApiReponseToZodSchema(methodName: PathsAutocomplete): ZodTypeAny {
  return METHOD_TO_SCHEMA_MAP[methodName]
}
