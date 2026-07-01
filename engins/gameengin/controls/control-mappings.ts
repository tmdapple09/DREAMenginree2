'use client';

import { createClient } from '@/supabase/client/client';
import { safeGetUser } from '@/supabase/client/safeGetUser';


export interface ControlMapping {
  id: string;
  asset_id: string;
  input_source: string;
  command_target: string;
  sensitivity: number;
  owner_id: string | null;
  created_at: string;
  updated_at: string;
}


export const mapJoystickToAsset = async (
  assetId: string,
  command: string,
  inputSource = 'left_joystick',
  sensitivity = 1.5,
): Promise<{ data: ControlMapping[] | null; error: unknown }> => {
  const supabase = createClient();

  const user = await safeGetUser(supabase);
  if (!user) return { data: null, error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('control_mappings')
    .insert([{
      asset_id: assetId,
      input_source: inputSource,
      command_target: command,
      sensitivity,
      owner_id: user.id,
    }])
    .select();

  return { data, error };
};
