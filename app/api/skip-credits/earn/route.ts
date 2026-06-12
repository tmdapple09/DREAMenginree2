import type { EarnSkipCreditsRequest, EarnSkipCreditsResponse, SkipCredit } from '@/lib/activity/types';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';

function zeroSkipCredit(userId: string): SkipCredit {
  return {
    user_id: userId,
    credits_balance: 0,
    earned_total: 0,
    spent_total: 0,
    updated_at: new Date().toISOString(),
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await req.json().catch(() => ({} as EarnSkipCreditsRequest));

  const skipCredit = zeroSkipCredit(user.id);
  const response: EarnSkipCreditsResponse & { disabled: true; reason: string } = {
    skip_credit: skipCredit,
    credits_earned: 0,
    new_balance: 0,
    disabled: true,
    reason: 'ad_views_and_skip_credits_tables_not_in_current_schema',
  };

  return NextResponse.json(response, { headers: { 'Cache-Control': 'no-store' } });
}
