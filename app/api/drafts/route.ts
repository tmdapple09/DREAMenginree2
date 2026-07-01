import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { toErrorMessage } from '@/utils/index';





const CONTENT_TYPES = [
  'post', 'video', 'story', 'thread',
  'caption', 'tweet_thread', 'bio', 'script',
] as const;

const CreateDraftSchema = z.object({
  content: z.string().min(1, 'Content is required').max(10_000),
  content_type: z.enum(CONTENT_TYPES).default('post'),
  title: z.string().max(200).optional(),
  scheduled_at: z.string().datetime({ offset: true }).nullable().optional(),
});

export async function GET(_req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabase as SupabaseClient;

  const { data: drafts, error } = await db
    .from('content_drafts')
    .select('id, content, content_type, title, scheduled_at, created_at, updated_at')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ drafts: drafts ?? [] });
}

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
    return NextResponse.json({ error: 'Body must be valid JSON' }, { status: 400 });
  }

  const parseResult = CreateDraftSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Validation error', details: parseResult.error.flatten() },
      { status: 400 },
    );
  }

  const { content, content_type, title, scheduled_at } = parseResult.data;

  const db = supabase as SupabaseClient;

  const now = new Date().toISOString();
  const { data: draft, error } = await db
    .from('content_drafts')
    .insert({
      user_id: user.id,            
      content,
      content_type,
      title: title ?? null,
      scheduled_at: scheduled_at ?? null,
      created_at: now,
      updated_at: now,
    })
    .select('id, content, content_type, title, scheduled_at, created_at, updated_at')
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ draft }, { status: 201 });
}
