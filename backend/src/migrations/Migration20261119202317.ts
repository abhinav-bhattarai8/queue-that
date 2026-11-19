import { Migration } from '@mikro-orm/migrations';

export class Migration20261119202317 extends Migration {

  override name = 'Migration20261119202317';

  override up(): void | Promise<void> {
    this.addSql(`drop view if exists "extensions"."pg_stat_statements" cascade;`);
    this.addSql(`drop view if exists "extensions"."pg_stat_statements_info" cascade;`);
    this.addSql(`alter table "auth"."saml_relay_states" drop constraint "saml_relay_states_flow_state_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_challenges" drop constraint "mfa_challenges_auth_factor_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_recovery_code_sets" drop constraint "mfa_recovery_code_sets_mfa_factor_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_recovery_codes" drop constraint "mfa_recovery_codes_mfa_recovery_code_set_id_fkey";`);
    this.addSql(`alter table "auth"."oauth_authorizations" drop constraint "oauth_authorizations_client_id_fkey";`);
    this.addSql(`alter table "auth"."oauth_consents" drop constraint "oauth_consents_client_id_fkey";`);
    this.addSql(`alter table "auth"."sessions" drop constraint "sessions_oauth_client_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_amr_claims" drop constraint "mfa_amr_claims_session_id_fkey";`);
    this.addSql(`alter table "auth"."refresh_tokens" drop constraint "refresh_tokens_session_id_fkey";`);
    this.addSql(`alter table "auth"."saml_providers" drop constraint "saml_providers_sso_provider_id_fkey";`);
    this.addSql(`alter table "auth"."saml_relay_states" drop constraint "saml_relay_states_sso_provider_id_fkey";`);
    this.addSql(`alter table "auth"."scim_tokens" drop constraint "scim_tokens_sso_provider_id_fkey";`);
    this.addSql(`alter table "auth"."scim_users" drop constraint "scim_users_sso_provider_id_fkey";`);
    this.addSql(`alter table "auth"."sso_domains" drop constraint "sso_domains_sso_provider_id_fkey";`);
    this.addSql(`alter table "auth"."identities" drop constraint "identities_user_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_factors" drop constraint "mfa_factors_user_id_fkey";`);
    this.addSql(`alter table "auth"."mfa_recovery_code_sets" drop constraint "mfa_recovery_code_sets_user_id_fkey";`);
    this.addSql(`alter table "auth"."oauth_authorizations" drop constraint "oauth_authorizations_user_id_fkey";`);
    this.addSql(`alter table "auth"."oauth_consents" drop constraint "oauth_consents_user_id_fkey";`);
    this.addSql(`alter table "auth"."one_time_tokens" drop constraint "one_time_tokens_user_id_fkey";`);
    this.addSql(`alter table "auth"."scim_users" drop constraint "scim_users_user_id_fkey";`);
    this.addSql(`alter table "auth"."sessions" drop constraint "sessions_user_id_fkey";`);
    this.addSql(`alter table "auth"."webauthn_challenges" drop constraint "webauthn_challenges_user_id_fkey";`);
    this.addSql(`alter table "auth"."webauthn_credentials" drop constraint "webauthn_credentials_user_id_fkey";`);
    this.addSql(`alter table "storage"."bucket_lifecycle_states" drop constraint "bucket_lifecycle_states_bucket_id_fkey";`);
    this.addSql(`alter table "storage"."objects" drop constraint "objects_bucketId_fkey";`);
    this.addSql(`alter table "storage"."s3_multipart_uploads" drop constraint "s3_multipart_uploads_bucket_id_fkey";`);
    this.addSql(`alter table "storage"."s3_multipart_uploads_parts" drop constraint "s3_multipart_uploads_parts_bucket_id_fkey";`);
    this.addSql(`alter table "storage"."vector_indexes" drop constraint "vector_indexes_bucket_id_fkey";`);
    this.addSql(`alter table "storage"."s3_multipart_uploads_parts" drop constraint "s3_multipart_uploads_parts_upload_id_fkey";`);

    this.addSql(`drop table if exists "auth"."audit_log_entries" cascade;`);
    this.addSql(`drop table if exists "auth"."custom_oauth_providers" cascade;`);
    this.addSql(`drop table if exists "auth"."flow_state" cascade;`);
    this.addSql(`drop table if exists "auth"."identities" cascade;`);
    this.addSql(`drop table if exists "auth"."instances" cascade;`);
    this.addSql(`drop table if exists "auth"."mfa_amr_claims" cascade;`);
    this.addSql(`drop table if exists "auth"."mfa_challenges" cascade;`);
    this.addSql(`drop table if exists "auth"."mfa_factors" cascade;`);
    this.addSql(`drop table if exists "auth"."mfa_recovery_code_sets" cascade;`);
    this.addSql(`drop table if exists "auth"."mfa_recovery_codes" cascade;`);
    this.addSql(`drop table if exists "auth"."oauth_authorizations" cascade;`);
    this.addSql(`drop table if exists "auth"."oauth_client_states" cascade;`);
    this.addSql(`drop table if exists "auth"."oauth_clients" cascade;`);
    this.addSql(`drop table if exists "auth"."oauth_consents" cascade;`);
    this.addSql(`drop table if exists "auth"."one_time_tokens" cascade;`);
    this.addSql(`drop table if exists "auth"."refresh_tokens" cascade;`);
    this.addSql(`drop table if exists "auth"."saml_providers" cascade;`);
    this.addSql(`drop table if exists "auth"."saml_relay_states" cascade;`);
    this.addSql(`drop table if exists "auth"."schema_migrations" cascade;`);
    this.addSql(`drop table if exists "auth"."scim_tokens" cascade;`);
    this.addSql(`drop table if exists "auth"."scim_users" cascade;`);
    this.addSql(`drop table if exists "auth"."sessions" cascade;`);
    this.addSql(`drop table if exists "auth"."sso_domains" cascade;`);
    this.addSql(`drop table if exists "auth"."sso_providers" cascade;`);
    this.addSql(`drop table if exists "auth"."users" cascade;`);
    this.addSql(`drop table if exists "auth"."webauthn_challenges" cascade;`);
    this.addSql(`drop table if exists "auth"."webauthn_credentials" cascade;`);
    this.addSql(`drop table if exists "realtime"."messages" cascade;`);
    this.addSql(`drop table if exists "realtime"."schema_migrations" cascade;`);
    this.addSql(`drop trigger if exists "tr_check_filters" on "realtime"."subscription";`);
    this.addSql(`drop function if exists "realtime"."subscription_tr_check_filters_fn"();`);
    this.addSql(`drop table if exists "realtime"."subscription" cascade;`);
    this.addSql(`drop table if exists "storage"."bucket_lifecycle_states" cascade;`);
    this.addSql(`drop trigger if exists "enforce_bucket_name_length_trigger" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_enforce_bucket_name_length_trigger_fn"();`);
    this.addSql(`drop trigger if exists "enforce_versioning_status_transition" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_enforce_versioning_status_transition_fn"();`);
    this.addSql(`drop trigger if exists "protect_active_lifecycle_states" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_protect_active_lifecycle_states_fn"();`);
    this.addSql(`drop trigger if exists "protect_bucket_control_insert" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_protect_bucket_control_insert_fn"();`);
    this.addSql(`drop trigger if exists "protect_bucket_control_update" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_protect_bucket_control_update_fn"();`);
    this.addSql(`drop trigger if exists "protect_bucket_control_update_role" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_protect_bucket_control_update_role_fn"();`);
    this.addSql(`drop trigger if exists "protect_buckets_delete" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_protect_buckets_delete_fn"();`);
    this.addSql(`drop trigger if exists "wake_lifecycle_on_policy_write" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_wake_lifecycle_on_policy_write_fn"();`);
    this.addSql(`drop trigger if exists "wake_lifecycle_on_versioning_enable" on "storage"."buckets";`);
    this.addSql(`drop function if exists "storage"."buckets_wake_lifecycle_on_versioning_enable_fn"();`);
    this.addSql(`drop table if exists "storage"."buckets" cascade;`);
    this.addSql(`drop table if exists "storage"."buckets_analytics" cascade;`);
    this.addSql(`drop table if exists "storage"."buckets_vectors" cascade;`);
    this.addSql(`drop table if exists "storage"."lifecycle_abandoned_artifacts" cascade;`);
    this.addSql(`drop table if exists "storage"."migrations" cascade;`);
    this.addSql(`drop trigger if exists "protect_objects_delete" on "storage"."objects";`);
    this.addSql(`drop function if exists "storage"."objects_protect_objects_delete_fn"();`);
    this.addSql(`drop trigger if exists "update_objects_updated_at" on "storage"."objects";`);
    this.addSql(`drop function if exists "storage"."objects_update_objects_updated_at_fn"();`);
    this.addSql(`drop table if exists "storage"."objects" cascade;`);
    this.addSql(`drop table if exists "storage"."s3_multipart_uploads" cascade;`);
    this.addSql(`drop table if exists "storage"."s3_multipart_uploads_parts" cascade;`);
    this.addSql(`drop table if exists "storage"."vector_indexes" cascade;`);
    this.addSql(`drop table if exists "vault"."secrets" cascade;`);

    this.addSql(`alter table "workflow" add "last_triggered_at" timestamptz null;`);

    this.addSql(`drop type "auth"."aal_level";`);
    this.addSql(`drop type "auth"."code_challenge_method";`);
    this.addSql(`drop type "auth"."factor_status";`);
    this.addSql(`drop type "auth"."factor_type";`);
    this.addSql(`drop type "auth"."oauth_authorization_status";`);
    this.addSql(`drop type "auth"."oauth_client_type";`);
    this.addSql(`drop type "auth"."oauth_registration_type";`);
    this.addSql(`drop type "auth"."oauth_response_type";`);
    this.addSql(`drop type "auth"."one_time_token_type";`);
    this.addSql(`drop type "realtime"."action";`);
    this.addSql(`drop type "realtime"."equality_op";`);
    this.addSql(`drop type "storage"."buckettype";`);
    this.addSql(`drop schema if exists "auth";`);
    this.addSql(`drop schema if exists "extensions";`);
    this.addSql(`drop schema if exists "realtime";`);
    this.addSql(`drop schema if exists "storage";`);
    this.addSql(`drop schema if exists "vault";`);
  }

