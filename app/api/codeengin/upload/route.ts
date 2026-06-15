import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { createCodeEnginWorkspace, getWorkspaceOverview } from '@/engins/codeengin/workspaceStore';
import { NextResponse } from 'next/server';

function unzipArchive(zipPath: string, destination: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn('unzip', ['-q', zipPath, '-d', destination], { shell: false });
    let stderr = '';
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve() : reject(new Error(stderr || `unzip exited with ${code}`)));
  });
}

async function flattenSingleRootFolder(projectRoot: string): Promise<void> {
  const entries = await fs.readdir(projectRoot, { withFileTypes: true });
  const visible = entries.filter((entry) => !entry.name.startsWith('.'));
  if (visible.length !== 1 || !visible[0].isDirectory()) return;
  const nested = path.join(projectRoot, visible[0].name);
  const nestedEntries = await fs.readdir(nested);
  for (const entry of nestedEntries) await fs.rename(path.join(nested, entry), path.join(projectRoot, entry));
  await fs.rm(nested, { recursive: true, force: true });
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const user = await assertCodeEnginAccess(request);
    const form = await request.formData();
    const file = form.get('repoZip');
    const name = String(form.get('name') || 'Uploaded Project');
    if (!(file instanceof File)) throw new Error('Upload a repoZip file.');
    if (!file.name.toLowerCase().endsWith('.zip')) throw new Error('Only .zip workspaces are accepted.');
    const maxBytes = Number(process.env.CODEENGIN_MAX_UPLOAD_BYTES ?? 50_000_000);
    if (file.size > maxBytes) throw new Error(`Workspace ZIP is too large (${file.size} bytes).`);
    const workspace = await createCodeEnginWorkspace(user.id, name || file.name.replace(/\.zip$/i, ''));
    await fs.rm(workspace.root, { recursive: true, force: true });
    await fs.mkdir(workspace.root, { recursive: true });
    const zipPath = path.join(path.dirname(workspace.root), 'upload.zip');
    await fs.writeFile(zipPath, Buffer.from(await file.arrayBuffer()));
    await unzipArchive(zipPath, workspace.root);
    await fs.rm(zipPath, { force: true });
    await flattenSingleRootFolder(workspace.root);
    const overview = await getWorkspaceOverview(workspace.id, user.id);
    return NextResponse.json({ ok: true, workspace, overview });
  } catch (error: unknown) { return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 }); }
}
