import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { diagnoseFile, diagnoseWorkspace } from '@/engins/codeengin/diagnostics';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as { workspaceId?: string; path?: string; scope?: 'file' | 'workspace' };
    if (!body.workspaceId) throw new Error('Missing workspaceId. Diagnostics only scan user workspaces.');
    const diagnostics = body.scope === 'file' && body.path ? await diagnoseFile(body.workspaceId, user.id, body.path) : await diagnoseWorkspace(body.workspaceId, user.id, body.path ?? '');
    return NextResponse.json({ ok: true, diagnostics });
  } catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 }); }
}
