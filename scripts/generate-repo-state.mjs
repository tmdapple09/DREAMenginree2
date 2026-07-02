import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const IGNORE_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  ".vercel",
  "dist",
  "build",
  "coverage",
  ".turbo",
  ".husky",
]);

const TREE_IGNORE_DIRS = new Set([
  ...IGNORE_DIRS,
  ".github",
  "scripts",
  "tests",
  "docs",
  "research",
  "research-and-development",
  "repo-visualizer",
]);

const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const STYLE_EXTENSIONS = new Set([".css", ".scss"]);
const TYPE_EXTENSIONS = new Set([".d.ts"]);
const MEDIA_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
  ".mp4",
  ".mov",
  ".webm",
  ".m4v",
  ".avi",
  ".mkv",
  ".ico",
]);

const RESOLVE_EXTENSIONS = [
  "",
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".scss",
  ".module.css",
  ".module.scss",
  ".wasm",
  ".sql",
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
];

const INDEX_EXTENSIONS = [
  "/index.ts",
  "/index.tsx",
  "/index.js",
  "/index.jsx",
  "/index.mjs",
  "/index.cjs",
  "/index.json",
];

const APP_ROUTER_ENTRY_NAMES = new Set([
  "page.ts",
  "page.tsx",
  "page.js",
  "page.jsx",
  "layout.ts",
  "layout.tsx",
  "layout.js",
  "layout.jsx",
  "template.ts",
  "template.tsx",
  "loading.ts",
  "loading.tsx",
  "error.ts",
  "error.tsx",
  "global-error.ts",
  "global-error.tsx",
  "not-found.ts",
  "not-found.tsx",
  "default.ts",
  "default.tsx",
  "route.ts",
  "route.tsx",
  "route.js",
  "route.jsx",
]);

const ROOT_ENTRY_FILES = new Set([
  "next.config.mjs",
  "next.config.js",
  "eslint.config.mjs",
  "postcss.config.js",
  "postcss.config.mjs",
  "tailwind.config.ts",
  "tailwind.config.js",
  "proxy.ts",
  "middleware.ts",
  "instrumentation.ts",
  "instrumentation-client.ts",
  "next-env.d.ts",
]);

const SURFACE_MARKERS = {
  page: " 👁 PAGE",
  layout: " 🧱 LAYOUT",
  loading: " ⏳ LOADING",
  error: " 🚨 ERROR",
  notFound: " 🧭 NOT_FOUND",
  component: " 🧩 COMPONENT",
  featureFolder: " 🗂 FEATURE_FOLDER",
  apiRoute: " 🔌 API_ROUTE",
};

const FEATURES = [
  {
    id: "home-runtime",
    name: "Home / DreamDMBar / DualRuntime",
    group: "user",
    desc: "Persistent shell, DreamDMBar, HomeDream, DreamSpace, RuntimeShell, RuntimeView, and runtime bridge behavior.",
    globs: ["dreamdmbar/", "app/dreamdmbar", "app/homedream", "components/runtime/", "engine/runtime/", "components/home/"],
    apiGlobs: ["app/api/dreams/", "app/api/feed/", "app/api/home-layout"],
  },
  {
    id: "dreamr",
    name: "DreamR",
    group: "user",
    desc: "DreamR feed, scoring, profiles, swipe behavior, and DreamR APIs.",
    globs: ["dreamr/", "components/dreamr/", "app/dreamr/", "app/api/dreamr/"],
    apiGlobs: ["app/api/dreamr/"],
  },
  {
    id: "contentengin",
    name: "ContentEngin / CreateEngin",
    group: "user",
    desc: "ContentEngin asset workspace, CreateEngin, viewport, media and export behavior.",
    globs: ["engins/contentengin/", "engins/engin.ContentEngin", "components/engines/create/", "app/engines/create", "app/daydream/create"],
    apiGlobs: ["app/api/content/", "app/api/drafts/", "app/api/scheduled-posts"],
  },
  {
    id: "renderengin",
    name: "RenderEngin",
    group: "system",
    desc: "Reusable rendering service code used by visual Engins.",
    globs: ["engins/renderengin/", "app/engines/render", "app/daydream/render"],
    apiGlobs: [],
  },
  {
    id: "gameengin",
    name: "GameEngin",
    group: "user",
    desc: "Game runtime, cartridges, remote controls, HUDs, WASM game logic, and scores.",
    globs: ["engins/gameengin/", "components/gameengin/", "components/games/", "app/engines/games", "app/daydream/games", "assembly/"],
    apiGlobs: ["app/api/game-scores", "app/api/gameengin/"],
  },
  {
    id: "codeengin",
    name: "CodeEngin",
    group: "user",
    desc: "Scoped user-workspace IDE, file APIs, runners, diagnostics, and editor surface.",
    globs: ["engins/codeengin/", "engins/engin.CodeEngin", "components/engines/code/", "app/engines/code", "app/daydream/code", "app/api/codeengin/"],
    apiGlobs: ["app/api/codeengin/", "app/api/projects"],
  },
  {
    id: "labengin",
    name: "LabEngin",
    group: "user",
    desc: "Lab panels, simulations, experiments, and Lab daydream surfaces.",
    globs: ["engins/labengin/", "engins/engin.LabEngin", "components/engines/lab/", "app/engines/lab", "app/daydream/lab"],
    apiGlobs: ["app/api/lab/"],
  },
  {
    id: "starmakerengin",
    name: "StarMakerEngin",
    group: "user",
    desc: "Music Engin, audio bridge, DAW surface, piano roll, and sessions.",
    globs: ["engins/starmakerengin/", "engins/engin.StarMakerEngin", "components/engines/music/", "app/engines/music", "app/daydream/music"],
    apiGlobs: ["app/api/music/"],
  },
  {
    id: "brandengin",
    name: "BrandEngin",
    group: "user",
    desc: "Branding Engin, brand identity, campaigns, and analytics daydreams.",
    globs: ["engins/brandengin/", "engins/engin.BrandingEngin", "components/engines/brand/", "app/engines/brand", "app/daydream/brand"],
    apiGlobs: [],
  },
  {
    id: "forgeengin",
    name: "ForgeEngin",
    group: "user",
    desc: "Forge workflow, engine builder, custom Engin creation, and forge APIs.",
    globs: ["engins/forgeengin/", "engins/dream.ForgeEngin", "components/forge/", "app/daydream/forge"],
    apiGlobs: ["app/api/forge/"],
  },
  {
    id: "profile",
    name: "Profile",
    group: "user",
    desc: "Profile, edit profile, avatar, spatial profile, and public profile routes.",
    globs: ["coresurfaces/", "components/profile/", "components/spatial/", "app/profile/", "app/view-profile/", "app/edit-profiledream/", "app/u/"],
    apiGlobs: ["app/api/profile/"],
  },
  {
    id: "feed-social",
    name: "Feed / Social",
    group: "user",
    desc: "Feed, posts, likes, comments, follows, views, hashtags, and platform feeds.",
    globs: ["components/feed/", "components/dream.FeedCard", "components/dream.HomeFeed", "app/discover/", "app/api/feed/", "app/api/posts/"],
    apiGlobs: ["app/api/feed/", "app/api/posts/", "app/api/follow", "app/api/likes", "app/api/comments", "app/api/views/"],
  },
  {
    id: "marketplace-shop-ads",
    name: "Marketplace / Shop / Ads",
    group: "user",
    desc: "Marketplace, shop, orders, ads, and skip credits.",
    globs: ["components/marketplace/", "components/ads/", "app/marketplace/", "app/shop/", "app/api/marketplace/", "app/api/shop/", "app/api/ads/"],
    apiGlobs: ["app/api/marketplace/", "app/api/shop/", "app/api/ads/", "app/api/skip-credits/"],
  },
  {
    id: "settings-customization",
    name: "Settings / Customization",
    group: "user",
    desc: "Settings, appearance, privacy, safety, customization, and theme paths.",
    globs: ["app/settings/", "components/panels/", "components/customize/", "engine/customization/", "styles/"],
    apiGlobs: ["app/api/settings/"],
  },
  {
    id: "messages",
    name: "Messages / DMs",
    group: "user",
    desc: "Direct messages, conversations, message hooks, boards, and composer paths.",
    globs: ["app/messages/", "components/messaging/", "dreamdmbar/", "app/api/messages/"],
    apiGlobs: ["app/api/messages/"],
  },
  {
    id: "auth",
    name: "Auth",
    group: "user",
    desc: "Login, join, onboarding, OAuth callback, sessions, and setup routes.",
    globs: ["app/auth/", "app/login/", "app/join/", "app/onboarding/", "components/auth/", "app/api/auth/"],
    apiGlobs: ["app/api/auth/", "app/api/setup/"],
  },
  {
    id: "ai-agents",
    name: "AI / Dr. Eams / Agents",
    group: "system",
    desc: "Dr. Eams, agents, mock/live AI client, tool router, and policy systems.",
    globs: ["dr-eams/", "agents/", "build-memory/", "components/idari/", "app/api/ai/", "app/api/agent/"],
    apiGlobs: ["app/api/ai/", "app/api/agent/", "app/api/admin/ai"],
  },
  {
    id: "supabase-db",
    name: "Supabase / Database",
    group: "system",
    desc: "Supabase clients, migrations, policies, schema, and database-backed app behavior.",
    globs: ["supabase/", "supabaseClient.ts", "engine/supabase/", "app/api/"],
    apiGlobs: ["app/api/"],
  },
  {
    id: "vm-wasm",
    name: "VM / WASM",
    group: "system",
    desc: "WASM modules, AssemblyScript sources, VM/runtime hot paths, and cartridge/worker binaries.",
    globs: ["assembly/", "engine/bus.wasm", "public/workers/", "public/cartridges/"],
    apiGlobs: [],
  },
];

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function normalizeRel(value) {
  let out = toPosix(value);
  while (out.startsWith("./")) out = out.slice(2);
  return path.posix.normalize(out);
}

