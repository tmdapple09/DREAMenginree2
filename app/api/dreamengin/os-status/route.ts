import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET( ): Promise<NextResponse> {
  let isFix = false;
  let connectedConnectors = 0;
  let authenticated = false;

  try {
    const supabase = await createServerClient();
    const user = await safeGetUser(supabase);

    authenticated = Boolean(user);

    if (user) {
      const db = supabase as SupabaseClient;
      const { data, error } = await db
        .from('connector_accounts')
        .select('status')
        .eq('user_id', user.id);

      if (error) {
        isFix = true;
      } else {
        connectedConnectors = Array.isArray(data)
          ? data.filter((row) => row?.status === 'connected').length
          : 0;
      }
    }
  } catch {
    isFix = true;
  }

  return NextResponse.json({
    ok: true,
    isFix,
    subsystems: {
      auth: authenticated,
      connectors: connectedConnectors,
    },
  });
}
