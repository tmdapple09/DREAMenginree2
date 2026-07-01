import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';



const IG_AUTH_URL = 'https://api.instagram.com/oauth/authorize';


const IG_SCOPE = 'user_profile,user_media';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const clientId = process.env.INSTAGRAM_CLIENT_ID ?? '';
  if (!clientId) {
    return NextResponse.json(
      { error: 'INSTAGRAM_CLIENT_ID is not configured. Add it in Vercel environment variables.' },
      { status: 503 },
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '');

  const origin = siteUrl || new URL(req.url).origin;
  const redirectUri = `${origin}/api/connectors/instagram/oauth/callback`;

  
  const state = crypto.randomUUID();
  const cookieStore = await cookies();
  cookieStore.set('ig_oauth_state', state, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   600, 
    path:     '/',
  });

  const params = new URLSearchParams({
    client_id:     clientId,
    redirect_uri:  redirectUri,
    scope:         IG_SCOPE,
    response_type: 'code',
    state,
  });

  return NextResponse.redirect(`${IG_AUTH_URL}?${params.toString()}`);
}
