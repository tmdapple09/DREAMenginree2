#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import {
  basename,
  dirname,
  extname,
  join,
  posix,
  resolve,
} from 'node:path';
import {
  buildProductReadmeSections,
  PRODUCT_SECTIONS,
  type ProductSectionStats,
} from './readme-autosync';

type PackageJson = {
  name?: string;
  version?: string;
  packageManager?: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

type ProductOutput = {
  markdown: string;
  stats: ProductSectionStats[];
};

type RepoContext = {
  repository: string;
  branch: string;
  webBase: string;
  commit: string;
  commitDate: string;
  commitMessage: string;
};

type UserFacingEvidence = {
  kind: string;
  reason: string;
};

type FileRecord = {
  path: string;
  root: string;
  classification: string;
  explanation: string;
  userFacing?: UserFacingEvidence;
};

type RepositoryAnalysis = {
  records: FileRecord[];
  userFacingFiles: number;
  userFacingCounts: Array<[string, number]>;
};

const ROOT = process.cwd();
const README_PATH = join(ROOT, 'README.md');
const DEFAULT_REPOREADME_PATH = join(ROOT, 'REPOREADME.md');
const DEFAULT_REPOSITORY = 'tmdapple09/DREAMenginree2';
const DEFAULT_BRANCH = 'completedream';
const PRODUCT_START = '<!-- DREAMENGIN_PRODUCT_README:START -->';
const PRODUCT_END = '<!-- DREAMENGIN_PRODUCT_README:END -->';
const REPO_INVENTORY_START = '<!-- DREAMENGIN_REPOSITORY_INVENTORY:START -->';
const REPO_INVENTORY_END = '<!-- DREAMENGIN_REPOSITORY_INVENTORY:END -->';
const GENERATED_DOCUMENTS = new Set(['README.md', 'REPOREADME.md']);
const MEDIA_RE = /\.(png|jpe?g|gif|webp|avif|svg|mp4|mov|webm|avi|mkv|mp3|wav|ogg|flac|wasm|zip|gz|tar|pdf|ttf|otf|woff2?|ico|bin|lockb)$/i;
const CODE_RE = /\.(tsx?|jsx?|mjs|cjs)$/i;
const STYLE_RE = /\.(css|scss|sass|less)$/i;
const DOCUMENT_RE = /\.(md|mdx|txt|rst)$/i;
const DATA_RE = /\.(json|jsonc|ya?ml|toml|csv|xml)$/i;
const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.scss', '.sass', '.less',
  '.sql', '.md', '.mdx', '.txt', '.json', '.jsonc', '.yml', '.yaml', '.toml',
  '.xml', '.csv', '.html', '.htm', '.sh', '.bash', '.zsh', '.ps1', '.py', '.rs',
  '.go', '.java', '.kt', '.kts', '.c', '.cc', '.cpp', '.h', '.hpp', '.graphql',
  '.gql', '.env', '.ini', '.conf', '.properties', '.svg',
]);
const IMPORT_EXTENSIONS = [
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css', '.scss', '.sass', '.less',
];
const TEXT_BASENAMES = new Set([
  'Dockerfile', 'Dockerfile.dev', 'Dockerfile.prod', 'Makefile', 'Procfile', 'LICENSE',
  'NOTICE', 'CNAME', '.gitignore', '.gitattributes', '.npmrc', '.nvmrc', '.node-version',
  '.prettierignore', '.eslintignore', '.dockerignore', '.env.example', '.env.local.example',
]);
const SKIP_PREFIXES = [
  '.git/', '.next/', '.turbo/', '.vercel/', 'node_modules/', 'coverage/',
  'dist/', 'out/', 'playwright-report/', 'test-results/',
];
const MAX_TEXT_BYTES = 768_000;

function parseArgs(argv: string[]): Map<string, string | true> {
  const result = new Map<string, string | true>();

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) continue;

    const next = argv[index + 1];
    if (!next || next.startsWith('--')) {
      result.set(token.slice(2), true);
    } else {
      result.set(token.slice(2), next);
      index += 1;
    }
  }

  return result;
}

function arg(args: Map<string, string | true>, name: string): string | undefined {
  const value = args.get(name);
  return typeof value === 'string' ? value : undefined;
}

