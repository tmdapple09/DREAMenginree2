import { assertCodeEnginAccess } from '@/lib/codeengin/auth';
import { safeErrorMessage } from '@/lib/codeengin/pathSafety';
import { listRunnerCommands, runCodeEnginCommand } from '@/lib/codeengin/runner';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  try { await assertCodeEnginAccess(request); return NextResponse.json({ ok: true, commands: listRunnerCommands() }); }
  catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 403 }); }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const body = (await request.json()) as { workspaceId?: string; command?: string };
    if (!body.workspaceId) throw new Error('Missing workspaceId. Commands only run inside an owned user workspace.');
    if (!body.command) throw new Error('Missing command id.');
    const result = await runCodeEnginCommand(body.workspaceId, user.id, body.command);
    return NextResponse.json({ ok: true, result });
  } catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 }); }
}