function extOf(file) {
  return path.extname(file).toLowerCase();
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function shouldIgnoreDir(name, treeMode = false) {
  return treeMode ? TREE_IGNORE_DIRS.has(name) : IGNORE_DIRS.has(name);
}

function walk(dir, results = [], options = {}) {
  const treeMode = Boolean(options.treeMode);
  const includeMedia = options.includeMedia !== false;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && shouldIgnoreDir(entry.name, treeMode)) continue;

    const full = path.join(dir, entry.name);
    const rel = normalizeRel(path.relative(ROOT, full));

    if (entry.isDirectory()) {
      walk(full, results, options);
      continue;
    }

    if (!includeMedia && MEDIA_EXTENSIONS.has(extOf(entry.name))) continue;

    results.push(rel);
  }

  return results;
}

function readSafe(file) {
  try {
    return fs.readFileSync(path.join(ROOT, file), "utf8");
  } catch {
    return "";
  }
}

function isCodeFile(file) {
  return CODE_EXTENSIONS.has(extOf(file));
}

function hasAnySuffix(file, suffixes) {
  for (const suffix of suffixes) {
    if (file.endsWith(suffix)) return true;
  }
  return false;
}

function includesAny(value, needles) {
  for (const needle of needles) {
    if (value.includes(needle)) return true;
  }
  return false;
}

function isAPIRoute(file) {
  return file.startsWith("app/api/") && hasAnySuffix(file, ["/route.ts", "/route.tsx", "/route.js", "/route.jsx"]);
}

function isPageFile(file) {
  return file.startsWith("app/") && hasAnySuffix(file, ["/page.tsx", "/page.ts", "/page.jsx", "/page.js"]);
}

function isRouteHandlerFile(file) {
  return hasAnySuffix(file, ["/route.ts", "/route.tsx", "/route.js", "/route.jsx"]) || ["route.ts", "route.tsx", "route.js", "route.jsx"].includes(file);
}

function isAppRouterEntryFile(file) {
  return file.startsWith("app/") && APP_ROUTER_ENTRY_NAMES.has(path.posix.basename(file));
}

function isTestFile(file) {
  return includesAny(file, [".test.", ".spec.", "__tests__/"]);
}

function isStoryFile(file) {
  return includesAny(file, [".stories.", ".story."]);
}

function isTypeFile(file) {
  return file.startsWith("types/") || file.endsWith(".d.ts");
}

function isStyleFile(file) {
  return STYLE_EXTENSIONS.has(extOf(file));
}

function isRootEntryFile(file) {
  return !file.includes("/") && ROOT_ENTRY_FILES.has(file);
}

function mdCell(value) {
  return String(value).split("|").join("\\|").split("\n").join(" ");
}

function isBoundaryChar(ch) {
  if (!ch) return true;
  const code = ch.charCodeAt(0);
  const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  const isDigit = code >= 48 && code <= 57;
  return !(isLetter || isDigit || ch === "_" || ch === "$");
}

function startsWord(content, index, word) {
  if (content.slice(index, index + word.length) !== word) return false;
  return isBoundaryChar(content[index - 1]) && isBoundaryChar(content[index + word.length]);
}

function findNextNonSpace(content, start) {
  for (let index = start; index < content.length; index += 1) {
    const ch = content[index];
    if (ch !== " " && ch !== "\t" && ch !== "\n" && ch !== "\r") return index;
  }
  return content.length;
}

function findStatementEnd(content, start) {
  let quote = "";
  let escaped = false;

  for (let index = start; index < content.length; index += 1) {
    const ch = content[index];

    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === quote) quote = "";
      continue;
    }

    if (ch === "\"" || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }

    if (ch === ";") return index + 1;
  }

  const newline = content.indexOf("\n", start);
  return newline === -1 ? content.length : newline;
}

function findQuotedValue(text, start = 0) {
  for (let index = start; index < text.length; index += 1) {
    const quote = text[index];
    if (quote !== "\"" && quote !== "'" && quote !== "`") continue;

    let value = "";
    let escaped = false;

    for (let cursor = index + 1; cursor < text.length; cursor += 1) {
      const ch = text[cursor];

      if (escaped) {
        value += ch;
        escaped = false;
        continue;
      }

      if (ch === "\\") {
        escaped = true;
        continue;
      }

      if (ch === quote) {
        return { value, start: index, end: cursor + 1 };
      }

      value += ch;
    }
  }

  return null;
}

