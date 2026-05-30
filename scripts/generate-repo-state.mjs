import fs from "fs";
import path from "path";

const ROOT = process.cwd();

// ─── IGNORE LIST ──────────────────────────────────────────────────────────────
const IGNORE = new Set([
  "node_modules", ".git", ".next", ".vercel",
  "dist", "build", "coverage", ".turbo",
  "supabase",    // no migrations
  "docs",        // no documentation
  ".husky",
  "public",      // static assets, not logic
]);

// ─── FILE UTILS ───────────────────────────────────────────────────────────────

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

function isCodeFile(f)  { return /\.(ts|tsx|js|jsx|mjs)$/.test(f); }
function isAPIRoute(f)  { return /^app\/api\//.test(f) && f.endsWith("route.ts"); }
function isPageFile(f)  { return f.startsWith("app/") && f.endsWith("page.tsx"); }
function isTestFile(f)  { return /\.(test|spec)\.(ts|tsx|js)$/.test(f); }
function isTypeFile(f)  { return f.startsWith("types/") || f.endsWith(".d.ts"); }
function isStyleFile(f) { return /\.(css|scss|module\.css)$/.test(f); }

// ─── IMPORT EXTRACTORS ───────────────────────────────────────────────────────
// These are the "connectors" — the actual named things that wire files together.

function extractImports(content) {
  const out = new Set();
  const re = /from\s+['"](.+?)['"]|require\s*\(\s*['"](.+?)['"]\s*\)/g;
  let m;
  while ((m = re.exec(content)) !== null) out.add(m[1] || m[2]);
  return [...out];
}

function extractDynamicImports(content) {
  const out = new Set();
  const re = /import\s*\(\s*['"`](.+?)['"`]\s*\)/g;
  let m;
  while ((m = re.exec(content)) !== null) out.add(m[1]);
  return [...out];
}

/**
 * extractNamedImports — the heart of the "connecting function" view.
 * Returns a map of:  modulePath → [namedExport1, namedExport2, ...]
 *
 * Example output:
 *   '@/lib/runtime/useDualRuntime'  → ['useDualRuntime', 'DualRuntimeBridge']
 *   '@/lib/runtime/dreamOSBus'      → ['(default) dreamOSBus']
 *   '@/components/dream.HomeFeed'   → ['HomeFeed']
 *
 * This is what lets you trace exactly WHICH function/hook/component
 * is the glue between any two files.
 */
function extractNamedImports(content) {
  const out = {};

  // Named: import { foo, bar as baz, type Qux } from 'path'
  const namedRe = /import\s+(?:type\s+)?\{\s*([^}]+)\s*\}\s+from\s+['"](.+?)['"]/g;
  let m;
  while ((m = namedRe.exec(content)) !== null) {
    const names = m[1]
      .split(",")
      .map(s =>
        s.trim()
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/)[0]
          .trim()
      )
      .filter(Boolean);
    const mod = m[2];
    if (!out[mod]) out[mod] = new Set();
    names.forEach(n => out[mod].add(n));
  }

  // Default: import Foo from 'path'
  const defRe = /import\s+([A-Z_][a-zA-Z0-9_]*)\s+from\s+['"](.+?)['"]/g;
  while ((m = defRe.exec(content)) !== null) {
    const mod = m[2];
    if (!out[mod]) out[mod] = new Set();
    out[mod].add(`⬡ ${m[1]}`); // ⬡ = default export marker
  }

  // Namespace: import * as Foo from 'path'
  const nsRe = /import\s+\*\s+as\s+(\w+)\s+from\s+['"](.+?)['"]/g;
  while ((m = nsRe.exec(content)) !== null) {
    const mod = m[2];
    if (!out[mod]) out[mod] = new Set();
    out[mod].add(`* as ${m[1]}`);
  }

  return Object.fromEntries(
    Object.entries(out).map(([k, v]) => [k, [...v].sort()])
  );
}

// ─── HOOK / COMPONENT DETECTION ───────────────────────────────────────────────

function detectHookExports(content) {
  const hooks = [];
  const re = /export\s+(?:function|const)\s+(use[A-Z][a-zA-Z0-9]*)/g;
  let m;
  while ((m = re.exec(content)) !== null) hooks.push(m[1]);
  return hooks;
}

function detectReactComponent(file, content) {
  if (!/\.(tsx|jsx)$/.test(file)) return false;
  return /export\s+(default\s+)?(function|const|class)\s+[A-Z]/.test(content) ||
         /return\s*\(?\s*</.test(content);
}

// ─── EXPORT EXTRACTORS ────────────────────────────────────────────────────────

/**
 * extractNamedExports — returns all exported identifiers from a file.
 * Covers: export function/const/class/let/var, export { ... }, export default.
 */
function extractNamedExports(content) {
  const out = new Set();

  // export function/const/class/let/var Foo
  const declRe = /export\s+(?:async\s+)?(?:function|const|class|let|var)\s+([A-Za-z_$][A-Za-z0-9_$]*)/g;
  let m;
  while ((m = declRe.exec(content)) !== null) out.add(m[1]);

  // export { Foo, Bar as Baz }
  const listRe = /export\s+\{([^}]+)\}/g;
  while ((m = listRe.exec(content)) !== null) {
    m[1].split(",").forEach(s => {
      const parts = s.trim().replace(/^type\s+/, "").split(/\s+as\s+/);
      const exported = (parts[1] || parts[0]).trim();
      if (exported) out.add(exported);
    });
  }

  // export default — mark with special token
  if (/export\s+default\s+/.test(content)) out.add("(default)");

  return [...out];
}

// ─── CAPABILITY DETECTORS ─────────────────────────────────────────────────────

function detectSupabase(content) {
  return /from\s+['"]@supabase|createClient\s*\(|supabase\.(from|auth|storage|rpc)\s*\(/.test(content);
}

function detectEventBus(content) {
  return /\.on\s*\(['"]|\.emit\s*\(['"]|\.subscribe\s*\(|EventEmitter|eventBus\./.test(content);
}

function detectZustand(content) {
  return /from\s+['"]zustand['"]|create\s*</.test(content);
}

function detectContext(content) {
  return /createContext\s*\(|useContext\s*\(|React\.createContext/.test(content);
}

function detectRuntimeRegistry(content) {
  return /\.register\s*\(|EnginDispatcher|registerEngine|new\s+\w*Registry\s*\(/.test(content);
}

function detectDualRuntime(content) {
  return /dualRuntime|DualRuntime|dreamOSBus|EnginDispatcher|runtimeBridge|DualRuntimeBridge/.test(content);
}

// ─── ROUTE MAP ────────────────────────────────────────────────────────────────
// Converts Next.js App Router file paths → human-readable route strings.
// dreamdmbar = HOME — gets a special label.

function buildRouteMap(files) {
  const pages = files.filter(isPageFile);

  const routes = pages.map(f => {
    let route = f
      .replace(/^app/, "")
      .replace(/\/page\.tsx$/, "")
      .replace(/\/\(([^)]+)\)/g, "")   // strip route groups like (auth)
      .replace(/\/\[\.\.\.([^\]]+)\]/g, "/:$1*")  // catch-all [...slug]
      .replace(/\[([^\]]+)\]/g, ":$1"); // dynamic [id]

    if (!route || route === "") route = "/";

    // Label HOME
    let label = "";
    if (route === "/dreamdmbar" || route === "/dreamdmbar/homedream") label = " ← HOME (DreamDMBar)";
    if (route === "/dreamdmbar/dreamspace") label = " ← HOME (DreamSpace)";

    return { route, file: f, label };
  });

  // Sort: root first, then alphabetically
  routes.sort((a, b) => {
    if (a.route === "/") return -1;
    if (b.route === "/") return 1;
    return a.route.localeCompare(b.route);
  });

  return routes;
}

// ─── GRAPH ANALYSIS ───────────────────────────────────────────────────────────

function resolveRelative(fromFile, imp) {
  if (!imp.startsWith(".")) return null;
  return path.normalize(path.join(path.dirname(fromFile), imp));
}

function detectCircular(graph) {
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
    visited.add(node); inStack.add(node); stack.push(node);
    for (const dep of (graph[node] || [])) { if (dep in graph) dfs(dep); }
    stack.pop(); inStack.delete(node);
  }
  for (const node of Object.keys(graph)) dfs(node);
  return [...cycles];
}

// ─── FEATURE TAXONOMY ─────────────────────────────────────────────────────────
// USER-FACING FEATURES
// Note: dreamdmbar IS home — it contains homedream (main surface) and
//       dreamspace (the spatial shell). The DM bar is the connecting spine
//       between the two runtimes. Everything routes through it.

const FEATURES = [

  // ══ USER-FACING ═══════════════════════════════════════════════════════════

  {
    id: "homedream",
    name: "HOME — DreamDMBar",
    group: "user",
    desc: [
      "dreamdmbar IS home. It contains two sub-surfaces:",
      "  • homedream  — the main feed/home surface the user lands on",
      "  • dreamspace — the spatial shell that wraps everything",
      "The bar is the most important piece: it bridges the dual runtimes,",
      "holds the persistent UI shell, the feed, and the DM channel.",
    ].join("\n"),
    globs: [
      "dreamdmbar/",
      "app/dreamdmbar",
      "app/homedream",
      "components/home/",
      "lib/dreamdm/",
      "lib/runtime/dualRuntime",
      "lib/runtime/useDualRuntime",
      "lib/runtime/dualRuntimeBridge",
      "lib/runtime/EnginDispatcher",
      "lib/runtime/dreamOSBus",
    ],
    apiGlobs: ["app/api/dreams/feed", "app/api/dreams/instances", "app/api/feed", "app/api/home-layout"],
    testGlobs: ["dreamdm-bar", "dream-bar", "homedream", "dual-runtime", "bar-hide", "decide-bar", "neural-seam", "runtime-wiring", "dream-continuity", "contextual-home"],
  },
  {
    id: "dreamr",
    name: "DreamR",
    group: "user",
    desc: "Short-form vertical video feed, swipe algorithm, close friends, creator panels",
    globs: [
      "components/dreamr/", "lib/dreamr/", "app/dreamr/",
      "app/dreamdmbar/_components/dreamr", "app/api/dreamr/",
    ],
    apiGlobs: ["app/api/dreamr/"],
    testGlobs: ["dreamr-", "swipe-calibration", "spec37-torridity"],
  },
  {
    id: "dreamengin",
    name: "DREAMenginOS",
    group: "user",
    desc: "OS-level engine shell, 3D canvas, search bar, nexus menu, scene system",
    globs: [
      "components/dreamengin/", "lib/dreamenginOS/", "lib/dreamengin/",
      "lib/runtime/moduleRegistry", "lib/runtime/runtimeContainer",
      "lib/runtime/instanceManager", "lib/runtime/enginWorkflowRegistry",
      "app/dreamdmbar/dualruntime",
    ],
    apiGlobs: ["app/api/dreamengin/"],
    testGlobs: ["dreamengin-os", "dreamengin-preflight", "os-subsystem", "module-registry", "runtime-container", "runtime-viewport"],
  },
  {
    id: "gameengin",
    name: "GameEngin",
    group: "user",
    desc: "Game OS, cartridge system, game launcher, DualSense input, in-game HUD, all games",
    globs: [
      "components/gameengin/", "components/games/", "lib/gameengin/",
      "lib/games/", "lib/engins/game/", "engins/engin.GameEngin",
      "engins/autoopen/", "app/gameengin/", "app/daydream/game",
      "app/daydream/games", "app/engines/games", "components/engines/games/",
      "assembly/",
    ],
    apiGlobs: ["app/api/game-scores", "app/api/gameengin/"],
    testGlobs: ["gameengin", "game-engin", "game-navigation", "madmaxi", "game-controller", "game-performance", "game-quality", "fusion-cartridges", "shell-cartridge", "game-remote", "DUALSENSE"],
  },
  {
    id: "codeengin",
    name: "CodeEngin",
    group: "user",
    desc: "Code editor, IDE, AI co-pilot, notebook and projects panel",
    globs: [
      "engins/engin.CodeEngin", "engins/CodeEngin/",
      "components/engines/code/", "lib/engins/code/", "lib/code/",
      "app/engines/code", "app/daydream/code",
      "components/daydream/dream.CodeDreamIDE",
    ],
    apiGlobs: ["app/api/projects", "app/api/admin/code-files"],
    testGlobs: ["code-dream-preview", "readme-section13-code"],
  },
  {
    id: "labengin",
    name: "LabEngin",
    group: "user",
    desc: "Experiment runner, quantum panel, data viz, lab IDE",
    globs: [
      "engins/engin.LabEngin", "components/engines/lab/",
      "lib/engins/lab/", "app/engines/lab", "app/daydream/lab",
      "app/lab/", "components/daydream/dream.LabDreamIDE",
    ],
    apiGlobs: ["app/api/lab/"],
    testGlobs: ["lab-section-12", "lab-dream-split"],
  },
  {
    id: "starmakerengin",
    name: "StarMaker (Music Engin)",
    group: "user",
    desc: "DAW, piano roll, multitrack arrangement, comping, session view, audio bridge",
    globs: [
      "engins/engin.StarMakerEngin", "components/engines/music/",
      "lib/engins/music/", "lib/music/", "components/daydream/starmaker/",
      "components/music/", "app/engines/music", "app/daydream/music",
    ],
    apiGlobs: ["app/api/music/"],
    testGlobs: ["starmaker", "music-starmaker"],
  },
  {
    id: "brandengin",
    name: "BrandEngin",
    group: "user",
    desc: "Brand identity, campaigns, analytics daydream, branding engine",
    globs: [
      "engins/engin.BrandingEngin", "components/engines/brand/",
      "lib/engins/brand/", "app/engines/brand", "app/daydream/brand",
      "components/daydream/dreamsurface.daydream.BrandDaydream",
    ],
    apiGlobs: [],
    testGlobs: ["branding-logos"],
  },
  {
    id: "createengin",
    name: "CreateEngin",
    group: "user",
    desc: "Content creation, editor panel, queue, calendar, publish intent",
    globs: [
      "engins/engin.ContentEngin", "components/engines/create/",
      "lib/engins/content/", "lib/content/", "app/engines/create",
      "app/daydream/create", "app/daydream/media-vault",
    ],
    apiGlobs: ["app/api/content/", "app/api/drafts/", "app/api/scheduled-posts"],
    testGlobs: ["contentengin", "content-publish", "content-intelligence"],
  },
  {
    id: "portfolioengin",
    name: "PortfolioEngin",
    group: "user",
    desc: "Portfolio optimization, asset management, quantum circuit canvas",
    globs: [
      "engins/portfolio/", "components/engines/portfolio/",
      "app/engines/portfolio", "app/daydream/lab/portfolio",
      "engins/dream.QuantumCircuitCanvas", "lib/optimizer/",
      "components/optimizer/",
    ],
    apiGlobs: [],
    testGlobs: ["optimizer", "creative-optimizero"],
  },
  {
    id: "forgeengin",
    name: "ForgeEngin (Engine Builder)",
    group: "user",
    desc: "Build custom engines, AI-powered engine builder, forge rituals and momentum",
    globs: [
      "engins/dream.ForgeEngin", "components/forge/",
      "lib/forge/", "lib/forge-ngn/", "app/daydream/forge",
    ],
    apiGlobs: ["app/api/forge/"],
    testGlobs: ["forge-build", "forge-engin", "forge-nexus", "forge-rituals", "forge-momentum", "spec41-engine-builder"],
  },
  {
    id: "daydream",
    name: "Daydream System",
    group: "user",
    desc: "Daydream shell, pair routing, diff viewer, constellation map, journey trail",
    globs: [
      "components/daydream/dream.shell", "components/daydream/dream.DiffViewer",
      "components/daydream/dream.JourneyTrail", "components/daydream/dream.constellationmap",
      "components/daydream/dream.StandaloneEnginSurface",
      "components/daydream/dream.OpenDaydreamSideBButton",
      "components/daydream/dream.NGNEngin", "app/daydream/",
      "lib/daydream/",
    ],
    apiGlobs: [],
    testGlobs: ["daydream-engin-routes", "phase8f-daydream", "diff-viewer"],
  },
  {
    id: "profile",
    name: "Profile & Edit Profile",
    group: "user",
    desc: "View/edit profile, profile dream surface, spatial widget layout, avatar editor",
    globs: [
      "coresurfaces/", "components/profile/", "components/spatial/",
      "app/profile/", "app/view-profile/", "app/edit-profiledream/",
      "app/u/", "lib/dreams/profileProjection",
    ],
    apiGlobs: ["app/api/profile/"],
    testGlobs: ["view-profile", "edit-profiledream", "profile-avatar"],
  },
  {
    id: "widgets",
    name: "Widgets System",
    group: "user",
    desc: "Widget engine, bubbles, drag-drop, universal widget, widget surface and registry",
    globs: [
      "components/widgets/", "components/dream.widget",
      "lib/widgets/", "types/widgets", "types/widgetConfigs",
      "types/widget-system-v2",
    ],
    apiGlobs: ["app/api/widgets/"],
    testGlobs: ["widget-install-flow", "universal-asset-registry", "drop-target-registry"],
  },
  {
    id: "feed",
    name: "Feed & Social",
    group: "user",
    desc: "Main feed, algorithm engine, follow, comments, live feed, social cross-post, RSS",
    globs: [
      "components/feed/", "components/dream.FeedCard",
      "components/dream.HomeFeed", "lib/feed/", "lib/social/",
      "lib/social-feed", "app/discover/",
    ],
    apiGlobs: ["app/api/feed/", "app/api/posts/", "app/api/follow", "app/api/likes", "app/api/comments", "app/api/social/", "app/api/views/", "app/api/embed-feed", "app/api/youtube/"],
    testGlobs: ["social-feed", "social-platforms", "rss-feed", "live-feed", "post-view", "post-media", "dreamr-feed-topics", "phase9-cross-post", "phase9-hashtags"],
  },
  {
    id: "settings",
    name: "Settings",
    group: "user",
    desc: "All settings pages and panels: appearance, privacy, safety, controls, data, notifications, algorithm, security",
    globs: [
      "app/settings/", "components/panels/dream.panel.Settings",
      "components/panels/dream.panel.Appearance",
      "components/panels/dream.panel.Privacy",
      "components/panels/dream.panel.Safety",
      "components/panels/dream.panel.Controls",
      "components/panels/dream.panel.Data",
      "components/panels/dream.panel.Help",
      "components/panels/dream.panel.Algorithm",
      "components/panels/dream.panel.Feed",
      "components/panels/dream.panel.Widgets",
      "components/panels/dream.panel.Connectors",
      "components/panels/",
    ],
    apiGlobs: ["app/api/settings/"],
    testGlobs: ["phase8i-settings"],
  },
  {
    id: "menus",
    name: "Menus & Navigation",
    group: "user",
    desc: "Radial menus, dual bottom menu, dream nav controls, persistent bar, navigation engine",
    globs: [
      "components/menus/", "components/dreamnav/",
      "lib/dreamnav/", "lib/navigation/", "hooks/useDreamLayout",
    ],
    apiGlobs: [],
    testGlobs: ["dreamnav.tau"],
  },
  {
    id: "messages",
    name: "Messages & DMs",
    group: "user",
    desc: "Direct messages, conversations, message boards, board composer",
    globs: [
      "app/messages/", "components/messaging/",
      "lib/dreamdm/useDreamDMConversations", "lib/dreamdm/useDreamDMMessages",
      "lib/dreamdm/useDreamDMDraft", "lib/dreamdm/useMessagingCore",
      "components/dream.MessagesClient",
    ],
    apiGlobs: ["app/api/messages/"],
    testGlobs: ["dreamdm-messaging", "dreamdm-draft"],
  },
  {
    id: "notifications",
    name: "Notifications",
    group: "user",
    desc: "Notification center, push notifications, alerts",
    globs: [
      "components/dream.NotificationCenter", "lib/notifications/",
      "lib/dreamdm/useNotifications",
    ],
    apiGlobs: ["app/api/notifications/"],
    testGlobs: ["notifications", "phase9-notifications"],
  },
  {
    id: "connectors",
    name: "Connectors",
    group: "user",
    desc: "Platform connectors (YouTube, Instagram, Bluesky, RSS etc), OAuth flows, sync",
    globs: [
      "components/connectors/", "lib/connectors/",
      "app/connectors/", "hooks/useConnectorInstallFlow",
    ],
    apiGlobs: ["app/api/connectors/"],
    testGlobs: ["connectors", "connector-delivery", "youtube-provider"],
  },
  {
    id: "marketplace",
    name: "Marketplace & Shop",
    group: "user",
    desc: "Marketplace listings, shop, orders, skip credits, ads platform",
    globs: [
      "components/marketplace/", "lib/marketplace/", "lib/shop/",
      "app/marketplace/", "app/shop/", "components/ads/",
      "lib/activity/skipCredits",
    ],
    apiGlobs: ["app/api/marketplace/", "app/api/shop/", "app/api/skip-credits/", "app/api/ads/"],
    testGlobs: ["phase8e-shop", "phase8e-orders", "skip-credits", "activity-revenue-split"],
  },
  {
    id: "shared-dream",
    name: "Shared Dream (Collab)",
    group: "user",
    desc: "Real-time collaborative dream sessions, invite flow, shared runtime",
    globs: [
      "components/shared-dream/", "lib/sharedDream/",
      "lib/sharedDream.ts", "hooks/useSharedDream",
    ],
    apiGlobs: ["app/api/shared-dream/"],
    testGlobs: ["spec38-collaboration", "session-continuity", "dual-runtime-bridge-peer"],
  },
  {
    id: "customize",
    name: "Customize Mode",
    group: "user",
    desc: "Theme, color, font, layout, effects customize panels and toolbar",
    globs: [
      "components/customize/", "lib/ui/CustomizeModeContext",
      "lib/ui/skin-engine", "lib/ui/theme-engine", "lib/ui/theme",
    ],
    apiGlobs: ["app/api/settings/appearance"],
    testGlobs: ["universal-visual-modularity"],
  },
  {
    id: "auth",
    name: "Auth",
    group: "user",
    desc: "Login, join, password reset, OAuth callback, session management",
    globs: [
      "app/auth/", "app/login/", "app/join/", "app/onboarding/",
      "components/auth/", "lib/auth/", "lib/supabase/safeGetUser",
    ],
    apiGlobs: ["app/api/auth/", "app/api/setup/"],
    testGlobs: ["auth-providers", "auth-update-password", "safe-get-user", "admin-lockout"],
  },

  // ══ SYSTEM & INFRASTRUCTURE ════════════════════════════════════════════════

  {
    id: "ai",
    name: "AI Systems (Boogieman / Dr.EAMS / Idari)",
    group: "system",
    desc: "Boogieman policy engine, Dr.EAMS assistant, Idari admin AI, triad consensus, tool router",
    globs: [
      "lib/ai/", "lib/agents/", "agents/", "dr-eams/",
      "build-memory/",
      "components/dream.AIAssistant", "components/dream.DrEamsVoiceAssistant",
      "components/idari/",
    ],
    apiGlobs: ["app/api/ai/", "app/api/agent/", "app/api/admin/ai"],
    testGlobs: ["boogieman", "boogie-policy", "agent-bus", "ai-edit-engine"],
  },
  {
    id: "child-safety",
    name: "Child Safety",
    group: "system",
    desc: "Content scanning, NCMEC reporting, image classifier, message context checker",
    globs: [
      "lib/child-safety/", "components/dream.panel.ChildSafetyPanel",
    ],
    apiGlobs: ["app/api/ai/boogieman/child-safety", "app/api/admin/child-safety"],
    testGlobs: ["child-safety"],
  },
  {
    id: "observability",
    name: "Observability & Idari Console",
    group: "system",
    desc: "OpenTelemetry, metrics, health trends, platform errors, Idari admin console",
    globs: [
      "lib/observability/", "app/(internal)/idari-console",
      "components/idari/", "components/dream.PlatformHealth",
    ],
    apiGlobs: ["app/api/metrics/", "app/api/platform/errors", "app/api/admin/observability"],
    testGlobs: ["idari-observability", "collector-extended", "platform-utils"],
  },
  {
    id: "webgpu-babylon",
    name: "WebGPU / Babylon Engine",
    group: "system",
    desc: "WebGPU director, Babylon.js engine factory, adaptive quality, 3D rendering pipeline",
    globs: [
      "components/webgpu/", "lib/webgpu/", "lib/babylon/",
      "components/optimizer/", "lib/optimizer/", "optimizer/",
    ],
    apiGlobs: [],
    testGlobs: ["babylon-webgpu", "babylon-optimizero", "webgpu-director"],
  },
  {
    id: "warp",
    name: "Warp System",
    group: "system",
    desc: "Warp engine, canvas, physics-based transition system",
    globs: ["components/warp/", "lib/warp/"],
    apiGlobs: [],
    testGlobs: ["warp-engine"],
  },
  {
    id: "vm",
    name: "VM / WASM Runtime",
    group: "system",
    desc: "Dual-VM coordinator, WASM GPU VM, buffer manager, inter-VM messaging, resource quotas",
    globs: ["lib/vm/", "assembly/"],
    apiGlobs: [],
    testGlobs: ["wasm-gpu-vm", "spec35-vm-bus-events"],
  },
  {
    id: "journey",
    name: "Journey System",
    group: "system",
    desc: "Journey trail, dots, insights, user journey tracking",
    globs: ["lib/journey/", "components/daydream/dream.JourneyTrail"],
    apiGlobs: ["app/api/journey/"],
    testGlobs: ["journey"],
  },
  {
    id: "runtime-core",
    name: "Runtime Core",
    group: "system",
    desc: "Dual-runtime bridge, engin workflow registry, module registry, seam clipboard, channel metrics",
    globs: [
      "lib/runtime/", "components/runtime/",
      "lib/engins/useEnginWorkflow", "lib/engins/workflowEngine",
    ],
    apiGlobs: [],
    testGlobs: ["runtime-channel", "runtime-container", "runtime-wiring", "runtime-viewport", "swap-manager", "seam-clipboard", "engin-runtime", "engin-workflow", "engin-dispatcher"],
  },
  {
    id: "dreamnav",
    name: "Dream Navigation",
    group: "system",
    desc: "Spatial navigation engine, anchor system, gesture frame computer, quaternion physics",
    globs: [
      "lib/navigation/", "components/dreamnav/",
      "lib/dreamnav/", "lib/gestures/",
    ],
    apiGlobs: [],
    testGlobs: ["dreamnav.tau", "phase9-touch-gestures", "phase9-drag-drop"],
  },
];

// ─── COLLECT + ANALYSE FILES ──────────────────────────────────────────────────

const allFiles = walk(ROOT);
const codeFiles = allFiles.filter(isCodeFile);

const fileData = {};
for (const file of codeFiles) {
  const content = readSafe(file);
  const imports = extractImports(content);
  fileData[file] = {
    imports,
    namedImports:        extractNamedImports(content),   // ← THE CONNECTORS
    dynamicImports:      extractDynamicImports(content),
    hookExports:         detectHookExports(content),
    namedExports:        extractNamedExports(content),   // ← EXPORTS (for unused detection)
    isReactComponent:    detectReactComponent(file, content),
    isAPIRoute:          isAPIRoute(file),
    usesSupabase:        detectSupabase(content),
    usesEventBus:        detectEventBus(content),
    usesZustand:         detectZustand(content),
    usesContext:         detectContext(content),
    usesRuntimeRegistry: detectRuntimeRegistry(content),
    usesDualRuntime:     detectDualRuntime(content),
    couplingScore:       imports.length,
  };
}

// Relative dep graph for circular detection
const relDepGraph = {};
for (const [file, d] of Object.entries(fileData)) {
  relDepGraph[file] = d.imports
    .map(imp => resolveRelative(file, imp))
    .filter(Boolean);
}
const circularDeps = detectCircular(relDepGraph);

// Risk report
const riskFiles = Object.entries(fileData)
  .filter(([_, d]) => d.couplingScore > 5 || d.usesEventBus || d.usesRuntimeRegistry)
  .map(([file, d]) => ({
    file,
    score: d.couplingScore,
    flags: [
      d.couplingScore > 10  ? "HIGH_COUPLING"    : d.couplingScore > 5 ? "MEDIUM_COUPLING" : null,
      d.usesEventBus        ? "EVENT_BUS"         : null,
      d.usesRuntimeRegistry ? "RUNTIME_REGISTRY"  : null,
      d.usesDualRuntime     ? "DUAL_RUNTIME"       : null,
      d.usesZustand         ? "ZUSTAND_STATE"      : null,
    ].filter(Boolean),
  }))
  .sort((a, b) => b.score - a.score);

// ─── BROKEN IMPORTS ───────────────────────────────────────────────────────────
// An import is "broken" if it points to an internal path (@/ alias or relative)
// that cannot be resolved to any actual file in the repo.

const EXTENSIONS = ["", ".ts", ".tsx", ".js", ".jsx", ".mjs", "/index.ts", "/index.tsx", "/index.js", "/index.jsx"];

// Build a set of all normalised file paths (strip extension, for fuzzy match)
const allFileSet = new Set(allFiles.map(f => path.normalize(f)));
const allFileStemSet = new Set(
  allFiles.map(f => path.normalize(f).replace(/\.(ts|tsx|js|jsx|mjs)$/, ""))
);

function resolveAliasOrRelative(fromFile, imp) {
  let candidate;
  if (imp.startsWith("@/")) {
    // @/ maps to ROOT
    candidate = imp.slice(2); // e.g. "lib/foo/bar"
  } else if (imp.startsWith(".")) {
    candidate = path.normalize(path.join(path.dirname(fromFile), imp));
  } else {
    return null; // external package — not our concern
  }

  // Try with all known extensions
  for (const ext of EXTENSIONS) {
    const full = candidate + ext;
    if (allFileSet.has(full)) return full; // exact hit
  }
  // Also try stem match (catches files the walker picked up)
  if (allFileStemSet.has(candidate)) return candidate;
  return false; // couldn't resolve
}

// brokenImports: { file → [{ specifier, names }] }
const brokenImports = {};
for (const [file, d] of Object.entries(fileData)) {
  const broken = [];
  for (const [specifier, names] of Object.entries(d.namedImports)) {
    const resolved = resolveAliasOrRelative(file, specifier);
    if (resolved === false) {
      // Can't resolve → broken
      broken.push({ specifier, names });
    }
  }
  // Also catch bare-import specifiers from extractImports that aren't in namedImports
  for (const imp of d.imports) {
    const resolved = resolveAliasOrRelative(file, imp);
    if (resolved === false) {
      // Only add if not already captured via namedImports
      if (!broken.some(b => b.specifier === imp)) {
        broken.push({ specifier: imp, names: ["(unknown — bare import)"] });
      }
    }
  }
  if (broken.length) brokenImports[file] = broken;
}

// ─── UNUSED EXPORTS ───────────────────────────────────────────────────────────
// Build a global set of every (resolvedFile, exportName) pair that is actually
// imported somewhere, then compare against every file's declared exports.

// Maps: normalised-stem → original file key (for looking up exports)
const stemToFile = {};
for (const file of codeFiles) {
  const stem = path.normalize(file).replace(/\.(ts|tsx|js|jsx|mjs)$/, "");
  stemToFile[stem] = file;
  stemToFile[path.normalize(file)] = file;
}

// Collect all (file, exportName) pairs that ARE imported somewhere
const importedPairs = new Set(); // "file::exportName"
for (const [fromFile, d] of Object.entries(fileData)) {
  for (const [specifier, names] of Object.entries(d.namedImports)) {
    const resolved = resolveAliasOrRelative(fromFile, specifier);
    if (!resolved) continue;
    const targetFile = stemToFile[path.normalize(resolved).replace(/\.(ts|tsx|js|jsx|mjs)$/, "")]
                    || stemToFile[path.normalize(resolved)];
    if (!targetFile) continue;
    for (const name of names) {
      const cleanName = name.replace(/^⬡ /, "(default)");
      importedPairs.add(`${targetFile}::${cleanName}`);
    }
  }
}

// unusedExports: { file → [exportName] }
const unusedExports = {};
for (const [file, d] of Object.entries(fileData)) {
  if (isTestFile(file)) continue;
  // Entry points and route files are allowed to have "unused" exports — skip them
  if (isPageFile(file) || isAPIRoute(file)) continue;
  const unused = d.namedExports.filter(exp => !importedPairs.has(`${file}::${exp}`));
  if (unused.length) unusedExports[file] = unused;
}

// ─── PER-FILE ISSUE FLAGS (used by tree renderer) ────────────────────────────
// fileIssues: { file → { broken: bool, unusedExports: bool } }
const fileIssues = {};
for (const file of codeFiles) {
  fileIssues[file] = {
    hasBrokenImports: !!brokenImports[file],
    hasUnusedExports: !!unusedExports[file],
  };
}

// ─── FEATURE FILE MATCHER ─────────────────────────────────────────────────────

function matchGlobs(file, globs) {
  return globs.some(g => file.includes(g));
}

function getFeatureFiles(feature) {
  const code       = codeFiles.filter(f => !isTestFile(f) && matchGlobs(f, feature.globs));
  const pages      = code.filter(isPageFile);
  const apis       = allFiles.filter(isAPIRoute).filter(f => matchGlobs(f, feature.apiGlobs || []));
  const tests      = allFiles.filter(isTestFile).filter(f => matchGlobs(f, feature.testGlobs || []));
  const types      = allFiles.filter(isTypeFile).filter(f => matchGlobs(f, feature.globs));
  const styles     = allFiles.filter(isStyleFile).filter(f => matchGlobs(f, feature.globs));

  const srcs       = code.filter(f => !isPageFile(f));
  const components = srcs.filter(f =>
    f.startsWith("components/") || f.startsWith("engins/") || f.startsWith("coresurfaces/")
  );
  const lib        = srcs.filter(f =>
    f.startsWith("lib/") || f.startsWith("dr-eams/") || f.startsWith("hooks/") ||
    f.startsWith("assembly/") || f.startsWith("agents/") || f.startsWith("build-memory/") ||
    f.startsWith("optimizer/") || f.startsWith("utils/")
  );

  const hooks = [];
  for (const file of srcs) {
    const d = fileData[file];
    if (d && d.hookExports.length) {
      for (const h of d.hookExports) hooks.push({ hook: h, file });
    }
  }

  const extDeps = new Set();
  const intDeps = new Set();
  for (const file of srcs) {
    const d = fileData[file];
    if (!d) continue;
    for (const imp of [...d.imports, ...d.dynamicImports]) {
      if (imp.startsWith("@/") || imp.startsWith("./") || imp.startsWith("../")) {
        intDeps.add(imp);
      } else if (!imp.startsWith(".")) {
        const pkg = imp.startsWith("@")
          ? imp.split("/").slice(0, 2).join("/")
          : imp.split("/")[0];
        extDeps.add(pkg);
      }
    }
  }

  return {
    pages, components, lib, hooks, apis, tests, types, styles,
    extDeps: [...extDeps].sort(),
    intDeps: [...intDeps].sort(),
    supabaseFiles:  srcs.filter(f => fileData[f]?.usesSupabase),
    eventBusFiles:  srcs.filter(f => fileData[f]?.usesEventBus),
    zustandFiles:   srcs.filter(f => fileData[f]?.usesZustand),
    contextFiles:   srcs.filter(f => fileData[f]?.usesContext),
    registryFiles:  srcs.filter(f => fileData[f]?.usesRuntimeRegistry),
    dualRuntimeFiles: srcs.filter(f => fileData[f]?.usesDualRuntime),
  };
}

// ─── RENDER FEATURE SECTION ───────────────────────────────────────────────────

function renderFeatureSection(f) {
  const fx = getFeatureFiles(f);
  let s = "";

  s += `<a name="${f.id}"></a>\n\n`;
  s += `# ${f.name}\n\n`;

  // Multiline descriptions (used for HOME)
  const descLines = f.desc.split("\n");
  for (const line of descLines) s += `> ${line}\n`;
  s += `\n`;

  // ── PAGES ──────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-pages"></a>\n\n`;
  s += `## Pages\n\n`;
  if (fx.pages.length) {
    for (const p of fx.pages.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No page routes for this feature._\n`;
  }
  s += `\n`;

  // ── COMPONENTS ─────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-components"></a>\n\n`;
  s += `## Components\n\n`;
  if (fx.components.length) {
    const byDir = {};
    for (const p of fx.components.sort()) {
      const dir = p.split("/").slice(0, Math.min(3, p.split("/").length - 1)).join("/");
      if (!byDir[dir]) byDir[dir] = [];
      byDir[dir].push(p);
    }
    for (const [dir, files] of Object.entries(byDir).sort()) {
      s += `### \`${dir}/\`\n\n`;
      for (const p of files) s += `- \`${p}\`\n`;
      s += `\n`;
    }
  } else {
    s += `_No component files for this feature._\n\n`;
  }

  // ── LIB ────────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-lib"></a>\n\n`;
  s += `## Lib / Logic\n\n`;
  if (fx.lib.length) {
    const byDir = {};
    for (const p of fx.lib.sort()) {
      const dir = p.split("/").slice(0, Math.min(3, p.split("/").length - 1)).join("/");
      if (!byDir[dir]) byDir[dir] = [];
      byDir[dir].push(p);
    }
    for (const [dir, files] of Object.entries(byDir).sort()) {
      s += `### \`${dir}/\`\n\n`;
      for (const p of files) s += `- \`${p}\`\n`;
      s += `\n`;
    }
  } else {
    s += `_No lib files for this feature._\n\n`;
  }

  // ── HOOKS ──────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-hooks"></a>\n\n`;
  s += `## Exported Hooks\n\n`;
  if (fx.hooks.length) {
    for (const { hook, file } of fx.hooks) {
      s += `- \`${hook}\` — \`${file}\`\n`;
    }
  } else {
    s += `_No hook exports in this feature._\n`;
  }
  s += `\n`;

  // ── API ROUTES ─────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-api"></a>\n\n`;
  s += `## API Routes\n\n`;
  if (fx.apis.length) {
    for (const p of fx.apis.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No API routes for this feature._\n`;
  }
  s += `\n`;

  // ── TYPES ──────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-types"></a>\n\n`;
  s += `## Types\n\n`;
  if (fx.types.length) {
    for (const p of fx.types.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No type files for this feature._\n`;
  }
  s += `\n`;

  // ── STYLES ─────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-styles"></a>\n\n`;
  s += `## Styles\n\n`;
  if (fx.styles.length) {
    for (const p of fx.styles.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No style files for this feature._\n`;
  }
  s += `\n`;

  // ── TESTS ──────────────────────────────────────────────────────────────────
  s += `<a name="${f.id}-tests"></a>\n\n`;
  s += `## Tests\n\n`;
  if (fx.tests.length) {
    for (const p of fx.tests.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No tests matched for this feature._\n`;
  }
  s += `\n`;

  // ── DEPENDENCIES ───────────────────────────────────────────────────────────
  s += `<a name="${f.id}-deps"></a>\n\n`;
  s += `## Dependencies\n\n`;
  if (fx.extDeps.length) {
    s += `### External packages\n\n`;
    for (const p of fx.extDeps) s += `- \`${p}\`\n`;
    s += `\n`;
  }
  if (fx.intDeps.length) {
    s += `### Internal imports\n\n`;
    for (const p of fx.intDeps) s += `- \`${p}\`\n`;
    s += `\n`;
  }
  if (!fx.extDeps.length && !fx.intDeps.length) {
    s += `_No dependencies detected._\n\n`;
  }

  // ── SPECIAL CAPABILITIES ───────────────────────────────────────────────────
  const caps = [];
  if (fx.dualRuntimeFiles.length) caps.push(`**Dual Runtime** (${fx.dualRuntimeFiles.length} files)`);
  if (fx.supabaseFiles.length)    caps.push(`**Supabase** (${fx.supabaseFiles.length} files)`);
  if (fx.eventBusFiles.length)    caps.push(`**Event Bus** (${fx.eventBusFiles.length} files)`);
  if (fx.zustandFiles.length)     caps.push(`**Zustand** (${fx.zustandFiles.length} files)`);
  if (fx.contextFiles.length)     caps.push(`**React Context** (${fx.contextFiles.length} files)`);
  if (fx.registryFiles.length)    caps.push(`**Runtime Registry** (${fx.registryFiles.length} files)`);

  if (caps.length) {
    s += `## Special Capabilities\n\n`;
    s += caps.join(" · ") + `\n\n`;

    if (fx.dualRuntimeFiles.length) {
      s += `### Dual Runtime files\n\n`;
      for (const p of fx.dualRuntimeFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
    if (fx.supabaseFiles.length) {
      s += `### Supabase files\n\n`;
      for (const p of fx.supabaseFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
    if (fx.eventBusFiles.length) {
      s += `### Event Bus files\n\n`;
      for (const p of fx.eventBusFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
    if (fx.zustandFiles.length) {
      s += `### Zustand files\n\n`;
      for (const p of fx.zustandFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
    if (fx.contextFiles.length) {
      s += `### Context files\n\n`;
      for (const p of fx.contextFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
    if (fx.registryFiles.length) {
      s += `### Runtime Registry files\n\n`;
      for (const p of fx.registryFiles.sort()) s += `- \`${p}\`\n`;
      s += `\n`;
    }
  }

  s += `---\n\n`;
  return s;
}

// ═══════════════════════════════════════════════════════════════════════════════
// BUILD OUTPUT
// ═══════════════════════════════════════════════════════════════════════════════

let md = "";

md += `# DREAMengin Repository State\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `---\n\n`;

// ─── MASTER INDEX ─────────────────────────────────────────────────────────────

md += `# MASTER INDEX\n\n`;

const userFeatures   = FEATURES.filter(f => f.group === "user");
const systemFeatures = FEATURES.filter(f => f.group === "system");

md += `## User-Facing Features\n\n`;
for (const f of userFeatures) {
  md += `- [${f.name}](#${f.id})\n`;
  md += `  - [Pages](#${f.id}-pages) · [Components](#${f.id}-components) · [Lib](#${f.id}-lib) · [Hooks](#${f.id}-hooks) · [API Routes](#${f.id}-api) · [Types](#${f.id}-types) · [Styles](#${f.id}-styles) · [Tests](#${f.id}-tests) · [Deps](#${f.id}-deps)\n`;
}

md += `\n## System & Infrastructure\n\n`;
for (const f of systemFeatures) {
  md += `- [${f.name}](#${f.id})\n`;
  md += `  - [Pages](#${f.id}-pages) · [Components](#${f.id}-components) · [Lib](#${f.id}-lib) · [Hooks](#${f.id}-hooks) · [API Routes](#${f.id}-api) · [Types](#${f.id}-types) · [Styles](#${f.id}-styles) · [Tests](#${f.id}-tests) · [Deps](#${f.id}-deps)\n`;
}

md += `\n## Cross-Cutting Analysis\n\n`;
md += `- [Route Map](#route-map)\n`;
md += `- [File Connections + Connecting Functions](#file-connections)\n`;
md += `- [Dynamic Imports](#dynamic-imports)\n`;
md += `- [All API Routes](#all-api-routes)\n`;
md += `- [All React Components](#all-components)\n`;
md += `- [All Hooks](#all-hooks)\n`;
md += `- [All Type Files](#all-types)\n`;
md += `- [Dual Runtime Files](#dual-runtime-files)\n`;
md += `- [Supabase Usage](#supabase-usage)\n`;
md += `- [State: Zustand / Context](#state)\n`;
md += `- [Event Bus Subscribers & Emitters](#event-bus)\n`;
md += `- [Runtime Registries](#runtime-registries)\n`;
md += `- [Circular Dependencies](#circular-deps)\n`;
md += `- [Coupling Scores (Top 30)](#coupling-scores)\n`;
md += `- [System Risk Report](#risk-report)\n`;
md += `- [Broken Imports](#broken-imports)\n`;
md += `- [Unused Exports](#unused-exports)\n`;
md += `- [Raw File Tree](#raw-tree)\n`;

md += `\n---\n\n`;

// ─── FEATURE SECTIONS ─────────────────────────────────────────────────────────

md += `# User-Facing Features\n\n---\n\n`;
for (const f of userFeatures) md += renderFeatureSection(f);

md += `# System & Infrastructure\n\n---\n\n`;
for (const f of systemFeatures) md += renderFeatureSection(f);

// ═══════════════════════════════════════════════════════════════════════════════
// CROSS-CUTTING
// ═══════════════════════════════════════════════════════════════════════════════

// ─── ROUTE MAP ────────────────────────────────────────────────────────────────
// What happens when a user navigates — every route in the app.

md += `<a name="route-map"></a>\n\n`;
md += `# Route Map\n\n`;
md += `> User navigation flow. dreamdmbar = HOME. Dynamic segments shown as \`:param\`. Catch-alls as \`:param*\`.\n\n`;

const routes = buildRouteMap(allFiles);

// Group by top-level segment
const routeGroups = {};
for (const r of routes) {
  const top = "/" + (r.route.split("/")[1] || "");
  if (!routeGroups[top]) routeGroups[top] = [];
  routeGroups[top].push(r);
}

for (const [group, groupRoutes] of Object.entries(routeGroups).sort()) {
  const label = group === "/" ? "Root" : group;
  md += `## \`${label}\`\n\n`;
  md += `| Route | File | Notes |\n`;
  md += `|-------|------|-------|\n`;
  for (const r of groupRoutes) {
    md += `| \`${r.route}\` | \`${r.file}\` | ${r.label} |\n`;
  }
  md += `\n`;
}
md += `---\n\n`;

// ─── FILE CONNECTIONS + CONNECTING FUNCTIONS ──────────────────────────────────
// This is the "what code connects these files" view.
// For each file: shows WHAT named exports/functions are imported from WHERE.
// ⬡ = default export   · * as = namespace import

md += `<a name="file-connections"></a>\n\n`;
md += `# File Connections — Connecting Functions\n\n`;
md += `> Read this as: **file X pulls in [these named functions/components/hooks] from [these modules].**\n`;
md += `> ⬡ = default export · \`* as\` = namespace import · others = named exports\n\n`;

for (const [file, d] of Object.entries(fileData).sort()) {
  if (isTestFile(file)) continue;
  if (!Object.keys(d.namedImports).length && !d.dynamicImports.length) continue;

  md += `## \`${file}\`\n\n`;
  md += `| Module | Connected via |\n`;
  md += `|--------|---------------|\n`;

  for (const [mod, names] of Object.entries(d.namedImports).sort()) {
    md += `| \`${mod}\` | ${names.map(n => `\`${n}\``).join(", ")} |\n`;
  }
  for (const imp of d.dynamicImports) {
    md += `| \`${imp}\` | _(dynamic import)_ |\n`;
  }

  md += `\n`;
}
md += `---\n\n`;

// ─── DYNAMIC IMPORTS ─────────────────────────────────────────────────────────

md += `<a name="dynamic-imports"></a>\n\n`;
md += `# Dynamic Imports\n\n`;
for (const [file, d] of Object.entries(fileData).sort()) {
  if (!d.dynamicImports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const imp of d.dynamicImports) md += `- \`${imp}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ─── ALL API ROUTES ───────────────────────────────────────────────────────────

md += `<a name="all-api-routes"></a>\n\n`;
md += `# All API Routes\n\n`;
const allAPIs = allFiles.filter(isAPIRoute).sort();
const apiGroups = {};
for (const f of allAPIs) {
  const group = f.replace("app/api/", "").split("/")[0];
  if (!apiGroups[group]) apiGroups[group] = [];
  apiGroups[group].push(f);
}
for (const [group, routes2] of Object.entries(apiGroups).sort()) {
  md += `## \`/api/${group}\`\n\n`;
  for (const r of routes2) md += `- \`${r}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ─── ALL REACT COMPONENTS ────────────────────────────────────────────────────

md += `<a name="all-components"></a>\n\n`;
md += `# All React Components\n\n`;
const allComps = codeFiles.filter(f => fileData[f].isReactComponent && !isTestFile(f)).sort();
const compByDir = {};
for (const f of allComps) {
  const dir = f.split("/").slice(0, 2).join("/");
  if (!compByDir[dir]) compByDir[dir] = [];
  compByDir[dir].push(f);
}
for (const [dir, files] of Object.entries(compByDir).sort()) {
  md += `## \`${dir}/\`\n\n`;
  for (const f of files) md += `- \`${f}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ─── ALL HOOKS ───────────────────────────────────────────────────────────────

md += `<a name="all-hooks"></a>\n\n`;
md += `# All Hooks\n\n`;
for (const [file, d] of Object.entries(fileData).sort()) {
  if (!d.hookExports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const h of d.hookExports) md += `- \`${h}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ─── ALL TYPE FILES ───────────────────────────────────────────────────────────

md += `<a name="all-types"></a>\n\n`;
md += `# All Type Files\n\n`;
const typeFiles = allFiles.filter(isTypeFile).sort();
for (const f of typeFiles) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── DUAL RUNTIME FILES ───────────────────────────────────────────────────────

md += `<a name="dual-runtime-files"></a>\n\n`;
md += `# Dual Runtime Files\n\n`;
md += `> Files that directly touch the dual-runtime system — the spine connecting dreamdmbar to everything.\n\n`;
const dualRTFiles = codeFiles.filter(f => fileData[f].usesDualRuntime && !isTestFile(f)).sort();
for (const f of dualRTFiles) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── SUPABASE USAGE ───────────────────────────────────────────────────────────

md += `<a name="supabase-usage"></a>\n\n`;
md += `# Supabase Usage\n\n`;
const supFiles = codeFiles.filter(f => fileData[f].usesSupabase && !isTestFile(f)).sort();
for (const f of supFiles) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── STATE ────────────────────────────────────────────────────────────────────

md += `<a name="state"></a>\n\n`;
md += `# State: Zustand / Context\n\n`;
md += `## Zustand Stores\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesZustand && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n## React Context Providers & Consumers\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesContext && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── EVENT BUS ────────────────────────────────────────────────────────────────

md += `<a name="event-bus"></a>\n\n`;
md += `# Event Bus Subscribers & Emitters\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesEventBus && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── RUNTIME REGISTRIES ───────────────────────────────────────────────────────

md += `<a name="runtime-registries"></a>\n\n`;
md += `# Runtime Registries\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesRuntimeRegistry && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ─── CIRCULAR DEPS ────────────────────────────────────────────────────────────

md += `<a name="circular-deps"></a>\n\n`;
md += `# Circular Dependencies\n\n`;
if (circularDeps.length) {
  for (const c of circularDeps) md += `- ⚠ ${c}\n`;
} else {
  md += `_No circular dependencies detected._\n`;
}
md += `\n---\n\n`;

// ─── COUPLING SCORES ──────────────────────────────────────────────────────────

md += `<a name="coupling-scores"></a>\n\n`;
md += `# Coupling Scores (Top 30)\n\n`;
md += `| File | Import Count |\n|------|--------------|\n`;
const topCoupled = Object.entries(fileData)
  .filter(([f]) => !isTestFile(f))
  .map(([file, d]) => ({ file, score: d.couplingScore }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 30);
for (const { file, score } of topCoupled) md += `| \`${file}\` | ${score} |\n`;
md += `\n---\n\n`;

// ─── RISK REPORT ──────────────────────────────────────────────────────────────

md += `<a name="risk-report"></a>\n\n`;
md += `# System Risk Report\n\n`;
if (riskFiles.length) {
  md += `| File | Coupling | Flags |\n|------|----------|-------|\n`;
  for (const { file, score, flags } of riskFiles)
    md += `| \`${file}\` | ${score} | ${flags.join(", ")} |\n`;
} else {
  md += `_No high-risk files detected._\n`;
}
md += `\n---\n\n`;

// ─── BROKEN IMPORTS SECTION ───────────────────────────────────────────────────

md += `<a name="broken-imports"></a>\n\n`;
md += `# Broken Imports\n\n`;
md += `> Internal imports (\`@/\` or relative) that cannot be resolved to any file in the repo.\n`;
md += `> ⚠ = could cause a build error. External packages (npm) are excluded.\n\n`;

const brokenEntries = Object.entries(brokenImports).filter(([f]) => !isTestFile(f)).sort();
if (brokenEntries.length) {
  md += `| File | Broken specifier | Imported names |\n`;
  md += `|------|-----------------|----------------|\n`;
  for (const [file, items] of brokenEntries) {
    for (const { specifier, names } of items) {
      const nameStr = names.map(n => `\`${n}\``).join(", ");
      md += `| \`${file}\` | \`${specifier}\` | ${nameStr} |\n`;
    }
  }
} else {
  md += `_No broken internal imports detected._\n`;
}
md += `\n---\n\n`;

// ─── UNUSED EXPORTS SECTION ───────────────────────────────────────────────────

md += `<a name="unused-exports"></a>\n\n`;
md += `# Unused Exports\n\n`;
md += `> Exports that are never imported anywhere else in the codebase.\n`;
md += `> Page/route files are excluded (they are consumed by the framework, not by imports).\n`;
md += `> Test files are excluded. \`(default)\` = default export.\n\n`;

const unusedEntries = Object.entries(unusedExports).sort();
if (unusedEntries.length) {
  md += `| File | Unused exports |\n`;
  md += `|------|----------------|\n`;
  for (const [file, names] of unusedEntries) {
    md += `| \`${file}\` | ${names.map(n => `\`${n}\``).join(", ")} |\n`;
  }
} else {
  md += `_No unused exports detected._\n`;
}
md += `\n---\n\n`;

// ─── RAW FILE TREE ────────────────────────────────────────────────────────────
// Annotated: each directory shows which feature(s) it belongs to.

md += `<a name="raw-tree"></a>\n\n`;
md += `# Raw File Tree\n\n`;

// Build feature lookup: dir prefix → feature names
const dirFeatureMap = {};
for (const f of FEATURES) {
  for (const g of f.globs) {
    const key = g.replace(/\/$/, "");
    if (!dirFeatureMap[key]) dirFeatureMap[key] = [];
    dirFeatureMap[key].push(f.name);
  }
}

function getFeatureAnnotation(entryPath) {
  const rel = path.relative(ROOT, entryPath);
  const matches = [];
  for (const [key, names] of Object.entries(dirFeatureMap)) {
    if (rel.startsWith(key) || rel.includes(key)) {
      for (const n of names) if (!matches.includes(n)) matches.push(n);
    }
  }
  return matches.length ? `  [${matches.join(", ")}]` : "";
}

md += `\`\`\`text\n`;
md += `Legend: ⚠ broken import  ∅ unused export\n\n`;
function buildTree(dir, prefix = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !shouldIgnore(e.name) && !/\.md$/i.test(e.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
  entries.forEach((entry, i) => {
    const isLast = i === entries.length - 1;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT, fullPath);
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    const annotation = entry.isDirectory()
      ? getFeatureAnnotation(fullPath)
      : "";

    // File-level issue markers (inline on the filename line)
    let issueMarkers = "";
    if (!entry.isDirectory()) {
      const issues = fileIssues[relPath];
      if (issues) {
        if (issues.hasBrokenImports) issueMarkers += " ⚠";
        if (issues.hasUnusedExports) issueMarkers += " ∅";
      }
    }

    md += `${prefix}${isLast ? "└──" : "├──"} ${entry.name}${issueMarkers}${annotation}\n`;

    if (entry.isDirectory()) {
      buildTree(fullPath, childPrefix);
    } else {
      // Inline broken imports detail
      const broken = brokenImports[relPath];
      const unused  = unusedExports[relPath];
      const hasDetail = (broken && broken.length) || (unused && unused.length);
      if (hasDetail) {
        // Total sub-lines: figure out whether this is the last child for connector
        if (broken && broken.length) {
          broken.forEach((item, bi) => {
            const isLastDetail = bi === broken.length - 1 && (!unused || !unused.length);
            const names = item.names.join(", ");
            md += `${childPrefix}${isLastDetail ? "└──" : "├──"} ⚠ ${item.specifier}  (${names})\n`;
          });
        }
        if (unused && unused.length) {
          md += `${childPrefix}└── ∅ unused: ${unused.join(", ")}\n`;
        }
      }
    }
  });
}
buildTree(ROOT);
md += "```\n";

// ─── WRITE ────────────────────────────────────────────────────────────────────

fs.writeFileSync("REPO_STATE.md", md);
console.log("✓ REPO_STATE.md written");

// FILE_TREE.md — standalone annotated tree with broken import / unused export detail
let treeMd = "";
treeMd += `# File Tree\n\n`;
treeMd += `Generated: ${new Date().toISOString()}\n\n`;
treeMd += `Legend: ⚠ broken import  ∅ unused export\n\n`;
treeMd += "```text\n";
function buildTreeInto(dir, prefix = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !shouldIgnore(e.name) && !/\.md$/i.test(e.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
  entries.forEach((entry, i) => {
    const isLast = i === entries.length - 1;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT, fullPath);
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    const annotation = entry.isDirectory() ? getFeatureAnnotation(fullPath) : "";

    let issueMarkers = "";
    if (!entry.isDirectory()) {
      const issues = fileIssues[relPath];
      if (issues) {
        if (issues.hasBrokenImports) issueMarkers += " ⚠";
        if (issues.hasUnusedExports) issueMarkers += " ∅";
      }
    }

    treeMd += `${prefix}${isLast ? "└──" : "├──"} ${entry.name}${issueMarkers}${annotation}\n`;

    if (entry.isDirectory()) {
      buildTreeInto(fullPath, childPrefix);
    } else {
      const d      = fileData[relPath];
      const broken = brokenImports[relPath] || [];
      const unused = unusedExports[relPath] || [];

      // Collect all detail lines so we can correctly pick ├── vs └──
      const lines = [];

      // Named imports: one line per name — "name ← source"
      if (d) {
        for (const [mod, names] of Object.entries(d.namedImports).sort()) {
          const isBroken = broken.some(b => b.specifier === mod);
          for (const name of [...names].sort()) {
            const tag = isBroken ? "⚠" : "←";
            lines.push(`${name}  ${tag} ${mod}`);
          }
        }
        // Dynamic imports
        for (const imp of d.dynamicImports) {
          lines.push(`(dynamic)  ← ${imp}`);
        }
        // Named exports this file provides
        if (d.namedExports.length) {
          for (const exp of d.namedExports.sort()) {
            lines.push(`→ ${exp}`);
          }
        }
      }

      // Broken imports not already shown via namedImports
      for (const item of broken) {
        if (!d || !d.namedImports[item.specifier]) {
          for (const name of item.names) {
            lines.push(`${name}  ⚠ ${item.specifier}`);
          }
        }
      }

      // Unused exports
      if (unused.length) {
        lines.push(`∅ unused: ${unused.join(", ")}`);
      }

      lines.forEach((line, li) => {
        const isLastLine = li === lines.length - 1;
        treeMd += `${childPrefix}${isLastLine ? "└──" : "├──"} ${line}\n`;
      });
    }
  });
}
buildTreeInto(ROOT);
treeMd += "```\n";

fs.writeFileSync("FILE_TREE.md", treeMd);
console.log("✓ FILE_TREE.md written");
console.log(`  Routes: ${buildRouteMap(allFiles).length}`);
console.log(`  Files analysed: ${codeFiles.length}`);
console.log(`  Connected functions mapped: ${codeFiles.filter(f => Object.keys(fileData[f].namedImports).length > 0).length} files`);
console.log(`  Dual-runtime files: ${codeFiles.filter(f => fileData[f].usesDualRuntime).length}`);
console.log(`  Broken imports: ${Object.values(brokenImports).reduce((s, a) => s + a.length, 0)} specifiers across ${Object.keys(brokenImports).length} files`);
console.log(`  Unused exports: ${Object.values(unusedExports).reduce((s, a) => s + a.length, 0)} exports across ${Object.keys(unusedExports).length} files`);
