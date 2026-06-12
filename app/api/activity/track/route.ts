import { calculateActivityPoints, calculateDecayDate } from '@/lib/activity/scoring';
import type {
    ActivityVerification,
    TrackActivityRequest,
    TrackActivityResponse,
} from '@/lib/activity/types';
import { VERIFICATION_STRENGTH } from '@/lib/activity/types';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// app/api/activity/track/route.ts
// Phase 9 — Track Activity Endpoint
//
// Records user activity with tier classification and optional verification.
// Awards activity points based on tier per ACTIVITY_FIRST_PROTOCOL.md §II

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  // Auth check
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await req.json()) as TrackActivityRequest;
    const {
      tier,
      activity_type,
      description,
      post_id,
      verification_method,
      evidence_url,
      evidence_metadata,
    } = body;

    // Validate tier
    if (tier < 0 || tier > 6) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    // Calculate points
    const points = calculateActivityPoints(tier);
    const decayTimestamp = calculateDecayDate();

    // Current schema has activity_points.verification_id but not the legacy
    // activity_verification table. Preserve verification evidence in the API
    // response and still record the activity point.
    let verificationId: string | undefined;
    let verification: ActivityVerification | undefined = undefined;

    if (verification_method && evidence_url) {
      const verificationStrength = VERIFICATION_STRENGTH[verification_method] ?? 0;
      verification = {
        id: `inline:${Date.now()}`,
        user_id: user.id,
        tier,
        verification_method,
        verification_strength: verificationStrength,
        evidence_url,
        evidence_metadata: evidence_metadata ?? {},
        verified: verification_method === 'on_platform',
        verified_at: verification_method === 'on_platform' ? new Date().toISOString() : undefined,
        verified_by: verification_method === 'on_platform' ? 'auto' : undefined,
        created_at: new Date().toISOString(),
      } as ActivityVerification;
      verificationId = undefined;
    }

    // Create activity point record
    const activityResult = await (supabase as SupabaseClient)
      .from('activity_points')
      .insert({
        user_id: user.id,
        tier,
        points,
        activity_type,
        description,
        verification_id: verificationId,
        post_id,
        decay_timestamp: decayTimestamp.toISOString(),
      })
      .select()
      .single();

    if (activityResult.error) {
      console.error('[TrackActivity] Activity error:', activityResult.error);
      return NextResponse.json(
        { error: 'Failed to track activity' },
        { status: 500 },
      );
    }

    // Return response
    const response: TrackActivityResponse = {
      activity_point: activityResult.data!,
      verification,
      points_earned: points,
    };

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (err: unknown) {
    console.error('[TrackActivity] Exception:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