function splitTopLevelCommas(value) {
  const parts = [];
  let current = "";
  let depth = 0;
  let quote = "";
  let escaped = false;

  for (const ch of value) {
    if (quote) {
      current += ch;
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === quote) quote = "";
      continue;
    }

    if (ch === "\"" || ch === "'" || ch === "`") {
      quote = ch;
      current += ch;
      continue;
    }

    if (ch === "{" || ch === "(" || ch === "[") depth += 1;
    if (ch === "}" || ch === ")" || ch === "]") depth = Math.max(0, depth - 1);

    if (ch === "," && depth === 0) {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = "";
      continue;
    }

    current += ch;
  }

  const trimmed = current.trim();
  if (trimmed) parts.push(trimmed);

  return parts;
}

function removeLeadingType(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("type ")) return trimmed.slice(5).trim();
  return trimmed;
}

function importedNameFromPart(part) {
  const clean = removeLeadingType(part);
  const asIndex = clean.indexOf(" as ");
  return (asIndex >= 0 ? clean.slice(0, asIndex) : clean).trim();
}

function exportedNameFromPart(part) {
  const clean = removeLeadingType(part);
  const asIndex = clean.indexOf(" as ");
  return (asIndex >= 0 ? clean.slice(asIndex + 4) : clean).trim();
}

function parseImportClause(clause) {
  const records = [];
  const raw = clause.trim();

  if (!raw) return records;

  if (raw.startsWith("* as ")) {
    records.push({ kind: "namespace", names: [`* as ${raw.slice(5).trim()}`] });
    return records;
  }

  if (raw.startsWith("{")) {
    const inside = raw.slice(1, raw.lastIndexOf("}"));
    const names = splitTopLevelCommas(inside).map(importedNameFromPart).filter(Boolean);
    if (names.length) records.push({ kind: "named", names });
    return records;
  }

  const commaIndex = raw.indexOf(",");
  if (commaIndex >= 0) {
    const defaultName = raw.slice(0, commaIndex).trim();
    const rest = raw.slice(commaIndex + 1).trim();

    if (defaultName) records.push({ kind: "default", names: ["(default)"] });

    if (rest.startsWith("{")) {
      const inside = rest.slice(1, rest.lastIndexOf("}"));
      const names = splitTopLevelCommas(inside).map(importedNameFromPart).filter(Boolean);
      if (names.length) records.push({ kind: "named", names });
    } else if (rest.startsWith("* as ")) {
      records.push({ kind: "namespace", names: [`* as ${rest.slice(5).trim()}`] });
    }

    return records;
  }

  records.push({ kind: "default", names: ["(default)"] });
  return records;
}

function addRecord(records, specifier, kind, names, source) {
  if (!specifier) return;
  records.push({ specifier, kind, names: names.length ? names : ["(unknown)"], source });
}

function findFromSpecifier(statement) {
  let quote = "";
  let escaped = false;

  for (let index = 0; index < statement.length; index += 1) {
    const ch = statement[index];

    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === quote) quote = "";
      continue;
    }

    if (ch === "\"" || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }

    if (startsWord(statement, index, "from")) {
      const quoted = findQuotedValue(statement, index + 4);
      if (quoted) return { fromIndex: index, specifier: quoted.value };
    }
  }

  return null;
}

function extractImportRecords(content) {
  const records = [];

  for (let index = 0; index < content.length; index += 1) {
    if (startsWord(content, index, "import")) {
      const afterImport = index + "import".length;
      const nextNonSpace = findNextNonSpace(content, afterImport);

      if (content[nextNonSpace] === "(") {
        const statementEnd = findStatementEnd(content, index);
        const statement = content.slice(index, statementEnd);
        const quoted = findQuotedValue(statement, statement.indexOf("("));
        if (quoted) addRecord(records, quoted.value, "dynamic", ["(dynamic import)"], "dynamic");
        index = statementEnd - 1;
        continue;
      }

      const statementEnd = findStatementEnd(content, index);
      const statement = content.slice(index, statementEnd).trim();
      const fromInfo = findFromSpecifier(statement);

      if (fromInfo) {
        let clause = statement.slice("import".length, fromInfo.fromIndex).trim();
        let source = "import";

        if (clause.startsWith("type ")) {
          clause = clause.slice(5).trim();
          source = "import type";
        }

        for (const parsed of parseImportClause(clause)) {
          addRecord(records, fromInfo.specifier, parsed.kind, parsed.names, source);
        }
      } else {
        const quoted = findQuotedValue(statement, "import".length);
        if (quoted) addRecord(records, quoted.value, "side-effect", ["(side-effect)"], "import");
      }

      index = statementEnd - 1;
      continue;
    }

    if (startsWord(content, index, "require")) {
      const statementEnd = findStatementEnd(content, index);
      const statement = content.slice(index, statementEnd);
      const openIndex = statement.indexOf("(");
      const quoted = openIndex >= 0 ? findQuotedValue(statement, openIndex) : null;
      if (quoted) addRecord(records, quoted.value, "require", ["(require)"], "require");
      index = statementEnd - 1;
      continue;
    }

    if (startsWord(content, index, "export")) {
      const statementEnd = findStatementEnd(content, index);
      const statement = content.slice(index, statementEnd).trim();
      const fromInfo = findFromSpecifier(statement);

      if (fromInfo) {
        const beforeFrom = statement.slice("export".length, fromInfo.fromIndex).trim();

        if (beforeFrom === "*") {
          addRecord(records, fromInfo.specifier, "reexport-star", ["*"], "export from");
        } else if (beforeFrom.startsWith("* as ")) {
          addRecord(records, fromInfo.specifier, "reexport-namespace", [`* as ${beforeFrom.slice(5).trim()}`], "export from");
        } else if (beforeFrom.startsWith("type {") || beforeFrom.startsWith("{")) {
          const open = beforeFrom.indexOf("{");
          const close = beforeFrom.lastIndexOf("}");
          const inside = open >= 0 && close > open ? beforeFrom.slice(open + 1, close) : "";
          const names = splitTopLevelCommas(inside).map(importedNameFromPart).filter(Boolean);
          addRecord(records, fromInfo.specifier, "reexport-named", names, beforeFrom.startsWith("type ") ? "export type from" : "export from");
        }
      }

      index = statementEnd - 1;
    }
  }

  return records;
}

function extractImports(content) {
  return uniqueSorted(extractImportRecords(content).map((record) => record.specifier));
}

function extractDynamicImports(content) {
  return uniqueSorted(extractImportRecords(content).filter((record) => record.kind === "dynamic").map((record) => record.specifier));
}

function extractNamedImports(content) {
  const out = {};

  for (const record of extractImportRecords(content)) {
    if (!out[record.specifier]) out[record.specifier] = new Set();

    for (const name of record.names) {
      if (record.kind === "default") out[record.specifier].add(`default ${name}`);
      else if (record.kind === "dynamic") out[record.specifier].add("(dynamic import)");
      else if (record.kind === "side-effect") out[record.specifier].add("(side-effect)");
      else if (record.kind === "require") out[record.specifier].add("(require)");
      else if (record.kind === "reexport-star") out[record.specifier].add("re-export *");
      else if (record.kind === "reexport-namespace") out[record.specifier].add(`re-export ${name}`);
      else if (record.kind === "reexport-named") out[record.specifier].add(`re-export ${name}`);
      else out[record.specifier].add(name);
    }
  }

  return Object.fromEntries(Object.entries(out).map(([key, value]) => [key, [...value].sort()]));
}

function extractExportStatements(content) {
  const statements = [];

  for (let index = 0; index < content.length; index += 1) {
    if (!startsWord(content, index, "export")) continue;
    const end = findStatementEnd(content, index);
    statements.push(content.slice(index, end));
    index = end - 1;
  }

  return statements;
}

