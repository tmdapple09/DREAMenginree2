import { calculateActivityRevenueSplit } from '@/lib/activity/revenueSplit';
import type { AdView, TrackAdViewRequest, TrackAdViewResponse } from '@/lib/activity/types';
import { CPV_PRICING, CPVTier } from '@/lib/activity/types';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = (await req.json()) as TrackAdViewRequest;
    const { ad_id, ad_type, view_duration, watched_pct, post_id } = body;

    if (watched_pct < 0 || watched_pct > 100) {
      return NextResponse.json({ error: 'Invalid watched_pct' }, { status: 400 });
    }

    const verified = watched_pct >= 50;
    const cpvTier: CPVTier = verified && watched_pct === 100 && view_duration >= 30
      ? CPVTier.SUPER_PREMIUM
      : CPVTier.STANDARD;
    const cpvAmount = CPV_PRICING[cpvTier];
    const split = calculateActivityRevenueSplit(cpvAmount);

    if (post_id) {
      const { data: post } = await supabase
        .from('app_posts')
        .select('view_count')
        .eq('id', post_id)
        .maybeSingle();

      const currentViews = Number(post?.view_count ?? 0);
      await supabase
        .from('app_posts')
        .update({ view_count: currentViews + 1, updated_at: new Date().toISOString() })
        .eq('id', post_id);
    }

    const adView: AdView = {
      id: `inline:${ad_id}:${Date.now()}`,
      ad_id,
      ad_type,
      viewer_id: user.id,
      post_id: post_id ?? undefined,
      view_duration,
      watched_pct,
      cpv_tier: cpvTier,
      cpv_amount: cpvAmount,
      verified,
      verified_at: verified ? new Date().toISOString() : undefined,
      billed: false,
      billed_at: undefined,
      is_bot: false,
      is_duplicate: false,
      created_at: new Date().toISOString(),
    };

    const response: TrackAdViewResponse = {
      ad_view: adView,
      verified,
      credits_earned: 0,
      revenue_split: {
        platformShare: split.platformShare,
        creatorShare: split.creatorShare,
        rewardPoolShare: split.rewardPoolShare,
      },
    };

    return NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err: unknown) {
    console.error('[TrackAdView] Exception:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
