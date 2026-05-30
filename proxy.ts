/**
 * DREAMengin — Next.js 16 Edge Proxy
 *
 * Two responsibilities:
 *  1. Supabase session-refresh proxy — refreshes auth cookies on every
 *     request so that Server Components always receive a live session.
 *  2. Host-based domain block — any request arriving with a Host header
 *     of theboogieman.ai (or any subdomain) is rejected immediately at
 *     the edge before it ever reaches application code.
 *
 * Next.js 16.1.6 renamed "middleware" to "proxy". The entry point must be
 * this file (proxy.ts) and the export must be named `proxy`.
 */

import { createServerClientWithCustomCookies } from '@/lib/supabase/server';
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from '@/lib/supabase/config';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ── Blocked hosts ─────────────────────────────────────────────────────────────
const BLOCKED_HOST = 'theboogieman.ai';

export async function proxy(request: NextRequest) {
  // 1. Reject requests whose Host header is the blocked domain.
  const host = (request.headers.get('host') ?? '').toLowerCase();
  if (host === BLOCKED_HOST || host.endsWith(`.${BLOCKED_HOST}`)) {
    return new NextResponse('Access denied.', { status: 403 });
  }

  // 2. Supabase session-refresh proxy.
  //    If Supabase is not configured, skip and continue.
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClientWithCustomCookies(
    () => request.cookies.getAll(),
    (cookiesToSet) => {
      cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
      supabaseResponse = NextResponse.next({ request });
      cookiesToSet.forEach(({ name, value, options }) =>
        supabaseResponse.cookies.set(name, value, options),
      );
    },
  );

  // IMPORTANT: Do not add any logic between createServerClientWithCustomCookies
  // and safeGetUser() — a proxy bug here causes random auth failures.
  await safeGetUser(supabase);

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match every path EXCEPT:
     *  - _next/static      (static assets)
     *  - _next/image       (image optimisation)
     *  - favicon.ico
     *  - common image/font extensions
     *  - auth/callback     (OAuth PKCE exchange — must NOT run getUser() before
     *                       exchangeCodeForSession() or the code-verifier cookie
     *                       can be cleared from request.cookies, causing a 400
     *                       from Supabase's token endpoint and a redirect to /login)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|auth/callback|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)',
  ],
};
