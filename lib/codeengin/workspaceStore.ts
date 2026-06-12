import { createHash, randomUUID } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { assertSafeWorkspacePath, assertValidWorkspaceId, CODEENGIN_BLOCKED_SEGMENTS, getCodeEnginWorkspacesRoot, getWorkspaceRoot, isLikelyEditableFile, normalizeProjectPath } from './pathSafety';
import type { CodeEnginFileNode, CodeEnginFileRecord, CodeEnginWorkspaceMeta, CodeEnginWorkspaceOverview } from './types';

const MAX_FILE_BYTES = Number(process.env.CODEENGIN_MAX_FILE_BYTES ?? 500_000);
const MAX_TREE_DEPTH = Number(process.env.CODEENGIN_MAX_TREE_DEPTH ?? 8);
const MAX_TREE_NODES = Number(process.env.CODEENGIN_MAX_TREE_NODES ?? 4000);
const MANIFEST_NAME = '.codeengin-workspace.json';

let treeNodeBudget = MAX_TREE_NODES;

function sha256(content: string): string { return createHash('sha256').update(content).digest('hex'); }
function toPosix(input: string): string { return input.replace(/\\/g, '/'); }
async function exists(absPath: string): Promise<boolean> { try { await fs.access(absPath); return true; } catch { return false; } }
function nowIso(): string { return new Date().toISOString(); }
function manifestPath(workspaceId: string): string { return path.join(getCodeEnginWorkspacesRoot(), assertValidWorkspaceId(workspaceId), MANIFEST_NAME); }

async function writeManifest(meta: CodeEnginWorkspaceMeta): Promise<void> {
  await fs.mkdir(path.dirname(manifestPath(meta.id)), { recursive: true });
  await fs.writeFile(manifestPath(meta.id), JSON.stringify(meta, null, 2), 'utf-8');
}

export async function createCodeEnginWorkspace(ownerId: string, name = 'Untitled Project'): Promise<CodeEnginWorkspaceMeta> {
  const id = randomUUID();
  const root = getWorkspaceRoot(id);
  const createdAt = nowIso();
  const meta: CodeEnginWorkspaceMeta = { id, ownerId, name: name.trim() || 'Untitled Project', root, createdAt, updatedAt: createdAt };
  await fs.mkdir(root, { recursive: true });
  await fs.mkdir(path.join(root, 'app'), { recursive: true });
  await fs.mkdir(path.join(root, 'components'), { recursive: true });
  await fs.mkdir(path.join(root, 'lib'), { recursive: true });
  await fs.writeFile(path.join(root, 'package.json'), JSON.stringify({ scripts: { build: 'next build', typecheck: 'tsc --noEmit', lint: 'next lint', test: 'echo "No tests yet"' }, dependencies: {} }, null, 2), 'utf-8');
  await fs.writeFile(path.join(root, 'app/page.tsx'), 'export default function Page() {\n  return <main>DREAMengin project</main>;\n}\n', 'utf-8');
  await fs.writeFile(path.join(root, 'components/DreamButton.tsx'), 'export default function DreamButton({ label }: { label: string }) {\n  return <button type="button">{label}</button>;\n}\n', 'utf-8');
  await writeManifest(meta);
  return meta;
}

export async function getWorkspaceMeta(workspaceId: string, ownerId: string): Promise<CodeEnginWorkspaceMeta> {
  const id = assertValidWorkspaceId(workspaceId);
  const raw = await fs.readFile(manifestPath(id), 'utf-8').catch(() => '');
  if (!raw) throw new Error('Workspace not found. Create or upload a project first.');
  const meta = JSON.parse(raw) as CodeEnginWorkspaceMeta;
  if (meta.ownerId !== ownerId) throw new Error('Workspace does not belong to this user.');
  return { ...meta, root: getWorkspaceRoot(id) };
}

async function touchWorkspace(meta: CodeEnginWorkspaceMeta): Promise<void> {
  await writeManifest({ ...meta, updatedAt: nowIso() });
}

async function fileNode(absPath: string, relPath: string): Promise<CodeEnginFileNode | null> {
  const stat = await fs.stat(absPath);
  if (stat.isDirectory() || !isLikelyEditableFile(relPath)) return null;
  return { name: path.basename(relPath), type: 'file', path: toPosix(relPath), sizeBytes: stat.size, updatedAt: stat.mtime.toISOString() };
}

async function buildTree(absDir: string, relDir: string, depth: number): Promise<CodeEnginFileNode[]> {
  if (depth > MAX_TREE_DEPTH || treeNodeBudget <= 0) return [];
  let entries: Awaited<ReturnType<typeof fs.readdir>>;
  try { entries = await fs.readdir(absDir, { withFileTypes: true }); } catch { return []; }
  const nodes: CodeEnginFileNode[] = [];
  for (const entry of entries) {
    if (treeNodeBudget <= 0) break;
    if (entry.name.startsWith('.') || CODEENGIN_BLOCKED_SEGMENTS.has(entry.name)) continue;
    const childRel = relDir ? `${relDir}/${entry.name}` : entry.name;
    const childAbs = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      treeNodeBudget -= 1;
      nodes.push({ name: entry.name, type: 'directory', path: toPosix(childRel), children: await buildTree(childAbs, childRel, depth + 1) });
    } else if (entry.isFile() && isLikelyEditableFile(childRel)) {
      const node = await fileNode(childAbs, childRel);
      if (node) { treeNodeBudget -= 1; nodes.push(node); }
    }
  }
  return nodes.sort((a, b) => a.type !== b.type ? (a.type === 'directory' ? -1 : 1) : a.path.localeCompare(b.path));
}

