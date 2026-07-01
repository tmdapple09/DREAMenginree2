import { createServerClient } from '@/supabase/server/serverClient';
import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_AUTH_COOKIE = /^(?:sb-|supabase-).*(?:auth-token|code-verifier)/;


export async function GET(request: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  await supabase.auth.signOut();

  const response = NextResponse.redirect(new URL('/', request.url));
  for (const cookie of request.cookies.getAll()) {
    if (SUPABASE_AUTH_COOKIE.test(cookie.name)) {
      response.cookies.delete(cookie.name);
    }
  }
  return response;
}

