import { generateServerToken, LiveKitError } from '@/engine/social/livekit';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';



export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { roomName, identity } = body as { roomName?: string; identity?: string };

  if (!roomName || typeof roomName !== 'string') {
    return NextResponse.json(
      { error: 'roomName is required' },
      { status: 400 }
    );
  }

  
  const resolvedIdentity = identity ?? user.id;

  try {
    const token = await generateServerToken(roomName, resolvedIdentity);
    const wsUrl = process.env.LIVEKIT_WS_URL ?? 'wss://livekit.example.com';

    return NextResponse.json({
      token,
      wsUrl,
      roomName,
      identity: resolvedIdentity,
    });
  } catch (err: unknown) {
    if (err instanceof LiveKitError) {
      const status =
        err.code === 'CREDENTIALS_MISSING' ||
        err.code === 'UNAUTHORIZED'
          ? 503
          : 500;
      return NextResponse.json({ error: toErrorMessage(err) }, { status });
    }
    return NextResponse.json({ error: 'Token generation failed' }, { status: 500 });
  }
}
