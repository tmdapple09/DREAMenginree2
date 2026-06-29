import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { getGitDiff, getGitLog, getGitStatus } from '@/engins/codeengin/git';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as { workspaceId?: string; action?: 'status' | 'diff' | 'log'; path?: string };
    if (!body.workspaceId) throw new Error('Missing workspaceId. Git only runs inside an owned user workspace.');
    const action = body.action ?? 'status';
    const result = action === 'diff' ? await getGitDiff(body.workspaceId, user.id, body.path) : action === 'log' ? await getGitLog(body.workspaceId, user.id) : await getGitStatus(body.workspaceId, user.id);
    return NextResponse.json({ ok: true, result });
  } catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 }); }
}
