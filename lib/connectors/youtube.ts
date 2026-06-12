import type { SupabaseClient } from '@supabase/supabase-js';
import 'server-only';
import { createServiceClient } from '@/lib/supabase/server';

export async function pollYouTube(userId: string, accessToken: string): Promise<void> {
  try {
    // Fetch user's subscriptions
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=50',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data = await response.json()

    // For each subscription, fetch recent videos
    for (const sub of data.items || []) {
      const channelId = sub.snippet.channelId
      await fetchChannelVideos(userId, accessToken, channelId)
    }

  } catch (error: unknown) {
    console.error('YouTube polling error:', error)
  }
}

async function fetchChannelVideos(userId: string, accessToken: string, channelId: string): Promise<void> {
  try {
    const supabase = (await createServiceClient()) as SupabaseClient
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=10&type=video`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`)
    }

    const data = await response.json()

    // Map to feed_items and insert
    for (const item of data.items || []) {
      const publishedAt = item.snippet.publishedAt ?? new Date().toISOString();
      const thumbnailUrl = item.snippet.thumbnails?.medium?.url ?? null;
      const feedItem = {
        feed_widget_id: `user:${userId}`,
        source_widget_id: `youtube:${item.id.videoId}`,
        title: item.snippet.title,
        preview: {
          provider: 'youtube',
          source: 'connector',
          user_id: userId,
          external_id: item.id.videoId,
          content_text: item.snippet.title,
          permalink: `https://youtube.com/watch?v=${item.id.videoId}`,
          published_at: publishedAt,
          media_url: thumbnailUrl,
          media: thumbnailUrl ? [{ url: thumbnailUrl, type: 'image' }] : [],
          raw: {
            thumbnail: thumbnailUrl,
            channelTitle: item.snippet.channelTitle,
          },
        },
        created_at: publishedAt,
      };

      await supabase
        .from('feed_items')
        .insert(feedItem)
    }

  } catch (error: unknown) {
    console.error('Fetch channel videos error:', error)
  }
}
