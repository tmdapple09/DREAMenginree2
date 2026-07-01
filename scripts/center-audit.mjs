#!/usr/bin/env node


import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, "reports");
const CENTER_DIR = path.join(REPORT_DIR, "centers");

const EXCLUDE_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "dist",
  "build",
  "coverage",
  "reports",
  "out",
  ".turbo",
  ".cache",
]);

const CODE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);

const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".mdx",
  ".txt",
  ".yml",
  ".yaml",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".html",
  ".xml",
  ".svg",
]);

const CATEGORY_KEYWORDS = {
  "Audio Center": [
    "audio",
    "sound",
    "music",
    "midi",
    "wave",
    "wav",
    "stem",
    "beat",
    "voice",
    "synth",
    "mix",
    "master",
    "track",
    "song",
    "starmaker",
  ],
  "Visual Center": [
    "visual",
    "render",
    "canvas",
    "shader",
    "image",
    "video",
    "animation",
    "sprite",
    "3d",
    "viewport",
    "screen",
    "ui",
    "ux",
    "layout",
    "texture",
    "scene",
    "babylon",
    "three",
    "pixi",
    "glow",
  ],
  "Memory Center": [
    "memory",
    "cache",
    "storage",
    "history",
    "snapshot",
    "persist",
    "persistence",
    "session",
    "state",
    "archive",
    "ledger",
    "timeline",
    "continuity",
  ],
  "Physics Center": [
    "physics",
    "collision",
    "velocity",
    "gravity",
    "force",
    "motion",
    "rigid",
    "particle",
    "simulation",
    "vector",
    "transform",
    "kinematic",
  ],
  "Logic Center": [
    "logic",
    "workflow",
    "rule",
    "intent",
    "engine",
    "runtime",
    "dispatcher",
    "orchestrator",
    "kernel",
    "router",
    "planner",
    "executor",
    "flow",
    "system",
  ],
  "Identity Center": [
    "auth",
    "identity",
    "user",
    "profile",
    "account",
    "permission",
    "role",
    "security",
    "session",
    "capability",
    "ownership",
    "credential",
    "login",
  ],
  "Communication Center": [
    "event",
    "bus",
    "bridge",
    "channel",
    "message",
    "signal",
    "sync",
    "communication",
    "socket",
    "broadcast",
    "pubsub",
    "relay",
    "transport",
  ],
  "AI Center": [
    "ai",
    "llm",
    "agent",
    "prompt",
    "embedding",
    "vector",
    "model",
    "inference",
    "triad",
    "boogie",
    "idari",
    "dreams",
    "moderation",
    "reason",
  ],
};

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return TEXT_EXTENSIONS.has(ext);
}

function isCodeFile(filePath) {
  return CODE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function normalizeSlashes(p) {
  return p.split(path.sep).join("/");
}

function stripComments(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\
    .replace(/\/\/.*$/gm, "");
}

function extractExports(code) {
  const exports = [];
  const patterns = [
    { kind: "default", re: /\bexport\s+default\b/g },
    { kind: "named", re: /\bexport\s+\{[^}]*\}/g },
    { kind: "const", re: /\bexport\s+(?:declare\s+)?const\s+\w+/g },
    { kind: "let", re: /\bexport\s+(?:declare\s+)?let\s+\w+/g },
    { kind: "var", re: /\bexport\s+(?:declare\s+)?var\s+\w+/g },
    { kind: "function", re: /\bexport\s+(?:async\s+)?function\s+\w+/g },
    { kind: "class", re: /\bexport\s+class\s+\w+/g },
    { kind: "type", re: /\bexport\s+type\s+\w+/g },
    { kind: "interface", re: /\bexport\s+interface\s+\w+/g },
    { kind: "enum", re: /\bexport\s+enum\s+\w+/g },
    { kind: "reexport", re: /\bexport\s+\*\s+from\b/g },
    { kind: "reexport-named", re: /\bexport\s+\{[^}]*\}\s+from\b/g },
  ];
  for (const p of patterns) {
    const matches = code.match(p.re);
    if (matches) {
      for (let i = 0; i < matches.length; i++) exports.push(p.kind);
    }
  }
  return exports;
}

