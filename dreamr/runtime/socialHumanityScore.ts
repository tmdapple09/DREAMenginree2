import { createClient } from '@/supabase/client/client';
import type { SupabaseClient } from '@supabase/supabase-js';

export interface SocialHumanityInput {
  userId: string;
  creatorId: string;
  actionType: 'view' | 'like' | 'comment' | 'share';
  timestamp?: Date;
  ipHash?: string;       
}

export interface HumanityScore {
  score: number;         
  signals: {
    followDurationDays: number;
    messageCount: number;
    mutualFollowers: number;
    likeDiversity: number;      
    timeConsistency: number;    
    locationConsistency: number;
  };
  verdict: 'human' | 'bot' | 'uncertain';
  thresholdUsed: number;
}

const DEFAULT_THRESHOLD = 40; 


async function getFollowDuration(supabase: SupabaseClient, followerId: string, followeeId: string): Promise<number> {
  const { data, error } = await supabase
    .from('follows')
    .select('created_at')
    .eq('follower_id', followerId)
    .eq('following_id', followeeId)
    .single();
  if (error || !data) return 0;
  const days = (Date.now() - new Date(data.created_at).getTime()) / (1000 * 60 * 60 * 24);
  return Math.min(365, Math.max(0, days)); 
}


async function getMessageCount(supabase: SupabaseClient, userA: string, userB: string): Promise<number> {
  const { count, error } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .or(`sender_id.eq.${userA},recipient_id.eq.${userA}`)
    .or(`sender_id.eq.${userB},recipient_id.eq.${userB}`);
  if (error) return 0;
  return count || 0;
}


async function getMutualFollowers(supabase: SupabaseClient, userId: string, creatorId: string): Promise<number> {
  const { data: userFollowers } = await supabase
    .from('follows')
    .select('follower_id')
    .eq('following_id', userId);
  const { data: creatorFollowers } = await supabase
    .from('follows')
    .select('follower_id')
    .eq('following_id', creatorId);
  const userSet = new Set(userFollowers?.map((f: { follower_id: string }) => f.follower_id) || []);
  const mutual = (creatorFollowers || []).filter((f: { follower_id: string }) => userSet.has(f.follower_id)).length;
  return mutual;
}


async function getLikeDiversity(supabase: SupabaseClient, userId: string): Promise<number> {
  const { data } = await supabase
    .from('likes')
    .select('post_id, content_id')
    .eq('user_id', userId)
    .limit(50);
  if (!data || data.length === 0) return 0;
  
  const freq = new Map<string, number>();
  let total = 0;
  for (const like of data) {
    let rawSourceId = '';
    if (typeof like.post_id === 'string') {
      rawSourceId = like.post_id.trim();
    } else if (typeof like.content_id === 'string') {
      rawSourceId = like.content_id.trim();
    }
    if (!rawSourceId) continue;
    const cat = rawSourceId.slice(0, 2); 
    freq.set(cat, (freq.get(cat) || 0) + 1);
    total++;
  }
  if (freq.size === 0) return 0;
  let entropy = 0;
  for (const count of freq.values()) {
    const p = count / total;
    entropy -= p * Math.log2(p);
  }
  const maxEntropy = Math.log2(freq.size || 1);
  return maxEntropy === 0 ? 0 : entropy / maxEntropy;
}


async function getTimeConsistency(supabase: SupabaseClient, userId: string, actionHour: number): Promise<number> {
  
  const { data } = await supabase
    .from('user_actions')
    .select('created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(20);
  if (!data || data.length < 5) return 0.5; 
  const hours = data.map((a: { created_at: string }) => new Date(a.created_at).getHours());
  const meanHour = hours.reduce((a: number, b: number) => a+b, 0) / hours.length;
  const std = Math.sqrt(hours.map((h) => Math.pow(h - meanHour, 2)).reduce((a: number, b: number) => a+b, 0) / hours.length);
  const deviation = Math.abs(actionHour - meanHour);
  const z = deviation / (std + 0.01);
  return Math.max(0, Math.min(1, 1 - z / 2));
}


async function getLocationConsistency(supabase: SupabaseClient, userId: string, currentIpHash: string): Promise<number> {
  const { data } = await supabase
    .from('user_actions')
    .select('ip_hash')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(10);
  if (!data || data.length === 0) return 0.5;
  const matchCount = data.filter((a: { ip_hash: string }) => a.ip_hash === currentIpHash).length;
  return matchCount / data.length;
}


export async function computeSocialHumanityScore(input: SocialHumanityInput): Promise<HumanityScore> {
  const supabase = createClient();
  const now = input.timestamp || new Date();
  const actionHour = now.getHours();

  
  const [followDays, messageCount, mutualFollowers, likeDiversity, timeConsistency, locationConsistency] = await Promise.all([
    getFollowDuration(supabase, input.userId, input.creatorId),
    getMessageCount(supabase, input.userId, input.creatorId),
    getMutualFollowers(supabase, input.userId, input.creatorId),
    getLikeDiversity(supabase, input.userId),
    getTimeConsistency(supabase, input.userId, actionHour),
    input.ipHash ? getLocationConsistency(supabase, input.userId, input.ipHash) : Promise.resolve(0.5),
  ]);

  
  const followScore = Math.min(1, followDays / 30);      
  const messageScore = Math.min(1, messageCount / 20);   
  const mutualScore = Math.min(1, mutualFollowers / 5);  
  const diversityScore = likeDiversity;                  
  const timeScore = timeConsistency;                     
  const locationScore = locationConsistency;             

  
  const weights = {
    follow: 0.25,
    message: 0.20,
    mutual: 0.15,
    diversity: 0.15,
    time: 0.15,
    location: 0.10,
  };

  const rawScore =
    followScore * weights.follow +
    messageScore * weights.message +
    mutualScore * weights.mutual +
    diversityScore * weights.diversity +
    timeScore * weights.time +
    locationScore * weights.location;

  const score = Math.round(rawScore * 100);

  const verdict = score >= DEFAULT_THRESHOLD ? 'human' : (score < 20 ? 'bot' : 'uncertain');

  return {
    score,
    signals: {
      followDurationDays: followDays,
      messageCount,
      mutualFollowers,
      likeDiversity: diversityScore,
      timeConsistency: timeScore,
      locationConsistency: locationScore,
    },
    verdict,
    thresholdUsed: DEFAULT_THRESHOLD,
  };
}
