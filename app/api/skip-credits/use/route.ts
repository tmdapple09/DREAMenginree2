import type {
    UseSkipCreditsRequest,
    UseSkipCreditsResponse,
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
    const body = (await req.json()) as UseSkipCreditsRequest;
    const { ad_id } = body;

    
    const { data: credits } = await (supabase as SupabaseClient)
      .from('skip_credits')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (!credits || credits.credits_balance < 1) {
      return NextResponse.json(
        { error: 'Insufficient credits' },
        { status: 400 },
      );
    }

    
    const { data: updatedCredits, error: updateError } = await (supabase as SupabaseClient)
      .from('skip_credits')
      .update({
        credits_balance: credits.credits_balance - 1,
        spent_total: credits.spent_total + 1,
        last_spent_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id)
      .select()
      .single();

    if (updateError) {
      console.error('[UseSkipCredits] Update error:', updateError);
      return NextResponse.json(
        { error: 'Failed to spend credits' },
        { status: 500 },
      );
    }

    const response: UseSkipCreditsResponse = {
      skip_credit: updatedCredits,
      credits_spent: 1,
      new_balance: updatedCredits.credits_balance,
    };

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (err: unknown) {
    console.error('[UseSkipCredits] Exception:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
