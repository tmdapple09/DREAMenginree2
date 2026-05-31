#!/usr/bin/env node
/**
 * DREAMengin Lib Index
 *
 * Generates Libindex.md from the current repository.
 *
 * What this is for:
 * - Make lib/ stop being a mystery basement.
 * - List every lib file.
 * - Show exports, imports, and who imports each lib file.
 * - Separate code from documents/data/assets.
 * - Flag review-needed files without deleting anything.
 * - Give AI/humans a stable map before refactors.
 *
 * This script is report-only.
 * It never moves, deletes, or rewrites production source files.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const LIB_DIR = path.join(ROOT, "lib");
const OUT_FILE = path.join(ROOT, "Libindex.md");

const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const TEXT_EXTS = new Set([".md", ".mdx", ".json", ".yaml", ".yml", ".txt", ".css", ".scss"]);
const IGNORE_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "out",
  "dist",
  "build",
  "coverage",
  ".turbo",
  ".vercel",
]);

function posix(p) {
  return p.split(path.sep).join("/");
}

function rel(abs) {
  return posix(path.relative(ROOT, abs));
}

function existsFile(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function existsDir(p) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function walk(dir, out = []) {
  if (!existsDir(dir)) return out;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile()) {
      out.push(full);
    }
  }

  return out;
}

function isCodeFile(file) {
  return CODE_EXTS.has(path.extname(file));
}

function isTextLike(file) {
  return TEXT_EXTS.has(path.extname(file)) || isCodeFile(file);
}

function readMaybe(file) {
  if (!isTextLike(file)) return "";
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return "";
  }
}

function normalizeImportSpecifier(spec, fromFile) {
  if (!spec) return null;

  // External package/dependency.
  if (!spec.startsWith(".") && !spec.startsWith("@/")) {
    return { kind: "package", spec, resolved: null };
  }

  let basePath;
  if (spec.startsWith("@/")) {
    basePath = path.join(ROOT, spec.slice(2));
  } else {
    basePath = path.resolve(path.dirname(fromFile), spec);
  }

  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    `${basePath}.jsx`,
    `${basePath}.mjs`,
    `${basePath}.cjs`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
    path.join(basePath, "index.js"),
    path.join(basePath, "index.jsx"),
    path.join(basePath, "index.mjs"),
    path.join(basePath, "index.cjs"),
  ];

  for (const candidate of candidates) {
    if (existsFile(candidate)) {
      return { kind: "project", spec, resolved: rel(candidate) };
    }
  }

  return { kind: "unresolved-project", spec, resolved: null };
}

function parseImports(source, file) {
  const imports = [];
  const patterns = [
    { regex: /\bimport\s+(?:type\s+)?(?:[^'\"]*?\s+from\s+)?["']([^"']+)["']/g, mode: "static" },
    { regex: /\bexport\s+(?:type\s+)?(?:[^'\"]*?\s+from\s+)["']([^"']+)["']/g, mode: "re-export" },
    { regex: /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g, mode: "dynamic" },
    { regex: /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g, mode: "require" },
  ];

  for (const { regex, mode } of patterns) {
    let match;
    while ((match = regex.exec(source))) {
      const spec = match[1];
      imports.push({ mode, spec, ...normalizeImportSpecifier(spec, file) });
    }
  }

  return imports;
}

function parseExports(source) {
  const exports = [];
  const patterns = [
    { kind: "default", regex: /\bexport\s+default\s+(?:async\s+)?(?:function|class)?\s*([A-Za-z0-9_$]*)?/g },
    { kind: "function", regex: /\bexport\s+(?:async\s+)?function\s+([A-Za-z0-9_$]+)/g },
    { kind: "class", regex: /\bexport\s+class\s+([A-Za-z0-9_$]+)/g },
    { kind: "interface", regex: /\bexport\s+interface\s+([A-Za-z0-9_$]+)/g },
    { kind: "type", regex: /\bexport\s+type\s+([A-Za-z0-9_$]+)/g },
    { kind: "const", regex: /\bexport\s+const\s+([A-Za-z0-9_$]+)/g },
    { kind: "let", regex: /\bexport\s+let\s+([A-Za-z0-9_$]+)/g },
    { kind: "var", regex: /\bexport\s+var\s+([A-Za-z0-9_$]+)/g },
    { kind: "enum", regex: /\bexport\s+enum\s+([A-Za-z0-9_$]+)/g },
  ];

  for (const { kind, regex } of patterns) {
    let match;
    while ((match = regex.exec(source))) {
      exports.push({ kind, name: match[1] || "(default)" });
    }
  }

  const namedExport = /\bexport\s*\{([^}]+)\}/g;
  let match;
  while ((match = namedExport.exec(source))) {
    const names = match[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => part.split(/\s+as\s+/i).pop().trim());

    for (const name of names) exports.push({ kind: "named", name });
  }

  return exports;
}

function countLines(source) {
  if (!source) return 0;
  return source.split(/\r?\n/).length;
}

function canonicalBucket(file) {
  const p = posix(file).toLowerCase();

  if (p.includes("lib/runtime/") || p.includes("lib/vm/") || p === "lib/agentos.ts" || p === "lib/bus.wasm") {
    return "Runtime / Kernel / VM";
  }

  if (p.includes("lib/dreamdm/")) return "DreamDMBar";

  if (
    p.includes("lib/dreamr/") ||
    p.includes("lib/feed/") ||
    p.includes("lib/feeds/") ||
    p.includes("lib/connectors/") ||
    p.includes("lib/social/") ||
    p.includes("lib/notifications/") ||
    p.endsWith("lib/social-feed.ts")
  ) {
    return "DreamR / Feed / Settings Connectors";
  }

  if (p.includes("lib/collaboration/") || p.includes("lib/shareddream")) return "SharedDream";

  if (p.includes("lib/gameengin/") || p.includes("lib/games/")) return "GameEngin / Games";

  if (p.includes("lib/music/") || p.includes("lib/audio")) return "StarMaker / Audio";

  if (
    p.includes("lib/gct/") ||
    p.includes("lib/bot-detection/") ||
    p.includes("lib/dreamnav/") ||
    p.includes("lib/gestures/") ||
    p.includes("lib/torridity/") ||
    p.includes("lib/navigation/") ||
    p.includes("lib/warp/") ||
    p.endsWith("lib/botdetection.ts") ||
    p.endsWith("lib/slog.ts") ||
    p.endsWith("lib/torridity.ts")
  ) {
    return "Human Signal / Physics / Navigation / Trust";
  }

  if (
    p.includes("lib/ai/") ||
    p.includes("lib/agents/") ||
    p.includes("lib/child-safety/") ||
    p.includes("lib/intelligence/") ||
    p.includes("lib/observability/") ||
    p.includes("lib/admin/") ||
    p.includes("lib/auth/") ||
    p.includes("lib/consent/") ||
    p.includes("lib/identity/") ||
    p.includes("lib/policy/") ||
    p.endsWith("lib/adari.ts") ||
    p.includes("lib/agentos/")
  ) {
    return "AI / Safety / Identity / Policy";
  }

  if (
    p.includes("lib/babylon/") ||
    p.includes("lib/composite/") ||
    p.includes("lib/gsap/") ||
    p.includes("lib/icons/") ||
    p.includes("lib/renderer/") ||
    p.includes("lib/ui/") ||
    p.includes("lib/webgpu") ||
    p.includes("lib/media/") ||
    p.endsWith("lib/h265-encoder.ts")
  ) {
    return "Visual / Rendering / UI";
  }

  if (p.includes("lib/artifact") || p.includes("lib/assets/") || p.includes("lib/ledger") || p.includes("lib/offline/") || p.includes("lib/supabase/")) {
    return "Memory / Storage / Persistence";
  }

  if (p.includes("lib/engin-runtime/") || p.includes("lib/engins/") || p.includes("lib/engine/")) return "Engin System / Runtime Adapters";

  if (
    p.includes("lib/daydream/") ||
    p.includes("lib/dream-window/") ||
    p.includes("lib/dreams/") ||
    p.includes("lib/routing/") ||
    p.includes("lib/scene/") ||
    p.includes("lib/widgets/") ||
    p.includes("lib/home-buttons/") ||
    p.includes("lib/hooks/") ||
    p.includes("lib/panels/") ||
    p.includes("lib/universal") ||
    p.endsWith("lib/activemodulesstore.ts") ||
    p.endsWith("lib/componentinventory.ts")
  ) {
    return "Dreams / Windows / Widgets / Modules";
  }

  if (p.includes("lib/code/") || p.includes("lib/content/") || p.includes("lib/diff/")) return "CodeEngin / ContentEngin / Editor";

  if (p.includes("lib/enginpipe/") || p.includes("lib/feature-build/") || p.includes("lib/forge") || p.includes("lib/platform/")) return "Forge / Build / Platform";

  if (p.includes("lib/web3/")) return "Web3 / Wallet / IPFS";

  return "Other / Unsure / General DREAM";
}

function fileRole(file) {
  const ext = path.extname(file).toLowerCase();
  const p = posix(file).toLowerCase();
  if (ext === ".md" || ext === ".mdx") return "DOCUMENT";
  if ([".json", ".yaml", ".yml"].includes(ext)) return "INVENTORY_DATA";
  if (ext === ".wasm") return "BINARY_RUNTIME_ASSET";
  if (p.includes("ruleset")) return "RULESET";
  if (isCodeFile(file)) return "CODE";
  return "ASSET_OR_UNKNOWN";
}

function hasRegistryHints(source, file) {
  const hay = `${file}\n${source}`.toLowerCase();
  return [
    "registry",
    "register",
    "manifest",
    "dynamic",
    "loader",
    "cartridge",
    "workflow",
    "runtime",
    "dreamosbus",
    "channel",
    "eventbus",
    "import(",
    "lazy",
  ].some((term) => hay.includes(term));
}

function connectionStatus(info) {
  if (info.role !== "CODE" && info.role !== "RULESET") return info.role;
  if (info.incomingExternal.length > 0) return "EXTERNALLY_IMPORTED";
  if (info.incomingInternal.length > 0) return "LIB_INTERNAL_ONLY";
  if (info.hasDynamicImport) return "DYNAMICALLY_CONNECTED";
  if (info.hasRegistryHints) return "REGISTRY_OR_RUNTIME_CANDIDATE";
  return "REVIEW_NEEDED_NOT_EXTERNALLY_IMPORTED";
}

function formatList(items, max = 10) {
  if (!items || items.length === 0) return "—";
  const unique = [...new Set(items)].filter(Boolean);
  const shown = unique.slice(0, max).join(", ");
  if (unique.length > max) return `${shown}, … +${unique.length - max} more`;
  return shown;
}

function mdEscape(text) {
  return String(text).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

if (!existsDir(LIB_DIR)) {
  console.error("No lib/ folder found from repo root.");
  process.exit(1);
}

const allFiles = walk(ROOT);
const libFiles = allFiles.filter((file) => rel(file).startsWith("lib/"));
const codeFiles = allFiles.filter(isCodeFile);

const fileInfos = new Map();

for (const file of libFiles) {
  const source = readMaybe(file);
  const imports = isCodeFile(file) ? parseImports(source, file) : [];
  const exports = isCodeFile(file) ? parseExports(source) : [];
  const r = rel(file);

  fileInfos.set(r, {
    abs: file,
    path: r,
    role: fileRole(r),
    bucket: canonicalBucket(r),
    loc: countLines(source),
    imports,
    exports,
    outgoingProjectImports: imports.filter((i) => i.kind === "project").map((i) => i.resolved),
    outgoingPackageImports: imports.filter((i) => i.kind === "package").map((i) => i.spec),
    incomingExternal: [],
    incomingInternal: [],
    unresolvedImports: imports.filter((i) => i.kind === "unresolved-project").map((i) => i.spec),
    hasDynamicImport: imports.some((i) => i.mode === "dynamic"),
    hasRegistryHints: hasRegistryHints(source, r),
  });
}

// Build incoming connections into lib from every code file in repo.
for (const file of codeFiles) {
  const source = readMaybe(file);
  const imports = parseImports(source, file);
  const from = rel(file);

  for (const imp of imports) {
    if (imp.kind !== "project" || !imp.resolved || !imp.resolved.startsWith("lib/")) continue;
    const info = fileInfos.get(imp.resolved);
    if (!info) continue;

    if (from.startsWith("lib/")) {
      if (!info.incomingInternal.includes(from)) info.incomingInternal.push(from);
    } else {
      if (!info.incomingExternal.includes(from)) info.incomingExternal.push(from);
    }
  }
}

for (const info of fileInfos.values()) info.status = connectionStatus(info);

const byBucket = new Map();
for (const info of [...fileInfos.values()].sort((a, b) => a.path.localeCompare(b.path))) {
  if (!byBucket.has(info.bucket)) byBucket.set(info.bucket, []);
  byBucket.get(info.bucket).push(info);
}

const statusCounts = {};
for (const info of fileInfos.values()) statusCounts[info.status] = (statusCounts[info.status] || 0) + 1;

const reviewNeeded = [...fileInfos.values()]
  .filter((i) => i.status === "REVIEW_NEEDED_NOT_EXTERNALLY_IMPORTED")
  .sort((a, b) => a.path.localeCompare(b.path));

const now = new Date().toISOString();

let md = "";
md += `# Libindex\n\n`;
md += `Generated: ${now}\n\n`;
md += `Generated by: \`scripts/lib-index.mjs\`\n\n`;
md += `Purpose: make \`lib/\` visible. This report lists canonical grouping, imports, exports, incoming connections, and review status. It is report-only and does not delete, move, or rewrite source files.\n\n`;

md += `## Rules\n\n`;
md += `- \`lib/\` files are not automatically dead because they lack outside imports.\n`;
md += `- Documents, JSON brain files, presets, manifests, WASM, registry-loaded modules, and dynamic runtime modules are inventory unless proven otherwise.\n`;
md += `- \`REVIEW_NEEDED_NOT_EXTERNALLY_IMPORTED\` means static scan did not find a direct incoming connection. It does not mean delete.\n`;
md += `- If a file is moved later, update the import doorway/owner, not random consumers.\n\n`;

md += `## Summary\n\n`;
md += `| Metric | Count |\n|---|---:|\n`;
md += `| Total lib files | ${libFiles.length} |\n`;
md += `| Lib code files | ${libFiles.filter(isCodeFile).length} |\n`;
md += `| Lib files externally imported | ${[...fileInfos.values()].filter((i) => i.incomingExternal.length > 0).length} |\n`;
md += `| Lib files internal-only | ${[...fileInfos.values()].filter((i) => i.status === "LIB_INTERNAL_ONLY").length} |\n`;
md += `| Lib code/ruleset files needing review | ${reviewNeeded.length} |\n`;
md += `| Lib files with unresolved project imports | ${[...fileInfos.values()].filter((i) => i.unresolvedImports.length > 0).length} |\n\n`;

md += `## Status Counts\n\n`;
md += `| Status | Count |\n|---|---:|\n`;
for (const [status, count] of Object.entries(statusCounts).sort((a, b) => a[0].localeCompare(b[0]))) {
  md += `| ${status} | ${count} |\n`;
}
md += `\n`;

md += `## Canonical Buckets\n\n`;
md += `| Bucket | Files | Code | Externally Imported | Review Needed |\n`;
md += `|---|---:|---:|---:|---:|\n`;
for (const [bucket, infos] of [...byBucket.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  md += `| ${mdEscape(bucket)} | ${infos.length} | ${infos.filter((i) => i.role === "CODE" || i.role === "RULESET").length} | ${infos.filter((i) => i.incomingExternal.length > 0).length} | ${infos.filter((i) => i.status === "REVIEW_NEEDED_NOT_EXTERNALLY_IMPORTED").length} |\n`;
}
md += `\n`;

md += `## Review Needed Code / Ruleset Files\n\n`;
if (reviewNeeded.length === 0) {
  md += `No code/ruleset files currently need review by static import analysis.\n\n`;
} else {
  md += `These files have no direct incoming connection found by static import analysis. Do not delete automatically; classify first.\n\n`;
  md += `| File | Bucket | Exports | Hints |\n`;
  md += `|---|---|---:|---|\n`;
  for (const info of reviewNeeded) {
    const hints = [info.hasDynamicImport ? "dynamic import" : "", info.hasRegistryHints ? "registry/runtime hints" : ""].filter(Boolean).join(", ") || "—";
    md += `| \`${info.path}\` | ${mdEscape(info.bucket)} | ${info.exports.length} | ${mdEscape(hints)} |\n`;
  }
  md += `\n`;
}

md += `## Full Lib Index\n\n`;
for (const [bucket, infos] of [...byBucket.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  md += `## ${bucket}\n\n`;
  md += `| File | Role | Status | LOC | Exports | External incoming | Internal incoming | Project imports | Package imports |\n`;
  md += `|---|---|---|---:|---|---|---|---|---|\n`;

  for (const info of infos) {
    const exportNames = info.exports.map((e) => `${e.kind}:${e.name}`);
    md += `| \`${info.path}\` | ${info.role} | ${info.status} | ${info.loc} | ${mdEscape(formatList(exportNames, 8))} | ${mdEscape(formatList(info.incomingExternal, 4))} | ${mdEscape(formatList(info.incomingInternal, 4))} | ${mdEscape(formatList(info.outgoingProjectImports, 4))} | ${mdEscape(formatList(info.outgoingPackageImports, 4))} |\n`;
  }
  md += `\n`;
}

md += `## Status Meaning\n\n`;
md += `- \`EXTERNALLY_IMPORTED\`: at least one file outside \`lib/\` imports this file directly.\n`;
md += `- \`LIB_INTERNAL_ONLY\`: other \`lib/\` files import it, but no outside direct import was found.\n`;
md += `- \`REGISTRY_OR_RUNTIME_CANDIDATE\`: no incoming import found, but file contents/name contain registry, loader, manifest, runtime, channel, cartridge, or dynamic hints.\n`;
md += `- \`REVIEW_NEEDED_NOT_EXTERNALLY_IMPORTED\`: no static direct incoming connection found and no obvious registry hint. Review before deleting.\n`;
md += `- \`DOCUMENT\`, \`INVENTORY_DATA\`, \`BINARY_RUNTIME_ASSET\`: not code-dead by static import rules.\n`;

fs.writeFileSync(OUT_FILE, md, "utf8");
console.log(`Wrote ${rel(OUT_FILE)}`);
console.log(`Indexed ${libFiles.length} lib files.`);
console.log(`Review-needed code/ruleset files: ${reviewNeeded.length}`);
