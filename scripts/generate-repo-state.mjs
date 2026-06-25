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

const TREE_ONLY_IGNORE_DIRS = new Set([
  ...IGNORE_DIRS,
  "docs",
  "research",
  "research-and-development",
  "repo-visualizer",
]);

const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const STYLE_EXTENSIONS = new Set([".css", ".scss"]);
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

const FEATURES = [
  {
    id: "homedream",
    name: "HOME — DreamDMBar",
    group: "user",
    desc: "DreamDMBar, HomeDream, DreamSpace, persistent shell, and dual-runtime entry behavior.",
    globs: ["dreamdmbar/", "app/dreamdmbar", "app/homedream", "components/home/", "components/runtime/", "engine/runtime/"],
    apiGlobs: ["app/api/dreams/", "app/api/feed/", "app/api/home-layout"],
    testGlobs: ["dreamdm", "homedream", "dual-runtime", "runtime"],
  },
  {
    id: "dreamr",
    name: "DreamR",
    group: "user",
    desc: "DreamR feed, scoring, swipe behavior, profile/social surfaces, and DreamR APIs.",
    globs: ["dreamr/", "components/dreamr/", "app/dreamr/", "app/api/dreamr/"],
    apiGlobs: ["app/api/dreamr/"],
    testGlobs: ["dreamr", "swipe", "torridity"],
  },
  {
    id: "contentengin",
    name: "ContentEngin / CreateEngin",
    group: "user",
    desc: "Asset studio, CreateEngin, ContentEngin panels, viewport, media, publishing, and export paths.",
    globs: ["engins/contentengin/", "engins/engin.ContentEngin", "components/engines/create/", "app/engines/create", "app/daydream/create"],
    apiGlobs: ["app/api/content/", "app/api/drafts/", "app/api/scheduled-posts"],
    testGlobs: ["contentengin", "content-publish", "asset"],
  },
  {
    id: "renderengin",
    name: "RenderEngin",
    group: "system",
    desc: "Reusable rendering service code used by visual Engins.",
    globs: ["engins/renderengin/", "app/engines/render", "app/daydream/render"],
    apiGlobs: [],
    testGlobs: ["renderengin", "render-engin"],
  },
  {
    id: "gameengin",
    name: "GameEngin",
    group: "user",
    desc: "Game runtime, cartridges, GameRemote, controls, HUDs, WASM game logic, and scores.",
    globs: ["engins/gameengin/", "components/gameengin/", "components/games/", "app/engines/games", "app/daydream/games", "assembly/"],
    apiGlobs: ["app/api/game-scores", "app/api/gameengin/"],
    testGlobs: ["gameengin", "game-controller", "madmaxi", "game-remote"],
  },
  {
    id: "codeengin",
    name: "CodeEngin",
    group: "user",
    desc: "Scoped user-workspace IDE, files API, runners, diagnostics, and editor surface.",
    globs: ["engins/codeengin/", "engins/engin.CodeEngin", "components/engines/code/", "app/engines/code", "app/daydream/code", "app/api/codeengin/"],
    apiGlobs: ["app/api/codeengin/", "app/api/projects"],
    testGlobs: ["codeengin", "code-dream"],
  },
  {
    id: "labengin",
    name: "LabEngin",
    group: "user",
    desc: "Lab panels, experiments, simulations, and Lab daydream surfaces.",
    globs: ["engins/labengin/", "engins/engin.LabEngin", "components/engines/lab/", "app/engines/lab", "app/daydream/lab"],
    apiGlobs: ["app/api/lab/"],
    testGlobs: ["labengin", "lab-dream"],
  },
  {
    id: "starmakerengin",
    name: "StarMakerEngin",
    group: "user",
    desc: "Music Engin, audio bridge, DAW surface, piano roll, and sessions.",
    globs: ["engins/starmakerengin/", "engins/engin.StarMakerEngin", "components/engines/music/", "app/engines/music", "app/daydream/music"],
    apiGlobs: ["app/api/music/"],
    testGlobs: ["starmaker", "music"],
  },
  {
    id: "brandengin",
    name: "BrandEngin",
    group: "user",
    desc: "Branding Engin, brand identity, campaigns, and analytics daydreams.",
    globs: ["engins/brandengin/", "engins/engin.BrandingEngin", "components/engines/brand/", "app/engines/brand", "app/daydream/brand"],
    apiGlobs: [],
    testGlobs: ["brand", "branding"],
  },
  {
    id: "forgeengin",
    name: "ForgeEngin",
    group: "user",
    desc: "Forge workflow, engine builder, custom Engin creation, and forge APIs.",
    globs: ["engins/forgeengin/", "engins/dream.ForgeEngin", "components/forge/", "app/daydream/forge"],
    apiGlobs: ["app/api/forge/"],
    testGlobs: ["forge"],
  },
  {
    id: "profile",
    name: "Profile",
    group: "user",
    desc: "Profile, edit profile, avatar, spatial profile, and public profile routes.",
    globs: ["coresurfaces/", "components/profile/", "components/spatial/", "app/profile/", "app/view-profile/", "app/edit-profiledream/", "app/u/"],
    apiGlobs: ["app/api/profile/"],
    testGlobs: ["profile", "avatar"],
  },
  {
    id: "feed",
    name: "Feed & Social",
    group: "user",
    desc: "Feed, posts, likes, comments, follows, views, hashtags, and platform feeds.",
    globs: ["components/feed/", "components/dream.FeedCard", "components/dream.HomeFeed", "app/discover/", "app/api/feed/", "app/api/posts/"],
    apiGlobs: ["app/api/feed/", "app/api/posts/", "app/api/follow", "app/api/likes", "app/api/comments", "app/api/views/"],
    testGlobs: ["feed", "post", "social"],
  },
  {
    id: "marketplace",
    name: "Marketplace & Shop",
    group: "user",
    desc: "Marketplace, shop, orders, ads, and skip credits.",
    globs: ["components/marketplace/", "components/ads/", "app/marketplace/", "app/shop/", "app/api/marketplace/", "app/api/shop/", "app/api/ads/"],
    apiGlobs: ["app/api/marketplace/", "app/api/shop/", "app/api/ads/", "app/api/skip-credits/"],
    testGlobs: ["marketplace", "shop", "orders", "ads", "skip-credits"],
  },
  {
    id: "settings",
    name: "Settings / Customization",
    group: "user",
    desc: "Settings, appearance, privacy, safety, customization, and theme paths.",
    globs: ["app/settings/", "components/panels/", "components/customize/", "engine/customization/", "styles/"],
    apiGlobs: ["app/api/settings/"],
    testGlobs: ["settings", "appearance", "privacy"],
  },
  {
    id: "messages",
    name: "Messages & DMs",
    group: "user",
    desc: "Direct messages, conversations, message hooks, boards, and composer paths.",
    globs: ["app/messages/", "components/messaging/", "dreamdmbar/", "app/api/messages/"],
    apiGlobs: ["app/api/messages/"],
    testGlobs: ["messages", "messaging", "dreamdm"],
  },
  {
    id: "auth",
    name: "Auth",
    group: "user",
    desc: "Login, join, onboarding, OAuth callback, sessions, and setup routes.",
    globs: ["app/auth/", "app/login/", "app/join/", "app/onboarding/", "components/auth/", "app/api/auth/"],
    apiGlobs: ["app/api/auth/", "app/api/setup/"],
    testGlobs: ["auth", "login", "safe-get-user"],
  },
  {
    id: "runtime-core",
    name: "Runtime Core",
    group: "system",
    desc: "DualRuntime, runtime bridge, dispatcher, workflow registry, module registry, and RuntimeShell.",
    globs: ["engine/runtime/", "components/runtime/", "hooks/useEngin", "hooks/useSharedEngin"],
    apiGlobs: [],
    testGlobs: ["runtime", "dispatcher", "workflow"],
  },
  {
    id: "ai",
    name: "AI / Dr. Eams / Agents",
    group: "system",
    desc: "Dr. Eams, agents, mock/live AI client, tool router, and policy systems.",
    globs: ["dr-eams/", "agents/", "build-memory/", "components/idari/", "app/api/ai/", "app/api/agent/"],
    apiGlobs: ["app/api/ai/", "app/api/agent/", "app/api/admin/ai"],
    testGlobs: ["agent", "dr-eams", "ai"],
  },
  {
    id: "supabase",
    name: "Supabase / Database",
    group: "system",
    desc: "Supabase clients, migrations, policies, schema, and database-backed application behavior.",
    globs: ["supabase/", "supabaseClient.ts", "engine/supabase/", "app/api/"],
    apiGlobs: ["app/api/"],
    testGlobs: ["supabase", "database", "safe-get-user"],
  },
  {
    id: "vm-wasm",
    name: "VM / WASM",
    group: "system",
    desc: "WASM modules, AssemblyScript sources, VM/runtime hot paths, and cartridge/worker binaries.",
    globs: ["assembly/", "engine/bus.wasm", "public/workers/", "public/cartridges/"],
    apiGlobs: [],
    testGlobs: ["wasm", "vm"],
  },
];

