import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/lib/utils';

/**
 * GET /api/connectors/[provider]/items
 *
 * Returns the user's most recently synced normalised items for a provider.
 * feed_items currently stores connector payloads under preview, scoped by
 * feed_widget_id = user:{id}.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
): Promise<NextResponse> {
  const { provider } = await params;
  const db = await createServerClient();
  const user = await safeGetUser(db);

  if (!user) {
    return NextResponse.json({ ok: false, items: [], error: 'Unauthorised' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const rawLimit = Number(searchParams.get('limit') ?? '6');
  const limit = Number.isFinite(rawLimit)
    ? Math.max(1, Math.min(24, Math.floor(rawLimit)))
    : 6;

  const { data, error } = await db
    .from('feed_items')
    .select('preview, created_at')
    .eq('feed_widget_id', `user:${user.id}`)
    .order('created_at', { ascending: false })
    .limit(Math.max(limit * 4, 24));

  if (error) {
    return NextResponse.json(
      { ok: false, items: [], error: toErrorMessage(error) },
      { status: 500 },
    );
  }

  const items = (data ?? [])
    .map((row: { preview?: unknown; created_at?: string | null }) => {
      const preview = row.preview;
      return preview && typeof preview === 'object'
        ? { ...(preview as Record<string, unknown>), created_at: row.created_at }
        : null;
    })
    .filter((item): item is Record<string, unknown> => Boolean(item))
    .filter((item) => item.provider === provider)
    .slice(0, limit);

  return NextResponse.json({
    ok: true,
    items,
  });
}
