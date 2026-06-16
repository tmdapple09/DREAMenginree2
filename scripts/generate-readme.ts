#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import {
  runReadmeAutosync,
  SECTION_REGISTRY,
} from './readme-autosync';

/**
 * scripts/generate-readme.ts
 *
 * Stable workflow entry point for README generation.
 *
 * Full rebuild, no args:
 *   pnpm tsx scripts/generate-readme.ts
 *   → evaluates the live repo so every registered and discovered top-level
 *     README section can be refreshed.
 *
 * Targeted sync:
 *   pnpm tsx scripts/generate-readme.ts --changed-files <path> [--summary-file <path>]
 *   → refreshes sections touched by the listed changed files.
 *
 * The generation engine lives in scripts/readme-autosync.ts. Keep this file as
 * the thin entry point so workflows, agents, and humans all call one stable path.
 */

const REPO_ROOT = process.cwd();
const SKIP_DIRS = new Set(['.git', '.next', 'node_modules', 'coverage', '__pycache__']);

function parseArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function hasFlag(name: string): boolean {
  return process.argv.includes(name);
}

function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+/, '');
}

function readChangedFiles(path: string): string[] {
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8')
    .split(/\r?\n/g)
    .map((line) => normalizePath(line.trim()))
    .filter(Boolean);
}

function walkFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      out.push(...walkFiles(full));
    } else {
      out.push(normalizePath(relative(REPO_ROOT, full)));
    }
  }
  return out;
}

function registrySentinels(): string[] {
  const sentinels: string[] = [];
  for (const section of SECTION_REGISTRY) {
    const first = section.globs[0];
    if (!first) continue;
    sentinels.push(first.replace(/\/\*\*$/, '/index.ts').replace(/\/\*[^*].*$/, '/index.ts'));
    if (section.subsections) {
      for (const subsection of Object.values(section.subsections)) {
        const subFirst = subsection.globs[0];
        if (!subFirst) continue;
        sentinels.push(subFirst.replace(/\/\*\*$/, '/index.ts').replace(/\/\*[^*].*$/, '/index.ts'));
      }
    }
  }
  return sentinels;
}

function allRepositoryFilesForFullRebuild(): string[] {
  return [...new Set([...registrySentinels(), ...walkFiles(REPO_ROOT)])];
}

const changedFilesArg = parseArg('--changed-files');
const summaryFileArg = parseArg('--summary-file');
const fullRebuild = hasFlag('--full') || !changedFilesArg;

const changedFiles = !fullRebuild && changedFilesArg
  ? readChangedFiles(resolve(changedFilesArg))
  : allRepositoryFilesForFullRebuild();

if (fullRebuild) {
  console.log('generate-readme: running full README rebuild from live repo state.');
}

const summary = runReadmeAutosync({
  changedFiles,
  fullRebuild,
  summaryFile: summaryFileArg ? resolve(summaryFileArg) : undefined,
});

console.log(JSON.stringify(summary, null, 2));
