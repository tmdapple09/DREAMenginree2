import {
    isAdminLocked,
    isDomainBlocked,
    isOwner,
    triggerAdminLockout,
} from '@/engine/admin/lockout';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';





const ALLOWED_TOP_DIRS = ['app', 'components', 'lib', 'hooks', 'types', 'styles'] as const;
type AllowedTopDir = (typeof ALLOWED_TOP_DIRS)[number];
const ALLOWED_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.md', '.mjs', '.cjs']);
const BLOCKED_SEGMENTS = new Set(['node_modules', '.git', '.next', 'dist', 'out', '__pycache__']);

export interface FileNode {
  name: string;
  type: 'file' | 'dir';
  path: string;
  children?: FileNode[];
}

async function buildTree(absDir: string, root: string, depth = 0): Promise<FileNode[]> {
  if (depth > 5) return [];
  let entries;
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true });
  } catch {
    return [];
  }
  const nodes: FileNode[] = [];
  for (const e of entries) {
    if (e.name.startsWith('.') || BLOCKED_SEGMENTS.has(e.name)) continue;
    const abs = path.join( absDir, e.name);
    const rel = path.relative(root, abs);
    if (e.isDirectory()) {
      nodes.push({ name: e.name, type: 'dir', path: rel, children: await buildTree(abs, root, depth + 1) });
    } else if (ALLOWED_EXTENSIONS.has(path.extname(e.name))) {
      nodes.push({ name: e.name, type: 'file', path: rel });
    }
  }
  return nodes.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function allowedRoot(topDir: AllowedTopDir): string {
  switch (topDir) {
    case 'app':
      return path.join( process.cwd(), 'app');
    case 'components':
      return path.join( process.cwd(), 'components');
    case 'lib':
      return path.join( process.cwd(), 'lib');
    case 'hooks':
      return path.join( process.cwd(), 'hooks');
    case 'types':
      return path.join( process.cwd(), 'types');
    case 'styles':
      return path.join( process.cwd(), 'styles');
  }
}

function resolveAllowedFile(relPath: string): { abs: string; rel: string } | null {
  if (path.isAbsolute(relPath)) return null;
  const normalized = path.normalize(relPath).replaceAll(path.sep, '/');
  if (normalized === '.' || normalized.startsWith('../') || normalized.includes('/../')) return null;

  const segments = normalized.split('/').filter(Boolean);
  const topDir = segments[0] as AllowedTopDir | undefined;
  if (!topDir || !ALLOWED_TOP_DIRS.includes(topDir)) return null;
  if (segments.some((s) => s === '..' || BLOCKED_SEGMENTS.has(s))) return null;
  if (!ALLOWED_EXTENSIONS.has(path.extname(normalized))) return null;

  return {
    abs: path.join(allowedRoot(topDir), ...segments.slice(1)),
    rel: segments.join('/'),
  };
}

function deny(msg: string, status: number): NextResponse {
  return NextResponse.json({ error: msg }, { status });
}

export async function POST(request: Request ): Promise<NextResponse> {
  
  if (isDomainBlocked(request)) {
    return deny('Access denied.', 403);
  }

  
  if (await isAdminLocked()) {
    return deny('Access permanently locked. Edit repository configuration to reset.', 403);
  }

  
  try {
    const supabase = await createServerClient();
    const user = await safeGetUser(supabase);
    const email = user?.email ?? '';
    if (!isOwner(email)) {
      
      return deny('Access denied.', 403);
    }
  } catch {
    return deny('Authentication error.', 401);
  }

  
  let body: { password?: string; action?: string; filePath?: string };
  try {
    body = await request.json();
  } catch {
    return deny('Invalid request body.', 400);
  }

  
  const adminPw = process.env.IDARI_PASSWORD;
  if (!adminPw) {
    return deny('Admin feature not configured on this server.', 503);
  }
  if (!body.password || body.password !== adminPw) {
    
    await triggerAdminLockout();
    
    return deny('Incorrect password.', 401);
  }

  const root = process.cwd();

  
  if (body.action === 'tree') {
    const tree: FileNode[] = [];
    for (const dir of ALLOWED_TOP_DIRS) {
      const abs = allowedRoot(dir);
      try {
        await fs.access(abs);
        tree.push({ name: dir, type: 'dir', path: dir, children: await buildTree(abs, root) });
      } catch {
        
      }
    }
    return NextResponse.json({ tree });
  }

  
  if (body.action === 'read' && body.filePath) {
    const safeFile = resolveAllowedFile(body.filePath);
    if (!safeFile) {
      return deny('Access denied.', 403);
    }
    try {
      const raw = await fs.readFile(safeFile.abs, 'utf-8');
      if (raw.length > 200_000) {
        return deny('File too large to display (> 200 KB).', 413);
      }
      return NextResponse.json({ content: raw, path: safeFile.rel });
    } catch {
      return deny('Could not read file.', 404);
    }
  }

  return deny('Unknown action.', 400);
}
