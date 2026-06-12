import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { createProjectFile, deleteProjectFile, moveProjectFile, readProjectFile, writeProjectFile } from '@/lib/codeengin/workspaceStore';
import { NextResponse } from 'next/server';

type FileBody = {
  action?: 'read' | 'write' | 'create' | 'delete' | 'move';
  path?: string;
  fromPath?: string;
  toPath?: string;
  content?: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await assertCodeEnginAccess(request);
    const body = (await request.json()) as FileBody;
    const action = body.action ?? 'read';

    if (action === 'read') {
      if (!body.path) throw new Error('Missing file path.');
      return NextResponse.json({ ok: true, file: await readProjectFile(body.path) });
    }

    if (action === 'write') {
      if (!body.path) throw new Error('Missing file path.');
      return NextResponse.json({ ok: true, file: await writeProjectFile(body.path, body.content ?? '') });
    }

    if (action === 'create') {
      if (!body.path) throw new Error('Missing file path.');
      return NextResponse.json({ ok: true, file: await createProjectFile(body.path, body.content ?? '') });
    }

    if (action === 'delete') {
      if (!body.path) throw new Error('Missing file path.');
      return NextResponse.json({ ok: true, result: await deleteProjectFile(body.path) });
    }

    if (action === 'move') {
      if (!body.fromPath || !body.toPath) throw new Error('Missing source or destination path.');
      return NextResponse.json({ ok: true, file: await moveProjectFile(body.fromPath, body.toPath) });
    }

    throw new Error(`Unsupported file action: ${String(action)}`);
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  }
}