function readIdentifier(value) {
  let out = "";

  for (const ch of value.trim()) {
    const code = ch.charCodeAt(0);
    const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    const isDigit = code >= 48 && code <= 57;
    const ok = isLetter || isDigit || ch === "_" || ch === "$";
    if (!ok) break;
    out += ch;
  }

  return out;
}

function extractNamedExports(content) {
  const out = new Set();

  for (const statement of extractExportStatements(content)) {
    const trimmed = statement.trim();

    if (trimmed.startsWith("export default")) {
      out.add("(default)");
      continue;
    }

    let rest = trimmed.slice("export".length).trim();

    if (rest.startsWith("declare ")) rest = rest.slice("declare ".length).trim();
    if (rest.startsWith("async ")) rest = rest.slice("async ".length).trim();

    for (const keyword of ["function", "const", "class", "let", "var", "interface", "type", "enum"]) {
      if (rest.startsWith(`${keyword} `)) {
        const name = readIdentifier(rest.slice(keyword.length).trim());
        if (name) out.add(name);
      }
    }

    if (rest.startsWith("{") || rest.startsWith("type {")) {
      const open = rest.indexOf("{");
      const close = rest.lastIndexOf("}");
      const inside = open >= 0 && close > open ? rest.slice(open + 1, close) : "";
      for (const part of splitTopLevelCommas(inside)) {
        const name = exportedNameFromPart(part);
        if (name) out.add(name);
      }
    }

    if (rest.startsWith("* as ")) {
      const name = readIdentifier(rest.slice(5).trim());
      if (name) out.add(name);
    }
  }

  return [...out].sort();
}

function isUppercase(ch) {
  return ch >= "A" && ch <= "Z";
}

function detectHookExports(content) {
  const hooks = [];

  for (const statement of extractExportStatements(content)) {
    let rest = statement.trim().slice("export".length).trim();

    if (rest.startsWith("function ")) {
      const name = readIdentifier(rest.slice("function ".length).trim());
      if (name.startsWith("use") && name.length > 3 && isUppercase(name[3])) hooks.push(name);
    }

    if (rest.startsWith("const ")) {
      const name = readIdentifier(rest.slice("const ".length).trim());
      if (name.startsWith("use") && name.length > 3 && isUppercase(name[3])) hooks.push(name);
    }
  }

  return uniqueSorted(hooks);
}

function detectReactComponent(file, content) {
  if (!file.endsWith(".tsx") && !file.endsWith(".jsx")) return false;

  if (content.includes("return <")) return true;
  if (content.includes("return (<")) return true;
  if (content.includes("return  <")) return true;
  if (content.includes("React.FC")) return true;
  if (content.includes("JSX.Element")) return true;

  for (const statement of extractExportStatements(content)) {
    let rest = statement.trim().slice("export".length).trim();

    if (rest.startsWith("default ")) rest = rest.slice("default ".length).trim();
    if (rest.startsWith("async ")) rest = rest.slice("async ".length).trim();

    for (const keyword of ["function", "const", "class"]) {
      if (rest.startsWith(`${keyword} `)) {
        const name = readIdentifier(rest.slice(keyword.length).trim());
        if (name && isUppercase(name[0])) return true;
      }
    }
  }

  return false;
}

function isBarrelFile(file, content) {
  const base = path.posix.basename(file);
  if (!["index.ts", "index.tsx", "index.js", "index.jsx", "index.mjs", "index.cjs"].includes(base)) return false;

  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("//"))
    .filter((line) => line !== "'use client';" && line !== "\"use client\";" && line !== "'use server';" && line !== "\"use server\";");

  if (!lines.length) return false;

  return lines.every((line) => line.startsWith("export ") || line.startsWith("import type "));
}

function detectSupabase(content) {
  return content.includes("@supabase") || content.includes("createClient(") || content.includes("supabase.from(") || content.includes("supabase.auth") || content.includes("supabase.storage") || content.includes("supabase.rpc(");
}

function detectEventBus(content) {
  return content.includes(".on(") || content.includes(".emit(") || content.includes(".subscribe(") || content.includes("EventEmitter") || content.includes("eventBus.") || content.includes("dreamOSBus");
}

function detectZustand(content) {
  return content.includes("from 'zustand'") || content.includes("from \"zustand\"") || content.includes("create<");
}

function detectContext(content) {
  return content.includes("createContext(") || content.includes("useContext(") || content.includes("React.createContext");
}

function detectRuntimeRegistry(content) {
  return content.includes(".register(") || content.includes("EnginDispatcher") || content.includes("registerEngine") || content.includes("Registry(") || content.includes("moduleRegistry") || content.includes("enginWorkflowRegistry");
}

function detectDualRuntime(content) {
  return content.includes("dualRuntime") || content.includes("DualRuntime") || content.includes("dreamOSBus") || content.includes("EnginDispatcher") || content.includes("runtimeBridge") || content.includes("DualRuntimeBridge") || content.includes("RuntimeShell") || content.includes("RuntimeView");
}

function loadTsconfigPaths() {
  const mappings = [];

  for (const configFile of ["tsconfig.json", "tsconfig.base.json"]) {
    const full = path.join(ROOT, configFile);
    if (!fs.existsSync(full)) continue;

    try {
      const parsed = JSON.parse(fs.readFileSync(full, "utf8"));
      const compilerOptions = parsed.compilerOptions || {};
      const baseUrl = normalizeRel(compilerOptions.baseUrl || ".");
      const paths = compilerOptions.paths || {};

      for (const [aliasPattern, targets] of Object.entries(paths)) {
        if (!Array.isArray(targets)) continue;
        for (const targetPattern of targets) mappings.push({ aliasPattern, targetPattern, baseUrl });
      }
    } catch {
      
    }
  }

  if (!mappings.some((mapping) => mapping.aliasPattern === "@/*")) {
    mappings.push({ aliasPattern: "@/*", targetPattern: "./*", baseUrl: "." });
  }

  return mappings;
}

function matchesPathPattern(specifier, pattern) {
  const starIndex = pattern.indexOf("*");
  if (starIndex === -1) return specifier === pattern;

  const prefix = pattern.slice(0, starIndex);
  const suffix = pattern.slice(starIndex + 1);

  return specifier.startsWith(prefix) && specifier.endsWith(suffix);
}

function expandPathPattern(specifier, mapping) {
  const starIndex = mapping.aliasPattern.indexOf("*");
  let wildcard = "";

  if (starIndex >= 0) {
    const prefix = mapping.aliasPattern.slice(0, starIndex);
    const suffix = mapping.aliasPattern.slice(starIndex + 1);
    wildcard = specifier.slice(prefix.length, specifier.length - suffix.length);
  }

  return normalizeRel(path.posix.join(mapping.baseUrl, mapping.targetPattern.split("*").join(wildcard)));
}

function stripSpecifierNoise(specifier) {
  return specifier.split("?")[0].split("#")[0];
}

const tsconfigPathMappings = loadTsconfigPaths();
const allPhysicalFiles = walk(ROOT, [], { includeMedia: true, treeMode: false });
const reportFiles = walk(ROOT, [], { includeMedia: false, treeMode: false });
const allFileSet = new Set(allPhysicalFiles.map(normalizeRel));
const allDirSet = new Set();

