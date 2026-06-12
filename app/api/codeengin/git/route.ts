import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { getGitDiff, getGitLog, getGitStatus } from '@/lib/codeengin/git';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as { action?: 'status' | 'diff' | 'log'; path?: string };
    const action = body.action ?? 'status';
    const result = action === 'diff'
      ? await getGitDiff(body.path)
      : action === 'log'
        ? await getGitLog()
        : await getGitStatus();
    return NextResponse.json({ ok: true, result });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
