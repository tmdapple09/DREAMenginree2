import type { SupabaseClient } from '@/engine/io';



export interface VisibilityCandidate {
  user_id?: string | null;
  post_visibility?: string | null;
}


export function filterByCloseFriends<T extends VisibilityCandidate>(
  posts: T[],
  viewerId: string,
  allowedPosterIds: ReadonlySet<string>,
): T[] {
  return posts.filter((p) => {
    const vis = p.post_visibility ?? 'public';
    if (vis !== 'close_friends') return true;
    if (p.user_id === viewerId) return true;
    if (p.user_id && allowedPosterIds.has(p.user_id)) return true;
    return false;
  });
}


export async function fetchCloseFriendsCircle(
  serviceClient: SupabaseClient<unknown>,
  viewerId: string,
): Promise<Set<string>> {
  if (!viewerId) return new Set();
  const { data, error } = await serviceClient
    .from('close_friends')
    .select('user_id')
    .eq('friend_id', viewerId);
  if (error || !data) return new Set();
  return new Set(
    (data as Array<{ user_id: string }>)
      .map((r) => r.user_id)
      .filter(Boolean),
  );
}


export async function loadVisibilityCircle(viewerId: string): Promise<Set<string>> {
  if (!viewerId) return new Set();
  try {
    const mod = await import('@/supabase/server/serverClient');
    const svc = await mod.createServiceClient();
    return await fetchCloseFriendsCircle(svc as any as Parameters<typeof fetchCloseFriendsCircle>[0], viewerId);
  } catch {
    return new Set();
  }
}
