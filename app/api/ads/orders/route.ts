import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



const PLATFORM_SHARE_PERCENT = 0.10; 

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Request body must be a JSON object.' }, { status: 400 });
  }

  const { listingId, grossAmount } = body as Record<string, unknown>;

  if (!listingId || typeof listingId !== 'string') {
    return NextResponse.json({ error: 'listingId is required.' }, { status: 400 });
  }

  const gross = typeof grossAmount === 'number' ? grossAmount : parseFloat(String(grossAmount ?? 0));
  if (isNaN(gross) || gross < 0) {
    return NextResponse.json({ error: 'grossAmount must be a non-negative number.' }, { status: 400 });
  }

  const platformPayout = parseFloat((gross * PLATFORM_SHARE_PERCENT).toFixed(2));
  const creatorPayout  = parseFloat((gross - platformPayout).toFixed(2));

  const db = supabase as SupabaseClient;
  const { data, error } = await db
    .from('ad_orders')
    .insert([{
      ad_listing_id:  listingId,
      buyer_id:       user.id,
      gross_revenue:  gross,
      platform_share: PLATFORM_SHARE_PERCENT,
      creator_share:  1 - PLATFORM_SHARE_PERCENT,
      platform_payout: platformPayout,
      creator_payout:  creatorPayout,
      status:         'pending',
    }])
    .select()
    .single();

  if (error) {
    console.error('Ad order creation failed:', toErrorMessage(error));
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
