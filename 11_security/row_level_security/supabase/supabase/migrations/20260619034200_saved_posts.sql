-- User-curated saved posts for profile feeds.

create table if not exists public.saved_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.app_posts(id) on delete cascade,
  saved_at timestamp with time zone not null default now(),
  unique (user_id, post_id)
);

create index if not exists saved_posts_user_saved_at_idx
  on public.saved_posts (user_id, saved_at desc);

alter table public.saved_posts enable row level security;

drop policy if exists "saved posts readable by owner" on public.saved_posts;
create policy "saved posts readable by owner"
  on public.saved_posts for select
  using (auth.uid() = user_id);

drop policy if exists "saved posts insertable by owner" on public.saved_posts;
create policy "saved posts insertable by owner"
  on public.saved_posts for insert
  with check (auth.uid() = user_id);

drop policy if exists "saved posts deletable by owner" on public.saved_posts;
create policy "saved posts deletable by owner"
  on public.saved_posts for delete
  using (auth.uid() = user_id);
