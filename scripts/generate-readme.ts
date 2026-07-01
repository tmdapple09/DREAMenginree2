#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { buildProductReadmeSections, PRODUCT_SECTIONS } from './readme-autosync';

type Summary = {
  readmeChanged: boolean;
  lineBudget: number;
  lineCount: number;
  productSections: Array<{
    number: number;
    title: string;
    matchedFiles: number;
    sourceLines: number;
    routes: number;
    apis: number;
    components: number;
    hooks: number;
  }>;
  trackedFiles: number;
};

const ROOT = process.cwd();
const README_PATH = join(ROOT, 'README.md');
const SKIP_DIRS = new Set(['.git', '.next', '.turbo', '.vercel', 'node_modules', 'coverage', 'dist', 'out', 'playwright-report', 'test-results', 'build-memory']);
const MEDIA_RE = /\.(png|jpe?g|gif|webp|mp4|mov|webm|avi|mkv|mp3|wav|ogg|flac|wasm|zip|gz|tar|pdf|ttf|otf|woff2?|ico)$/i;

function parseArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.\
}

function readList(path?: string): string[] {
  if (!path) return [];
  const abs = resolve(path);
  if (!existsSync(abs)) return [];
  return readFileSync(abs, 'utf8')
    .split(/\r?\n/g)
    .map((line) => normalizePath(line.trim()))
    .filter(Boolean);
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else out.push(normalizePath(relative(ROOT, full)));
  }
  return out;
}

function projectName(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as { name?: string };
    return pkg.name?.trim() || 'DREAMengin';
  } catch {
    return 'DREAMengin';
  }
}

function projectVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as { version?: string };
    return pkg.version?.trim() || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

