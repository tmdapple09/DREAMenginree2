import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { buildProjectGraph } from '@/engins/codeengin/projectGraph';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { createCodeEnginWorkspace, getWorkspaceOverview, listEditableFiles } from '@/engins/codeengin/workspaceStore';
import { listRunnerCommands } from '@/engins/codeengin/runner';
import { NextResponse } from 'next/server';

type WorkspaceBody = { action?: 'create' | 'files' | 'graph' | 'overview'; workspaceId?: string; path?: string; name?: string };

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const { searchParams } = new URL(request.url);
    const workspaceId = searchParams.get('workspaceId');
    if (!workspaceId) throw new Error('Missing workspaceId. Create or upload a project before loading CodeEngin files.');
    const [overview, commands] = await Promise.all([getWorkspaceOverview(workspaceId, user.id), Promise.resolve(listRunnerCommands())]);
    return NextResponse.json({ ok: true, overview, commands });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json().catch(() => ({}))) as WorkspaceBody;
    if (body.action === 'create') {
      const workspace = await createCodeEnginWorkspace(user.id, body.name ?? 'Untitled Project');
      const overview = await getWorkspaceOverview(workspace.id, user.id);
      return NextResponse.json({ ok: true, workspace, overview, commands: listRunnerCommands() });
    }
    if (!body.workspaceId) throw new Error('Missing workspaceId. Public CodeEngin cannot open the deployed DREAMengin source.');
    if (body.action === 'files') return NextResponse.json({ ok: true, files: await listEditableFiles(body.workspaceId, user.id, body.path ?? '') });
    if (body.action === 'graph') return NextResponse.json({ ok: true, graph: await buildProjectGraph(body.workspaceId, user.id, body.path ?? '') });
    const [overview, commands] = await Promise.all([getWorkspaceOverview(body.workspaceId, user.id), Promise.resolve(listRunnerCommands())]);
    return NextResponse.json({ ok: true, overview, commands });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