function git(parameters: string[]): string {
  try {
    return execFileSync('git', parameters, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

function normalizePath(value: string): string {
  return value
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\/+/, '')
    .replace(/\/{2,}/g, '/');
}

function trackedFiles(listPath?: string): string[] {
  let values: string[];

  if (listPath) {
    const absolute = resolve(listPath);
    if (!existsSync(absolute)) throw new Error(`Missing tracked-file list: ${absolute}`);
    values = readFileSync(absolute, 'utf8').split(/\r?\n/g);
  } else {
    values = (git(['ls-files', '-z']) || '').split('\0');
  }

  return [...new Set(values.map(normalizePath))]
    .filter(Boolean)
    .filter((file) => !SKIP_PREFIXES.some((prefix) => file.startsWith(prefix)))
    .filter((file) => !GENERATED_DOCUMENTS.has(file))
    .sort((left, right) => left.localeCompare(right));
}

function packageJson(): PackageJson {
  const file = join(ROOT, 'package.json');
  if (!existsSync(file)) return {};
  return JSON.parse(readFileSync(file, 'utf8')) as PackageJson;
}

function repositoryFromRemote(remote: string): string | undefined {
  const clean = remote.trim().replace(/\.git$/, '');
  return clean.match(/^git@github\.com:(.+\/.+)$/i)?.[1]
    ?? clean.match(/^https?:\/\/github\.com\/(.+\/.+)$/i)?.[1];
}

function isReadmeAutosyncCommit(message: string): boolean {
  return /^docs\(readme\):\s*autosync\b/i.test(message.trim());
}

function sourceCommit(): string {
  const history = git(['log', '-80', '--pretty=format:%H%x09%s']);

  for (const line of history.split(/\r?\n/g)) {
    if (!line) continue;
    const [sha, ...messageParts] = line.split('\t');
    if (sha && !isReadmeAutosyncCommit(messageParts.join('\t'))) return sha;
  }

  return git(['rev-parse', 'HEAD']) || process.env.GITHUB_SHA || 'unknown';
}

function repoContext(): RepoContext {
  const repository = process.env.GITHUB_REPOSITORY
    || repositoryFromRemote(git(['remote', 'get-url', 'origin']))
    || DEFAULT_REPOSITORY;
  const branch = process.env.GITHUB_HEAD_REF
    || process.env.GITHUB_REF_NAME
    || git(['branch', '--show-current'])
    || DEFAULT_BRANCH;
  const commit = sourceCommit().slice(0, 40);

  return {
    repository,
    branch,
    webBase: `https://github.com/${repository}`,
    commit,
    commitDate: commit === 'unknown'
      ? 'unknown'
      : git(['show', '-s', '--format=%cI', commit]) || 'unknown',
    commitMessage: commit === 'unknown'
      ? 'README regeneration'
      : git(['show', '-s', '--format=%s', commit]) || 'README regeneration',
  };
}

function encodeUrlSegment(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

function encodePath(value: string): string {
  return value.split('/').map(encodeUrlSegment).join('/');
}

function pathUrl(context: RepoContext, target: string, directory = false): string {
  const clean = normalizePath(target).replace(/\/$/, '');
  return `${context.webBase}/${directory ? 'tree' : 'blob'}/${encodePath(context.branch)}/${encodePath(clean)}`;
}

function pathLink(context: RepoContext, target: string, directory = false): string {
  const clean = normalizePath(target).replace(/\/$/, '');
  return `[\`${clean}${directory ? '/' : ''}\`](${pathUrl(context, clean, directory)})`;
}

function repositoryPathLink(target: string, directory = false): string {
  const clean = normalizePath(target).replace(/\/$/, '');
  const suffix = directory ? '/' : '';
  return `[\`${clean}${suffix}\`](./${encodePath(clean)}${suffix})`;
}

function commitLink(context: RepoContext, sha = context.commit): string {
  return sha === 'unknown'
    ? '`unknown`'
    : `[\`${sha.slice(0, 7)}\`](${context.webBase}/commit/${sha})`;
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[—–]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function markdownCell(value: string): string {
  return value
    .replace(/\r?\n/g, ' ')
    .replace(/\|/g, '\\|')
    .replace(/\s+/g, ' ')
    .trim();
}

function concise(value: string, maxLength = 160): string {
  const clean = value.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, Math.max(1, maxLength - 1)).trimEnd()}…`;
}

function directoriesFor(files: string[]): Set<string> {
  const directories = new Set<string>();

  for (const file of files) {
    const parts = file.split('/');
    for (let index = 1; index < parts.length; index += 1) {
      directories.add(parts.slice(0, index).join('/'));
    }
  }

  return directories;
}

function linkifyProductMarkdown(
  markdown: string,
  files: string[],
  context: RepoContext,
): { markdown: string; linked: number } {
  const fileSet = new Set(files);
  const directorySet = directoriesFor(files);
  let linked = 0;
  let inFence = false;

  function resolveTarget(raw: string): { target: string; directory: boolean } | undefined {
    const target = normalizePath(raw).replace(/[),.;:]+$/, '').replace(/\/$/, '');
    if (fileSet.has(target)) return { target, directory: false };
    if (directorySet.has(target)) return { target, directory: true };
    return undefined;
  }

  return {
    markdown: markdown.split(/\r?\n/g).map((original) => {
      if (original.trimStart().startsWith('```')) {
        inFence = !inFence;
        return original;
      }
      if (inFence) return original;

      const protectedLinks: string[] = [];
      const protect = (value: string): string => {
        const marker = `\u0000README_LINK_${protectedLinks.length}\u0000`;
        protectedLinks.push(value);
        return marker;
      };

      let line = original.replace(/`([^`\n]+)`/g, (full, raw: string) => {
        const match = resolveTarget(raw);
        if (!match) return full;
        linked += 1;
        return protect(pathLink(context, match.target, match.directory));
      });

      line = line.replace(
        /(^|[\s(←—|])([A-Za-z0-9_.@()[\]-]+(?:\/[A-Za-z0-9_.@()[\]-]+)+\/?)(?=$|[\s),.;:])/g,
        (full, prefix: string, raw: string) => {
          const match = resolveTarget(raw);
          if (!match) return full;
          linked += 1;
          return `${prefix}${protect(pathLink(context, match.target, match.directory))}`;
        },
      );

      return line.replace(/\u0000README_LINK_(\d+)\u0000/g, (full, index: string) =>
        protectedLinks[Number(index)] ?? full,
      );
    }).join('\n'),
    linked,
  };
}

function productOutput(
  sectionsFile: string | undefined,
  files: string[],
  lineBudget: number,
): ProductOutput {
  if (sectionsFile && existsSync(resolve(sectionsFile))) {
    try {
      const parsed = JSON.parse(readFileSync(resolve(sectionsFile), 'utf8')) as {
        markdown?: unknown;
        sections?: Array<Partial<ProductSectionStats> & Record<string, unknown>>;
      };

      if (
        typeof parsed.markdown === 'string'
        && Array.isArray(parsed.sections)
        && parsed.sections.length === PRODUCT_SECTIONS.length
      ) {
        const stats = parsed.sections.map((section, index): ProductSectionStats => {
          const expected = PRODUCT_SECTIONS[index];
          return {
            number: Number(section.number ?? expected.number),
            title: String(section.title ?? expected.title),
            matchedFiles: Number(section.matchedFiles ?? 0),
            sourceLines: Number(section.sourceLines ?? 0),
            routes: Number(section.routes ?? 0),
            apis: Number(section.apis ?? 0),
            components: Number(section.components ?? 0),
            hooks: Number(section.hooks ?? 0),
          };
        });

        return { markdown: parsed.markdown, stats };
      }
    } catch (error) {
      console.warn(`Invalid sections artifact; recalculating: ${String(error)}`);
    }
  }

  return buildProductReadmeSections(files, lineBudget);
}

function dependencyVersion(pkg: PackageJson, name: string): string {
  return pkg.dependencies?.[name] ?? pkg.devDependencies?.[name] ?? 'not declared';
}

function packageManager(pkg: PackageJson): string {
  return pkg.packageManager?.split('@')[0]
    || (existsSync(join(ROOT, 'pnpm-lock.yaml')) ? 'pnpm' : 'npm');
}

function fileCount(files: string[], pattern: RegExp): number {
  return files.filter((file) => pattern.test(file)).length;
}

function rootTable(files: string[], context: RepoContext): string[] {
  const counts = new Map<string, number>();

  for (const file of files) {
    const root = file.includes('/') ? file.slice(0, file.indexOf('/')) : '(root)';
    counts.set(root, (counts.get(root) ?? 0) + 1);
  }

  return [...counts.entries()]
    .filter(([root]) => root !== '(root)')
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, 20)
    .map(([root, count]) => `| ${pathLink(context, root, true)} | ${count} |`);
}

function recentCommits(context: RepoContext): string[] {
  const history = git(['log', '-30', '--pretty=format:%H%x09%cI%x09%an%x09%s']);
  if (!history) return ['- Git history was unavailable during generation.'];

  const rows = history
    .split(/\r?\n/g)
    .map((line) => line.split('\t'))
    .filter((parts) => parts[0] && !isReadmeAutosyncCommit(parts.slice(3).join('\t')))
    .slice(0, 8)
    .map(([sha, date, author, ...message]) =>
      `| ${commitLink(context, sha)} | ${date} | ${markdownCell(author)} | ${markdownCell(message.join('\t'))} |`,
    );

  return [
    '| Commit | Date | Author | Change |',
    '|---|---|---|---|',
    ...rows,
  ];
}

function environmentBlock(files: Set<string>): string[] {
  const source = files.has('.env.example') && existsSync(join(ROOT, '.env.example'))
    ? '.env.example'
    : files.has('.env.local.example') && existsSync(join(ROOT, '.env.local.example'))
      ? '.env.local.example'
      : undefined;

  if (!source) return ['```env', '# No tracked environment example file was found.', '```'];

  const names = readFileSync(join(ROOT, source), 'utf8')
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter((line) => /^[A-Za-z_][A-Za-z0-9_]*=/.test(line))
    .map((line) => `${line.slice(0, line.indexOf('='))}=`)
    .slice(0, 30);

  return ['```env', ...(names.length ? names : ['# Add required variables here.']), '```'];
}

