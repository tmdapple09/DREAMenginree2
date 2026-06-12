import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// app/api/skip-credits/balance/route.ts
// Phase 9 — Get Skip Credits Balance Endpoint
//
// Retrieves user's skip credit balance.
// Per ACTIVITY_FIRST_PROTOCOL.md §V (Skip Reward System)

export async function GET(): Promise<NextResponse> {
  const supabase = await createServerClient();

  // Auth required
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get credits
    const { data: credits } = await (supabase as SupabaseClient)
      .from('skip_credits')
      .select('*')
      .eq('user_id', user.id)
      .single();

    // Return zero balance if no record exists
    if (!credits) {
      return NextResponse.json({
        skip_credit: {
          user_id: user.id,
          credits_balance: 0,
          earned_total: 0,
          spent_total: 0,
          updated_at: new Date().toISOString(),
        },
      });
    }

    return NextResponse.json(
      { skip_credit: credits },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (err: unknown) {
    console.error('[GetSkipCreditsBalance] Exception:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
