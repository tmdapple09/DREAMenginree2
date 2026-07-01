#!/usr/bin/env node

import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');




const CANONICAL_ENGIN_FILENAMES = new Set([
  'engin.StarMakerEngin.tsx',
  'engin.GameEngin.tsx',
  'engin.LabEngin.tsx',
  'engin.CodeEngin.tsx',
  'engin.BrandingEngin.tsx',
  'engin.ContentEngin.tsx',
]);


const CANONICAL_ENGIN_BASENAMES = new Set([
  'StarMakerEngin',
  'GameEngin',
  'LabEngin',
  'CodeEngin',
  'BrandingEngin',
  'ContentEngin',
]);




const ENGIN_HOME_DIRS = ['engins'];



const SCAN_DIRS = [
  'app',
  'components',
  'coresurfaces',
  'daydreams',
  'dreamdmbar',
  'engins',
  'src',
];

const SKIP_DIRECTORY_NAMES = new Set([
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
  'out',
  'coverage',
  'archive',
]);




const MIGRATION_BACKLOG_ALLOWED = new Set([
  
  
  'engins/engin.StarMakerEngin.tsx',
  'engins/engin.GameEngin.tsx',
  'engins/engin.LabEngin.tsx',
  'engins/engin.CodeEngin.tsx',
  'engins/engin.BrandingEngin.tsx',
  'engins/engin.ContentEngin.tsx',
]);







const APPROVED_DREAM_SUBPREFIXES = new Set([
  'cartridge',
  'panel',
  'hud',
  'remote',
  'scene',
  'window',
  'widget',
  'menu',
  'bar',
  'shell',
  'overlay',
]);

const APPROVED_DREAMSURFACE_SUBPREFIXES = new Set([
  'core',
  'daydream',
  'module',
]);




async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIRECTORY_NAMES.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

const violations = [];

for (const rel of SCAN_DIRS) {
  const dir = path.join(ROOT, rel);
  try {
    await stat(dir);
  } catch {
    continue;
  }

  for await (const file of walk(dir)) {
    const base = path.basename(file);
    const relFromRoot = path.relative(ROOT, file).split(path.sep).join('/');

    
    if (!base.endsWith('.tsx')) continue;

    
    if (base.startsWith('engin.') && !CANONICAL_ENGIN_FILENAMES.has(base)) {
      violations.push(
        `${relFromRoot} — uses the \`engin.\` prefix but is not one of the 6 canonical Engin filenames (NAMING_AUTHORITY.md §14.2).`,
      );
      continue;
    }

    
    if (/^Engin\./.test(base)) {
      violations.push(
        `${relFromRoot} — \`Engin.\` prefix must be lowercase \`engin.\` (NAMING_AUTHORITY.md §14.5).`,
      );
    }
    if (/^Dream\./.test(base)) {
      violations.push(
        `${relFromRoot} — \`Dream.\` prefix must be lowercase \`dream.\` (NAMING_AUTHORITY.md §14.5).`,
      );
    }
    if (/^DreamSurface\./.test(base) || /^dreamSurface\./.test(base)) {
      violations.push(
        `${relFromRoot} — prefix must be lowercase \`dreamsurface.\` — one word (NAMING_AUTHORITY.md §14.5).`,
      );
    }
    if (/^engin[-_]/.test(base) || /^dream[-_]/.test(base) || /^dreamsurface[-_]/.test(base)) {
      violations.push(
        `${relFromRoot} — separator must be a single dot, not \`-\` or \`_\` (NAMING_AUTHORITY.md §14.5).`,
      );
    }

    
    
    
    
    const segments = base.slice(0, -'.tsx'.length).split('.');
    if (segments[0] === 'dream' && segments.length >= 3) {
      const sub = segments[1];
      if (!APPROVED_DREAM_SUBPREFIXES.has(sub)) {
        violations.push(
          `${relFromRoot} — \`dream.${sub}.\` is not an approved sub-prefix. Allowed: ${[...APPROVED_DREAM_SUBPREFIXES].sort().join(', ')} (NAMING_AUTHORITY.md §14.8.2).`,
        );
      }
    }
    if (segments[0] === 'dreamsurface' && segments.length >= 3) {
      const sub = segments[1];
      if (!APPROVED_DREAMSURFACE_SUBPREFIXES.has(sub)) {
        violations.push(
          `${relFromRoot} — \`dreamsurface.${sub}.\` is not an approved sub-prefix. Allowed: ${[...APPROVED_DREAMSURFACE_SUBPREFIXES].sort().join(', ')} (NAMING_AUTHORITY.md §14.8.3).`,
        );
      }
    }

    
    
    const stem = base.slice(0, -'.tsx'.length);
    const inEnginHome = ENGIN_HOME_DIRS.some(
      (home) =>
        relFromRoot === `${home}/${base}` ||
        relFromRoot.startsWith(`${home}/`) === false
          ? false
          : path.dirname(relFromRoot) === home,
    );
    if (
      inEnginHome &&
      CANONICAL_ENGIN_BASENAMES.has(stem) &&
      !MIGRATION_BACKLOG_ALLOWED.has(relFromRoot)
    ) {
      violations.push(
        `${relFromRoot} — canonical Engin in an Engin home dir must be named \`engin.${stem}.tsx\` (NAMING_AUTHORITY.md §14.2).`,
      );
    }
  }
}

if (violations.length > 0) {
  console.error('Engin/Dream/Surface filename grammar violations:');
  for (const v of violations) console.error(`  - ${v}`);
  console.error(
    '\nSee docs/NAMING_AUTHORITY.md §14 for the rule. Rename files to match, or — if the file is part of the staged migration — add it to MIGRATION_BACKLOG_ALLOWED in scripts/check-engin-filenames.mjs.',
  );
  process.exit(1);
}

console.log('Engin/Dream/Surface filename grammar OK.');