for (const file of allPhysicalFiles) {
  const parts = file.split("/");
  for (let index = 1; index < parts.length; index += 1) allDirSet.add(parts.slice(0, index).join("/"));
}

function isExternalSpecifier(rawSpecifier) {
  const specifier = stripSpecifierNoise(rawSpecifier);

  if (specifier.startsWith(".") || specifier.startsWith("/") || specifier.startsWith("@/")) return false;

  for (const mapping of tsconfigPathMappings) {
    if (matchesPathPattern(specifier, mapping.aliasPattern)) return false;
  }

  return true;
}

function tryResolveCandidate(candidate) {
  const clean = normalizeRel(candidate);
  if (allFileSet.has(clean)) return clean;

  for (const ext of RESOLVE_EXTENSIONS) {
    const full = normalizeRel(clean + ext);
    if (allFileSet.has(full)) return full;
  }

  if (allDirSet.has(clean)) {
    for (const ext of INDEX_EXTENSIONS) {
      const full = normalizeRel(clean + ext);
      if (allFileSet.has(full)) return full;
    }
  }

  return false;
}

function resolveInternalSpecifier(fromFile, rawSpecifier) {
  const specifier = stripSpecifierNoise(rawSpecifier);
  if (isExternalSpecifier(specifier)) return null;

  const candidates = [];

  if (specifier.startsWith("@/")) candidates.push(specifier.slice(2));
  if (specifier.startsWith(".")) candidates.push(path.posix.join(path.posix.dirname(fromFile), specifier));
  if (specifier.startsWith("/")) {
    candidates.push(specifier.slice(1));
    candidates.push(path.posix.join("public", specifier.slice(1)));
  }

  for (const mapping of tsconfigPathMappings) {
    if (matchesPathPattern(specifier, mapping.aliasPattern)) candidates.push(expandPathPattern(specifier, mapping));
  }

  for (const candidate of candidates) {
    const resolved = tryResolveCandidate(candidate);
    if (resolved) return resolved;
  }

  return false;
}

function codeFileForResolvedPath(resolved) {
  if (!resolved) return null;
  return CODE_EXTENSIONS.has(extOf(resolved)) ? resolved : null;
}

function buildRouteMap(files) {
  const pages = files.filter(isPageFile);

  const routes = pages.map((file) => {
    let route = file;
    if (route.startsWith("app")) route = route.slice(3);

    for (const pageName of ["/page.tsx", "/page.ts", "/page.jsx", "/page.js"]) {
      if (route.endsWith(pageName)) {
        route = route.slice(0, -pageName.length);
        break;
      }
    }

    const parts = route.split("/").filter(Boolean);
    const routeParts = [];

    for (const part of parts) {
      if (part.startsWith("(") && part.endsWith(")")) continue;
      if (part.startsWith("[[...") && part.endsWith("]]")) {
        routeParts.push(`:${part.slice(5, -2)}*`);
        continue;
      }
      if (part.startsWith("[...") && part.endsWith("]")) {
        routeParts.push(`:${part.slice(4, -1)}*`);
        continue;
      }
      if (part.startsWith("[") && part.endsWith("]")) {
        routeParts.push(`:${part.slice(1, -1)}`);
        continue;
      }
      routeParts.push(part);
    }

    route = routeParts.length ? `/${routeParts.join("/")}` : "/";

    let label = "";
    if (route === "/dreamdmbar" || route === "/dreamdmbar/homedream") label = " <- HOME (DreamDMBar)";
    if (route === "/dreamdmbar/dreamspace") label = " <- HOME (DreamSpace)";

    return { route, file, label };
  });

  routes.sort((a, b) => {
    if (a.route === "/") return -1;
    if (b.route === "/") return 1;
    return a.route.localeCompare(b.route);
  });

  return routes;
}

const codeFiles = reportFiles.filter(isCodeFile).sort();
const fileData = {};

for (const file of codeFiles) {
  const content = readSafe(file);
  const importRecords = extractImportRecords(content);
  const imports = extractImports(content);
  const resolvedImports = importRecords.map((record) => ({
    ...record,
    resolved: resolveInternalSpecifier(file, record.specifier),
  }));

  fileData[file] = {
    content,
    importRecords,
    resolvedImports,
    imports,
    namedImports: extractNamedImports(content),
    dynamicImports: extractDynamicImports(content),
    hookExports: detectHookExports(content),
    namedExports: extractNamedExports(content),
    isReactComponent: detectReactComponent(file, content),
    isAPIRoute: isAPIRoute(file),
    usesSupabase: detectSupabase(content),
    usesEventBus: detectEventBus(content),
    usesZustand: detectZustand(content),
    usesContext: detectContext(content),
    usesRuntimeRegistry: detectRuntimeRegistry(content),
    usesDualRuntime: detectDualRuntime(content),
    isBarrel: isBarrelFile(file, content),
    couplingScore: imports.length,
  };
}

const capabilityNodes = new Map();
const fileEdges = [];
const unresolvedImports = {};

function capabilityId(kind, name, file = "") {
  return `${kind}:${name}:${file}`;
}

function addCapability(kind, name, file, extra = {}) {
  const id = capabilityId(kind, name, file);
  if (!capabilityNodes.has(id)) capabilityNodes.set(id, { id, kind, name, file, ...extra });
  return capabilityNodes.get(id);
}

function routeForPage(file) {
  return buildRouteMap([file])[0]?.route || file;
}

for (const file of codeFiles) {
  const data = fileData[file];
  const provided = [];
  const consumed = [];

  if (isPageFile(file)) provided.push(addCapability("route", routeForPage(file), file));
  if (isAPIRoute(file)) provided.push(addCapability("api-route", file.replace("app/api", "/api").replace("/route.ts", "").replace("/route.tsx", ""), file));
  if (data.isReactComponent) provided.push(addCapability("component", path.posix.basename(file), file));

  for (const hook of data.hookExports) provided.push(addCapability("hook", hook, file));
  for (const exp of data.namedExports) provided.push(addCapability("export", exp, file));

  if (!provided.length) provided.push(addCapability("file-surface", path.posix.basename(file), file));

  for (const record of data.resolvedImports) {
    if (record.resolved === false) {
      if (!unresolvedImports[file]) unresolvedImports[file] = [];
      unresolvedImports[file].push(record);
      continue;
    }

    if (record.resolved === null) {
      consumed.push(addCapability("external", record.specifier, "external"));
      continue;
    }

    const targetFile = codeFileForResolvedPath(record.resolved) || record.resolved;
    for (const name of record.names) consumed.push(addCapability("imported", name, targetFile, { specifier: record.specifier }));
  }

  fileEdges.push({ file, from: consumed, to: provided });
}

const relDepGraph = {};
for (const [file, data] of Object.entries(fileData)) {
  relDepGraph[file] = data.resolvedImports.map((record) => codeFileForResolvedPath(record.resolved)).filter(Boolean);
}

function detectCircular(graph) {
  const cycles = new Set();
  const visited = new Set();
  const inStack = new Set();
  const stack = [];

  function dfs(node) {
    if (inStack.has(node)) {
      const index = stack.indexOf(node);
      cycles.add(stack.slice(index).concat(node).join(" -> "));
      return;
    }
    if (visited.has(node)) return;
    visited.add(node);
    inStack.add(node);
    stack.push(node);
    for (const dep of graph[node] || []) {
      if (dep in graph) dfs(dep);
    }
    stack.pop();
    inStack.delete(node);
  }

  for (const node of Object.keys(graph)) dfs(node);
  return [...cycles].sort();
}

