/* eslint-disable ts/no-redeclare */

/**
 * Clerk publishes its OpenAPI spec on GitHub: https://github.com/clerk/openapi-specs
 *
 * By using https://github.com/astahmer/typed-openapi and its online playground (https://typed-openapi-astahmer.vercel.app/) the output below was generated.
 *
 * Do not handwrite this file, let it autogenerate 😄
 */

import { z } from 'astro/zod'

export type JWKS_ed25519_PublicKey = z.infer<typeof JWKS_ed25519_PublicKey>
export const JWKS_ed25519_PublicKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('OKP'),
  'crv': z.literal('Ed25519'),
  'x': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_ecdsa_PublicKey = z.infer<typeof JWKS_ecdsa_PublicKey>
export const JWKS_ecdsa_PublicKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('EC'),
  'crv': z.string(),
  'x': z.string(),
  'y': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_rsa_PublicKey = z.infer<typeof JWKS_rsa_PublicKey>
export const JWKS_rsa_PublicKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('RSA'),
  'n': z.string(),
  'e': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_ed25519_PrivateKey = z.infer<typeof JWKS_ed25519_PrivateKey>
export const JWKS_ed25519_PrivateKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('OKP'),
  'crv': z.literal('Ed25519'),
  'x': z.string(),
  'd': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_ecdsa_PrivateKey = z.infer<typeof JWKS_ecdsa_PrivateKey>
export const JWKS_ecdsa_PrivateKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('EC'),
  'crv': z.string(),
  'x': z.string(),
  'y': z.string(),
  'd': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_rsa_PrivateKey = z.infer<typeof JWKS_rsa_PrivateKey>
