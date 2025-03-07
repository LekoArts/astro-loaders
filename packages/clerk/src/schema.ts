import type { ZodTypeAny } from 'astro/zod'
import type { PathsAutocomplete } from './types.js'
import { z } from 'astro/zod'
import { get_GetEmailAddress, get_GetOrganization, get_GetPhoneNumber, get_GetUser, get_GetUserList, get_ListInvitations, Organization, OrganizationInvitation, OrganizationMembership, schemas_SAMLConnection } from './openapi.js'

const METHOD_TO_SCHEMA_MAP: Record<PathsAutocomplete, ZodTypeAny> = {
  'users.getUserList': get_GetUserList.response.element,
  'users.getUser': get_GetUser.response,
  'users.getCount': z.object({ count: z.number() }),
  'users.getOrganizationMembershipList': OrganizationMembership,
  'organizations.getOrganization': get_GetOrganization.response,
  'organizations.getOrganizationList': Organization,
  'organizations.getOrganizationMembershipList': OrganizationMembership,
  'organizations.getOrganizationInvitationList': OrganizationInvitation,
  'invitations.getInvitationList': get_ListInvitations.response.element,
  'emailAddresses.getEmailAddress': get_GetEmailAddress.response,
  'phoneNumbers.getPhoneNumber': get_GetPhoneNumber.response,
  'samlConnections.getSamlConnectionList': schemas_SAMLConnection,
  'samlConnections.getSamlConnection': schemas_SAMLConnection,
} as const

export function clerkApiReponseToZodSchema(methodName: PathsAutocomplete) {
  return METHOD_TO_SCHEMA_MAP[methodName]
}
