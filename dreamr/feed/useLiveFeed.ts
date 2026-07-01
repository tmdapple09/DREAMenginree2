'use client';

import type { RealtimePostgresInsertPayload } from '@/engine/io';
import { getPrimaryPostMediaUrl } from '@/engins/contentengin/media/postMedia';
import { createClient } from '@/supabase/client/client';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { useCallback, useEffect, useRef, useState } from 'react';





export interface FeedPost {
  id: string;
  content: string;
  visibility: string;
  media_url?: string | null;
  created_at: string;
  profiles: {
    handle: string;
    display_name: string | null;
    avatar_url: string | null;
  };
  
  views_count?: number;
  
  likes_count?: number;
  
  comments_count?: number;
  
  source?: 'post' | 'connector' | 'share';
  
  provider?: string;
  
  permalink?: string;

  
  
  
  
  dreamr_score?: number;
  
  dreamr_signals?: {
    contentDepth:   number;
    originalMedia:  number;
    dreamenginMade: number;
    textRichness:   number;
    freshness:      number;
    trendImpact:    number;
  };
  
  dominant_signal?: string;
  
  dreamr_reason?: string;
  
  view_velocity?: number;
}

export interface UseLiveFeedReturn {
  
  posts: FeedPost[];
  
  newCount: number;
  
  flushNew: () => void;
  
  isLive: boolean;
  
  replacePosts: (next: FeedPost[]) => void;
  
  prependPost: (post: FeedPost) => void;
  
  updatePost: (id: string, changes: Partial<FeedPost>) => void;
}

export function useLiveFeed(userId: string, initialPosts: FeedPost[]): UseLiveFeedReturn {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  
  const [queued, setQueued] = useState<FeedPost[]>([]);
  const [isLive, setIsLive] = useState(false);

  
  const postsChannelRef = useRef<ReturnType<ReturnType<typeof createClient>['channel']> | null>(null);
  const itemsChannelRef = useRef<ReturnType<ReturnType<typeof createClient>['channel']> | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    void getOfflineRecord<FeedPost[]>('dream-feed', `home:${userId}`).then((record) => {
      if (cancelled || !record?.value?.length) return;
      setPosts((current) => current.length > 0 ? current : record.value);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    void putOfflineRecord({ namespace: 'dream-feed', id: `home:${userId}`, value: posts.slice(0, 80) });
  }, [posts, userId]);


  const flushNew = useCallback(() => {
    setQueued((prev) => {
      if (prev.length === 0) return prev;
      setPosts((cur) => {
        
        const ids = new Set(cur.map((p) => p.id));
        const fresh = prev.filter((p) => !ids.has(p.id));
        return [...fresh, ...cur];
      });
      return [];
    });
  }, []);

  const replacePosts = useCallback((next: FeedPost[]) => {
    setPosts(next);
    setQueued([]);
  }, []);

  const prependPost = useCallback((post: FeedPost) => {
    setPosts((prev) => {
      if (prev.some((p) => p.id === post.id)) return prev;
      return [post, ...prev];
    });
  }, []);

  const updatePost = useCallback((id: string, changes: Partial<FeedPost>) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...changes } : p)));
  }, []);

  useEffect(() => {
    if (!userId) return;

    const supabase = createClient();

    const postsChannel = supabase
      .channel(`homedream-posts:${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'app_posts',
          
          filter: 'visibility=eq.public',
        },
        async (payload: RealtimePostgresInsertPayload<Record<string, unknown>>) => {
          const raw = payload.new as any;
          const postId  = raw.id       as string;
          const authorId = (raw.user_id ?? raw.author_id) as string;

          
          
            const { data } = await supabase
              .from('app_posts')
              .select('id, user_id, content, visibility, post_visibility, media_url, media_urls, media_json, created_at, likes_count, comments_count, profiles!app_posts_user_id_fkey(handle, display_name, avatar_url)')
              .eq('id', postId)
              .single();

          if (!data) return;

          const d = data as any;
          if (d.post_visibility === 'close_friends' && authorId !== userId) return;

          const newPost: FeedPost = {
            id:             d.id,
            content:        d.content        ?? '',
            visibility:     d.visibility     ?? 'public',
            media_url:      getPrimaryPostMediaUrl(d),
            created_at:     d.created_at,
            likes_count:    d.likes_count    ?? 0,
            comments_count: d.comments_count ?? 0,
            profiles: {
              handle:       d.profiles.handle,
              display_name: d.profiles.display_name ?? null,
              avatar_url:   d.profiles.avatar_url   ?? null,
            },
            source: 'post',
          };

          if (authorId === userId) {
            
            setPosts((prev) => {
              if (prev.some((p) => p.id === postId)) return prev;
              return [newPost, ...prev];
            });
          } else {
            
            setQueued((prev) => {
              if (prev.some((p) => p.id === postId)) return prev;
              return [newPost, ...prev];
            });
          }
        },
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'app_posts',
        },
        (payload: RealtimePostgresInsertPayload<Record<string, unknown>>) => {
          const raw = payload.new as any;
          
          setPosts((prev) =>
            prev.map((p) =>
              p.id === raw.id
                ? {
                    ...p,
                    likes_count:    (raw.likes_count    as number | undefined) ?? p.likes_count,
                    comments_count: (raw.comments_count as number | undefined) ?? p.comments_count,
                  }
                : p,
            ),
          );
        },
      )
      .subscribe((status: string) => {
        setIsLive(status === 'SUBSCRIBED');
      });

    postsChannelRef.current = postsChannel;

    const itemsChannel = supabase
      .channel(`homedream-items:${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'connector_feed_items',
          filter: `user_id=eq.${userId}`,
        },
        (payload: RealtimePostgresInsertPayload<Record<string, unknown>>) => {
          const raw = payload.new as any;

          const p = (raw.payload ?? {}) as any;
          const firstMedia = Array.isArray(p.media) && p.media.length > 0 ? p.media[0] : null;

          const newEntry: FeedPost = {
            id:             raw.id         as string,
            content:        (p.content_text ?? p.text ?? p.title ?? '') as string,
            visibility:     'private',
            media_url:      (p.media_url ?? firstMedia?.url ?? null) as string | null,
            created_at:     (raw.published_at ?? raw.created_at ?? new Date().toISOString()) as string,
            likes_count:    0,
            comments_count: 0,
            profiles: {
              handle:       (p.author_handle ?? 'feed') as string,
              display_name: (p.author_name   ?? 'Feed') as string | null,
              avatar_url:   (p.author_avatar ?? null)                   as string | null,
            },
            source:   'connector',
            provider: (raw.provider ?? 'connector') as string,
          };

          
          setQueued((prev) => {
            if (prev.some((q) => q.id === newEntry.id)) return prev;
            return [newEntry, ...prev];
          });
        },
      )
      .subscribe();

    itemsChannelRef.current = itemsChannel;

    return () => {
      supabase.removeChannel(postsChannel);
      supabase.removeChannel(itemsChannel);
      postsChannelRef.current = null;
      itemsChannelRef.current = null;
      setIsLive(false);
    };
  }, [userId]);

  return {
    posts,
    newCount: queued.length,
    flushNew,
    isLive,
    replacePosts,
    prependPost,
    updatePost,
  };
}
