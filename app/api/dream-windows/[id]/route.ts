import type { DreamWindowInstance } from '@/engine/dream-window/DreamWindowLifecycle';
import { DREAM_WINDOW_STATES, validateDreamWindowLayers } from '@/engine/dream-window/DreamWindowLifecycle';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';






export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  
  

  const { data: dreamWindow, error } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !dreamWindow) {
    return NextResponse.json({ error: 'Dream Window not found' }, { status: 404 });
  }

  return NextResponse.json({ dreamWindow });
}




export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: existing, error: fetchError } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .select('*')
    .eq('id', id)
    .single();

  if (fetchError || !existing) {
    return NextResponse.json({ error: 'Dream Window not found' }, { status: 404 });
  }

  if (existing.owner_id !== user.id) {
    return NextResponse.json(
      { error: 'Forbidden — only the owner may update this Dream Window' },
      { status: 403 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const update: Record<string, unknown> = {};

  if (body.active_state !== undefined) {
    const validStates = Object.values(DREAM_WINDOW_STATES) as string[];
    if (!validStates.includes(body.active_state as string)) {
      return NextResponse.json(
        { error: 'Invalid active_state', validStates },
        { status: 422 },
      );
    }
    update.active_state = body.active_state;
  }

  if (body.position !== undefined) {
    const pos = body.position as { x?: unknown; y?: unknown };
    if (typeof pos.x !== 'number' || typeof pos.y !== 'number') {
      return NextResponse.json(
        { error: 'position must be { x: number; y: number }' },
        { status: 422 },
      );
    }
    update.position = body.position;
  }

  if (body.size !== undefined) {
    const sz = body.size as { width?: unknown; height?: unknown };
    if (typeof sz.width !== 'number' || typeof sz.height !== 'number') {
      return NextResponse.json(
        { error: 'size must be { width: number; height: number }' },
        { status: 422 },
      );
    }
    update.size = body.size;
  }

  if (body.visibility !== undefined) {
    const validVisibility = ['private', 'shared', 'public'];
    if (!validVisibility.includes(body.visibility as string)) {
      return NextResponse.json(
        { error: 'Invalid visibility', validVisibility },
        { status: 422 },
      );
    }
    update.visibility = body.visibility;
  }

  if (body.config !== undefined) {
    update.config = body.config;
  }

  if (body.source_bindings !== undefined) {
    update.source_bindings = body.source_bindings;
  }

  if (body.destination_rules !== undefined) {
    update.destination_rules = body.destination_rules;
  }

  if (update.active_state === DREAM_WINDOW_STATES.MOUNTED) {
    
    const effectiveConfig = {
      ...(existing.config ?? {}),
      ...(update.config ? (update.config as Record<string, unknown>) : {}),
    };

    
    const instanceForValidation: DreamWindowInstance = {
      id: existing.id as string,
      type: existing.type as string,
      owner: existing.owner_id as string,
      config: effectiveConfig as DreamWindowInstance['config'],
      size: existing.size as DreamWindowInstance['size'],
      position: existing.position as DreamWindowInstance['position'],
      visibility: existing.visibility as DreamWindowInstance['visibility'],
      sourceBindings: (existing.source_bindings as string[]) ?? [],
      destinationRules: (existing.destination_rules as DreamWindowInstance['destinationRules']) ?? [],
      activeState: update.active_state as DreamWindowInstance['activeState'],
    };

    const layerValidation = validateDreamWindowLayers(instanceForValidation);
    if (!layerValidation.valid) {
      
      
      
      
      
      update._layer_validation_warning = layerValidation.error;
    }
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
  }

  const { data: dreamWindow, error: updateError } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .update(update)
    .eq('id', id)
    .select()
    .single();

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ dreamWindow });
}




export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: existing, error: fetchError } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .select('id, owner_id')
    .eq('id', id)
    .single();

  if (fetchError || !existing) {
    return NextResponse.json({ error: 'Dream Window not found' }, { status: 404 });
  }

  if (existing.owner_id !== user.id) {
    return NextResponse.json(
      { error: 'Forbidden — only the owner may delete this Dream Window' },
      { status: 403 },
    );
  }

  

  const { error: deleteError } = await (supabase as SupabaseClient)
    .from('dream_windows')
    .delete()
    .eq('id', id);

  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  

  const { error: visError } = await (supabase as SupabaseClient)
    .from('visibility_mappings')
    .delete()
    .eq('content_id', id)
    .eq('user_id', user.id);

  const cleanupWarning =
    visError
      ? `Visibility mapping cleanup failed: ${visError.message}`
      : null;

  return NextResponse.json({
    deleted: true,
    id,
    ...(cleanupWarning ? { cleanupWarning } : {}),
  });
}
