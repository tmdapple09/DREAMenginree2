import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';



const TallyBodySchema = z.object({
  contentId: z.string().min(1).max(256),
  sharerId:  z.string().min(1).max(256),
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'BAD_JSON' }, { status: 400 });
  }

  const parsed = TallyBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'VALIDATION_ERROR', details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const { contentId, sharerId } = parsed.data;

  let viewerId: string;
  try {
    const supabase = await createServerClient();
    const user = await safeGetUser(supabase);
    if (!user) {
      return NextResponse.json({ ok: false, error: 'NOT_AUTHENTICATED' }, { status: 401 });
    }
    viewerId = user.id;

    
    
    
    const db = supabase as SupabaseClient;
    const { error: upsertErr } = await db
      .from('dreamr_tally')
      .upsert(
        {
          content_id:  contentId,
          sharer_id:   sharerId,
          viewer_id:   viewerId,
          tallied_at:  new Date().toISOString(),
        },
        { onConflict: 'content_id,sharer_id,viewer_id' },
      );

    if (upsertErr) {
      
      
      console.warn('[dreamr/tally] upsert warning:', upsertErr.message);
    }
  } catch (err: unknown) {
    
    
    console.warn('[dreamr/tally] Supabase unavailable, skipping tally:', err);
    return NextResponse.json({ ok: true, tallied: false, note: 'db_unavailable' });
  }

  return NextResponse.json({ ok: true, tallied: true });
}