function extractImports(code) {
  const imports = [];
  const patterns = [
    /\bimport\s+(?:type\s+)?(?:[\w*\s{},]+\s+from\s+)?["']([^"']+)["']/g,
    /\bexport\s+\{[^}]*\}\s+from\s+["']([^"']+)["']/g,
    /\bexport\s+\*\s+from\s+["']([^"']+)["']/g,
    /\brequire\(\s*["']([^"']+)["']\s*\)/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(code))) imports.push(m[1]);
  }
  return imports;
}

function scoreCategories(filePath, content) {
  const lower = `${normalizeSlashes(filePath)}\n${content}`.toLowerCase();
  const matches = [];

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > 0) matches.push({ category, score });
  }

  matches.sort((a, b) => b.score - a.score || a.category.localeCompare(b.category));
  return matches;
}

function resolveLocalImport(fromFile, specifier) {
  const base = specifier.startsWith("@/")
    ? path.resolve(ROOT, specifier.slice(2))
    : specifier.startsWith(".")
      ? path.resolve(path.dirname(fromFile), specifier)
      : null;
  if (!base) return null;

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.jsx`,
    `${base}.mjs`,
    `${base}.cjs`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    path.join(base, "index.js"),
    path.join(base, "index.jsx"),
    path.join(base, "index.mjs"),
    path.join(base, "index.cjs"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.normalize(candidate);
    }
  }

  return null;
}

function countByKind(exportKinds) {
  const counts = {};
  for (const kind of exportKinds) counts[kind] = (counts[kind] || 0) + 1;
  return counts;
}

function ensureDirs() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.mkdirSync(CENTER_DIR, { recursive: true });
}

function csvEscape(value) {
  const s = String(value ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function mdTable(headers, rows) {
  const lines = [];
  lines.push(`| ${headers.join(" | ")} |`);
  lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
  for (const row of rows) {
    lines.push(`| ${row.join(" | ")} |`);
  }
  return lines.join("\n");
}

function topN(items, n) {
  return items.slice(0, n);
}

function main() {
  const files = walk(ROOT).filter((file) => isTextFile(file));

  const recordsMap = new Map();
  const importsByTarget = new Map();

  for (const file of files) {
    const content = safeRead(file);
    if (content == null) continue;

    const code = isCodeFile(file) ? stripComments(content) : '';
    const exports = code ? extractExports(content) : [];
    const imports = code ? extractImports(code) : [];
    const categories = scoreCategories(file, content);
    const abs = path.normalize(file);

    recordsMap.set(abs, {
      file: normalizeSlashes(path.relative(ROOT, file)),
      absPath: normalizeSlashes(abs),
      categories: categories.map((c) => c.category),
      categoryScores: Object.fromEntries(categories.map((c) => [c.category, c.score])),
      primaryCategory: categories[0]?.category || "Uncategorized",
      categoryCount: categories.length,
      exportCount: exports.length,
      exportKinds: countByKind(exports),
      importSpecifiers: imports,
      importsResolved: [],
      importedByCount: 0,
      orphan: false,
      x: false,
    });
  }

  for (const [abs, record] of recordsMap.entries()) {
    for (const specifier of record.importSpecifiers) {
      const target = resolveLocalImport(abs, specifier);
      if (target && recordsMap.has(path.normalize(target))) {
        record.importsResolved.push(normalizeSlashes(path.relative(ROOT, target)));
        if (!importsByTarget.has(path.normalize(target))) {
          importsByTarget.set(path.normalize(target), new Set());
        }
        importsByTarget.get(path.normalize(target)).add(abs);
      }
    }
  }

  for (const [targetAbs, importers] of importsByTarget.entries()) {
    const rec = recordsMap.get(targetAbs);
    if (rec) {
      rec.importedByCount = importers.size;
    }
  }

  for (const rec of recordsMap.values()) {
    if (rec.importedByCount === 0) {
      rec.orphan = true;
      rec.x = true;
    }
  }

  const records = [...recordsMap.values()].sort((a, b) => {
    if (a.categoryCount !== b.categoryCount) return b.categoryCount - a.categoryCount;
    if (a.importedByCount !== b.importedByCount) return b.importedByCount - a.importedByCount;
    if (a.exportCount !== b.exportCount) return b.exportCount - a.exportCount;
    if (a.primaryCategory !== b.primaryCategory) return a.primaryCategory.localeCompare(b.primaryCategory);
    return a.file.localeCompare(b.file);
  });

  const categoryNames = Object.keys(CATEGORY_KEYWORDS);
  const summary = {
    totalFiles: records.length,
    totalCategories: categoryNames.length,
    categories: {},
  };

  for (const category of categoryNames) {
    const filesInCategory = records.filter((r) => r.categories.includes(category));
    summary.categories[category] = {
      fileCount: filesInCategory.length,
      multiCategoryFiles: filesInCategory.filter((r) => r.categoryCount > 1).length,
      importedByTotal: filesInCategory.reduce((acc, r) => acc + r.importedByCount, 0),
      exportTotal: filesInCategory.reduce((acc, r) => acc + r.exportCount, 0),
      topFiles: topN(
        [...filesInCategory].sort((a, b) => {
          if (a.categoryCount !== b.categoryCount) return b.categoryCount - a.categoryCount;
          if (a.importedByCount !== b.importedByCount) return b.importedByCount - a.importedByCount;
          if (a.exportCount !== b.exportCount) return b.exportCount - a.exportCount;
          return a.file.localeCompare(b.file);
        }),
        25
      ).map((r) => r.file),
    };
  }

  const orphans = records.filter((r) => r.orphan).sort((a, b) => a.file.localeCompare(b.file));

  const multiCategory = records
    .filter((r) => r.categoryCount > 1)
    .sort((a, b) => {
      if (a.categoryCount !== b.categoryCount) return b.categoryCount - a.categoryCount;
      if (a.importedByCount !== b.importedByCount) return b.importedByCount - a.importedByCount;
      if (a.exportCount !== b.exportCount) return b.exportCount - a.exportCount;
      return a.file.localeCompare(b.file);
    });

  const highImpact = records
    .filter((r) => r.importedByCount > 0 || r.exportCount > 0)
    .sort((a, b) => {
      const aScore = a.importedByCount * 10 + a.exportCount + a.categoryCount * 5;
      const bScore = b.importedByCount * 10 + b.exportCount + b.categoryCount * 5;
      if (aScore !== bScore) return bScore - aScore;
      return a.file.localeCompare(b.file);
    });

  const centerRanking = categoryNames
    .map((category) => {
      const data = summary.categories[category];
      const filesInCategory = records.filter((r) => r.categories.includes(category));
      const hubScore =
        data.importedByTotal * 2 +
        data.multiCategoryFiles * 3 +
        data.exportTotal +
        filesInCategory.filter((r) => r.importedByCount > 10).length * 5;

      return {
        category,
        ...data,
        hubScore,
      };
    })
    .sort((a, b) => {
      if (a.hubScore !== b.hubScore) return b.hubScore - a.hubScore;
      if (a.fileCount !== b.fileCount) return b.fileCount - a.fileCount;
      return a.category.localeCompare(b.category);
    });

  const recommendations = [];
  const topCenters = centerRanking.slice(0, 4).map((c) => c.category);

  recommendations.push(
    `Start with ${topCenters[0]} and ${topCenters[1]} as the first stabilizing centers because they carry the most cross-file weight and are likely to become the routing backbone.`
  );
  recommendations.push(
    `Treat files with categoryCount > 1 as shared infrastructure candidates; they are the best source for core adapters, bridges, and shared capability layers.`
  );
  recommendations.push(
    `Treat X/orphan files as archive or recovery candidates first; only promote them if they clearly belong to a high-traffic center.`
  );
  recommendations.push(
    `Build the orchestrator after the first two centers are cleanly defined so the routing contract is stable before more capability domains are added.`
  );
  recommendations.push(
    `Prefer broad stable centers over many tiny centers. The scan should show which categories are true domains and which are just feature clusters.`
  );

  const matrix = [];
  matrix.push([
    "file",
    ...categoryNames,
    "primaryCategory",
    "categoryCount",
    "importedByCount",
    "exportCount",
    "orphan",
    "x",
    "exportKinds",
  ]);

  for (const rec of records) {
    matrix.push([
      rec.file,
      ...categoryNames.map((c) => (rec.categories.includes(c) ? "1" : "0")),
      rec.primaryCategory,
      String(rec.categoryCount),
      String(rec.importedByCount),
      String(rec.exportCount),
      rec.orphan ? "1" : "0",
      rec.x ? "X" : "",
      Object.entries(rec.exportKinds)
        .map(([k, v]) => `${k}:${v}`)
        .join("; "),
    ]);
  }

  ensureDirs();

  fs.writeFileSync(
    path.join(REPORT_DIR, "center-index.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        totalFiles: records.length,
        totalCategories: categoryNames.length,
        records,
      },
      null,
      2
    ),
    "utf8"
  );

  fs.writeFileSync(
    path.join(REPORT_DIR, "center-summary.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        ...summary,
        centerRanking,
        recommendations,
      },
      null,
      2
    ),
    "utf8"
  );

  fs.writeFileSync(path.join(REPORT_DIR, "orphans.json"), JSON.stringify(orphans, null, 2), "utf8");
  fs.writeFileSync(path.join(REPORT_DIR, "top-overlap.json"), JSON.stringify(multiCategory, null, 2), "utf8");
  fs.writeFileSync(path.join(REPORT_DIR, "high-impact.json"), JSON.stringify(highImpact, null, 2), "utf8");

  const csv = matrix.map((row) => row.map(csvEscape).join(",")).join("\n");
  fs.writeFileSync(path.join(REPORT_DIR, "center-matrix.csv"), csv, "utf8");

  for (const category of categoryNames) {
    const filesInCategory = records.filter((r) => r.categories.includes(category));
    const sorted = [...filesInCategory].sort((a, b) => {
      if (a.categoryCount !== b.categoryCount) return b.categoryCount - a.categoryCount;
      if (a.importedByCount !== b.importedByCount) return b.importedByCount - a.importedByCount;
      if (a.exportCount !== b.exportCount) return b.exportCount - a.exportCount;
      return a.file.localeCompare(b.file);
    });

    const lines = [];
    lines.push(`# ${category}`);
    lines.push("");
    lines.push(`Files: **${summary.categories[category].fileCount}**`);
    lines.push(`Multi-category files: **${summary.categories[category].multiCategoryFiles}**`);
    lines.push(`Imported-by total: **${summary.categories[category].importedByTotal}**`);
    lines.push(`Export total: **${summary.categories[category].exportTotal}**`);
    lines.push("");
    lines.push("| File | Categories | Imported By | Exports | X |");
    lines.push("|---|---:|---:|---:|---|");
    for (const rec of sorted) {
      lines.push(
        `| \`${rec.file}\` | ${rec.categoryCount} | ${rec.importedByCount} | ${rec.exportCount} | ${rec.x ? "X" : ""} |`
      );
    }

    fs.writeFileSync(
      path.join(CENTER_DIR, `${category.replace(/\s+/g, "-").toLowerCase()}.md`),
      lines.join("\n"),
      "utf8"
    );
  }

  const md = [];
  md.push(`# DREAMengin Center Audit`);
  md.push("");
  md.push(`Generated: **${new Date().toISOString()}**`);
  md.push("");
  md.push(`Total files scanned: **${records.length}**`);
  md.push(`Total categories: **${categoryNames.length}**`);
  md.push(`Orphan files (X): **${orphans.length}**`);
  md.push(`Multi-category files: **${multiCategory.length}**`);
  md.push("");
  md.push(`## Center ranking`);
  md.push("");
  md.push(mdTable(
    ["Rank", "Center", "Files", "Multi", "Imported By Total", "Exports Total", "Hub Score"],
    centerRanking.map((c, i) => [
      String(i + 1),
      c.category,
      String(c.fileCount),
      String(c.multiCategoryFiles),
      String(c.importedByTotal),
      String(c.exportTotal),
      String(c.hubScore),
    ])
  ));
  md.push("");
  md.push(`## Suggested implementation order`);
  md.push("");
  recommendations.forEach((line, i) => md.push(`${i + 1}. ${line}`));
  md.push("");
  md.push(`## Highest-impact shared files`);
  md.push("");
  md.push(mdTable(
    ["Rank", "File", "Primary", "Categories", "Imported By", "Exports", "X"],
    topN(highImpact, 40).map((r, i) => [
      String(i + 1),
      `\`${r.file}\``,
      r.primaryCategory,
      String(r.categoryCount),
      String(r.importedByCount),
      String(r.exportCount),
      r.x ? "X" : "",
    ])
  ));
  md.push("");
  md.push(`## Orphans (X)`);
  md.push("");
  if (orphans.length === 0) {
    md.push(`No orphaned files were detected.`);
  } else {
    md.push(mdTable(
      ["File", "Primary", "Categories", "Exports", "X"],
      topN(orphans, 250).map((r) => [
        `\`${r.file}\``,
        r.primaryCategory,
        String(r.categoryCount),
        String(r.exportCount),
        "X",
      ])
    ));
  }
  md.push("");
  md.push(`## Per-center index`);
  md.push("");
  for (const category of centerRanking.map((c) => c.category)) {
    const filesInCategory = records.filter((r) => r.categories.includes(category));
    const sorted = [...filesInCategory].sort((a, b) => {
      if (a.categoryCount !== b.categoryCount) return b.categoryCount - a.categoryCount;
      if (a.importedByCount !== b.importedByCount) return b.importedByCount - a.importedByCount;
      if (a.exportCount !== b.exportCount) return b.exportCount - a.exportCount;
      return a.file.localeCompare(b.file);
    });

    md.push(`### ${category}`);
    md.push("");
    md.push(`Files: **${summary.categories[category].fileCount}**  `);
    md.push(`Multi-category: **${summary.categories[category].multiCategoryFiles}**  `);
    md.push(`Imported-by total: **${summary.categories[category].importedByTotal}**  `);
    md.push(`Exports total: **${summary.categories[category].exportTotal}**`);
    md.push("");
    md.push("| File | Categories | Imported By | Exports | Export Kinds | X |");
    md.push("|---|---:|---:|---:|---|---|");
    for (const rec of sorted) {
      const kinds = Object.entries(rec.exportKinds)
        .map(([k, v]) => `${k}:${v}`)
        .join(", ");
      md.push(
        `| \`${rec.file}\` | ${rec.categoryCount} | ${rec.importedByCount} | ${rec.exportCount} | ${kinds || ""} | ${rec.x ? "X" : ""} |`
      );
    }
    md.push("");
  }

  md.push(`## Notes`);
  md.push("");
  md.push(`- **CategoryCount** = how many centers a file touches.`);
  md.push(`- **Imported By** = how many local files import it.`);
  md.push(`- **X** = no local importers were found.`);
  md.push(`- **Hub Score** favors cross-cutting infrastructure.`);
  md.push("");
  md.push(`## What this suggests for DREAMengin`);
  md.push("");
  md.push(`1. Communication and Logic layers are likely the first architectural backbone to stabilize.`);
  md.push(`2. Files with many categories are the best candidates for shared adapters and cross-center services.`);
  md.push(`3. Orphan files should be reviewed as archive, experimental, or future-center seeds.`);
  md.push(`4. New capabilities should preferentially join existing centers instead of introducing new communication paths.`);
  md.push(`5. The orchestrator should route centers, not raw feature logic.`);
  md.push("");

  fs.writeFileSync(path.join(REPORT_DIR, "center-audit.md"), md.join("\n"), "utf8");

  console.log(`Scanned files: ${records.length}`);
  console.log(`Categories: ${categoryNames.length}`);
  console.log(`Orphans (X): ${orphans.length}`);
  console.log(`Multi-category files: ${multiCategory.length}`);
  console.log(`Reports written:`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "center-audit.md"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "center-index.json"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "center-summary.json"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "center-matrix.csv"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "orphans.json"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "top-overlap.json"))}`);
  console.log(`- ${path.relative(ROOT, path.join(REPORT_DIR, "high-impact.json"))}`);
}

main();