function isReadableText(file: string): boolean {
  const name = basename(file);
  const extension = extname(file).toLowerCase();
  return TEXT_BASENAMES.has(name)
    || name.startsWith('.env')
    || TEXT_EXTENSIONS.has(extension);
}

function readRepositoryText(file: string): string {
  if (!isReadableText(file)) return '';

  try {
    const absolute = join(ROOT, file);
    if (!existsSync(absolute)) return '';
    const stat = statSync(absolute);
    if (!stat.isFile() || stat.size > MAX_TEXT_BYTES) return '';
    return readFileSync(absolute, 'utf8');
  } catch {
    return '';
  }
}

function routeFromFile(file: string): string {
  const clean = normalizePath(file)
    .replace(/^app\//, '')
    .replace(/\/(page|layout|template|loading|error|not-found|default|route)\.(tsx?|jsx?)$/, '')
    .replace(/^(page|layout|template|loading|error|not-found|default|route)\.(tsx?|jsx?)$/, '')
    .split('/')
    .filter((part) => part && !/^\(.+\)$/.test(part) && !part.startsWith('@'))
    .join('/');

  return clean ? `/${clean}` : '/';
}

function extractExports(text: string): string[] {
  if (!text) return [];
  const values = new Set<string>();
  const declaration = /export\s+(?:default\s+)?(?:declare\s+)?(?:async\s+)?(?:function|class|const|let|var|interface|type|enum)\s+([A-Za-z_$][\w$]*)/g;
  const list = /export\s*\{([^}]+)\}/g;

  for (const match of text.matchAll(declaration)) values.add(match[1]);
  for (const match of text.matchAll(list)) {
    for (const item of match[1].split(',')) {
      const value = item.trim().split(/\s+as\s+/i).pop()?.trim();
      if (value && /^[A-Za-z_$][\w$]*$/.test(value)) values.add(value);
    }
  }

  return [...values].slice(0, 8);
}

