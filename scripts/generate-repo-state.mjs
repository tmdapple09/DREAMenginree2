import fs from "fs";
import path from "path";
const ROOT = process.cwd();
const IGNORE = new Set([
  "node_modules",
  ".git",
  ".next",
  ".vercel",
  "dist",
  "build",
  "coverage",
  ".turbo"
]);
const FEATURE_RULES = [
  {
    name: "DreamR",
    match: ["dreamr", "DreamR"]
  },
  {
    name: "Engines",
    match: ["engins", "engin.", "Engine"]
  },
  {
    name: "Runtime",
    match: ["runtime"]
  },
  {
    name: "Warp System",
    match: ["warp"]
  },
  {
    name: "Dream Navigation",
    match: ["dreamnav"]
  },
  {
    name: "AI Systems",
    match: ["ai", "agent", "dr-eams"]
  },
  {
    name: "User Interface",
    match: ["components", "surface", "panel", "overlay", "ui"]
  },
  {
    name: "Hooks",
    match: ["hooks", "use"]
  },
  {
    name: "Backend",
    match: ["backend", "api"]
  },
  {
    name: "Supabase",
    match: ["supabase"]
  },
  {
    name: "Tests",
    match: ["test", "tests"]
  },
  {
    name: "Research",
    match: ["research", "docs"]
  }
];
function shouldIgnore(name) {
  return IGNORE.has(name);
}
function walk(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (shouldIgnore(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const relative = path.relative(ROOT, full);
    if (entry.isDirectory()) {
      walk(full, results);
    } else {
      results.push(relative);
    }
  }
  return results;
}
function detectFeatures(file) {
  const lower = file.toLowerCase();
  return FEATURE_RULES
    .filter(rule =>
      rule.match.some(m => lower.includes(m.toLowerCase()))
    )
    .map(r => r.name);
}
function extractImports(content) {
  const imports = [];
  const regex =
    /from\s+['"](.+?)['"]|import\(['"](.+?)['"]\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    imports.push(match[1] || match[2]);
  }
  return imports;
}
const files = walk(ROOT);
const featureMap = {};
const connections = [];
for (const file of files) {
  const features = detectFeatures(file);
  for (const feature of features) {
    if (!featureMap[feature]) {
      featureMap[feature] = [];
    }
    featureMap[feature].push(file);
  }
  if (
    file.endsWith(".ts") ||
    file.endsWith(".tsx") ||
    file.endsWith(".js") ||
    file.endsWith(".mjs")
  ) {
    try {
      const content = fs.readFileSync(file, "utf8");
      const imports = extractImports(content);
      if (imports.length) {
        connections.push({
          file,
          imports
        });
      }
    } catch {}
  }
}
let md = "";
md += "# DREAMengin Repository State\n\n";
md += `Generated: ${new Date().toISOString()}\n\n`;
md += "---\n\n";
md += "# SYSTEM MAP\n\n";
for (const [feature, relatedFiles] of Object.entries(featureMap)) {
  md += `## ${feature}\n\n`;
  for (const file of relatedFiles.sort()) {
    md += `- ${file}\n`;
  }
  md += "\n";
}
md += "---\n\n";
md += "# FILE CONNECTIONS\n\n";
for (const item of connections) {
  md += `## ${item.file}\n\n`;
  for (const imp of item.imports) {
    md += `- imports: \`${imp}\`\n`;
  }
  md += "\n";
}
md += "---\n\n";
md += "# RAW STRUCTURE\n\n";
md += "```text\n";
function buildTree(dir, prefix = "") {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(e => !shouldIgnore(e.name));
  entries.forEach((entry, index) => {
    const isLast = index === entries.length - 1;
    md += `${prefix}${isLast ? "└──" : "├──"} ${entry.name}\n`;
    if (entry.isDirectory()) {
      buildTree(
        path.join(dir, entry.name),
        prefix + (isLast ? "    " : "│   ")
      );
    }
  });
}
buildTree(ROOT);
md += "```\n";
fs.writeFileSync("REPO_STATE.md", md);
console.log("REPO_STATE.md generated");
