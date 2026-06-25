const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const ROOT = process.cwd();
const DRY_RUN = process.argv.includes('--dry-run');
const TEXT_EXTS = new Set(['.ts','.tsx','.js','.jsx','.mjs','.cjs','.json','.yml','.yaml']);
const IGNORE = new Set(['node_modules','.git','.next','.vercel','dist','build','coverage','.turbo']);
const changes = [];
const warnings = [];

function log(msg){ console.log(`[INFO] ${msg}`); }
function ok(msg){ console.log(`[OK] ${msg}`); }
function warn(msg){ warnings.push(msg); console.log(`[WARN] ${msg}`); }
function rel(p){ return p.split(path.sep).join('/'); }
function abs(p){ return path.join(ROOT, p); }
function exists(p){ return fs.existsSync(abs(p)); }
function isDir(p){ try { return fs.statSync(abs(p)).isDirectory(); } catch { return false; } }
function read(p){ return fs.readFileSync(abs(p), 'utf8'); }
function write(p, text){ if (DRY_RUN){ changes.push(`would write ${p}`); return; } fs.writeFileSync(abs(p), text, 'utf8'); changes.push(`wrote ${p}`); }
function rename(from, to){ if (DRY_RUN){ changes.push(`would rename ${from} -> ${to}`); return; } fs.renameSync(abs(from), abs(to)); changes.push(`renamed ${from} -> ${to}`); }

