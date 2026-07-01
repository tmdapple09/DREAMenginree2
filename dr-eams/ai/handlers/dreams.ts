import {
    DreamAddFromPresetPayload,
    DreamConfigPatchPayload,
    DreamOpenPayload,
    DreamPreviewPayload,
    DreamRemovePayload,
    DreamReorderPayload,
} from '@/types/ai-system';
import { ToolHandler } from '../tool-router';








export const handleDreamPreview: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamPreviewPayload;

  
  const { data: dream, error } = await ctx.supabase
    .from('dream_instances')
    .select('*')
    .eq('id', payload.dream_id)
    .single();

  if (error || !dream) {
    return {
      ok: false,
      error: {
        code: 'DREAM_NOT_FOUND',
        message: 'Dream not found',
      },
    };
  }

  return {
    ok: true,
    data: { dream },
    ui_delta: {
      open_overlay: 'PREVIEW',
      toast: {
        kind: 'info',
        message: 'Opening dream preview',
      },
    },
  };
};





export const handleDreamOpen: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamOpenPayload;

  return {
    ok: true,
    data: { dream_id: payload.dream_id },
    ui_delta: {
      nav_patch: [
        {
          op: 'replace',
          path: '/focus/dream_id',
          value: payload.dream_id,
        },
      ],
    },
  };
};





export const handleDreamConfigPatch: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamConfigPatchPayload;

  
  const { data: existing, error: fetchError } = await ctx.supabase
    .from('dream_instances')
    .select('config_json, user_id')
    .eq('id', payload.dream_id)
    .single();

  if (fetchError || !existing) {
    return {
      ok: false,
      error: {
        code: 'DREAM_NOT_FOUND',
        message: 'Dream not found',
      },
    };
  }

  
  if (existing.user_id !== ctx.actor.user_id && ctx.actor.role !== 'admin') {
    return {
      ok: false,
      error: {
        code: 'FORBIDDEN',
        message: 'You do not own this dream',
      },
    };
  }

  
  const newConfig = {
    ...(existing.config_json as any),
    ...payload.config_patch,
  };

  
  const { data: updated, error: updateError } = await ctx.supabase
    .from('dream_instances')
    .update({ config_json: newConfig })
    .eq('id', payload.dream_id)
    .select()
    .single();

  if (updateError) {
    return {
      ok: false,
      error: {
        code: 'UPDATE_FAILED',
        message: 'Failed to update dream config',
        detail: updateError,
      },
    };
  }

  return {
    ok: true,
    data: { dream: updated },
    ui_delta: {
      toast: {
        kind: 'success',
        message: 'Dream configuration updated',
      },
    },
  };
};





export const handleDreamReorder: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamReorderPayload;

  
  for (let i = 0; i < payload.dream_ids.length; i++) {
    await ctx.supabase
      .from('dream_instances')
      .update({ order: i })
      .eq('id', payload.dream_ids[i])
      .eq('user_id', ctx.actor.user_id); 
  }

  return {
    ok: true,
    data: { dream_ids: payload.dream_ids },
    ui_delta: {
      toast: {
        kind: 'success',
        message: 'Dreams reordered',
      },
    },
  };
};





export const handleDreamAddFromPreset: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamAddFromPresetPayload;

  
  const { data: maxOrderRow } = await ctx.supabase
    .from('dream_instances')
    .select('order')
    .eq('user_id', ctx.actor.user_id)
    .order('order', { ascending: false })
    .limit(1)
    .single();

  const nextOrder = payload.position ?? ((maxOrderRow?.order ?? -1) + 1);

  
  const { data: newDream, error } = await ctx.supabase
    .from('dream_instances')
    .insert({
      user_id: ctx.actor.user_id,
      type: payload.preset_type,
      config_json: {},
      order: nextOrder,
      enabled: true,
    })
    .select()
    .single();

  if (error) {
    return {
      ok: false,
      error: {
        code: 'CREATE_FAILED',
        message: 'Failed to create dream',
        detail: error,
      },
    };
  }

  return {
    ok: true,
    data: { dream: newDream },
    ui_delta: {
      toast: {
        kind: 'success',
        message: `Added ${payload.preset_type} dream`,
      },
    },
  };
};





export const handleDreamRemove: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as DreamRemovePayload;

  
  const { data: dream, error: fetchError } = await ctx.supabase
    .from('dream_instances')
    .select('user_id')
    .eq('id', payload.dream_id)
    .single();

  if (fetchError || !dream) {
    return {
      ok: false,
      error: {
        code: 'DREAM_NOT_FOUND',
        message: 'Dream not found',
      },
    };
  }

  if (dream.user_id !== ctx.actor.user_id && ctx.actor.role !== 'admin') {
    return {
      ok: false,
      error: {
        code: 'FORBIDDEN',
        message: 'You do not own this dream',
      },
    };
  }

  
  const { error: deleteError } = await ctx.supabase
    .from('dream_instances')
    .delete()
    .eq('id', payload.dream_id);

  if (deleteError) {
    return {
      ok: false,
      error: {
        code: 'DELETE_FAILED',
        message: 'Failed to delete dream',
        detail: deleteError,
        },
    };
  }

  return {
    ok: true,
    data: { deleted: true },
    ui_delta: {
      toast: {
        kind: 'success',
        message: 'Dream removed',
      },
    },
  };
};
