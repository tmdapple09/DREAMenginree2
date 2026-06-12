import path from 'path';

export const CODEENGIN_ALLOWED_ROOTS = [
  'app',
  'pages',
  'components',
  'coresurfaces',
  'daydreams',
  'dreamdmbar',
  'engine',
  'engins',
  'hooks',
  'lib',
  'src',
  'store',
  'stores',
  'contexts',
  'providers',
  'services',
  'styles',
  'types',
  'utils',
  'build-memory',
] as const;

export const CODEENGIN_ALLOWED_ROOT_FILES = new Set([
  'middleware.ts',
  'middleware.tsx',
  'middleware.js',
  'middleware.jsx',
  'next-env.d.ts',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.base.json',
  'tsconfig.server.json',
  'tsconfig.worker.json',
  'tsconfig.test.json',
  'next.config.js',
  'next.config.mjs',
  'next.config.ts',
  'postcss.config.js',
  'postcss.config.mjs',
  'tailwind.config.js',
  'tailwind.config.ts',
  'components.json',
  'vercel.json',
  'eslint.config.js',
  'eslint.config.mjs',
  'eslint.config.ts',
  'pnpm-workspace.yaml',
]);

export const CODEENGIN_ALLOWED_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.css',
  '.md',
  '.mdx',
  '.html',
  '.yml',
  '.yaml',
  '.sh',
  '.py',
  '.sql',
  '.wgsl',
]);

export const CODEENGIN_BLOCKED_SEGMENTS = new Set([
  '.git',
  'node_modules',
  '.next',
  'out',
  'dist',
  'build',
  'coverage',
  '.vercel',
  '.turbo',
  '.cache',
  '.pnpm-store',
  '.yarn',
  '__pycache__',
  '.pytest_cache',
  '.mypy_cache',
  '.ruff_cache',
  'playwright-report',
  'test-results',
]);

function projectRoot(): string {
  return path.resolve(process.env.CODEENGIN_PROJECT_ROOT ?? process.cwd());
}

export function getCodeEnginProjectRoot(): string {
  return projectRoot();
}

export function normalizeProjectPath(input = ''): string {
  const trimmed = input.replace(/\\/g, '/').trim().replace(/^\/+/, '');
  const normalized = path.posix.normalize(trimmed || '.');
  return normalized === '.' ? '' : normalized;
}

export function assertSafeProjectPath(input = '', options: { allowDirectory?: boolean; allowMissingExtension?: boolean } = {}): { root: string; relPath: string; absPath: string } {
  if (path.isAbsolute(input)) {
    throw new Error('Absolute paths are not allowed.');
  }

  const root = projectRoot();
  const relPath = normalizeProjectPath(input);
  if (relPath.startsWith('../') || relPath === '..' || relPath.includes('/../')) {
    throw new Error('Path traversal is not allowed.');
  }

  const segments = relPath.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '..' || CODEENGIN_BLOCKED_SEGMENTS.has(segment))) {
    throw new Error('Blocked project path segment.');
  }

  if (segments.length > 0) {
    const top = segments[0];
    const isAllowedRoot = CODEENGIN_ALLOWED_ROOTS.includes(top as (typeof CODEENGIN_ALLOWED_ROOTS)[number]);
    const isAllowedRootFile = segments.length === 1 && CODEENGIN_ALLOWED_ROOT_FILES.has(top);
    if (!isAllowedRoot && !isAllowedRootFile) {
      throw new Error(`Path must be inside an application root: ${CODEENGIN_ALLOWED_ROOTS.join(', ')}.`);
    }
  }

  if (!options.allowDirectory && relPath) {
    const ext = path.extname(relPath);
    if (!ext && !options.allowMissingExtension) {
      throw new Error('Files must include an extension.');
    }
    if (ext && !CODEENGIN_ALLOWED_EXTENSIONS.has(ext)) {
      throw new Error(`File extension ${ext} is not editable in CodeEngin.`);
    }
  }

  const absPath = path.resolve(root, relPath || '.');
  const relativeFromRoot = path.relative(root, absPath);
  if (relativeFromRoot.startsWith('..') || path.isAbsolute(relativeFromRoot)) {
    throw new Error('Resolved path escaped the project root.');
  }

  return { root, relPath, absPath };
}

export function isLikelyEditableFile(relPath: string): boolean {
  const normalized = normalizeProjectPath(relPath);
  if (!normalized) return false;
  const segments = normalized.split('/').filter(Boolean);
  if (segments.some((segment) => CODEENGIN_BLOCKED_SEGMENTS.has(segment))) return false;
  if (segments.length === 1 && CODEENGIN_ALLOWED_ROOT_FILES.has(segments[0])) return true;
  if (!CODEENGIN_ALLOWED_ROOTS.includes(segments[0] as (typeof CODEENGIN_ALLOWED_ROOTS)[number])) return false;
  return CODEENGIN_ALLOWED_EXTENSIONS.has(path.extname(normalized));
}

export function safeErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
