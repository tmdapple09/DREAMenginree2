'use client';

import { ALL_TOPICS, DEFAULT_TOPIC_IDS, loadActiveTopicIds, topicIdsToQueries } from '@/dreamr/feed/feedTopics';
import type { FeedPost } from '@/dreamr/feed/useLiveFeed';
import type { UnifiedFeedItem } from '@/types/connector';
import { useCallback, useEffect, useRef, useState } from 'react';



const FEED_MAX = 30;
const REFRESH_INTERVAL_DEFAULT_S = 15;
const REFRESH_INTERVAL_ALL_S = 10;


const ENRICHMENT_QUERIES: string[] = [
  'world news today',
  'popular music videos 2024',
  'trending videos',
];


function ytItemToFeedPost(item: UnifiedFeedItem): FeedPost {
  const thumbnail =
    item.media.length > 0
      ? (item.media[0].thumbnail_url ?? item.media[0].url ?? null)
      : null;

  return {
    id: `yt:${item.external_id}`,
    content: item.content_text,
    visibility: 'public',
    media_url: thumbnail,
    created_at: item.published_at,
    profiles: {
      handle: item.author_handle,
      display_name: item.author_name,
      avatar_url: null,
    },
    likes_count: 0,
    comments_count: 0,
    source: 'connector',
    provider: 'youtube',
    permalink: item.permalink,
  };
}

async function fetchYtQuery(
  query: string,
  max: number,
  signal?: AbortSignal,
): Promise<UnifiedFeedItem[]> {
  try {
    const url = `/api/youtube/live-feed?query=${encodeURIComponent(query)}&max=${max}`;
    const res = await fetch(url, signal ? { signal } : {});
    if (!res.ok) return [];
    const data = await res.json() as { ok: boolean; items?: UnifiedFeedItem[] };
    return data.ok ? (data.items ?? []) : [];
  } catch {
    return [];
  }
}

export interface UseYouTubeLiveFeedReturn {
  ytPosts: FeedPost[];
  isRefreshing: boolean;
  nextRefreshIn: number;
  refresh: () => void;
}

export function useYouTubeLiveFeed(): UseYouTubeLiveFeedReturn {
  const [ytPosts, setYtPosts] = useState<FeedPost[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  
  
  const getQueries = useCallback((): string[] => {
    const ids = loadActiveTopicIds();
    const queries = topicIdsToQueries(ids);
    return queries.length > 0 ? queries : topicIdsToQueries(DEFAULT_TOPIC_IDS);
  }, []);

  const getRefreshInterval = useCallback((): number => {
    const ids = loadActiveTopicIds();
    return ids.length >= ALL_TOPICS.length ? REFRESH_INTERVAL_ALL_S : REFRESH_INTERVAL_DEFAULT_S;
  }, []);

  const queryIndexRef = useRef(0);
  const seenIdsRef    = useRef<Set<string>>(new Set());
  const refreshingRef = useRef(false);
  const mountedRef    = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const ctrl = new AbortController();

    async function init( ){
      setIsRefreshing(true);
      try {
        const queries = getQueries();
        
        
        const allQueries = [
          ...queries,
          ...ENRICHMENT_QUERIES.filter((q) => !queries.includes(q)),
        ];
        const results = await Promise.all(
          allQueries.map((q) => fetchYtQuery(q, 7, ctrl.signal)),
        );
        if (!mountedRef.current) return;

        
        const interleaved: UnifiedFeedItem[] = [];
        const maxLen = Math.max(...results.map((r) => r.length));
        for (let i = 0; i < maxLen; i++) {
          for (const batch of results) {
            if (i < batch.length) interleaved.push(batch[i]!);
          }
        }

        
        const posts: FeedPost[] = [];
        const seen = new Set<string>();
        for (const item of interleaved) {
          if (seen.has(item.external_id)) continue;
          seen.add(item.external_id);
          seenIdsRef.current.add(item.external_id);
          posts.push(ytItemToFeedPost(item));
          if (posts.length >= FEED_MAX) break;
        }

        setYtPosts(posts);
      } catch {
        
      } finally {
        if (mountedRef.current) setIsRefreshing(false);
      }
    }

    void init();
    return () => {
      mountedRef.current = false;
      ctrl.abort();
    };
  }, [getQueries]);

  const slideOne = useCallback(async () => {
    if (refreshingRef.current) return;
    refreshingRef.current = true;
    if (mountedRef.current) setIsRefreshing(true);

    try {
      const queries = getQueries();
      const query = queries[queryIndexRef.current % queries.length]!;
      queryIndexRef.current += 1;

      const items = await fetchYtQuery(query, 3);

      
      const newItem = items.find((it) => !seenIdsRef.current.has(it.external_id));
      if (!newItem) return;

      seenIdsRef.current.add(newItem.external_id);
      const newPost = ytItemToFeedPost(newItem);

      if (mountedRef.current) {
        setYtPosts((prev) => {
          const next = [newPost, ...prev];
          if (next.length > FEED_MAX) {
            
            const dropped = next[next.length - 1];
            next.splice(next.length - 1, 1);
            if (dropped) seenIdsRef.current.delete(dropped.id.slice(3)); 
          }
          return next;
        });
      }
    } catch {
      
    } finally {
      refreshingRef.current = false;
      if (mountedRef.current) setIsRefreshing(false);
    }
  }, [getQueries]);

  useEffect(() => {
    const intervalMs = getRefreshInterval() * 1_000;
    const timer = setInterval(() => { void slideOne(); }, intervalMs);
    return () => clearInterval(timer);
  }, [slideOne, getRefreshInterval]);

  return {
    ytPosts,
    isRefreshing,
    nextRefreshIn: getRefreshInterval(),
    refresh: () => { void slideOne(); },
  };
}
