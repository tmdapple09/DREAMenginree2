import {
    buildContactRequestRecord,
    validateContactRequest,
} from '@/engine/marketplace/request';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';



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

  
  const validation = validateContactRequest(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.errors[0] }, { status: 400 });
  }

  const { item_id, message } = body as { item_id: string; message?: string };

  
  
  const { data: listing, error: listingError } = await supabase
    .from('marketplace_items')
    .select('id, seller_id, is_published')
    .eq('id', item_id)
    .single();

  if (listingError || !listing) {
    return NextResponse.json({ error: 'Listing not found.' }, { status: 404 });
  }

  
  if (listing.seller_id === user.id) {
    return NextResponse.json(
      { error: 'You cannot request your own listing.' },
      { status: 400 },
    );
  }

  
  const record = buildContactRequestRecord(user.id, listing.seller_id, {
    item_id,
    message,
  });

  const { data: contactRequest, error: insertError } = await supabase
    .from('marketplace_contact_requests')
    .insert(record)
    .select('id, item_id, seller_id, status, created_at')
    .single();

  if (insertError) {
    console.error('[marketplace/request POST]', insertError.message);
    return NextResponse.json({ error: 'Failed to send request.' }, { status: 500 });
  }

  return NextResponse.json({ request: contactRequest }, { status: 201 });
}
