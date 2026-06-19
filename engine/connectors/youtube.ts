import { createServiceClient } from '@/supabase/server/serverClient';
import type { SupabaseClient } from '@supabase/supabase-js';
import 'server-only';

const YOUTUBE_FETCH_TIMEOUT_MS = 12_000;
const YOUTUBE_CHANNEL_CONCURRENCY = 4;

type ConnectorFeedItemRow = {
  user_id: string;
  provider: 'youtube';
  external_id: string;
  payload: {
    provider: 'youtube';
    external_id: string;
    author_handle: string;
    author_name: string;
    content_text: string;
    permalink: string;
    published_at: string;
    media: Array<{ url: string; type: 'image' }>;
    raw: Record<string, unknown>;
  };
  published_at: string;
  created_at: string;
};

async function fetchJsonWithTimeout(url: string, accessToken: string): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), YOUTUBE_FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`YouTube API error: ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency<T, R>(items: readonly T[], limit: number, mapper: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;

  async function worker(): Promise<void> {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await mapper(items[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

export async function pollYouTube(userId: string, accessToken: string): Promise<void> {
  try {
    const data = await fetchJsonWithTimeout(
      'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50',
      accessToken,
    ) as { items?: Array<{ snippet?: { channelId?: string } }> };

    const channelIds = Array.from(new Set(
      (data.items ?? [])
        .map((sub) => sub.snippet?.channelId)
        .filter((channelId): channelId is string => typeof channelId === 'string' && channelId.length > 0),
    ));

    if (channelIds.length === 0) return;

    const batches = await mapWithConcurrency(
      channelIds,
      YOUTUBE_CHANNEL_CONCURRENCY,
      (channelId) => fetchChannelVideos(userId, accessToken, channelId),
    );
    const feedItems = batches.flat();
    if (feedItems.length === 0) return;

    const supabase = (await createServiceClient()) as SupabaseClient;
    await supabase
      .from('connector_feed_items')
      .upsert(feedItems, { onConflict: 'user_id,provider,external_id', ignoreDuplicates: true });
  } catch (error: unknown) {
    console.error('YouTube polling error:', error);
  }
}

async function fetchChannelVideos(userId: string, accessToken: string, channelId: string): Promise<ConnectorFeedItemRow[]> {
  try {
    const data = await fetchJsonWithTimeout(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&order=date&maxResults=10&type=video`,
      accessToken,
    ) as { items?: Array<{ id?: { videoId?: string }; snippet?: { publishedAt?: string; title?: string; description?: string; thumbnails?: { medium?: { url?: string } }; channelTitle?: string } }> };

    const feedItems: ConnectorFeedItemRow[] = [];
    for (const item of data.items ?? []) {
      const videoId = item.id?.videoId;
      if (!videoId) continue;

      const snippet = item.snippet ?? {};
      const publishedAt = new Date(snippet.publishedAt ?? Date.now()).toISOString();
      const thumbnail = snippet.thumbnails?.medium?.url;
      feedItems.push({
        user_id: userId,
        provider: 'youtube',
        external_id: videoId,
        payload: {
          provider: 'youtube',
          external_id: videoId,
          author_handle: channelId,
          author_name: snippet.channelTitle ?? channelId,
          content_text: snippet.title ?? '',
          permalink: `https://youtube.com/watch?v=${videoId}`,
          published_at: publishedAt,
          media: thumbnail ? [{ url: thumbnail, type: 'image' }] : [],
          raw: {
            channelId,
            description: snippet.description ?? '',
            thumbnail,
          },
        },
        published_at: publishedAt,
        created_at: new Date().toISOString(),
      });
    }

    return feedItems;
  } catch (error: unknown) {
    console.error('Fetch channel videos error:', error);
    return [];
  }
}
