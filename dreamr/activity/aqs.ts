import { createClient } from '@/supabase/client/client';
import type { UserMetrics } from './types';








export async function calculateAQS(userId: string): Promise<number> {
  const supabase = createClient();

  try {
    
    const { data, error } = await supabase.rpc('calculate_aqs', {
      p_user_id: userId,
    });

    if (error) {
      console.error('[AQS] Error calculating AQS:', error);
      return 0;
    }

    return data ?? 0;
  } catch (err: unknown) {
    console.error('[AQS] Exception calculating AQS:', err);
    return 0;
  }
}


export async function getUserMetrics(
  userId: string,
): Promise<UserMetrics | null> {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from('user_metrics')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('[AQS] Error fetching user metrics:', error);
      return null;
    }

    return data;
  } catch (err: unknown) {
    console.error('[AQS] Exception fetching user metrics:', err);
    return null;
  }
}


export async function getAQS(userId: string): Promise<number> {
  const metrics = await getUserMetrics(userId);
  return metrics?.aqs ?? 0;
}


export async function qualifiesForPremiumCPV(userId: string): Promise<boolean> {
  const aqs = await getAQS(userId);
  return aqs > 500;
}


export function getAQSTier(aqs: number): string {
  if (aqs >= 1000) return 'Elite';
  if (aqs >= 500) return 'Active';
  if (aqs >= 100) return 'Building';
  if (aqs > 0) return 'New';
  return 'Watching';
}


export function getAQSTierColor(aqs: number): string {
  if (aqs >= 1000) return 'text-purple-500';
  if (aqs >= 500) return 'text-blue-500';
  if (aqs >= 100) return 'text-green-500';
  if (aqs > 0) return 'text-gray-500';
  return 'text-gray-400';
}


export function formatAQS(aqs: number): string {
  return aqs.toLocaleString();
}


export function calculateRealShitRate(
  verifiedPosts: number,
  totalPosts: number,
): number {
  if (totalPosts === 0) return 0;
  return (verifiedPosts / totalPosts) * 100;
}


export function formatRealShitRate(rate: number): string {
  return `${rate.toFixed(0)}%`;
}


export async function getAQSLeaderboard(
  limit: number = 100,
): Promise<UserMetrics[]> {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from('user_metrics')
      .select('*')
      .order('aqs', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('[AQS] Error fetching leaderboard:', error);
      return [];
    }

    return data ?? [];
  } catch (err: unknown) {
    console.error('[AQS] Exception fetching leaderboard:', err);
    return [];
  }
}