const circularDeps = detectCircular(relDepGraph);

const wholeModuleUsed = new Set();
const importedPairs = new Set();

function markExportUsage(targetFile, record) {
  if (!targetFile) return;

  if (["namespace", "dynamic", "side-effect", "require", "reexport-star", "reexport-namespace"].includes(record.kind)) {
    wholeModuleUsed.add(targetFile);
    return;
  }

  if (record.kind === "default") {
    importedPairs.add(`${targetFile}::(default)`);
    return;
  }

  if (record.kind === "named" || record.kind === "reexport-named") {
    for (const name of record.names) importedPairs.add(`${targetFile}::${name}`);
  }
}

for (const [fromFile, data] of Object.entries(fileData)) {
  for (const record of data.resolvedImports) {
    const targetFile = codeFileForResolvedPath(record.resolved);
    if (!targetFile || targetFile === fromFile) continue;
    markExportUsage(targetFile, record);
  }
}

function shouldSkipUnusedExportFile(file, data) {
  if (isTestFile(file)) return true;
  if (isStoryFile(file)) return true;
  if (isTypeFile(file)) return true;
  if (isAppRouterEntryFile(file)) return true;
  if (isRouteHandlerFile(file)) return true;
  if (isRootEntryFile(file)) return true;
  if (data.isBarrel) return true;
  if (wholeModuleUsed.has(file)) return true;
  return false;
}

const unusedExports = {};
for (const [file, data] of Object.entries(fileData)) {
  if (shouldSkipUnusedExportFile(file, data)) continue;
  const unused = data.namedExports.filter((exp) => !importedPairs.has(`${file}::${exp}`));
  if (unused.length) unusedExports[file] = unused;
}

const fileIssues = {};
for (const file of codeFiles) {
  fileIssues[file] = {
    hasBrokenImports: Boolean(unresolvedImports[file]?.length),
    hasUnusedExports: Boolean(unusedExports[file]?.length),
  };
}

const riskFiles = Object.entries(fileData)
  .filter(([file, data]) => !isTestFile(file) && (data.couplingScore > 5 || data.usesEventBus || data.usesRuntimeRegistry || data.usesDualRuntime))
  .map(([file, data]) => ({
    file,
    score: data.couplingScore,
    flags: [
      data.couplingScore > 10 ? "HIGH_COUPLING" : data.couplingScore > 5 ? "MEDIUM_COUPLING" : null,
      data.usesEventBus ? "EVENT_BUS" : null,
      data.usesRuntimeRegistry ? "RUNTIME_REGISTRY" : null,
      data.usesDualRuntime ? "DUAL_RUNTIME" : null,
      data.usesZustand ? "ZUSTAND_STATE" : null,
    ].filter(Boolean),
  }))
  .sort((a, b) => b.score - a.score);

function matchGlobs(file, globs) {
  return globs.some((glob) => {
    const clean = glob.endsWith("/") ? glob.slice(0, -1) : glob;
    return file === clean || file.startsWith(`${clean}/`) || file.includes(clean);
  });
}

function groupByDir(files, depth = 3) {
  const byDir = {};
  for (const file of files.sort()) {
    const parts = file.split("/");
    const dir = parts.slice(0, Math.min(depth, Math.max(1, parts.length - 1))).join("/");
    if (!byDir[dir]) byDir[dir] = [];
    byDir[dir].push(file);
  }
  return byDir;
}

function getFeatureFiles(feature) {
  const code = codeFiles.filter((file) => !isTestFile(file) && matchGlobs(file, feature.globs));
  const pages = code.filter(isPageFile);
  const apis = reportFiles.filter(isAPIRoute).filter((file) => matchGlobs(file, feature.apiGlobs || []));
  const types = reportFiles.filter(isTypeFile).filter((file) => matchGlobs(file, feature.globs));
  const styles = reportFiles.filter(isStyleFile).filter((file) => matchGlobs(file, feature.globs));

  const edges = fileEdges.filter((edge) => code.includes(edge.file));
  const nodes = [];
  for (const edge of edges) {
    nodes.push(...edge.from, ...edge.to);
  }

  return {
    code,
    pages,
    apis,
    types,
    styles,
    edges,
    nodes,
    dualRuntimeFiles: code.filter((file) => fileData[file]?.usesDualRuntime),
    supabaseFiles: code.filter((file) => fileData[file]?.usesSupabase),
    eventBusFiles: code.filter((file) => fileData[file]?.usesEventBus),
    zustandFiles: code.filter((file) => fileData[file]?.usesZustand),
    contextFiles: code.filter((file) => fileData[file]?.usesContext),
    registryFiles: code.filter((file) => fileData[file]?.usesRuntimeRegistry),
  };
}

function featureHasDetectedFiles(feature) {
  const data = getFeatureFiles(feature);
  return Boolean(data.code.length || data.pages.length || data.apis.length || data.types.length || data.styles.length);
}

function detectedUserFeatures() {
  return FEATURES.filter((feature) => feature.group === "user" && featureHasDetectedFiles(feature));
}

function isNamedUserFeatureArea(file) {
  return detectedUserFeatures().some((feature) => matchGlobs(file, feature.globs));
}

function isNamedUserFeatureDirectory(relPath) {
  const normalized = normalizeRel(relPath);

  return detectedUserFeatures().some((feature) => {
    return feature.globs.some((glob) => {
      const clean = glob.endsWith("/") ? glob.slice(0, -1) : glob;
      return normalized === clean || normalized.startsWith(`${clean}/`) || clean.startsWith(`${normalized}/`);
    });
  });
}

function isUserFeatureApiRoute(file) {
  if (!isAPIRoute(file)) return false;

  return detectedUserFeatures().some((feature) => {
    return matchGlobs(file, feature.apiGlobs || []) || matchGlobs(file, feature.globs || []);
  });
}

function isVisibleNamedComponent(file) {
  if (isTestFile(file) || isStoryFile(file)) return false;

  const data = fileData[file];
  if (!data?.isReactComponent) return false;

  const base = path.posix.basename(file).replace(/\.(tsx|jsx)$/, "");
  const hasDescriptiveComponentName =
    /^[A-Z][A-Za-z0-9]*(?:[A-Z][A-Za-z0-9]*)*$/.test(base) ||
    base.includes(".") ||
    base.startsWith("dream.") ||
    base.startsWith("engin.");

  if (!hasDescriptiveComponentName) return false;

  return file.startsWith("components/") || file.startsWith("app/") || isNamedUserFeatureArea(file);
}

function getUserSurfaceMarkers(file) {
  const markers = [];
  const base = path.posix.basename(file);

  if (file.startsWith("app/")) {
    if (["page.ts", "page.tsx", "page.js", "page.jsx"].includes(base)) {
      markers.push(SURFACE_MARKERS.page);
    }

    if (["layout.ts", "layout.tsx", "layout.js", "layout.jsx", "template.ts", "template.tsx", "default.ts", "default.tsx"].includes(base)) {
      markers.push(SURFACE_MARKERS.layout);
    }

    if (["loading.ts", "loading.tsx"].includes(base)) {
      markers.push(SURFACE_MARKERS.loading);
    }

    if (["error.ts", "error.tsx", "global-error.ts", "global-error.tsx"].includes(base)) {
      markers.push(SURFACE_MARKERS.error);
    }

    if (["not-found.ts", "not-found.tsx"].includes(base)) {
      markers.push(SURFACE_MARKERS.notFound);
    }

    if (isUserFeatureApiRoute(file)) {
      markers.push(SURFACE_MARKERS.apiRoute);
    }
  }

  if (isVisibleNamedComponent(file)) {
    markers.push(SURFACE_MARKERS.component);
  }

  return uniqueSorted(markers);
}