function extractHooks(text: string): string[] {
  const values = new Set<string>();
  for (const match of text.matchAll(/\b(use[A-Z][A-Za-z0-9_$]*)\s*(?:<[^>]+>)?\s*\(/g)) {
    values.add(match[1]);
  }
  return [...values].slice(0, 6);
}

function extractHttpMethods(text: string): string[] {
  const methods = new Set<string>();
  for (const match of text.matchAll(/export\s+(?:async\s+)?function\s+(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\b/g)) {
    methods.add(match[1]);
  }
  for (const match of text.matchAll(/export\s+const\s+(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\b/g)) {
    methods.add(match[1]);
  }
  return [...methods];
}

function extractImports(text: string): string[] {
  if (!text) return [];
  const values = new Set<string>();
  const patterns = [
    /\bfrom\s+["']([^"']+)["']/g,
    /\bimport\s*["']([^"']+)["']/g,
    /\brequire\(\s*["']([^"']+)["']\s*\)/g,
    /\bimport\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) values.add(match[1]);
  }

  return [...values];
}

function resolveLocalImport(fromFile: string, specifier: string, fileSet: Set<string>): string | undefined {
  const cleanSpecifier = specifier.split(/[?#]/, 1)[0];
  let base: string;

  if (cleanSpecifier.startsWith('@/') || cleanSpecifier.startsWith('~/')) {
    base = cleanSpecifier.slice(2);
  } else if (cleanSpecifier.startsWith('.')) {
    base = posix.normalize(posix.join(posix.dirname(fromFile), cleanSpecifier));
  } else {
    return undefined;
  }

  const candidates = [base];
  if (!extname(base)) {
    for (const extension of IMPORT_EXTENSIONS) candidates.push(`${base}${extension}`);
    for (const extension of IMPORT_EXTENSIONS) candidates.push(`${base}/index${extension}`);
  }

  return candidates.find((candidate) => fileSet.has(normalizePath(candidate)));
}

function directUserFacingEvidence(file: string, text: string): UserFacingEvidence | undefined {
  if (/^app\/api\/.+\/route\.(tsx?|jsx?)$/.test(file)) {
    const methods = extractHttpMethods(text);
    return {
      kind: 'User-facing API logic',
      reason: `Server route ${routeFromFile(file)}${methods.length ? ` exposes ${methods.join(', ')}` : ''}.`,
    };
  }

  if (/^(middleware|instrumentation)\.(tsx?|jsx?)$/.test(file)) {
    return {
      kind: 'Request/runtime logic',
      reason: 'Controls requests, routing, authentication, instrumentation, or runtime behavior visible to application users.',
    };
  }

  if (/^app\/(?:.+\/)?(page|layout|template|loading|error|not-found|default)\.(tsx?|jsx?)$/.test(file)) {
    const role = basename(file).split('.')[0];
    return {
      kind: 'User-facing UI surface',
      reason: `${role} surface for ${routeFromFile(file)}.`,
    };
  }

  if (/^app\/.+\.(tsx?|jsx?)$/.test(file) && !file.startsWith('app/api/')) {
    return {
      kind: 'Route interaction logic',
      reason: `Route-owned UI or interaction logic under ${routeFromFile(file)}.`,
    };
  }

  if (/(^|\/).+\.(test|spec)\.(tsx?|jsx?|mjs|cjs)$/.test(file)) return undefined;

  if (CODE_RE.test(file) && /^(?:["']use client["'];?)/m.test(text)) {
    return {
      kind: 'Client interaction logic',
      reason: 'Explicit client module that controls browser-visible state, events, rendering, or feedback.',
    };
  }

  if (/\.(tsx|jsx)$/i.test(file) && /(^|\/)(components?|ui|views?|screens?|pages?)\//i.test(file)) {
    return {
      kind: 'User-facing UI surface',
      reason: 'JSX/TSX surface located in a UI, component, view, screen, or page directory.',
    };
  }

  if (CODE_RE.test(file) && extractExports(text).some((name) => /^use[A-Z]/.test(name))) {
    return {
      kind: 'User interaction hook',
      reason: 'Exports a hook that can drive client state, interaction, data loading, or visible feedback.',
    };
  }

  const rootRules: Array<[RegExp, string, string]> = [
    [/^components\//, 'Reusable UI/component logic', 'Reusable component, provider, shell, control, or presentation logic rendered by product surfaces.'],
    [/^engins\//, 'Engin UI/capability logic', 'Implements a user-facing Engin capability, workspace, rule set, control, or rendering surface.'],
    [/^daydreams\//, 'DayDream UI/workspace logic', 'Implements a user-facing DayDream workspace or its interaction behavior.'],
    [/^dreamr\//, 'DreamR UI/social logic', 'Implements DreamR media, feed, profile, discovery, or social interaction behavior.'],
    [/^dreamdmbar\//, 'DreamDMBar UI/control logic', 'Implements the DreamDMBar search, control, messaging, notification, or runtime interaction layer.'],
    [/^hooks\//, 'User interaction hook', 'Reusable hook that drives client state, interaction, data loading, or visible feedback.'],
    [/^engine\/(runtime|sharedDream|collaboration|messaging|shop|marketplace|ads|customization|dreamspace|home|vm)\//, 'User-facing runtime logic', 'Runtime or domain logic that directly powers visible product behavior.'],
  ];

  if (CODE_RE.test(file)) {
    for (const [pattern, kind, reason] of rootRules) {
      if (pattern.test(file)) return { kind, reason };
    }
  }

  if (STYLE_RE.test(file)) {
    return {
      kind: 'User-facing styling',
      reason: 'Styles visible product surfaces, controls, layouts, responsive behavior, or visual states.',
    };
  }

  if (file.startsWith('public/')) {
    return {
      kind: 'Browser-delivered asset',
      reason: 'Static asset delivered to the browser and available to user-facing product surfaces.',
    };
  }

  return undefined;
}

function classifyFile(file: string): string {
  if (/^app\/api\/.+\/route\.(tsx?|jsx?)$/.test(file)) return 'API route';
  if (/^app\/(?:.+\/)?page\.(tsx?|jsx?)$/.test(file)) return 'Application page';
  if (/^app\/(?:.+\/)?layout\.(tsx?|jsx?)$/.test(file)) return 'Application layout';
  if (/^app\/(?:.+\/)?(loading|error|not-found|template|default)\.(tsx?|jsx?)$/.test(file)) return 'Application state surface';
  if (/(^|\/).+\.(test|spec)\.(tsx?|jsx?|mjs|cjs)$/.test(file)) return 'Test/specification';
  if (/^\.github\/workflows\/.+\.ya?ml$/.test(file)) return 'GitHub Actions workflow';
  if (/^supabase\/migrations\/.+\.sql$/.test(file)) return 'Database migration';
  if (/\.sql$/i.test(file)) return 'SQL/database definition';
  if (/^hooks\//.test(file)) return 'React/client hook';
  if (/^components\//.test(file) && CODE_RE.test(file)) return 'UI component or provider';
  if (/^(engins|daydreams|dreamr|dreamdmbar)\//.test(file) && CODE_RE.test(file)) return 'Product surface or domain logic';
  if (STYLE_RE.test(file)) return 'Stylesheet';
  if (DOCUMENT_RE.test(file)) return 'Documentation';
  if (/^scripts\//.test(file)) return 'Repository automation script';
  if (/^(package\.json|pnpm-workspace\.yaml|tsconfig.*\.json|next\.config\.|eslint\.config\.|postcss\.config\.|tailwind\.config\.|vitest\.config\.|vercel\.json|Dockerfile)/.test(file)) return 'Build/runtime configuration';
  if (MEDIA_RE.test(file)) return 'Binary or media asset';
  if (DATA_RE.test(file)) return 'Structured data/configuration';
  if (CODE_RE.test(file)) return 'Source logic';
  if (/\.(sh|bash|zsh|ps1|py|rs|go|java|kt|kts|c|cc|cpp|h|hpp)$/i.test(file)) return 'Executable/source utility';
  return 'Repository file';
}

function firstMarkdownHeading(text: string): string | undefined {
  return text.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim();
}

function humanizeFileName(file: string): string {
  return basename(file)
    .replace(/\.[^.]+$/, '')
    .replace(/[-_.]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
}

function quickExplanation(file: string, text: string, classification: string): string {
  const exports = extractExports(text);
  const hooks = extractHooks(text);
  const exportPhrase = exports.length ? ` Exports ${exports.join(', ')}.` : '';
  const hookPhrase = hooks.length ? ` Uses ${hooks.join(', ')}.` : '';

  if (classification === 'API route') {
    const methods = extractHttpMethods(text);
    return `Handles ${routeFromFile(file)}${methods.length ? ` with ${methods.join(', ')}` : ''}.${exportPhrase}`;
  }

  if (classification === 'Application page') {
    return `Renders the ${routeFromFile(file)} route.${exportPhrase}${hookPhrase}`;
  }

  if (classification === 'Application layout') {
    return `Defines shared layout, providers, metadata, or shell behavior for ${routeFromFile(file)}.${exportPhrase}`;
  }

  if (classification === 'Application state surface') {
    return `Defines the ${humanizeFileName(file)} state shown for ${routeFromFile(file)}.${exportPhrase}`;
  }

  if (classification === 'UI component or provider') {
    return `Provides reusable UI, provider, shell, or control behavior.${exportPhrase}${hookPhrase}`;
  }

  if (classification === 'React/client hook') {
    return `Provides reusable client state or interaction behavior.${exportPhrase}${hookPhrase}`;
  }

  if (classification === 'Product surface or domain logic') {
    return `Implements ${humanizeFileName(file)} product behavior or a visible workspace surface.${exportPhrase}${hookPhrase}`;
  }

  if (classification === 'Test/specification') {
    const suites = [...text.matchAll(/\b(?:describe|test|it)\s*\(\s*["'`]([^"'`]+)["'`]/g)]
      .map((match) => match[1])
      .slice(0, 3);
    return suites.length
      ? `Verifies ${suites.join('; ')}.`
      : `Verifies ${humanizeFileName(file)} behavior.`;
  }

  if (classification === 'GitHub Actions workflow') {
    const workflowName = text.match(/^name:\s*["']?(.+?)["']?\s*$/m)?.[1];
    return `Automates ${workflowName || humanizeFileName(file)}.`;
  }

  if (classification === 'Database migration') {
    return `Applies the ${humanizeFileName(file)} database schema or data change.`;
  }

  if (classification === 'SQL/database definition') {
    return `Defines database queries, schema, policies, functions, or seed data for ${humanizeFileName(file)}.`;
  }

  if (classification === 'Documentation') {
    return `Documents ${firstMarkdownHeading(text) || humanizeFileName(file)}.`;
  }

  if (classification === 'Stylesheet') {
    return `Defines visual styling, layout, responsive behavior, or interaction states for ${humanizeFileName(file)}.`;
  }

  if (classification === 'Repository automation script') {
    return `Automates ${humanizeFileName(file)} repository maintenance or generation behavior.${exportPhrase}`;
  }

  if (classification === 'Build/runtime configuration') {
    return `Configures ${humanizeFileName(file)} build, tooling, runtime, workspace, or deployment behavior.`;
  }

  if (classification === 'Binary or media asset') {
    return `Provides the ${extname(file).replace('.', '').toUpperCase() || 'binary'} asset used by repository or product surfaces.`;
  }

  if (classification === 'Structured data/configuration') {
    return `Stores structured ${humanizeFileName(file)} data or configuration.`;
  }

  if (classification === 'Source logic' || classification === 'Executable/source utility') {
    return `Implements ${humanizeFileName(file)} logic.${exportPhrase}${hookPhrase}`;
  }

  return `Tracked repository file for ${humanizeFileName(file)}.`;
}

function repositoryAnalysis(files: string[]): RepositoryAnalysis {
  const fileSet = new Set(files);
  const textByFile = new Map<string, string>();
  const importGraph = new Map<string, string[]>();
  const evidenceByFile = new Map<string, UserFacingEvidence>();

  for (const file of files) {
    const text = readRepositoryText(file);
    textByFile.set(file, text);

    const direct = directUserFacingEvidence(file, text);
    if (direct) evidenceByFile.set(file, direct);

    if (CODE_RE.test(file)) {
      const dependencies = extractImports(text)
        .map((specifier) => resolveLocalImport(file, specifier, fileSet))
        .filter((dependency): dependency is string => Boolean(dependency));
      importGraph.set(file, [...new Set(dependencies)]);
    }
  }

  const queue = [...evidenceByFile.keys()];
  for (let index = 0; index < queue.length; index += 1) {
    const owner = queue[index];

    for (const dependency of importGraph.get(owner) ?? []) {
      if (evidenceByFile.has(dependency)) continue;

      const kind = STYLE_RE.test(dependency)
        ? 'User-facing styling dependency'
        : MEDIA_RE.test(dependency)
          ? 'User-facing asset dependency'
          : 'User-facing logic dependency';

      evidenceByFile.set(dependency, {
        kind,
        reason: `Transitively required by the user-facing file ${owner}.`,
      });
      queue.push(dependency);
    }
  }

  const records = files.map((file): FileRecord => {
    const classification = classifyFile(file);
    const text = textByFile.get(file) ?? '';

    return {
      path: file,
      root: file.includes('/') ? file.slice(0, file.indexOf('/')) : '(repository root)',
      classification,
      explanation: concise(quickExplanation(file, text, classification)),
      userFacing: evidenceByFile.get(file),
    };
  });

  const counts = new Map<string, number>();
  for (const evidence of evidenceByFile.values()) {
    counts.set(evidence.kind, (counts.get(evidence.kind) ?? 0) + 1);
  }

  return {
    records,
    userFacingFiles: evidenceByFile.size,
    userFacingCounts: [...counts.entries()]
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])),
  };
}

function frontDoor(files: string[], pkg: PackageJson, context: RepoContext): string {
  const fileSet = new Set(files);
  const pm = packageManager(pkg);
  const scripts = pkg.scripts ?? {};
  const docs = [
    'docs/AGENT_PLAYBOOK.md', 'docs/GENERATION_LAW.md', 'docs/CONSTITUTION.md',
    'docs/NAMING_AUTHORITY.md', 'docs/FEATURE_STATUS.md', 'docs/LAW.md',
    'docs/ARCHITECTURE.md', 'ARCHITECTURE.md', 'REPO_STATE.md',
    'docs/HANDOFF.md', 'docs/BUGS.md', 'FILE_TREE.md',
  ].filter((file) => fileSet.has(file));
  const pages = files.filter((file) => /^app\/(?:.+\/)?page\.(tsx?|jsx?)$/.test(file));
  const validation = [
    scripts.typecheck && `${pm} typecheck`,
    scripts.lint && `${pm} lint`,
    (scripts.test || scripts['test:ci']) && `${pm} ${scripts.test ? 'test' : 'test:ci'}`,
    scripts.build && `${pm} build`,
    scripts.preflight && `${pm} preflight`,
  ].filter((value): value is string => Boolean(value));

  return [
    '# DREAMengin',
    '',
    '<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_START -->',
    '## DREAMengin Vision Alignment Guard',
    '',
    'This README is generated from tracked repository evidence. It must not claim decorative controls, unreachable features, duplicate ownership, silent failure, or completion that the code cannot enforce.',
    '<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_END -->',
    '',
    '> A capability-driven creative operating system for code, games, music, media, simulations, identity, commerce, communication, and shared Dreams.',
    '',
    `[![README Autosync](https://img.shields.io/badge/README-full%20repository%20autosync-blue)](${pathUrl(context, '.github/workflows/readme-autosync.yml')})`,
    `[![TypeScript](https://img.shields.io/badge/TypeScript-${encodeURIComponent(dependencyVersion(pkg, 'typescript'))}-blue)](${pathUrl(context, 'tsconfig.json')})`,
    `[![Next.js](https://img.shields.io/badge/Next.js-${encodeURIComponent(dependencyVersion(pkg, 'next'))}-black)](${pathUrl(context, fileSet.has('next.config.mjs') ? 'next.config.mjs' : 'package.json')})`,
    '',
    `Generated from ${commitLink(context)} on \`${context.branch}\`. Commit date: ${context.commitDate}.`,
    '',
    '## Table of Contents',
    '',
    '- [1. Project Overview](#1-project-overview)',
    '- [2. Getting Started](#2-getting-started)',
    '- [3. Repository Map and Operating Notes](#3-repository-map-and-operating-notes)',
    '- [User-Facing UI and Interaction Logic Coverage](#user-facing-ui-and-interaction-logic-coverage)',
    ...PRODUCT_SECTIONS.map((section) => `- [${section.number}. ${section.title}](#${slug(`${section.number}. ${section.title}`)})`),
    '- [Recent Changes](#recent-changes)',
    '- [README Generation Contract](#readme-generation-contract)',
    '',
    '## 1. Project Overview',
    '',
    'DREAMengin is one connected web-native creative environment. Engins own domain capability, DayDreams expose user workspaces, and shared runtime state connects creation, media, communication, identity, commerce, customization, and collaboration.',
    '',
    '### Live repository snapshot',
    '',
    '| Metric | Current tracked value |',
    '|---|---:|',
    `| Tracked documentable files | ${files.length} |`,
    `| App pages | ${fileCount(files, /^app\/(?:.+\/)?page\.(tsx?|jsx?)$/)} |`,
    `| API route handlers | ${fileCount(files, /^app\/api\/.+\/route\.(tsx?|jsx?)$/)} |`,
    `| Component files | ${fileCount(files, /(^|\/)components?\/.+\.(tsx?|jsx?)$/)} |`,
    `| Engin files | ${fileCount(files, /^engins\//)} |`,
    `| Tests/specs | ${fileCount(files, /(^|\/).+\.(test|spec)\.(tsx?|jsx?)$/)} |`,
    `| Supabase migrations | ${fileCount(files, /^supabase\/migrations\/.+\.sql$/)} |`,
    `| GitHub workflows | ${fileCount(files, /^\.github\/workflows\/.+\.ya?ml$/)} |`,
    '',
    '### Detected technology',
    '',
    '| Layer | Declared version |',
    '|---|---|',
    `| Package | \`${pkg.name ?? 'dreamengin'}@${pkg.version ?? '0.0.0'}\` |`,
    `| Package manager | \`${pkg.packageManager ?? pm}\` |`,
    `| Next.js | \`${dependencyVersion(pkg, 'next')}\` |`,
    `| React | \`${dependencyVersion(pkg, 'react')}\` |`,
    `| TypeScript | \`${dependencyVersion(pkg, 'typescript')}\` |`,
    `| Supabase | \`${dependencyVersion(pkg, '@supabase/supabase-js')}\` |`,
    `| Babylon.js | \`${dependencyVersion(pkg, '@babylonjs/core')}\` |`,
    `| Tailwind CSS | \`${dependencyVersion(pkg, 'tailwindcss')}\` |`,
    '',
    '## 2. Getting Started',
    '',
    '### Install and run',
    '',
    '```bash',
    `git clone ${context.webBase}.git`,
    `cd ${context.repository.split('/')[1]}`,
    `${pm} install --frozen-lockfile`,
    scripts.dev ? `${pm} dev` : `${pm} start`,
    '```',
    '',
    '### Validate',
    '',
    '```bash',
    ...(validation.length ? validation : ['# No validation scripts are declared.']),
    '```',
    '',
    '### Environment variable names',
    '',
    'Values are intentionally omitted. Copy the tracked example and keep secrets outside Git.',
    '',
    ...environmentBlock(fileSet),
    '',
    '## 3. Repository Map and Operating Notes',
    '',
    '### Major tracked roots',
    '',
    '| Path | Tracked files |',
    '|---|---:|',
    ...rootTable(files, context),
    '',
    '### Representative application routes',
    '',
    ...pages.slice(0, 20).map((file) => `- ${pathLink(context, file)}`),
    '',
    '### Governing and operational documents',
    '',
    ...(docs.length ? docs.map((file) => `- ${pathLink(context, file)}`) : ['- No configured governing document was found.']),
    '',
    '### Complete file reference',
    '',
    `The exhaustive file-by-file repository reference is ${pathLink(context, 'REPOREADME.md')}. It documents every tracked non-generated file and separately indexes every detected user-facing UI, API, asset, style, runtime, and transitive interaction-logic dependency.`,
    '',
    '### README ownership',
    '',
    `The complete README and repository inventory are written by ${pathLink(context, 'scripts/generate-readme.ts')}. Semantic product evidence is computed by ${pathLink(context, 'scripts/readme-autosync.ts')}. The workflow entry point is ${pathLink(context, '.github/workflows/readme-autosync.yml')}.`,
    '',
    `Source snapshot: ${commitLink(context)} — ${markdownCell(context.commitMessage)}.`,
    '',
  ].join('\n').replace(/\n{3,}/g, '\n\n');
}

function userFacingSummary(analysis: RepositoryAnalysis, context: RepoContext): string {
  return [
    '## User-Facing UI and Interaction Logic Coverage',
    '',
    `Detected and documented ${analysis.userFacingFiles} files that directly or transitively power user-visible behavior. The exhaustive file-by-file explanations and UI/logic classifications are in ${pathLink(context, 'REPOREADME.md')} under **Complete Repository Inventory**.`,
    '',
    '| Coverage class | Files |',
    '|---|---:|',
    ...analysis.userFacingCounts.map(([kind, count]) => `| ${markdownCell(kind)} | ${count} |`),
    '',
    'Coverage is dependency-aware: local imports from user-facing seeds are followed transitively so supporting state, runtime, data, utility, type, style, and asset files are not silently omitted.',
    '',
  ].join('\n');
}

function buildRepoReadme(
  analysis: RepositoryAnalysis,
  context: RepoContext,
): string {
  const grouped = new Map<string, FileRecord[]>();
  for (const record of analysis.records) {
    const current = grouped.get(record.root) ?? [];
    current.push(record);
    grouped.set(record.root, current);
  }

  const roots = [...grouped.keys()].sort((left, right) => {
    if (left === '(repository root)') return -1;
    if (right === '(repository root)') return 1;
    return left.localeCompare(right);
  });

  const inventory: string[] = [REPO_INVENTORY_START, ''];

  for (const root of roots) {
    const records = grouped.get(root) ?? [];
    const rootTitle = root === '(repository root)' ? 'Repository root' : `${root}/`;
    const rootLink = root === '(repository root)' ? './' : `./${encodePath(root)}/`;

    inventory.push(
      `### [${rootTitle}](${rootLink})`,
      '',
      '| File | Classification | Quick explanation | User-facing role |',
      '|---|---|---|---|',
      ...records.map((record) => {
        const role = record.userFacing?.kind ?? '—';
        return `| ${repositoryPathLink(record.path)} | ${markdownCell(record.classification)} | ${markdownCell(record.explanation)} | ${markdownCell(role)} |`;
      }),
      '',
    );
  }

  inventory.push(REPO_INVENTORY_END, '');

  return [
    '# DREAMengin Repository File Reference',
    '',
    '> Generated repository-wide documentation. Every tracked non-generated file receives a clickable path, classification, and concise explanation.',
    '',
    `Source: ${commitLink(context)} on \`${context.branch}\` — ${context.commitDate}.`,
    '',
    `Primary product documentation: ${pathLink(context, 'README.md')}.`,
    '',
    '## Documentation Contract',
    '',
    `- Documented files: ${analysis.records.length}.`,
    `- User-facing UI or logic files: ${analysis.userFacingFiles}.`,
    '- User-facing coverage includes direct surfaces and transitive local dependencies.',
    '- README.md and REPOREADME.md are intentionally excluded from inventory inputs to prevent generated-document feedback loops.',
    '- Every path links to the selected GitHub branch.',
    '',
    '## Table of Contents',
    '',
    '- [User-Facing UI and Logic Coverage](#user-facing-ui-and-logic-coverage)',
    '- [Complete Repository Inventory](#complete-repository-inventory)',
    '',
    '## User-Facing UI and Logic Coverage',
    '',
    'Every deterministically detected user-facing file is marked in the **User-facing role** column of the complete inventory below. Coverage includes pages, layouts, route-owned logic, components, Engins, DayDreams, DreamR, DreamDMBar, hooks, styles, public assets, APIs, selected runtime domains, and all local files reached through their import graph.',
    '',
    '| Coverage class | Files |',
    '|---|---:|',
    ...analysis.userFacingCounts.map(([kind, count]) => `| ${markdownCell(kind)} | ${count} |`),
    '',
    '## Complete Repository Inventory',
    '',
    ...inventory,
  ].join('\n').replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

function validateReadme(markdown: string): void {
  const failures: string[] = [];
  if (!markdown.startsWith('# DREAMengin\n')) failures.push('missing canonical H1');
  if (!markdown.includes(PRODUCT_START)) failures.push('missing product start marker');
  if (!markdown.includes(PRODUCT_END)) failures.push('missing product end marker');
  if (!markdown.includes('## User-Facing UI and Interaction Logic Coverage')) failures.push('missing user-facing coverage section');
  if (!markdown.includes('REPOREADME.md')) failures.push('missing repository inventory link');
  const numbered = (markdown.match(/^## \d+\./gm) ?? []).length;
  if (numbered < PRODUCT_SECTIONS.length + 3) failures.push('missing numbered sections');
  if (failures.length) throw new Error(`README validation failed: ${failures.join('; ')}`);
}

function validateRepoReadme(markdown: string, records: FileRecord[]): void {
  const failures: string[] = [];
  if (!markdown.startsWith('# DREAMengin Repository File Reference\n')) failures.push('missing repository reference H1');
  if (!markdown.includes('## User-Facing UI and Logic Coverage')) failures.push('missing user-facing coverage section');

  const start = markdown.indexOf(REPO_INVENTORY_START);
  const end = markdown.indexOf(REPO_INVENTORY_END);
  if (start === -1 || end === -1 || end <= start) {
    failures.push('missing complete inventory markers');
  } else {
    const inventory = markdown.slice(start, end);
    const documentedRows = (inventory.match(/^\| \[`/gm) ?? []).length;
    if (documentedRows !== records.length) {
      failures.push(`inventory row count ${documentedRows} does not match ${records.length} tracked files`);
    }
  }

  const uniquePaths = new Set(records.map((record) => record.path));
  if (uniquePaths.size !== records.length) failures.push('duplicate file records detected');
  if (failures.length) throw new Error(`REPOREADME validation failed: ${failures.join('; ')}`);
}

function atomicWrite(file: string, content: string): void {
  const temporary = `${file}.tmp-${process.pid}`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(temporary, content, 'utf8');
  renameSync(temporary, file);
}

function main(): void {
  const args = parseArgs(process.argv.slice(2));
  const requestedBudget = Number(arg(args, 'max-lines') ?? arg(args, 'line-budget') ?? '2800');
  const lineBudget = Number.isFinite(requestedBudget) && requestedBudget >= 800
    ? requestedBudget
    : 2800;
  const files = trackedFiles(arg(args, 'changed-files'));
  if (!files.length) throw new Error('No tracked repository files were found.');

  const semanticFiles = files.filter((file) => !MEDIA_RE.test(file));
  const pkg = packageJson();
  const context = repoContext();
  const analysis = repositoryAnalysis(files);
  const product = productOutput(arg(args, 'sections-file'), semanticFiles, lineBudget);
  const linkedProduct = linkifyProductMarkdown(product.markdown, semanticFiles, context);

  const repoReadmePath = resolve(arg(args, 'repo-readme') ?? DEFAULT_REPOREADME_PATH);
  const previous = existsSync(README_PATH) ? readFileSync(README_PATH, 'utf8') : '';
  const previousRepoReadme = existsSync(repoReadmePath) ? readFileSync(repoReadmePath, 'utf8') : '';

  const next = [
    frontDoor(files, pkg, context),
    userFacingSummary(analysis, context),
    linkedProduct.markdown,
    '## Recent Changes',
    '',
    ...recentCommits(context),
    '',
    '## README Generation Contract',
    '',
    `- Every run rebuilds the complete ${pathLink(context, 'README.md')} from tracked repository evidence.`,
    `- Every run also rebuilds ${pathLink(context, 'REPOREADME.md')} with one explanation for every tracked non-generated file.`,
    `- Every detected user-facing UI, API, asset, style, runtime, and interaction-logic dependency is indexed in ${pathLink(context, 'REPOREADME.md')}.`,
    `- Product sections come from semantic path, keyword, route, API, component, hook, import, export, and behavior analysis in ${pathLink(context, 'scripts/readme-autosync.ts')}.`,
    `- This run converted ${linkedProduct.linked} recognized product-evidence paths into GitHub links.`,
    '- Both generated documents are validated before either file is replaced.',
    '- Generated documents are excluded from their own source inventory to prevent self-referential drift.',
    '',
  ].join('\n').replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

  const repoReadme = buildRepoReadme(analysis, context);

  validateReadme(next);
  validateRepoReadme(repoReadme, analysis.records);

  atomicWrite(README_PATH, next);
  atomicWrite(repoReadmePath, repoReadme);

  const lineCount = next.split('\n').length - 1;
  const repoReadmeLineCount = repoReadme.split('\n').length - 1;
  if (lineCount > lineBudget) {
    console.warn(`README has ${lineCount} lines; requested budget is ${lineBudget}.`);
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    repository: context.repository,
    sourceBranch: context.branch,
    sourceCommit: context.commit,
    readmeChanged: previous !== next,
    repoReadmeChanged: previousRepoReadme !== repoReadme,
    trackedFiles: files.length,
    semanticFiles: semanticFiles.length,
    documentedFiles: analysis.records.length,
    userFacingFiles: analysis.userFacingFiles,
    userFacingCounts: Object.fromEntries(analysis.userFacingCounts),
    linkedPathReferences: linkedProduct.linked,
    lineBudget,
    lineBudgetExceeded: lineCount > lineBudget,
    lineCount,
    repoReadmeLineCount,
    productSections: product.stats,
    readmeSha256: createHash('sha256').update(next).digest('hex'),
    repoReadmeSha256: createHash('sha256').update(repoReadme).digest('hex'),
  };

  const summaryFile = arg(args, 'summary-file');
  if (summaryFile) {
    const absolute = resolve(summaryFile);
    mkdirSync(dirname(absolute), { recursive: true });
    writeFileSync(absolute, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  }

  console.log(JSON.stringify(summary, null, 2));
}

main();