function packageManager(): string {
  if (existsSync(join(ROOT, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(join(ROOT, 'package-lock.json'))) return 'npm';
  if (existsSync(join(ROOT, 'yarn.lock'))) return 'yarn';
  return 'pnpm';
}

function packageScripts(): Record<string, string> {
  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as { scripts?: Record<string, string> };
    return pkg.scripts ?? {};
  } catch {
    return {};
  }
}

function envExampleBlock(): string {
  const envPath = existsSync(join(ROOT, '.env.example')) ? join(ROOT, '.env.example') : join(ROOT, '.env.local.example');
  if (!existsSync(envPath)) return '```env\n# Add project environment variables here.\n```';
  const lines = readFileSync(envPath, 'utf8')
    .split(/\r?\n/g)
    .filter((line) => line.trim() && !line.trim().startsWith('#'))
    .slice(0, 18);
  if (!lines.length) return '```env\n# See .env.example for local configuration.\n```';
  return ['```env', ...lines, '```'].join('\n');
}

function commandBlock(commands: string[]): string {
  return ['```bash', ...commands, '```'].join('\n');
}

function buildFrontDoor(files: string[]): string {
  const name = 'DREAMengin';
  const pkgName = projectName();
  const version = projectVersion();
  const pm = packageManager();
  const scripts = packageScripts();
  const hasDev = Boolean(scripts.dev);
  const hasBuild = Boolean(scripts.build);
  const hasLint = Boolean(scripts.lint);
  const hasTypecheck = Boolean(scripts.typecheck || scripts['type-check']);
  const appRoutes = files.filter((file) => /^app\/.+\/page\.tsx?$/.test(file)).length;
  const apiRoutes = files.filter((file) => /^app\/api\/.+\/route\.tsx?$/.test(file)).length;
  const enginFiles = files.filter((file) => /^engins\

  return [
    `# ${name}`,
    '',
    '> A capability-driven creative operating system for code, games, music, media, simulations, identity, commerce, communication, and shared Dreams.',
    '',
    `[![README Autosync](https://img.shields.io/badge/readme-weekly%20autosync-blue)](.github/workflows/readme-autosync.yml)`,
    `[![TypeScript](https://img.shields.io/badge/typescript-product%20code-blue)](tsconfig.json)`,
    `[![Next.js](https://img.shields.io/badge/next.js-app%20router-black)](next.config.mjs)`,
    `[![License](https://img.shields.io/badge/license-repo%20license-yellow)](LICENSE)`,
    '',
    '## 1. Project Overview',
    '',
    '### What is this?',
    '',
    'DREAMengin is a web-native creative operating system built around Engins, DayDreams, shared runtime state, communication, social discovery, commerce, and user-owned creative surfaces. It is not a set of isolated apps. It is one product where creative work can move between code, games, content, lab simulations, music, branding, shops, messaging, and social surfaces.',
    '',
    `This repository currently exposes about ${appRoutes} app pages, ${apiRoutes} API route files, and ${enginFiles} files under \`engins/\`, with \`ARCHITECTURE.md\` treated as the project authority for system meaning.`,
    '',
    '### Why would I use it?',
    '',
    'Use DREAMengin when you want a single product shell where creation, publishing, identity, communication, customization, selling, sharing, and runtime surfaces are connected instead of split across unrelated tools. Engins own domain behavior, DayDreams provide user-facing workspaces, and the runtime moves state, events, and context between them.',
    '',
    'The practical problem it solves is creative fragmentation. A user should be able to build, preview, discuss, publish, sell, share, customize, and return to work without leaving the ecosystem or rebuilding context manually.',
    '',
    '## 2. Getting Started',
    '',
    '### Prerequisites',
    '',
    '- Node.js 25 for parity with the repository workflow.',
    '- pnpm, because the repo includes `pnpm-lock.yaml` and `pnpm-workspace.yaml`.',
    '- Supabase environment values for authenticated/database-backed flows.',
    '',
    '### Installation',
    '',
    commandBlock([
      'git clone <your-dreamengin-repo-url>',
      'cd <your-dreamengin-repo>',
      `${pm} install`,
    ]),
    '',
    '## 3. Usage, Configuration & Project Notes',
    '',
    '### Usage',
    '',
    'Run the local web app:',
    '',
    commandBlock([hasDev ? `${pm} dev` : `${pm} start`]),
    '',
    'Common validation commands:',
    '',
    commandBlock([
      hasBuild ? `${pm} build` : '# build script not declared in package.json',
      hasLint ? `${pm} lint` : '# lint script not declared in package.json',
      hasTypecheck ? `${pm} typecheck` : '# typecheck script not declared in package.json',
      `${pm} tsx scripts/generate-readme.ts --full --line-budget 2800`,
    ]),
    '',
    'Expected local result:',
    '',
    '```text',
    '> Next.js starts the DREAMengin app locally.',
    '> README generation rewrites README.md from the professional front door plus product-section evidence.',
    '```',
    '',
    '### Configuration',
    '',
    'Create a local environment file from the example values and fill in project-specific secrets.',
    '',
    commandBlock(['cp .env.example .env.local']),
    '',
    envExampleBlock(),
    '',
    '### Documentation',
    '',
    '- `ARCHITECTURE.md` is the source of truth for system architecture.',
    '- `FILE_TREE.md` is useful as an import/export map, but the README generator verifies against real files.',
    '- `CONTENTenginSPEC.md`, `GameENGINspec.md`, and the core architecture documents explain major product areas in more depth.',
    '',
    '### Contributing',
    '',
    'Keep generated README edits reproducible. Change the generator scripts instead of hand-editing generated product sections. Run the README workflow manually after major file moves, new Engins, new routes, or product-surface rewrites.',
    '',
    '### License',
    '',
    'See `LICENSE` for repository licensing details.',
    '',
    '### Acknowledgements',
    '',
    'DREAMengin is organized around the project architecture in `ARCHITECTURE.md` and the connected source code in `app/`, `engine/`, `engins/`, `components/`, `dreamdmbar/`, `dreamr/`, `daydreams/`, and the supporting system folders.',
    '',
    '## Table of Contents',
    '',
    '- [1. Project Overview](#1-project-overview)',
    '- [2. Getting Started](#2-getting-started)',
    '- [3. Usage, Configuration & Project Notes](#3-usage-configuration-project-notes)',
    ...PRODUCT_SECTIONS.map((section) => `- [${section.number}. ${section.title}](#${slug(`${section.number}. ${section.title}`)})`),
    '',
  ].join('\n');
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

function allRepoFiles(): string[] {
  return walk(ROOT).filter((file) => !MEDIA_RE.test(file));
}

const changedFilesArg = parseArg('--changed-files');
const summaryFileArg = parseArg('--summary-file');
const lineBudgetArg = Number(parseArg('--line-budget') ?? '2800');
const lineBudget = Number.isFinite(lineBudgetArg) && lineBudgetArg > 800 ? lineBudgetArg : 2800;
const inputFiles = readList(changedFilesArg);
const files = inputFiles.length ? inputFiles.filter((file) => !MEDIA_RE.test(file)) : allRepoFiles();
const previous = existsSync(README_PATH) ? readFileSync(README_PATH, 'utf8') : '';
const product = buildProductReadmeSections(files, lineBudget);
const next = [buildFrontDoor(files), product.markdown].join('\n').replace(/\n{3,}/g, '\n\n');

writeFileSync(README_PATH, next);

const summary: Summary = {
  readmeChanged: previous !== next,
  lineBudget,
  lineCount: next.split(/\r?\n/g).length,
  productSections: product.stats,
  trackedFiles: files.length,
};

if (summaryFileArg) {
  const out = resolve(summaryFileArg);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(summary, null, 2));
}

console.log(JSON.stringify(summary, null, 2));