function renderListOrEmpty(items, emptyText) {
  if (!items.length) return `${emptyText}\n\n`;
  return items.sort().map((item) => `- \`${item}\``).join("\n") + "\n\n";
}

function renderGroupedFiles(files, emptyText) {
  if (!files.length) return `${emptyText}\n\n`;
  let section = "";
  for (const [dir, dirFiles] of Object.entries(groupByDir(files)).sort()) {
    section += `### \`${dir}/\`\n\n`;
    for (const file of dirFiles) section += `- \`${file}\`\n`;
    section += "\n";
  }
  return section;
}

function renderFeatureSection(feature) {
  const data = getFeatureFiles(feature);
  let section = "";

  section += `<a name="${feature.id}"></a>\n\n`;
  section += `# ${feature.name}\n\n`;
  section += `> ${feature.desc}\n\n`;

  section += `## Files as Edges\n\n`;
  if (data.edges.length) {
    section += `| File Edge | Consumes Nodes | Provides Nodes |\n`;
    section += `|-----------|----------------|----------------|\n`;
    for (const edge of data.edges.slice(0, 80)) {
      const from = edge.from.slice(0, 6).map((node) => `\`${mdCell(node.name)}\``).join(", ") || "-";
      const to = edge.to.slice(0, 6).map((node) => `\`${mdCell(node.name)}\``).join(", ") || "-";
      section += `| \`${mdCell(edge.file)}\` | ${from} | ${to} |\n`;
    }
    if (data.edges.length > 80) section += `\n_Trimmed to first 80 file edges for this feature._\n`;
    section += "\n";
  } else {
    section += `_No file edges detected for this feature._\n\n`;
  }

  section += `## Pages\n\n`;
  section += renderListOrEmpty(data.pages, "_No page routes for this feature._");

  section += `## API Routes\n\n`;
  section += renderListOrEmpty(data.apis, "_No API routes for this feature._");

  section += `## Code Files\n\n`;
  section += renderGroupedFiles(data.code, "_No code files for this feature._");

  section += `## Types\n\n`;
  section += renderListOrEmpty(data.types, "_No type files for this feature._");

  section += `## Styles\n\n`;
  section += renderListOrEmpty(data.styles, "_No style files for this feature._");

  const caps = [];
  if (data.dualRuntimeFiles.length) caps.push(`**Dual Runtime** (${data.dualRuntimeFiles.length} files)`);
  if (data.supabaseFiles.length) caps.push(`**Supabase** (${data.supabaseFiles.length} files)`);
  if (data.eventBusFiles.length) caps.push(`**Event Bus** (${data.eventBusFiles.length} files)`);
  if (data.zustandFiles.length) caps.push(`**Zustand** (${data.zustandFiles.length} files)`);
  if (data.contextFiles.length) caps.push(`**React Context** (${data.contextFiles.length} files)`);
  if (data.registryFiles.length) caps.push(`**Runtime Registry** (${data.registryFiles.length} files)`);

  if (caps.length) {
    section += `## Capability Flags\n\n`;
    section += caps.join(" - ") + "\n\n";
  }

  section += `---\n\n`;
  return section;
}

const dirFeatureMap = {};
for (const feature of FEATURES) {
  for (const glob of feature.globs) {
    const key = glob.endsWith("/") ? glob.slice(0, -1) : glob;
    if (!dirFeatureMap[key]) dirFeatureMap[key] = [];
    dirFeatureMap[key].push(feature.name);
  }
}

function getFeatureAnnotation(entryPath) {
  const rel = normalizeRel(path.relative(ROOT, entryPath));
  const matches = [];
  for (const [key, names] of Object.entries(dirFeatureMap)) {
    if (rel === key || rel.startsWith(`${key}/`) || rel.includes(key)) {
      for (const name of names) if (!matches.includes(name)) matches.push(name);
    }
  }
  return matches.length ? `  [${matches.join(", ")}]` : "";
}

function sortedTreeEntries(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !shouldIgnoreDir(entry.name, true))
    .filter((entry) => {
      if (entry.isDirectory()) return true;
      const ext = extOf(entry.name);
      if (MEDIA_EXTENSIONS.has(ext)) return false;
      if (entry.name.toLowerCase().endsWith(".md")) return false;
      return true;
    })
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
}

function buildTreeString({ detailed = false } = {}) {
  let output = "";

  function render(dir, prefix = "") {
    const entries = sortedTreeEntries(dir);
    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;
      const fullPath = path.join(dir, entry.name);
      const relPath = normalizeRel(path.relative(ROOT, fullPath));
      const childPrefix = prefix + (isLast ? "    " : "|   ");
      const annotation = entry.isDirectory()
        ? `${getFeatureAnnotation(fullPath)}${isNamedUserFeatureDirectory(relPath) ? SURFACE_MARKERS.featureFolder : ""}`
        : "";

      let issueMarkers = "";
      if (!entry.isDirectory()) {
        const issues = fileIssues[relPath];
        if (issues?.hasBrokenImports) issueMarkers += " !";

        for (const marker of getUserSurfaceMarkers(relPath)) {
          issueMarkers += marker;
        }
      }

      output += `${prefix}${isLast ? "`--" : "+--"} ${entry.name}${issueMarkers}${annotation}\n`;

      if (entry.isDirectory()) {
        render(fullPath, childPrefix);
        return;
      }

      const data = fileData[relPath];
      const unresolved = unresolvedImports[relPath] || [];
      const lines = [];

      if (!detailed) {
        for (const item of unresolved) lines.push(`! ${item.specifier} (${item.names.join(", ")})`);
      } else if (data) {
        for (const record of data.resolvedImports) {
          const status = record.resolved === false ? "!" : "<-";
          lines.push(`${record.names.join(", ")}  ${status} ${record.specifier}`);
        }
        for (const exp of data.namedExports) lines.push(`-> ${exp}`);
      }

      lines.forEach((line, lineIndex) => {
        const isLastLine = lineIndex === lines.length - 1;
        output += `${childPrefix}${isLastLine ? "`--" : "+--"} ${line}\n`;
      });
    });
  }

  render(ROOT);
  return output;
}

let md = "";
const detectedFeatures = FEATURES.filter(featureHasDetectedFiles);
const userFeatures = detectedFeatures.filter((feature) => feature.group === "user");
const systemFeatures = detectedFeatures.filter((feature) => feature.group === "system");
const unresolvedCount = Object.values(unresolvedImports).reduce((sum, items) => sum + items.length, 0);

