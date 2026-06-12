import { isOwner } from '@/lib/admin/lockout';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { createServerClient } from '@/lib/supabase/server';

export interface CodeEnginAuthenticatedUser {
  id: string;
  email: string | null;
  isOwner: boolean;
}

export async function assertCodeEnginAccess(request: Request): Promise<CodeEnginAuthenticatedUser> {
  const configuredToken = process.env.CODEENGIN_IDE_TOKEN || process.env.CI_API_KEY || '';
  const suppliedToken = request.headers.get('x-codeengin-token') || request.headers.get('x-api-key') || '';

  if (configuredToken && suppliedToken === configuredToken) {
    return { id: 'token-owner', email: 'token@codeengin.local', isOwner: true };
  }

  try {
    const supabase = await createServerClient();
    const user = await safeGetUser(supabase);
    if (user?.id) {
      const email = user.email ?? null;
      return { id: user.id, email, isOwner: isOwner(email) };
    }
  } catch {
    // Fall through to dev-only fallback / deny.
  }

  if (process.env.NODE_ENV !== 'production' && !configuredToken) {
    return { id: 'local-dev', email: 'local-dev@codeengin.local', isOwner: true };
  }

  throw new Error('CodeEngin access denied. Sign in and open a user workspace.');
}
