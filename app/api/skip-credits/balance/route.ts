import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextResponse } from 'next/server';

function zeroSkipCredit(userId: string) {
  return {
    user_id: userId,
    credits_balance: 0,
    earned_total: 0,
    spent_total: 0,
    updated_at: new Date().toISOString(),
  };
}

export async function GET(): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  return NextResponse.json(
    { skip_credit: zeroSkipCredit(user.id), disabled: true, reason: 'skip_credits_table_not_in_current_schema' },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
