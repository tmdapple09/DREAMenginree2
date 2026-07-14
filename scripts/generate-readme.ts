#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
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

const ROOT = process.cwd();
const README_PATH = join(ROOT, 'README.md');
const DEFAULT_REPOSITORY = 'tmdapple09/DREAMenginree2';
const DEFAULT_BRANCH = 'completedream';
const PRODUCT_START = '<!-- DREAMENGIN_PRODUCT_README:START -->';
const PRODUCT_END = '<!-- DREAMENGIN_PRODUCT_README:END -->';
const MEDIA_RE = /\.(png|jpe?g|gif|webp|mp4|mov|webm|avi|mkv|mp3|wav|ogg|flac|wasm|zip|gz|tar|pdf|ttf|otf|woff2?|ico)$/i;
const SKIP_PREFIXES = [
  '.git/', '.next/', '.turbo/', '.vercel/', 'node_modules/', 'coverage/',
  'dist/', 'out/', 'playwright-report/', 'test-results/',
];

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

    if (!existsSync(absolute)) {
      throw new Error(`Missing tracked-file list: ${absolute}`);
    }

    values = readFileSync(absolute, 'utf8').split(/\r?\n/g);
  } else {
    values = (git(['ls-files', '-z']) || '').split('\0');
  }

  return [...new Set(values.map(normalizePath))]
    .filter(Boolean)
    .filter((file) => !MEDIA_RE.test(file))
    .filter((file) => !SKIP_PREFIXES.some((prefix) => file.startsWith(prefix)))
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

function repoContext(): RepoContext {
  const repository = process.env.GITHUB_REPOSITORY
    || repositoryFromRemote(git(['remote', 'get-url', 'origin']))
    || DEFAULT_REPOSITORY;

  const branch = process.env.GITHUB_HEAD_REF
    || process.env.GITHUB_REF_NAME
    || git(['branch', '--show-current'])
    || DEFAULT_BRANCH;

  const commit = (
    process.env.GITHUB_SHA
    || git(['rev-parse', 'HEAD'])
    || 'unknown'
  ).slice(0, 40);

  return {
    repository,
    branch,
    webBase: `https://github.com/${repository}`,
    commit,
    commitDate: git(['log', '-1', '--format=%cI']) || 'unknown',
    commitMessage: git(['log', '-1', '--format=%s']) || 'README regeneration',
  };
}

function encodePath(value: string): string {
  return value
    .split('/')
    .map(encodeURIComponent)
    .join('/');
}

function pathUrl(
  context: RepoContext,
  target: string,
  directory = false,
): string {
  const clean = normalizePath(target).replace(/\/$/, '');

  return `${context.webBase}/${directory ? 'tree' : 'blob'}/${encodePath(context.branch)}/${encodePath(clean)}`;
}

function pathLink(
  context: RepoContext,
  target: string,
  directory = false,
): string {
  const clean = normalizePath(target).replace(/\/$/, '');

  return `[\`${clean}${directory ? '/' : ''}\`](${pathUrl(context, clean, directory)})`;
}