function walk(dir='.', out=[]){
  const full = abs(dir);
  for (const entry of fs.readdirSync(full, { withFileTypes: true })){
    if (entry.isDirectory() && IGNORE.has(entry.name)) continue;
    const p = rel(path.join(dir, entry.name)).replace(/^\.\//, '');
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function textFiles(){
  return walk().filter(file => file !== 'fix-repo.cjs' && TEXT_EXTS.has(path.extname(file).toLowerCase()));
}

function replaceInFiles(replacements){
  for (const file of textFiles()){
    let text = read(file);
    let next = text;
    for (const [from, to] of replacements){
      next = next.split(from).join(to);
    }
    if (next !== text){
      write(file, next);
      ok(`${file}: updated path references`);
    }
  }
}

function fixCodeEnginCaseCollision(){
  const oldDir = 'engins/CodeEngin';
  const newDir = 'engins/codeengin-ui';
  const lowerPeer = 'engins/codeengin';

  if (!exists(oldDir)){
    ok(`${oldDir} not present; no CodeEngin casing collision rename needed.`);
    return;
  }

  if (exists(lowerPeer) && !exists(newDir)){
    log(`Both ${oldDir} and ${lowerPeer} exist. Renaming ${oldDir} to ${newDir} to remove case-only collision.`);
    rename(oldDir, newDir);
    replaceInFiles([
      ['engins/CodeEngin', 'engins/codeengin-ui'],
      ['@/engins/CodeEngin', '@/engins/codeengin-ui'],
      ['./CodeEngin/', './codeengin-ui/'],
      ['./CodeEngin', './codeengin-ui'],
      ['workspace: \'engins/CodeEngin\'', 'workspace: \'engins/codeengin-ui\''],
      ['workspace: "engins/CodeEngin"', 'workspace: "engins/codeengin-ui"'],
    ]);
    return;
  }

  if (exists(newDir)){
    ok(`${newDir} already exists; updating any stale CodeEngin references.`);
    replaceInFiles([
      ['engins/CodeEngin', 'engins/codeengin-ui'],
      ['@/engins/CodeEngin', '@/engins/codeengin-ui'],
      ['./CodeEngin/', './codeengin-ui/'],
      ['./CodeEngin', './codeengin-ui'],
    ]);
    return;
  }

  warn(`${oldDir} exists, but ${lowerPeer} does not. No case-only collision proven; not renaming.`);
}

function removeExactSelfImports(){
  log('Checking for exact self-imports from ./ ...');
  for (const file of walk().filter(f => ['.ts','.tsx','.js','.jsx','.mjs','.cjs'].includes(path.extname(f)))){
    const text = read(file);
    const lines = text.split('\n');
    const kept = [];
    let removed = 0;

    for (const line of lines){
      const trimmed = line.trim();
      const isSelf =
        trimmed.startsWith('import ') &&
        (trimmed.includes(" from './'") || trimmed.includes(' from "./"') || trimmed === "import './';" || trimmed === 'import "./";');
      if (isSelf){ removed += 1; continue; }
      kept.push(line);
    }

    if (removed){
      write(file, kept.join('\n'));
      ok(`${file}: removed ${removed} exact self-import(s)`);
    }
  }
}

function checkUseDualRuntimeDuplicate(){
  const componentFile = 'components/runtime/dream.DualRuntimeContainer.tsx';
  const engineFile = 'engine/runtime/useDualRuntime.ts';

  if (!exists(componentFile)){
    warn(`${componentFile} not found.`);
    return;
  }

  if (!exists(engineFile)){
    warn(`${engineFile} not found; cannot compare useDualRuntime signatures.`);
    return;
  }

  const component = read(componentFile);
  const engine = read(engineFile);
  const componentHasZeroArgContextHook = component.includes('export function useDualRuntime(): DualRuntimeContextValue');
  const engineHasChannelHook = engine.includes('export function useDualRuntime(channel: DualRuntimeChannel)');

  if (componentHasZeroArgContextHook && engineHasChannelHook){
    ok('useDualRuntime duplicate names are intentional/incompatible: component hook is zero-arg context access; engine hook requires a runtime channel. No rewrite applied.');
    return;
  }

  warn('Could not prove useDualRuntime duplicate is safe or intentional. No rewrite applied.');
}

function checkIssueBotHeavyComponent(){
  const file = '.github/scripts/issue-bot.js';
  if (!exists(file)){
    warn(`${file} not found.`);
    return;
  }

  const text = read(file);
  const line = text.split('\n').find(l => l.includes('HeavyComponent'));
  if (!line){
    ok(`${file}: no HeavyComponent reference found.`);
    return;
  }

  if (line.includes('`') || text.includes('const suggestions = `')){
    ok(`${file}: HeavyComponent is inside generated markdown/example text, not an executable import. No rewrite applied.`);
    return;
  }

  warn(`${file}: HeavyComponent reference exists outside expected markdown context; review manually.`);
}

function verifyNoCodeEnginStaleRefs(){
  const hits = [];
  for (const file of textFiles()){
    const text = read(file);
    if (text.includes('engins/CodeEngin') || text.includes('@/engins/CodeEngin') || text.includes('./CodeEngin')) hits.push(file);
  }
  if (hits.length) warn(`Stale CodeEngin references remain in: ${hits.join(', ')}`);
  else ok('No stale engins/CodeEngin path references remain in text files.');
}

function runRepoStateIfPresent(){
  const script = 'scripts/generate-repo-state.mjs';
  if (!exists(script)){
    warn(`${script} not found; skipping repo-state generation.`);
    return;
  }
  try {
    execSync(`node ${script}`, { cwd: ROOT, stdio: 'inherit' });
    ok('Repo state generator ran successfully.');
  } catch (error){
    warn(`Repo state generator failed with exit code ${error.status ?? 'unknown'}.`);
  }
}

function main(){
  log(DRY_RUN ? 'Dry run mode.' : 'Apply mode.');
  fixCodeEnginCaseCollision();
  removeExactSelfImports();
  checkUseDualRuntimeDuplicate();
  checkIssueBotHeavyComponent();
  verifyNoCodeEnginStaleRefs();
  if (!DRY_RUN) runRepoStateIfPresent();

  if (changes.length) ok(`${DRY_RUN ? 'Would make' : 'Made'} ${changes.length} write operation(s).`);
  else ok('No file writes needed.');

  if (warnings.length) warn(`${warnings.length} warning(s) emitted.`);
}

main();
