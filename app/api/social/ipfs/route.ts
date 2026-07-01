import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';



const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:4000';

async function requireUser(req: NextRequest ){
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  return user;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const user = await requireUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const pathname = req.nextUrl.pathname;

  
  if (pathname.endsWith('/pin')) {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    const { cid } = body as { cid?: string };
    if (!cid) {
      return NextResponse.json({ error: 'cid is required' }, { status: 400 });
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/ipfs/pin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cid }),
      });
      return NextResponse.json({ pinned: res.ok });
    } catch {
      return NextResponse.json({ pinned: false });
    }
  }

  
  const contentType = req.headers.get('content-type') ?? '';

  if (contentType.includes('multipart/form-data')) {
    
    const formData = await req.formData();
    const backendForm = new FormData();
    const file = formData.get('file');
    if (!file) {
      return NextResponse.json({ error: 'file field is required' }, { status: 400 });
    }
    backendForm.append('file', file as File);

    try {
      const res = await fetch(`${BACKEND_URL}/api/ipfs/upload`, {
        method: 'POST',
        body: backendForm,
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: `Backend upload failed (${res.status})` },
          { status: 502 }
        );
      }
      return NextResponse.json(await res.json());
    } catch {
      return NextResponse.json({ error: 'IPFS upload failed' }, { status: 502 });
    }
  }

  
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { content } = body as { content?: string };
  if (typeof content !== 'string') {
    return NextResponse.json({ error: 'content must be a string' }, { status: 400 });
  }

  try {
    const res = await fetch(`${BACKEND_URL}/api/ipfs/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Backend upload failed (${res.status})` },
        { status: 502 }
      );
    }
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'IPFS upload failed' }, { status: 502 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const user = await requireUser(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  
  const segments = req.nextUrl.pathname.split('/');
  const contentIdx = segments.indexOf('content');
  const cid = contentIdx >= 0 ? segments[contentIdx + 1] : null;

  if (!cid) {
    return NextResponse.json({ error: 'CID is required' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${BACKEND_URL}/api/ipfs/content/${encodeURIComponent(cid)}`
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: `CID not found (${res.status})` },
        { status: res.status }
      );
    }
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'IPFS retrieval failed' }, { status: 502 });
  }
}
