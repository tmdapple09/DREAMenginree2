-- Add the optional public-profile fields that ProfileDream/EditProfileDream already use.
-- These are nullable/backward-compatible, so old profiles continue to work.

alter table public.profiles
  add column if not exists banner_url text,
  add column if not exists website text,
  add column if not exists location text,
  add column if not exists dream_config jsonb not null default '[]'::jsonb,
  add column if not exists profile_dream_widgets jsonb not null default '[]'::jsonb;
