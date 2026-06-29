import type { SupabaseClient, User } from '@supabase/supabase-js';

type SupabaseAuthLike = {
  auth: {
    getUser: () => Promise<{ data: { user: User | null }; error: Error | null }>;
  };
};

export const AUTH_GET_USER_TIMEOUT_MS = 2500;

export async function safeGetUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, any, any> | SupabaseAuthLike,
  timeoutMs = AUTH_GET_USER_TIMEOUT_MS,
): Promise<User | null> {
  const effectiveTimeoutMs = Math.max(1, timeoutMs);
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Supabase auth timed out after ${effectiveTimeoutMs}ms`));
    }, effectiveTimeoutMs);
    if (typeof timeoutId === 'object' && timeoutId && 'unref' in timeoutId) {
      timeoutId.unref();
    }
  });

  try {
    const result = await Promise.race([supabase.auth.getUser(), timeoutPromise]);
    return result.data?.user ?? null;
  } catch {
    return null;
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

