

export interface FeedPaginationParams {
  
  limit: number;
  
  fetchLimit: number;
  
  before: string | null;
  
  offset: number;
  
  seen: Set<string>;
}

export const MAX_SEEN_IDS = 200;


export function parseFeedParams(
  searchParams: URLSearchParams,
  defaults: { limit?: number; maxLimit?: number; poolFactor?: number; poolCap?: number } = {},
): FeedPaginationParams {
  const dl   = defaults.limit      ?? 20;
  const ml   = defaults.maxLimit   ?? 40;
  const pf   = defaults.poolFactor ?? 3;
  const pc   = defaults.poolCap    ?? 120;

  const limit = Math.max(1, Math.min(parseInt(searchParams.get('limit') ?? `${dl}`, 10) || dl, ml));
  const fetchLimit = Math.min(limit * pf, pc);

  const beforeRaw = searchParams.get('before');
  const before = beforeRaw && /^\d{4}-\d{2}-\d{2}T/.test(beforeRaw) ? beforeRaw : null;

  const offset = Math.max(0, parseInt(searchParams.get('offset') ?? '0', 10) || 0);

  const seenRaw = searchParams.get('seen') ?? '';
  const seenIds = seenRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, MAX_SEEN_IDS);

  return { limit, fetchLimit, before, offset, seen: new Set(seenIds) };
}


export function deriveNextCursor(
  ranked: Array<{ created_at?: string | null }>,
  fetchedCount: number,
  fetchLimit: number,
): string | null {
  
  if (fetchedCount < fetchLimit) return null;
  if (ranked.length === 0) return null;
  
  
  let oldest: string | null = null;
  for (const r of ranked) {
    const c = r.created_at;
    if (!c) continue;
    if (oldest === null || c < oldest) oldest = c;
  }
  return oldest;
}
