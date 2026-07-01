import type { TrackViewRequest, TrackViewResponse, View } from '@/dreamr/activity/types';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';







export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  try {
    const body = (await req.json()) as TrackViewRequest;
    const { post_id, view_duration, scrolled_pct } = body;

    if (!post_id) {
      return NextResponse.json({ error: 'post_id is required' }, { status: 400 });
    }

    const db = supabase as SupabaseClient;
    const { data: post } = await db
      .from('app_posts')
      .select('id, user_id, view_count')
      .eq('id', post_id)
      .single();

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const userAgent = req.headers.get('user-agent') ?? '';
    const viewerIp = req.headers.get('x-forwarded-for')?.split(',')[0] ?? req.headers.get('x-real-ip') ?? undefined;
    const isBotPattern = /bot|crawler|spider|scraper|headless/i.test(userAgent);

    if (isBotPattern) {
      return NextResponse.json(
        { error: 'View not verified: bot pattern detected' },
        { status: 400 },
      );
    }

    const verified = view_duration === undefined || view_duration >= 3;
    const counted = verified && user?.id !== post.user_id;
    const nextViewCount = counted ? (post.view_count ?? 0) + 1 : (post.view_count ?? 0);

    if (counted) {
      const { error: updateError } = await db
        .from('app_posts')
        .update({ view_count: nextViewCount })
        .eq('id', post_id);

      if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 });
      }
    }

    const now = new Date().toISOString();
    const view: View = {
      id: `${post_id}:${user?.id ?? viewerIp ?? 'anonymous'}:${Date.now()}`,
      post_id,
      viewer_id: user?.id,
      viewer_ip: viewerIp,
      viewer_agent: userAgent,
      view_duration,
      scrolled_pct,
      verified,
      verified_at: verified ? now : undefined,
      is_bot: false,
      is_duplicate: false,
      created_at: now,
    };

    const response: TrackViewResponse & { counted: boolean; view_count: number } = {
      view,
      verified,
      counted,
      view_count: nextViewCount,
    };

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (err: unknown) {
    console.error('[TrackView] Exception:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
