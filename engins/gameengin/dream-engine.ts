'use client';

import { decodeLedgerStringToUint8Array, encodeUint8ArrayToLedgerString } from '@/engins/contentengin/media/ledger';
import { createClient } from '@/supabase/client/client';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { toErrorMessage } from '@/utils/index';





export interface GameAsset {
  id: string;
  owner_id: string;
  label: string;
  source_image_url: string | null;
  asset_type: string;
  config_dna: unknown;
  wasm_mesh_data: string | null;
  wasm_rig_data: string | null;
  created_at: string;
  updated_at: string;
}

export interface GlobalRegistryEntry {
  id: string;
  object_type: string;
  internal_id: string;
  label: string;
  owner_id: string | null;
  created_at: string;
}

export interface WasmOutput {
  mesh: Uint8Array;
  rig: Uint8Array;
  dna: unknown;
}

export const DreamEngine = {
  
  async saveScannedAsset(
    label: string,
    imageUrl: string,
    wasmOutput: WasmOutput,
  ): Promise<GameAsset> {
    const supabase = createClient();
    const user = await safeGetUser(supabase);
    if (!user) throw new Error('Auth Required');

    const { data, error } = await supabase
      .from('game_assets')
      .insert([{
        owner_id: user.id,
        label,
        source_image_url: imageUrl,
        config_dna: wasmOutput.dna,
        wasm_mesh_data: encodeUint8ArrayToLedgerString(wasmOutput.mesh, {
          mimeType: 'application/octet-stream',
          fileName: `${label}-mesh.bin`,
        }),
        wasm_rig_data: encodeUint8ArrayToLedgerString(wasmOutput.rig, {
          mimeType: 'application/octet-stream',
          fileName: `${label}-rig.bin`,
        }),
      }])
      .select()
      .single();

    if (error) throw error;
    return data as GameAsset;
  },

  
  async bindExistingController(
    assetId: string,
    inputSource: string,
    targetCommand: string,
    sensitivity = 1.0,
  ): Promise<void> {
    const supabase = createClient();
    const user = await safeGetUser(supabase);
    if (!user) throw new Error('Auth Required');

    const { error } = await supabase
      .from('control_mappings')
      .upsert({
        owner_id: user.id,
        asset_id: assetId,
        input_source: inputSource,
        command_target: targetCommand,
        sensitivity,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'owner_id,asset_id,input_source' });

    if (error) throw new Error(`Binding Failed: ${toErrorMessage(error)}`);
  },

  
  syncController(assetId: string, onUpdate: (payload: Record<string, unknown>) => void) {
    const supabase = createClient();
    return supabase
      .channel(`asset_controls_${assetId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'control_mappings',
          filter: `asset_id=eq.${assetId}`,
        },
        onUpdate,
      )
      .subscribe();
  },

  
  async fetchEverything(): Promise<GlobalRegistryEntry[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('global_registry')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return [];
    return (data ?? []) as GlobalRegistryEntry[];
  },

  decodeAssetBinary(encoded: string | null): Uint8Array | null {
    if (!encoded) return null;
    return decodeLedgerStringToUint8Array(encoded);
  },
};
