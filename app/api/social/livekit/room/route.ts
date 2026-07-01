import type { LiveKitRoomInfo } from '@/engine/social/livekit';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const roomName = req.nextUrl.searchParams.get('roomName');
  if (!roomName) {
    return NextResponse.json(
      { error: 'roomName query param is required' },
      { status: 400 }
    );
  }

  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:4000';

  try {
    const res = await fetch(
      `${backendUrl}/api/livekit/room?roomName=${encodeURIComponent(roomName)}`,
      { next: { revalidate: 5 } }
    );

    if (res.status === 404) {
      const empty: LiveKitRoomInfo = {
        roomName,
        participantCount: 0,
        participants: [],
        connectionState: 'disconnected',
      };
      return NextResponse.json(empty, { status: 404 });
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: `Backend returned ${res.status}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    
    const empty: LiveKitRoomInfo = {
      roomName,
      participantCount: 0,
      participants: [],
      connectionState: 'disconnected',
    };
    return NextResponse.json(empty, { status: 200 });
  }
}
