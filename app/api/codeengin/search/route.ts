import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { searchWorkspace } from '@/engins/codeengin/search';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json()) as { workspaceId?: string; query?: string; path?: string };
    if (!body.workspaceId) throw new Error('Missing workspaceId. Search only runs inside an owned user workspace.');
    if (!body.query?.trim()) return NextResponse.json({ ok: true, hits: [] });
    return NextResponse.json({ ok: true, hits: await searchWorkspace(body.workspaceId, user.id, body.query, body.path ?? '') });
  } catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 }); }
}
