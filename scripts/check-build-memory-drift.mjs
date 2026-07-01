#!/usr/bin/env node


import fs   from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const MEM  = path.join(ROOT, 'build-memory');



function rel(p) { return path.relative(ROOT, p); }

function readJSON(name) {
  const file = path.join(MEM, name);
  if (!fs.existsSync(file)) {
    fail(`build-memory/${name} does not exist — run: node scripts/sync-build-memory.mjs`);
    return null;
  }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readFile(p) {
  try { return fs.readFileSync(p, 'utf8'); }
  catch { return ''; }
}

function walk(dir, ext = ['.ts', '.tsx']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full, ext));
    } else if (ext.some((e) => entry.name.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

const drifts = [];
function drift(category, message) {
  drifts.push(`[${category}] ${message}`);
}
let hardFail = false;
function fail(message) {
  hardFail = true;
  console.error(`❌ FATAL: ${message}`);
}



function checkRoutes(mem) {
  if (!mem) return;
  const memPaths = new Set(mem.routes.map((r) => r.path));
  const apiDir   = path.join(ROOT, 'app', 'api');

  const routeFiles = walk(apiDir).filter((f) => f.endsWith('route.ts'));
  for (const f of routeFiles) {
    const relPath = rel(f);
    const urlPath = relPath
      .replace(/^app/, '')
      .replace(/\/route\.ts$/, '')
      .replace(/\\/g, '/') || '/';

    if (!memPaths.has(urlPath)) {
      drift('routes', `Route "${urlPath}" (${relPath}) is not in build-memory/routes.json`);
    }
  }

  
  for (const route of mem.routes) {
    const filePath = path.join(ROOT, route.file);
    if (!fs.existsSync(filePath)) {
      drift('routes', `build-memory/routes.json references "${route.path}" but file "${route.file}" no longer exists`);
    }
  }
}



function checkActions(mem) {
  if (!mem) return;
  const memFiles = new Set(mem.actions.map((a) => a.file));
  const apiDir   = path.join(ROOT, 'app', 'api');

  const routeFiles = walk(apiDir).filter((f) => f.endsWith('route.ts'));
  for (const f of routeFiles) {
    const relPath = rel(f);
    if (!memFiles.has(relPath)) {
      drift('actions', `API route "${relPath}" is not in build-memory/actions.json`);
    }
  }

  
  const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
  for (const action of mem.actions) {
    if (action.type !== 'api-route-handler') continue;
    const src = readFile(path.join(ROOT, action.file));
    if (!src) {
      drift('actions', `build-memory/actions.json references "${action.file}" which no longer exists`);
      continue;
    }
    const actualMethods = HTTP_METHODS.filter((m) =>
      new RegExp(`export\\s+(?:async\\s+)?function\\s+${m}\\b`).test(src) ||
      new RegExp(`export\\s+const\\s+${m}\\s*=`).test(src)
    );
    const memMethods = action.http_handlers || [];
    for (const m of actualMethods) {
      if (!memMethods.includes(m)) {
        drift('actions', `Route "${action.file}" exports HTTP handler "${m}" not recorded in build-memory/actions.json`);
      }
    }
  }
}



function checkSchema(mem) {
  if (!mem) return;
  const memTables = new Set(mem.tables.map((t) => t.table));

  const supabaseTypes = path.join(ROOT, 'types', 'supabase.ts');
  const src = readFile(supabaseTypes);
  if (!src) return;

  
  const lines = src.split('\n');
  let inTables = false, depth = 0;
  const liveTablesFromTypes = new Set();

  for (const line of lines) {
    if (!inTables) {
      if (/^\s*Tables:\s*\{/.test(line)) { inTables = true; depth = 1; }
      continue;
    }
    const opens  = (line.match(/\{/g) || []).length;
    const closes = (line.match(/\}/g) || []).length;
    if (depth === 1) {
      const tableMatch = line.trim().match(/^([a-z][a-z0-9_]*):\s*\{/);
      if (tableMatch) liveTablesFromTypes.add(tableMatch[1]);
    }
    depth += opens - closes;
    if (depth <= 0) break;
  }

  
  const liveTablesFromMigrations = new Set();
  const migrationsDir = path.join(ROOT, 'supabase', 'migrations');
  if (fs.existsSync(migrationsDir)) {
    for (const f of fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.sql'))) {
      const sqlSrc = readFile(path.join(migrationsDir, f));
      const re = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:public\.)?([a-z][a-z0-9_]*)\s*\(/gi;
      let m;
      while ((m = re.exec(sqlSrc)) !== null) {
        const tbl = m[1].toLowerCase();
        if (!['is', 'if'].includes(tbl)) liveTablesFromMigrations.add(tbl);
      }
    }
  }

  const allLive = new Set([...liveTablesFromTypes, ...liveTablesFromMigrations]);

  
  for (const t of liveTablesFromTypes) {
    if (!memTables.has(t)) {
      drift('schema', `Table "${t}" exists in types/supabase.ts but is missing from build-memory/schema.json`);
    }
  }

  
  for (const table of mem.tables) {
    
    if (table.source === 'code-only') continue;
    if (!allLive.has(table.table)) {
      drift('schema', `build-memory/schema.json references table "${table.table}" which no longer exists in types/supabase.ts or any migration`);
    }
  }
}



function checkEvents(mem) {
  if (!mem) return;
  const memEvents = new Set(mem.events.map((e) => e.event));
  const files = walk(ROOT);

  for (const f of files) {
    const src = readFile(f);

    
    const re1 = /new\s+CustomEvent[<(]\s*[^,)>]*?\s*[>)]?\s*\(\s*['"`]([^'"`]+)['"`]/g;
    let m;
    while ((m = re1.exec(src)) !== null) {
      const name = m[1];
      if (!memEvents.has(name)) {
        drift('events', `CustomEvent "${name}" in ${rel(f)} is not in build-memory/events.json`);
      }
    }

    // Find EVENT_NAME constant definitions
    const re3 = /(?:const|let)\s+EVENT_NAME\s*=\s*['"`]([^'"`]+)['"`]/g;
    while ((m = re3.exec(src)) !== null) {
      const name = m[1];
      if (!memEvents.has(name)) {
        drift('events', `EVENT_NAME "${name}" in ${rel(f)} is not in build-memory/events.json`);
      }
    }
  }
}

// ─── check 5: schema column usage ────────────────────────────────────────────

function checkSchemaUsage(mem) {
  if (!mem) return;

  const allTableNames = new Set(mem.tables.map((t) => t.table));

  // Scan for .from('table_name') Supabase client calls
  const files = walk(ROOT);
  const reported = new Set();
  for (const f of files) {
    const src = readFile(f);
    const tableRefs = [...src.matchAll(/\.from\(['"`]([a-z][a-z0-9_]*)['"`]\)/g)];
    for (const m of tableRefs) {
      const tableName = m[1];
      const key = `${rel(f)}::${tableName}`;
      if (!allTableNames.has(tableName) && !reported.has(key)) {
        reported.add(key);
        drift('schema-usage', `File ${rel(f)} queries table "${tableName}" which is not in build-memory/schema.json`);
      }
    }
  }
}



console.log('🔍  Checking build-memory drift...\n');

const memRoutes  = readJSON('routes.json');
const memActions = readJSON('actions.json');
const memSchema  = readJSON('schema.json');
const memEvents  = readJSON('events.json');

if (hardFail) process.exit(1);

checkRoutes(memRoutes);
checkActions(memActions);
checkSchema(memSchema);
checkEvents(memEvents);
checkSchemaUsage(memSchema);

if (drifts.length === 0) {
  console.log('✅  No drift detected — build memory is current.');
  process.exit(0);
} else {
  console.log(`❌  Drift detected — ${drifts.length} issue(s):\n`);
  drifts.forEach((d, i) => console.log(`  ${i + 1}. ${d}`));
  console.log('\nRun `node scripts/sync-build-memory.mjs` to regenerate build-memory and commit the result.');
  process.exit(1);
}