import path from 'path';

export const CODEENGIN_ALLOWED_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css', '.md', '.mdx', '.html', '.yml', '.yaml', '.sh', '.py', '.sql', '.wgsl', '.txt', '.env.example',
]);

export const CODEENGIN_BLOCKED_SEGMENTS = new Set([
  '.git', 'node_modules', '.next', 'out', 'dist', 'build', 'coverage', '.vercel', '.turbo', '.cache', '.pnpm-store', '.yarn', '__pycache__', '.pytest_cache', '.mypy_cache', '.ruff_cache', 'playwright-report', 'test-results',
]);

export function getCodeEnginWorkspacesRoot(): string {
  return path.resolve(process.env.CODEENGIN_WORKSPACES_ROOT ?? path.join(process.cwd(), '.codeengin-workspaces'));
}

export function assertValidWorkspaceId(workspaceId: string | null | undefined): string {
  const value = String(workspaceId ?? '').trim();
  if (!/^[A-Za-z0-9_-]{8,80}$/.test(value)) {
    throw new Error('Missing or invalid CodeEngin workspaceId. Upload or create a project before opening files.');
  }
  return value;
}

export function getWorkspaceRoot(workspaceId: string): string {
  const id = assertValidWorkspaceId(workspaceId);
  return path.join(getCodeEnginWorkspacesRoot(), id, 'project');
}

export function normalizeProjectPath(input = ''): string {
  const trimmed = input.replace(/\\/g, '/').trim().replace(/^\/+/, '');
  const normalized = path.posix.normalize(trimmed || '.');
  return normalized === '.' ? '' : normalized;
}

export function assertSafeWorkspacePath(workspaceId: string, input = '', options: { allowDirectory?: boolean; allowMissingExtension?: boolean } = {}): { root: string; workspaceId: string; relPath: string; absPath: string } {
  if (path.isAbsolute(input)) throw new Error('Absolute paths are not allowed.');
  const id = assertValidWorkspaceId(workspaceId);
  const root = getWorkspaceRoot(id);
  const relPath = normalizeProjectPath(input);
  if (relPath.startsWith('../') || relPath === '..' || relPath.includes('/../')) throw new Error('Path traversal is not allowed.');
  const segments = relPath.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '..' || CODEENGIN_BLOCKED_SEGMENTS.has(segment))) throw new Error('Blocked workspace path segment.');
  if (!options.allowDirectory && relPath) {
    const ext = path.extname(relPath);
    if (!ext && !options.allowMissingExtension) throw new Error('Files must include an extension.');
    if (ext && !CODEENGIN_ALLOWED_EXTENSIONS.has(ext)) throw new Error(`File extension ${ext} is not editable in CodeEngin.`);
  }
  const absPath = path.resolve(root, relPath || '.');
  const relativeFromRoot = path.relative(root, absPath);
  if (relativeFromRoot.startsWith('..') || path.isAbsolute(relativeFromRoot)) throw new Error('Resolved path escaped the user workspace.');
  return { root, workspaceId: id, relPath, absPath };
}

export function isLikelyEditableFile(relPath: string): boolean {
  const normalized = normalizeProjectPath(relPath);
  if (!normalized) return false;
  const segments = normalized.split('/').filter(Boolean);
  if (segments.some((segment) => CODEENGIN_BLOCKED_SEGMENTS.has(segment))) return false;
  const ext = path.extname(normalized);
  if (!ext) return false;
  return CODEENGIN_ALLOWED_EXTENSIONS.has(ext);
}

export function safeErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