function commitLink(
  context: RepoContext,
  sha = context.commit,
): string {
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
): {
  markdown: string;
  linked: number;
} {
  const fileSet = new Set(files);
  const directorySet = directoriesFor(files);

  let linked = 0;
  let inFence = false;

  function resolveTarget(
    raw: string,
  ): {
    target: string;
    directory: boolean;
  } | undefined {
    const target = normalizePath(raw)
      .replace(/[),.;:]+$/, '')
      .replace(/\/$/, '');

    if (fileSet.has(target)) {
      return {
        target,
        directory: false,
      };
    }

    if (directorySet.has(target)) {
      return {
        target,
        directory: true,
      };
    }

    return undefined;
  }

  return {
    markdown: markdown
      .split(/\r?\n/g)
      .map((original) => {
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

        let line = original.replace(
          /`([^`\n]+)`/g,
          (full, raw: string) => {
            const match = resolveTarget(raw);

            if (!match) return full;

            linked += 1;

            return protect(
              pathLink(
                context,
                match.target,
                match.directory,
              ),
            );
          },
        );

        line = line.replace(
          /(^|[\s(←—|])([A-Za-z0-9_.@()[\]-]+(?:\/[A-Za-z0-9_.@()[\]-]+)+\/?)(?=$|[\s),.;:])/g,
          (
            full,
            prefix: string,
            raw: string,
          ) => {
            const match = resolveTarget(raw);

            if (!match) return full;

            linked += 1;

            return `${prefix}${protect(
              pathLink(
                context,
                match.target,
                match.directory,
              ),
            )}`;
          },
        );

        return line.replace(
          /\u0000README_LINK_(\d+)\u0000/g,
          (
            full,
            index: string,
          ) => {
            return protectedLinks[Number(index)] ?? full;
          },
        );
      })
      .join('\n'),

    linked,
  };
}

function productOutput(
  sectionsFile: string | undefined,
  files: string[],
  lineBudget: number,
): ProductOutput {
  if (
    sectionsFile
    && existsSync(resolve(sectionsFile))
  ) {
    try {
      const parsed = JSON.parse(
        readFileSync(resolve(sectionsFile), 'utf8'),
      ) as {
        markdown?: unknown;
        sections?: ProductSectionStats[];
      };

      if (
        typeof parsed.markdown === 'string'
        && Array.isArray(parsed.sections)
        && parsed.sections.length === PRODUCT_SECTIONS.length
      ) {
        return {
          markdown: parsed.markdown,
          stats: parsed.sections,
        };
      }
    } catch (error) {
      console.warn(
        `Invalid sections artifact; recalculating: ${String(error)}`,
      );
    }
  }

  return buildProductReadmeSections(
    files,
    lineBudget,
  );
}

function dependencyVersion(
  pkg: PackageJson,
  name: string,
): string {
  return pkg.dependencies?.[name]
    ?? pkg.devDependencies?.[name]
    ?? 'not declared';
}

function packageManager(pkg: PackageJson): string {
  return pkg.packageManager?.split('@')[0]
    || (
      existsSync(join(ROOT, 'pnpm-lock.yaml'))
        ? 'pnpm'
        : 'npm'
    );
}

function fileCount(
  files: string[],
  pattern: RegExp,
): number {
  return files.filter((file) => pattern.test(file)).length;
}

function rootTable(
  files: string[],
  context: RepoContext,
): string[] {
  const counts = new Map<string, number>();

  for (const file of files) {
    const root = file.includes('/')
      ? file.slice(0, file.indexOf('/'))
      : '(root)';

    counts.set(
      root,
      (counts.get(root) ?? 0) + 1,
    );
  }

  return [...counts.entries()]
    .filter(([root]) => root !== '(root)')
    .sort(
      (left, right) => (
        right[1] - left[1]
        || left[0].localeCompare(right[0])
      ),
    )
    .slice(0, 20)
    .map(
      ([root, count]) => (
        `| ${pathLink(context, root, true)} | ${count} |`
      ),
    );
}

function recentCommits(
  context: RepoContext,
): string[] {
  const history = git([
    'log',
    '-8',
    '--pretty=format:%H%x09%cI%x09%an%x09%s',
  ]);

  if (!history) {
    return [
      '- Git history was unavailable during generation.',
    ];
  }

  return [
    '| Commit | Date | Author | Change |',
    '|---|---|---|---|',

    ...history
      .split(/\r?\n/g)
      .map((line) => {
        const [
          sha,
          date,
          author,
          ...message
        ] = line.split('\t');

        return `| ${commitLink(context, sha)} | ${date} | ${author.replace(/\|/g, '\\|')} | ${message.join('\t').replace(/\|/g, '\\|')} |`;
      }),
  ];
}

function environmentBlock(
  files: Set<string>,
): string[] {
  const source = files.has('.env.example')
    ? '.env.example'
    : files.has('.env.local.example')
      ? '.env.local.example'
      : undefined;

  if (!source) {
    return [
      '```env',
      '# No tracked environment example file was found.',
      '```',
    ];
  }

  const names = readFileSync(
    join(ROOT, source),
    'utf8',
  )
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(
      (line) => (
        /^[A-Za-z_][A-Za-z0-9_]*=/.test(line)
      ),
    )
    .map(
      (line) => (
        `${line.slice(0, line.indexOf('='))}=`
      ),
    )
    .slice(0, 30);

  return [
    '```env',
    ...(
      names.length
        ? names
        : ['# Add required variables here.']
    ),
    '```',
  ];
}

function frontDoor(
  files: string[],
  pkg: PackageJson,
  context: RepoContext,
): string {
  const fileSet = new Set(files);
  const pm = packageManager(pkg);
  const scripts = pkg.scripts ?? {};

  const docs = [
    'docs/AGENT_PLAYBOOK.md',
    'docs/GENERATION_LAW.md',
    'docs/CONSTITUTION.md',
    'docs/NAMING_AUTHORITY.md',
    'docs/FEATURE_STATUS.md',
    'docs/LAW.md',
    'docs/ARCHITECTURE.md',
    'ARCHITECTURE.md',
    'REPO_STATE.md',
    'docs/HANDOFF.md',
    'docs/BUGS.md',
    'FILE_TREE.md',
  ].filter((file) => fileSet.has(file));

  const pages = files.filter(
    (file) => (
      /^app\/(?:.+\/)?page\.(tsx?|jsx?)$/.test(file)
    ),
  );

  const validation = [
    scripts.typecheck && `${pm} typecheck`,
    scripts.lint && `${pm} lint`,
    (
      scripts.test
      || scripts['test:ci']
    ) && `${pm} ${scripts.test ? 'test' : 'test:ci'}`,
    scripts.build && `${pm} build`,
    scripts.preflight && `${pm} preflight`,
  ].filter(
    (value): value is string => Boolean(value),
  );

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

    ...PRODUCT_SECTIONS.map(
      (section) => (
        `- [${section.number}. ${section.title}](#${slug(`${section.number}. ${section.title}`)})`
      ),
    ),

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
    `| Tracked non-media files | ${files.length} |`,
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
    scripts.dev
      ? `${pm} dev`
      : `${pm} start`,
    '```',
    '',

    '### Validate',
    '',

    '```bash',
    ...(
      validation.length
        ? validation
        : ['# No validation scripts are declared.']
    ),
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

    ...pages
      .slice(0, 20)
      .map(
        (file) => (
          `- ${pathLink(context, file)}`
        ),
      ),
    '',

    '### Governing and operational documents',
    '',

    ...(
      docs.length
        ? docs.map(
          (file) => (
            `- ${pathLink(context, file)}`
          ),
        )
        : [
          '- No configured governing document was found.',
        ]
    ),
    '',

    '### README ownership',
    '',

    `The complete README is written by ${pathLink(context, 'scripts/generate-readme.ts')}. Semantic product evidence is computed by ${pathLink(context, 'scripts/readme-autosync.ts')}. The workflow entry point is ${pathLink(context, '.github/workflows/readme-autosync.yml')}.`,
    '',

    `Source snapshot: ${commitLink(context)} — ${context.commitMessage.replace(/\|/g, '\\|')}.`,
    '',
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');
}