export const JWKS_rsa_PrivateKey = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('RSA'),
  'n': z.string(),
  'e': z.string(),
  'd': z.string(),
  'p': z.string(),
  'q': z.string(),
  'dp': z.union([z.string(), z.undefined()]).optional(),
  'dq': z.union([z.string(), z.undefined()]).optional(),
  'qi': z.union([z.string(), z.undefined()]).optional(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS_symmetric_Key = z.infer<typeof JWKS_symmetric_Key>
export const JWKS_symmetric_Key = z.object({
  'kid': z.string(),
  'alg': z.string(),
  'use': z.string(),
  'kty': z.literal('oct'),
  'k': z.string(),
  'x5c': z.union([z.array(z.string()), z.undefined()]).optional(),
  'x5t': z.union([z.string(), z.undefined()]).optional(),
  'x5t#S256': z.union([z.string(), z.undefined()]).optional(),
  'x5u': z.union([z.string(), z.undefined()]).optional(),
})

export type JWKS = z.infer<typeof JWKS>
export const JWKS = z.object({
  keys: z
    .array(
      z.union([
        JWKS_ed25519_PublicKey,
        JWKS_ecdsa_PublicKey,
        JWKS_rsa_PublicKey,
        JWKS_ed25519_PrivateKey,
        JWKS_ecdsa_PrivateKey,
        JWKS_rsa_PrivateKey,
        JWKS_symmetric_Key,
      ]),
    )
    .optional(),
})

export type SessionActivityResponse = z.infer<typeof SessionActivityResponse>
export const SessionActivityResponse = z.union([
  z.object({
    object: z.string(),
    id: z.string(),
    device_type: z.union([z.string(), z.undefined()]).optional(),
    is_mobile: z.boolean(),
    browser_name: z.union([z.string(), z.undefined()]).optional(),
    browser_version: z.union([z.string(), z.undefined()]).optional(),
    ip_address: z.union([z.string(), z.undefined()]).optional(),
    city: z.union([z.string(), z.undefined()]).optional(),
    country: z.union([z.string(), z.undefined()]).optional(),
  }),
  z.null(),
])

export type Session = z.infer<typeof Session>
export const Session = z.object({
  object: z.literal('session'),
  id: z.string(),
  user_id: z.string(),
  client_id: z.string(),
  actor: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
  status: z.union([
    z.literal('active'),
    z.literal('revoked'),
    z.literal('ended'),
    z.literal('expired'),
    z.literal('removed'),
    z.literal('abandoned'),
    z.literal('replaced'),
  ]),
  last_active_organization_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  last_active_at: z.number(),
  latest_activity: z.union([SessionActivityResponse, z.undefined()]).optional(),
  expire_at: z.number(),
  abandon_at: z.number(),
  updated_at: z.number(),
  created_at: z.number(),
})

export type Client = z.infer<typeof Client>
export const Client = z.object({
  object: z.literal('client'),
  id: z.string(),
  session_ids: z.array(z.string()),
  sessions: z.array(Session),
  sign_in_id: z.union([z.string(), z.null()]),
  sign_up_id: z.union([z.string(), z.null()]),
  last_active_session_id: z.union([z.string(), z.null()]),
  updated_at: z.number(),
  created_at: z.number(),
})

export type ClerkError = z.infer<typeof ClerkError>
export const ClerkError = z.object({
  message: z.string(),
  long_message: z.string(),
  code: z.string(),
  meta: z.union([z.unknown(), z.undefined()]).optional(),
  clerk_trace_id: z.union([z.string(), z.undefined()]).optional(),
})

export type ClerkErrors = z.infer<typeof ClerkErrors>
export const ClerkErrors = z.object({
  errors: z.array(ClerkError),
  meta: z.union([z.unknown(), z.undefined()]).optional(),
  clerk_trace_id: z.union([z.string(), z.undefined()]).optional(),
})

export type OTP = z.infer<typeof OTP>
export const OTP = z.object({
  status: z.union([z.literal('unverified'), z.literal('verified'), z.literal('failed'), z.literal('expired')]),
  strategy: z.union([z.literal('phone_code'), z.literal('email_code'), z.literal('reset_password_email_code')]),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type Admin = z.infer<typeof Admin>
export const Admin = z.object({
  status: z.literal('verified'),
  strategy: z.literal('admin'),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type FromOAuth = z.infer<typeof FromOAuth>
export const FromOAuth = z.object({
  status: z.union([z.literal('unverified'), z.literal('verified')]),
  strategy: z.string(),
  error: z.union([ClerkError, z.null(), z.undefined()]).optional(),
  expire_at: z.union([z.number(), z.null()]),
  attempts: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type Ticket = z.infer<typeof Ticket>
export const Ticket = z.object({
  status: z.union([z.literal('unverified'), z.literal('verified'), z.literal('expired')]),
  strategy: z.literal('ticket'),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type IdentificationLink = z.infer<typeof IdentificationLink>
export const IdentificationLink = z.object({
  type: z.string(),
  id: z.string(),
})

export type EmailAddress = z.infer<typeof EmailAddress>
export const EmailAddress = z.object({
  id: z.union([z.string(), z.undefined()]).optional(),
  object: z.literal('email_address'),
  email_address: z.string(),
  reserved: z.boolean(),
  verification: z.union([OTP, Admin, FromOAuth, Ticket, z.null()]),
  linked_to: z.array(IdentificationLink),
  matches_sso_connection: z.union([z.boolean(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type DeletedObject = z.infer<typeof DeletedObject>
export const DeletedObject = z.object({
  object: z.string(),
  id: z.union([z.string(), z.undefined()]).optional(),
  slug: z.union([z.string(), z.undefined()]).optional(),
  deleted: z.boolean(),
})

export type PhoneNumber = z.infer<typeof PhoneNumber>
export const PhoneNumber = z.object({
  id: z.union([z.string(), z.undefined()]).optional(),
  object: z.literal('phone_number'),
  phone_number: z.string(),
  reserved_for_second_factor: z.union([z.boolean(), z.undefined()]).optional(),
  default_second_factor: z.union([z.boolean(), z.undefined()]).optional(),
  reserved: z.boolean(),
  verification: z.union([OTP, Admin, z.null()]),
  linked_to: z.array(IdentificationLink),
  backup_codes: z.union([z.array(z.string()), z.null(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type Template = z.infer<typeof Template>
export const Template = z.object({
  id: z.string().optional(),
  object: z.literal('template').optional(),
  instance_id: z.union([z.string(), z.null()]).optional(),
  resource_type: z.string().optional(),
  template_type: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  position: z.number().optional(),
  can_revert: z.boolean().optional(),
  can_delete: z.boolean().optional(),
  can_toggle: z.boolean().optional(),
  subject: z.union([z.string(), z.null()]).optional(),
  markup: z.string().optional(),
  body: z.string().optional(),
  available_variables: z.array(z.string()).optional(),
  required_variables: z.array(z.string()).optional(),
  from_email_name: z.string().optional(),
  reply_to_email_name: z.string().optional(),
  delivered_by_clerk: z.boolean().optional(),
  enabled: z.boolean().optional(),
  updated_at: z.number().optional(),
  created_at: z.number().optional(),
})

export type Web3Signature = z.infer<typeof Web3Signature>
export const Web3Signature = z.object({
  status: z.union([z.literal('unverified'), z.literal('verified'), z.literal('failed'), z.literal('expired')]),
  strategy: z.union([
    z.literal('web3_metamask_signature'),
    z.literal('web3_coinbase_wallet_signature'),
    z.literal('web3_okx_wallet_signature'),
  ]),
  nonce: z.union([z.string(), z.null(), z.undefined()]).optional(),
  message: z.union([z.string(), z.null(), z.undefined()]).optional(),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type Web3Wallet = z.infer<typeof Web3Wallet>
export const Web3Wallet = z.object({
  id: z.union([z.string(), z.undefined()]).optional(),
  object: z.literal('web3_wallet'),
  web3_wallet: z.string(),
  verification: z.union([Web3Signature, Admin, z.null()]),
  created_at: z.number(),
  updated_at: z.number(),
})

export type Passkey = z.infer<typeof Passkey>
export const Passkey = z.object({
  status: z.literal('verified'),
  strategy: z.literal('passkey'),
  nonce: z.union([z.literal('nonce'), z.undefined()]).optional(),
  message: z.union([z.string(), z.null(), z.undefined()]).optional(),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type schemas_Passkey = z.infer<typeof schemas_Passkey>
export const schemas_Passkey = z.object({
  id: z.union([z.string(), z.undefined()]).optional(),
  object: z.literal('passkey'),
  name: z.string(),
  last_used_at: z.number(),
  verification: z.union([Passkey, z.null()]),
})

export type SAML = z.infer<typeof SAML>
export const SAML = z.object({
  status: z.union([
    z.literal('unverified'),
    z.literal('verified'),
    z.literal('failed'),
    z.literal('expired'),
    z.literal('transferable'),
  ]),
  strategy: z.literal('saml'),
  external_verification_redirect_url: z.union([z.string(), z.null()]),
  error: z.union([ClerkError, z.null(), z.undefined()]).optional(),
  expire_at: z.number(),
  attempts: z.union([z.number(), z.null()]),
  verified_at_client: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type SAMLConnection = z.infer<typeof SAMLConnection>
export const SAMLConnection = z.object({
  id: z.string(),
  name: z.string(),
  domain: z.string(),
  active: z.boolean(),
  provider: z.string(),
  sync_user_attributes: z.boolean(),
  allow_subdomains: z.union([z.boolean(), z.undefined()]).optional(),
  allow_idp_initiated: z.union([z.boolean(), z.undefined()]).optional(),
  disable_additional_identifications: z.union([z.boolean(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type SAMLAccount = z.infer<typeof SAMLAccount>
export const SAMLAccount = z.object({
  id: z.string(),
  object: z.literal('saml_account'),
  provider: z.string(),
  active: z.boolean(),
  email_address: z.string(),
  first_name: z.union([z.string(), z.null(), z.undefined()]).optional(),
  last_name: z.union([z.string(), z.null(), z.undefined()]).optional(),
  provider_user_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  public_metadata: z.union([z.unknown(), z.undefined()]).optional(),
  verification: z.union([SAML, Ticket, z.null()]),
  saml_connection: z.union([SAMLConnection, z.null(), z.undefined()]).optional(),
})

export type User = z.infer<typeof User>
export const User = z.object({
  id: z.string().optional(),
  object: z.literal('user').optional(),
  external_id: z.union([z.string(), z.null()]).optional(),
  primary_email_address_id: z.union([z.string(), z.null()]).optional(),
  primary_phone_number_id: z.union([z.string(), z.null()]).optional(),
  primary_web3_wallet_id: z.union([z.string(), z.null()]).optional(),
  username: z.union([z.string(), z.null()]).optional(),
  first_name: z.union([z.string(), z.null()]).optional(),
  last_name: z.union([z.string(), z.null()]).optional(),
  profile_image_url: z.string().optional(),
  image_url: z.string().optional(),
  has_image: z.boolean().optional(),
  public_metadata: z.unknown().optional(),
  private_metadata: z.union([z.unknown(), z.null()]).optional(),
  unsafe_metadata: z.unknown().optional(),
  email_addresses: z.array(EmailAddress).optional(),
  phone_numbers: z.array(PhoneNumber).optional(),
  web3_wallets: z.array(Web3Wallet).optional(),
  passkeys: z.array(schemas_Passkey).optional(),
  password_enabled: z.boolean().optional(),
  two_factor_enabled: z.boolean().optional(),
  totp_enabled: z.boolean().optional(),
  backup_code_enabled: z.boolean().optional(),
  mfa_enabled_at: z.union([z.number(), z.null()]).optional(),
  mfa_disabled_at: z.union([z.number(), z.null()]).optional(),
  external_accounts: z.array(z.unknown()).optional(),
  saml_accounts: z.array(SAMLAccount).optional(),
  last_sign_in_at: z.union([z.number(), z.null()]).optional(),
  banned: z.boolean().optional(),
  locked: z.boolean().optional(),
  lockout_expires_in_seconds: z.union([z.number(), z.null()]).optional(),
  verification_attempts_remaining: z.union([z.number(), z.null()]).optional(),
  updated_at: z.number().optional(),
  created_at: z.number().optional(),
  delete_self_enabled: z.boolean().optional(),
  create_organization_enabled: z.boolean().optional(),
  create_organizations_limit: z.union([z.number(), z.null()]).optional(),
  last_active_at: z.union([z.number(), z.null()]).optional(),
  legal_accepted_at: z.union([z.number(), z.null()]).optional(),
})

export type PasswordHasher = z.infer<typeof PasswordHasher>
export const PasswordHasher = z.string()

export type TotalCount = z.infer<typeof TotalCount>
export const TotalCount = z.object({
  object: z.literal('total_count'),
  total_count: z.number(),
})

export type Organization = z.infer<typeof Organization>
export const Organization = z.object({
  object: z.literal('organization'),
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  members_count: z.union([z.number(), z.undefined()]).optional(),
  missing_member_with_elevated_permissions: z.union([z.boolean(), z.undefined()]).optional(),
  pending_invitations_count: z.union([z.number(), z.undefined()]).optional(),
  max_allowed_memberships: z.number(),
  admin_delete_enabled: z.boolean(),
  public_metadata: z.unknown(),
  private_metadata: z.unknown(),
  created_by: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type OrganizationMembershipPublicUserData = z.infer<typeof OrganizationMembershipPublicUserData>
export const OrganizationMembershipPublicUserData = z.object({
  user_id: z.string(),
  first_name: z.union([z.string(), z.null()]),
  last_name: z.union([z.string(), z.null()]),
  profile_image_url: z.union([z.string(), z.null()]),
  image_url: z.string(),
  has_image: z.boolean(),
  identifier: z.union([z.string(), z.null(), z.undefined()]).optional(),
})

export type OrganizationMembership = z.infer<typeof OrganizationMembership>
export const OrganizationMembership = z.object({
  id: z.string(),
  object: z.literal('organization_membership'),
  role: z.string(),
  role_name: z.union([z.string(), z.undefined()]).optional(),
  permissions: z.array(z.string()),
  public_metadata: z.unknown(),
  private_metadata: z.union([z.unknown(), z.undefined()]).optional(),
  organization: Organization,
  public_user_data: z.union([OrganizationMembershipPublicUserData, z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type OrganizationMemberships = z.infer<typeof OrganizationMemberships>
export const OrganizationMemberships = z.object({
  data: z.array(OrganizationMembership),
  total_count: z.number(),
})

export type OrganizationInvitationPublicOrganizationData = z.infer<typeof OrganizationInvitationPublicOrganizationData>
export const OrganizationInvitationPublicOrganizationData = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  image_url: z.union([z.string(), z.undefined()]).optional(),
  has_image: z.boolean(),
})

export type OrganizationInvitationWithPublicOrganizationData = z.infer<
  typeof OrganizationInvitationWithPublicOrganizationData
>
export const OrganizationInvitationWithPublicOrganizationData = z.intersection(
  z.object({
    object: z.literal('organization_invitation').optional(),
    id: z.string().optional(),
    email_address: z.string().optional(),
    role: z.string().optional(),
    role_name: z.string().optional(),
    organization_id: z.string().optional(),
    status: z.string().optional(),
    public_metadata: z.unknown().optional(),
    private_metadata: z.unknown().optional(),
    url: z.union([z.string(), z.null()]).optional(),
    expires_at: z.union([z.number(), z.null()]).optional(),
    created_at: z.number().optional(),
    updated_at: z.number().optional(),
  }),
  z.object({
    public_organization_data: OrganizationInvitationPublicOrganizationData.optional(),
  }),
)

export type OrganizationInvitationsWithPublicOrganizationData = z.infer<
  typeof OrganizationInvitationsWithPublicOrganizationData
>
export const OrganizationInvitationsWithPublicOrganizationData = z.object({
  data: z.array(OrganizationInvitationWithPublicOrganizationData),
  total_count: z.number(),
})

export type Invitation = z.infer<typeof Invitation>
export const Invitation = z.object({
  object: z.literal('invitation'),
  id: z.string(),
  email_address: z.string(),
  public_metadata: z.unknown(),
  revoked: z.union([z.boolean(), z.undefined()]).optional(),
  status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked'), z.literal('expired')]),
  url: z.union([z.string(), z.undefined()]).optional(),
  expires_at: z.union([z.number(), z.null(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type AllowlistIdentifier = z.infer<typeof AllowlistIdentifier>
export const AllowlistIdentifier = z.object({
  object: z.literal('allowlist_identifier').optional(),
  id: z.string().optional(),
  invitation_id: z.string().optional(),
  identifier: z.string().optional(),
  identifier_type: z
    .union([z.literal('email_address'), z.literal('phone_number'), z.literal('web3_wallet')])
    .optional(),
  instance_id: z.string().optional(),
  created_at: z.number().optional(),
  updated_at: z.number().optional(),
})

export type BlocklistIdentifier = z.infer<typeof BlocklistIdentifier>
export const BlocklistIdentifier = z.object({
  object: z.literal('blocklist_identifier').optional(),
  id: z.string().optional(),
  identifier: z.string().optional(),
  identifier_type: z
    .union([z.literal('email_address'), z.literal('phone_number'), z.literal('web3_wallet')])
    .optional(),
  instance_id: z.string().optional(),
  created_at: z.number().optional(),
  updated_at: z.number().optional(),
})

export type BlocklistIdentifiers = z.infer<typeof BlocklistIdentifiers>
export const BlocklistIdentifiers = z.object({
  data: z.array(BlocklistIdentifier),
  total_count: z.number(),
})

export type ActorToken = z.infer<typeof ActorToken>
export const ActorToken = z.object({
  object: z.literal('actor_token'),
  id: z.string(),
  status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked')]),
  user_id: z.string(),
  actor: z.unknown(),
  token: z.union([z.string(), z.undefined()]).optional(),
  url: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type CNameTarget = z.infer<typeof CNameTarget>
export const CNameTarget = z.object({
  host: z.string(),
  value: z.string(),
  required: z.boolean(),
})

export type Domain = z.infer<typeof Domain>
export const Domain = z.object({
  object: z.literal('domain'),
  id: z.string(),
  name: z.string(),
  is_satellite: z.boolean(),
  frontend_api_url: z.string(),
  accounts_portal_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
  proxy_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
  development_origin: z.string(),
  cname_targets: z.union([z.array(CNameTarget), z.null(), z.undefined()]).optional(),
})

export type Domains = z.infer<typeof Domains>
export const Domains = z.object({
  data: z.array(Domain),
  total_count: z.number(),
})

export type Instance = z.infer<typeof Instance>
export const Instance = z.object({
  object: z.literal('instance'),
  id: z.string(),
  environment_type: z.string(),
  allowed_origins: z.union([z.array(z.string()), z.null()]),
})

export type InstanceRestrictions = z.infer<typeof InstanceRestrictions>
export const InstanceRestrictions = z.object({
  object: z.literal('instance_restrictions'),
  allowlist: z.boolean(),
  blocklist: z.boolean(),
  block_email_subaddresses: z.boolean(),
  block_disposable_email_domains: z.boolean(),
  ignore_dots_for_gmail_addresses: z.boolean(),
})

export type OrganizationSettings = z.infer<typeof OrganizationSettings>
export const OrganizationSettings = z.object({
  object: z.literal('organization_settings'),
  enabled: z.boolean(),
  max_allowed_memberships: z.number(),
  max_allowed_roles: z.number(),
  max_allowed_permissions: z.number(),
  creator_role: z.string(),
  admin_delete_enabled: z.boolean(),
  domains_enabled: z.boolean(),
  domains_enrollment_modes: z.array(
    z.union([z.literal('manual_invitation'), z.literal('automatic_invitation'), z.literal('automatic_suggestion')]),
  ),
  domains_default_role: z.string(),
})

export type SvixURL = z.infer<typeof SvixURL>
export const SvixURL = z.object({
  svix_url: z.string(),
})

export type JWTTemplate = z.infer<typeof JWTTemplate>
export const JWTTemplate = z.object({
  object: z.literal('jwt_template'),
  id: z.string(),
  name: z.string(),
  claims: z.unknown(),
  lifetime: z.number(),
  allowed_clock_skew: z.number(),
  custom_signing_key: z.boolean(),
  signing_algorithm: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type Organizations = z.infer<typeof Organizations>
export const Organizations = z.object({
  data: z.array(Organization),
  total_count: z.number(),
})

export type OrganizationWithLogo = z.infer<typeof OrganizationWithLogo>
export const OrganizationWithLogo = z.intersection(
  Organization,
  z.object({
    logo_url: z.union([z.string(), z.undefined()]).optional(),
    image_url: z.string(),
    has_image: z.boolean(),
  }),
)

export type OrganizationInvitation = z.infer<typeof OrganizationInvitation>
export const OrganizationInvitation = z.object({
  object: z.literal('organization_invitation'),
  id: z.string(),
  email_address: z.string(),
  role: z.string(),
  role_name: z.string(),
  organization_id: z.union([z.string(), z.undefined()]).optional(),
  status: z.union([z.string(), z.undefined()]).optional(),
  public_metadata: z.unknown(),
  private_metadata: z.union([z.unknown(), z.undefined()]).optional(),
  url: z.union([z.string(), z.null()]),
  expires_at: z.union([z.number(), z.null()]),
  created_at: z.number(),
  updated_at: z.number(),
})

export type OrganizationInvitations = z.infer<typeof OrganizationInvitations>
export const OrganizationInvitations = z.object({
  data: z.array(OrganizationInvitation),
  total_count: z.number(),
})

export type OrganizationDomainVerification = z.infer<typeof OrganizationDomainVerification>
export const OrganizationDomainVerification = z.object({
  status: z.union([z.literal('unverified'), z.literal('verified')]),
  strategy: z.string(),
  attempts: z.union([z.number(), z.null()]),
  expire_at: z.union([z.number(), z.null()]),
})

export type OrganizationDomain = z.infer<typeof OrganizationDomain>
export const OrganizationDomain = z.object({
  object: z.literal('organization_domain'),
  id: z.string(),
  organization_id: z.string(),
  name: z.string(),
  enrollment_mode: z.union([
    z.literal('manual_invitation'),
    z.literal('automatic_invitation'),
    z.literal('automatic_suggestion'),
  ]),
  affiliation_email_address: z.union([z.string(), z.null()]),
  verification: z.union([OrganizationDomainVerification, z.null()]),
  total_pending_invitations: z.number(),
  total_pending_suggestions: z.number(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type OrganizationDomains = z.infer<typeof OrganizationDomains>
export const OrganizationDomains = z.object({
  data: z.array(OrganizationDomain),
  total_count: z.number(),
})

export type ProxyCheck = z.infer<typeof ProxyCheck>
export const ProxyCheck = z.object({
  object: z.literal('proxy_check'),
  id: z.string(),
  domain_id: z.string(),
  last_run_at: z.union([z.number(), z.null()]),
  proxy_url: z.string(),
  successful: z.boolean(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type RedirectURL = z.infer<typeof RedirectURL>
export const RedirectURL = z.object({
  object: z.literal('redirect_url'),
  id: z.string(),
  url: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type SignInToken = z.infer<typeof SignInToken>
export const SignInToken = z.object({
  object: z.literal('sign_in_token'),
  id: z.string(),
  status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked')]),
  user_id: z.string(),
  token: z.union([z.string(), z.undefined()]).optional(),
  url: z.union([z.string(), z.null(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type SignUpVerification = z.infer<typeof SignUpVerification>
export const SignUpVerification = z.union([
  z.intersection(
    z.object({
      next_action: z.union([z.literal('needs_prepare'), z.literal('needs_attempt'), z.literal('')]).optional(),
      supported_strategies: z.array(z.string()).optional(),
    }),
    z.object({
      string: z.any().optional(),
    }),
  ),
  z.null(),
])

export type SignUpVerifications = z.infer<typeof SignUpVerifications>
export const SignUpVerifications = z.object({
  email_address: SignUpVerification,
  phone_number: SignUpVerification,
  web3_wallet: SignUpVerification,
  external_account: z.union([z.unknown(), z.null()]),
})

export type SignUp = z.infer<typeof SignUp>
export const SignUp = z.object({
  object: z.literal('sign_up_attempt'),
  id: z.string(),
  status: z.union([z.literal('missing_requirements'), z.literal('complete'), z.literal('abandoned')]),
  required_fields: z.array(z.string()),
  optional_fields: z.array(z.string()),
  missing_fields: z.array(z.string()),
  unverified_fields: z.array(z.string()),
  verifications: SignUpVerifications,
  username: z.union([z.string(), z.null()]),
  email_address: z.union([z.string(), z.null()]),
  phone_number: z.union([z.string(), z.null()]),
  web3_wallet: z.union([z.string(), z.null()]),
  password_enabled: z.boolean(),
  first_name: z.union([z.string(), z.null()]),
  last_name: z.union([z.string(), z.null()]),
  unsafe_metadata: z.union([z.unknown(), z.undefined()]).optional(),
  public_metadata: z.union([z.unknown(), z.undefined()]).optional(),
  custom_action: z.boolean(),
  external_id: z.union([z.string(), z.null()]),
  created_session_id: z.union([z.string(), z.null()]),
  created_user_id: z.union([z.string(), z.null()]),
  abandon_at: z.number(),
  legal_accepted_at: z.union([z.number(), z.null()]),
  external_account: z.union([z.unknown(), z.undefined()]).optional(),
})

export type OAuthApplication = z.infer<typeof OAuthApplication>
export const OAuthApplication = z.object({
  object: z.literal('oauth_application'),
  id: z.string(),
  instance_id: z.string(),
  name: z.string(),
  client_id: z.string(),
  public: z.boolean(),
  scopes: z.string(),
  redirect_uris: z.array(z.string()),
  callback_url: z.string(),
  authorize_url: z.string(),
  token_fetch_url: z.string(),
  user_info_url: z.string(),
  discovery_url: z.string(),
  token_introspection_url: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type OAuthApplications = z.infer<typeof OAuthApplications>
export const OAuthApplications = z.object({
  data: z.array(OAuthApplication),
  total_count: z.number(),
})

export type OAuthApplicationWithSecret = z.infer<typeof OAuthApplicationWithSecret>
export const OAuthApplicationWithSecret = z.intersection(
  OAuthApplication,
  z.object({
    client_secret: z.string().optional(),
  }),
)

export type SAMLConnectionAttributeMapping = z.infer<typeof SAMLConnectionAttributeMapping>
export const SAMLConnectionAttributeMapping = z.object({
  user_id: z.string(),
  email_address: z.string(),
  first_name: z.string(),
  last_name: z.string(),
})

export type schemas_SAMLConnection = z.infer<typeof schemas_SAMLConnection>
export const schemas_SAMLConnection = z.object({
  object: z.literal('saml_connection'),
  id: z.string(),
  name: z.string(),
  domain: z.string(),
  idp_entity_id: z.union([z.string(), z.null()]),
  idp_sso_url: z.union([z.string(), z.null()]),
  idp_certificate: z.union([z.string(), z.null()]),
  idp_metadata_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
  idp_metadata: z.union([z.string(), z.null(), z.undefined()]).optional(),
  acs_url: z.string(),
  sp_entity_id: z.string(),
  sp_metadata_url: z.string(),
  organization_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  attribute_mapping: z.union([SAMLConnectionAttributeMapping, z.undefined()]).optional(),
  active: z.boolean(),
  provider: z.string(),
  user_count: z.number(),
  sync_user_attributes: z.boolean(),
  allow_subdomains: z.union([z.boolean(), z.undefined()]).optional(),
  allow_idp_initiated: z.union([z.boolean(), z.undefined()]).optional(),
  disable_additional_identifications: z.union([z.boolean(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
})

export type SAMLConnections = z.infer<typeof SAMLConnections>
export const SAMLConnections = z.object({
  data: z.array(schemas_SAMLConnection),
  total_count: z.number(),
})

export type TestingToken = z.infer<typeof TestingToken>
export const TestingToken = z.object({
  object: z.literal('testing_token'),
  token: z.string(),
  expires_at: z.number(),
})

export type WaitlistEntry = z.infer<typeof WaitlistEntry>
export const WaitlistEntry = z.object({
  object: z.literal('waitlist_entry'),
  id: z.string(),
  email_address: z.string(),
  status: z.union([z.literal('pending'), z.literal('invited'), z.literal('rejected'), z.literal('completed')]),
  is_locked: z.union([z.boolean(), z.undefined()]).optional(),
  created_at: z.number(),
  updated_at: z.number(),
  invitation: z.union([Invitation, z.null(), z.undefined()]).optional(),
})

export type get_GetPublicInterstitial = typeof get_GetPublicInterstitial
export const get_GetPublicInterstitial = {
  method: z.literal('GET'),
  path: z.literal('/public/interstitial'),
  parameters: z.object({
    query: z.object({
      frontendApi: z.string().optional(),
      frontend_api: z.string().optional(),
      publishable_key: z.string().optional(),
      proxy_url: z.string().optional(),
      domain: z.string().optional(),
      sign_in_url: z.string().optional(),
      use_domain_for_script: z.boolean().optional(),
    }),
  }),
  response: z.unknown(),
}

export type get_GetJWKS = typeof get_GetJWKS
export const get_GetJWKS = {
  method: z.literal('GET'),
  path: z.literal('/jwks'),
  parameters: z.never(),
  response: JWKS,
}

export type post_VerifyClient = typeof post_VerifyClient
export const post_VerifyClient = {
  method: z.literal('POST'),
  path: z.literal('/clients/verify'),
  parameters: z.object({
    body: z.object({
      token: z.string(),
    }),
  }),
  response: Client,
}

export type get_GetClient = typeof get_GetClient
export const get_GetClient = {
  method: z.literal('GET'),
  path: z.literal('/clients/{client_id}'),
  parameters: z.object({
    path: z.object({
      client_id: z.string(),
    }),
  }),
  response: Client,
}

export type post_CreateEmailAddress = typeof post_CreateEmailAddress
export const post_CreateEmailAddress = {
  method: z.literal('POST'),
  path: z.literal('/email_addresses'),
  parameters: z.object({
    body: z.object({
      user_id: z.string(),
      email_address: z.string(),
      verified: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
      primary: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: EmailAddress,
}

export type get_GetEmailAddress = typeof get_GetEmailAddress
export const get_GetEmailAddress = {
  method: z.literal('GET'),
  path: z.literal('/email_addresses/{email_address_id}'),
  parameters: z.object({
    path: z.object({
      email_address_id: z.string(),
    }),
  }),
  response: EmailAddress,
}

export type delete_DeleteEmailAddress = typeof delete_DeleteEmailAddress
export const delete_DeleteEmailAddress = {
  method: z.literal('DELETE'),
  path: z.literal('/email_addresses/{email_address_id}'),
  parameters: z.object({
    path: z.object({
      email_address_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type patch_UpdateEmailAddress = typeof patch_UpdateEmailAddress
export const patch_UpdateEmailAddress = {
  method: z.literal('PATCH'),
  path: z.literal('/email_addresses/{email_address_id}'),
  parameters: z.object({
    path: z.object({
      email_address_id: z.string(),
    }),
    body: z.object({
      verified: z.union([z.boolean(), z.null()]).optional(),
      primary: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: EmailAddress,
}

export type post_CreatePhoneNumber = typeof post_CreatePhoneNumber
export const post_CreatePhoneNumber = {
  method: z.literal('POST'),
  path: z.literal('/phone_numbers'),
  parameters: z.object({
    body: z.object({
      user_id: z.string(),
      phone_number: z.string(),
      verified: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
      primary: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
      reserved_for_second_factor: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: PhoneNumber,
}

export type get_GetPhoneNumber = typeof get_GetPhoneNumber
export const get_GetPhoneNumber = {
  method: z.literal('GET'),
  path: z.literal('/phone_numbers/{phone_number_id}'),
  parameters: z.object({
    path: z.object({
      phone_number_id: z.string(),
    }),
  }),
  response: PhoneNumber,
}

export type delete_DeletePhoneNumber = typeof delete_DeletePhoneNumber
export const delete_DeletePhoneNumber = {
  method: z.literal('DELETE'),
  path: z.literal('/phone_numbers/{phone_number_id}'),
  parameters: z.object({
    path: z.object({
      phone_number_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type patch_UpdatePhoneNumber = typeof patch_UpdatePhoneNumber
export const patch_UpdatePhoneNumber = {
  method: z.literal('PATCH'),
  path: z.literal('/phone_numbers/{phone_number_id}'),
  parameters: z.object({
    path: z.object({
      phone_number_id: z.string(),
    }),
    body: z.object({
      verified: z.union([z.boolean(), z.null()]).optional(),
      primary: z.union([z.boolean(), z.null()]).optional(),
      reserved_for_second_factor: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: PhoneNumber,
}

export type get_GetSessionList = typeof get_GetSessionList
export const get_GetSessionList = {
  method: z.literal('GET'),
  path: z.literal('/sessions'),
  parameters: z.object({
    query: z.object({
      client_id: z.string().optional(),
      user_id: z.string().optional(),
      status: z
        .union([
          z.literal('abandoned'),
          z.literal('active'),
          z.literal('ended'),
          z.literal('expired'),
          z.literal('removed'),
          z.literal('replaced'),
          z.literal('revoked'),
        ])
        .optional(),
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: z.array(Session),
}

export type post_CreateSession = typeof post_CreateSession
export const post_CreateSession = {
  method: z.literal('POST'),
  path: z.literal('/sessions'),
  parameters: z.object({
    body: z.object({
      user_id: z.string(),
    }),
  }),
  response: Session,
}

export type get_GetSession = typeof get_GetSession
export const get_GetSession = {
  method: z.literal('GET'),
  path: z.literal('/sessions/{session_id}'),
  parameters: z.object({
    path: z.object({
      session_id: z.string(),
    }),
  }),
  response: Session,
}

export type post_RevokeSession = typeof post_RevokeSession
export const post_RevokeSession = {
  method: z.literal('POST'),
  path: z.literal('/sessions/{session_id}/revoke'),
  parameters: z.object({
    path: z.object({
      session_id: z.string(),
    }),
  }),
  response: Session,
}

export type post_CreateSessionToken = typeof post_CreateSessionToken
export const post_CreateSessionToken = {
  method: z.literal('POST'),
  path: z.literal('/sessions/{session_id}/tokens'),
  parameters: z.object({
    path: z.object({
      session_id: z.string(),
    }),
    body: z.object({
      expires_in_seconds: z.union([z.number(), z.null()]).optional(),
    }),
  }),
  response: z.object({
    object: z.literal('token').optional(),
    jwt: z.string().optional(),
  }),
}

export type post_CreateSessionTokenFromTemplate = typeof post_CreateSessionTokenFromTemplate
export const post_CreateSessionTokenFromTemplate = {
  method: z.literal('POST'),
  path: z.literal('/sessions/{session_id}/tokens/{template_name}'),
  parameters: z.object({
    path: z.object({
      session_id: z.string(),
      template_name: z.string(),
    }),
    body: z.object({
      expires_in_seconds: z.union([z.number(), z.null()]).optional(),
    }),
  }),
  response: z.object({
    object: z.literal('token').optional(),
    jwt: z.string().optional(),
  }),
}

export type get_GetUserList = typeof get_GetUserList
export const get_GetUserList = {
  method: z.literal('GET'),
  path: z.literal('/users'),
  parameters: z.object({
    query: z.object({
      email_address: z.array(z.string()).optional(),
      phone_number: z.array(z.string()).optional(),
      external_id: z.array(z.string()).optional(),
      username: z.array(z.string()).optional(),
      web3_wallet: z.array(z.string()).optional(),
      user_id: z.array(z.string()).optional(),
      organization_id: z.array(z.string()).optional(),
      query: z.string().optional(),
      email_address_query: z.string().optional(),
      phone_number_query: z.string().optional(),
      username_query: z.string().optional(),
      name_query: z.string().optional(),
      banned: z.boolean().optional(),
      last_active_at_before: z.number().optional(),
      last_active_at_after: z.number().optional(),
      last_active_at_since: z.number().optional(),
      created_at_before: z.number().optional(),
      created_at_after: z.number().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
      order_by: z.string().optional(),
    }),
  }),
  response: z.array(User),
}

export type post_CreateUser = typeof post_CreateUser
export const post_CreateUser = {
  method: z.literal('POST'),
  path: z.literal('/users'),
  parameters: z.object({
    body: z.object({
      external_id: z.union([z.string(), z.null()]).optional(),
      first_name: z.union([z.string(), z.null()]).optional(),
      last_name: z.union([z.string(), z.null()]).optional(),
      email_address: z.array(z.string()).optional(),
      phone_number: z.array(z.string()).optional(),
      web3_wallet: z.array(z.string()).optional(),
      username: z.union([z.string(), z.null()]).optional(),
      password: z.union([z.string(), z.null()]).optional(),
      password_digest: z.union([z.string(), z.null()]).optional(),
      password_hasher: PasswordHasher.optional(),
      skip_password_checks: z.union([z.boolean(), z.null()]).optional(),
      skip_password_requirement: z.union([z.boolean(), z.null()]).optional(),
      totp_secret: z.union([z.string(), z.null()]).optional(),
      backup_codes: z.array(z.string()).optional(),
      public_metadata: z.unknown().optional(),
      private_metadata: z.unknown().optional(),
      unsafe_metadata: z.unknown().optional(),
      delete_self_enabled: z.union([z.boolean(), z.null()]).optional(),
      legal_accepted_at: z.union([z.string(), z.null()]).optional(),
      skip_legal_checks: z.union([z.boolean(), z.null()]).optional(),
      create_organization_enabled: z.union([z.boolean(), z.null()]).optional(),
      create_organizations_limit: z.union([z.number(), z.null()]).optional(),
      created_at: z.union([z.string(), z.null()]).optional(),
    }),
  }),
  response: User,
}

export type get_GetUsersCount = typeof get_GetUsersCount
export const get_GetUsersCount = {
  method: z.literal('GET'),
  path: z.literal('/users/count'),
  parameters: z.object({
    query: z.object({
      email_address: z.array(z.string()).optional(),
      phone_number: z.array(z.string()).optional(),
      external_id: z.array(z.string()).optional(),
      username: z.array(z.string()).optional(),
      web3_wallet: z.array(z.string()).optional(),
      user_id: z.array(z.string()).optional(),
      organization_id: z.array(z.string()).optional(),
      query: z.string().optional(),
      email_address_query: z.string().optional(),
      phone_number_query: z.string().optional(),
      username_query: z.string().optional(),
      name_query: z.string().optional(),
      banned: z.boolean().optional(),
      last_active_at_before: z.number().optional(),
      last_active_at_after: z.number().optional(),
      last_active_at_since: z.number().optional(),
      created_at_before: z.number().optional(),
      created_at_after: z.number().optional(),
    }),
  }),
  response: TotalCount,
}

export type get_GetUser = typeof get_GetUser
export const get_GetUser = {
  method: z.literal('GET'),
  path: z.literal('/users/{user_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type patch_UpdateUser = typeof patch_UpdateUser
export const patch_UpdateUser = {
  method: z.literal('PATCH'),
  path: z.literal('/users/{user_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
    body: z.object({
      external_id: z.union([z.string(), z.null()]).optional(),
      first_name: z.union([z.string(), z.null()]).optional(),
      last_name: z.union([z.string(), z.null()]).optional(),
      primary_email_address_id: z.union([z.string(), z.null()]).optional(),
      notify_primary_email_address_changed: z.union([z.boolean(), z.null()]).optional(),
      primary_phone_number_id: z.union([z.string(), z.null()]).optional(),
      primary_web3_wallet_id: z.union([z.string(), z.null()]).optional(),
      username: z.union([z.string(), z.null()]).optional(),
      profile_image_id: z.union([z.string(), z.null()]).optional(),
      password: z.union([z.string(), z.null()]).optional(),
      password_digest: z.string().optional(),
      password_hasher: PasswordHasher.optional(),
      skip_password_checks: z.union([z.boolean(), z.null()]).optional(),
      sign_out_of_other_sessions: z.union([z.boolean(), z.null()]).optional(),
      totp_secret: z.union([z.string(), z.null()]).optional(),
      backup_codes: z.array(z.string()).optional(),
      public_metadata: z.union([z.unknown(), z.null()]).optional(),
      private_metadata: z.union([z.unknown(), z.null()]).optional(),
      unsafe_metadata: z.union([z.unknown(), z.null()]).optional(),
      delete_self_enabled: z.union([z.boolean(), z.null()]).optional(),
      create_organization_enabled: z.union([z.boolean(), z.null()]).optional(),
      legal_accepted_at: z.union([z.string(), z.null()]).optional(),
      skip_legal_checks: z.union([z.boolean(), z.null()]).optional(),
      create_organizations_limit: z.union([z.number(), z.null()]).optional(),
      created_at: z.union([z.string(), z.null()]).optional(),
    }),
  }),
  response: User,
}

export type delete_DeleteUser = typeof delete_DeleteUser
export const delete_DeleteUser = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_BanUser = typeof post_BanUser
export const post_BanUser = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/ban'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type post_UnbanUser = typeof post_UnbanUser
export const post_UnbanUser = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/unban'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type post_LockUser = typeof post_LockUser
export const post_LockUser = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/lock'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type post_UnlockUser = typeof post_UnlockUser
export const post_UnlockUser = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/unlock'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type post_SetUserProfileImage = typeof post_SetUserProfileImage
export const post_SetUserProfileImage = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/profile_image'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
    body: z.object({
      file: z.string().optional(),
    }),
  }),
  response: User,
}

export type delete_DeleteUserProfileImage = typeof delete_DeleteUserProfileImage
export const delete_DeleteUserProfileImage = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/profile_image'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: User,
}

export type patch_UpdateUserMetadata = typeof patch_UpdateUserMetadata
export const patch_UpdateUserMetadata = {
  method: z.literal('PATCH'),
  path: z.literal('/users/{user_id}/metadata'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
    body: z.object({
      public_metadata: z.unknown().optional(),
      private_metadata: z.unknown().optional(),
      unsafe_metadata: z.unknown().optional(),
    }),
  }),
  response: User,
}

export type get_GetOAuthAccessToken = typeof get_GetOAuthAccessToken
export const get_GetOAuthAccessToken = {
  method: z.literal('GET'),
  path: z.literal('/users/{user_id}/oauth_access_tokens/{provider}'),
  parameters: z.object({
    query: z.object({
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      user_id: z.string(),
      provider: z.string(),
    }),
  }),
  response: z.array(
    z.object({
      object: z.string().optional(),
      external_account_id: z.string().optional(),
      provider_user_id: z.string().optional(),
      token: z.string().optional(),
      provider: z.string().optional(),
      public_metadata: z.unknown().optional(),
      label: z.union([z.string(), z.null()]).optional(),
      scopes: z.array(z.string()).optional(),
      token_secret: z.string().optional(),
      expires_at: z.union([z.number(), z.null()]).optional(),
    }),
  ),
}

export type get_UsersGetOrganizationMemberships = typeof get_UsersGetOrganizationMemberships
export const get_UsersGetOrganizationMemberships = {
  method: z.literal('GET'),
  path: z.literal('/users/{user_id}/organization_memberships'),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: OrganizationMemberships,
}

export type get_UsersGetOrganizationInvitations = typeof get_UsersGetOrganizationInvitations
export const get_UsersGetOrganizationInvitations = {
  method: z.literal('GET'),
  path: z.literal('/users/{user_id}/organization_invitations'),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
      status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked')]).optional(),
    }),
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: OrganizationInvitationsWithPublicOrganizationData,
}

export type post_VerifyPassword = typeof post_VerifyPassword
export const post_VerifyPassword = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/verify_password'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
    body: z.object({
      password: z.string(),
    }),
  }),
  response: z.object({
    verified: z.boolean().optional(),
  }),
}

export type post_VerifyTOTP = typeof post_VerifyTOTP
export const post_VerifyTOTP = {
  method: z.literal('POST'),
  path: z.literal('/users/{user_id}/verify_totp'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
    body: z.object({
      code: z.string(),
    }),
  }),
  response: z.object({
    verified: z.boolean().optional(),
    code_type: z.union([z.literal('totp'), z.literal('backup_code')]).optional(),
  }),
}

export type delete_DisableMFA = typeof delete_DisableMFA
export const delete_DisableMFA = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/mfa'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: z.object({
    user_id: z.string().optional(),
  }),
}

export type delete_DeleteBackupCode = typeof delete_DeleteBackupCode
export const delete_DeleteBackupCode = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/backup_code'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: z.object({
    user_id: z.string().optional(),
  }),
}

export type delete_UserPasskeyDelete = typeof delete_UserPasskeyDelete
export const delete_UserPasskeyDelete = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/passkeys/{passkey_identification_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
      passkey_identification_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type delete_UserWeb3WalletDelete = typeof delete_UserWeb3WalletDelete
export const delete_UserWeb3WalletDelete = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/web3_wallets/{web3_wallet_identification_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
      web3_wallet_identification_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type delete_DeleteTOTP = typeof delete_DeleteTOTP
export const delete_DeleteTOTP = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/totp'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
    }),
  }),
  response: z.object({
    user_id: z.string().optional(),
  }),
}

export type delete_DeleteExternalAccount = typeof delete_DeleteExternalAccount
export const delete_DeleteExternalAccount = {
  method: z.literal('DELETE'),
  path: z.literal('/users/{user_id}/external_accounts/{external_account_id}'),
  parameters: z.object({
    path: z.object({
      user_id: z.string(),
      external_account_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_CreateInvitation = typeof post_CreateInvitation
export const post_CreateInvitation = {
  method: z.literal('POST'),
  path: z.literal('/invitations'),
  parameters: z.object({
    body: z.object({
      email_address: z.string(),
      public_metadata: z.union([z.unknown(), z.undefined()]).optional(),
      redirect_url: z.union([z.string(), z.undefined()]).optional(),
      notify: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
      ignore_existing: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
      expires_in_days: z.union([z.number(), z.null(), z.undefined()]).optional(),
      template_slug: z.union([z.literal('invitation'), z.literal('waitlist_invitation'), z.undefined()]).optional(),
    }),
  }),
  response: Invitation,
}

export type get_ListInvitations = typeof get_ListInvitations
export const get_ListInvitations = {
  method: z.literal('GET'),
  path: z.literal('/invitations'),
  parameters: z.object({
    query: z.object({
      status: z
        .union([z.literal('pending'), z.literal('accepted'), z.literal('revoked'), z.literal('expired')])
        .optional(),
      query: z.string().optional(),
      order_by: z.string().optional(),
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: z.array(Invitation),
}

export type post_CreateBulkInvitations = typeof post_CreateBulkInvitations
export const post_CreateBulkInvitations = {
  method: z.literal('POST'),
  path: z.literal('/invitations/bulk'),
  parameters: z.object({
    body: z.array(
      z.object({
        email_address: z.string(),
        public_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
        redirect_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
        notify: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
        ignore_existing: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
        expires_in_days: z.union([z.number(), z.null(), z.undefined()]).optional(),
        template_slug: z.union([z.literal('invitation'), z.literal('waitlist_invitation'), z.undefined()]).optional(),
      }),
    ),
  }),
  response: z.array(Invitation),
}

export type post_RevokeInvitation = typeof post_RevokeInvitation
export const post_RevokeInvitation = {
  method: z.literal('POST'),
  path: z.literal('/invitations/{invitation_id}/revoke'),
  parameters: z.object({
    path: z.object({
      invitation_id: z.string(),
    }),
  }),
  response: z.intersection(
    Invitation,
    z.object({
      revoked: z.literal('true').optional(),
      status: z.literal('revoked').optional(),
    }),
  ),
}

export type get_ListInstanceOrganizationInvitations = typeof get_ListInstanceOrganizationInvitations
export const get_ListInstanceOrganizationInvitations = {
  method: z.literal('GET'),
  path: z.literal('/organization_invitations'),
  parameters: z.object({
    query: z.object({
      order_by: z.string().optional(),
      status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked')]).optional(),
      query: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: OrganizationInvitationsWithPublicOrganizationData,
}

export type get_ListAllowlistIdentifiers = typeof get_ListAllowlistIdentifiers
export const get_ListAllowlistIdentifiers = {
  method: z.literal('GET'),
  path: z.literal('/allowlist_identifiers'),
  parameters: z.object({
    query: z.object({
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: z.array(AllowlistIdentifier),
}

export type post_CreateAllowlistIdentifier = typeof post_CreateAllowlistIdentifier
export const post_CreateAllowlistIdentifier = {
  method: z.literal('POST'),
  path: z.literal('/allowlist_identifiers'),
  parameters: z.object({
    body: z.object({
      identifier: z.string(),
      notify: z.union([z.boolean(), z.undefined()]).optional(),
    }),
  }),
  response: AllowlistIdentifier,
}

export type delete_DeleteAllowlistIdentifier = typeof delete_DeleteAllowlistIdentifier
export const delete_DeleteAllowlistIdentifier = {
  method: z.literal('DELETE'),
  path: z.literal('/allowlist_identifiers/{identifier_id}'),
  parameters: z.object({
    path: z.object({
      identifier_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type get_ListBlocklistIdentifiers = typeof get_ListBlocklistIdentifiers
export const get_ListBlocklistIdentifiers = {
  method: z.literal('GET'),
  path: z.literal('/blocklist_identifiers'),
  parameters: z.never(),
  response: BlocklistIdentifiers,
}

export type post_CreateBlocklistIdentifier = typeof post_CreateBlocklistIdentifier
export const post_CreateBlocklistIdentifier = {
  method: z.literal('POST'),
  path: z.literal('/blocklist_identifiers'),
  parameters: z.object({
    body: z.object({
      identifier: z.string(),
    }),
  }),
  response: BlocklistIdentifier,
}

export type delete_DeleteBlocklistIdentifier = typeof delete_DeleteBlocklistIdentifier
export const delete_DeleteBlocklistIdentifier = {
  method: z.literal('DELETE'),
  path: z.literal('/blocklist_identifiers/{identifier_id}'),
  parameters: z.object({
    path: z.object({
      identifier_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type patch_UpdateInstanceAuthConfig = typeof patch_UpdateInstanceAuthConfig
export const patch_UpdateInstanceAuthConfig = {
  method: z.literal('PATCH'),
  path: z.literal('/beta_features/instance_settings'),
  parameters: z.object({
    body: z.object({
      restricted_to_allowlist: z.union([z.boolean(), z.null()]).optional(),
      from_email_address: z.union([z.string(), z.null()]).optional(),
      progressive_sign_up: z.union([z.boolean(), z.null()]).optional(),
      enhanced_email_deliverability: z.union([z.boolean(), z.null()]).optional(),
      test_mode: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: z.object({
    object: z.literal('instance_settings').optional(),
    id: z.string().optional(),
    restricted_to_allowlist: z.boolean().optional(),
    from_email_address: z.string().optional(),
    progressive_sign_up: z.boolean().optional(),
    enhanced_email_deliverability: z.boolean().optional(),
  }),
}

export type post_CreateActorToken = typeof post_CreateActorToken
export const post_CreateActorToken = {
  method: z.literal('POST'),
  path: z.literal('/actor_tokens'),
  parameters: z.object({
    body: z.object({
      user_id: z.string(),
      actor: z.intersection(
        z.object({
          sub: z.string(),
        }),
        z.object({
          string: z.any(),
        }),
      ),
      expires_in_seconds: z.union([z.number(), z.undefined()]).optional(),
      session_max_duration_in_seconds: z.union([z.number(), z.undefined()]).optional(),
    }),
  }),
  response: ActorToken,
}

export type post_RevokeActorToken = typeof post_RevokeActorToken
export const post_RevokeActorToken = {
  method: z.literal('POST'),
  path: z.literal('/actor_tokens/{actor_token_id}/revoke'),
  parameters: z.object({
    path: z.object({
      actor_token_id: z.string(),
    }),
  }),
  response: ActorToken,
}

export type get_ListDomains = typeof get_ListDomains
export const get_ListDomains = {
  method: z.literal('GET'),
  path: z.literal('/domains'),
  parameters: z.never(),
  response: Domains,
}

export type post_AddDomain = typeof post_AddDomain
export const post_AddDomain = {
  method: z.literal('POST'),
  path: z.literal('/domains'),
  parameters: z.object({
    body: z.object({
      name: z.string(),
      is_satellite: z.literal('true'),
      proxy_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: Domain,
}

export type delete_DeleteDomain = typeof delete_DeleteDomain
export const delete_DeleteDomain = {
  method: z.literal('DELETE'),
  path: z.literal('/domains/{domain_id}'),
  parameters: z.object({
    path: z.object({
      domain_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type patch_UpdateDomain = typeof patch_UpdateDomain
export const patch_UpdateDomain = {
  method: z.literal('PATCH'),
  path: z.literal('/domains/{domain_id}'),
  parameters: z.object({
    path: z.object({
      domain_id: z.string(),
    }),
    body: z.object({
      name: z.union([z.string(), z.null()]).optional(),
      proxy_url: z.union([z.string(), z.null()]).optional(),
      is_secondary: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: Domain,
}

export type get_GetInstance = typeof get_GetInstance
export const get_GetInstance = {
  method: z.literal('GET'),
  path: z.literal('/instance'),
  parameters: z.never(),
  response: Instance,
}

export type patch_UpdateInstance = typeof patch_UpdateInstance
export const patch_UpdateInstance = {
  method: z.literal('PATCH'),
  path: z.literal('/instance'),
  parameters: z.object({
    body: z.object({
      test_mode: z.union([z.boolean(), z.null()]).optional(),
      hibp: z.union([z.boolean(), z.null()]).optional(),
      enhanced_email_deliverability: z.union([z.boolean(), z.null()]).optional(),
      support_email: z.union([z.string(), z.null()]).optional(),
      clerk_js_version: z.union([z.string(), z.null()]).optional(),
      development_origin: z.union([z.string(), z.null()]).optional(),
      allowed_origins: z.array(z.string()).optional(),
      cookieless_dev: z.union([z.boolean(), z.null()]).optional(),
      url_based_session_syncing: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: z.unknown(),
}

export type patch_UpdateInstanceRestrictions = typeof patch_UpdateInstanceRestrictions
export const patch_UpdateInstanceRestrictions = {
  method: z.literal('PATCH'),
  path: z.literal('/instance/restrictions'),
  parameters: z.object({
    body: z.object({
      allowlist: z.union([z.boolean(), z.null()]).optional(),
      blocklist: z.union([z.boolean(), z.null()]).optional(),
      block_email_subaddresses: z.union([z.boolean(), z.null()]).optional(),
      block_disposable_email_domains: z.union([z.boolean(), z.null()]).optional(),
      ignore_dots_for_gmail_addresses: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: InstanceRestrictions,
}

export type post_ChangeProductionInstanceDomain = typeof post_ChangeProductionInstanceDomain
export const post_ChangeProductionInstanceDomain = {
  method: z.literal('POST'),
  path: z.literal('/instance/change_domain'),
  parameters: z.object({
    body: z.object({
      home_url: z.string().optional(),
      is_secondary: z.boolean().optional(),
    }),
  }),
  response: z.unknown(),
}

export type patch_UpdateInstanceOrganizationSettings = typeof patch_UpdateInstanceOrganizationSettings
export const patch_UpdateInstanceOrganizationSettings = {
  method: z.literal('PATCH'),
  path: z.literal('/instance/organization_settings'),
  parameters: z.object({
    body: z.object({
      enabled: z.union([z.boolean(), z.null()]).optional(),
      max_allowed_memberships: z.union([z.number(), z.null()]).optional(),
      admin_delete_enabled: z.union([z.boolean(), z.null()]).optional(),
      domains_enabled: z.union([z.boolean(), z.null()]).optional(),
      domains_enrollment_modes: z.array(z.string()).optional(),
      creator_role_id: z.union([z.string(), z.null()]).optional(),
      domains_default_role_id: z.union([z.string(), z.null()]).optional(),
    }),
  }),
  response: OrganizationSettings,
}

export type post_CreateSvixApp = typeof post_CreateSvixApp
export const post_CreateSvixApp = {
  method: z.literal('POST'),
  path: z.literal('/webhooks/svix'),
  parameters: z.never(),
  response: SvixURL,
}

export type delete_DeleteSvixApp = typeof delete_DeleteSvixApp
export const delete_DeleteSvixApp = {
  method: z.literal('DELETE'),
  path: z.literal('/webhooks/svix'),
  parameters: z.never(),
  response: z.unknown(),
}

export type post_GenerateSvixAuthURL = typeof post_GenerateSvixAuthURL
export const post_GenerateSvixAuthURL = {
  method: z.literal('POST'),
  path: z.literal('/webhooks/svix_url'),
  parameters: z.never(),
  response: SvixURL,
}

export type get_ListJWTTemplates = typeof get_ListJWTTemplates
export const get_ListJWTTemplates = {
  method: z.literal('GET'),
  path: z.literal('/jwt_templates'),
  parameters: z.object({
    query: z.object({
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: z.array(JWTTemplate),
}

export type post_CreateJWTTemplate = typeof post_CreateJWTTemplate
export const post_CreateJWTTemplate = {
  method: z.literal('POST'),
  path: z.literal('/jwt_templates'),
  parameters: z.object({
    body: z.object({
      name: z.string(),
      claims: z.unknown(),
      lifetime: z.union([z.number(), z.null(), z.undefined()]).optional(),
      allowed_clock_skew: z.union([z.number(), z.null(), z.undefined()]).optional(),
      custom_signing_key: z.union([z.boolean(), z.undefined()]).optional(),
      signing_algorithm: z.union([z.string(), z.null(), z.undefined()]).optional(),
      signing_key: z.union([z.string(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: JWTTemplate,
}

export type get_GetJWTTemplate = typeof get_GetJWTTemplate
export const get_GetJWTTemplate = {
  method: z.literal('GET'),
  path: z.literal('/jwt_templates/{template_id}'),
  parameters: z.object({
    path: z.object({
      template_id: z.string(),
    }),
  }),
  response: JWTTemplate,
}

export type patch_UpdateJWTTemplate = typeof patch_UpdateJWTTemplate
export const patch_UpdateJWTTemplate = {
  method: z.literal('PATCH'),
  path: z.literal('/jwt_templates/{template_id}'),
  parameters: z.object({
    path: z.object({
      template_id: z.string(),
    }),
    body: z.object({
      name: z.string(),
      claims: z.unknown(),
      lifetime: z.union([z.number(), z.null(), z.undefined()]).optional(),
      allowed_clock_skew: z.union([z.number(), z.null(), z.undefined()]).optional(),
      custom_signing_key: z.union([z.boolean(), z.undefined()]).optional(),
      signing_algorithm: z.union([z.string(), z.null(), z.undefined()]).optional(),
      signing_key: z.union([z.string(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: JWTTemplate,
}

export type delete_DeleteJWTTemplate = typeof delete_DeleteJWTTemplate
export const delete_DeleteJWTTemplate = {
  method: z.literal('DELETE'),
  path: z.literal('/jwt_templates/{template_id}'),
  parameters: z.object({
    path: z.object({
      template_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type get_ListOrganizations = typeof get_ListOrganizations
export const get_ListOrganizations = {
  method: z.literal('GET'),
  path: z.literal('/organizations'),
  parameters: z.object({
    query: z.object({
      include_members_count: z.boolean().optional(),
      include_missing_member_with_elevated_permissions: z.boolean().optional(),
      query: z.string().optional(),
      user_id: z.array(z.string()).optional(),
      organization_id: z.array(z.string()).optional(),
      order_by: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: Organizations,
}

export type post_CreateOrganization = typeof post_CreateOrganization
export const post_CreateOrganization = {
  method: z.literal('POST'),
  path: z.literal('/organizations'),
  parameters: z.object({
    body: z.object({
      name: z.string(),
      created_by: z.union([z.string(), z.null(), z.undefined()]).optional(),
      private_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
      public_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
      slug: z.union([z.string(), z.null(), z.undefined()]).optional(),
      max_allowed_memberships: z.union([z.number(), z.null(), z.undefined()]).optional(),
      created_at: z.union([z.string(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: Organization,
}

export type get_GetOrganization = typeof get_GetOrganization
export const get_GetOrganization = {
  method: z.literal('GET'),
  path: z.literal('/organizations/{organization_id}'),
  parameters: z.object({
    query: z.object({
      include_members_count: z.boolean().optional(),
      include_missing_member_with_elevated_permissions: z.boolean().optional(),
    }),
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: Organization,
}

export type patch_UpdateOrganization = typeof patch_UpdateOrganization
export const patch_UpdateOrganization = {
  method: z.literal('PATCH'),
  path: z.literal('/organizations/{organization_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      public_metadata: z.union([z.unknown(), z.null()]).optional(),
      private_metadata: z.union([z.unknown(), z.null()]).optional(),
      name: z.union([z.string(), z.null()]).optional(),
      slug: z.union([z.string(), z.null()]).optional(),
      max_allowed_memberships: z.union([z.number(), z.null()]).optional(),
      admin_delete_enabled: z.union([z.boolean(), z.null()]).optional(),
      created_at: z.union([z.string(), z.null()]).optional(),
    }),
  }),
  response: Organization,
}

export type delete_DeleteOrganization = typeof delete_DeleteOrganization
export const delete_DeleteOrganization = {
  method: z.literal('DELETE'),
  path: z.literal('/organizations/{organization_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type patch_MergeOrganizationMetadata = typeof patch_MergeOrganizationMetadata
export const patch_MergeOrganizationMetadata = {
  method: z.literal('PATCH'),
  path: z.literal('/organizations/{organization_id}/metadata'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      public_metadata: z.unknown().optional(),
      private_metadata: z.unknown().optional(),
    }),
  }),
  response: Organization,
}

export type put_UploadOrganizationLogo = typeof put_UploadOrganizationLogo
export const put_UploadOrganizationLogo = {
  method: z.literal('PUT'),
  path: z.literal('/organizations/{organization_id}/logo'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      uploader_user_id: z.union([z.string(), z.undefined()]).optional(),
      file: z.string(),
    }),
  }),
  response: OrganizationWithLogo,
}

export type delete_DeleteOrganizationLogo = typeof delete_DeleteOrganizationLogo
export const delete_DeleteOrganizationLogo = {
  method: z.literal('DELETE'),
  path: z.literal('/organizations/{organization_id}/logo'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: Organization,
}

export type post_CreateOrganizationInvitation = typeof post_CreateOrganizationInvitation
export const post_CreateOrganizationInvitation = {
  method: z.literal('POST'),
  path: z.literal('/organizations/{organization_id}/invitations'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      email_address: z.string(),
      inviter_user_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
      role: z.string(),
      public_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
      private_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
      redirect_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
      expires_in_days: z.union([z.number(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: OrganizationInvitation,
}

export type get_ListOrganizationInvitations = typeof get_ListOrganizationInvitations
export const get_ListOrganizationInvitations = {
  method: z.literal('GET'),
  path: z.literal('/organizations/{organization_id}/invitations'),
  parameters: z.object({
    query: z.object({
      status: z.union([z.literal('pending'), z.literal('accepted'), z.literal('revoked')]).optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: OrganizationInvitations,
}

export type post_CreateOrganizationInvitationBulk = typeof post_CreateOrganizationInvitationBulk
export const post_CreateOrganizationInvitationBulk = {
  method: z.literal('POST'),
  path: z.literal('/organizations/{organization_id}/invitations/bulk'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.array(
      z.object({
        email_address: z.string(),
        inviter_user_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
        role: z.string(),
        public_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
        private_metadata: z.union([z.unknown(), z.null(), z.undefined()]).optional(),
        redirect_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
        expires_in_days: z.union([z.number(), z.null(), z.undefined()]).optional(),
      }),
    ),
  }),
  response: OrganizationInvitations,
}

export type get_GetOrganizationInvitation = typeof get_GetOrganizationInvitation
export const get_GetOrganizationInvitation = {
  method: z.literal('GET'),
  path: z.literal('/organizations/{organization_id}/invitations/{invitation_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      invitation_id: z.string(),
    }),
  }),
  response: OrganizationInvitation,
}

export type post_RevokeOrganizationInvitation = typeof post_RevokeOrganizationInvitation
export const post_RevokeOrganizationInvitation = {
  method: z.literal('POST'),
  path: z.literal('/organizations/{organization_id}/invitations/{invitation_id}/revoke'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      invitation_id: z.string(),
    }),
    body: z.object({
      requesting_user_id: z.union([z.string(), z.null()]).optional(),
    }),
  }),
  response: OrganizationInvitation,
}

export type post_CreateOrganizationMembership = typeof post_CreateOrganizationMembership
export const post_CreateOrganizationMembership = {
  method: z.literal('POST'),
  path: z.literal('/organizations/{organization_id}/memberships'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      user_id: z.string(),
      role: z.string(),
    }),
  }),
  response: OrganizationMembership,
}

export type get_ListOrganizationMemberships = typeof get_ListOrganizationMemberships
export const get_ListOrganizationMemberships = {
  method: z.literal('GET'),
  path: z.literal('/organizations/{organization_id}/memberships'),
  parameters: z.object({
    query: z.object({
      order_by: z.string().optional(),
      user_id: z.array(z.string()).optional(),
      email_address: z.array(z.string()).optional(),
      phone_number: z.array(z.string()).optional(),
      username: z.array(z.string()).optional(),
      web3_wallet: z.array(z.string()).optional(),
      role: z.array(z.string()).optional(),
      query: z.string().optional(),
      email_address_query: z.string().optional(),
      phone_number_query: z.string().optional(),
      username_query: z.string().optional(),
      name_query: z.string().optional(),
      last_active_at_before: z.number().optional(),
      last_active_at_after: z.number().optional(),
      created_at_before: z.number().optional(),
      created_at_after: z.number().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: OrganizationMemberships,
}

export type patch_UpdateOrganizationMembership = typeof patch_UpdateOrganizationMembership
export const patch_UpdateOrganizationMembership = {
  method: z.literal('PATCH'),
  path: z.literal('/organizations/{organization_id}/memberships/{user_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      user_id: z.string(),
    }),
    body: z.object({
      role: z.string(),
    }),
  }),
  response: OrganizationMembership,
}

export type delete_DeleteOrganizationMembership = typeof delete_DeleteOrganizationMembership
export const delete_DeleteOrganizationMembership = {
  method: z.literal('DELETE'),
  path: z.literal('/organizations/{organization_id}/memberships/{user_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      user_id: z.string(),
    }),
  }),
  response: OrganizationMembership,
}

export type patch_UpdateOrganizationMembershipMetadata = typeof patch_UpdateOrganizationMembershipMetadata
export const patch_UpdateOrganizationMembershipMetadata = {
  method: z.literal('PATCH'),
  path: z.literal('/organizations/{organization_id}/memberships/{user_id}/metadata'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      user_id: z.string(),
    }),
    body: z.object({
      public_metadata: z.unknown().optional(),
      private_metadata: z.unknown().optional(),
    }),
  }),
  response: OrganizationMembership,
}

export type post_CreateOrganizationDomain = typeof post_CreateOrganizationDomain
export const post_CreateOrganizationDomain = {
  method: z.literal('POST'),
  path: z.literal('/organizations/{organization_id}/domains'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
    }),
    body: z.object({
      name: z.string().optional(),
      enrollment_mode: z.string().optional(),
      verified: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: OrganizationDomain,
}

export type get_ListOrganizationDomains = typeof get_ListOrganizationDomains
export const get_ListOrganizationDomains = {
  method: z.literal('GET'),
  path: z.literal('/organizations/{organization_id}/domains'),
  parameters: z.object({
    query: z.object({
      verified: z.string().optional(),
      enrollment_mode: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      organization_id: z.string(),
    }),
  }),
  response: OrganizationDomains,
}

export type patch_UpdateOrganizationDomain = typeof patch_UpdateOrganizationDomain
export const patch_UpdateOrganizationDomain = {
  method: z.literal('PATCH'),
  path: z.literal('/organizations/{organization_id}/domains/{domain_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      domain_id: z.string(),
    }),
    body: z.object({
      enrollment_mode: z.union([z.string(), z.null()]).optional(),
      verified: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: OrganizationDomain,
}

export type delete_DeleteOrganizationDomain = typeof delete_DeleteOrganizationDomain
export const delete_DeleteOrganizationDomain = {
  method: z.literal('DELETE'),
  path: z.literal('/organizations/{organization_id}/domains/{domain_id}'),
  parameters: z.object({
    path: z.object({
      organization_id: z.string(),
      domain_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_VerifyDomainProxy = typeof post_VerifyDomainProxy
export const post_VerifyDomainProxy = {
  method: z.literal('POST'),
  path: z.literal('/proxy_checks'),
  parameters: z.object({
    body: z.object({
      domain_id: z.string().optional(),
      proxy_url: z.string().optional(),
    }),
  }),
  response: ProxyCheck,
}

export type get_ListRedirectURLs = typeof get_ListRedirectURLs
export const get_ListRedirectURLs = {
  method: z.literal('GET'),
  path: z.literal('/redirect_urls'),
  parameters: z.object({
    query: z.object({
      paginated: z.boolean().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: z.array(RedirectURL),
}

export type post_CreateRedirectURL = typeof post_CreateRedirectURL
export const post_CreateRedirectURL = {
  method: z.literal('POST'),
  path: z.literal('/redirect_urls'),
  parameters: z.object({
    body: z.object({
      url: z.string(),
    }),
  }),
  response: RedirectURL,
}

export type get_GetRedirectURL = typeof get_GetRedirectURL
export const get_GetRedirectURL = {
  method: z.literal('GET'),
  path: z.literal('/redirect_urls/{id}'),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: RedirectURL,
}

export type delete_DeleteRedirectURL = typeof delete_DeleteRedirectURL
export const delete_DeleteRedirectURL = {
  method: z.literal('DELETE'),
  path: z.literal('/redirect_urls/{id}'),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_CreateSignInToken = typeof post_CreateSignInToken
export const post_CreateSignInToken = {
  method: z.literal('POST'),
  path: z.literal('/sign_in_tokens'),
  parameters: z.object({
    body: z.object({
      user_id: z.string(),
      expires_in_seconds: z.union([z.number(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: SignInToken,
}

export type post_RevokeSignInToken = typeof post_RevokeSignInToken
export const post_RevokeSignInToken = {
  method: z.literal('POST'),
  path: z.literal('/sign_in_tokens/{sign_in_token_id}/revoke'),
  parameters: z.object({
    path: z.object({
      sign_in_token_id: z.string(),
    }),
  }),
  response: SignInToken,
}

export type get_GetSignUp = typeof get_GetSignUp
export const get_GetSignUp = {
  method: z.literal('GET'),
  path: z.literal('/sign_ups/{id}'),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
  }),
  response: SignUp,
}

export type patch_UpdateSignUp = typeof patch_UpdateSignUp
export const patch_UpdateSignUp = {
  method: z.literal('PATCH'),
  path: z.literal('/sign_ups/{id}'),
  parameters: z.object({
    path: z.object({
      id: z.string(),
    }),
    body: z.object({
      external_id: z.union([z.string(), z.null()]).optional(),
      custom_action: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: SignUp,
}

export type get_ListOAuthApplications = typeof get_ListOAuthApplications
export const get_ListOAuthApplications = {
  method: z.literal('GET'),
  path: z.literal('/oauth_applications'),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: OAuthApplications,
}

export type post_CreateOAuthApplication = typeof post_CreateOAuthApplication
export const post_CreateOAuthApplication = {
  method: z.literal('POST'),
  path: z.literal('/oauth_applications'),
  parameters: z.object({
    body: z.object({
      name: z.string(),
      redirect_uris: z.union([z.array(z.string()), z.null(), z.undefined()]).optional(),
      callback_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
      scopes: z.union([z.string(), z.null(), z.undefined()]).optional(),
      public: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: OAuthApplicationWithSecret,
}

export type get_GetOAuthApplication = typeof get_GetOAuthApplication
export const get_GetOAuthApplication = {
  method: z.literal('GET'),
  path: z.literal('/oauth_applications/{oauth_application_id}'),
  parameters: z.object({
    path: z.object({
      oauth_application_id: z.string(),
    }),
  }),
  response: OAuthApplication,
}

export type patch_UpdateOAuthApplication = typeof patch_UpdateOAuthApplication
export const patch_UpdateOAuthApplication = {
  method: z.literal('PATCH'),
  path: z.literal('/oauth_applications/{oauth_application_id}'),
  parameters: z.object({
    path: z.object({
      oauth_application_id: z.string(),
    }),
    body: z.object({
      name: z.union([z.string(), z.null()]).optional(),
      redirect_uris: z.union([z.array(z.string()), z.null()]).optional(),
      callback_url: z.union([z.string(), z.null()]).optional(),
      scopes: z.union([z.string(), z.null()]).optional(),
      public: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: OAuthApplication,
}

export type delete_DeleteOAuthApplication = typeof delete_DeleteOAuthApplication
export const delete_DeleteOAuthApplication = {
  method: z.literal('DELETE'),
  path: z.literal('/oauth_applications/{oauth_application_id}'),
  parameters: z.object({
    path: z.object({
      oauth_application_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_RotateOAuthApplicationSecret = typeof post_RotateOAuthApplicationSecret
export const post_RotateOAuthApplicationSecret = {
  method: z.literal('POST'),
  path: z.literal('/oauth_applications/{oauth_application_id}/rotate_secret'),
  parameters: z.object({
    path: z.object({
      oauth_application_id: z.string(),
    }),
  }),
  response: OAuthApplicationWithSecret,
}

export type get_ListSAMLConnections = typeof get_ListSAMLConnections
export const get_ListSAMLConnections = {
  method: z.literal('GET'),
  path: z.literal('/saml_connections'),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
      query: z.string().optional(),
      order_by: z.string().optional(),
      organization_id: z.array(z.string()).optional(),
    }),
  }),
  response: SAMLConnections,
}

export type post_CreateSAMLConnection = typeof post_CreateSAMLConnection
export const post_CreateSAMLConnection = {
  method: z.literal('POST'),
  path: z.literal('/saml_connections'),
  parameters: z.object({
    body: z.object({
      name: z.string(),
      domain: z.string(),
      provider: z.union([
        z.literal('saml_custom'),
        z.literal('saml_okta'),
        z.literal('saml_google'),
        z.literal('saml_microsoft'),
      ]),
      idp_entity_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
      idp_sso_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
      idp_certificate: z.union([z.string(), z.null(), z.undefined()]).optional(),
      idp_metadata_url: z.union([z.string(), z.null(), z.undefined()]).optional(),
      idp_metadata: z.union([z.string(), z.null(), z.undefined()]).optional(),
      organization_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
      attribute_mapping: z
        .union([
          z.object({
            user_id: z.string().optional(),
            email_address: z.string().optional(),
            first_name: z.string().optional(),
            last_name: z.string().optional(),
          }),
          z.null(),
          z.undefined(),
        ])
        .optional(),
    }),
  }),
  response: schemas_SAMLConnection,
}

export type get_GetSAMLConnection = typeof get_GetSAMLConnection
export const get_GetSAMLConnection = {
  method: z.literal('GET'),
  path: z.literal('/saml_connections/{saml_connection_id}'),
  parameters: z.object({
    path: z.object({
      saml_connection_id: z.string(),
    }),
  }),
  response: schemas_SAMLConnection,
}

export type patch_UpdateSAMLConnection = typeof patch_UpdateSAMLConnection
export const patch_UpdateSAMLConnection = {
  method: z.literal('PATCH'),
  path: z.literal('/saml_connections/{saml_connection_id}'),
  parameters: z.object({
    path: z.object({
      saml_connection_id: z.string(),
    }),
    body: z.object({
      name: z.union([z.string(), z.null()]).optional(),
      domain: z.union([z.string(), z.null()]).optional(),
      idp_entity_id: z.union([z.string(), z.null()]).optional(),
      idp_sso_url: z.union([z.string(), z.null()]).optional(),
      idp_certificate: z.union([z.string(), z.null()]).optional(),
      idp_metadata_url: z.union([z.string(), z.null()]).optional(),
      idp_metadata: z.union([z.string(), z.null()]).optional(),
      organization_id: z.union([z.string(), z.null()]).optional(),
      attribute_mapping: z
        .union([
          z.object({
            user_id: z.string().optional(),
            email_address: z.string().optional(),
            first_name: z.string().optional(),
            last_name: z.string().optional(),
          }),
          z.null(),
        ])
        .optional(),
      active: z.union([z.boolean(), z.null()]).optional(),
      sync_user_attributes: z.union([z.boolean(), z.null()]).optional(),
      allow_subdomains: z.union([z.boolean(), z.null()]).optional(),
      allow_idp_initiated: z.union([z.boolean(), z.null()]).optional(),
      disable_additional_identifications: z.union([z.boolean(), z.null()]).optional(),
    }),
  }),
  response: schemas_SAMLConnection,
}

export type delete_DeleteSAMLConnection = typeof delete_DeleteSAMLConnection
export const delete_DeleteSAMLConnection = {
  method: z.literal('DELETE'),
  path: z.literal('/saml_connections/{saml_connection_id}'),
  parameters: z.object({
    path: z.object({
      saml_connection_id: z.string(),
    }),
  }),
  response: DeletedObject,
}

export type post_CreateTestingToken = typeof post_CreateTestingToken
export const post_CreateTestingToken = {
  method: z.literal('POST'),
  path: z.literal('/testing_tokens'),
  parameters: z.never(),
  response: TestingToken,
}

export type get_InstanceGetOrganizationMemberships = typeof get_InstanceGetOrganizationMemberships
export const get_InstanceGetOrganizationMemberships = {
  method: z.literal('GET'),
  path: z.literal('/organization_memberships'),
  parameters: z.object({
    query: z.object({
      order_by: z.string().optional(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
  }),
  response: OrganizationMemberships,
}

export type get_ListWaitlistEntries = typeof get_ListWaitlistEntries
export const get_ListWaitlistEntries = {
  method: z.literal('GET'),
  path: z.literal('/waitlist_entries'),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
      query: z.string().optional(),
      status: z
        .union([z.literal('pending'), z.literal('invited'), z.literal('completed'), z.literal('rejected')])
        .optional(),
      order_by: z.string().optional(),
    }),
  }),
  response: z.object({
    data: z.array(WaitlistEntry),
    total_count: z.number(),
  }),
}

export type post_CreateWaitlistEntry = typeof post_CreateWaitlistEntry
export const post_CreateWaitlistEntry = {
  method: z.literal('POST'),
  path: z.literal('/waitlist_entries'),
  parameters: z.object({
    body: z.object({
      email_address: z.string(),
      notify: z.union([z.boolean(), z.null(), z.undefined()]).optional(),
    }),
  }),
  response: WaitlistEntry,
}

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/public/interstitial': get_GetPublicInterstitial,
    '/jwks': get_GetJWKS,
    '/clients/{client_id}': get_GetClient,
    '/email_addresses/{email_address_id}': get_GetEmailAddress,
    '/phone_numbers/{phone_number_id}': get_GetPhoneNumber,
    '/sessions': get_GetSessionList,
    '/sessions/{session_id}': get_GetSession,
    '/users': get_GetUserList,
    '/users/count': get_GetUsersCount,
    '/users/{user_id}': get_GetUser,
    '/users/{user_id}/oauth_access_tokens/{provider}': get_GetOAuthAccessToken,
    '/users/{user_id}/organization_memberships': get_UsersGetOrganizationMemberships,
    '/users/{user_id}/organization_invitations': get_UsersGetOrganizationInvitations,
    '/invitations': get_ListInvitations,
    '/organization_invitations': get_ListInstanceOrganizationInvitations,
    '/allowlist_identifiers': get_ListAllowlistIdentifiers,
    '/blocklist_identifiers': get_ListBlocklistIdentifiers,
    '/domains': get_ListDomains,
    '/instance': get_GetInstance,
    '/jwt_templates': get_ListJWTTemplates,
    '/jwt_templates/{template_id}': get_GetJWTTemplate,
    '/organizations': get_ListOrganizations,
    '/organizations/{organization_id}': get_GetOrganization,
    '/organizations/{organization_id}/invitations': get_ListOrganizationInvitations,
    '/organizations/{organization_id}/invitations/{invitation_id}': get_GetOrganizationInvitation,
    '/organizations/{organization_id}/memberships': get_ListOrganizationMemberships,
    '/organizations/{organization_id}/domains': get_ListOrganizationDomains,
    '/redirect_urls': get_ListRedirectURLs,
    '/redirect_urls/{id}': get_GetRedirectURL,
    '/sign_ups/{id}': get_GetSignUp,
    '/oauth_applications': get_ListOAuthApplications,
    '/oauth_applications/{oauth_application_id}': get_GetOAuthApplication,
    '/saml_connections': get_ListSAMLConnections,
    '/saml_connections/{saml_connection_id}': get_GetSAMLConnection,
    '/organization_memberships': get_InstanceGetOrganizationMemberships,
    '/waitlist_entries': get_ListWaitlistEntries,
  },
  post: {
    '/clients/verify': post_VerifyClient,
    '/email_addresses': post_CreateEmailAddress,
    '/phone_numbers': post_CreatePhoneNumber,
    '/sessions': post_CreateSession,
    '/sessions/{session_id}/revoke': post_RevokeSession,
    '/sessions/{session_id}/tokens': post_CreateSessionToken,
    '/sessions/{session_id}/tokens/{template_name}': post_CreateSessionTokenFromTemplate,
    '/users': post_CreateUser,
    '/users/{user_id}/ban': post_BanUser,
    '/users/{user_id}/unban': post_UnbanUser,
    '/users/{user_id}/lock': post_LockUser,
    '/users/{user_id}/unlock': post_UnlockUser,
    '/users/{user_id}/profile_image': post_SetUserProfileImage,
    '/users/{user_id}/verify_password': post_VerifyPassword,
    '/users/{user_id}/verify_totp': post_VerifyTOTP,
    '/invitations': post_CreateInvitation,
    '/invitations/bulk': post_CreateBulkInvitations,
    '/invitations/{invitation_id}/revoke': post_RevokeInvitation,
    '/allowlist_identifiers': post_CreateAllowlistIdentifier,
    '/blocklist_identifiers': post_CreateBlocklistIdentifier,
    '/actor_tokens': post_CreateActorToken,
    '/actor_tokens/{actor_token_id}/revoke': post_RevokeActorToken,
    '/domains': post_AddDomain,
    '/instance/change_domain': post_ChangeProductionInstanceDomain,
    '/webhooks/svix': post_CreateSvixApp,
    '/webhooks/svix_url': post_GenerateSvixAuthURL,
    '/jwt_templates': post_CreateJWTTemplate,
    '/organizations': post_CreateOrganization,
    '/organizations/{organization_id}/invitations': post_CreateOrganizationInvitation,
    '/organizations/{organization_id}/invitations/bulk': post_CreateOrganizationInvitationBulk,
    '/organizations/{organization_id}/invitations/{invitation_id}/revoke': post_RevokeOrganizationInvitation,
    '/organizations/{organization_id}/memberships': post_CreateOrganizationMembership,
    '/organizations/{organization_id}/domains': post_CreateOrganizationDomain,
    '/proxy_checks': post_VerifyDomainProxy,
    '/redirect_urls': post_CreateRedirectURL,
    '/sign_in_tokens': post_CreateSignInToken,
    '/sign_in_tokens/{sign_in_token_id}/revoke': post_RevokeSignInToken,
    '/oauth_applications': post_CreateOAuthApplication,
    '/oauth_applications/{oauth_application_id}/rotate_secret': post_RotateOAuthApplicationSecret,
    '/saml_connections': post_CreateSAMLConnection,
    '/testing_tokens': post_CreateTestingToken,
    '/waitlist_entries': post_CreateWaitlistEntry,
  },
  delete: {
    '/email_addresses/{email_address_id}': delete_DeleteEmailAddress,
    '/phone_numbers/{phone_number_id}': delete_DeletePhoneNumber,
    '/users/{user_id}': delete_DeleteUser,
    '/users/{user_id}/profile_image': delete_DeleteUserProfileImage,
    '/users/{user_id}/mfa': delete_DisableMFA,
    '/users/{user_id}/backup_code': delete_DeleteBackupCode,
    '/users/{user_id}/passkeys/{passkey_identification_id}': delete_UserPasskeyDelete,
    '/users/{user_id}/web3_wallets/{web3_wallet_identification_id}': delete_UserWeb3WalletDelete,
    '/users/{user_id}/totp': delete_DeleteTOTP,
    '/users/{user_id}/external_accounts/{external_account_id}': delete_DeleteExternalAccount,
    '/allowlist_identifiers/{identifier_id}': delete_DeleteAllowlistIdentifier,
    '/blocklist_identifiers/{identifier_id}': delete_DeleteBlocklistIdentifier,
    '/domains/{domain_id}': delete_DeleteDomain,
    '/webhooks/svix': delete_DeleteSvixApp,
    '/jwt_templates/{template_id}': delete_DeleteJWTTemplate,
    '/organizations/{organization_id}': delete_DeleteOrganization,
    '/organizations/{organization_id}/logo': delete_DeleteOrganizationLogo,
    '/organizations/{organization_id}/memberships/{user_id}': delete_DeleteOrganizationMembership,
    '/organizations/{organization_id}/domains/{domain_id}': delete_DeleteOrganizationDomain,
    '/redirect_urls/{id}': delete_DeleteRedirectURL,
    '/oauth_applications/{oauth_application_id}': delete_DeleteOAuthApplication,
    '/saml_connections/{saml_connection_id}': delete_DeleteSAMLConnection,
  },
  patch: {
    '/email_addresses/{email_address_id}': patch_UpdateEmailAddress,
    '/phone_numbers/{phone_number_id}': patch_UpdatePhoneNumber,
    '/users/{user_id}': patch_UpdateUser,
    '/users/{user_id}/metadata': patch_UpdateUserMetadata,
    '/beta_features/instance_settings': patch_UpdateInstanceAuthConfig,
    '/domains/{domain_id}': patch_UpdateDomain,
    '/instance': patch_UpdateInstance,
    '/instance/restrictions': patch_UpdateInstanceRestrictions,
    '/instance/organization_settings': patch_UpdateInstanceOrganizationSettings,
    '/jwt_templates/{template_id}': patch_UpdateJWTTemplate,
    '/organizations/{organization_id}': patch_UpdateOrganization,
    '/organizations/{organization_id}/metadata': patch_MergeOrganizationMetadata,
    '/organizations/{organization_id}/memberships/{user_id}': patch_UpdateOrganizationMembership,
    '/organizations/{organization_id}/memberships/{user_id}/metadata': patch_UpdateOrganizationMembershipMetadata,
    '/organizations/{organization_id}/domains/{domain_id}': patch_UpdateOrganizationDomain,
    '/sign_ups/{id}': patch_UpdateSignUp,
    '/oauth_applications/{oauth_application_id}': patch_UpdateOAuthApplication,
    '/saml_connections/{saml_connection_id}': patch_UpdateSAMLConnection,
  },
  put: {
    '/organizations/{organization_id}/logo': put_UploadOrganizationLogo,
  },
}
export type EndpointByMethod = typeof EndpointByMethod
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get']
export type PostEndpoints = EndpointByMethod['post']
export type DeleteEndpoints = EndpointByMethod['delete']
export type PatchEndpoints = EndpointByMethod['patch']
export type PutEndpoints = EndpointByMethod['put']
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod]
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export interface EndpointParameters {
  body?: unknown
  query?: Record<string, unknown>
  header?: Record<string, unknown>
  path?: Record<string, unknown>
}

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete'
export type Method = 'get' | 'head' | MutationMethod

export interface DefaultEndpoint {
  parameters?: EndpointParameters | undefined
  response: unknown
}

export interface Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> {
  operationId: string
  method: Method
  path: string
  parameters?: TConfig['parameters']
  meta: {
    alias: string
    hasParameters: boolean
    areParametersRequired: boolean
  }
  response: TConfig['response']
}

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint['response']>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T]

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T]

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = ''

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl
    return this
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('get', this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint['response']>>
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('post', this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint['response']>>
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('delete', this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint['response']>>
  }
  // </ApiClient.delete>

  // <ApiClient.patch>
  patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('patch', this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint['response']>>
  }
  // </ApiClient.patch>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('put', this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint['response']>>
  }
  // </ApiClient.put>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? '')
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
 */

// </ApiClient
