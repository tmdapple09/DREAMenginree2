import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const IGNORE = new Set([
  "node_modules", ".git", ".next", ".vercel",
  "dist", "build", "coverage", ".turbo"
]);

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

function isCodeFile(f) { return /\.(ts|tsx|js|jsx|mjs)$/.test(f); }
function isAPIRoute(f) { return /^app\/api\//.test(f) && f.endsWith("route.ts"); }
function isPageFile(f) { return f.startsWith("app/") && f.endsWith("page.tsx"); }
function isTestFile(f) { return /\.(test|spec)\.(ts|tsx|js)$/.test(f); }
function isTypeFile(f) { return f.startsWith("types/") || f.endsWith(".d.ts"); }
function isStyleFile(f) { return /\.(css|scss|module\.css)$/.test(f); }
function isMigration(f) { return f.startsWith("supabase/migrations/"); }

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

function detectAPIRoute(file) {
  return isAPIRoute(file);
}

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
// Each feature has path globs matched against file paths (substring).
// Files can and will appear in multiple features — that's intentional.
// Each feature section shows: pages, components, lib, hooks, API routes,
// types, styles, migrations, tests, + all external & internal deps.

const FEATURES = [
  // ── USER-FACING ───────────────────────────────────────────────────────────
  {
    id: "homedream",
    name: "HomeDream",
    group: "user",
    desc: "Main home surface, feed, dual-runtime bar, persistent UI shell",
    globs: [
      "app/dreamdmbar", "app/homedream", "dreamdmbar/",
      "components/home/", "lib/dreamdm/", "lib/runtime/dualRuntime",
      "lib/runtime/useDualRuntime", "lib/runtime/dualRuntimeBridge",
      "lib/runtime/EnginDispatcher", "lib/runtime/dreamOSBus",
    ],
    apiGlobs:       ["app/api/dreams/feed", "app/api/dreams/instances", "app/api/feed", "app/api/home-layout"],
    testGlobs:      ["dreamdm-bar", "dream-bar", "homedream", "dual-runtime", "bar-hide", "decide-bar", "neural-seam", "runtime-wiring", "dream-continuity", "contextual-home", "readme-section6-homedream"],
    migrationGlobs: ["dreamdm_bar", "widget_instances", "phase8a_feed"],
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
    apiGlobs:       ["app/api/dreamr/"],
    testGlobs:      ["dreamr-", "swipe-calibration", "spec37-torridity"],
    migrationGlobs: ["dreamr", "dreamr_tally", "dreamr_feed"],
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
    apiGlobs:       ["app/api/dreamengin/"],
    testGlobs:      ["dreamengin-os", "dreamengin-preflight", "os-subsystem", "module-registry", "runtime-container", "runtime-viewport"],
    migrationGlobs: [],
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
      "public/cartridges/", "assembly/",
    ],
    apiGlobs:       ["app/api/game-scores", "app/api/gameengin/"],
    testGlobs:      ["gameengin", "game-engin", "game-navigation", "madmaxi", "game-controller", "game-performance", "game-quality", "fusion-cartridges", "shell-cartridge", "game-remote", "report-driven-game", "DUALSENSE"],
    migrationGlobs: ["game_scores", "gameengin_core", "game_assets"],
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
    apiGlobs:       ["app/api/projects", "app/api/admin/code-files"],
    testGlobs:      ["code-dream-preview", "readme-section13-code"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/lab/"],
    testGlobs:      ["lab-section-12", "lab-dream-split"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/music/"],
    testGlobs:      ["starmaker", "music-starmaker"],
    migrationGlobs: [],
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
    apiGlobs:       [],
    testGlobs:      ["branding-logos"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/content/", "app/api/drafts/", "app/api/scheduled-posts"],
    testGlobs:      ["contentengin", "content-publish", "content-intelligence"],
    migrationGlobs: ["scheduled_posts", "content_drafts"],
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
    apiGlobs:       [],
    testGlobs:      ["optimizer", "creative-optimizero"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/forge/"],
    testGlobs:      ["forge-build", "forge-engin", "forge-nexus", "forge-rituals", "forge-momentum", "spec41-engine-builder"],
    migrationGlobs: ["agent_sessions_forge"],
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
    apiGlobs:       [],
    testGlobs:      ["daydream-engin-routes", "phase8f-daydream", "diff-viewer"],
    migrationGlobs: ["phase8f_daydream"],
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
    apiGlobs:       ["app/api/profile/"],
    testGlobs:      ["view-profile", "edit-profiledream", "profile-avatar"],
    migrationGlobs: ["profile_dream_widgets", "profiles_widget_config"],
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
    apiGlobs:       ["app/api/widgets/"],
    testGlobs:      ["widget-install-flow", "universal-asset-registry", "drop-target-registry"],
    migrationGlobs: ["widget_system_v2", "widget_instances_visibility", "profile_dream_widgets", "rename_widgets_to_dreams"],
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
    apiGlobs:       ["app/api/feed/", "app/api/posts/", "app/api/follow", "app/api/likes", "app/api/comments", "app/api/social/", "app/api/views/", "app/api/embed-feed", "app/api/youtube/"],
    testGlobs:      ["social-feed", "social-platforms", "rss-feed", "live-feed", "post-view", "post-media", "dreamr-feed-topics", "phase9-cross-post", "phase9-hashtags"],
    migrationGlobs: ["feed_items", "comments", "phase8a_feed"],
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
    apiGlobs:       ["app/api/settings/"],
    testGlobs:      ["phase8i-settings"],
    migrationGlobs: ["visibility_mappings", "consent_settings"],
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
    apiGlobs:       [],
    testGlobs:      ["dreamnav.tau"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/messages/"],
    testGlobs:      ["dreamdm-messaging", "dreamdm-draft"],
    migrationGlobs: ["conversations_messages", "message_boards"],
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
    apiGlobs:       ["app/api/notifications/"],
    testGlobs:      ["notifications", "phase9-notifications"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/connectors/"],
    testGlobs:      ["connectors", "connector-delivery", "youtube-provider"],
    migrationGlobs: ["connector_accounts"],
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
    apiGlobs:       ["app/api/marketplace/", "app/api/shop/", "app/api/skip-credits/", "app/api/ads/"],
    testGlobs:      ["phase8e-shop", "phase8e-orders", "skip-credits", "activity-revenue-split"],
    migrationGlobs: ["ads_platform", "phase8e_shop"],
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
    apiGlobs:       ["app/api/shared-dream/"],
    testGlobs:      ["spec38-collaboration", "session-continuity", "dual-runtime-bridge-peer"],
    migrationGlobs: ["shared_dream_sessions"],
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
    apiGlobs:       ["app/api/settings/appearance"],
    testGlobs:      ["universal-visual-modularity"],
    migrationGlobs: [],
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
    apiGlobs:       ["app/api/auth/", "app/api/setup/"],
    testGlobs:      ["auth-providers", "auth-update-password", "safe-get-user", "admin-lockout"],
    migrationGlobs: ["security_axioms", "admin_lock"],
  },

  // ── SYSTEM & INFRASTRUCTURE ───────────────────────────────────────────────
  {
    id: "ai",
    name: "AI Systems (Boogieman / Dr.EAMS / Idari)",
    group: "system",
    desc: "Boogieman policy engine, Dr.EAMS assistant, Idari admin AI, triad consensus, tool router",
    globs: [
      "lib/ai/", "lib/agents/", "dr-eams/",
      "components/dream.AIAssistant", "components/dream.DrEamsVoiceAssistant",
      "components/idari/",
    ],
    apiGlobs:       ["app/api/ai/", "app/api/agent/", "app/api/admin/ai"],
    testGlobs:      ["boogieman", "boogie-policy", "agent-bus", "ai-edit-engine"],
    migrationGlobs: ["ai_system_v2026", "ai_core", "agent_sessions"],
  },
  {
    id: "child-safety",
    name: "Child Safety",
    group: "system",
    desc: "Content scanning, NCMEC reporting, image classifier, message context checker",
    globs: [
      "lib/child-safety/", "components/dream.panel.ChildSafetyPanel",
    ],
    apiGlobs:       ["app/api/ai/boogieman/child-safety", "app/api/admin/child-safety"],
    testGlobs:      ["child-safety"],
    migrationGlobs: ["child_safety"],
  },
  {
    id: "observability",
    name: "Observability & Idari Console",
    group: "system",
    desc: "OpenTelemetry, metrics, health trends, platform errors, Idari admin console",
    globs: [
      "lib/observability/", "grafana/", "prometheus/",
      "app/(internal)/idari-console", "components/idari/",
      "components/dream.PlatformHealth",
    ],
    apiGlobs:       ["app/api/metrics/", "app/api/platform/errors", "app/api/admin/observability"],
    testGlobs:      ["idari-observability", "collector-extended", "platform-utils"],
    migrationGlobs: [],
  },
  {
    id: "webgpu-babylon",
    name: "WebGPU / Babylon Engine",
    group: "system",
    desc: "WebGPU director, Babylon.js engine factory, adaptive quality, 3D rendering pipeline",
    globs: [
      "components/webgpu/", "lib/webgpu/", "lib/babylon/",
      "components/optimizer/", "lib/optimizer/",
    ],
    apiGlobs:       [],
    testGlobs:      ["babylon-webgpu", "babylon-optimizero", "webgpu-director"],
    migrationGlobs: [],
  },
  {
    id: "warp",
    name: "Warp System",
    group: "system",
    desc: "Warp engine, canvas, physics-based transition system",
    globs: ["components/warp/", "lib/warp/"],
    apiGlobs:       [],
    testGlobs:      ["warp-engine"],
    migrationGlobs: [],
  },
  {
    id: "vm",
    name: "VM / WASM Runtime",
    group: "system",
    desc: "Dual-VM coordinator, WASM GPU VM, buffer manager, inter-VM messaging, resource quotas",
    globs: ["lib/vm/", "assembly/", "public/workers/"],
    apiGlobs:       [],
    testGlobs:      ["wasm-gpu-vm", "spec35-vm-bus-events"],
    migrationGlobs: [],
  },
  {
    id: "journey",
    name: "Journey System",
    group: "system",
    desc: "Journey trail, dots, insights, user journey tracking",
    globs: ["lib/journey/", "components/daydream/dream.JourneyTrail"],
    apiGlobs:       ["app/api/journey/"],
    testGlobs:      ["journey"],
    migrationGlobs: ["journey_dots"],
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
    apiGlobs:       [],
    testGlobs:      ["runtime-channel", "runtime-container", "runtime-wiring", "runtime-viewport", "swap-manager", "seam-clipboard", "engin-runtime", "engin-workflow", "engin-dispatcher"],
    migrationGlobs: [],
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
    apiGlobs:       [],
    testGlobs:      ["dreamnav.tau", "phase9-touch-gestures", "phase9-drag-drop"],
    migrationGlobs: [],
  },
];

// ─── COLLECT FILES ────────────────────────────────────────────────────────────

const allFiles = walk(ROOT);
const codeFiles = allFiles.filter(isCodeFile);

// Pre-analyse every code file
const fileData = {};
for (const file of codeFiles) {
  const content = readSafe(file);
  const imports = extractImports(content);
  fileData[file] = {
    imports,
    dynamicImports:      extractDynamicImports(content),
    hookExports:         detectHookExports(content),
    isReactComponent:    detectReactComponent(file, content),
    isAPIRoute:          detectAPIRoute(file),
    usesSupabase:        detectSupabase(content),
    usesEventBus:        detectEventBus(content),
    usesZustand:         detectZustand(content),
    usesContext:         detectContext(content),
    usesRuntimeRegistry: detectRuntimeRegistry(content),
    couplingScore:       imports.length,
  };
}

// Relative dep graph for circular detection
const relDepGraph = {};
for (const [file, d] of Object.entries(fileData)) {
  relDepGraph[file] = d.imports.map(imp => resolveRelative(file, imp)).filter(Boolean);
}
const circularDeps = detectCircular(relDepGraph);

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
      d.usesZustand         ? "ZUSTAND_STATE"     : null,
    ].filter(Boolean),
  }))
  .sort((a, b) => b.score - a.score);

// ─── FEATURE FILE MATCHER ─────────────────────────────────────────────────────

function matchGlobs(file, globs) {
  return globs.some(g => file.includes(g));
}

function getFeatureFiles(feature) {
  const code      = codeFiles.filter(f => !isTestFile(f) && matchGlobs(f, feature.globs));
  const pages     = code.filter(isPageFile);
  const apis      = allFiles.filter(isAPIRoute).filter(f => matchGlobs(f, feature.apiGlobs || []));
  const tests     = allFiles.filter(isTestFile).filter(f => matchGlobs(f, feature.testGlobs || []));
  const types     = allFiles.filter(isTypeFile).filter(f => matchGlobs(f, feature.globs));
  const styles    = allFiles.filter(isStyleFile).filter(f => matchGlobs(f, feature.globs));
  const migrations = allFiles.filter(isMigration).filter(f => matchGlobs(f, feature.migrationGlobs || []));

  // Non-page source files, grouped by top-level folder
  const srcs = code.filter(f => !isPageFile(f));
  const components = srcs.filter(f => f.startsWith("components/") || f.startsWith("engins/") || f.startsWith("coresurfaces/"));
  const lib        = srcs.filter(f => f.startsWith("lib/") || f.startsWith("dr-eams/") || f.startsWith("hooks/") || f.startsWith("assembly/"));
  const hooks      = [];

  // Collect exported hooks from this feature's files
  for (const file of srcs) {
    const d = fileData[file];
    if (d && d.hookExports.length) {
      for (const h of d.hookExports) hooks.push({ hook: h, file });
    }
  }

  // Dependency analysis: split external packages vs internal paths
  const extDeps = new Set();
  const intDeps = new Set();
  for (const file of srcs) {
    const d = fileData[file];
    if (!d) continue;
    for (const imp of [...d.imports, ...d.dynamicImports]) {
      if (imp.startsWith("@/") || imp.startsWith("./") || imp.startsWith("../") || imp.startsWith("@/")) {
        intDeps.add(imp);
      } else if (!imp.startsWith(".")) {
        const pkg = imp.startsWith("@") ? imp.split("/").slice(0, 2).join("/") : imp.split("/")[0];
        extDeps.add(pkg);
      }
    }
  }

  // Files in this feature that use special capabilities
  const supabaseFiles  = srcs.filter(f => fileData[f]?.usesSupabase);
  const eventBusFiles  = srcs.filter(f => fileData[f]?.usesEventBus);
  const zustandFiles   = srcs.filter(f => fileData[f]?.usesZustand);
  const contextFiles   = srcs.filter(f => fileData[f]?.usesContext);
  const registryFiles  = srcs.filter(f => fileData[f]?.usesRuntimeRegistry);

  return {
    pages, components, lib, hooks,
    apis, tests, types, styles, migrations,
    extDeps: [...extDeps].sort(),
    intDeps: [...intDeps].sort(),
    supabaseFiles, eventBusFiles, zustandFiles, contextFiles, registryFiles,
  };
}

// ─── ANCHOR HELPERS ───────────────────────────────────────────────────────────

function anchor(id) { return id; }

function subAnchor(featureId, section) { return `${featureId}-${section}`; }

// ─── BUILD MD ─────────────────────────────────────────────────────────────────

let md = "";

md += `# DREAMengin Repository State\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `---\n\n`;

// ═══════════════════════════════════════════════════════════════════════════════
// MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════════

md += `# MASTER INDEX\n\n`;
md += `Jump to any feature, subsection, or cross-cutting analysis directly.\n\n`;

const userFeatures   = FEATURES.filter(f => f.group === "user");
const systemFeatures = FEATURES.filter(f => f.group === "system");

md += `## User-Facing Features\n\n`;
for (const f of userFeatures) {
  md += `- [${f.name}](#${anchor(f.id)}) — ${f.desc}\n`;
  md += `  - [Pages](#${subAnchor(f.id, "pages")}) · [Components](#${subAnchor(f.id, "components")}) · [Lib](#${subAnchor(f.id, "lib")}) · [Hooks](#${subAnchor(f.id, "hooks")}) · [API Routes](#${subAnchor(f.id, "api")}) · [Types](#${subAnchor(f.id, "types")}) · [Styles](#${subAnchor(f.id, "styles")}) · [Migrations](#${subAnchor(f.id, "migrations")}) · [Tests](#${subAnchor(f.id, "tests")}) · [Dependencies](#${subAnchor(f.id, "deps")})\n`;
}

md += `\n## System & Infrastructure\n\n`;
for (const f of systemFeatures) {
  md += `- [${f.name}](#${anchor(f.id)}) — ${f.desc}\n`;
  md += `  - [Pages](#${subAnchor(f.id, "pages")}) · [Components](#${subAnchor(f.id, "components")}) · [Lib](#${subAnchor(f.id, "lib")}) · [Hooks](#${subAnchor(f.id, "hooks")}) · [API Routes](#${subAnchor(f.id, "api")}) · [Types](#${subAnchor(f.id, "types")}) · [Styles](#${subAnchor(f.id, "styles")}) · [Migrations](#${subAnchor(f.id, "migrations")}) · [Tests](#${subAnchor(f.id, "tests")}) · [Dependencies](#${subAnchor(f.id, "deps")})\n`;
}

md += `\n## Cross-Cutting Analysis\n\n`;
md += `- [All API Routes (grouped)](#all-api-routes)\n`;
md += `- [All React Components](#all-components)\n`;
md += `- [All Hooks (every export)](#all-hooks)\n`;
md += `- [All Type Files](#all-types)\n`;
md += `- [All Migrations](#all-migrations)\n`;
md += `- [Supabase Usage](#supabase-usage)\n`;
md += `- [State: Zustand / Context](#state)\n`;
md += `- [Event Bus Subscribers & Emitters](#event-bus)\n`;
md += `- [Runtime Registries](#runtime-registries)\n`;
md += `- [File Connections (import graph)](#file-connections)\n`;
md += `- [Dynamic Imports](#dynamic-imports)\n`;
md += `- [Circular Dependencies](#circular-deps)\n`;
md += `- [Coupling Scores (Top 30)](#coupling-scores)\n`;
md += `- [System Risk Report](#risk-report)\n`;
md += `- [Raw File Tree](#raw-tree)\n`;

md += `\n---\n\n`;

// ═══════════════════════════════════════════════════════════════════════════════
// PER-FEATURE FULL SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function renderFeatureSection(f) {
  const fx = getFeatureFiles(f);
  let s = "";

  s += `<a name="${anchor(f.id)}"></a>\n\n`;
  s += `# ${f.name}\n\n`;
  s += `> **${f.desc}**\n\n`;

  // ── PAGES ──────────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "pages")}"></a>\n\n`;
  s += `## Pages\n\n`;
  if (fx.pages.length) {
    for (const p of fx.pages.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No page routes for this feature._\n`;
  }
  s += `\n`;

  // ── COMPONENTS ─────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "components")}"></a>\n\n`;
  s += `## Components\n\n`;
  if (fx.components.length) {
    // Sub-group by immediate directory
    const byDir = {};
    for (const p of fx.components.sort()) {
      const parts = p.split("/");
      const dir = parts.slice(0, Math.min(3, parts.length - 1)).join("/");
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
  s += `<a name="${subAnchor(f.id, "lib")}"></a>\n\n`;
  s += `## Lib / Logic\n\n`;
  if (fx.lib.length) {
    const byDir = {};
    for (const p of fx.lib.sort()) {
      const parts = p.split("/");
      const dir = parts.slice(0, Math.min(3, parts.length - 1)).join("/");
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
  s += `<a name="${subAnchor(f.id, "hooks")}"></a>\n\n`;
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
  s += `<a name="${subAnchor(f.id, "api")}"></a>\n\n`;
  s += `## API Routes\n\n`;
  if (fx.apis.length) {
    for (const p of fx.apis.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No API routes for this feature._\n`;
  }
  s += `\n`;

  // ── TYPES ──────────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "types")}"></a>\n\n`;
  s += `## Types\n\n`;
  if (fx.types.length) {
    for (const p of fx.types.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No type files for this feature._\n`;
  }
  s += `\n`;

  // ── STYLES ─────────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "styles")}"></a>\n\n`;
  s += `## Styles\n\n`;
  if (fx.styles.length) {
    for (const p of fx.styles.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No style files for this feature._\n`;
  }
  s += `\n`;

  // ── MIGRATIONS ─────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "migrations")}"></a>\n\n`;
  s += `## Database Migrations\n\n`;
  if (fx.migrations.length) {
    for (const p of fx.migrations.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No migrations for this feature._\n`;
  }
  s += `\n`;

  // ── TESTS ──────────────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "tests")}"></a>\n\n`;
  s += `## Tests\n\n`;
  if (fx.tests.length) {
    for (const p of fx.tests.sort()) s += `- \`${p}\`\n`;
  } else {
    s += `_No tests matched for this feature._\n`;
  }
  s += `\n`;

  // ── DEPENDENCIES ───────────────────────────────────────────────────────────
  s += `<a name="${subAnchor(f.id, "deps")}"></a>\n\n`;
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

  // ── SPECIAL CAPABILITIES USED IN THIS FEATURE ──────────────────────────────
  const caps = [];
  if (fx.supabaseFiles.length)  caps.push(`**Supabase** (${fx.supabaseFiles.length} files)`);
  if (fx.eventBusFiles.length)  caps.push(`**Event Bus** (${fx.eventBusFiles.length} files)`);
  if (fx.zustandFiles.length)   caps.push(`**Zustand** (${fx.zustandFiles.length} files)`);
  if (fx.contextFiles.length)   caps.push(`**React Context** (${fx.contextFiles.length} files)`);
  if (fx.registryFiles.length)  caps.push(`**Runtime Registry** (${fx.registryFiles.length} files)`);

  if (caps.length) {
    s += `## Special Capabilities\n\n`;
    s += caps.join(" · ") + `\n\n`;

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

// Render user-facing features
md += `# User-Facing Features\n\n---\n\n`;
for (const f of userFeatures) md += renderFeatureSection(f);

// Render system features
md += `# System & Infrastructure\n\n---\n\n`;
for (const f of systemFeatures) md += renderFeatureSection(f);

// ═══════════════════════════════════════════════════════════════════════════════
// CROSS-CUTTING SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// ── ALL API ROUTES ────────────────────────────────────────────────────────────
md += `<a name="all-api-routes"></a>\n\n`;
md += `# All API Routes\n\n`;
const allAPIs = allFiles.filter(isAPIRoute).sort();
const apiGroups = {};
for (const f of allAPIs) {
  const group = f.replace("app/api/", "").split("/")[0];
  if (!apiGroups[group]) apiGroups[group] = [];
  apiGroups[group].push(f);
}
for (const [group, routes] of Object.entries(apiGroups).sort()) {
  md += `## \`/api/${group}\`\n\n`;
  for (const r of routes) md += `- \`${r}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ── ALL REACT COMPONENTS ──────────────────────────────────────────────────────
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

// ── ALL HOOKS ─────────────────────────────────────────────────────────────────
md += `<a name="all-hooks"></a>\n\n`;
md += `# All Hooks\n\n`;
for (const [file, d] of Object.entries(fileData).sort()) {
  if (!d.hookExports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const h of d.hookExports) md += `- \`${h}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ── ALL TYPES ─────────────────────────────────────────────────────────────────
md += `<a name="all-types"></a>\n\n`;
md += `# All Type Files\n\n`;
const typeFiles = allFiles.filter(isTypeFile).sort();
for (const f of typeFiles) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── ALL MIGRATIONS ────────────────────────────────────────────────────────────
md += `<a name="all-migrations"></a>\n\n`;
md += `# All Database Migrations\n\n`;
const allMigrations = allFiles.filter(isMigration).sort();
for (const f of allMigrations) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── SUPABASE USAGE ────────────────────────────────────────────────────────────
md += `<a name="supabase-usage"></a>\n\n`;
md += `# Supabase Usage\n\n`;
const supFiles = codeFiles.filter(f => fileData[f].usesSupabase && !isTestFile(f)).sort();
for (const f of supFiles) md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── STATE ─────────────────────────────────────────────────────────────────────
md += `<a name="state"></a>\n\n`;
md += `# State: Zustand / Context\n\n`;
md += `## Zustand Stores\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesZustand && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n## React Context Providers & Consumers\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesContext && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── EVENT BUS ─────────────────────────────────────────────────────────────────
md += `<a name="event-bus"></a>\n\n`;
md += `# Event Bus Subscribers & Emitters\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesEventBus && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── RUNTIME REGISTRIES ────────────────────────────────────────────────────────
md += `<a name="runtime-registries"></a>\n\n`;
md += `# Runtime Registries\n\n`;
for (const f of codeFiles.filter(f => fileData[f].usesRuntimeRegistry && !isTestFile(f)).sort())
  md += `- \`${f}\`\n`;
md += `\n---\n\n`;

// ── FILE CONNECTIONS ──────────────────────────────────────────────────────────
md += `<a name="file-connections"></a>\n\n`;
md += `# File Connections (import graph)\n\n`;
for (const [file, d] of Object.entries(fileData).sort()) {
  if (!d.imports.length && !d.dynamicImports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const imp of d.imports)        md += `- imports: \`${imp}\`\n`;
  for (const imp of d.dynamicImports) md += `- dynamic: \`${imp}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ── DYNAMIC IMPORTS ───────────────────────────────────────────────────────────
md += `<a name="dynamic-imports"></a>\n\n`;
md += `# Dynamic Imports\n\n`;
for (const [file, d] of Object.entries(fileData).sort()) {
  if (!d.dynamicImports.length) continue;
  md += `## \`${file}\`\n\n`;
  for (const imp of d.dynamicImports) md += `- \`${imp}\`\n`;
  md += `\n`;
}
md += `---\n\n`;

// ── CIRCULAR DEPENDENCIES ─────────────────────────────────────────────────────
md += `<a name="circular-deps"></a>\n\n`;
md += `# Circular Dependencies\n\n`;
if (circularDeps.length) {
  for (const c of circularDeps) md += `- ⚠ ${c}\n`;
} else {
  md += `_No circular dependencies detected._\n`;
}
md += `\n---\n\n`;

// ── COUPLING SCORES ───────────────────────────────────────────────────────────
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

// ── RISK REPORT ───────────────────────────────────────────────────────────────
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

// ── RAW FILE TREE ─────────────────────────────────────────────────────────────
md += `<a name="raw-tree"></a>\n\n`;
md += `# Raw File Tree\n\n\`\`\`text\n`;
function buildTree(dir, prefix = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !shouldIgnore(e.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
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
console.log("✓ REPO_STATE.md generated — feature-first, fully indexed, all subsections present");
