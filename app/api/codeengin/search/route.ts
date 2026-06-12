import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { searchWorkspace } from '@/lib/codeengin/search';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const body = (await request.json()) as { query?: string; path?: string };
    if (!body.query?.trim()) return NextResponse.json({ ok: true, hits: [] });
    return NextResponse.json({ ok: true, hits: await searchWorkspace(body.query, body.path ?? '') });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
