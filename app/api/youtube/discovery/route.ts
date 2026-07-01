import { getYouTubeApiKey, youtubeDiscovery } from '@/engine/connectors/providers/youtube';
import type { UnifiedFeedItem } from '@/types/connector';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export interface YouTubeDiscoveryResponse {
  ok: boolean;
  items: UnifiedFeedItem[];
  fetched: number;
  error?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<YouTubeDiscoveryResponse>> {
  const apiKey = getYouTubeApiKey();
  if (!apiKey) {
    
    
    return NextResponse.json(
      { ok: false, items: [], fetched: 0, error: 'YOUTUBEAPI is not configured.' },
      { status: 200 },
    );
  }

  const { searchParams } = req.nextUrl;
  const maxParam = parseInt(searchParams.get('max') ?? '30', 10);
  const max = Math.min(Math.max(1, isNaN(maxParam) ? 30 : maxParam), 50);

  try {
    const items = await youtubeDiscovery(apiKey, max);
    return NextResponse.json({ ok: true, items, fetched: items.length });
  } catch (err: unknown) {
    const message = err instanceof Error ? toErrorMessage(err) : String(err);
    return NextResponse.json(
      { ok: false, items: [], fetched: 0, error: message },
      { status: 502 },
    );
  }
}
