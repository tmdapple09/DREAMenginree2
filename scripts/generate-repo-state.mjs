#!/usr/bin/env node

/**
 * DREAMengin Repo State Analyzer
 *
 * Full replacement script.
 *
 * Fix included:
 * - Does NOT ignore lib/supabase/**
 * - Only ignores root /supabase, so @/lib/supabase/server resolves correctly.
 *
 * Outputs:
 * - REPO_STATE.md
 * - repo-state.json
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const OUTPUT_MD = path.join(ROOT, "REPO_STATE.md");
const OUTPUT_JSON = path.join(ROOT, "repo-state.json");

const CODE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);

const RESOLVE_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".wasm",
];

const IGNORE = new Set([
  "node_modules",
  ".git",
  ".next",
  ".vercel",
  "dist",
  "build",
  "coverage",
  ".turbo",
  "docs",
  ".husky",
  "public",
]);

// Root-only ignores are skipped only when they are at repo root.
// This prevents lib/supabase/** from being ignored.
const ROOT_ONLY_IGNORE = new Set([
  "supabase",
]);

function toPosix(filePath) {
  return filePath.replace(/\\/g, "/");
}

function rel(filePath) {
  return toPosix(path.relative(ROOT, filePath));
}

function shouldIgnore(entryName, fullPath) {
  if (IGNORE.has(entryName)) return true;

  const relative = rel(fullPath);
  const parts = relative.split("/").filter(Boolean);

  if (parts.length === 1 && ROOT_ONLY_IGNORE.has(parts[0])) {
    return true;
  }

  return false;
}

function walk(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (shouldIgnore(entry.name, full)) continue;
      walk(full, results);
    } else {
      results.push(full);
    }
  }

  return results;
}

function isCodeFile(filePath) {
  return CODE_EXTENSIONS.has(path.extname(filePath));
}

function read(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

function parseNamedImports(importClause) {
  if (!importClause) return [];

  const names = new Set();

  const namedMatch = importClause.match(/\{([\s\S]*?)\}/);
  if (namedMatch) {
    const body = namedMatch[1];
    for (const part of body.split(",")) {
      const clean = part
        .trim()
        .replace(/\s+as\s+/g, " ")
        .split(/\s+/)[0]
        .trim();

      if (clean) names.add(clean);
    }
  }

  const defaultMatch = importClause.match(/^\s*([A-Za-z_$][\w$]*)\s*(,|from|$)/);
  if (defaultMatch && defaultMatch[1] !== "type") {
    names.add(defaultMatch[1]);
  }

  const namespaceMatch = importClause.match(/\*\s+as\s+([A-Za-z_$][\w$]*)/);
  if (namespaceMatch) {
    names.add(namespaceMatch[1]);
  }

  return [...names];
}

function parseImports(source) {
  const clean = stripComments(source);
  const imports = [];

  const importFromRegex =
    /import\s+(?:type\s+)?([\s\S]*?)\s+from\s+["']([^"']+)["']/g;

  const sideEffectImportRegex =
    /import\s+["']([^"']+)["']/g;

  const exportFromRegex =
    /export\s+(?:type\s+)?(?:\*|\{[\s\S]*?\})\s+from\s+["']([^"']+)["']/g;

  const dynamicImportRegex =
    /import\s*\(\s*["']([^"']+)["']\s*\)/g;

  const requireRegex =
    /require\s*\(\s*["']([^"']+)["']\s*\)/g;

  let match;

  while ((match = importFromRegex.exec(clean))) {
    imports.push({
      specifier: match[2],
      names: parseNamedImports(match[1]),
      kind: "static",
    });
  }

  while ((match = sideEffectImportRegex.exec(clean))) {
    imports.push({
      specifier: match[1],
      names: [],
      kind: "side-effect",
    });
  }

  while ((match = exportFromRegex.exec(clean))) {
    imports.push({
      specifier: match[1],
      names: [],
      kind: "re-export",
    });
  }

  while ((match = dynamicImportRegex.exec(clean))) {
    imports.push({
      specifier: match[1],
      names: [],
      kind: "dynamic",
    });
  }

  while ((match = requireRegex.exec(clean))) {
    imports.push({
      specifier: match[1],
      names: [],
      kind: "require",
    });
  }

  return imports;
}

function parseExports(source) {
  const clean = stripComments(source);
  const exports = [];

  const patterns = [
    {
      kind: "function",
      regex: /export\s+(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "const",
      regex: /export\s+const\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "let",
      regex: /export\s+let\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "var",
      regex: /export\s+var\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "class",
      regex: /export\s+class\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "interface",
      regex: /export\s+interface\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "type",
      regex: /export\s+type\s+([A-Za-z_$][\w$]*)/g,
    },
    {
      kind: "enum",
      regex: /export\s+enum\s+([A-Za-z_$][\w$]*)/g,
    },
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.regex.exec(clean))) {
      exports.push({
        name: match[1],
        kind: pattern.kind,
      });
    }
  }

  const namedExportRegex = /export\s+\{([\s\S]*?)\}/g;
  let namedMatch;

  while ((namedMatch = namedExportRegex.exec(clean))) {
    const body = namedMatch[1];

    for (const part of body.split(",")) {
      const cleanName = part
        .trim()
        .replace(/\s+as\s+/g, " ")
        .split(/\s+/)[0]
        .trim();

      if (cleanName && !cleanName.includes("\n")) {
        exports.push({
          name: cleanName,
          kind: "named",
        });
      }
    }
  }

  if (/export\s+default\b/.test(clean)) {
    exports.push({
      name: "default",
      kind: "default",
    });
  }

  return dedupeBy(exports, (item) => `${item.kind}:${item.name}`);
}

function dedupeBy(items, keyFn) {
  const seen = new Set();
  const out = [];

  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }

  return out;
}

function isExternalSpecifier(specifier) {
  return !(
    specifier.startsWith("@/") ||
    specifier.startsWith("./") ||
    specifier.startsWith("../") ||
    specifier.startsWith("/")
  );
}

function fileExists(candidate) {
  try {
    return fs.existsSync(candidate) && fs.statSync(candidate).isFile();
  } catch {
    return false;
  }
}

function dirExists(candidate) {
  try {
    return fs.existsSync(candidate) && fs.statSync(candidate).isDirectory();
  } catch {
    return false;
  }
}

function resolveFileCandidate(basePath) {
  const normalized = path.normalize(basePath);

  if (fileExists(normalized)) {
    return normalized;
  }

  const ext = path.extname(normalized);

  if (ext) {
    return null;
  }

  for (const candidateExt of RESOLVE_EXTENSIONS) {
    const withExt = `${normalized}${candidateExt}`;
    if (fileExists(withExt)) return withExt;
  }

  if (dirExists(normalized)) {
    for (const candidateExt of RESOLVE_EXTENSIONS) {
      const indexCandidate = path.join(normalized, `index${candidateExt}`);
      if (fileExists(indexCandidate)) return indexCandidate;
    }
  }

  return null;
}

function resolveInternalImport(importerAbs, specifier) {
  const candidates = [];

  if (specifier.startsWith("@/")) {
    const aliasPath = specifier.slice(2);

    // tsconfig supports:
    // "@/*": ["./*", "./src/*"]
    candidates.push(path.join(ROOT, aliasPath));
    candidates.push(path.join(ROOT, "src", aliasPath));
  } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
    candidates.push(path.resolve(path.dirname(importerAbs), specifier));
  } else if (specifier.startsWith("/")) {
    candidates.push(path.join(ROOT, specifier));
  }

  for (const candidate of candidates) {
    const resolved = resolveFileCandidate(candidate);
    if (resolved) return resolved;
  }

  return null;
}

function classifyCanonical(file) {
  const p = toPosix(file).toLowerCase();

  if (p.startsWith("lib/runtime/") || p.startsWith("lib/vm/")) {
    return "Runtime / Kernel / VM";
  }

  if (p.startsWith("lib/supabase/")) {
    return "Memory / Storage / Supabase";
  }

  if (p.startsWith("lib/gameengin/")) {
    return "GameEngin";
  }

  if (p.startsWith("lib/games/")) {
    return "Games / Game Inventory";
  }

  if (
    p.startsWith("lib/music/") ||
    p.startsWith("lib/audio") ||
    p.includes("audio") ||
    p.includes("starmaker")
  ) {
    return "Audio / StarMaker";
  }

  if (
    p.startsWith("lib/gct/") ||
    p.startsWith("lib/bot-detection/") ||
    p.startsWith("lib/gestures/") ||
    p.startsWith("lib/dreamnav/") ||
    p.startsWith("lib/torridity/") ||
    p.startsWith("lib/navigation/") ||
    p.startsWith("lib/warp/")
  ) {
    return "Human Signal / Physics / Navigation / Trust";
  }

  if (
    p.startsWith("lib/ai/") ||
    p.startsWith("lib/agents/") ||
    p.startsWith("lib/child-safety/") ||
    p.startsWith("lib/observability/") ||
    p.includes("idari") ||
    p.includes("boogie") ||
    p.includes("eams")
  ) {
    return "AI / Safety / Idari";
  }

  if (
    p.startsWith("lib/dreamdm/") ||
    p.startsWith("lib/connectors/") ||
    p.startsWith("lib/social/") ||
    p.startsWith("lib/notifications/") ||
    p.startsWith("lib/shareddream")
  ) {
    return "DreamDMBar / DreamR Communication / Connectors";
  }

  if (p.startsWith("lib/dreamr/") || p.startsWith("lib/feed/") || p.startsWith("lib/feeds/")) {
    return "DreamR / Feed";
  }

  if (
    p.startsWith("lib/babylon/") ||
    p.startsWith("lib/webgpu") ||
    p.startsWith("lib/renderer/") ||
    p.startsWith("lib/composite/") ||
    p.startsWith("lib/ui/") ||
    p.startsWith("lib/gsap/") ||
    p.startsWith("lib/icons/")
  ) {
    return "Visual / Rendering / UI";
  }

  if (
    p.startsWith("lib/engin-runtime/") ||
    p.startsWith("lib/engine/") ||
    p.startsWith("lib/engins/")
  ) {
    return "Engin System / Runtime Adapters";
  }

  if (
    p.startsWith("lib/dreams/") ||
    p.startsWith("lib/dream-window/") ||
    p.startsWith("lib/daydream/") ||
    p.startsWith("lib/routing/") ||
    p.startsWith("lib/scene/")
  ) {
    return "Dreams / Surfaces / Windows";
  }

  if (
    p.startsWith("lib/code/") ||
    p.startsWith("lib/content/") ||
    p.startsWith("lib/diff/") ||
    p.startsWith("lib/universal")
  ) {
    return "Code / Content / Editor";
  }

  if (
    p.startsWith("lib/forge") ||
    p.startsWith("lib/enginpipe/") ||
    p.startsWith("lib/feature-build/") ||
    p.startsWith("lib/platform/")
  ) {
    return "Forge / Build / Platform";
  }

  if (
    p.startsWith("lib/auth/") ||
    p.startsWith("lib/admin/") ||
    p.startsWith("lib/identity/") ||
    p.startsWith("lib/policy/") ||
    p.startsWith("lib/consent/")
  ) {
    return "Identity / Auth / Policy";
  }

  if (
    p.startsWith("lib/widgets/") ||
    p.startsWith("lib/home-buttons/") ||
    p.startsWith("lib/hooks/") ||
    p.startsWith("lib/panels/")
  ) {
    return "Widgets / Components / Home UI";
  }

  if (
    p.startsWith("lib/web3/") ||
    p.startsWith("lib/ledger") ||
    p.startsWith("lib/media/") ||
    p.startsWith("lib/offline/") ||
    p.startsWith("lib/assets/")
  ) {
    return "Memory / Storage / Persistence";
  }

  return "Other / Unsure / General DREAM";
}

function connectionStatus(file, incoming, dynamicIncoming, registryHints) {
  if (incoming > 0) return "STATICALLY_CONNECTED";
  if (dynamicIncoming > 0) return "DYNAMICALLY_CONNECTED";
  if (registryHints > 0) return "REGISTRY_CONNECTED";

  const lower = file.toLowerCase();

  if (
    lower.includes("registry") ||
    lower.includes("manifest") ||
    lower.includes("cartridge") ||
    lower.includes("brain/") ||
    lower.endsWith(".json") ||
    lower.endsWith(".md") ||
    lower.endsWith(".wasm")
  ) {
    return "RUNTIME_DISCOVERABLE";
  }

  if (file.startsWith("lib/")) return "CENTER_CANDIDATE";

  return "UNKNOWN";
}

function countLines(source) {
  if (!source) return 0;
  return source.split(/\r?\n/).length;
}

function makeMarkdown(data) {
  const lines = [];

  lines.push("# DREAMengin Repo State");
  lines.push("");
  lines.push("> Generated by `scripts/analyze-repo-state.mjs`.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total files scanned: ${data.summary.totalFiles}`);
  lines.push(`- Code files scanned: ${data.summary.codeFiles}`);
  lines.push(`- Internal imports: ${data.summary.internalImports}`);
  lines.push(`- External imports: ${data.summary.externalImports}`);
  lines.push(`- Dynamic imports: ${data.summary.dynamicImports}`);
  lines.push(`- Broken internal imports: ${data.brokenImports.length}`);
  lines.push("");

  lines.push("## Broken Imports");
  lines.push("");
  lines.push("> Internal imports (`@/` or relative) that cannot be resolved to any file in the repo.");
  lines.push("> ⚠ = could cause a build error. External packages (npm) are excluded.");
  lines.push("");

  if (data.brokenImports.length === 0) {
    lines.push("No broken internal imports found.");
  } else {
    lines.push("| File | Import | Imported Names | Kind |");
    lines.push("|---|---|---|---|");

    for (const item of data.brokenImports) {
      lines.push(
        `| ${item.file} | \`${item.specifier}\` | ${item.names.length ? item.names.join(", ") : "—"} | ${item.kind} |`,
      );
    }
  }

  lines.push("");
  lines.push("## Top Imported Internal Files");
  lines.push("");
  lines.push("| File | Incoming Imports | Canonical Bucket |");
  lines.push("|---|---:|---|");

  for (const item of data.topImportedInternal) {
    lines.push(`| ${item.file} | ${item.incoming} | ${item.bucket} |`);
  }

  lines.push("");
  lines.push("## Canonical Buckets");
  lines.push("");

  for (const bucket of data.buckets) {
    lines.push(`### ${bucket.name}`);
    lines.push("");
    lines.push(`Files: ${bucket.files.length}`);
    lines.push("");
    lines.push("| File | LOC | Exports | Incoming | Status |");
    lines.push("|---|---:|---:|---:|---|");

    for (const item of bucket.files) {
      lines.push(
        `| ${item.file} | ${item.loc} | ${item.exports.length} | ${item.incoming} | ${item.status} |`,
      );
    }

    lines.push("");
  }

  lines.push("## Supabase Resolver Check");
  lines.push("");
  lines.push("These files must be visible to the analyzer:");
  lines.push("");
  for (const item of data.supabaseCheck) {
    lines.push(`- ${item.exists ? "✅" : "❌"} ${item.file}`);
  }
  lines.push("");
  lines.push("If these are ✅ but `@/lib/supabase/*` appears in Broken Imports, the resolver is wrong.");
  lines.push("");

  return lines.join("\n");
}

function main() {
  const allAbsFiles = walk(ROOT);
  const allFiles = allAbsFiles.map(rel).sort();
  const codeAbsFiles = allAbsFiles.filter(isCodeFile);

  const byFile = new Map();
  const incoming = new Map();
  const dynamicIncoming = new Map();
  const registryHints = new Map();

  let internalImports = 0;
  let externalImports = 0;
  let dynamicImports = 0;

  for (const absFile of codeAbsFiles) {
    const file = rel(absFile);
    const source = read(absFile);
    const imports = parseImports(source);
    const exports = parseExports(source);

    const record = {
      file,
      absFile,
      loc: countLines(source),
      imports: [],
      exports,
      bucket: classifyCanonical(file),
    };

    for (const imp of imports) {
      if (imp.kind === "dynamic") dynamicImports++;

      if (isExternalSpecifier(imp.specifier)) {
        externalImports++;
        record.imports.push({
          ...imp,
          internal: false,
          resolved: null,
          broken: false,
        });
        continue;
      }

      internalImports++;

      const resolvedAbs = resolveInternalImport(absFile, imp.specifier);
      const resolved = resolvedAbs ? rel(resolvedAbs) : null;

      if (resolved) {
        incoming.set(resolved, (incoming.get(resolved) || 0) + 1);

        if (imp.kind === "dynamic") {
          dynamicIncoming.set(resolved, (dynamicIncoming.get(resolved) || 0) + 1);
        }

        if (
          imp.specifier.toLowerCase().includes("registry") ||
          imp.specifier.toLowerCase().includes("manifest") ||
          imp.specifier.toLowerCase().includes("cartridge")
        ) {
          registryHints.set(resolved, (registryHints.get(resolved) || 0) + 1);
        }
      }

      record.imports.push({
        ...imp,
        internal: true,
        resolved,
        broken: !resolved,
      });
    }

    byFile.set(file, record);
  }

  const brokenImports = [];

  for (const record of byFile.values()) {
    for (const imp of record.imports) {
      if (!imp.internal || !imp.broken) continue;

      brokenImports.push({
        file: record.file,
        specifier: imp.specifier,
        names: imp.names,
        kind: imp.kind,
      });
    }
  }

  brokenImports.sort((a, b) => {
    return `${a.file}:${a.specifier}`.localeCompare(`${b.file}:${b.specifier}`);
  });

  const fileRows = [];

  for (const record of byFile.values()) {
    const inCount = incoming.get(record.file) || 0;
    const dynCount = dynamicIncoming.get(record.file) || 0;
    const regCount = registryHints.get(record.file) || 0;

    fileRows.push({
      file: record.file,
      loc: record.loc,
      imports: record.imports,
      exports: record.exports,
      incoming: inCount,
      dynamicIncoming: dynCount,
      registryHints: regCount,
      bucket: record.bucket,
      status: connectionStatus(record.file, inCount, dynCount, regCount),
    });
  }

  fileRows.sort((a, b) => a.file.localeCompare(b.file));

  const topImportedInternal = [...fileRows]
    .filter((item) => item.incoming > 0)
    .sort((a, b) => b.incoming - a.incoming || a.file.localeCompare(b.file))
    .slice(0, 50)
    .map((item) => ({
      file: item.file,
      incoming: item.incoming,
      bucket: item.bucket,
    }));

  const bucketMap = new Map();

  for (const row of fileRows.filter((item) => item.file.startsWith("lib/"))) {
    if (!bucketMap.has(row.bucket)) {
      bucketMap.set(row.bucket, []);
    }

    bucketMap.get(row.bucket).push(row);
  }

  const buckets = [...bucketMap.entries()]
    .map(([name, files]) => ({
      name,
      files: files.sort((a, b) => a.file.localeCompare(b.file)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const supabaseFiles = [
    "lib/supabase/server.ts",
    "lib/supabase/client.ts",
    "lib/supabase/safeGetUser.ts",
    "lib/supabase/config.ts",
    "lib/supabase/vector.ts",
    "lib/supabase/realtime.ts",
  ];

  const supabaseCheck = supabaseFiles.map((file) => ({
    file,
    exists: fs.existsSync(path.join(ROOT, file)),
  }));

  const data = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalFiles: allFiles.length,
      codeFiles: codeAbsFiles.length,
      internalImports,
      externalImports,
      dynamicImports,
    },
    supabaseCheck,
    brokenImports,
    topImportedInternal,
    files: fileRows.map((item) => ({
      file: item.file,
      loc: item.loc,
      bucket: item.bucket,
      status: item.status,
      incoming: item.incoming,
      dynamicIncoming: item.dynamicIncoming,
      registryHints: item.registryHints,
      exports: item.exports,
      imports: item.imports.map((imp) => ({
        specifier: imp.specifier,
        names: imp.names,
        kind: imp.kind,
        internal: imp.internal,
        resolved: imp.resolved,
        broken: imp.broken,
      })),
    })),
    buckets: buckets.map((bucket) => ({
      name: bucket.name,
      files: bucket.files.map((item) => ({
        file: item.file,
        loc: item.loc,
        incoming: item.incoming,
        status: item.status,
        exports: item.exports,
      })),
    })),
  };

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(data, null, 2), "utf8");
  fs.writeFileSync(OUTPUT_MD, makeMarkdown(data), "utf8");

  console.log("✅ Repo state generated.");
  console.log(`- ${rel(OUTPUT_MD)}`);
  console.log(`- ${rel(OUTPUT_JSON)}`);
  console.log("");
  console.log(`Files scanned: ${data.summary.totalFiles}`);
  console.log(`Code files: ${data.summary.codeFiles}`);
  console.log(`Broken internal imports: ${data.brokenImports.length}`);

  const supabaseBroken = data.brokenImports.filter((item) =>
    item.specifier.startsWith("@/lib/supabase/"),
  );

  if (supabaseBroken.length > 0) {
    console.log("");
    console.log("⚠ Supabase imports are still reported broken:");
    for (const item of supabaseBroken.slice(0, 20)) {
      console.log(`- ${item.file} -> ${item.specifier}`);
    }
    console.log("");
    console.log("Check tsconfig paths or whether lib/supabase files exist.");
  } else {
    console.log("✅ No @/lib/supabase/* imports reported broken.");
  }
}

main();
