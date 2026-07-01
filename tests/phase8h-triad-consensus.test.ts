

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const root = process.cwd();

describe('Phase 8 §H — Triad consensus gate on account delete (Point 69)', () => {
  it('delete-dream route imports runTriadConsensus', () => {
    const src = readFileSync(
      join(root, 'app/api/account/delete-dream/route.ts'),
      'utf-8',
    );
    expect(src).toContain('runTriadConsensus');
  });

  it('delete-dream route calls runTriadConsensus before deletion', () => {
    const src = readFileSync(
      join(root, 'app/api/account/delete-dream/route.ts'),
      'utf-8',
    );
    
    const consensusPos  = src.indexOf('runTriadConsensus');
    const deletionPos   = src.indexOf('.delete()');
    expect(consensusPos).toBeGreaterThanOrEqual(0);
    expect(deletionPos).toBeGreaterThan(consensusPos);
  });

  it('returns 403 when triad blocks the action', () => {
    const src = readFileSync(
      join(root, 'app/api/account/delete-dream/route.ts'),
      'utf-8',
    );
    expect(src).toContain('TRIAD_BLOCKED');
    expect(src).toContain('403');
  });
});

describe('Phase 8 §H — No API key in NEXT_PUBLIC_ (Point 74)', () => {
  it('no AI provider key is exposed via NEXT_PUBLIC_', () => {
    
    
    const AI_KEY_PATTERNS = [
      'NEXT_PUBLIC_GROQ',
      'NEXT_PUBLIC_OPENAI',
      'NEXT_PUBLIC_ANTHROPIC',
      'NEXT_PUBLIC_HUGGINGFACE',
      'NEXT_PUBLIC_HF_',
      'NEXT_PUBLIC_GOOGLE_AI',
      'NEXT_PUBLIC_COHERE',
      'NEXT_PUBLIC_MISTRAL',
      'NEXT_PUBLIC_SERVICE_ROLE',
      'NEXT_PUBLIC_SECRET',
      'NEXT_PUBLIC_PRIVATE_KEY',
      'NEXT_PUBLIC_API_KEY',
    ];

    const output = execSync(
      'grep -rn "process\\.env\\.NEXT_PUBLIC_" --include="*.ts" --include="*.tsx" . ' +
      '--exclude-dir=node_modules --exclude-dir=.next 2>/dev/null || true',
      { cwd: root, encoding: 'utf-8' },
    );

    const lines = output.split('\n').filter(Boolean);
    for (const line of lines) {
      const codePart = line.split(':').slice(2).join(':').trimStart();
      
      if (codePart.startsWith('*') || codePart.startsWith('//')) continue;

      const match = codePart.match(/NEXT_PUBLIC_[A-Z0-9_]+/g) ?? [];
      for (const variable of match) {
        const isForbidden = AI_KEY_PATTERNS.some((p) => variable.startsWith(p));
        expect(
          !isForbidden,
          `Found AI API key exposed via NEXT_PUBLIC_: ${variable} in: ${line}`,
        ).toBe(true);
      }
    }
  });
});

describe('Phase 8 §H — No legacy rate limit references (Point 75)', () => {
  it('no rate_limit_hit RPC references in active code', () => {
    const output = execSync(
      'grep -rn "rate_limit_hit" --include="*.ts" --include="*.tsx" . ' +
      '--exclude-dir=node_modules --exclude-dir=.next 2>/dev/null || true',
      { cwd: root, encoding: 'utf-8' },
    );
    
    const activeRefs = output
      .split('\n')
      .filter(Boolean)
      .filter((line) => !line.includes('//') && !line.includes('* ') && !line.includes('tests/'));
    expect(activeRefs).toHaveLength(0);
  });

  it('no rate_limit_counters table references in active code', () => {
    const output = execSync(
      'grep -rn "rate_limit_counters" --include="*.ts" --include="*.tsx" . ' +
      '--exclude-dir=node_modules --exclude-dir=.next 2>/dev/null || true',
      { cwd: root, encoding: 'utf-8' },
    );
    const activeRefs = output
      .split('\n')
      .filter(Boolean)
      .filter((line) => !line.includes('//') && !line.includes('* ') && !line.includes('tests/'));
    expect(activeRefs).toHaveLength(0);
  });

  it('check_ai_rate_limit is the canonical RPC used in rateLimit.ts', () => {
    const src = readFileSync(join(root, 'lib/ai/rateLimit.ts'), 'utf-8');
    expect(src).toContain('check_ai_rate_limit');
  });
});