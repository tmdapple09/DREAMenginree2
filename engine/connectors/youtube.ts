import type { SupabaseClient } from '@supabase/supabase-js';
import 'server-only';
import { createServiceClient } from '@/supabase/server/serverClient';

const YOUTUBE_FETCH_TIMEOUT_MS = 12_000;
const YOUTUBE_CHANNEL_CONCURRENCY = 4;

type FeedItemRow = {
  user_id: string;
  source: 'youtube';
  source_account_id: string;
  external_id: string;
  ts: string;
  title: string;
  summary: string;
  url: string;
  media_json: { thumbnail?: string; channelTitle?: string };
  tags_json: string[];
  dedupe_hash: string;
  visibility: 'private';
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
      .from('feed_items')
      .upsert(feedItems, { onConflict: 'dedupe_hash', ignoreDuplicates: true });
  } catch (error: unknown) {
    console.error('YouTube polling error:', error);
  }
}

async function fetchChannelVideos(userId: string, accessToken: string, channelId: string): Promise<FeedItemRow[]> {
  try {
    const data = await fetchJsonWithTimeout(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&order=date&maxResults=10&type=video`,
      accessToken,
    ) as { items?: Array<{ id?: { videoId?: string }; snippet?: { publishedAt?: string; title?: string; description?: string; thumbnails?: { medium?: { url?: string } }; channelTitle?: string } }> };

    const feedItems: FeedItemRow[] = [];
    for (const item of data.items ?? []) {
      const videoId = item.id?.videoId;
      if (!videoId) continue;
      const snippet = item.snippet ?? {};
      feedItems.push({
        user_id: userId,
        source: 'youtube',
        source_account_id: channelId,
        external_id: videoId,
        ts: new Date(snippet.publishedAt ?? Date.now()).toISOString(),
        title: snippet.title ?? '',
        summary: snippet.description ?? '',
        url: `https://youtube.com/watch?v=${videoId}`,
        media_json: {
          thumbnail: snippet.thumbnails?.medium?.url,
          channelTitle: snippet.channelTitle,
        },
        tags_json: [],
        dedupe_hash: `${userId}-youtube-${videoId}`,
        visibility: 'private',
      });
    }

    return feedItems;
  } catch (error: unknown) {
    console.error('Fetch channel videos error:', error);
    return [];
  }
}
