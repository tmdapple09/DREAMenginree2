-- Align connector feed storage with the current DREAMengin social schema.
-- The existing public.feed_items table is widget-shaped and does not have
-- user_id/provider/external_id/payload columns, so connector sync/webhooks need
-- their own user-scoped table.

create table if not exists public.connector_feed_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  provider text not null,
  external_id text not null,
  payload jsonb not null default '{}'::jsonb,
  published_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null default now(),
  unique (user_id, provider, external_id)
);

create index if not exists connector_feed_items_user_provider_published_idx
  on public.connector_feed_items (user_id, provider, published_at desc);

alter table public.connector_feed_items enable row level security;

drop policy if exists "connector feed items are readable by owner" on public.connector_feed_items;
create policy "connector feed items are readable by owner"
  on public.connector_feed_items
  for select
  using (auth.uid() = user_id);

drop policy if exists "connector feed items are writable by owner" on public.connector_feed_items;
create policy "connector feed items are writable by owner"
  on public.connector_feed_items
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "connector feed items are updateable by owner" on public.connector_feed_items;
create policy "connector feed items are updateable by owner"
  on public.connector_feed_items
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "connector feed items are deletable by owner" on public.connector_feed_items;
create policy "connector feed items are deletable by owner"
  on public.connector_feed_items
  for delete
  using (auth.uid() = user_id);
