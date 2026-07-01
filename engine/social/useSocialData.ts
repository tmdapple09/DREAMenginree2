'use client';

import type { NormalizedPost } from '@/engine/social/normalizers';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toErrorMessage } from '@/utils/index';






export type SocialPlatformFilter = 'all' | 'mastodon' | 'nostr' | 'bluesky';

export interface SocialDataState {
  posts: NormalizedPost[];
  isLoading: boolean;
  error: string | null;
  
  breakdown: Record<SocialPlatformFilter, number>;
  
  lastFetchedAt: string | null;
  
  refresh: () => void;
  
  setPlatform: (platform: SocialPlatformFilter) => void;
  currentPlatform: SocialPlatformFilter;
}

const BACKEND_BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? '/api/social';
const DEFAULT_LIMIT = 30;
const POLL_INTERVAL_MS = 60_000; 

async function fetchPlatformFeed(
  platform: SocialPlatformFilter,
  limit: number
): Promise<NormalizedPost[]> {
  const url =
    platform === 'all'
      ? `${BACKEND_BASE}/feed?limit=${limit}`
      : `${BACKEND_BASE}/feed/${platform}?limit=${limit}`;

  const res = await fetch(url, { next: { revalidate: 30 } });
  if (!res.ok) throw new Error(`${platform} feed fetch failed (${res.status})`);

  const raw = (await res.json()) as unknown[];

  
  
  
  return (raw as unknown[]).map((rawItem: unknown): NormalizedPost => {
  const item = rawItem as Record<string, unknown>;
  return ({
    id: String((item as Record<string, unknown>).id ?? crypto.randomUUID()),
    source:
      (item.platform as NormalizedPost['source']) ??
      deriveSource(String((item as Record<string, unknown>).id ?? '')),
    provider: String((item as Record<string, unknown>).platform ?? 'unknown'),
    content: stripHtml(String((item as Record<string, unknown>).content ?? '')),
    author: (() => {
      const a = (item.author ?? {}) as Record<string, unknown>;
      return {
        handle: String(a.handle ?? a.acct ?? 'unknown'),
        displayName: (a.displayName ?? a.display_name ?? null) as string | null,
        avatarUrl: (a.avatar ?? null) as string | null,
      };
    })(),
    mediaUrl: (item.mediaUrl ?? item.media_url ?? null) as string | null,
    permalink: (item.originalUrl ?? item.url ?? null) as string | null,
    createdAt:
      item.timestamp instanceof Date
        ? (item.timestamp as Date).toISOString()
        : String(item.timestamp ?? item.created_at ?? new Date().toISOString()),
    visibility: 'public',
  });
});
}


function deriveSource(id: string): NormalizedPost['source'] {
  if (id.startsWith('mastodon_')) return 'mastodon';
  if (id.startsWith('nostr_')) return 'nostr';
  if (id.startsWith('bluesky_')) return 'bluesky';
  return 'connector';
}


function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function countByPlatform(
  posts: NormalizedPost[]
): Record<SocialPlatformFilter, number> {
  return posts.reduce(
    (acc, p) => {
      const src = p.source as SocialPlatformFilter;
      acc[src] = (acc[src] ?? 0) + 1;
      return acc;
    },
    { all: posts.length, mastodon: 0, nostr: 0, bluesky: 0 } as Record<
      SocialPlatformFilter,
      number
    >
  );
}


export function useSocialData(
  initialPlatform: SocialPlatformFilter = 'all',
  limit: number = DEFAULT_LIMIT
): SocialDataState {
  const [platform, setPlatformState] =
    useState<SocialPlatformFilter>(initialPlatform);
  const [posts, setPosts] = useState<NormalizedPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<string | null>(null);
  const [breakdown, setBreakdown] = useState<Record<SocialPlatformFilter, number>>(
    { all: 0, mastodon: 0, nostr: 0, bluesky: 0 }
  );

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMounted = useRef(true);

  const load = useCallback(
    async (currentPlatform: SocialPlatformFilter) => {
      setIsLoading(true);
      setError(null);
      try {
        const fetched = await fetchPlatformFeed(currentPlatform, limit);
        if (!isMounted.current) return;
        setPosts(fetched);
        setBreakdown(countByPlatform(fetched));
        setLastFetchedAt(new Date().toISOString());
      } catch (err: unknown) {
        if (!isMounted.current) return;
        setError(err instanceof Error ? toErrorMessage(err) : 'Failed to load social feed');
      } finally {
        if (isMounted.current) setIsLoading(false);
      }
    },
    [limit]
  );

  
  useEffect(() => {
    void load(platform);
  }, [platform, load]);

  
  useEffect(() => {
    pollRef.current = setInterval(() => void load(platform), POLL_INTERVAL_MS);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [platform, load]);

  
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const refresh = useCallback(() => void load(platform), [platform, load]);

  const setPlatform = useCallback((next: SocialPlatformFilter) => {
    setPlatformState(next);
  }, []);

  return {
    posts,
    isLoading,
    error,
    breakdown,
    lastFetchedAt,
    refresh,
    setPlatform,
    currentPlatform: platform,
  };
}
