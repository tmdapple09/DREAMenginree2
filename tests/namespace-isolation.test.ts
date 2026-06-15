import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join, resolve } from 'path';

// Walk all .ts/.tsx files under a directory
function walkFiles(dir: string, ext = ['.ts', '.tsx']): string[] {
  const results: string[] = [];
  let dirEntries: ReturnType<typeof readdirSync>;
  try {
    dirEntries = readdirSync(dir);
  } catch {
    return results;
  }
  for (const entry of dirEntries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkFiles(full, ext));
    } else if (ext.some((e) => full.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

const RULESET_ROOT = resolve(__dirname, '../engins/rulesets');
const ENGINE_RUNTIME_ROOT = resolve(__dirname, '../engine/runtime');

describe('Namespace Isolation Gate (Rule 5)', () => {
  it('rulesets files MUST NOT import from engine/runtime directly', () => {
    const dreamFiles = walkFiles(RULESET_ROOT);
    const violations: string[] = [];
    for (const file of dreamFiles) {
      const content = readFileSync(file, 'utf-8');
      // Match any import that resolves to engine/runtime (relative or alias)
      if (
        /from\s+['"][^'"]*engin[\\/]core[^'"]*['"]/.test(content) ||
        /from\s+['"]@\/engin\/core[^'"]*['"]/.test(content)
      ) {
        violations.push(file);
      }
    }
    expect(
      violations,
      `ruleset files importing engine/runtime directly:\n${violations.join('\n')}`
    ).toHaveLength(0);
  });

  it('engine/runtime files MUST NOT import from rulesets directly', () => {
    const enginFiles = walkFiles(ENGINE_RUNTIME_ROOT);
    const violations: string[] = [];
    for (const file of enginFiles) {
      const content = readFileSync(file, 'utf-8');
      if (
        /from\s+['"][^'"]*dream[\\/]rulesets[^'"]*['"]/.test(content) ||
        /from\s+['"]@\/dream\/[^'"]*['"]/.test(content)
      ) {
        violations.push(file);
      }
    }
    expect(
      violations,
      `engine/runtime files importing rulesets directly:\n${violations.join('\n')}`
    ).toHaveLength(0);
  });

  it('dreamsurface IS allowed to import from both engine/runtime and dream/*', () => {
    // This test just verifies the bridge file exists and imports from both sides
    const bridgeFile = join(ENGINE_RUNTIME_ROOT, 'dreamsurface', 'dreamsurface.bridge.ts');
    const content = readFileSync(bridgeFile, 'utf-8');
    expect(content).toMatch(/engin/);
    expect(content).toMatch(/dream/);
  });

  it('engine/state/base.json must be valid JSON with genesis:true', () => {
    const basePath = resolve(__dirname, '../engine/state/base.json');
    const raw = readFileSync(basePath, 'utf-8');
    const parsed = JSON.parse(raw);
    expect(parsed.genesis).toBe(true);
    expect(parsed.namespace).toBe('engin.state.base');
  });
});
