import { calculateActivityPoints, calculateDecayDate } from '@/dreamr/activity/scoring';
import type {
    ActivityVerification,
    TrackActivityRequest,
    TrackActivityResponse,
} from '@/dreamr/activity/types';
import { VERIFICATION_STRENGTH } from '@/dreamr/activity/types';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';







export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  
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

    
    if (tier < 0 || tier > 6) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    
    const points = calculateActivityPoints(tier);
    const decayTimestamp = calculateDecayDate();

    
    let verificationId: string | undefined;
    let verification: ActivityVerification | undefined = undefined;

    if (verification_method && evidence_url) {
      const verificationStrength = VERIFICATION_STRENGTH[verification_method] ?? 0;

      const verificationResult = await (supabase as SupabaseClient)
        .from('activity_verification')
        .insert({
          user_id: user.id,
          tier,
          verification_method,
          verification_strength: verificationStrength,
          evidence_url,
          evidence_metadata: evidence_metadata ?? {},
          verified: verification_method === 'on_platform', 
          verified_at: verification_method === 'on_platform' ? new Date().toISOString() : null,
          verified_by: verification_method === 'on_platform' ? 'auto' : null,
        })
        .select()
        .single();

      if (verificationResult.error) {
        console.error('[TrackActivity] Verification error:', verificationResult.error);
      } else {
        verificationId = verificationResult.data?.id;
        verification = verificationResult.data;
      }
    }

    
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
