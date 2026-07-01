import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClientWithCustomCookies } from '@/supabase/server/serverClient';
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from '@/supabase/config';
import { safeGetUser } from '@/supabase/client/safeGetUser';



const BLOCKED_HOST = 'theboogieman.ai';

export async function proxy(request: NextRequest) {
  
  
  
  const host = (request.headers.get('host') ?? '').toLowerCase();
  if (host === BLOCKED_HOST || host.endsWith(`.${BLOCKED_HOST}`)) {
    return new NextResponse('Access denied.', { status: 403 });
  }

  
  
  
  

  
  
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

  
  
  await safeGetUser(supabase);

  return supabaseResponse;
}

export const config = {
  matcher: [
    
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)',
  ],
};
