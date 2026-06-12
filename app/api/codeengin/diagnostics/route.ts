import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { diagnoseFile, diagnoseWorkspace } from '@/lib/codeengin/diagnostics';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as { path?: string; scope?: 'file' | 'workspace' };
    const diagnostics = body.scope === 'file' && body.path
      ? await diagnoseFile(body.path)
      : await diagnoseWorkspace(body.path ?? '');
    return NextResponse.json({ ok: true, diagnostics });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
