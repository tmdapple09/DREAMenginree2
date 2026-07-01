

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { describe, it, expect } from 'vitest';

const ROOT = join(__dirname, '..');


function collectFiles(dir: string, ext: string[] = ['.tsx', '.ts']): string[] {
  const results: string[] = [];
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return results;
  }
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.git' || entry === '.next') continue;
    const full = join(dir, entry);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      results.push(...collectFiles(full, ext));
    } else if (ext.some((e) => entry.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}


const BANNED_FILE_FRAGMENTS = [
  'Dashboard',
  'Workspace',
  'TopBar',
  '-shim',
];


const BANNED_EXPORT_PATTERNS = [
  /export\s+default\s+function\s+WorkspaceDashboard/,
  /export\s+default\s+function\s+\w*Dashboard\w*/,
  /export\s+(default\s+)?class\s+\w*Dashboard\w*/,
];


const SCAN_DIRS = [
  join(ROOT, 'components'),
  join(ROOT, 'dreamdmbar'),
  join(ROOT, 'app'),
  join(ROOT, 'engins'),
  join(ROOT, 'lib'),
  join(ROOT, 'daydreams'),
];

function relPath(p: string): string {
  return relative(ROOT, p);
}

describe('Canonical Naming Authority — banned file names', () => {
  const allFiles = SCAN_DIRS.flatMap((d) => collectFiles(d, ['.tsx']));

  for (const banned of BANNED_FILE_FRAGMENTS) {
    it(`no .tsx file base name contains "${banned}"`, () => {
      const violations = allFiles.filter((f) => {
        const base = f.split('/').pop() ?? '';
        return base.includes(banned);
      });
      if (violations.length > 0) {
        throw new Error(
          `Banned fragment "${banned}" found in file names:\n` +
            violations.map((v) => `  ${relPath(v)}`).join('\n') +
            `\n\nAction: rename or delete per docs/NAMING_AUTHORITY.md`,
        );
      }
      expect(violations).toHaveLength(0);
    });
  }
});

describe('Canonical Naming Authority — banned export names', () => {
  const allTsxFiles = SCAN_DIRS.flatMap((d) => collectFiles(d, ['.tsx']));

  for (const pattern of BANNED_EXPORT_PATTERNS) {
    it(`no .tsx file exports a symbol matching ${pattern}`, () => {
      const violations: string[] = [];
      for (const f of allTsxFiles) {
        let src: string;
        try {
          src = readFileSync(f, 'utf8');
        } catch {
          continue;
        }
        if (pattern.test(src)) {
          violations.push(relPath(f));
        }
      }
      if (violations.length > 0) {
        throw new Error(
          `Banned export pattern ${pattern} found in:\n` +
            violations.map((v) => `  ${v}`).join('\n') +
            `\n\nAction: rename the export per docs/NAMING_AUTHORITY.md`,
        );
      }
      expect(violations).toHaveLength(0);
    });
  }
});

describe('Canonical Naming Authority — one DreamDM Bar rule', () => {
  it('no .tsx file outside dreamdmbar/ exports a component named with "DreamBar" or "DreamDMBar" as a standalone component', () => {
    const outsideFiles = collectFiles(join(ROOT, 'components'), ['.tsx']).filter(
      (f) => !f.includes('/home/') || f.includes('dream.bar.'),
    );
    
    
    const violations = outsideFiles.filter((f) => {
      const base = f.split('/').pop() ?? '';
      return base === 'dream.bar.TopBar.tsx' || base === 'dream.bar.BottomBar.tsx';
    });
    expect(violations).toHaveLength(0);
  });
});

describe('Canonical Naming Authority — sparkle/shim decoratives', () => {
  const allTsxFiles = SCAN_DIRS.flatMap((d) => collectFiles(d, ['.tsx']));

  it('StarsBackground does not exist as an active component file', () => {
    const stars = allTsxFiles.find((f) => f.endsWith('dream.StarsBackground.tsx'));
    expect(stars).toBeUndefined();
  });

  it('beatcanvas does not exist as an active component file', () => {
    const beat = allTsxFiles.find((f) => f.endsWith('dream.beatcanvas.tsx'));
    expect(beat).toBeUndefined();
  });

  it('dreamdmbar-shim does not exist as an active component file', () => {
    const shim = allTsxFiles.find((f) => f.includes('dreamdmbar-shim'));
    expect(shim).toBeUndefined();
  });
});
