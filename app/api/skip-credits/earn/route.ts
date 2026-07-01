import type {
    EarnSkipCreditsRequest,
    EarnSkipCreditsResponse,
} from '@/dreamr/activity/types';
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
    const body = (await req.json()) as EarnSkipCreditsRequest;
    const { ad_view_id } = body;

    
    const { data: adView } = await (supabase as SupabaseClient)
      .from('ad_views')
      .select('*')
      .eq('id', ad_view_id)
      .eq('viewer_id', user.id)
      .eq('verified', true)
      .single();

    if (!adView) {
      return NextResponse.json(
        { error: 'Ad view not found or not verified' },
        { status: 404 },
      );
    }

    
    if (adView.watched_pct < 95) {
      return NextResponse.json(
        { error: 'Ad not watched sufficiently' },
        { status: 400 },
      );
    }

    
    const creditsEarned = adView.ad_type === 'rewarded' ? 3 : 1;

    
    const { data: existingCredits } = await (supabase as SupabaseClient)
      .from('skip_credits')
      .select('*')
      .eq('user_id', user.id)
      .single();

    let skipCredit;
    if (existingCredits) {
      
      const { data, error } = await (supabase as SupabaseClient)
        .from('skip_credits')
        .update({
          credits_balance: existingCredits.credits_balance + creditsEarned,
          earned_total: existingCredits.earned_total + creditsEarned,
          last_earned_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        console.error('[EarnSkipCredits] Update error:', error);
        return NextResponse.json(
          { error: 'Failed to update credits' },
          { status: 500 },
        );
      }
      skipCredit = data;
    } else {
      
      const { data, error } = await (supabase as SupabaseClient)
        .from('skip_credits')
        .insert({
          user_id: user.id,
          credits_balance: creditsEarned,
          earned_total: creditsEarned,
          last_earned_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('[EarnSkipCredits] Insert error:', error);
        return NextResponse.json(
          { error: 'Failed to create credits' },
          { status: 500 },
        );
      }
      skipCredit = data;
    }

    const response: EarnSkipCreditsResponse = {
      skip_credit: skipCredit,
      credits_earned: creditsEarned,
      new_balance: skipCredit.credits_balance,
    };

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (err: unknown) {
    console.error('[EarnSkipCredits] Exception:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
