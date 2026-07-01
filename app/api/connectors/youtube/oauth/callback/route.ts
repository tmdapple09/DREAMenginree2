import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';



const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

interface GoogleTokenResponse {
  access_token:  string;
  refresh_token?: string;
  expires_in:    number;
  token_type:    string;
  scope:         string;
  error?:        string;
  error_description?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const url = new URL(req.url);
  const code  = url.searchParams.get('code')  ?? '';
  const state = url.searchParams.get('state') ?? '';
  const error = url.searchParams.get('error') ?? '';

  const origin = url.origin;
  const connectorsUrl = `${origin}/connectors`;

  if (error) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', error);
    return NextResponse.redirect(dest);
  }

  const cookieStore = await cookies();
  const storedState = cookieStore.get('yt_oauth_state')?.value ?? '';
  cookieStore.delete('yt_oauth_state');

  if (!storedState || storedState !== state) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', 'state_mismatch');
    return NextResponse.redirect(dest);
  }

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.redirect(`${origin}/login?next=/connectors`);
  }

  const clientId     = process.env.GOOGLE_CLIENT_ID     ?? '';
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';
  const siteUrl      = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const callbackOrigin = siteUrl || origin;
  const redirectUri  = `${callbackOrigin}/api/connectors/youtube/oauth/callback`;

  if (!clientId || !clientSecret) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', 'not_configured');
    return NextResponse.redirect(dest);
  }

  let tokenData: GoogleTokenResponse;
  try {
    const res = await fetch(GOOGLE_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id:     clientId,
        client_secret: clientSecret,
        redirect_uri:  redirectUri,
        grant_type:    'authorization_code',
      }).toString(),
    });
    tokenData = await res.json() as GoogleTokenResponse;
  } catch (err: unknown) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', 'token_exchange_failed');
    return NextResponse.redirect(dest);
  }

  if (tokenData.error || !tokenData.access_token) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', tokenData.error ?? 'no_access_token');
    return NextResponse.redirect(dest);
  }

  const db = supabase as SupabaseClient;
  const now = new Date().toISOString();

  const tokenBlob: Record<string, string> = {
    access_token: tokenData.access_token,
  };
  
  if (tokenData.refresh_token) {
    tokenBlob.refresh_token = tokenData.refresh_token;
  }
  tokenBlob.expires_at = String(Date.now() + tokenData.expires_in * 1000);

  const { error: dbError } = await db
    .from('connector_accounts')
    .upsert(
      {
        user_id:          user.id,
        provider:         'youtube',
        status:           'connected',
        token_blob:       tokenBlob,
        last_verified_at: now,
        last_error:       null,
        updated_at:       now,
      },
      { onConflict: 'user_id,provider' },
    );

  if (dbError) {
    const dest = new URL(connectorsUrl);
    dest.searchParams.set('yt_error', 'db_error');
    return NextResponse.redirect(dest);
  }

  const dest = new URL(connectorsUrl);
  dest.searchParams.set('yt_connected', '1');
  return NextResponse.redirect(dest);
}
