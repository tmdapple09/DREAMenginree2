import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { Json } from '@/types/supabase';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';

















export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const kind  = searchParams.get('kind');
  const check = searchParams.get('check') === '1';
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '100', 10), 200);

  
  if (check && kind) {
    let countQuery = supabase
      .from('journey_dots')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('kind', kind);

    
    
    const surface = searchParams.get('surface');
    if (surface) countQuery = countQuery.eq('surface', surface);

    const { count } = await countQuery;
    return NextResponse.json({ exists: (count ?? 0) > 0 });
  }

  
  let query = supabase
    .from('journey_dots')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (kind) query = query.eq('kind', kind);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });

  return NextResponse.json({ dots: data ?? [] });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await req.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  
  if (!body.kind || typeof body.kind !== 'string') {
    return NextResponse.json({ error: 'kind is required and must be a string' }, { status: 400 });
  }
  if (!body.label || typeof body.label !== 'string') {
    return NextResponse.json({ error: 'label is required and must be a string' }, { status: 400 });
  }

  
  const sig = body.significance !== undefined ? Number(body.significance) : 0.5;
  if (isNaN(sig) || sig < 0 || sig > 1) {
    return NextResponse.json({ error: 'significance must be a number between 0 and 1' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('journey_dots')
    .insert({
      user_id:      user.id,
      kind:         body.kind,
      surface:      typeof body.surface === 'string' ? body.surface : '',
      label:        body.label,
      significance: sig,
      domain_color: typeof body.domain_color === 'string' ? body.domain_color : '#c8981a',
      metadata:     (typeof body.metadata === 'object' && body.metadata !== null ? body.metadata : {}) as Json,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });

  return NextResponse.json({ dot: data }, { status: 201 });
}