function toPosix(value) {
  return value.replaceAll(path.sep, "/");
}

function normalizeRel(value) {
  return path.posix.normalize(toPosix(value)).replace(/^\.\//, "");
}

function extOf(file) {
  return path.extname(file).toLowerCase();
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function shouldIgnoreDir(name, treeMode = false) {
  return treeMode ? TREE_ONLY_IGNORE_DIRS.has(name) : IGNORE_DIRS.has(name);
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

function isAPIRoute(file) {
  return /^app\/api\//.test(file) && /\/route[.](ts|tsx|js|jsx)$/.test(file);
}

function isRouteHandlerFile(file) {
  return /(^|\/)route[.](ts|tsx|js|jsx)$/.test(file);
}

function isPageFile(file) {
  return file.startsWith("app/") && /\/page[.](tsx|ts|jsx|js)$/.test(file);
}

function isAppRouterEntryFile(file) {
  return file.startsWith("app/") && APP_ROUTER_ENTRY_NAMES.has(path.posix.basename(file));
}

function isTestFile(file) {
  return /[.](test|spec)[.](ts|tsx|js|jsx|mjs|cjs)$/.test(file) || file.includes("__tests__/");
}

function isStoryFile(file) {
  return /[.](stories|story)[.](ts|tsx|js|jsx|mjs|cjs)$/.test(file);
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
  return String(value).replace(/[|]/g, "\\|").replace(/\n/g, " ");
}

function splitImportList(value) {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function importedNameFromPart(part) {
  const clean = part.replace(/^type[ \t\r\n]+/, "").trim();
  const pieces = clean.split(/[ \t\r\n]+as[ \t\r\n]+/);
  return pieces[0]?.trim() || "";
}

function exportedNameFromPart(part) {
  const clean = part.replace(/^type[ \t\r\n]+/, "").trim();
  const pieces = clean.split(/[ \t\r\n]+as[ \t\r\n]+/);
  return (pieces[1] || pieces[0] || "").trim();
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
    const inside = raw.replace(/^\{/, "").replace(/\}$/, "");
    const names = splitImportList(inside).map(importedNameFromPart).filter(Boolean);
    if (names.length) records.push({ kind: "named", names });
    return records;
  }

  const commaIndex = raw.indexOf(",");
  if (commaIndex >= 0) {
    const defaultName = raw.slice(0, commaIndex).trim();
    const rest = raw.slice(commaIndex + 1).trim();

    if (defaultName) records.push({ kind: "default", names: ["(default)"] });

    if (rest.startsWith("{")) {
      const inside = rest.replace(/^\{/, "").replace(/\}$/, "");
      const names = splitImportList(inside).map(importedNameFromPart).filter(Boolean);
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

function extractImportRecords(content) {
  const records = [];
  let match;

  const staticImportRe = /\bimport[ \t\r\n]+(type[ \t\r\n]+)?([\s\S]*?)[ \t\r\n]+from[ \t\r\n]+["']([^"']+)["']/g;
  while ((match = staticImportRe.exec(content)) !== null) {
    const isType = Boolean(match[1]);
    const clause = match[2];
    const specifier = match[3];

    for (const parsed of parseImportClause(clause)) {
      addRecord(records, specifier, parsed.kind, parsed.names, isType ? "import type" : "import");
    }
  }

  const sideEffectImportRe = /(?:^|[;\n])[ \t\r\n]*import[ \t\r\n]+["']([^"']+)["']/g;
  while ((match = sideEffectImportRe.exec(content)) !== null) {
    addRecord(records, match[1], "side-effect", ["(side-effect)"], "import");
  }

  const requireRe = /\brequire[ \t\r\n]*[(][ \t\r\n]*["']([^"']+)["'][ \t\r\n]*[)]/g;
  while ((match = requireRe.exec(content)) !== null) {
    addRecord(records, match[1], "require", ["(require)"], "require");
  }

  const dynamicImportRe = /\bimport[ \t\r\n]*[(][ \t\r\n]*["'`]([^"'`]+)["'`][ \t\r\n]*[)]/g;
  while ((match = dynamicImportRe.exec(content)) !== null) {
    addRecord(records, match[1], "dynamic", ["(dynamic import)"], "dynamic");
  }

  const namedReexportRe = /\bexport[ \t\r\n]+(type[ \t\r\n]+)?\{([^}]+)\}[ \t\r\n]+from[ \t\r\n]+["']([^"']+)["']/g;
  while ((match = namedReexportRe.exec(content)) !== null) {
    const names = splitImportList(match[2]).map(importedNameFromPart).filter(Boolean);
    addRecord(records, match[3], "reexport-named", names, match[1] ? "export type from" : "export from");
  }

  const namespaceReexportRe = /\bexport[ \t\r\n]+[*][ \t\r\n]+as[ \t\r\n]+([A-Za-z_$][A-Za-z0-9_$]*)[ \t\r\n]+from[ \t\r\n]+["']([^"']+)["']/g;
  while ((match = namespaceReexportRe.exec(content)) !== null) {
    addRecord(records, match[2], "reexport-namespace", [`* as ${match[1]}`], "export from");
  }

  const starReexportRe = /\bexport[ \t\r\n]+[*][ \t\r\n]+from[ \t\r\n]+["']([^"']+)["']/g;
  while ((match = starReexportRe.exec(content)) !== null) {
    addRecord(records, match[1], "reexport-star", ["*"], "export from");
  }

  return records;
}

function extractImports(content) {
  return uniqueSorted(extractImportRecords(content).map((record) => record.specifier));
}

function extractDynamicImports(content) {
  return uniqueSorted(
    extractImportRecords(content)
      .filter((record) => record.kind === "dynamic")
      .map((record) => record.specifier),
  );
}

function extractNamedImports(content) {
  const out = {};

  for (const record of extractImportRecords(content)) {
    if (!out[record.specifier]) out[record.specifier] = new Set();

    for (const name of record.names) {
      if (record.kind === "default") out[record.specifier].add(`⬡ ${name}`);
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

function extractNamedExports(content) {
  const out = new Set();
  let match;

  const declarationExportRe = /\bexport[ \t\r\n]+(?:declare[ \t\r\n]+)?(?:async[ \t\r\n]+)?(?:function|const|class|let|var|interface|type|enum)[ \t\r\n]+([A-Za-z_$][A-Za-z0-9_$]*)/g;
  while ((match = declarationExportRe.exec(content)) !== null) out.add(match[1]);

  const listExportRe = /\bexport[ \t\r\n]+(?:type[ \t\r\n]+)?\{([^}]+)\}(?:[ \t\r\n]+from[ \t\r\n]+["'][^"']+["'])?/g;
  while ((match = listExportRe.exec(content)) !== null) {
    for (const part of splitImportList(match[1])) {
      const exported = exportedNameFromPart(part);
      if (exported) out.add(exported);
    }
  }

  const namespaceExportRe = /\bexport[ \t\r\n]+[*][ \t\r\n]+as[ \t\r\n]+([A-Za-z_$][A-Za-z0-9_$]*)[ \t\r\n]+from[ \t\r\n]+["'][^"']+["']/g;
  while ((match = namespaceExportRe.exec(content)) !== null) out.add(match[1]);

  if (/\bexport[ \t\r\n]+default\b/.test(content)) out.add("(default)");

  return [...out].sort();
}

function detectHookExports(content) {
  const hooks = [];
  const hookExportRe = /\bexport[ \t\r\n]+(?:function|const)[ \t\r\n]+(use[A-Z][A-Za-z0-9_]*)/g;
  let match;
  while ((match = hookExportRe.exec(content)) !== null) hooks.push(match[1]);
  return uniqueSorted(hooks);
}

function detectReactComponent(file, content) {
  if (!file.endsWith(".tsx") && !file.endsWith(".jsx")) return false;

  const exportedComponentRe = /\bexport[ \t\r\n]+(?:default[ \t\r\n]+)?(?:function|const|class)[ \t\r\n]+[A-Z]/;
  const namedFunctionRe = /\bfunction[ \t\r\n]+[A-Z][A-Za-z0-9_]*[ \t\r\n]*[(]/;
  const namedConstRe = /\bconst[ \t\r\n]+[A-Z][A-Za-z0-9_]*[ \t\r\n]*=/;
  const returnsJsxRe = /\breturn[ \t\r\n]*[(]?[ \t\r\n]*</;

  return exportedComponentRe.test(content) || namedFunctionRe.test(content) || namedConstRe.test(content) || returnsJsxRe.test(content);
}

function isBarrelFile(file, content) {
  const base = path.posix.basename(file);
  if (!/^index[.](ts|tsx|js|jsx|mjs|cjs)$/.test(base)) return false;

  const stripped = content
    .replace(/\/[*][\s\S]*?[*]\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/["']use client["'];?/g, "")
    .replace(/["']use server["'];?/g, "")
    .trim();

  if (!stripped) return false;

  return stripped
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .every((line) => line.startsWith("export ") || line.startsWith("import type "));
}

function detectSupabase(content) {
  return /from[ \t\r\n]+["']@supabase|createClient[ \t\r\n]*[(]|supabase[.](from|auth|storage|rpc)[ \t\r\n]*[(]/.test(content);
}

function detectEventBus(content) {
  return /[.]on[ \t\r\n]*[(][ \t\r\n]*["']|[.]emit[ \t\r\n]*[(][ \t\r\n]*["']|[.]subscribe[ \t\r\n]*[(]|EventEmitter|eventBus[.]|dreamOSBus/.test(content);
}

function detectZustand(content) {
  return /from[ \t\r\n]+["']zustand["']|create[ \t\r\n]*</.test(content);
}

function detectContext(content) {
  return /createContext[ \t\r\n]*[(]|useContext[ \t\r\n]*[(]|React[.]createContext/.test(content);
}

function detectRuntimeRegistry(content) {
  return /[.]register[ \t\r\n]*[(]|EnginDispatcher|registerEngine|new[ \t\r\n]+\w*Registry[ \t\r\n]*[(]|moduleRegistry|enginWorkflowRegistry/.test(content);
}

function detectDualRuntime(content) {
  return /dualRuntime|DualRuntime|dreamOSBus|EnginDispatcher|runtimeBridge|DualRuntimeBridge|RuntimeShell|RuntimeView/.test(content);
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

        for (const targetPattern of targets) {
          mappings.push({ aliasPattern, targetPattern, baseUrl });
        }
      }
    } catch {
      // Repo-state generation should not die on malformed tsconfig.
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

  return normalizeRel(path.posix.join(mapping.baseUrl, mapping.targetPattern.replace("*", wildcard)));
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
  for (let index = 1; index < parts.length; index += 1) {
    allDirSet.add(parts.slice(0, index).join("/"));
  }
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

  if (specifier.startsWith("@/")) {
    candidates.push(specifier.slice(2));
  }

  if (specifier.startsWith(".")) {
    candidates.push(path.posix.join(path.posix.dirname(fromFile), specifier));
  }

  if (specifier.startsWith("/")) {
    candidates.push(specifier.slice(1));
    candidates.push(path.posix.join("public", specifier.slice(1)));
  }

  for (const mapping of tsconfigPathMappings) {
    if (matchesPathPattern(specifier, mapping.aliasPattern)) {
      candidates.push(expandPathPattern(specifier, mapping));
    }
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
    let route = file
      .replace(/^app/, "")
      .replace(/\/page[.](tsx|ts|jsx|js)$/, "")
      .replace(/\/[(][^)]+[)]/g, "")
      .replace(/\/$begin:math:display$\[\.\]\[\.\]\[\.\]\(\[\^$end:math:display$]+)\]/g, "/:$1*")
      .replace(/$begin:math:display$\(\[\^$end:math:display$]+)\]/g, ":$1");

    if (!route || route === "") route = "/";

    let label = "";
    if (route === "/dreamdmbar" || route === "/dreamdmbar/homedream") label = " ← HOME (DreamDMBar)";
    if (route === "/dreamdmbar/dreamspace") label = " ← HOME (DreamSpace)";

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

const relDepGraph = {};
for (const [file, data] of Object.entries(fileData)) {
  relDepGraph[file] = data.resolvedImports
    .map((record) => codeFileForResolvedPath(record.resolved))
    .filter(Boolean);
}

function detectCircular(graph) {
  const cycles = new Set();
  const visited = new Set();
  const inStack = new Set();
  const stack = [];

  function dfs(node) {
    if (inStack.has(node)) {
      const index = stack.indexOf(node);
      cycles.add(stack.slice(index).concat(node).join(" → "));
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

const brokenImports = {};
for (const [file, data] of Object.entries(fileData)) {
  const broken = [];

  for (const record of data.resolvedImports) {
    if (record.resolved === false) {
      broken.push({ specifier: record.specifier, names: record.names });
    }
  }

  const deduped = [];
  const seen = new Set();

  for (const item of broken) {
    const key = `${item.specifier}::${item.names.join(",")}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }

  if (deduped.length) brokenImports[file] = deduped;
}

const wholeModuleUsed = new Set();
const importedPairs = new Set();

function markExportUsage(targetFile, record) {
  if (!targetFile) return;

  if (
    record.kind === "namespace" ||
    record.kind === "dynamic" ||
    record.kind === "side-effect" ||
    record.kind === "require" ||
    record.kind === "reexport-star" ||
    record.kind === "reexport-namespace"
  ) {
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
    hasBrokenImports: Boolean(brokenImports[file]),
    hasUnusedExports: Boolean(unusedExports[file]),
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
    const clean = glob.replace(/\/$/, "");
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
  const tests = reportFiles.filter(isTestFile).filter((file) => matchGlobs(file, feature.testGlobs || []));
  const types = reportFiles.filter(isTypeFile).filter((file) => matchGlobs(file, feature.globs));
  const styles = reportFiles.filter(isStyleFile).filter((file) => matchGlobs(file, feature.globs));

  const srcs = code.filter((file) => !isPageFile(file));
  const components = srcs.filter((file) =>
    file.startsWith("components/") ||
    file.startsWith("engins/") ||
    file.startsWith("coresurfaces/") ||
    file.startsWith("dreamdmbar/") ||
    file.startsWith("dreamr/"),
  );

  const logic = srcs.filter((file) =>
    file.startsWith("engine/") ||
    file.startsWith("hooks/") ||
    file.startsWith("utils/") ||
    file.startsWith("assembly/") ||
    file.startsWith("agents/") ||
    file.startsWith("dr-eams/") ||
    file.startsWith("build-memory/") ||
    file.startsWith("optimizer/") ||
    file.startsWith("config/") ||
    file.startsWith("supabase/"),
  );

  const hooks = [];
  for (const file of srcs) {
    const data = fileData[file];
    if (!data) continue;
    for (const hook of data.hookExports) hooks.push({ hook, file });
  }

  const extDeps = new Set();
  const intDeps = new Set();

  for (const file of srcs) {
    const data = fileData[file];
    if (!data) continue;

    for (const record of data.importRecords) {
      const imp = record.specifier;

      if (!isExternalSpecifier(imp)) {
        intDeps.add(imp);
        continue;
      }

      const pkg = imp.startsWith("@") ? imp.split("/").slice(0, 2).join("/") : imp.split("/")[0];
      extDeps.add(pkg);
    }
  }

  return {
    pages,
    components,
    logic,
    hooks,
    apis,
    tests,
    types,
    styles,
    extDeps: [...extDeps].sort(),
    intDeps: [...intDeps].sort(),
    supabaseFiles: srcs.filter((file) => fileData[file]?.usesSupabase),
    eventBusFiles: srcs.filter((file) => fileData[file]?.usesEventBus),
    zustandFiles: srcs.filter((file) => fileData[file]?.usesZustand),
    contextFiles: srcs.filter((file) => fileData[file]?.usesContext),
    registryFiles: srcs.filter((file) => fileData[file]?.usesRuntimeRegistry),
    dualRuntimeFiles: srcs.filter((file) => fileData[file]?.usesDualRuntime),
  };
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

  section += `<a name="${feature.id}-pages"></a>\n\n## Pages\n\n`;
  section += renderListOrEmpty(data.pages, "_No page routes for this feature._");

  section += `<a name="${feature.id}-components"></a>\n\n## Components\n\n`;
  section += renderGroupedFiles(data.components, "_No component files for this feature._");

  section += `<a name="${feature.id}-logic"></a>\n\n## Logic\n\n`;
  section += renderGroupedFiles(data.logic, "_No logic files for this feature._");

  section += `<a name="${feature.id}-hooks"></a>\n\n## Exported Hooks\n\n`;
  if (data.hooks.length) {
    for (const { hook, file } of data.hooks.sort((a, b) => a.hook.localeCompare(b.hook))) {
      section += `- \`${hook}\` — \`${file}\`\n`;
    }
    section += "\n";
  } else {
    section += "_No hook exports in this feature._\n\n";
  }

  section += `<a name="${feature.id}-api"></a>\n\n## API Routes\n\n`;
  section += renderListOrEmpty(data.apis, "_No API routes for this feature._");

  section += `<a name="${feature.id}-types"></a>\n\n## Types\n\n`;
  section += renderListOrEmpty(data.types, "_No type files for this feature._");

  section += `<a name="${feature.id}-styles"></a>\n\n## Styles\n\n`;
  section += renderListOrEmpty(data.styles, "_No style files for this feature._");

  section += `<a name="${feature.id}-tests"></a>\n\n## Tests\n\n`;
  section += renderListOrEmpty(data.tests, "_No tests matched for this feature._");

  section += `<a name="${feature.id}-deps"></a>\n\n## Dependencies\n\n`;

  if (data.extDeps.length) {
    section += "### External packages\n\n";
    for (const dep of data.extDeps) section += `- \`${dep}\`\n`;
    section += "\n";
  }

  if (data.intDeps.length) {
    section += "### Internal imports\n\n";
    for (const dep of data.intDeps) section += `- \`${dep}\`\n`;
    section += "\n";
  }

  if (!data.extDeps.length && !data.intDeps.length) {
    section += "_No dependencies detected._\n\n";
  }

  const caps = [];
  if (data.dualRuntimeFiles.length) caps.push(`**Dual Runtime** (${data.dualRuntimeFiles.length} files)`);
  if (data.supabaseFiles.length) caps.push(`**Supabase** (${data.supabaseFiles.length} files)`);
  if (data.eventBusFiles.length) caps.push(`**Event Bus** (${data.eventBusFiles.length} files)`);
  if (data.zustandFiles.length) caps.push(`**Zustand** (${data.zustandFiles.length} files)`);
  if (data.contextFiles.length) caps.push(`**React Context** (${data.contextFiles.length} files)`);
  if (data.registryFiles.length) caps.push(`**Runtime Registry** (${data.registryFiles.length} files)`);

  if (caps.length) {
    section += "## Special Capabilities\n\n";
    section += caps.join(" · ") + "\n\n";
  }

  section += "---\n\n";
  return section;
}

const dirFeatureMap = {};
for (const feature of FEATURES) {
  for (const glob of feature.globs) {
    const key = glob.replace(/\/$/, "");
    if (!dirFeatureMap[key]) dirFeatureMap[key] = [];
    dirFeatureMap[key].push(feature.name);
  }
}

function getFeatureAnnotation(entryPath) {
  const rel = normalizeRel(path.relative(ROOT, entryPath));
  const matches = [];

  for (const [key, names] of Object.entries(dirFeatureMap)) {
    if (rel === key || rel.startsWith(`${key}/`) || rel.includes(key)) {
      for (const name of names) {
        if (!matches.includes(name)) matches.push(name);
      }
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
      if (/[.]md$/i.test(entry.name)) return false;
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
      const childPrefix = prefix + (isLast ? "    " : "│   ");
      const annotation = entry.isDirectory() ? getFeatureAnnotation(fullPath) : "";

      let issueMarkers = "";
      if (!entry.isDirectory()) {
        const issues = fileIssues[relPath];
        if (issues?.hasBrokenImports) issueMarkers += " ⚠";
        if (issues?.hasUnusedExports) issueMarkers += " ∅";
      }

      output += `${prefix}${isLast ? "└──" : "├──"} ${entry.name}${issueMarkers}${annotation}\n`;

      if (entry.isDirectory()) {
        render(fullPath, childPrefix);
        return;
      }

      const data = fileData[relPath];
      const broken = brokenImports[relPath] || [];
      const unused = unusedExports[relPath] || [];

      if (!detailed) {
        const lines = [];
        for (const item of broken) lines.push(`⚠ ${item.specifier} (${item.names.join(", ")})`);
        if (unused.length) lines.push(`∅ unused: ${unused.join(", ")}`);

        lines.forEach((line, lineIndex) => {
          const isLastLine = lineIndex === lines.length - 1;
          output += `${childPrefix}${isLastLine ? "└──" : "├──"} ${line}\n`;
        });
        return;
      }

      const lines = [];
      if (data) {
        for (const record of data.resolvedImports) {
          const status = record.resolved === false ? "⚠" : "←";
          lines.push(`${record.names.join(", ")}  ${status} ${record.specifier}`);
        }

        for (const exp of data.namedExports) lines.push(`→ ${exp}`);
      }

      if (unused.length) lines.push(`∅ unused: ${unused.join(", ")}`);

      lines.forEach((line, lineIndex) => {
        const isLastLine = lineIndex === lines.length - 1;
        output += `${childPrefix}${isLastLine ? "└──" : "├──"} ${line}\n`;
      });
    });
  }

  render(ROOT);
  return output;
}

let md = "";

md += "# DREAMengin Repository State\n\n";
md += `Generated: ${new Date().toISOString()}\n\n`;
md += "---\n\n";

const userFeatures = FEATURES.filter((feature) => feature.group === "user");
const systemFeatures = FEATURES.filter((feature) => feature.group === "system");

md += "# MASTER INDEX\n\n";

md += "## User-Facing Features\n\n";
for (const feature of userFeatures) {
  md += `- [${feature.name}](#${feature.id})\n`;
  md += `  - [Pages](#${feature.id}-pages) · [Components](#${feature.id}-components) · [Logic](#${feature.id}-logic) · [Hooks](#${feature.id}-hooks) · [API Routes](#${feature.id}-api) · [Types](#${feature.id}-types) · [Styles](#${feature.id}-styles) · [Tests](#${feature.id}-tests) · [Deps](#${feature.id}-deps)\n`;
}

md += "\n## System & Infrastructure\n\n";
for (const feature of systemFeatures) {
  md += `- [${feature.name}](#${feature.id})\n`;
  md += `  - [Pages](#${feature.id}-pages) · [Components](#${feature.id}-components) · [Logic](#${feature.id}-logic) · [Hooks](#${feature.id}-hooks) · [API Routes](#${feature.id}-api) · [Types](#${feature.id}-types) · [Styles](#${feature.id}-styles) · [Tests](#${feature.id}-tests) · [Deps](#${feature.id}-deps)\n`;
}

md += "\n## Cross-Cutting Analysis\n\n";
md += "- [Route Map](#route-map)\n";
md += "- [File Connections + Connecting Functions](#file-connections)\n";
md += "- [Dynamic Imports](#dynamic-imports)\n";
md += "- [All API Routes](#all-api-routes)\n";
md += "- [All React Components](#all-components)\n";
md += "- [All Hooks](#all-hooks)\n";
md += "- [All Type Files](#all-types)\n";
md += "- [Dual Runtime Files](#dual-runtime-files)\n";
md += "- [Supabase Usage](#supabase-usage)\n";
md += "- [State: Zustand / Context](#state)\n";
md += "- [Event Bus Subscribers & Emitters](#event-bus)\n";
md += "- [Runtime Registries](#runtime-registries)\n";
md += "- [Circular Dependencies](#circular-deps)\n";
md += "- [Coupling Scores (Top 30)](#coupling-scores)\n";
md += "- [System Risk Report](#risk-report)\n";
md += "- [Broken Imports](#broken-imports)\n";
md += "- [Unused Exports](#unused-exports)\n";
md += "- [Raw File Tree](#raw-tree)\n\n";
md += "---\n\n";

md += "# User-Facing Features\n\n---\n\n";
for (const feature of userFeatures) md += renderFeatureSection(feature);

md += "# System & Infrastructure\n\n---\n\n";
for (const feature of systemFeatures) md += renderFeatureSection(feature);

md += `<a name="route-map"></a>\n\n`;
md += "# Route Map\n\n";
md += "> User navigation flow. Dynamic segments are shown as `:param`. Catch-alls are shown as `:param*`.\n\n";

const routes = buildRouteMap(reportFiles);
const routeGroups = {};
for (const route of routes) {
  const top = "/" + (route.route.split("/")[1] || "");
  if (!routeGroups[top]) routeGroups[top] = [];
  routeGroups[top].push(route);
}

for (const [group, groupRoutes] of Object.entries(routeGroups).sort()) {
  const label = group === "/" ? "Root" : group;
  md += `## \`${label}\`\n\n`;
  md += "| Route | File | Notes |\n";
  md += "|-------|------|-------|\n";

  for (const route of groupRoutes) {
    md += `| \`${mdCell(route.route)}\` | \`${mdCell(route.file)}\` | ${mdCell(route.label)} |\n`;
  }

  md += "\n";
}
md += "---\n\n";

md += `<a name="file-connections"></a>\n\n`;
md += "# File Connections — Connecting Functions\n\n";
md += "> Read this as: **file X pulls in these named functions/components/hooks from these modules.**\n";
md += "> ⬡ = default export · `* as` = namespace import · ⚠ means the internal specifier did not resolve to a real file.\n\n";

for (const [file, data] of Object.entries(fileData).sort()) {
  if (isTestFile(file)) continue;
  if (!data.resolvedImports.length) continue;

  md += `## \`${file}\`\n\n`;
  md += "| Module | Connected via | Resolved |\n";
  md += "|--------|---------------|----------|\n";

  for (const record of data.resolvedImports) {
    const names = record.names.map((name) => `\`${mdCell(name)}\``).join(", ");
    const resolved = record.resolved === null ? "external" : record.resolved === false ? "⚠ broken" : `\`${mdCell(record.resolved)}\``;
    md += `| \`${mdCell(record.specifier)}\` | ${names} | ${resolved} |\n`;
  }

  md += "\n";
}
md += "---\n\n";

md += `<a name="dynamic-imports"></a>\n\n`;
md += "# Dynamic Imports\n\n";
for (const [file, data] of Object.entries(fileData).sort()) {
  if (!data.dynamicImports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const imp of data.dynamicImports) md += `- \`${imp}\`\n`;
  md += "\n";
}
md += "---\n\n";

md += `<a name="all-api-routes"></a>\n\n`;
md += "# All API Routes\n\n";
const allAPIs = reportFiles.filter(isAPIRoute).sort();
const apiGroups = {};
for (const file of allAPIs) {
  const group = file.replace("app/api/", "").split("/")[0];
  if (!apiGroups[group]) apiGroups[group] = [];
  apiGroups[group].push(file);
}
for (const [group, files] of Object.entries(apiGroups).sort()) {
  md += `## \`/api/${group}\`\n\n`;
  for (const file of files) md += `- \`${file}\`\n`;
  md += "\n";
}
md += "---\n\n";

md += `<a name="all-components"></a>\n\n`;
md += "# All React Components\n\n";
const allComps = codeFiles.filter((file) => fileData[file].isReactComponent && !isTestFile(file)).sort();
for (const [dir, files] of Object.entries(groupByDir(allComps, 2)).sort()) {
  md += `## \`${dir}/\`\n\n`;
  for (const file of files) md += `- \`${file}\`\n`;
  md += "\n";
}
md += "---\n\n";

md += `<a name="all-hooks"></a>\n\n`;
md += "# All Hooks\n\n";
for (const [file, data] of Object.entries(fileData).sort()) {
  if (!data.hookExports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const hook of data.hookExports) md += `- \`${hook}\`\n`;
  md += "\n";
}
md += "---\n\n";

md += `<a name="all-types"></a>\n\n`;
md += "# All Type Files\n\n";
for (const file of reportFiles.filter(isTypeFile).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="dual-runtime-files"></a>\n\n`;
md += "# Dual Runtime Files\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesDualRuntime && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="supabase-usage"></a>\n\n`;
md += "# Supabase Usage\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesSupabase && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="state"></a>\n\n`;
md += "# State: Zustand / Context\n\n";
md += "## Zustand Stores\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesZustand && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n## React Context Providers & Consumers\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesContext && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="event-bus"></a>\n\n`;
md += "# Event Bus Subscribers & Emitters\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesEventBus && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="runtime-registries"></a>\n\n`;
md += "# Runtime Registries\n\n";
for (const file of codeFiles.filter((file) => fileData[file].usesRuntimeRegistry && !isTestFile(file)).sort()) md += `- \`${file}\`\n`;
md += "\n---\n\n";

md += `<a name="circular-deps"></a>\n\n`;
md += "# Circular Dependencies\n\n";
if (circularDeps.length) {
  for (const cycle of circularDeps) md += `- ⚠ ${cycle}\n`;
} else {
  md += "_No circular dependencies detected._\n";
}
md += "\n---\n\n";

md += `<a name="coupling-scores"></a>\n\n`;
md += "# Coupling Scores (Top 30)\n\n";
md += "| File | Import Count |\n|------|--------------|\n";
const topCoupled = Object.entries(fileData)
  .filter(([file]) => !isTestFile(file))
  .map(([file, data]) => ({ file, score: data.couplingScore }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 30);
for (const { file, score } of topCoupled) md += `| \`${mdCell(file)}\` | ${score} |\n`;
md += "\n---\n\n";

md += `<a name="risk-report"></a>\n\n`;
md += "# System Risk Report\n\n";
if (riskFiles.length) {
  md += "| File | Coupling | Flags |\n|------|----------|-------|\n";
  for (const { file, score, flags } of riskFiles) md += `| \`${mdCell(file)}\` | ${score} | ${flags.join(", ")} |\n`;
} else {
  md += "_No high-risk files detected._\n";
}
md += "\n---\n\n";

md += `<a name="broken-imports"></a>\n\n`;
md += "# Broken Imports\n\n";
md += "> Internal imports (`@/`, configured tsconfig path aliases, absolute public paths, or relative imports) that do not resolve to a real file. External npm packages are excluded.\n\n";

const brokenEntries = Object.entries(brokenImports).filter(([file]) => !isTestFile(file)).sort();
if (brokenEntries.length) {
  md += "| File | Broken specifier | Imported names |\n";
  md += "|------|-----------------|----------------|\n";
  for (const [file, items] of brokenEntries) {
    for (const { specifier, names } of items) {
      md += `| \`${mdCell(file)}\` | \`${mdCell(specifier)}\` | ${names.map((name) => `\`${mdCell(name)}\``).join(", ")} |\n`;
    }
  }
} else {
  md += "_No broken internal imports detected._\n";
}
md += "\n---\n\n";

md += `<a name="unused-exports"></a>\n\n`;
md += "# Unused Exports\n\n";
md += "> Exported identifiers that are not statically imported by another analysed source file after resolving aliases, re-exports, namespace imports, dynamic imports, framework entrypoints, route handlers, root config files, type files, and barrel files.\n\n";

const unusedEntries = Object.entries(unusedExports).sort();
if (unusedEntries.length) {
  md += "| File | Unused exports |\n";
  md += "|------|----------------|\n";
  for (const [file, names] of unusedEntries) md += `| \`${mdCell(file)}\` | ${names.map((name) => `\`${mdCell(name)}\``).join(", ")} |\n`;
} else {
  md += "_No unused exports detected._\n";
}
md += "\n---\n\n";

md += `<a name="raw-tree"></a>\n\n`;
md += "# Raw File Tree\n\n";
md += "```text\n";
md += "Legend: ⚠ broken import  ∅ unused export\n\n";
md += buildTreeString({ detailed: false });
md += "```\n";

fs.writeFileSync("REPO_STATE.md", md);
console.log("✓ REPO_STATE.md written");

let treeMd = "";
treeMd += "# File Tree\n\n";
treeMd += `Generated: ${new Date().toISOString()}\n\n`;
treeMd += "Legend: ⚠ broken import  ∅ unused export\n\n";
treeMd += "```text\n";
treeMd += buildTreeString({ detailed: true });
treeMd += "```\n";

fs.writeFileSync("FILE_TREE.md", treeMd);
console.log("✓ FILE_TREE.md written");

const brokenCount = Object.values(brokenImports).reduce((sum, items) => sum + items.length, 0);
const unusedCount = Object.values(unusedExports).reduce((sum, items) => sum + items.length, 0);

console.log(`  Routes: ${buildRouteMap(reportFiles).length}`);
console.log(`  Files analysed: ${codeFiles.length}`);
console.log(`  Connected functions mapped: ${codeFiles.filter((file) => Object.keys(fileData[file].namedImports).length > 0).length} files`);
console.log(`  Dual-runtime files: ${codeFiles.filter((file) => fileData[file].usesDualRuntime).length}`);
console.log(`  Broken imports: ${brokenCount} specifiers across ${Object.keys(brokenImports).length} files`);
console.log(`  Unused exports: ${unusedCount} exports across ${Object.keys(unusedExports).length} files`);
