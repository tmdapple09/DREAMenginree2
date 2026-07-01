




export type FeedEntry = {
  id: string;
  source: 'connector' | 'post' | 'system';
  provider?: string;
  author_handle?: string;
  author_name?: string;
  author_avatar?: string | null;
  content_text?: string;
  published_at: string;
  likes_count?: number;
};


export async function getFeed(opts?: {
  limit?: number;
  before?: string;
  provider?: string;
  sort?: 'recent' | 'trending';
}): Promise<FeedEntry[]> {
  const params = new URLSearchParams();
  if (opts?.limit)    params.set('limit',    String(opts.limit));
  if (opts?.before)   params.set('before',   opts.before);
  if (opts?.provider) params.set('provider', opts.provider);
  if (opts?.sort)     params.set('sort',     opts.sort);

  try {
    const res = await fetch(`/api/feed?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.feed ?? [];
  } catch (err: unknown) {
    console.error('Feed fetch error:', err);
    return [];
  }
}

export type RegistryEntry = {
  id: string;
  object_type: string;
  internal_id: string;
  label: string;
  owner_id: string | null;
  created_at: string;
};


export async function syncToGlobalRegistry(
  type: string,
  internalId: string,
  label: string,
): Promise<{ data: RegistryEntry | null; error: string | null }> {
  try {
    const res = await fetch('/api/gal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, internalId, label }),
    });
    const json = await res.json();
    if (!res.ok) return { data: null, error: json.error ?? 'Registry sync failed.' };
    return { data: json.data as RegistryEntry, error: null };
  } catch (err: unknown) {
    console.error('GAL sync error:', err);
    return { data: null, error: 'Registry sync failed.' };
  }
}

export type AdOrderResult = {
  id: string;
  ad_listing_id: string;
  buyer_id: string;
  gross_revenue: number;
  platform_share: number;
  creator_share: number;
  platform_payout: number;
  creator_payout: number;
  status: string;
};


export async function processAdOrder(
  listingId: string,
  grossAmount: number,
): Promise<{ data: AdOrderResult | null; error: string | null }> {
  try {
    const res = await fetch('/api/ads/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, grossAmount }),
    });
    const json = await res.json();
    if (!res.ok) return { data: null, error: json.error ?? 'Ad order failed.' };
    return { data: json.data as AdOrderResult, error: null };
  } catch (err: unknown) {
    console.error('Ad order error:', err);
    return { data: null, error: 'Ad order failed.' };
  }
}

export { logPhysicsExperiment } from './lab';
