import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';



const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';


const YOUTUBE_SCOPE = 'https://www.googleapis.com/auth/youtube.readonly';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const clientId = process.env.GOOGLE_CLIENT_ID ?? '';
  if (!clientId) {
    return NextResponse.json(
      { error: 'GOOGLE_CLIENT_ID is not configured. Add it in Vercel environment variables.' },
      { status: 503 },
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '';

  const origin = siteUrl || new URL(req.url).origin;
  const redirectUri = `${origin}/api/connectors/youtube/oauth/callback`;

  
  const state = crypto.randomUUID();

  
  const cookieStore = await cookies();
  cookieStore.set('yt_oauth_state', state, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   600, 
    path:     '/',
  });

  const params = new URLSearchParams({
    client_id:     clientId,
    redirect_uri:  redirectUri,
    response_type: 'code',
    scope:         YOUTUBE_SCOPE,
    access_type:   'offline',  
    prompt:        'consent',  
    state,
  });

  return NextResponse.redirect(`${GOOGLE_AUTH_URL}?${params.toString()}`);
}
