import { createServerClient } from '@/supabase/server/serverClient';

// lib/ai/rate-limiter.ts
// Rate Limiting Service

// ============================================================================
// RATE LIMIT CHECK
// ============================================================================

export interface RateLimitConfig {
  maxRequests: number;
  windowMinutes: number;
}

type RateLimitRpcPayload = {
  allowed?: boolean;
  rpm?: number;
  retry_after_seconds?: number;
  request_count?: number;
};

function normalizeRateLimitPayload(data: unknown): RateLimitRpcPayload | null {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  return data as RateLimitRpcPayload;
}

export const RATE_LIMITS: Record<string, RateLimitConfig> = {
  '/api/dr-eams/run': {
    maxRequests: 30,
    windowMinutes: 1,
  },
  '/api/ai/idari': {
    maxRequests: 20,
    windowMinutes: 1,
  },
  '/api/ai/execute': {
    maxRequests: 60,
    windowMinutes: 1,
  },
};

export async function checkRateLimit(
  userId: string,
  endpoint: string
): Promise<{ allowed: boolean; rpm: number; resetAt?: Date }> {
  const config = RATE_LIMITS[endpoint] ?? { maxRequests: 30, windowMinutes: 1 };

  const supabase = await createServerClient();

  // Call DB function to check rate limit
  const { data, error } = await supabase.rpc('check_ai_rate_limit', {
    p_user_id: userId,
    p_endpoint: endpoint,
    p_max_requests: config.maxRequests,
    p_window_minutes: config.windowMinutes,
  });

  if (error) {
    console.error('Rate limit check error:', error);
    // Fail-closed per spec §8: any error returns { allowed: false, rpm: 0 }
    return { allowed: false, rpm: 0 };
  }

  const result = normalizeRateLimitPayload(data);
  const allowed = result?.allowed === true;

  // Calculate reset time
  const now = new Date();
  const resetAt = new Date(
    now.getTime() + config.windowMinutes * 60 * 1000
  );

  // Get current request count (approximate)
  const { data: rateLimitData } = await supabase
    .from('ai_rate_limits')
    .select('request_count')
    .eq('user_id', userId)
    .eq('endpoint', endpoint)
    .order('window_start', { ascending: false })
    .limit(1)
    .single();

  const rpm = result?.rpm ?? rateLimitData?.request_count ?? 0;

  return { allowed, rpm, resetAt };
}

// ============================================================================
// GET CURRENT RPM (for Boogie signals)
// ============================================================================

export async function getCurrentRPM(userId: string, endpoint: string): Promise<number> {
  const supabase = await createServerClient();

  const { data } = await supabase
    .from('ai_rate_limits')
    .select('request_count')
    .eq('user_id', userId)
    .eq('endpoint', endpoint)
    .order('window_start', { ascending: false })
    .limit(1)
    .single();

  return data?.request_count ?? 0;
}
