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
  const target_type = searchParams.get('target_type');
  const target_id   = searchParams.get('target_id');

  if (!target_type || !target_id) {
    return NextResponse.json({ error: 'target_type and target_id are required' }, { status: 400 });
  }

  const { data } = await (supabase as AnyClient)
    .from('favorites')
    .select('id')
    .eq('user_id', user.id)
    .eq('target_type', target_type)
    .eq('target_id', target_id)
    .single();

  return NextResponse.json({ saved: !!data });
}


export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const { target_type, target_id } = body;

  if (!target_type || !target_id) {
    return NextResponse.json({ error: 'target_type and target_id are required' }, { status: 400 });
  }

  
  
  const { error } = await (supabase as AnyClient)
    .from('favorites')
    .insert({ user_id: user.id, target_type: String(target_type), target_id: String(target_id) });

  
  if (error && error.code !== '23505') {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ saved: true }, { status: 201 });
}


export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const target_type = searchParams.get('target_type');
  const target_id   = searchParams.get('target_id');

  if (!target_type || !target_id) {
    return NextResponse.json({ error: 'target_type and target_id are required' }, { status: 400 });
  }

  const { error } = await (supabase as AnyClient)
    .from('favorites')
    .delete()
    .eq('user_id', user.id)
    .eq('target_type', target_type)
    .eq('target_id', target_id);

  if (error) return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  return NextResponse.json({ saved: false });
}
