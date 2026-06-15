import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { createProjectFile, deleteProjectFile, moveProjectFile, readProjectFile, writeProjectFile } from '@/engins/codeengin/workspaceStore';
import { NextResponse } from 'next/server';

type FileBody = { action?: 'read' | 'write' | 'create' | 'delete' | 'move'; workspaceId?: string; path?: string; fromPath?: string; toPath?: string; content?: string };

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json()) as FileBody;
    if (!body.workspaceId) throw new Error('Missing workspaceId. CodeEngin only edits user-created or user-uploaded workspaces.');
    const action = body.action ?? 'read';
    if (action === 'read') { if (!body.path) throw new Error('Missing file path.'); return NextResponse.json({ ok: true, file: await readProjectFile(body.workspaceId, user.id, body.path) }); }
    if (action === 'write') { if (!body.path) throw new Error('Missing file path.'); return NextResponse.json({ ok: true, file: await writeProjectFile(body.workspaceId, user.id, body.path, body.content ?? '') }); }
    if (action === 'create') { if (!body.path) throw new Error('Missing file path.'); return NextResponse.json({ ok: true, file: await createProjectFile(body.workspaceId, user.id, body.path, body.content ?? '') }); }
    if (action === 'delete') { if (!body.path) throw new Error('Missing file path.'); return NextResponse.json({ ok: true, result: await deleteProjectFile(body.workspaceId, user.id, body.path) }); }
    if (action === 'move') { if (!body.fromPath || !body.toPath) throw new Error('Missing source or destination path.'); return NextResponse.json({ ok: true, file: await moveProjectFile(body.workspaceId, user.id, body.fromPath, body.toPath) }); }
    throw new Error(`Unsupported file action: ${String(action)}`);
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
