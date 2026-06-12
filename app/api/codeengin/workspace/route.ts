import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { buildProjectGraph } from '@/lib/codeengin/projectGraph';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { getWorkspaceOverview, listEditableFiles } from '@/lib/codeengin/workspaceStore';
import { listRunnerCommands } from '@/lib/codeengin/runner';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const [overview, commands] = await Promise.all([getWorkspaceOverview(), Promise.resolve(listRunnerCommands())]);
    return NextResponse.json({ ok: true, overview, commands });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 403 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as { action?: string; path?: string };

    if (body.action === 'files') {
      return NextResponse.json({ ok: true, files: await listEditableFiles(body.path ?? '') });
    }

    if (body.action === 'graph') {
      return NextResponse.json({ ok: true, graph: await buildProjectGraph(body.path ?? '') });
    }

    const [overview, commands] = await Promise.all([getWorkspaceOverview(), Promise.resolve(listRunnerCommands())]);
    return NextResponse.json({ ok: true, overview, commands });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
