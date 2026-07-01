import { getYouTubeApiKey, youtubeSearchByQuery } from '@/engine/connectors/providers/youtube';
import { parseRssFeed, youtubeChannelRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';




const FALLBACK_CHANNELS: Record<string, string[]> = {
  news: ['UC16niRr50-MSBwiO3YDb3RA', 'UCBi2mrWuNuyYy4gbM6fU18Q'],
  music: ['UC-9-kyTW8ZkZNDHQJ6FgpwQ', 'UCqECaJ8Gagnn7YCbPEzWH6g'],
  sports: ['UCJ5v_MCY6GNUBTO8-D3XoAg', 'UCiWLfSweyRNmLpgEHekhoAg'],
  tech: ['UCXuqSBlHAE6Xw-yeJA0Tunw', 'UCBJycsmduvYEL83R_U4JriQ'],
  gaming: ['UCOpNcN46UbXVtpKMrmU4Abg', 'UC-lHJZR3Gqxm24_Vd_AJ5Yw'],
  science: ['UCvJiYiBUbw4tmpRSZT2r1Hw', 'UCsXVk37bltHxD1rDPwtNM8Q'],
  space: ['UCLA_DiR1FfKNvjuUpBHmylQ', 'UCtI0Hodo5o5dUb67FeUjDeA'],
  business: ['UCrp_UI8XtuYfpiqluWLD7Lw', 'UCIALMKvObZNtJ6AmdCLP7Lg'],
  default: ['UC16niRr50-MSBwiO3YDb3RA', 'UC-9-kyTW8ZkZNDHQJ6FgpwQ', 'UCXuqSBlHAE6Xw-yeJA0Tunw'],
};

function fallbackChannelIds(query: string): string[] {
  const q = query.toLowerCase();
  if (q.includes('news') || q.includes('stock') || q.includes('market')) return FALLBACK_CHANNELS.news!;
  if (q.includes('music') || q.includes('hip hop')) return FALLBACK_CHANNELS.music!;
  if (q.includes('sport')) return FALLBACK_CHANNELS.sports!;
  if (q.includes('tech') || q.includes('ai')) return FALLBACK_CHANNELS.tech!;
  if (q.includes('gaming') || q.includes('game')) return FALLBACK_CHANNELS.gaming!;
  if (q.includes('science')) return FALLBACK_CHANNELS.science!;
  if (q.includes('space')) return FALLBACK_CHANNELS.space!;
  if (q.includes('business')) return FALLBACK_CHANNELS.business!;
  return FALLBACK_CHANNELS.default!;
}

async function fetchFallbackYouTubeFeed(query: string, max: number): Promise<UnifiedFeedItem[]> {
  const batches = await Promise.allSettled(
    fallbackChannelIds(query).map((channelId) =>
      parseRssFeed({ provider: 'youtube', feedUrl: youtubeChannelRssUrl(channelId) }, max),
    ),
  );
  const items = batches.flatMap((batch) => batch.status === 'fulfilled' ? batch.value : []);
  const seen = new Set<string>();
  return items
    .filter((item) => {
      if (seen.has(item.external_id)) return false;
      seen.add(item.external_id);
      return true;
    })
    .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))
    .slice(0, max);
}

export interface YouTubeLiveFeedResponse {
  ok: boolean;
  items: UnifiedFeedItem[];
  fetched: number;
  query: string;
  error?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<YouTubeLiveFeedResponse>> {
  const apiKey = getYouTubeApiKey();

  const { searchParams } = req.nextUrl;
  const query = searchParams.get('query')?.trim() || 'world news';
  const maxParam = parseInt(searchParams.get('max') ?? '5', 10);
  const max = Math.min(Math.max(1, isNaN(maxParam) ? 5 : maxParam), 20);

  try {
    const items = apiKey
      ? await youtubeSearchByQuery(apiKey, query, max)
      : await fetchFallbackYouTubeFeed(query, max);
    return NextResponse.json({ ok: true, items, fetched: items.length, query });
  } catch (err: unknown) {
    const message = err instanceof Error ? toErrorMessage(err) : String(err);
    return NextResponse.json(
      { ok: true, items: await fetchFallbackYouTubeFeed(query, max).catch(() => []), fetched: 0, query, error: message },
      { status: 200 },
    );
  }
}
