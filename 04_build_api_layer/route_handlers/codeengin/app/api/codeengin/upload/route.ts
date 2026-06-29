
import { spawn } from 'child_process';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { assertCodeEnginAccess } from '@/engins/codeengin/auth';
import { CODEENGIN_BLOCKED_SEGMENTS, isLikelyEditableFile, normalizeProjectPath, safeErrorMessage } from '@/engins/codeengin/pathSafety';
import { createCodeEnginWorkspace, getWorkspaceOverview } from '@/engins/codeengin/workspaceStore';
import { NextResponse } from 'next/server';

const MAX_ZIP_ENTRIES = Number(process.env.CODEENGIN_MAX_ZIP_ENTRIES ?? 8000);
const MAX_EXTRACTED_FILES = Number(process.env.CODEENGIN_MAX_EXTRACTED_FILES ?? 5000);
const MAX_EXTRACTED_BYTES = Number(process.env.CODEENGIN_MAX_EXTRACTED_BYTES ?? 80_000_000);
const MAX_ENTRY_PATH_CHARS = Number(process.env.CODEENGIN_MAX_ENTRY_PATH_CHARS ?? 260);

function runUnzip(args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn('unzip', args, { shell: false });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on('data', (data: Buffer) => { stderr += data.toString(); });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve(stdout) : reject(new Error(stderr || stdout || `unzip exited with ${code}`)));
  });
}

async function listZipEntries(zipPath: string): Promise<string[]> {
  const stdout = await runUnzip(['-Z1', zipPath]);
  return stdout.split('\n').map((line) => line.trim()).filter(Boolean);
}

function assertSafeZipEntry(entry: string): void {
  if (!entry || entry.length > MAX_ENTRY_PATH_CHARS) throw new Error('Workspace ZIP contains an invalid or oversized path.');
  if (entry.includes('\0') || entry.includes('\\')) throw new Error('Workspace ZIP contains a blocked path separator.');
  if (entry.startsWith('/') || /^[A-Za-z]:/.test(entry)) throw new Error('Workspace ZIP contains an absolute path.');
  const normalized = normalizeProjectPath(entry.replace(/\/+$/, ''));
  if (!normalized) return;
  if (normalized === '..' || normalized.startsWith('../') || normalized.includes('/../')) throw new Error('Workspace ZIP contains path traversal.');
  const segments = normalized.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '..' || CODEENGIN_BLOCKED_SEGMENTS.has(segment) || segment.includes(':'))) throw new Error('Workspace ZIP contains blocked workspace path segments.');
}

async function unzipArchive(zipPath: string, destination: string): Promise<void> {
  const entries = await listZipEntries(zipPath);
  if (entries.length > MAX_ZIP_ENTRIES) throw new Error(`Workspace ZIP has too many entries (${entries.length}).`);
  for (const entry of entries) assertSafeZipEntry(entry);
  await runUnzip(['-qq', zipPath, '-d', destination]);
}

async function flattenSingleRootFolder(projectRoot: string): Promise<void> {
  const entries = await fs.readdir(projectRoot, { withFileTypes: true });
  const visible = entries.filter((entry) => !entry.name.startsWith('.'));
  if (visible.length !== 1 || !visible[0].isDirectory()) return;
  const nested = path.join(projectRoot, visible[0].name);
  const nestedEntries = await fs.readdir(nested);
  for (const entry of nestedEntries) {
    if (entry.startsWith('.') || CODEENGIN_BLOCKED_SEGMENTS.has(entry)) continue;
    await fs.rename(path.join(nested, entry), path.join(projectRoot, entry));
  }
  await fs.rm(nested, { recursive: true, force: true });
}

async function sanitizeExtractedWorkspace(projectRoot: string): Promise<void> {
  let fileCount = 0;
  let totalBytes = 0;
  async function walk(absDir: string, relDir: string, depth: number): Promise<void> {
    if (depth > 12) throw new Error('Workspace ZIP nesting is too deep.');
    const entries = await fs.readdir(absDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') && entry.name !== '.env.example' && entry.name !== '.gitignore') {
        await fs.rm(path.join(absDir, entry.name), { recursive: true, force: true });
        continue;
      }
      if (CODEENGIN_BLOCKED_SEGMENTS.has(entry.name)) {
        await fs.rm(path.join(absDir, entry.name), { recursive: true, force: true });
        continue;
      }
      const rel = normalizeProjectPath(relDir ? `${relDir}/${entry.name}` : entry.name);
      const abs = path.join(absDir, entry.name);
      const stat = await fs.lstat(abs);
      if (stat.isSymbolicLink()) throw new Error('Workspace ZIP contains a symlink; CodeEngin workspaces must be regular files/directories.');
      if (stat.isDirectory()) {
        await walk(abs, rel, depth + 1);
      } else if (stat.isFile()) {
        fileCount += 1;
        totalBytes += stat.size;
        if (fileCount > MAX_EXTRACTED_FILES) throw new Error(`Workspace ZIP has too many files (${fileCount}).`);
        if (totalBytes > MAX_EXTRACTED_BYTES) throw new Error(`Workspace ZIP extracts too much data (${totalBytes} bytes).`);
        if (!isLikelyEditableFile(rel)) await fs.rm(abs, { force: true });
      } else {
        await fs.rm(abs, { force: true });
      }
    }
  }
  await walk(projectRoot, '', 0);
}

export async function POST(request: Request): Promise<NextResponse> {
  let tempDir = '';
  try {
    const user = await assertCodeEnginAccess(request);
    const form = await request.formData();
    const file = form.get('repoZip');
    const name = String(form.get('name') || 'Uploaded Project').trim().slice(0, 120) || 'Uploaded Project';
    if (!(file instanceof File)) throw new Error('Upload a repoZip file.');
    if (!file.name.toLowerCase().endsWith('.zip')) throw new Error('Only .zip workspaces are accepted.');
    const maxBytes = Number(process.env.CODEENGIN_MAX_UPLOAD_BYTES ?? 50_000_000);
    if (file.size <= 0) throw new Error('Workspace ZIP is empty.');
    if (file.size > maxBytes) throw new Error(`Workspace ZIP is too large (${file.size} bytes).`);

    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'codeengin-upload-'));
    const zipPath = path.join(tempDir, 'upload.zip');
    await fs.writeFile(zipPath, Buffer.from(await file.arrayBuffer()));

    const workspace = await createCodeEnginWorkspace(user.id, name || file.name.replace(/\.zip$/i, ''));
    await fs.rm(workspace.root, { recursive: true, force: true });
    await fs.mkdir(workspace.root, { recursive: true });
    await unzipArchive(zipPath, workspace.root);
    await flattenSingleRootFolder(workspace.root);
    await sanitizeExtractedWorkspace(workspace.root);

    const overview = await getWorkspaceOverview(workspace.id, user.id);
    return NextResponse.json({ ok: true, workspace, overview });
  } catch (error: unknown) {
    return NextResponse.json({ ok: false, error: safeErrorMessage(error) }, { status: 400 });
  } finally {
    if (tempDir) await fs.rm(tempDir, { recursive: true, force: true }).catch(() => undefined);
  }
}
