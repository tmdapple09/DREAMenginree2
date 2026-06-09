#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  runReadmeAutosync,
  SECTION_REGISTRY,
} from './readme-autosync';

/**
 * scripts/generate-readme.ts
 *
 * Entry point that drives README architectural generation.
 *
 * Supports two modes:
 *
 *   Full rebuild (no --changed-files arg):
 *     pnpm tsx scripts/generate-readme.ts
 *     → Regenerates every section in the SECTION_REGISTRY from the live repo.
 *
 *   Targeted sync (same interface as readme-autosync.ts):
 *     pnpm tsx scripts/generate-readme.ts --changed-files <path> [--summary-file <path>]
 *     → Only regenerates sections touched by the listed changed files.
 *
 * Both modes delegate to runReadmeAutosync() in readme-autosync.ts.
 * This file exists so workflows that invoke `scripts/generate-readme.ts`
 * have a stable entry point regardless of which invocation style they use.
 */

const __filename = fileURLToPath(import.meta.url);

function parseArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function readChangedFiles(path: string): string[] {
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8')
    .split(/\r?\n/g)
    .map((l) => l.trim())
    .filter(Boolean);
}

function allRegistryFiles(): string[] {
  // Return a synthetic "changed files" list containing one representative
  // glob target per section so computeAffected() marks every section dirty.
  const sentinels: string[] = [];
  for (const section of SECTION_REGISTRY) {
    // Use the first glob of each section, stripped of wildcards,
    // as a representative path that will match the section's own glob.
    const first = section.globs[0];
    if (!first) continue;
    // Convert  "engins/**"  →  "engins/index.ts"  (just needs to match)
    const base = first.replace(/\/\*\*$/, '/index.ts').replace(/\/\*[^*].*$/, '/index.ts');
    sentinels.push(base);
    if (section.subsections) {
      for (const sub of Object.values(section.subsections)) {
        const subFirst = sub.globs[0];
        if (!subFirst) continue;
        sentinels.push(subFirst.replace(/\/\*\*$/, '/index.ts').replace(/\/\*[^*].*$/, '/index.ts'));
      }
    }
  }
  return sentinels;
}

const changedFilesArg = parseArg('--changed-files');
const summaryFileArg  = parseArg('--summary-file');

const changedFiles = changedFilesArg
  ? readChangedFiles(resolve(changedFilesArg))
  : allRegistryFiles();

if (!changedFilesArg) {
  console.log('generate-readme: no --changed-files supplied — running full rebuild of all sections.');
}

const summary = runReadmeAutosync({
  changedFiles,
  summaryFile: summaryFileArg ? resolve(summaryFileArg) : undefined,
});

console.log(JSON.stringify(summary, null, 2));
