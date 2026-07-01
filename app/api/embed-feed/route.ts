import type { EmbedFeedItem } from '@/dreamr/feeds/embedFeedLoader';
import { loadEmbedFeed } from '@/dreamr/feeds/embedFeedLoader';
import { createServerClient } from '@/supabase/server/serverClient';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';



export interface EmbedFeedResponse {
  ok: boolean;
  items: EmbedFeedItem[];
  generated_at: string;
  source: 'supabase' | 'json_fallback';
  error?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<EmbedFeedResponse>> {
  const { searchParams } = req.nextUrl;
  const provider = searchParams.get('provider') ?? '';
  const rawLimit = parseInt(searchParams.get('limit') ?? '20', 10);
  const limit = Math.min(Math.max(1, isNaN(rawLimit) ? 20 : rawLimit), 50);

  try {
    const db = await createServerClient();

    const query = (db as SupabaseClient)
      .from('embed_feed_items')
      .select('provider,external_id,title,permalink,published_at,view_count,tags,embed_html,thumbnail_url,channel_title,generated_at')
      .order('published_at', { ascending: false })
      .limit(limit);

    if (provider) {
      query.eq('provider', provider);
    }

    const { data, error } = await query;
    if (!error && Array.isArray(data) && data.length > 0) {
      const items = data.map((row) => ({
        id:            String(row.external_id ?? ''),
        provider:      String(row.provider ?? ''),
        title:         String(row.title ?? ''),
        permalink:     String(row.permalink ?? ''),
        published_at:  String(row.published_at ?? ''),
        view_count:    Number(row.view_count ?? 0),
        tags:          Array.isArray(row.tags) ? (row.tags as string[]) : [],
        embed_html:    String(row.embed_html ?? ''),
        thumbnail_url: String(row.thumbnail_url ?? ''),
        channel_title: String(row.channel_title ?? ''),
      })) as EmbedFeedItem[];

      const generatedAt = data[0]
        ? String((data[0] as Record<string, unknown>).generated_at ?? '')
        : new Date().toISOString();

      return NextResponse.json({
        ok: true,
        items,
        generated_at: generatedAt,
        source: 'supabase',
      });
    }
  } catch {
    
  }

  const feed = loadEmbedFeed();
  const items = provider
    ? feed.items.filter((i: EmbedFeedItem) => i.provider === provider).slice(0, limit)
    : feed.items.slice(0, limit);

  return NextResponse.json({
    ok: true,
    items,
    generated_at: feed.generated_at,
    source: 'json_fallback',
  });
}