  override down(): void | Promise<void> {
    this.addSql(`create schema if not exists "auth";`);
    this.addSql(`create schema if not exists "extensions";`);
    this.addSql(`create schema if not exists "realtime";`);
    this.addSql(`create schema if not exists "storage";`);
    this.addSql(`create schema if not exists "vault";`);
    this.addSql(`create type "auth"."aal_level" as enum ('aal1', 'aal2', 'aal3');`);
    this.addSql(`create type "auth"."code_challenge_method" as enum ('s256', 'plain');`);
    this.addSql(`create type "auth"."factor_status" as enum ('unverified', 'verified');`);
    this.addSql(`create type "auth"."factor_type" as enum ('totp', 'webauthn', 'phone', 'recovery_code');`);
    this.addSql(`create type "auth"."oauth_authorization_status" as enum ('pending', 'approved', 'denied', 'expired');`);
    this.addSql(`create type "auth"."oauth_client_type" as enum ('public', 'confidential');`);
    this.addSql(`create type "auth"."oauth_registration_type" as enum ('dynamic', 'manual');`);
    this.addSql(`create type "auth"."oauth_response_type" as enum ('code');`);
    this.addSql(`create type "auth"."one_time_token_type" as enum ('confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token');`);
    this.addSql(`create type "realtime"."action" as enum ('INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR');`);
    this.addSql(`create type "realtime"."equality_op" as enum ('eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in', 'like', 'ilike', 'is', 'match', 'imatch', 'isdistinct');`);
    this.addSql(`create type "storage"."buckettype" as enum ('STANDARD', 'ANALYTICS', 'VECTOR');`);
    this.addSql(`create table "auth"."audit_log_entries" ("created_at" timestamptz(6) null, "id" uuid not null, "instance_id" uuid null, "ip_address" varchar(64) not null default '', "payload" json null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."audit_log_entries" is 'Auth: Audit trail for user actions.';`);
    this.addSql(`create index "audit_logs_instance_id_idx" on "auth"."audit_log_entries" ("instance_id");`);

    this.addSql(`create table "auth"."custom_oauth_providers" ("acceptable_client_ids" text[] not null default '{}', "attribute_mapping" jsonb not null default '{}', "authorization_params" jsonb not null default '{}', "authorization_url" text null, "cached_discovery" jsonb null, "client_id" text not null, "client_secret" text not null, "created_at" timestamptz(6) not null default now(), "custom_claims_allowlist" text[] not null default '{}', "discovery_cached_at" timestamptz(6) null, "discovery_url" text null, "email_optional" boolean not null default false, "enabled" boolean not null default true, "id" uuid not null default gen_random_uuid(), "identifier" text not null, "issuer" text null, "jwks_uri" text null, "name" text not null, "pkce_enabled" boolean not null default true, "provider_type" text not null, "scopes" text[] not null default '{}', "skip_nonce_check" boolean not null default false, "token_url" text null, "updated_at" timestamptz(6) not null default now(), "userinfo_url" text null, primary key ("id"));`);
    this.addSql(`create index "custom_oauth_providers_created_at_idx" on "auth"."custom_oauth_providers" ("created_at");`);
    this.addSql(`create index "custom_oauth_providers_enabled_idx" on "auth"."custom_oauth_providers" ("enabled");`);
    this.addSql(`create index "custom_oauth_providers_identifier_idx" on "auth"."custom_oauth_providers" ("identifier");`);
    this.addSql(`alter table "auth"."custom_oauth_providers" add constraint "custom_oauth_providers_identifier_key" unique ("identifier");`);
    this.addSql(`create index "custom_oauth_providers_provider_type_idx" on "auth"."custom_oauth_providers" ("provider_type");`);

    this.addSql(`create table "auth"."flow_state" ("auth_code" text null, "auth_code_issued_at" timestamptz(6) null, "authentication_method" text not null, "code_challenge" text null, "code_challenge_method" "auth"."code_challenge_method" null, "created_at" timestamptz(6) null, "email_optional" boolean not null default false, "id" uuid not null, "invite_token" text null, "linking_target_id" uuid null, "oauth_client_state_id" uuid null, "provider_access_token" text null, "provider_refresh_token" text null, "provider_type" text not null, "referrer" text null, "updated_at" timestamptz(6) null, "user_id" uuid null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."flow_state" is 'Stores metadata for all OAuth/SSO login flows';`);
    this.addSql(`create index "flow_state_created_at_idx" on "auth"."flow_state" ("created_at" DESC);`);
    this.addSql(`create index "idx_auth_code" on "auth"."flow_state" ("auth_code");`);
    this.addSql(`create index "idx_user_id_auth_method" on "auth"."flow_state" ("user_id", "authentication_method");`);

    this.addSql(`create table "auth"."identities" ("created_at" timestamptz(6) null, "email" text generated always as lower((identity_data ->> 'email'::text)) stored null, "id" uuid not null default gen_random_uuid(), "identity_data" jsonb not null, "last_sign_in_at" timestamptz(6) null, "provider" text not null, "provider_id" text not null, "updated_at" timestamptz(6) null, "user_id" uuid not null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."identities" is 'Auth: Stores identities associated to a user.';`);
    this.addSql(`comment on column "auth"."identities"."email" is 'Auth: Email is a generated column that references the optional email property in the identity_data';`);
    this.addSql(`create index "identities_email_idx" on "auth"."identities" ("email");`);
    this.addSql(`alter table "auth"."identities" add constraint "identities_provider_id_provider_unique" unique ("provider_id", "provider");`);
    this.addSql(`create index "identities_user_id_idx" on "auth"."identities" ("user_id");`);

    this.addSql(`create table "auth"."instances" ("created_at" timestamptz(6) null, "id" uuid not null, "raw_base_config" text null, "updated_at" timestamptz(6) null, "uuid" uuid null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."instances" is 'Auth: Manages users across multiple sites.';`);

    this.addSql(`create table "auth"."mfa_amr_claims" ("authentication_method" text not null, "created_at" timestamptz(6) not null, "id" uuid not null, "session_id" uuid not null, "updated_at" timestamptz(6) not null, constraint "amr_id_pk" primary key ("id"));`);
    this.addSql(`comment on table "auth"."mfa_amr_claims" is 'auth: stores authenticator method reference claims for multi factor authentication';`);
    this.addSql(`alter table "auth"."mfa_amr_claims" add constraint "mfa_amr_claims_session_id_authentication_method_pkey" unique ("session_id", "authentication_method");`);

    this.addSql(`create table "auth"."mfa_challenges" ("created_at" timestamptz(6) not null, "factor_id" uuid not null, "id" uuid not null, "ip_address" inet not null, "otp_code" text null, "verified_at" timestamptz(6) null, "web_authn_session_data" jsonb null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."mfa_challenges" is 'auth: stores metadata about challenge requests made';`);
    this.addSql(`create index "mfa_challenge_created_at_idx" on "auth"."mfa_challenges" ("created_at" DESC);`);

    this.addSql(`create table "auth"."mfa_factors" ("created_at" timestamptz(6) not null, "factor_type" "auth"."factor_type" not null, "friendly_name" text null, "id" uuid not null, "last_challenged_at" timestamptz(6) null, "last_webauthn_challenge_data" jsonb null, "phone" text null, "secret" text null, "status" "auth"."factor_status" not null, "updated_at" timestamptz(6) not null, "user_id" uuid not null, "web_authn_aaguid" uuid null, "web_authn_credential" jsonb null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."mfa_factors" is 'auth: stores metadata about factors';`);
    this.addSql(`comment on column "auth"."mfa_factors"."last_webauthn_challenge_data" is 'Stores the latest WebAuthn challenge data including attestation/assertion for customer verification';`);
    this.addSql(`create index "factor_id_created_at_idx" on "auth"."mfa_factors" ("user_id", "created_at");`);
    this.addSql(`alter table "auth"."mfa_factors" add constraint "mfa_factors_last_challenged_at_key" unique ("last_challenged_at");`);
    this.addSql(`create unique index "mfa_factors_user_friendly_name_unique" on "auth"."mfa_factors" ("friendly_name", "user_id") where TRIM(BOTH FROM friendly_name) <> ''::text;`);
    this.addSql(`create index "mfa_factors_user_id_idx" on "auth"."mfa_factors" ("user_id");`);
    this.addSql(`create unique index "unique_phone_factor_per_user" on "auth"."mfa_factors" ("user_id", "phone");`);

    this.addSql(`create table "auth"."mfa_recovery_code_sets" ("created_at" timestamptz(6) not null default now(), "failed_verification_count" int not null default 0, "id" uuid not null, "mfa_factor_id" uuid not null, "updated_at" timestamptz(6) not null default now(), "user_id" uuid not null, "verification_locked_until" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`alter table "auth"."mfa_recovery_code_sets" add constraint "mfa_recovery_code_sets_mfa_factor_id_key" unique ("mfa_factor_id");`);
    this.addSql(`alter table "auth"."mfa_recovery_code_sets" add constraint "mfa_recovery_code_sets_user_id_key" unique ("user_id");`);

    this.addSql(`create table "auth"."mfa_recovery_codes" ("code_hash" text not null, "consumed_at" timestamptz(6) null, "created_at" timestamptz(6) not null default now(), "id" uuid not null, "mfa_recovery_code_set_id" uuid not null, primary key ("id"));`);
    this.addSql(`create index "mfa_recovery_codes_set_id_idx" on "auth"."mfa_recovery_codes" ("mfa_recovery_code_set_id");`);

    this.addSql(`create table "auth"."oauth_authorizations" ("approved_at" timestamptz(6) null, "authorization_code" text null, "authorization_id" text not null, "client_id" uuid not null, "code_challenge" text null, "code_challenge_method" "auth"."code_challenge_method" null, "created_at" timestamptz(6) not null default now(), "expires_at" timestamptz(6) not null default (now() + '00:03:00'::interval), "id" uuid not null, "nonce" text null, "redirect_uri" text not null, "resource" text null, "response_type" "auth"."oauth_response_type" not null default 'code', "scope" text not null, "state" text null, "status" "auth"."oauth_authorization_status" not null default 'pending', "user_id" uuid null, primary key ("id"));`);
    this.addSql(`create index "oauth_auth_pending_exp_idx" on "auth"."oauth_authorizations" ("expires_at") where status = 'pending'::auth.oauth_authorization_status;`);
    this.addSql(`alter table "auth"."oauth_authorizations" add constraint "oauth_authorizations_authorization_code_key" unique ("authorization_code");`);
    this.addSql(`alter table "auth"."oauth_authorizations" add constraint "oauth_authorizations_authorization_id_key" unique ("authorization_id");`);

    this.addSql(`create table "auth"."oauth_client_states" ("code_verifier" text null, "created_at" timestamptz(6) not null, "id" uuid not null, "provider_type" text not null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."oauth_client_states" is 'Stores OAuth states for third-party provider authentication flows where Supabase acts as the OAuth client.';`);
    this.addSql(`create index "idx_oauth_client_states_created_at" on "auth"."oauth_client_states" ("created_at");`);

    this.addSql(`create table "auth"."oauth_clients" ("client_name" text null, "client_secret_hash" text null, "client_type" "auth"."oauth_client_type" not null default 'confidential', "client_uri" text null, "created_at" timestamptz(6) not null default now(), "deleted_at" timestamptz(6) null, "grant_types" text not null, "id" uuid not null, "logo_uri" text null, "redirect_uris" text not null, "registration_type" "auth"."oauth_registration_type" not null, "token_endpoint_auth_method" text not null, "updated_at" timestamptz(6) not null default now(), primary key ("id"));`);
    this.addSql(`create index "oauth_clients_deleted_at_idx" on "auth"."oauth_clients" ("deleted_at");`);

    this.addSql(`create table "auth"."oauth_consents" ("client_id" uuid not null, "granted_at" timestamptz(6) not null default now(), "id" uuid not null, "revoked_at" timestamptz(6) null, "scopes" text not null, "user_id" uuid not null, primary key ("id"));`);
    this.addSql(`create index "oauth_consents_active_client_idx" on "auth"."oauth_consents" ("client_id") where revoked_at IS NULL;`);
    this.addSql(`create index "oauth_consents_active_user_client_idx" on "auth"."oauth_consents" ("user_id", "client_id") where revoked_at IS NULL;`);
    this.addSql(`alter table "auth"."oauth_consents" add constraint "oauth_consents_user_client_unique" unique ("user_id", "client_id");`);
    this.addSql(`create index "oauth_consents_user_order_idx" on "auth"."oauth_consents" ("user_id", "granted_at" DESC);`);

    this.addSql(`create table "auth"."one_time_tokens" ("created_at" timestamp(6) not null default now(), "expires_at" timestamptz(6) null, "id" uuid not null, "link_token_hash" text null, "relates_to" text not null, "token_hash" text not null, "token_type" "auth"."one_time_token_type" not null, "updated_at" timestamp(6) not null default now(), "user_id" uuid not null, primary key ("id"));`);
    this.addSql(`create index "one_time_tokens_link_token_hash_hash_idx" on "auth"."one_time_tokens" using hash ("link_token_hash");`);
    this.addSql(`create index "one_time_tokens_relates_to_hash_idx" on "auth"."one_time_tokens" using hash ("relates_to");`);
    this.addSql(`create index "one_time_tokens_token_hash_hash_idx" on "auth"."one_time_tokens" using hash ("token_hash");`);
    this.addSql(`create unique index "one_time_tokens_user_id_token_type_key" on "auth"."one_time_tokens" ("user_id", "token_type");`);

    this.addSql(`create table "auth"."refresh_tokens" ("created_at" timestamptz(6) null, "id" bigserial primary key, "instance_id" uuid null, "parent" varchar(255) null, "revoked" boolean null, "session_id" uuid null, "token" varchar(255) null, "updated_at" timestamptz(6) null, "user_id" varchar(255) null);`);
    this.addSql(`comment on table "auth"."refresh_tokens" is 'Auth: Store of tokens used to refresh JWT tokens once they expire.';`);
    this.addSql(`create index "refresh_tokens_instance_id_idx" on "auth"."refresh_tokens" ("instance_id");`);
    this.addSql(`create index "refresh_tokens_instance_id_user_id_idx" on "auth"."refresh_tokens" ("instance_id", "user_id");`);
    this.addSql(`create index "refresh_tokens_parent_idx" on "auth"."refresh_tokens" ("parent");`);
    this.addSql(`create index "refresh_tokens_session_id_revoked_idx" on "auth"."refresh_tokens" ("session_id", "revoked");`);
    this.addSql(`alter table "auth"."refresh_tokens" add constraint "refresh_tokens_token_unique" unique ("token");`);
    this.addSql(`create index "refresh_tokens_updated_at_idx" on "auth"."refresh_tokens" ("updated_at" DESC);`);

    this.addSql(`create table "auth"."saml_providers" ("attribute_mapping" jsonb null, "created_at" timestamptz(6) null, "dedicated_scope" boolean null, "entity_id" text not null, "id" uuid not null, "metadata_url" text null, "metadata_xml" text not null, "name_id_format" text null, "sso_provider_id" uuid not null, "updated_at" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."saml_providers" is 'Auth: Manages SAML Identity Provider connections.';`);
    this.addSql(`alter table "auth"."saml_providers" add constraint "saml_providers_entity_id_key" unique ("entity_id");`);
    this.addSql(`create index "saml_providers_sso_provider_id_idx" on "auth"."saml_providers" ("sso_provider_id");`);

    this.addSql(`create table "auth"."saml_relay_states" ("created_at" timestamptz(6) null, "flow_state_id" uuid null, "for_email" text null, "id" uuid not null, "redirect_to" text null, "request_id" text not null, "sso_provider_id" uuid not null, "updated_at" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."saml_relay_states" is 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';`);
    this.addSql(`create index "saml_relay_states_created_at_idx" on "auth"."saml_relay_states" ("created_at" DESC);`);
    this.addSql(`create index "saml_relay_states_for_email_idx" on "auth"."saml_relay_states" ("for_email");`);
    this.addSql(`create index "saml_relay_states_sso_provider_id_idx" on "auth"."saml_relay_states" ("sso_provider_id");`);

    this.addSql(`create table "auth"."schema_migrations" ("version" varchar(255) not null, primary key ("version"));`);
    this.addSql(`comment on table "auth"."schema_migrations" is 'Auth: Manages updates to the auth system.';`);

    this.addSql(`create table "auth"."scim_tokens" ("created_at" timestamptz(6) not null default now(), "expires_at" timestamptz(6) null, "id" uuid not null, "last_used_at" timestamptz(6) null, "prefix" text not null, "revoked_at" timestamptz(6) null, "sso_provider_id" uuid not null, "token_hash" text not null, primary key ("id"));`);
    this.addSql(`create index "scim_tokens_expires_at_idx" on "auth"."scim_tokens" ("expires_at");`);
    this.addSql(`create index "scim_tokens_revoked_at_idx" on "auth"."scim_tokens" ("revoked_at");`);
    this.addSql(`create index "scim_tokens_sso_provider_id_idx" on "auth"."scim_tokens" ("sso_provider_id");`);
    this.addSql(`create unique index "scim_tokens_token_hash_key" on "auth"."scim_tokens" ("token_hash");`);

    this.addSql(`create table "auth"."scim_users" ("active" boolean generated always as COALESCE(((resource ->> 'active'::text))::boolean, true) stored not null, "created_at" timestamptz(6) not null default now(), "deleted_at" timestamptz(6) null, "external_id" text generated always as (resource ->> 'externalId'::text) stored null, "id" uuid not null, "resource" jsonb not null, "sso_provider_id" uuid not null, "updated_at" timestamptz(6) not null default now(), "user_id" uuid null, "user_name" text generated always as lower((resource ->> 'userName'::text)) stored not null, primary key ("id"));`);
    this.addSql(`create index "scim_users_created_at_idx" on "auth"."scim_users" ("sso_provider_id", "created_at", "id") where deleted_at IS NULL;`);
    this.addSql(`create index "scim_users_deleted_at_idx" on "auth"."scim_users" ("deleted_at");`);
    this.addSql(`create unique index "scim_users_external_id_key" on "auth"."scim_users" ("sso_provider_id", "external_id") where (external_id IS NOT NULL) AND (deleted_at IS NULL);`);
    this.addSql(`create index "scim_users_id_idx" on "auth"."scim_users" ("sso_provider_id", "id") where deleted_at IS NULL;`);
    this.addSql(`create index "scim_users_sso_provider_id_idx" on "auth"."scim_users" ("sso_provider_id");`);
    this.addSql(`create index "scim_users_updated_at_idx" on "auth"."scim_users" ("sso_provider_id", "updated_at", "id") where deleted_at IS NULL;`);
    this.addSql(`create index "scim_users_user_id_idx" on "auth"."scim_users" ("user_id");`);
    this.addSql(`create index "scim_users_user_name_idx" on "auth"."scim_users" ("sso_provider_id", "user_name" collate "C", "id") where deleted_at IS NULL;`);
    this.addSql(`create unique index "scim_users_user_name_key" on "auth"."scim_users" ("sso_provider_id", "user_name") where deleted_at IS NULL;`);

    this.addSql(`create table "auth"."sessions" ("aal" "auth"."aal_level" null, "created_at" timestamptz(6) null, "factor_id" uuid null, "id" uuid not null, "ip" inet null, "not_after" timestamptz(6) null, "oauth_client_id" uuid null, "refresh_token_counter" bigint null, "refresh_token_hmac_key" text null, "refreshed_at" timestamp(6) null, "scopes" text null, "tag" text null, "updated_at" timestamptz(6) null, "user_agent" text null, "user_id" uuid not null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."sessions" is 'Auth: Stores session data associated to a user.';`);
    this.addSql(`comment on column "auth"."sessions"."not_after" is 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';`);
    this.addSql(`comment on column "auth"."sessions"."refresh_token_counter" is 'Holds the ID (counter) of the last issued refresh token.';`);
    this.addSql(`comment on column "auth"."sessions"."refresh_token_hmac_key" is 'Holds a HMAC-SHA256 key used to sign refresh tokens for this session.';`);
    this.addSql(`create index "sessions_not_after_idx" on "auth"."sessions" ("not_after" DESC);`);
    this.addSql(`create index "sessions_oauth_client_id_idx" on "auth"."sessions" ("oauth_client_id");`);
    this.addSql(`create index "sessions_user_id_idx" on "auth"."sessions" ("user_id");`);
    this.addSql(`create index "user_id_created_at_idx" on "auth"."sessions" ("user_id", "created_at");`);

    this.addSql(`create table "auth"."sso_domains" ("created_at" timestamptz(6) null, "domain" text not null, "id" uuid not null, "sso_provider_id" uuid not null, "updated_at" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."sso_domains" is 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';`);
    this.addSql(`CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain));`);
    this.addSql(`create index "sso_domains_sso_provider_id_idx" on "auth"."sso_domains" ("sso_provider_id");`);

    this.addSql(`create table "auth"."sso_providers" ("created_at" timestamptz(6) null, "disabled" boolean null, "id" uuid not null, "resource_id" text null, "updated_at" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."sso_providers" is 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';`);
    this.addSql(`comment on column "auth"."sso_providers"."resource_id" is 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';`);
    this.addSql(`CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id));`);
    this.addSql(`create index "sso_providers_resource_id_pattern_idx" on "auth"."sso_providers" ("resource_id");`);

    this.addSql(`create table "auth"."users" ("aud" varchar(255) null, "banned_until" timestamptz(6) null, "confirmation_sent_at" timestamptz(6) null, "confirmation_token" varchar(255) null, "confirmed_at" timestamptz(6) generated always as LEAST(email_confirmed_at, phone_confirmed_at) stored null, "created_at" timestamptz(6) null, "deleted_at" timestamptz(6) null, "email" varchar(255) null, "email_change" varchar(255) null, "email_change_confirm_status" smallint null default 0, "email_change_sent_at" timestamptz(6) null, "email_change_token_current" varchar(255) null default '', "email_change_token_new" varchar(255) null, "email_confirmed_at" timestamptz(6) null, "encrypted_password" varchar(255) null, "id" uuid not null, "instance_id" uuid null, "invited_at" timestamptz(6) null, "is_anonymous" boolean not null default false, "is_sso_user" boolean not null default false, "is_super_admin" boolean null, "last_sign_in_at" timestamptz(6) null, "phone" text null, "phone_change" text null default '', "phone_change_sent_at" timestamptz(6) null, "phone_change_token" varchar(255) null default '', "phone_confirmed_at" timestamptz(6) null, "raw_app_meta_data" jsonb null, "raw_user_meta_data" jsonb null, "reauthentication_sent_at" timestamptz(6) null, "reauthentication_token" varchar(255) null default '', "recovery_sent_at" timestamptz(6) null, "recovery_token" varchar(255) null, "role" varchar(255) null, "updated_at" timestamptz(6) null, primary key ("id"));`);
    this.addSql(`comment on table "auth"."users" is 'Auth: Stores user login data within a secure schema.';`);
    this.addSql(`comment on column "auth"."users"."is_sso_user" is 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';`);
    this.addSql(`create unique index "confirmation_token_idx" on "auth"."users" ("confirmation_token") where (confirmation_token)::text !~ '^[0-9 ]*\$'::text;`);
    this.addSql(`create unique index "email_change_token_current_idx" on "auth"."users" ("email_change_token_current") where (email_change_token_current)::text !~ '^[0-9 ]*\$'::text;`);
    this.addSql(`create unique index "email_change_token_new_idx" on "auth"."users" ("email_change_token_new") where (email_change_token_new)::text !~ '^[0-9 ]*\$'::text;`);
    this.addSql(`create index "idx_users_created_at_desc" on "auth"."users" ("created_at" DESC);`);
    this.addSql(`create index "idx_users_email" on "auth"."users" ("email");`);
    this.addSql(`create index "idx_users_last_sign_in_at_desc" on "auth"."users" ("last_sign_in_at" DESC);`);
    this.addSql(`CREATE INDEX idx_users_name ON auth.users USING btree (((raw_user_meta_data ->> 'name'::text))) WHERE ((raw_user_meta_data ->> 'name'::text) IS NOT NULL);`);
    this.addSql(`create unique index "reauthentication_token_idx" on "auth"."users" ("reauthentication_token") where (reauthentication_token)::text !~ '^[0-9 ]*\$'::text;`);
    this.addSql(`create unique index "recovery_token_idx" on "auth"."users" ("recovery_token") where (recovery_token)::text !~ '^[0-9 ]*\$'::text;`);
    this.addSql(`create unique index "users_email_partial_key" on "auth"."users" ("email") where is_sso_user = false;`);
    this.addSql(`CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text));`);
    this.addSql(`create index "users_instance_id_idx" on "auth"."users" ("instance_id");`);
    this.addSql(`create index "users_is_anonymous_idx" on "auth"."users" ("is_anonymous");`);
    this.addSql(`alter table "auth"."users" add constraint "users_phone_key" unique ("phone");`);

    this.addSql(`create table "auth"."webauthn_challenges" ("challenge_type" text not null, "created_at" timestamptz(6) not null default now(), "expires_at" timestamptz(6) not null, "id" uuid not null default gen_random_uuid(), "session_data" jsonb not null, "user_id" uuid null, primary key ("id"));`);
    this.addSql(`create index "webauthn_challenges_expires_at_idx" on "auth"."webauthn_challenges" ("expires_at");`);
    this.addSql(`create index "webauthn_challenges_user_id_idx" on "auth"."webauthn_challenges" ("user_id");`);

    this.addSql(`create table "auth"."webauthn_credentials" ("aaguid" uuid null, "attestation_type" text not null default '', "backed_up" boolean not null default false, "backup_eligible" boolean not null default false, "created_at" timestamptz(6) not null default now(), "credential_id" bytea not null, "friendly_name" text not null default '', "id" uuid not null default gen_random_uuid(), "last_used_at" timestamptz(6) null, "public_key" bytea not null, "sign_count" bigint not null default 0, "transports" jsonb not null default '[]', "updated_at" timestamptz(6) not null default now(), "user_id" uuid not null, primary key ("id"));`);
    this.addSql(`create unique index "webauthn_credentials_credential_id_key" on "auth"."webauthn_credentials" ("credential_id");`);
    this.addSql(`create index "webauthn_credentials_user_id_idx" on "auth"."webauthn_credentials" ("user_id");`);

    this.addSql(`create table "realtime"."messages" ("binary_payload" bytea null, "event" text null, "expires_at" timestamp(6) null, "extension" text not null, "id" uuid not null default gen_random_uuid(), "inserted_at" timestamp(6) not null default timezone('utc'::text, clock_timestamp()), "payload" jsonb null, "private" boolean null default false, "skip_broadcast" boolean not null default false, "topic" text not null, "updated_at" timestamp(6) not null default timezone('utc'::text, clock_timestamp()), primary key ("id", "inserted_at")) partition by range (inserted_at);`);
    this.addSql(`CREATE INDEX messages_replay_index ON ONLY realtime.messages USING btree (topic, inserted_at DESC, COALESCE(expires_at, 'infinity'::timestamp without time zone)) WHERE ((extension = 'broadcast'::text) AND (private = true));`);

    this.addSql(`create table "realtime"."schema_migrations" ("inserted_at" timestamp(0) null default now(), "version" bigint not null, primary key ("version"));`);

    this.addSql(`create table "realtime"."subscription" ("action_filter" text null default '*', "claims" jsonb not null, "claims_role" regrole generated always as realtime.to_regrole((claims ->> 'role'::text)) stored not null, "created_at" timestamp(6) not null default timezone('utc'::text, now()), "entity" regclass not null, "filters" user_defined_filter[] not null default '{}', "id" bigint generated always as identity not null, "selected_columns" text[] null, "subscription_id" uuid not null, constraint "pk_subscription" primary key ("id"));`);
    this.addSql(`create index "ix_realtime_subscription_entity" on "realtime"."subscription" ("entity");`);
    this.addSql(`CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_hash_key ON realtime.subscription USING btree (subscription_id, entity, realtime.filters_hash(filters), action_filter, COALESCE(selected_columns, '{}'::text[]));`);

    this.addSql(`create table "storage"."bucket_lifecycle_states" ("bucket_id" text not null, "claim_id" uuid null, "claim_until" timestamptz(6) null, "continuation" jsonb null, "failure_count" int not null default 0, "generation" uuid null, "last_completed_at" timestamptz(6) null, "last_error" jsonb null, "last_result" jsonb null, "last_started_at" timestamptz(6) null, "last_success_at" timestamptz(6) null, "next_run_at" timestamptz(6) null, "updated_at" timestamptz(6) not null default now(), primary key ("bucket_id"));`);
    this.addSql(`create index "bucket_lifecycle_states_due_idx" on "storage"."bucket_lifecycle_states" ("next_run_at", "bucket_id") where next_run_at IS NOT NULL;`);

    this.addSql(`create table "storage"."buckets" ("allowed_mime_types" text[] null, "avif_autodetection" boolean null default false, "created_at" timestamptz(6) null default now(), "file_size_limit" bigint null, "id" text not null, "lifecycle_configuration" jsonb null, "lifecycle_configuration_generation" uuid null, "name" text not null, "owner" uuid null, "owner_id" text null, "public" boolean null default false, "type" "storage"."buckettype" not null default 'STANDARD', "updated_at" timestamptz(6) null default now(), "versioning_status" text not null default 'DISABLED', primary key ("id"));`);
    this.addSql(`comment on column "storage"."buckets"."owner" is 'Field is deprecated, use owner_id instead';`);
    this.addSql(`create unique index "bname" on "storage"."buckets" ("name");`);

    this.addSql(`create table "storage"."buckets_analytics" ("created_at" timestamptz(6) not null default now(), "deleted_at" timestamptz(6) null, "format" text not null default 'ICEBERG', "id" uuid not null default gen_random_uuid(), "name" text not null, "type" "storage"."buckettype" not null default 'ANALYTICS', "updated_at" timestamptz(6) not null default now(), primary key ("id"));`);
    this.addSql(`create unique index "buckets_analytics_unique_name_idx" on "storage"."buckets_analytics" ("name") where deleted_at IS NULL;`);

    this.addSql(`create table "storage"."buckets_vectors" ("created_at" timestamptz(6) not null default now(), "id" text not null, "type" "storage"."buckettype" not null default 'VECTOR', "updated_at" timestamptz(6) not null default now(), primary key ("id"));`);

    this.addSql(`create table "storage"."lifecycle_abandoned_artifacts" ("attempted_at" timestamptz(6) not null default now(), "bucket_id" text not null, "key" text not null, "name" text not null, "version" text null, primary key ("bucket_id", "key"));`);
    this.addSql(`create index "lifecycle_abandoned_artifacts_attempted_at_idx" on "storage"."lifecycle_abandoned_artifacts" ("attempted_at");`);

    this.addSql(`create table "storage"."migrations" ("executed_at" timestamp(6) null default CURRENT_TIMESTAMP, "hash" varchar(40) not null, "id" int not null, "name" varchar(100) not null, primary key ("id"));`);
    this.addSql(`alter table "storage"."migrations" add constraint "migrations_name_key" unique ("name");`);

    this.addSql(`create table "storage"."objects" ("archived_at" timestamptz(6) null, "bucket_id" text null, "created_at" timestamptz(6) null default now(), "id" uuid not null default gen_random_uuid(), "is_delete_marker" boolean not null default false, "is_versioned" boolean not null default false, "last_accessed_at" timestamptz(6) null default now(), "metadata" jsonb null, "name" text null, "owner" uuid null, "owner_id" text null, "path_tokens" text[] generated always as string_to_array(name, '/'::text) stored null, "updated_at" timestamptz(6) null default now(), "user_metadata" jsonb null, "version" text null, primary key ("id"));`);
    this.addSql(`comment on column "storage"."objects"."owner" is 'Field is deprecated, use owner_id instead';`);
    this.addSql(`create index "idx_objects_bucket_id_name" on "storage"."objects" ("bucket_id", "name" collate "C");`);
    this.addSql(`CREATE INDEX idx_objects_bucket_id_name_lower ON storage.objects USING btree (bucket_id, lower(name) COLLATE "C");`);
    this.addSql(`create unique index "idx_objects_current_version" on "storage"."objects" ("bucket_id", "name" collate "C") where archived_at IS NULL;`);
    this.addSql(`create index "idx_objects_delete_markers" on "storage"."objects" ("bucket_id", "name" collate "C") where is_delete_marker;`);
    this.addSql(`create unique index "idx_objects_null_version" on "storage"."objects" ("bucket_id", "name" collate "C") where NOT is_versioned;`);
    this.addSql(`create index "name_prefix_search" on "storage"."objects" ("name");`);
    this.addSql(`create index "objects_archived_due_idx" on "storage"."objects" ("bucket_id", "archived_at", "name" collate "C") include ("id", "version", "is_delete_marker") where archived_at IS NOT NULL;`);
    this.addSql(`create unique index "objects_archived_order_uq" on "storage"."objects" ("bucket_id", "name" collate "C", "archived_at") where archived_at IS NOT NULL;`);
    this.addSql(`create unique index "objects_bucket_id_name_version_key" on "storage"."objects" ("bucket_id", "name" collate "C", "version");`);

    this.addSql(`create table "storage"."s3_multipart_uploads" ("bucket_id" text not null, "created_at" timestamptz(6) not null default now(), "id" text not null, "in_progress_size" bigint not null default 0, "key" text collate "C" not null, "metadata" jsonb null, "owner_id" text null, "upload_signature" text not null, "user_metadata" jsonb null, "version" text not null, primary key ("id"));`);
    this.addSql(`create index "idx_multipart_uploads_list" on "storage"."s3_multipart_uploads" ("bucket_id", "key", "created_at");`);

    this.addSql(`create table "storage"."s3_multipart_uploads_parts" ("bucket_id" text not null, "created_at" timestamptz(6) not null default now(), "etag" text not null, "id" uuid not null default gen_random_uuid(), "key" text collate "C" not null, "owner_id" text null, "part_number" int not null, "size" bigint not null default 0, "upload_id" text not null, "version" text not null, primary key ("id"));`);

    this.addSql(`create table "storage"."vector_indexes" ("bucket_id" text not null, "created_at" timestamptz(6) not null default now(), "data_type" text not null, "dimension" int not null, "distance_metric" text not null, "id" text not null default gen_random_uuid(), "metadata_configuration" jsonb null, "name" text collate "C" not null, "updated_at" timestamptz(6) not null default now(), primary key ("id"));`);
    this.addSql(`create unique index "vector_indexes_name_bucket_id_idx" on "storage"."vector_indexes" ("name", "bucket_id");`);

    this.addSql(`create table "vault"."secrets" ("created_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "description" text not null default '', "id" uuid not null default gen_random_uuid(), "key_id" uuid null, "name" text null, "nonce" bytea null default vault._crypto_aead_det_noncegen(), "secret" text not null, "updated_at" timestamptz(6) not null default CURRENT_TIMESTAMP, primary key ("id"));`);
    this.addSql(`comment on table "vault"."secrets" is 'Table with encrypted \`secret\` column for storing sensitive information on disk.';`);
    this.addSql(`create unique index "secrets_name_idx" on "vault"."secrets" ("name") where name IS NOT NULL;`);

    this.addSql(`alter table "workflow" drop column "last_triggered_at";`);

    this.addSql(`alter table "auth"."audit_log_entries" enable row level security;`);

    this.addSql(`alter table "auth"."flow_state" enable row level security;`);

    this.addSql(`alter table "auth"."identities" add constraint "identities_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."identities" enable row level security;`);

    this.addSql(`alter table "auth"."instances" enable row level security;`);

    this.addSql(`alter table "auth"."mfa_amr_claims" add constraint "mfa_amr_claims_session_id_fkey" foreign key ("session_id") references "auth"."sessions" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."mfa_amr_claims" enable row level security;`);

    this.addSql(`alter table "auth"."mfa_challenges" add constraint "mfa_challenges_auth_factor_id_fkey" foreign key ("factor_id") references "auth"."mfa_factors" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."mfa_challenges" enable row level security;`);

    this.addSql(`alter table "auth"."mfa_factors" add constraint "mfa_factors_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."mfa_factors" enable row level security;`);

    this.addSql(`alter table "auth"."mfa_recovery_code_sets" add constraint "mfa_recovery_code_sets_mfa_factor_id_fkey" foreign key ("mfa_factor_id") references "auth"."mfa_factors" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."mfa_recovery_code_sets" add constraint "mfa_recovery_code_sets_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."mfa_recovery_codes" add constraint "mfa_recovery_codes_mfa_recovery_code_set_id_fkey" foreign key ("mfa_recovery_code_set_id") references "auth"."mfa_recovery_code_sets" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."oauth_authorizations" add constraint "oauth_authorizations_client_id_fkey" foreign key ("client_id") references "auth"."oauth_clients" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."oauth_authorizations" add constraint "oauth_authorizations_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."oauth_consents" add constraint "oauth_consents_client_id_fkey" foreign key ("client_id") references "auth"."oauth_clients" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."oauth_consents" add constraint "oauth_consents_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."one_time_tokens" add constraint "one_time_tokens_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."one_time_tokens" enable row level security;`);

    this.addSql(`alter table "auth"."refresh_tokens" add constraint "refresh_tokens_session_id_fkey" foreign key ("session_id") references "auth"."sessions" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."refresh_tokens" enable row level security;`);

    this.addSql(`alter table "auth"."saml_providers" add constraint "saml_providers_sso_provider_id_fkey" foreign key ("sso_provider_id") references "auth"."sso_providers" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."saml_providers" enable row level security;`);

    this.addSql(`alter table "auth"."saml_relay_states" add constraint "saml_relay_states_flow_state_id_fkey" foreign key ("flow_state_id") references "auth"."flow_state" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."saml_relay_states" add constraint "saml_relay_states_sso_provider_id_fkey" foreign key ("sso_provider_id") references "auth"."sso_providers" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."saml_relay_states" enable row level security;`);

    this.addSql(`alter table "auth"."schema_migrations" enable row level security;`);

    this.addSql(`alter table "auth"."scim_tokens" add constraint "scim_tokens_sso_provider_id_fkey" foreign key ("sso_provider_id") references "auth"."sso_providers" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."scim_users" add constraint "scim_users_sso_provider_id_fkey" foreign key ("sso_provider_id") references "auth"."sso_providers" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."scim_users" add constraint "scim_users_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete set null;`);

    this.addSql(`alter table "auth"."sessions" add constraint "sessions_oauth_client_id_fkey" foreign key ("oauth_client_id") references "auth"."oauth_clients" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."sessions" add constraint "sessions_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."sessions" enable row level security;`);

    this.addSql(`alter table "auth"."sso_domains" add constraint "sso_domains_sso_provider_id_fkey" foreign key ("sso_provider_id") references "auth"."sso_providers" ("id") on delete cascade;`);
    this.addSql(`alter table "auth"."sso_domains" enable row level security;`);

    this.addSql(`alter table "auth"."sso_providers" enable row level security;`);

    this.addSql(`alter table "auth"."users" enable row level security;`);

    this.addSql(`alter table "auth"."webauthn_challenges" add constraint "webauthn_challenges_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);

    this.addSql(`alter table "auth"."webauthn_credentials" add constraint "webauthn_credentials_user_id_fkey" foreign key ("user_id") references "auth"."users" ("id") on delete cascade;`);

    this.addSql(`alter table "realtime"."messages" enable row level security;`);

    this.addSql(`create or replace function "realtime"."subscription_tr_check_filters_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "tr_check_filters" BEFORE INSERT OR UPDATE on "realtime"."subscription" for each ROW execute function "realtime"."subscription_tr_check_filters_fn"();`);

    this.addSql(`alter table "storage"."bucket_lifecycle_states" add constraint "bucket_lifecycle_states_bucket_id_fkey" foreign key ("bucket_id") references "storage"."buckets" ("id") on delete cascade;`);
    this.addSql(`alter table "storage"."bucket_lifecycle_states" enable row level security;`);

    this.addSql(`create or replace function "storage"."buckets_enforce_bucket_name_length_trigger_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "enforce_bucket_name_length_trigger" BEFORE INSERT OR UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_enforce_bucket_name_length_trigger_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_enforce_versioning_status_transition_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "enforce_versioning_status_transition" BEFORE UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_enforce_versioning_status_transition_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_protect_active_lifecycle_states_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_active_lifecycle_states" BEFORE DELETE on "storage"."buckets" for each ROW execute function "storage"."buckets_protect_active_lifecycle_states_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_protect_bucket_control_insert_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_bucket_control_insert" BEFORE INSERT on "storage"."buckets" for each ROW execute function "storage"."buckets_protect_bucket_control_insert_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_protect_bucket_control_update_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_bucket_control_update" BEFORE UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_protect_bucket_control_update_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_protect_bucket_control_update_role_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_bucket_control_update_role" AFTER UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_protect_bucket_control_update_role_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_protect_buckets_delete_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_buckets_delete" BEFORE DELETE on "storage"."buckets" for each STATEMENT execute function "storage"."buckets_protect_buckets_delete_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_wake_lifecycle_on_policy_write_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "wake_lifecycle_on_policy_write" AFTER INSERT OR UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_wake_lifecycle_on_policy_write_fn"();`);
    this.addSql(`create or replace function "storage"."buckets_wake_lifecycle_on_versioning_enable_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "wake_lifecycle_on_versioning_enable" AFTER UPDATE on "storage"."buckets" for each ROW execute function "storage"."buckets_wake_lifecycle_on_versioning_enable_fn"();`);
    this.addSql(`alter table "storage"."buckets" enable row level security;`);

    this.addSql(`alter table "storage"."buckets_analytics" enable row level security;`);

    this.addSql(`alter table "storage"."buckets_vectors" enable row level security;`);

    this.addSql(`alter table "storage"."lifecycle_abandoned_artifacts" enable row level security;`);

    this.addSql(`alter table "storage"."migrations" enable row level security;`);

    this.addSql(`alter table "storage"."objects" add constraint "objects_bucketId_fkey" foreign key ("bucket_id") references "storage"."buckets" ("id");`);
    this.addSql(`create or replace function "storage"."objects_protect_objects_delete_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "protect_objects_delete" BEFORE DELETE on "storage"."objects" for each STATEMENT execute function "storage"."objects_protect_objects_delete_fn"();`);
    this.addSql(`create or replace function "storage"."objects_update_objects_updated_at_fn"() returns trigger as \$\$ begin ; end; \$\$ language plpgsql;`);
    this.addSql(`create trigger "update_objects_updated_at" BEFORE UPDATE on "storage"."objects" for each ROW execute function "storage"."objects_update_objects_updated_at_fn"();`);
    this.addSql(`alter table "storage"."objects" enable row level security;`);

    this.addSql(`alter table "storage"."s3_multipart_uploads" add constraint "s3_multipart_uploads_bucket_id_fkey" foreign key ("bucket_id") references "storage"."buckets" ("id");`);
    this.addSql(`alter table "storage"."s3_multipart_uploads" enable row level security;`);

    this.addSql(`alter table "storage"."s3_multipart_uploads_parts" add constraint "s3_multipart_uploads_parts_bucket_id_fkey" foreign key ("bucket_id") references "storage"."buckets" ("id");`);
    this.addSql(`alter table "storage"."s3_multipart_uploads_parts" add constraint "s3_multipart_uploads_parts_upload_id_fkey" foreign key ("upload_id") references "storage"."s3_multipart_uploads" ("id") on delete cascade;`);
    this.addSql(`alter table "storage"."s3_multipart_uploads_parts" enable row level security;`);

    this.addSql(`alter table "storage"."vector_indexes" add constraint "vector_indexes_bucket_id_fkey" foreign key ("bucket_id") references "storage"."buckets_vectors" ("id");`);
    this.addSql(`alter table "storage"."vector_indexes" enable row level security;`);

    this.addSql(`create view "extensions"."pg_stat_statements_info" as SELECT dealloc,
    stats_reset
   FROM pg_stat_statements_info() pg_stat_statements_info(dealloc, stats_reset);`);

    this.addSql(`create view "extensions"."pg_stat_statements" as SELECT userid,
    dbid,
    toplevel,
    queryid,
    query,
    plans,
    total_plan_time,
    min_plan_time,
    max_plan_time,
    mean_plan_time,
    stddev_plan_time,
    calls,
    total_exec_time,
    min_exec_time,
    max_exec_time,
    mean_exec_time,
    stddev_exec_time,
    rows,
    shared_blks_hit,
    shared_blks_read,
    shared_blks_dirtied,
    shared_blks_written,
    local_blks_hit,
    local_blks_read,
    local_blks_dirtied,
    local_blks_written,
    temp_blks_read,
    temp_blks_written,
    shared_blk_read_time,
    shared_blk_write_time,
    local_blk_read_time,
    local_blk_write_time,
    temp_blk_read_time,
    temp_blk_write_time,
    wal_records,
    wal_fpi,
    wal_bytes,
    jit_functions,
    jit_generation_time,
    jit_inlining_count,
    jit_inlining_time,
    jit_optimization_count,
    jit_optimization_time,
    jit_emission_count,
    jit_emission_time,
    jit_deform_count,
    jit_deform_time,
    stats_since,
    minmax_stats_since
   FROM pg_stat_statements(true) pg_stat_statements(userid, dbid, toplevel, queryid, query, plans, total_plan_time, min_plan_time, max_plan_time, mean_plan_time, stddev_plan_time, calls, total_exec_time, min_exec_time, max_exec_time, mean_exec_time, stddev_exec_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, shared_blk_read_time, shared_blk_write_time, local_blk_read_time, local_blk_write_time, temp_blk_read_time, temp_blk_write_time, wal_records, wal_fpi, wal_bytes, jit_functions, jit_generation_time, jit_inlining_count, jit_inlining_time, jit_optimization_count, jit_optimization_time, jit_emission_count, jit_emission_time, jit_deform_count, jit_deform_time, stats_since, minmax_stats_since);`);
  }

}
