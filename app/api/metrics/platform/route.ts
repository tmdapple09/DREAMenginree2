import type { GetPlatformMetricsResponse } from '@/lib/activity/types';
import { createServerClient, createServiceClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';

type ActivityPointRow = {
  user_id: string | null;
  tier: number | null;
  points: number | string | null;
};

type AppPostMetricRow = {
  id: string;
  user_id: string | null;
  view_count: number | string | null;
};

function toFiniteNumber(value: number | string | null | undefined): number {
  const parsed = typeof value === 'string' ? Number(value) : value;
  return typeof parsed === 'number' && Number.isFinite(parsed) ? parsed : 0;
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export async function GET(_req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data: isAdmin, error: adminErr } = await supabase.rpc('is_admin');
    if (adminErr || !isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const serviceSupabase = await createServiceClient();
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const { data: activityRows, error: activityErr } = await serviceSupabase
      .from('activity_points')
      .select('user_id, tier, points')
      .gte('created_at', thirtyDaysAgo)
      .returns<ActivityPointRow[]>();

    if (activityErr) throw new Error(`Failed to load activity points: ${activityErr.message}`);

    const { data: postRows, error: postsErr } = await serviceSupabase
      .from('app_posts')
      .select('id, user_id, view_count')
      .gte('created_at', thirtyDaysAgo)
      .returns<AppPostMetricRow[]>();

    if (postsErr) throw new Error(`Failed to load post metrics: ${postsErr.message}`);

    const activities = activityRows ?? [];
    const posts = postRows ?? [];
    const totalActivityRows = activities.length;
    const creatorRows = activities.filter((row) => (row.tier ?? 0) >= 3).length;
    const outsideRows = activities.filter((row) => row.tier === 4).length;
    const pointValues = activities.map((row) => toFiniteNumber(row.points));
    const totalViews = posts.reduce((sum, row) => sum + toFiniteNumber(row.view_count), 0);

    const activeUserIds = new Set(
      [...activities.map((row) => row.user_id), ...posts.map((row) => row.user_id)]
        .filter((userId): userId is string => typeof userId === 'string' && userId.length > 0),
    );

    const response: GetPlatformMetricsResponse = {
      real_shit_rate: totalActivityRows > 0 ? (outsideRows / totalActivityRows) * 100 : 0,
      creation_to_consumption_ratio: totalActivityRows > 0 ? creatorRows / totalActivityRows : 0,
      outside_activity_rate: totalActivityRows > 0 ? outsideRows / totalActivityRows : 0,
      ad_view_rate: 0,
      harmful_content_rate: 0,
      average_aqs: average(pointValues),
      total_active_users: activeUserIds.size,
      total_verified_views: totalViews,
      calculated_at: new Date().toISOString(),
    };

    return NextResponse.json(response, { headers: { 'Cache-Control': 'public, max-age=300' } });
  } catch (err: unknown) {
    console.error('[GetPlatformMetrics] Exception:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
