import { CARTRIDGE_MANIFEST } from '@/engins/gameengin/cartridges/manifest';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { toErrorMessage } from '@/utils/index';

const VALID_GAME_IDS = CARTRIDGE_MANIFEST.map((entry) => entry.id);
const VALID_GAMES = new Set(VALID_GAME_IDS);

const PostScoreSchema = z.object({
  game: z.string().refine((game) => VALID_GAMES.has(game), {
    message: `game must be one of: ${VALID_GAME_IDS.join(', ')}`,
  }),
  score: z.number().int().min(0, { message: 'score must be a non-negative integer' }),
  level: z.number().int().min(1).optional(),
});




export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const game = searchParams.get('game');
  const limitParam = searchParams.get('limit');
  const mine = searchParams.get('mine') === '1' || searchParams.get('mine') === 'true';
  const limit = Math.min(Math.max(parseInt(limitParam ?? '10', 10) || 10, 1), 50);
  const supabase = await createServerClient();

  if (mine) {
    const user = await safeGetUser(supabase);
    if (!user) {
      return NextResponse.json({ data: null, error: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = await supabase
      .from('game_scores')
      .select('id, user_id, game, score, level, achieved_at, created_at, shared')
      .eq('user_id', user.id)
      .order('score', { ascending: false })
      .limit(limit);

    if (error) {
      return NextResponse.json({ data: null, error: toErrorMessage(error) }, { status: 500 });
    }

    return NextResponse.json({ data: data ?? [], error: null });
  }

  if (!game) {
    return NextResponse.json({ data: null, error: 'game is required' }, { status: 400 });
  }

  if (!VALID_GAMES.has(game)) {
    return NextResponse.json(
      { data: null, error: `game must be one of: ${VALID_GAME_IDS.join(', ')}` },
      { status: 400 }
    );
  }

  
  const { data: scores, error: scoresError } = await supabase
    .from('game_scores')
    .select('id, user_id, game, score, level, achieved_at')
    .eq('game', game)
    .order('score', { ascending: false })
    .limit(limit);

  if (scoresError) {
    return NextResponse.json({ data: null, error: scoresError.message }, { status: 500 });
  }

  if (!scores || scores.length === 0) {
    return NextResponse.json({ data: [], error: null });
  }

  
  const userIds = [...new Set(scores.map((s) => s.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, handle, display_name, avatar_url')
    .in('id', userIds);

  const profilesMap = Object.fromEntries(
    (profiles || []).map((p) => [p.id, p])
  );

  
  const enriched = scores.map((s, index: number) => ({
    ...s,
    rank: index + 1,
    profile: profilesMap[s.user_id] ?? null,
  }));

  return NextResponse.json({ data: enriched, error: null });
}



export async function PATCH(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ data: null, error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ data: null, error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = z.object({
    id: z.string().min(1),
    shared: z.boolean(),
  }).safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join('; ');
    return NextResponse.json({ data: null, error: message }, { status: 422 });
  }

  const { data, error } = await supabase
    .from('game_scores')
    .update({ shared: parsed.data.shared })
    .eq('id', parsed.data.id)
    .eq('user_id', user.id)
    .select('id, user_id, game, score, level, achieved_at, created_at, shared')
    .single();

  if (error) {
    return NextResponse.json({ data: null, error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ data, error: null });
}



export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ data: null, error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ data: null, error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = PostScoreSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join('; ');
    return NextResponse.json({ data: null, error: message }, { status: 422 });
  }

  const { game, score, level } = parsed.data;

  const { data: entry, error } = await supabase
    .from('game_scores')
    .insert({ user_id: user.id, game, score, level: level ?? null })
    .select('id, user_id, game, score, level, achieved_at')
    .single();

  if (error) {
    return NextResponse.json({ data: null, error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ data: entry, error: null }, { status: 201 });
}