md += "# DREAMengin Repository State\n\n";
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `Model: capability nodes + files as edges.\n\n`;
md += "Marker guide:\n\n";
md += "- `👁 PAGE` = A place people can visit in the app.\n";
md += "- `🧱 LAYOUT` = The shared frame around a page, like the header, sidebar, or page wrapper.\n";
md += "- `⏳ LOADING` = What people see while the app is waiting.\n";
md += "- `🚨 ERROR` = What people see when something goes wrong.\n";
md += "- `🧭 NOT_FOUND` = What people see when the app cannot find the page.\n";
md += "- `🧩 COMPONENT` = A visible piece of the app, like a button, card, menu, form, panel, popup, or widget.\n";
md += "- `🗂 FEATURE_FOLDER` = A folder that holds files for something people use in the app.\n";
md += "- `🔌 API_ROUTE` = A behind-the-scenes app action, like saving, posting, liking, uploading, logging in, or sending a message.\n\n";
md += `- Capability nodes: ${capabilityNodes.size}\n`;
md += `- File edges: ${fileEdges.length}\n`;
md += `- Routes: ${buildRouteMap(reportFiles).length}\n`;
md += `- Files analysed: ${codeFiles.length}\n`;
md += `- Unresolved internal imports: ${unresolvedCount} specifiers across ${Object.keys(unresolvedImports).length} files\n\n`;
md += "---\n\n";

md += "# MASTER INDEX\n\n";
md += "## User-Facing Features\n\n";
for (const feature of userFeatures) md += `- [${feature.name}](#${feature.id})\n`;
md += "\n## System & Infrastructure\n\n";
for (const feature of systemFeatures) md += `- [${feature.name}](#${feature.id})\n`;
md += "\n## Cross-Cutting\n\n";
md += "- [Route Map](#route-map)\n";
md += "- [Capability Nodes](#capability-nodes)\n";
md += "- [Files as Edges](#files-as-edges)\n";
md += "- [Unresolved Internal Imports](#unresolved-imports)\n";
md += "- [Circular Dependencies](#circular-deps)\n";
md += "- [Risk Files](#risk-files)\n";
md += "- [Raw File Tree](#raw-tree)\n\n";
md += "---\n\n";

md += "# User-Facing Features\n\n---\n\n";
for (const feature of userFeatures) md += renderFeatureSection(feature);

md += "# System & Infrastructure\n\n---\n\n";
for (const feature of systemFeatures) md += renderFeatureSection(feature);

md += `<a name="route-map"></a>\n\n`;
md += "# Route Map\n\n";
for (const route of buildRouteMap(reportFiles)) md += `- \`${route.route}\` - \`${route.file}\`${route.label}\n`;
md += "\n---\n\n";

md += `<a name="capability-nodes"></a>\n\n`;
md += "# Capability Nodes\n\n";
const nodesByKind = {};
for (const node of capabilityNodes.values()) {
  if (!nodesByKind[node.kind]) nodesByKind[node.kind] = [];
  nodesByKind[node.kind].push(node);
}
for (const [kind, nodes] of Object.entries(nodesByKind).sort()) {
  md += `## ${kind}\n\n`;
  for (const node of nodes.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 300)) md += `- \`${mdCell(node.name)}\` - \`${mdCell(node.file)}\`\n`;
  if (nodes.length > 300) md += `- _${nodes.length - 300} more omitted from this section_\n`;
  md += "\n";
}
md += "---\n\n";

md += `<a name="files-as-edges"></a>\n\n`;
md += "# Files as Edges\n\n";
md += "| File Edge | Consumes Nodes | Provides Nodes |\n";
md += "|-----------|----------------|----------------|\n";
for (const edge of fileEdges.sort((a, b) => a.file.localeCompare(b.file))) {
  const from = edge.from.slice(0, 8).map((node) => `\`${mdCell(node.name)}\``).join(", ") || "-";
  const to = edge.to.slice(0, 8).map((node) => `\`${mdCell(node.name)}\``).join(", ") || "-";
  md += `| \`${mdCell(edge.file)}\` | ${from} | ${to} |\n`;
}
md += "\n---\n\n";

md += `<a name="unresolved-imports"></a>\n\n`;
md += "# Unresolved Internal Imports\n\n";
if (Object.keys(unresolvedImports).length) {
  md += "| File | Specifier | Names |\n";
  md += "|------|-----------|-------|\n";
  for (const [file, items] of Object.entries(unresolvedImports).sort()) {
    for (const item of items) md += `| \`${mdCell(file)}\` | \`${mdCell(item.specifier)}\` | ${item.names.map((name) => `\`${mdCell(name)}\``).join(", ")} |\n`;
  }
} else {
  md += "_No unresolved internal imports detected._\n";
}
md += "\n---\n\n";

md += `<a name="circular-deps"></a>\n\n`;
md += "# Circular Dependencies\n\n";
if (circularDeps.length) {
  for (const cycle of circularDeps) md += `- ! ${cycle}\n`;
} else {
  md += "_No circular dependencies detected._\n";
}
md += "\n---\n\n";

md += `<a name="risk-files"></a>\n\n`;
md += "# Risk Files\n\n";
if (riskFiles.length) {
  md += "| File | Coupling | Flags |\n";
  md += "|------|----------|-------|\n";
  for (const item of riskFiles) md += `| \`${mdCell(item.file)}\` | ${item.score} | ${item.flags.join(", ")} |\n`;
} else {
  md += "_No risk files detected._\n";
}
md += "\n---\n\n";

md += `<a name="raw-tree"></a>\n\n`;
md += "# Raw File Tree\n\n";
md += "```text\n";
md += "Legend: `!` means unresolved import. Markers are explained above.\n\n";
md += buildTreeString({ detailed: false });
md += "```\n";

fs.writeFileSync("REPO_STATE.md", md);
console.log("OK REPO_STATE.md written");

let treeMd = "";
treeMd += "# File Tree\n\n";
treeMd += `Generated: ${new Date().toISOString()}\n\n`;
treeMd += "Marker guide:\n\n";
treeMd += "- `👁 PAGE` = A place people can visit in the app.\n";
treeMd += "- `🧱 LAYOUT` = The shared frame around a page, like the header, sidebar, or page wrapper.\n";
treeMd += "- `⏳ LOADING` = What people see while the app is waiting.\n";
treeMd += "- `🚨 ERROR` = What people see when something goes wrong.\n";
treeMd += "- `🧭 NOT_FOUND` = What people see when the app cannot find the page.\n";
treeMd += "- `🧩 COMPONENT` = A visible piece of the app, like a button, card, menu, form, panel, popup, or widget.\n";
treeMd += "- `🗂 FEATURE_FOLDER` = A folder that holds files for something people use in the app.\n";
treeMd += "- `🔌 API_ROUTE` = A behind-the-scenes app action, like saving, posting, liking, uploading, logging in, or sending a message.\n\n";
treeMd += "Legend: `!` means unresolved import. Markers are explained above.\n\n";
treeMd += "```text\n";
treeMd += buildTreeString({ detailed: true });
treeMd += "```\n";

fs.writeFileSync("FILE_TREE.md", treeMd);
console.log("OK FILE_TREE.md written");
console.log(`  Routes: ${buildRouteMap(reportFiles).length}`);
console.log(`  Files analysed: ${codeFiles.length}`);
console.log(`  Capability nodes: ${capabilityNodes.size}`);
console.log(`  File edges: ${fileEdges.length}`);
console.log(`  Dual-runtime files: ${codeFiles.filter((file) => fileData[file].usesDualRuntime).length}`);
console.log(`  Unresolved internal imports: ${unresolvedCount} specifiers across ${Object.keys(unresolvedImports).length} files`);
