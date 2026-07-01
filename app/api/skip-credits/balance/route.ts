import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';







export async function GET(): Promise<NextResponse> {
  const supabase = await createServerClient();

  
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    
    const { data: credits } = await (supabase as SupabaseClient)
      .from('skip_credits')
      .select('*')
      .eq('user_id', user.id)
      .single();

    
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
