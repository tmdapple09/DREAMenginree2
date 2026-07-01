import { getYouTubeApiKey, youtubeSearchByQuery } from '@/engine/connectors/providers/youtube';
import type { UnifiedFeedItem } from '@/types/connector';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export interface YouTubeChannelResponse {
  ok: boolean;
  channelVideos: UnifiedFeedItem[];
  similarVideos: UnifiedFeedItem[];
  channel: string;
  topic: string;
  error?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<YouTubeChannelResponse>> {
  const apiKey = getYouTubeApiKey();
  if (!apiKey) {
    
    
    return NextResponse.json(
      { ok: false, channelVideos: [], similarVideos: [], channel: '', topic: '', error: 'YOUTUBEAPI is not configured.' },
      { status: 200 },
    );
  }

  const { searchParams } = req.nextUrl;
  const channel = searchParams.get('channel')?.trim() ?? '';
  const topic   = searchParams.get('topic')?.trim()   ?? '';
  const maxParam = parseInt(searchParams.get('max') ?? '8', 10);
  const max = Math.min(Math.max(1, isNaN(maxParam) ? 8 : maxParam), 15);

  if (!channel && !topic) {
    return NextResponse.json(
      { ok: false, channelVideos: [], similarVideos: [], channel, topic, error: 'channel or topic is required.' },
      { status: 400 },
    );
  }

  try {
    
    const [channelVideos, similarVideos] = await Promise.all([
      channel ? youtubeSearchByQuery(apiKey, channel, max) : Promise.resolve<UnifiedFeedItem[]>([]),
      topic   ? youtubeSearchByQuery(apiKey, topic,   max) : Promise.resolve<UnifiedFeedItem[]>([]),
    ]);

    
    const channelIds = new Set(channelVideos.map((v) => v.external_id));
    const uniqueSimilar = similarVideos.filter((v) => !channelIds.has(v.external_id));

    return NextResponse.json(
      { ok: true, channelVideos, similarVideos: uniqueSimilar, channel, topic },
      { headers: { 'Cache-Control': 's-maxage=120, stale-while-revalidate=60' } },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? toErrorMessage(err) : String(err);
    return NextResponse.json(
      { ok: false, channelVideos: [], similarVideos: [], channel, topic, error: message },
      { status: 502 },
    );
  }
}
