import { isOwner } from '@/lib/admin/lockout';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { createServerClient } from '@/lib/supabase/server';

export async function assertCodeEnginAccess(request: Request): Promise<void> {
  const configuredToken = process.env.CODEENGIN_IDE_TOKEN || process.env.CI_API_KEY || '';
  const suppliedToken = request.headers.get('x-codeengin-token') || request.headers.get('x-api-key') || '';

  if (configuredToken && suppliedToken === configuredToken) {
    return;
  }

  if (process.env.NODE_ENV !== 'production' && !configuredToken) {
    return;
  }

  try {
    const supabase = await createServerClient();
    const user = await safeGetUser(supabase);
    if (isOwner(user?.email ?? null)) return;
  } catch {
    // Fall through to deny.
  }

  throw new Error('CodeEngin IDE access denied.');
}
