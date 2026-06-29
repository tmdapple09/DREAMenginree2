
import path from 'path';

export const CODEENGIN_ALLOWED_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css', '.md', '.mdx', '.html', '.yml', '.yaml', '.sh', '.py', '.sql', '.wgsl', '.txt', '.toml', '.example',
]);

export const CODEENGIN_ALLOWED_FILENAMES = new Set([
  '.env.example', '.gitignore', '.npmrc', '.nvmrc', 'Dockerfile', 'Makefile', 'LICENSE', 'README', 'README.md',
]);

export const CODEENGIN_BLOCKED_SEGMENTS = new Set([
  '.git', 'node_modules', '.next', 'out', 'dist', 'build', 'coverage', '.vercel', '.turbo', '.cache', '.pnpm-store', '.yarn', '__pycache__', '.pytest_cache', '.mypy_cache', '.ruff_cache', 'playwright-report', 'test-results', '.ssh', '.aws', '.config',
]);

const MAX_PATH_CHARS = Number(process.env.CODEENGIN_MAX_PATH_CHARS ?? 260);
const MAX_SEGMENT_CHARS = Number(process.env.CODEENGIN_MAX_SEGMENT_CHARS ?? 96);

export function getCodeEnginWorkspacesRoot(): string {
  const configuredRoot = process.env.CODEENGIN_WORKSPACES_ROOT?.trim();
  if (configuredRoot) return path.resolve(/*turbopackIgnore: true*/ configuredRoot);
  return path.join(process.cwd(), '.codeengin-workspaces');
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
  const withoutNul = input.replace(/\0/g, '');
  const trimmed = withoutNul.replace(/\\/g, '/').trim().replace(/^\/+/, '');
  const normalized = path.posix.normalize(trimmed || '.');
  return normalized === '.' ? '' : normalized;
}

function assertSafeSegments(relPath: string): void {
  if (relPath.length > MAX_PATH_CHARS) throw new Error('Workspace path is too long.');
  const segments = relPath.split('/').filter(Boolean);
  for (const segment of segments) {
    if (segment.length > MAX_SEGMENT_CHARS) throw new Error('Workspace path segment is too long.');
    if (segment === '..' || CODEENGIN_BLOCKED_SEGMENTS.has(segment)) throw new Error('Blocked workspace path segment.');
    if (/^[A-Za-z]:$/.test(segment) || segment.includes(':')) throw new Error('Drive letters and colon path segments are not allowed.');
  }
}

export function isAllowedCodeEnginFileName(relPath: string): boolean {
  const normalized = normalizeProjectPath(relPath);
  if (!normalized) return false;
  const basename = path.posix.basename(normalized);
  if (CODEENGIN_ALLOWED_FILENAMES.has(basename)) return true;
  if (basename.endsWith('.env.example')) return true;
  const ext = path.extname(normalized);
  return Boolean(ext && CODEENGIN_ALLOWED_EXTENSIONS.has(ext));
}

export function assertSafeWorkspacePath(workspaceId: string, input = '', options: { allowDirectory?: boolean; allowMissingExtension?: boolean } = {}): { root: string; workspaceId: string; relPath: string; absPath: string } {
  if (path.isAbsolute(input)) throw new Error('Absolute paths are not allowed.');
  const id = assertValidWorkspaceId(workspaceId);
  const root = getWorkspaceRoot(id);
  const relPath = normalizeProjectPath(input);
  if (relPath.startsWith('../') || relPath === '..' || relPath.includes('/../')) throw new Error('Path traversal is not allowed.');
  assertSafeSegments(relPath);
  if (!options.allowDirectory && relPath) {
    if (!isAllowedCodeEnginFileName(relPath) && !options.allowMissingExtension) throw new Error(`File path ${relPath} is not editable in CodeEngin.`);
  }
  const absPath = path.resolve(root, relPath || '.');
  const relativeFromRoot = path.relative(root, absPath);
  if (relativeFromRoot.startsWith('..') || path.isAbsolute(relativeFromRoot)) throw new Error('Resolved path escaped the user workspace.');
  return { root, workspaceId: id, relPath, absPath };
}

export function isLikelyEditableFile(relPath: string): boolean {
  const normalized = normalizeProjectPath(relPath);
  if (!normalized) return false;
  try { assertSafeSegments(normalized); } catch { return false; }
  return isAllowedCodeEnginFileName(normalized);
}

export function safeErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
