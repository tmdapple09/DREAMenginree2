create table if not exists public.render_assets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  runtime_id text not null,
  visibility text not null default 'local' check (visibility in ('local', 'shared', 'global')),
  asset_kind text not null check (asset_kind in ('mesh', 'texture', 'material', 'scene', 'environment')),
  manifest jsonb not null default '{}'::jsonb,
  byte_length bigint not null default 0 check (byte_length >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  version integer not null default 1 check (version > 0)
);

alter table public.render_assets enable row level security;

create policy "render_assets_select_owned_or_visible"
  on public.render_assets for select
  using (auth.uid() = owner_id or visibility in ('shared', 'global'));

create policy "render_assets_insert_owned"
  on public.render_assets for insert
  with check (auth.uid() = owner_id and visibility in ('local', 'shared', 'global'));

create policy "render_assets_update_owned"
  on public.render_assets for update
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy "render_assets_delete_owned"
  on public.render_assets for delete
  using (auth.uid() = owner_id);
