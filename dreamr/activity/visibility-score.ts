import { createClient } from '@/supabase/client/client';
import type { ActivityTier } from './types';










export async function calculateVisibilityScore(postId: string): Promise<number> {
  const supabase = createClient();

  try {
    
    const { data, error } = await supabase.rpc('calculate_visibility_score', {
      p_post_id: postId,
    });

    if (error) {
      console.error('[VisibilityScore] Error calculating score:', error);
      return 0;
    }

    return data ?? 0;
  } catch (err: unknown) {
    console.error('[VisibilityScore] Exception calculating score:', err);
    return 0;
  }
}


export async function calculateVisibilityScores(
  postIds: string[],
): Promise<Map<string, number>> {
  const supabase = createClient();
  const scores = new Map<string, number>();

  if (postIds.length === 0) return scores;

  try {
    
    const promises = postIds.map(async (postId) => {
      const { data } = await supabase.rpc('calculate_visibility_score', {
        p_post_id: postId,
      });
      return { postId, score: data ?? 0 };
    });

    const results = await Promise.all(promises);
    results.forEach(({ postId, score }) => scores.set(postId, score));

    return scores;
  } catch (err: unknown) {
    console.error('[VisibilityScore] Exception calculating batch scores:', err);
    return scores;
  }
}


export async function sortByVisibilityScore<T extends { id: string }>(
  posts: T[],
): Promise<T[]> {
  if (posts.length === 0) return posts;

  const postIds = posts.map((p) => p.id);
  const scores = await calculateVisibilityScores(postIds);

  return [...posts].sort((a, b) => {
    const scoreA = scores.get(a.id) ?? 0;
    const scoreB = scores.get(b.id) ?? 0;
    return scoreB - scoreA; 
  });
}


export async function getVisibilityRankedFeed(
  userId: string,
  options: {
    limit?: number;
    before?: string; 
    provider?: string; 
  } = {},
): Promise<unknown[]> {
  const supabase = createClient();
  const { limit = 30, before } = options;

  try {
    
    const { data: follows } = await supabase
      .from('follows')
      .select('following_id')
      .eq('follower_id', userId);

    const followedIds = (follows ?? []).map((f: { following_id: string }) => f.following_id);
    const authorIds = [userId, ...followedIds];

    
    let query = supabase
      .from('app_posts')
      .select(
        'id, content, visibility, media_url, media_urls, media_json, created_at, ' +
        'view_count, likes_count, comments_count, ' +
        'profiles!app_posts_user_id_fkey(handle, display_name, avatar_url)',
      )
      .in('user_id', authorIds)
      .eq('visibility', 'public')
      .order('created_at', { ascending: false })
      .limit(limit * 2); 

    if (before) {
      query = query.lt('created_at', before);
    }

    const { data: posts } = await query;

    if (!posts || posts.length === 0) return [];

    
    const rankedPosts = await sortByVisibilityScore(posts);

    
    return rankedPosts.slice(0, limit);
  } catch (err: unknown) {
    console.error('[VisibilityScore] Exception fetching ranked feed:', err);
    return [];
  }
}


export async function shouldPromotePost(postId: string): Promise<boolean> {
  const supabase = createClient();

  try {
    
    const { data } = await supabase
      .from('activity_points')
      .select('tier')
      .eq('post_id', postId)
      .gt('tier', 0) 
      .single();

    return !!data;
  } catch (err: unknown) {
    
    return false;
  }
}


function getTierMultiplier(tier: ActivityTier): number {
  const multipliers: Record<number, number> = {
    0: 1,   
    1: 2,   
    2: 4,   
    3: 8,   
    4: 8,   
    5: 16,  
    6: 16,  
  };
  return multipliers[tier] ?? 1;
}


export function estimateVisibilityScore(params: {
  aqs: number;
  tier: ActivityTier;
  verificationStrength: number;
  isInnovation?: boolean;
}): number {
  const { aqs, tier, verificationStrength, isInnovation = false } = params;

  const tierMultiplier = getTierMultiplier(tier);
  const innovationBonus = isInnovation ? 1000 : 0;

  return aqs * tierMultiplier + verificationStrength + innovationBonus;
}