export async function getWorkspaceOverview(workspaceId: string, ownerId: string): Promise<CodeEnginWorkspaceOverview> {
  const meta = await getWorkspaceMeta(workspaceId, ownerId);
  treeNodeBudget = MAX_TREE_NODES;
  const tree = await buildTree(meta.root, '', 0);
  const countFiles = (nodes: CodeEnginFileNode[]): number => nodes.reduce((sum, node) => sum + (node.type === 'file' ? 1 : countFiles(node.children ?? [])), 0);
  return { workspace: { id: meta.id, name: meta.name, createdAt: meta.createdAt, updatedAt: meta.updatedAt }, tree, fileCount: countFiles(tree), generatedAt: nowIso() };
}

export async function readProjectFile(workspaceId: string, ownerId: string, filePath: string): Promise<CodeEnginFileRecord> {
  await getWorkspaceMeta(workspaceId, ownerId);
  const safe = assertSafeWorkspacePath(workspaceId, filePath);
  const stat = await fs.stat(safe.absPath);
  if (!stat.isFile()) throw new Error('Requested path is not a file.');
  if (stat.size > MAX_FILE_BYTES) throw new Error(`File is too large for IDE read (${stat.size} bytes).`);
  const content = await fs.readFile(safe.absPath, 'utf-8');
  return { path: safe.relPath, content, sizeBytes: stat.size, updatedAt: stat.mtime.toISOString(), sha256: sha256(content) };
}

export async function writeProjectFile(workspaceId: string, ownerId: string, filePath: string, content: string): Promise<CodeEnginFileRecord> {
  const meta = await getWorkspaceMeta(workspaceId, ownerId);
  const safe = assertSafeWorkspacePath(workspaceId, filePath);
  await fs.mkdir(path.dirname(safe.absPath), { recursive: true });
  await fs.writeFile(safe.absPath, content, 'utf-8');
  await touchWorkspace(meta);
  return readProjectFile(workspaceId, ownerId, safe.relPath);
}

export async function createProjectFile(workspaceId: string, ownerId: string, filePath: string, content = ''): Promise<CodeEnginFileRecord> {
  await getWorkspaceMeta(workspaceId, ownerId);
  const safe = assertSafeWorkspacePath(workspaceId, filePath);
  if (await exists(safe.absPath)) throw new Error('File already exists.');
  return writeProjectFile(workspaceId, ownerId, safe.relPath, content);
}

export async function deleteProjectFile(workspaceId: string, ownerId: string, filePath: string): Promise<{ path: string; deleted: true }> {
  const meta = await getWorkspaceMeta(workspaceId, ownerId);
  const safe = assertSafeWorkspacePath(workspaceId, filePath);
  const stat = await fs.stat(safe.absPath);
  if (!stat.isFile()) throw new Error('Only files can be deleted through CodeEngin.');
  await fs.unlink(safe.absPath);
  await touchWorkspace(meta);
  return { path: safe.relPath, deleted: true };
}

export async function moveProjectFile(workspaceId: string, ownerId: string, fromPath: string, toPath: string): Promise<CodeEnginFileRecord> {
  const meta = await getWorkspaceMeta(workspaceId, ownerId);
  const from = assertSafeWorkspacePath(workspaceId, fromPath);
  const to = assertSafeWorkspacePath(workspaceId, toPath);
  if (!(await exists(from.absPath))) throw new Error('Source file does not exist.');
  await fs.mkdir(path.dirname(to.absPath), { recursive: true });
  await fs.rename(from.absPath, to.absPath);
  await touchWorkspace(meta);
  return readProjectFile(workspaceId, ownerId, to.relPath);
}

export async function listEditableFiles(workspaceId: string, ownerId: string, startPath = ''): Promise<string[]> {
  await getWorkspaceMeta(workspaceId, ownerId);
  const safe = assertSafeWorkspacePath(workspaceId, startPath, { allowDirectory: true, allowMissingExtension: true });
  const files: string[] = [];
  async function walk(absDir: string, relDir: string, depth: number): Promise<void> {
    if (depth > MAX_TREE_DEPTH || files.length >= MAX_TREE_NODES) return;
    let entries: Awaited<ReturnType<typeof fs.readdir>>;
    try { entries = await fs.readdir(absDir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      if (entry.name.startsWith('.') || CODEENGIN_BLOCKED_SEGMENTS.has(entry.name)) continue;
      const rel = normalizeProjectPath(relDir ? `${relDir}/${entry.name}` : entry.name);
      const abs = path.join(absDir, entry.name);
      if (entry.isDirectory()) await walk(abs, rel, depth + 1);
      else if (entry.isFile() && isLikelyEditableFile(rel)) files.push(rel);
    }
  }
  const stat = await fs.stat(safe.absPath).catch(() => null);
  if (!stat) return [];
  if (stat.isFile()) return [safe.relPath];
  await walk(safe.absPath, safe.relPath, 0);
  return files.sort((a, b) => a.localeCompare(b));
}
