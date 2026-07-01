import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



type AnyClient = SupabaseClient;


export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const limit  = Math.min(parseInt(searchParams.get('limit')  ?? '50'), 100);
  const offset = parseInt(searchParams.get('offset') ?? '0');

  const { data, error } = await (supabase as AnyClient)
    .from('scheduled_posts')
    .select('id, title, content, scheduled_for, status, platforms, created_at, updated_at')
    .eq('user_id', user.id)
    .order('scheduled_for', { ascending: true })
    .range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ posts: data ?? [] });
}


export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const { title = '', content, scheduled_for, platforms = [] } = body;

  if (!content || String(content).trim().length === 0) {
    return NextResponse.json({ error: 'content is required' }, { status: 400 });
  }
  if (!scheduled_for) {
    return NextResponse.json({ error: 'scheduled_for is required' }, { status: 400 });
  }

  const { data, error } = await (supabase as AnyClient)
    .from('scheduled_posts')
    .insert({
      user_id:       user.id,
      title:         String(title).trim(),
      content:       String(content).trim(),
      scheduled_for: String(scheduled_for),
      platforms:     Array.isArray(platforms) ? platforms : [],
      status:        'scheduled',
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ post: data }, { status: 201 });
}


export async function PUT(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const { id, ...rest } = body;
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });

  
  const allowed: Record<string, unknown> = {};
  if (rest.title         !== undefined) allowed.title         = String(rest.title).trim();
  if (rest.content       !== undefined) allowed.content       = String(rest.content).trim();
  if (rest.scheduled_for !== undefined) allowed.scheduled_for = String(rest.scheduled_for);
  if (rest.platforms     !== undefined) allowed.platforms     = Array.isArray(rest.platforms) ? rest.platforms : [];
  if (rest.status        !== undefined) allowed.status        = rest.status;

  const { data, error } = await (supabase as AnyClient)
    .from('scheduled_posts')
    .update(allowed)
    .eq('id', String(id))
    .eq('user_id', user.id)      
    .select()
    .single();

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ post: data });
}


export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });

  const { error } = await (supabase as AnyClient)
    .from('scheduled_posts')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);   

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ success: true });
}
