import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const IGNORE = new Set([
  "node_modules", ".git", ".next", ".vercel",
  "dist", "build", "coverage", ".turbo"
]);

const FEATURE_RULES = [
  { name: "DreamR",           match: ["dreamr", "DreamR"] },
  { name: "Engines",          match: ["engins", "engin.", "Engine"] },
  { name: "Runtime",          match: ["runtime"] },
  { name: "Warp System",      match: ["warp"] },
  { name: "Dream Navigation", match: ["dreamnav"] },
  { name: "AI Systems",       match: ["ai", "agent", "dr-eams"] },
  { name: "User Interface",   match: ["components", "surface", "panel", "overlay", "ui"] },
  { name: "Hooks",            match: ["hooks", "use"] },
  { name: "Backend",          match: ["backend", "api"] },
  { name: "Supabase",         match: ["supabase"] },
  { name: "Tests",            match: ["test", "tests"] },
  { name: "Research",         match: ["research", "docs"] }
];

// ─── UTILS ────────────────────────────────────────────────────────────────────

function shouldIgnore(name) { return IGNORE.has(name); }

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (shouldIgnore(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else results.push(path.relative(ROOT, full));
  }
  return results;
}

function readSafe(file) {
  try { return fs.readFileSync(path.join(ROOT, file), "utf8"); }
  catch { return ""; }
}

function isCodeFile(file) {
  return /\.(ts|tsx|js|jsx|mjs)$/.test(file);
}

function detectFeatures(file) {
  const lower = file.toLowerCase();
  return FEATURE_RULES
    .filter(r => r.match.some(m => lower.includes(m.toLowerCase())))
    .map(r => r.name);
}

// ─── EXTRACTORS ───────────────────────────────────────────────────────────────