function validate(markdown: string): void {
  const failures: string[] = [];

  if (!markdown.startsWith('# DREAMengin\n')) {
    failures.push('missing canonical H1');
  }

  if (!markdown.includes(PRODUCT_START)) {
    failures.push('missing product start marker');
  }

  if (!markdown.includes(PRODUCT_END)) {
    failures.push('missing product end marker');
  }

  const numbered = (
    markdown.match(/^## \d+\./gm)
    ?? []
  ).length;

  if (numbered < PRODUCT_SECTIONS.length + 3) {
    failures.push('missing numbered sections');
  }

  if (failures.length) {
    throw new Error(
      `README validation failed: ${failures.join('; ')}`,
    );
  }
}

function atomicWrite(
  file: string,
  content: string,
): void {
  const temporary = `${file}.tmp-${process.pid}`;

  mkdirSync(
    dirname(file),
    {
      recursive: true,
    },
  );

  writeFileSync(
    temporary,
    content,
    'utf8',
  );

  renameSync(
    temporary,
    file,
  );
}

function main(): void {
  const args = parseArgs(
    process.argv.slice(2),
  );

  const requestedBudget = Number(
    arg(args, 'max-lines')
    ?? arg(args, 'line-budget')
    ?? '2800',
  );

  const lineBudget = (
    Number.isFinite(requestedBudget)
    && requestedBudget >= 800
  )
    ? requestedBudget
    : 2800;

  const files = trackedFiles(
    arg(args, 'changed-files'),
  );

  if (!files.length) {
    throw new Error(
      'No tracked repository files were found.',
    );
  }

  const pkg = packageJson();
  const context = repoContext();

  const product = productOutput(
    arg(args, 'sections-file'),
    files,
    lineBudget,
  );

  const linkedProduct = linkifyProductMarkdown(
    product.markdown,
    files,
    context,
  );

  const previous = existsSync(README_PATH)
    ? readFileSync(README_PATH, 'utf8')
    : '';

  const next = [
    frontDoor(
      files,
      pkg,
      context,
    ),

    linkedProduct.markdown,

    '## Recent Changes',
    '',

    ...recentCommits(context),
    '',

    '## README Generation Contract',
    '',

    `- Every run rebuilds the complete ${pathLink(context, 'README.md')} from tracked repository evidence.`,
    `- Product sections come from semantic path, keyword, route, API, component, hook, import, export, and behavior analysis in ${pathLink(context, 'scripts/readme-autosync.ts')}.`,
    `- This run converted ${linkedProduct.linked} recognized product-evidence paths into GitHub links.`,
    '- The write is atomic and validated before README.md is replaced.',
    '- The output is idempotent for the same commit and inputs.',
    '',
  ]
    .join('\n')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd()
    + '\n';

  validate(next);

  atomicWrite(
    README_PATH,
    next,
  );

  const lineCount = (
    next.split('\n').length - 1
  );

  if (lineCount > lineBudget) {
    console.warn(
      `README has ${lineCount} lines; requested budget is ${lineBudget}.`,
    );
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    repository: context.repository,
    sourceBranch: context.branch,
    sourceCommit: context.commit,
    readmeChanged: previous !== next,
    trackedFiles: files.length,
    linkedPathReferences: linkedProduct.linked,
    lineBudget,
    lineBudgetExceeded: lineCount > lineBudget,
    lineCount,
    productSections: product.stats,
    contentSha256: createHash('sha256')
      .update(next)
      .digest('hex'),
  };

  const summaryFile = arg(
    args,
    'summary-file',
  );

  if (summaryFile) {
    const absolute = resolve(summaryFile);

    mkdirSync(
      dirname(absolute),
      {
        recursive: true,
      },
    );

    writeFileSync(
      absolute,
      `${JSON.stringify(summary, null, 2)}\n`,
      'utf8',
    );
  }

  console.log(
    JSON.stringify(
      summary,
      null,
      2,
    ),
  );
}

main();
