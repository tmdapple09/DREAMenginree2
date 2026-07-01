import { DREAM_WINDOW_STATES } from '@/engine/dream-window/DreamWindowLifecycle';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';






const REQUIRED_FIELDS = [
  'id',
  'type',
  'owner_id',
  'config',
  'size',
  'position',
  'visibility',
  'sourceBindings',
  'destinationRules',
  'activeState',
] as const;

type RequiredField = (typeof REQUIRED_FIELDS)[number];

function validateRequiredFields(
  body: Record<string, unknown>,
): RequiredField[] {
  return REQUIRED_FIELDS.filter((field) => {
    const value = body[field];
    return value === undefined || value === null;
  });
}




export async function GET(_req: NextRequest ): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  

  const { data: dreamWindows, error } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ dreamWindows: dreamWindows ?? [] });
}




export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const missingFields = validateRequiredFields(body);
  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: 'Unprocessable Entity — missing required Dream Window fields',
        missingFields,
        requiredFields: REQUIRED_FIELDS,
      },
      { status: 422 },
    );
  }

  if (body.owner_id !== user.id) {
    return NextResponse.json(
      { error: 'Forbidden — owner_id must match the authenticated user' },
      { status: 403 },
    );
  }

  const validStates = Object.values(DREAM_WINDOW_STATES) as string[];
  if (!validStates.includes(body.activeState as string)) {
    return NextResponse.json(
      {
        error: 'Unprocessable Entity — invalid activeState',
        validStates,
      },
      { status: 422 },
    );
  }

  const validVisibility = ['private', 'shared', 'public'];
  if (!validVisibility.includes(body.visibility as string)) {
    return NextResponse.json(
      {
        error: 'Unprocessable Entity — invalid visibility',
        validVisibility,
      },
      { status: 422 },
    );
  }

  const { data: dreamWindow, error } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .insert({
      id: body.id as string,
      type: body.type as string,
      owner_id: user.id,
      config: body.config,
      size: body.size,
      position: body.position,
      visibility: (body.visibility as string) ?? 'private',
      source_bindings: body.sourceBindings,
      destination_rules: body.destinationRules,
      active_state: body.activeState as string,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ dreamWindow }, { status: 201 });
}