function extractImports(content) {
  const out = [];
  const re = /from\s+['"](.+?)['"]|require\s*\(\s*['"](.+?)['"]\s*\)/g;
  let m;
  while ((m = re.exec(content)) !== null) out.push(m[1] || m[2]);
  return out;
}

function extractDynamicImports(content) {
  const out = [];
  const re = /import\(\s*['"`](.+?)['"`]\s*\)/g;
  let m;
  while ((m = re.exec(content)) !== null) out.push(m[1]);
  return out;
}

function resolveRelative(fromFile, importPath) {
  if (!importPath.startsWith(".")) return null;
  return path.normalize(path.join(path.dirname(fromFile), importPath));
}

// ─── DETECTORS ────────────────────────────────────────────────────────────────

function detectReactComponent(file, content) {
  if (!/\.(tsx|jsx)$/.test(file)) return false;
  return (
    /export\s+(default\s+)?(function|const|class)\s+[A-Z]/.test(content) ||
    /return\s*\(?\s*</.test(content)
  );
}

function detectHookExports(content) {
  const hooks = [];
  const re = /export\s+(function|const)\s+(use[A-Z][a-zA-Z0-9]*)/g;
  let m;
  while ((m = re.exec(content)) !== null) hooks.push(m[2]);
  return hooks;
}

function detectAPIRoute(file) {
  return /\/(api|route)\//.test(file) || /^(pages\/api|app\/api)/.test(file);
}

function detectSupabase(content) {
  return (
    /from\s+['"]@supabase/.test(content) ||
    /createClient\s*\(/.test(content) ||
    /supabase\.(from|auth|storage|rpc)\s*\(/.test(content)
  );
}

function detectRuntimeRegistry(content) {
  return (
    /\.register\s*\(/.test(content) ||
    /EnginDispatcher/.test(content) ||
    /registerEngine/.test(content) ||
    /new\s+\w*Registry\s*\(/.test(content)
  );
}

function detectDynamicImports(content) {
  return extractDynamicImports(content);
}

function detectEventBus(content) {
  return (
    /\.on\s*\(['"]/.test(content) ||
    /\.emit\s*\(['"]/.test(content) ||
    /\.subscribe\s*\(/.test(content) ||
    /EventEmitter/.test(content) ||
    /eventBus\./.test(content)
  );
}

function detectZustandContext(content) {
  return {
    zustand: /from\s+['"]zustand['"]/.test(content) || /create\s*</.test(content),
    context: /createContext\s*\(|useContext\s*\(|React\.createContext/.test(content)
  };
}

// ─── CIRCULAR DEPENDENCY DETECTION ───────────────────────────────────────────

function findCircular(graph) {
  const cycles = new Set();
  const visited = new Set();
  const inStack = new Set();
  const stack = [];

  function dfs(node) {
    if (inStack.has(node)) {
      const i = stack.indexOf(node);
      cycles.add(stack.slice(i).concat(node).join(" → "));
      return;
    }
    if (visited.has(node)) return;
    visited.add(node);
    inStack.add(node);
    stack.push(node);
    for (const dep of (graph[node] || [])) {
      if (dep in graph) dfs(dep);
    }
    stack.pop();
    inStack.delete(node);
  }

  for (const node of Object.keys(graph)) dfs(node);
  return [...cycles];
}

// ─── ANALYSIS ─────────────────────────────────────────────────────────────────

const allFiles = walk(ROOT);
const codeFiles = allFiles.filter(isCodeFile);

const fileData = {};

for (const file of codeFiles) {
  const content = readSafe(file);
  const imports = extractImports(content);
  const dynamicImports = extractDynamicImports(content);
  const features = detectFeatures(file);
  const { zustand, context } = detectZustandContext(content);

  fileData[file] = {
    imports,
    dynamicImports,
    features,
    hookExports:         detectHookExports(content),
    isReactComponent:    detectReactComponent(file, content),
    isAPIRoute:          detectAPIRoute(file),
    usesSupabase:        detectSupabase(content),
    usesRuntimeRegistry: detectRuntimeRegistry(content),
    usesEventBus:        detectEventBus(content),
    usesZustand:         zustand,
    usesContext:         context,
    couplingScore:       imports.length
  };
}

// Feature map
const featureMap = {};
for (const [file, d] of Object.entries(fileData)) {
  for (const feat of d.features) {
    if (!featureMap[feat]) featureMap[feat] = [];
    featureMap[feat].push(file);
  }
}

// Relative dep graph for circular detection
const relDepGraph = {};
for (const [file, d] of Object.entries(fileData)) {
  relDepGraph[file] = d.imports
    .map(imp => resolveRelative(file, imp))
    .filter(Boolean);
}

const circularDeps = findCircular(relDepGraph);

// Engine interaction map
const engineFiles = new Set(
  Object.keys(fileData).filter(f => fileData[f].features.includes("Engines"))
);
const engineInteractions = {};
for (const eng of engineFiles) {
  const hits = fileData[eng].imports.filter(imp => {
    const resolved = resolveRelative(eng, imp);
    return (
      (resolved && engineFiles.has(resolved)) ||
      FEATURE_RULES.find(r => r.name === "Engines")
        ?.match.some(m => imp.toLowerCase().includes(m.toLowerCase()))
    );
  });
  if (hits.length) engineInteractions[eng] = hits;
}

// User-facing surfaces
const surfaces = Object.keys(fileData).filter(
  f => /\/(pages|app|surface|ui|components)\//.test(f) && fileData[f].isReactComponent
);

// Coupling top 20
const couplingRanked = Object.entries(fileData)
  .map(([file, d]) => ({ file, score: d.couplingScore }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 20);

// Risk report
const riskFiles = Object.entries(fileData)
  .filter(([_, d]) => d.couplingScore > 5 || d.usesEventBus || d.usesRuntimeRegistry)
  .map(([file, d]) => ({
    file,
    score: d.couplingScore,
    flags: [
      d.couplingScore > 10 ? "HIGH_COUPLING" : d.couplingScore > 5 ? "MEDIUM_COUPLING" : null,
      d.usesEventBus        ? "EVENT_BUS"        : null,
      d.usesRuntimeRegistry ? "RUNTIME_REGISTRY"  : null,
      d.usesZustand         ? "ZUSTAND_STATE"     : null
    ].filter(Boolean)
  }))
  .sort((a, b) => b.score - a.score);

// Dep graph JSON payload
const depGraphJSON = {};
for (const [file, d] of Object.entries(fileData)) {
  depGraphJSON[file] = {
    imports:       d.imports,
    dynamicImports: d.dynamicImports,
    features:      d.features,
    couplingScore: d.couplingScore
  };
}

// ─── BUILD MD ─────────────────────────────────────────────────────────────────

let md = "";

md += "# DREAMengin Repository State\n\n";
md += `Generated: ${new Date().toISOString()}\n\n`;
md += "---\n\n";

// 1. SYSTEM MAP
md += "# SYSTEM MAP\n\n";
for (const [feat, files] of Object.entries(featureMap)) {
  md += `## ${feat}\n\n`;
  for (const f of files.sort()) md += `- ${f}\n`;
  md += "\n";
}
md += "---\n\n";

// 2. REACT COMPONENTS
md += "# REACT COMPONENTS\n\n";
const components = Object.keys(fileData).filter(f => fileData[f].isReactComponent).sort();
for (const f of components) md += `- ${f}\n`;
md += "\n---\n\n";

// 3. HOOK EXPORTS
md += "# HOOK EXPORTS\n\n";
for (const [file, d] of Object.entries(fileData)) {
  if (!d.hookExports.length) continue;
  md += `## ${file}\n\n`;
  for (const h of d.hookExports) md += `- \`${h}\`\n`;
  md += "\n";
}
md += "---\n\n";

// 4. API ROUTES
md += "# API ROUTES\n\n";
const apiRoutes = Object.keys(fileData).filter(f => fileData[f].isAPIRoute).sort();
for (const f of apiRoutes) md += `- ${f}\n`;
md += "\n---\n\n";

// 5. SUPABASE USAGE
md += "# SUPABASE USAGE\n\n";
const supFiles = Object.keys(fileData).filter(f => fileData[f].usesSupabase).sort();
for (const f of supFiles) md += `- ${f}\n`;
md += "\n---\n\n";

// 6. RUNTIME REGISTRIES
md += "# RUNTIME REGISTRIES\n\n";
const regFiles = Object.keys(fileData).filter(f => fileData[f].usesRuntimeRegistry).sort();
for (const f of regFiles) md += `- ${f}\n`;
md += "\n---\n\n";

// 7. DYNAMIC IMPORTS
md += "# DYNAMIC IMPORTS\n\n";
for (const [file, d] of Object.entries(fileData)) {
  if (!d.dynamicImports.length) continue;
  md += `## ${file}\n\n`;
  for (const imp of d.dynamicImports) md += `- \`${imp}\`\n`;
  md += "\n";
}
md += "---\n\n";

// 8. EVENT BUS
md += "# EVENT BUS SUBSCRIBERS / EMITTERS\n\n";
const ebFiles = Object.keys(fileData).filter(f => fileData[f].usesEventBus).sort();
for (const f of ebFiles) md += `- ${f}\n`;
md += "\n---\n\n";

// 9. ZUSTAND / CONTEXT
md += "# ZUSTAND / CONTEXT STATE\n\n";
md += "## Zustand Stores\n\n";
const zFiles = Object.keys(fileData).filter(f => fileData[f].usesZustand).sort();
for (const f of zFiles) md += `- ${f}\n`;
md += "\n## Context Providers / Consumers\n\n";
const ctxFiles = Object.keys(fileData).filter(f => fileData[f].usesContext).sort();
for (const f of ctxFiles) md += `- ${f}\n`;
md += "\n---\n\n";

// 10. USER-FACING SURFACE MAP
md += "# USER-FACING SURFACE MAP\n\n";
for (const f of surfaces.sort()) md += `- ${f}\n`;
md += "\n---\n\n";

// 11. ENGINE INTERACTION MAP
md += "# ENGINE INTERACTION MAP\n\n";
if (Object.keys(engineInteractions).length) {
  for (const [eng, deps] of Object.entries(engineInteractions)) {
    md += `## ${eng}\n\n`;
    for (const d of deps) md += `- calls: \`${d}\`\n`;
    md += "\n";
  }
} else {
  md += "_No cross-engine wiring detected._\n\n";
}
md += "---\n\n";

// 12. FILE CONNECTIONS
md += "# FILE CONNECTIONS\n\n";
for (const [file, d] of Object.entries(fileData)) {
  if (!d.imports.length && !d.dynamicImports.length) continue;
  md += `## ${file}\n\n`;
  for (const imp of d.imports)        md += `- imports: \`${imp}\`\n`;
  for (const imp of d.dynamicImports) md += `- dynamic: \`${imp}\`\n`;
  md += "\n";
}
md += "---\n\n";

// 13. CIRCULAR DEPENDENCIES
md += "# CIRCULAR DEPENDENCIES\n\n";
if (circularDeps.length) {
  for (const cycle of circularDeps) md += `- ⚠ ${cycle}\n`;
} else {
  md += "_No circular dependencies detected._\n";
}
md += "\n---\n\n";

// 14. COUPLING SCORES
md += "# COUPLING SCORES (Top 20)\n\n";
md += "| File | Import Count |\n|------|--------------|\n";
for (const { file, score } of couplingRanked) {
  md += `| ${file} | ${score} |\n`;
}
md += "\n---\n\n";

// 15. SYSTEM RISK REPORT
md += "# SYSTEM RISK REPORT\n\n";
if (riskFiles.length) {
  md += "| File | Coupling | Flags |\n|------|----------|-------|\n";
  for (const { file, score, flags } of riskFiles) {
    md += `| ${file} | ${score} | ${flags.join(", ")} |\n`;
  }
} else {
  md += "_No high-risk files detected._\n";
}
md += "\n---\n\n";

// 16. FEATURE OWNERSHIP MAP
md += "# FEATURE OWNERSHIP MAP\n\n";
for (const [file, d] of Object.entries(fileData)) {
  if (!d.features.length) continue;
  md += `- **${file}** → ${d.features.join(", ")}\n`;
}
md += "\n---\n\n";

// 17. DEPENDENCY GRAPH JSON
md += "# DEPENDENCY GRAPH\n\n";
md += "```json\n";
md += JSON.stringify(depGraphJSON, null, 2);
md += "\n```\n\n---\n\n";

// 18. RAW STRUCTURE
md += "# RAW STRUCTURE\n\n```text\n";
function buildTree(dir, prefix = "") {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(e => !shouldIgnore(e.name));
  entries.forEach((entry, i) => {
    const isLast = i === entries.length - 1;
    md += `${prefix}${isLast ? "└──" : "├──"} ${entry.name}\n`;
    if (entry.isDirectory()) {
      buildTree(path.join(dir, entry.name), prefix + (isLast ? "    " : "│   "));
    }
  });
}
buildTree(ROOT);
md += "```\n";

fs.writeFileSync("REPO_STATE.md", md);
console.log("✓ REPO_STATE.md generated");
