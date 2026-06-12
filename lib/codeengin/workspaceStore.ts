import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { assertSafeProjectPath, CODEENGIN_ALLOWED_ROOTS, CODEENGIN_BLOCKED_SEGMENTS, getCodeEnginProjectRoot, isLikelyEditableFile, normalizeProjectPath } from './pathSafety';
import type { CodeEnginFileNode, CodeEnginFileRecord, CodeEnginWorkspaceOverview } from './types';

const MAX_FILE_BYTES = Number(process.env.CODEENGIN_MAX_FILE_BYTES ?? 500_000);
const MAX_TREE_DEPTH = Number(process.env.CODEENGIN_MAX_TREE_DEPTH ?? 7);
const MAX_TREE_NODES = Number(process.env.CODEENGIN_MAX_TREE_NODES ?? 3000);

let treeNodeBudget = MAX_TREE_NODES;

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

function toPosix(input: string): string {
  return input.replace(/\\/g, '/');
}

async function exists(absPath: string): Promise<boolean> {
  try {
    await fs.access(absPath);
    return true;
  } catch {
    return false;
  }
}

async function fileNode(absPath: string, relPath: string): Promise<CodeEnginFileNode | null> {
  const stat = await fs.stat(absPath);
  if (stat.isDirectory()) {
    return null;
  }
  if (!isLikelyEditableFile(relPath)) {
    return null;
  }
  return {
    name: path.basename(relPath),
    type: 'file',
    path: toPosix(relPath),
    sizeBytes: stat.size,
    updatedAt: stat.mtime.toISOString(),
  };
}

async function buildTree(absDir: string, relDir: string, depth: number): Promise<CodeEnginFileNode[]> {
  if (depth > MAX_TREE_DEPTH || treeNodeBudget <= 0) return [];

  let entries: Awaited<ReturnType<typeof fs.readdir>>;
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const nodes: CodeEnginFileNode[] = [];

  for (const entry of entries) {
    if (treeNodeBudget <= 0) break;
    if (entry.name.startsWith('.') || CODEENGIN_BLOCKED_SEGMENTS.has(entry.name)) continue;

    const childRel = relDir ? `${relDir}/${entry.name}` : entry.name;
    const childAbs = path.join(absDir, entry.name);

    if (entry.isDirectory()) {
      treeNodeBudget -= 1;
      nodes.push({
        name: entry.name,
        type: 'directory',
        path: toPosix(childRel),
        children: await buildTree(childAbs, childRel, depth + 1),
      });
      continue;
    }

    if (entry.isFile() && isLikelyEditableFile(childRel)) {
      const node = await fileNode(childAbs, childRel);
      if (node) {
        treeNodeBudget -= 1;
        nodes.push(node);
      }
    }
  }

  return nodes.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'directory' ? -1 : 1;
    return a.path.localeCompare(b.path);
  });
}

export async function getWorkspaceOverview(): Promise<CodeEnginWorkspaceOverview> {
  const root = getCodeEnginProjectRoot();
  treeNodeBudget = MAX_TREE_NODES;

  const tree: CodeEnginFileNode[] = [];
  for (const top of CODEENGIN_ALLOWED_ROOTS) {
    const abs = path.join(root, top);
    if (!(await exists(abs))) continue;
    tree.push({
      name: top,
      type: 'directory',
      path: top,
      children: await buildTree(abs, top, 0),
    });
  }

  for (const rootFile of ['package.json', 'tsconfig.json', 'next.config.mjs', 'next-env.d.ts']) {
    const { absPath, relPath } = assertSafeProjectPath(rootFile);
    if (await exists(absPath)) {
      const node = await fileNode(absPath, relPath);
      if (node) tree.unshift(node);
    }
  }

  const countFiles = (nodes: CodeEnginFileNode[]): number => nodes.reduce((sum, node) => sum + (node.type === 'file' ? 1 : countFiles(node.children ?? [])), 0);

  return {
    root,
    tree: tree.sort((a, b) => {
      if (a.type !== b.type) return a.type === 'directory' ? 1 : -1;
      return a.path.localeCompare(b.path);
    }),
    fileCount: countFiles(tree),
    generatedAt: new Date().toISOString(),
  };
}

export async function readProjectFile(filePath: string): Promise<CodeEnginFileRecord> {
  const safe = assertSafeProjectPath(filePath);
  const stat = await fs.stat(safe.absPath);
  if (!stat.isFile()) throw new Error('Requested path is not a file.');
  if (stat.size > MAX_FILE_BYTES) throw new Error(`File is too large for IDE read (${stat.size} bytes).`);
  const content = await fs.readFile(safe.absPath, 'utf-8');
  return {
    path: safe.relPath,
    content,
    sizeBytes: stat.size,
    updatedAt: stat.mtime.toISOString(),
    sha256: sha256(content),
  };
}

export async function writeProjectFile(filePath: string, content: string): Promise<CodeEnginFileRecord> {
  const safe = assertSafeProjectPath(filePath);
  await fs.mkdir(path.dirname(safe.absPath), { recursive: true });
  await fs.writeFile(safe.absPath, content, 'utf-8');
  return readProjectFile(safe.relPath);
}

export async function createProjectFile(filePath: string, content = ''): Promise<CodeEnginFileRecord> {
  const safe = assertSafeProjectPath(filePath);
  if (await exists(safe.absPath)) throw new Error('File already exists.');
  return writeProjectFile(safe.relPath, content);
}

export async function deleteProjectFile(filePath: string): Promise<{ path: string; deleted: true }> {
  const safe = assertSafeProjectPath(filePath);
  const stat = await fs.stat(safe.absPath);
  if (!stat.isFile()) throw new Error('Only files can be deleted through CodeEngin.');
  await fs.unlink(safe.absPath);
  return { path: safe.relPath, deleted: true };
}

export async function moveProjectFile(fromPath: string, toPath: string): Promise<CodeEnginFileRecord> {
  const from = assertSafeProjectPath(fromPath);
  const to = assertSafeProjectPath(toPath);
  if (!(await exists(from.absPath))) throw new Error('Source file does not exist.');
  await fs.mkdir(path.dirname(to.absPath), { recursive: true });
  await fs.rename(from.absPath, to.absPath);
  return readProjectFile(to.relPath);
}

export async function listEditableFiles(startPath = ''): Promise<string[]> {
  const safe = assertSafeProjectPath(startPath, { allowDirectory: true });
  const files: string[] = [];

  async function walk(absDir: string, relDir: string, depth: number): Promise<void> {
    if (depth > MAX_TREE_DEPTH || files.length >= MAX_TREE_NODES) return;
    let entries: Awaited<ReturnType<typeof fs.readdir>>;
    try {
      entries = await fs.readdir(absDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith('.') || CODEENGIN_BLOCKED_SEGMENTS.has(entry.name)) continue;
      const rel = normalizeProjectPath(relDir ? `${relDir}/${entry.name}` : entry.name);
      const abs = path.join(absDir, entry.name);
      if (entry.isDirectory()) {
        await walk(abs, rel, depth + 1);
      } else if (entry.isFile() && isLikelyEditableFile(rel)) {
        files.push(rel);
      }
    }
  }

  const stat = await fs.stat(safe.absPath).catch(() => null);
  if (!stat) return [];
  if (stat.isFile()) return [safe.relPath];
  await walk(safe.absPath, safe.relPath, 0);
  return files.sort((a, b) => a.localeCompare(b));
}
