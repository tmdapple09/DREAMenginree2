import { jsonApiError } from '@/engine/api/route';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';















const EXPORT_TARGETS: Array<{ table: string; ownerCol: string }> = [
  { table: 'profiles',           ownerCol: 'id' },
  { table: 'dream_instances',   ownerCol: 'user_id' },
  { table: 'connector_feed_items', ownerCol: 'user_id' },
  { table: 'merch',              ownerCol: 'user_id' },
  { table: 'favorites',          ownerCol: 'user_id' },
  { table: 'music_releases',     ownerCol: 'user_id' },
  { table: 'notes',              ownerCol: 'user_id' },
];

export async function GET(_req: NextRequest ): Promise<Response> {
  const supabase = await createServerClient();

  const user = await safeGetUser(supabase);

  if (!user) {
    return jsonApiError(401, 'NOT_AUTHENTICATED', 'You must be signed in to export your data.');
  }

  const supabaseAny = supabase as SupabaseClient;

  const exportData: Record<string, unknown[] | null> = {};
  const skipped: string[] = [];

  
  await Promise.all(
    EXPORT_TARGETS.map(async ({ table, ownerCol }) => {
      try {
        const { data, error } = await supabaseAny
          .from(table)
          .select('*')
          .eq(ownerCol, user.id);

        if (error) {
          
          skipped.push(table);
          exportData[table] = null;
        } else {
          exportData[table] = data ?? [];
        }
      } catch {
        skipped.push(table);
        exportData[table] = null;
      }
    })
  );

  return NextResponse.json(
    {
      ok: true,
      exported_at: new Date().toISOString(),
      user_id: user.id,
      data: exportData,
      ...(skipped.length > 0 ? { skipped } : {}),
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Content-Disposition': `attachment; filename="dreamengin-export-${Date.now()}.json"`,
      },
    }
  );
}
