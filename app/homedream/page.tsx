import HomeDreamSurface from '@/app/dreamdmbar/_components/HomeDreamRegion';
import { isDevBypassActive } from '@/engine/dev-bypass';
import type { FeedPost } from '@/dreamr/feed/useLiveFeed';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

type ProfileRow = {
  id: string;
  handle: string | null;
  display_name: string | null;
  avatar_url: string | null;
};

type AppPostRow = FeedPost & {
  user_id?: string | null;
};

const DEV_BYPASS_USER_ID = 'dev-bypass-user';

export default async function HomeDreamPage() {
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  const devBypass = isDevBypassActive();

  if (!user && !devBypass) redirect('/login');

  const userId = user?.id ?? DEV_BYPASS_USER_ID;
  let profile: ProfileRow | null = null;
  let posts: FeedPost[] = [];

  if (user) {
    const [profileResult, postsResult] = await Promise.allSettled([
      supabase
        .from('profiles')
        .select('id, handle, display_name, avatar_url')
        .eq('id', user.id)
        .single<ProfileRow>(),
      supabase
        .from('app_posts')
        .select('id, user_id, content, visibility, media_url, media_urls, media_json, created_at, likes_count, comments_count')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20)
        .returns<AppPostRow[]>(),
    ]);

    profile = profileResult.status === 'fulfilled' ? profileResult.value.data ?? null : null;
    const rows = postsResult.status === 'fulfilled' ? postsResult.value.data ?? [] : [];
    posts = rows.map((post) => ({
      ...post,
      profiles: profile
        ? {
            handle: profile.handle ?? 'dreamer',
            display_name: profile.display_name,
            avatar_url: profile.avatar_url,
          }
        : { handle: 'dreamer', display_name: 'Dreamer', avatar_url: null },
    }));
  }

  return (
    <main style={{ minHeight: '100dvh', background: 'var(--de-surface-space-bg, #f0f4fb)' }}>
      <HomeDreamSurface
        profile={profile}
        posts={posts as unknown as Record<string, unknown>[]}
        userId={userId}
        runtimeRegion="surface"
      />
    </main>
  );
}
