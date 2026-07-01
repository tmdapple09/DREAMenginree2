import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

type SourceFile = {
  path: string;
  ext: string;
  root: string;
  readable: boolean;
  text: string;
  lines: number;
};

type SectionRule = {
  number: number;
  title: string;
  plainEnglish: string;
  userExperience: string;
  keyInteractionModel?: string[];
  primaryPaths: RegExp[];
  supportingPaths: RegExp[];
  keywords: string[];
  maxFiles: number;
  rootCaps?: Record<string, number>;
  excludedPaths?: RegExp[];
};

type FileMatch = {
  file: SourceFile;
  score: number;
  reasons: string[];
};

type ProductSectionOutput = {
  number: number;
  title: string;
  markdown: string;
  matchedFiles: number;
  sourceLines: number;
  routes: number;
  apis: number;
  components: number;
  hooks: number;
  files: string[];
};

type ProductSectionsResult = {
  generatedAt: string;
  trackedFiles: number;
  sections: ProductSectionOutput[];
};

export type ProductSectionStats = {
  number: number;
  title: string;
  matchedFiles: number;
  sourceLines: number;
  routes: number;
  apis: number;
  components: number;
  hooks: number;
};

export type ProductReadmeResult = {
  markdown: string;
  stats: ProductSectionStats[];
};

const SOURCE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".scss",
  ".sql",
  ".md",
  ".json",
  ".yml",
  ".yaml",
]);

const CODE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);

const GLOBAL_EXCLUDED_PATHS: RegExp[] = [
  /^node_modules\
  /^\.next\
  /^out\
  /^dist\
  /^coverage\
  /^playwright-report\
  /^test-results\
  /^\.turbo\
  /^\.vercel\
  /^build-memory\
  /^\.ci\
  /\.tsbuildinfo$/,
  /^README\.md$/,
  /^scripts\/generate-readme\.ts$/,
  /^scripts\/readme-autosync\.ts$/,
  /(^|\/)Agents-MUST-READ-ARCHITECTURE\.md$/,
  /^docs\/issue-.*\.md$/,
  /\.(png|jpe?g|gif|webp|mp4|mov|webm|avi|mkv|wasm)$/i,
];

const META_ROOTS = new Set([".github", "agents", "docs", "research", "scripts", "tests"]);

const PRODUCT_SECTION_START = "<!-- DREAMENGIN_PRODUCT_README:START -->";
const PRODUCT_SECTION_END = "<!-- DREAMENGIN_PRODUCT_README:END -->";
const MD_DASH = "\u2014";
const MD_ARROW = "\u2190";
const MOJIBAKE_REPLACEMENTS: Array<[string, string]> = [
  ["\u00e2\u0080\u0094", MD_DASH],
  ["\u00e2\u0086\u0090", MD_ARROW],
  ["\u00e2\u0080\u0099", "'"],
  ["\u00e2\u0080\u009c", '"'],
  ["\u00e2\u0080\u009d", '"'],
];

export const PRODUCT_SECTIONS: SectionRule[] = [
  {
    number: 4,
    title: "Tech Stack & Monorepo Layout",
    plainEnglish:
      "This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase setup, and major folders that make the product ship as one web-native system.",
    userExperience:
      "Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.",
    primaryPaths: [
      /^package\.json$/,
      /^pnpm-workspace\.yaml$/,
      /^next\.config\.mjs$/,
      /^tsconfig.*\.json$/,
      /^tailwind\.config\.ts$/,
      /^eslint\.config\.mjs$/,
      /^postcss\.config\./,
      /^app\/layout\.tsx$/,
      /^app\/page\.tsx$/,
      /^app\/globals\.css$/,
      /^app\/[^/]+\/page\.tsx$/,
      /^components\/providers\
      /^components\/runtime\
      /^engine\/runtime\/index\.ts$/,
      /^engine\/runtime\/moduleRegistry\.ts$/,
      /^engins\/.*\.tsx$/,
      /^styles\/(globals|theme|home-dream|dream-shell|view-transitions)\.css$/,
      /^supabase\/config\.ts$/,
      /^supabase\/client\/client\.ts$/,
      /^supabase\/client\/safeGetUser\.ts$/,
      /^supabase\/server\/serverClient\.ts$/,
      /^\.github\/workflows\/(readme-autosync|export-src-only|preflight|dreamengin-preflight|codeql|vercel-deploy)\.yml$/,
    ],
    supportingPaths: [/^types\
    keywords: ["next", "typescript", "supabase", "pnpm", "workflow", "app router"],
    maxFiles: 80,
    rootCaps: {
      ".github": 8,
      app: 18,
      components: 14,
      engine: 10,
      engins: 12,
      styles: 8,
      supabase: 6,
      types: 8,
      config: 6,
      hooks: 6,
      utils: 4,
    },
    excludedPaths: [/^supabase\/migrations\
  },
  {
    number: 5,
    title: "The Engins and DayDreams",
    plainEnglish:
      "Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.",
    userExperience:
      "A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, ForgeEngin, and their DayDream wrappers.",
    primaryPaths: [
      /^engins\/engin\.[A-Za-z0-9]+Engin\.tsx$/,
      /^engins\/dream\.ForgeEngin\.tsx$/,
      /^engins\/rulesets\
      /^engins\/contentengin\
      /^engins\/gameengin\
      /^engins\/forgeengin\
      /^engins\/renderengin\
      /^app\/engines\
      /^app\/daydream\/(brand|code|create|forge|game|games|lab|music)(\/|$)/,
      /^daydreams\
      /^components\/engines\
      /^components\/daydream\
    ],
    supportingPaths: [/^engine\/engin-runtime\
    keywords: ["engin", "daydream", "ruleset", "studio", "workspace"],
    maxFiles: 110,
    rootCaps: {
      app: 28,
      components: 28,
      daydreams: 12,
      engine: 16,
      engins: 46,
    },
  },
  {
    number: 6,
    title: "Dual Runtimes",
    plainEnglish:
      "Dual runtimes are the split execution model that lets DREAMengin keep two active product worlds available at once instead of replacing one page with another. The runtime layer tracks which world is active, which surface is dominant, and how state, snapshots, and handoffs move between HomeDream, DreamSpace, Engins, and shared surfaces.",
    userExperience:
      "Users feel this as a two-lane workspace: one side can keep HomeDream, DreamSpace, a studio, preview, editor, remote surface, or companion panel alive while the other side changes. Switching context should preserve the active runtime instead of making the user start over.",
    keyInteractionModel: [
      "DualRuntimeContainer owns the user-facing split runtime shell and renders runtime worlds through RuntimeView and RuntimeShell.",
      "The runtime helpers expose world changes, HomeDream activation, DreamSpace activation, surface activation, focus keys, movement, and dominant-runtime swaps.",
      "DreamDmBar is the control layer that should be able to drive these runtime changes without acting like a separate app destination.",
      "The important user behavior is continuity: open, swap, collapse, expand, or refocus a runtime surface without losing the state the user was already carrying.",
    ],
    primaryPaths: [
      /^engine\/runtime\/dualRuntime/,
      /^engine\/runtime\/useDualRuntime/,
      /^components\/runtime\/dream\.DualRuntimeContainer\.tsx$/,
      /^components\/runtime\/dream\.RuntimeView\.tsx$/,
      /^components\/runtime\/dream\.shell\.RuntimeShell\.tsx$/,
      /^app\/dreamdmbar\/dualruntime\
    ],
    supportingPaths: [
      /^engine\/vm\
      /^engine\/runtime\/iEngine\.ts$/,
      /^engine\/runtime\/dreamOSBus\.ts$/,
      /^engine\/runtime\/snapshotFingerprint\.ts$/,
      /^engine\/runtime\/madMaxiSnapshotBridge\.ts$/,
    ],
    keywords: ["dualruntime", "dual runtime", "runtime bridge", "snapshot", "handoff"],
    maxFiles: 40,
    rootCaps: {
      app: 3,
      components: 5,
      engine: 32,
    },
  },
  {
    number: 7,
    title: "Shared Dreams",
    plainEnglish:
      "Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.",
    userExperience:
      "Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.",
    primaryPaths: [
      /^engine\/sharedDream/,
      /^components\/shared-dream\
      /^app\/api\/shared-dream\
      /^app\/api\/dreams\
      /^components\/dreams\/dream\.shell\.SharedDreamShell\.tsx$/,
      /^hooks\/useSharedDream/,
      /^daydreams\/shared\
      /^supabase\/migrations\/.*shared_dream/i,
    ],
    supportingPaths: [
      /^engine\/runtime\/useSharedEnginChannel\.ts$/,
      /^engine\/collaboration\
      /^supabase\/migrations\/.*dream_windows/i,
      /^supabase\/migrations\/.*daydream_network/i,
    ],
    keywords: ["shared dream", "sharedDream", "presence", "collaboration"],
    maxFiles: 50,
    rootCaps: {
      app: 8,
      components: 10,
      daydreams: 4,
      engine: 10,
      hooks: 4,
      supabase: 8,
    },
  },
  {
    number: 8,
    title: `DreamR ${MD_DASH} Human Media`,
    plainEnglish:
      "DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.",
    userExperience:
      "Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.",
    primaryPaths: [
      /^dreamr\
      /^app\/dreamr\
      /^app\/api\/dreamr\
      /^components\/dreamr\
      /^app\/dreamdmbar\/_components\/dreamr\
    ],
    supportingPaths: [
      /^app\/profile\
      /^app\/view-profile\
      /^app\/edit-profiledream\
      /^app\/api\/feed\
      /^components\/feed\
      /^components\/dream\.HomeFeed\.tsx$/,
      /^components\/dream\.FeedCard\.tsx$/,
    ],
    keywords: ["dreamr", "feed", "human media", "creator", "profile"],
    maxFiles: 70,
    rootCaps: {
      app: 20,
      components: 18,
      dreamr: 32,
      supabase: 4,
    },
  },
  {
    number: 9,
    title: "The Shop",
    plainEnglish:
      "The Shop is the owned storefront area for a user or creator. It covers products, services, offers, carts, and purchase-related surfaces tied to a person or brand.",
    userExperience:
      "Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.",
    primaryPaths: [
      /^app\/shop\
      /^app\/api\/shop\
      /^engine\/shop\
      /^types\/shop/i,
      /^components\/shop\
      /^supabase\/migrations\/.*shop/i,
    ],
    supportingPaths: [],
    keywords: ["shop", "storefront", "shop listing", "seller"],
    maxFiles: 20,
    rootCaps: {
      app: 8,
      components: 4,
      engine: 4,
      supabase: 4,
      types: 2,
    },
  },
  {
    number: 10,
    title: "The Marketplace",
    plainEnglish:
      "The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.",
    userExperience:
      "Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.",
    primaryPaths: [
      /^app\/marketplace\
      /^app\/api\/marketplace\
      /^components\/marketplace\
      /^engine\/marketplace\
      /^types\/marketplace\.ts$/,
      /^supabase\/migrations\/.*marketplace/i,
    ],
    supportingPaths: [/^components\/panels\/dream\.panel\.MarketplacePanel\.tsx$/],
    keywords: ["marketplace", "market listing", "contact request"],
    maxFiles: 24,
    rootCaps: {
      app: 10,
      components: 6,
      engine: 4,
      supabase: 3,
      types: 2,
    },
  },
  {
    number: 11,
    title: "Ads & User Ads",
    plainEnglish:
      "Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.",
    userExperience:
      "Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.",
    primaryPaths: [
      /^app\/ads\
      /^app\/api\/ads\
      /^components\/ads\
      /^types\/ads\.ts$/,
      /^supabase\/migrations\/.*ads/i,
    ],
    supportingPaths: [
      /^components\/engines\/brand\/panels\/.*Campaign/i,
      /^app\/engines\/brand\/campaigns\
    ],
    keywords: ["ads", "advertising", "sponsor", "promotion", "campaign"],
    maxFiles: 24,
    rootCaps: {
      app: 10,
      components: 8,
      supabase: 3,
      types: 2,
    },
  },
  {
    number: 12,
    title: "The DreamDmBar (dreamdmbar/)",
    plainEnglish:
      "The DreamDmBar is the persistent interaction rail for DREAMengin: messaging, search, notifications, quick actions, module intent, DreamR, HomeDream, DreamSpace, and runtime control live around this bar instead of being scattered across isolated pages.",
    userExperience:
      "Users experience DreamDmBar as the always-near control surface: tap for immediate action, drag or swipe the gold control to expand, collapse, split, or reveal context, keep DM/search/notification state alive, and jump between HomeDream, DreamSpace, DreamR, messages, panels, and active Engins without losing the runtime they were using.",
    keyInteractionModel: [
      "The visible bar is not just navigation. It is an input surface that interprets gold tap, release, drag, swipe, velocity, snap points, and split ratio.",
      "barInteractions owns the physical feel of the bar: tap-vs-release detection, pointer velocity, snap-to-split behavior, collapse decisions, and gold-tap action resolution.",
      "DreamSystemContext is the shared context that lets the bar coordinate active surfaces, module state, panels, and runtime-adjacent decisions.",
      "The bar carries communication state through useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useMessagingCore, and notification hooks.",
      "The bar carries navigation and command state through useDreamSearch, useDreamBarContext, useModuleBarIntent, command palette connections, and panel connections.",
      "The bar is tied to runtime behavior through the DreamDMBar dualruntime, homedream, and dreamspace routes plus DualRuntimeContainer, RuntimeView, HomeDreamRegion, and DreamSpaceRegion connections.",
      "The README must describe this as a touch-first runtime control surface, not as a generic toolbar or a page with messaging links.",
    ],
    primaryPaths: [
      /^dreamdmbar\/runtime\/DreamSystemContext\.tsx$/,
      /^dreamdmbar\/runtime\/barInteractions\.ts$/,
      /^dreamdmbar\
      /^app\/dreamdmbar\
      /^components\/runtime\/dream\.DualRuntimeContainer\.tsx$/,
      /^components\/runtime\/dream\.RuntimeView\.tsx$/,
      /^components\/runtime\/dream\.shell\.RuntimeShell\.tsx$/,
      /^engine\/generated\/dreamdmbar\.ts$/,
    ],
    supportingPaths: [
      /^engine\/runtime\/dualRuntime/,
      /^engine\/runtime\/useDualRuntime/,
      /^engine\/runtime\/dualRuntimeBridge\.ts$/,
      /^components\/home\/dream\.bar\.PersistentDreamBar\.tsx$/,
      /^components\/home\/dream\.bar\.GlobalDreamBar\.tsx$/,
      /^components\/home\/dream\.ActiveModuleSurface\.tsx$/,
      /^components\/panels\/dream\.panel\./,
      /^app\/messages\
      /^app\/api\/messages\
      /^components\/dream\.CommandPalette\.tsx$/,
      /^components\/dream\.NotificationCenter\.tsx$/,
    ],
    keywords: ["dreamdmbar", "dream dm", "runtime", "dualruntime", "notification", "command", "split", "gold"],
    maxFiles: 70,
    rootCaps: {
      app: 20,
      components: 18,
      dreamdmbar: 30,
      engine: 8,
    },
  },
  {
    number: 13,
    title: "Messaging",
    plainEnglish:
      "Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.",
    userExperience:
      "Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.",
    primaryPaths: [
      /^app\/messages\
      /^app\/api\/messages\
      /^components\/messaging\
      /^dreamdmbar\/hooks\/useDreamDM(Conversations|Messages|Draft)/,
      /^dreamdmbar\/hooks\/useMessagingCore\.ts$/,
      /^dreamdmbar\/notifications\
      /^app\/api\/drafts\
      /^supabase\/migrations\/.*messages/i,
      /^supabase\/migrations\/.*conversations/i,
      /^supabase\/migrations\/.*drafts/i,
    ],
    supportingPaths: [
      /^app\/settings\/notifications\
      /^app\/api\/settings\/notifications\
      /^components\/dream\.MessagesClient\.tsx$/,
      /^components\/dream\.NotificationCenter\.tsx$/,
    ],
    keywords: ["message", "conversation", "draft", "notification", "inbox"],
    maxFiles: 45,
    rootCaps: {
      app: 18,
      components: 6,
      dreamdmbar: 12,
      supabase: 5,
    },
  },
  {
    number: 14,
    title: "HomeDream",
    plainEnglish:
      "HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.",
    userExperience:
      "Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.",
    primaryPaths: [
      /^app\/homedream\
      /^components\/home\
      /^app\/dreamdmbar\/_components\/HomeDreamRegion\.tsx$/,
      /^styles\/home-dream\.css$/,
      /^engins\/rulesets\/homedream\
      /^engine\/generated\/homedream\.ts$/,
    ],
    supportingPaths: [
      /^components\/dream\.HomeFeed\.tsx$/,
      /^components\/dream\.FeedCard\.tsx$/,
      /^app\/api\/home-layout\
    ],
    keywords: ["homedream", "home dream", "home feed", "launcher"],
    maxFiles: 35,
    rootCaps: {
      app: 6,
      components: 18,
      engine: 2,
      engins: 6,
      styles: 2,
    },
  },
  {
    number: 15,
    title: "DreamSpace",
    plainEnglish:
      "DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.",
    userExperience:
      "Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.",
    primaryPaths: [
      /^components\/dreams\/dreamsurface\.dreamspace\.tsx$/,
      /^app\/dreamdmbar\/_components\/DreamSpaceRegion\.tsx$/,
      /^app\/dreamdmbar\/dreamspace\
      /^app\/dreamspace\
      /^components\/spatial\
      /^coresurfaces\
      /^daydreams\
      /^components\/daydream\
      /^app\/daydream\
    ],
    supportingPaths: [/^components\/runtime\
    keywords: ["dreamspace", "dream space", "spatial", "daydream shell"],
    maxFiles: 80,
    rootCaps: {
      app: 28,
      components: 28,
      coresurfaces: 8,
      daydreams: 10,
      engine: 4,
    },
  },
  {
    number: 16,
    title: "Dreams (Widgets / Windows / Surfaces)",
    plainEnglish:
      "Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.",
    userExperience:
      "Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.",
    primaryPaths: [
      /^components\/dreams\
      /^components\/widgets\
      /^components\/dream\.widget/i,
      /^components\/dream\.DragToAnchorClose\.tsx$/,
      /^engine\/dream-window\
      /^engine\/dreams\
      /^types\/dream-window\.ts$/,
      /^types\/widget/i,
      /^app\/api\/dream-windows\
      /^app\/settings\/dreams\
      /^app\/settings\/widgets\
    ],
    supportingPaths: [/^components\/dream\.FeedCard\.tsx$/],
    keywords: ["dream window", "widget", "surface", "dreamsurface", "draggable"],
    maxFiles: 80,
    rootCaps: {
      app: 8,
      components: 34,
      engine: 20,
      types: 10,
    },
  },
  {
    number: 17,
    title: "User-Facing Modularity",
    plainEnglish:
      "User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.",
    userExperience:
      "Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.",
    primaryPaths: [
      /^engine\/runtime\/moduleRegistry\.ts$/,
      /^engine\/runtime\/dropTargetRegistry\.ts$/,
      /^types\/module-manifest\.ts$/,
      /^components\/runtime\
      /^components\/panels\
      /^components\/home\/dream\.ActiveModuleSurface\.tsx$/,
      /^dreamdmbar\/hooks\/useModuleBarIntent\.ts$/,
    ],
    supportingPaths: [
      /^components\/engines\/shared\
      /^components\/dreams\
      /^components\/draggable\
    ],
    keywords: ["module", "manifest", "panel", "registry", "launch"],
    maxFiles: 70,
    rootCaps: {
      components: 42,
      dreamdmbar: 3,
      engine: 10,
      types: 4,
    },
  },
  {
    number: 18,
    title: "Custom Engins",
    plainEnglish:
      "Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.",
    userExperience:
      "Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.",
    primaryPaths: [
      /^engins\/rulesets\
      /^engins\/forgeengin\/forge\
      /^engins\/gameengin\/cartridges\
      /^engins\/.*manifest/i,
      /^engine\/runtime\/enginWorkflowRegistry\.ts$/,
      /^engine\/engin-runtime\
      /^types\/module-manifest\.ts$/,
    ],
    supportingPaths: [/^app\/engines\
    keywords: ["custom engin", "ruleset", "manifest", "capability", "registry"],
    maxFiles: 90,
    rootCaps: {
      app: 18,
      components: 16,
      engine: 28,
      engins: 42,
      types: 3,
    },
  },
  {
    number: 19,
    title: "Full Website Customizability",
    plainEnglish:
      "Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.",
    userExperience:
      "Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.",
    primaryPaths: [
      /^app\/settings\
      /^app\/edit-profiledream\
      /^app\/view-profile\
      /^app\/profile\
      /^components\/profile\
      /^components\/providers\/dream\.ThemeProvider\.tsx$/,
      /^components\/dream\.ThemeApplicator\.tsx$/,
      /^components\/ui-system\/theme-engine\.ts$/,
      /^components\/ui-system\/CustomizeModeContext\.tsx$/,
      /^styles\
      /^engins\/engin\.BrandingEngin\.tsx$/,
    ],
    supportingPaths: [
      /^app\/api\/settings\
      /^components\/customize\
      /^components\/dream\.Profile/,
    ],
    keywords: ["appearance", "theme", "profile", "customize", "branding"],
    maxFiles: 70,
    rootCaps: {
      app: 28,
      components: 24,
      engins: 4,
      styles: 8,
    },
  },
  {
    number: 20,
    title: "Backend, System, Core & CoreSurfaces",
    plainEnglish:
      "Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.",
    userExperience:
      "Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.",
    primaryPaths: [
      /^app\/api\
      /^supabase\/(config|client|server|auth|migrations|schema)/,
      /^engine\
      /^coresurfaces\
      /^types\
      /^utils\
      /^config\
    ],
    supportingPaths: [/^app\/auth\
    keywords: ["api", "backend", "supabase", "core", "system", "auth"],
    maxFiles: 100,
    rootCaps: {
      app: 45,
      components: 5,
      config: 6,
      coresurfaces: 8,
      engine: 24,
      supabase: 20,
      types: 10,
      utils: 4,
    },
  },
];

function normalizePath(value: string): string {
  return value.trim().replace(/\\/g, "/").replace(/^\.\
}

function getRoot(filePath: string): string {
  const normalized = normalizePath(filePath);
  if (normalized.startsWith(".github/")) return ".github";
  return normalized.split("/")[0] || ".";
}

function isGloballyExcluded(filePath: string): boolean {
  return GLOBAL_EXCLUDED_PATHS.some((pattern) => pattern.test(filePath));
}

function isSectionExcluded(filePath: string, section: SectionRule): boolean {
  return Boolean(section.excludedPaths?.some((pattern) => pattern.test(filePath)));
}

function isReadableSource(filePath: string): boolean {
  return SOURCE_EXTENSIONS.has(path.extname(filePath));
}

function isCodeFile(file: SourceFile): boolean {
  return CODE_EXTENSIONS.has(file.ext);
}

function readFileSafe(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

function loadTrackedFiles(inventoryPath: string): string[] {
  const raw = fs.readFileSync(inventoryPath, "utf8");

  return raw
    .split(/\r?\n/g)
    .map(normalizePath)
    .filter(Boolean)
    .filter((file) => !isGloballyExcluded(file));
}

function loadSourceFiles(files: string[]): SourceFile[] {
  return files.map((filePath) => {
    const normalized = normalizePath(filePath);
    const ext = path.extname(normalized);
    const readable = isReadableSource(normalized);
    const text = readable ? readFileSafe(normalized) : "";
    const lines = text ? text.split(/\r?\n/g).length : 0;

    return {
      path: normalized,
      ext,
      root: getRoot(normalized),
      readable,
      text,
      lines,
    };
  });
}

function normalizedNeedle(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pathHasKeyword(filePath: string, keyword: string): boolean {
  const normalizedPath = normalizedNeedle(filePath);
  const normalizedKeyword = normalizedNeedle(keyword);

  if (!normalizedKeyword || normalizedKeyword.length < 3) return false;

  const pathTokens = new Set(normalizedPath.split(/\s+/g).filter(Boolean));
  const keywordTokens = normalizedKeyword.split(/\s+/g).filter(Boolean);

  if (keywordTokens.length === 1) {
    return pathTokens.has(keywordTokens[0]);
  }

  return normalizedPath.includes(normalizedKeyword);
}

function textHasKeyword(text: string, keyword: string): boolean {
  const normalizedKeyword = normalizedNeedle(keyword);

  if (!normalizedKeyword || normalizedKeyword.length < 4) return false;

  if (normalizedKeyword.includes(" ")) {
    return normalizedNeedle(text).includes(normalizedKeyword);
  }

  return new RegExp(`\\b${escapeRegExp(normalizedKeyword)}\\b`, "i").test(text);
}

function isMetaFileForSection(file: SourceFile, section: SectionRule): boolean {
  if (section.number === 4) return false;
  if (section.number === 20 && file.root !== ".github") return false;

  return META_ROOTS.has(file.root);
}

function scoreFile(file: SourceFile, section: SectionRule): FileMatch | null {
  if (isSectionExcluded(file.path, section)) return null;
  if (isMetaFileForSection(file, section)) return null;

  let score = 0;
  const reasons: string[] = [];

  for (const pattern of section.primaryPaths) {
    if (pattern.test(file.path)) {
      score += 100;
      reasons.push("primary path");
      break;
    }
  }

  for (const pattern of section.supportingPaths) {
    if (pattern.test(file.path)) {
      score += 55;
      reasons.push("supporting path");
      break;
    }
  }

  if (score <= 0) return null;

  for (const keyword of section.keywords) {
    if (pathHasKeyword(file.path, keyword)) {
      score += 22;
      reasons.push(`path keyword: ${keyword}`);
    }
  }

  if (file.text) {
    for (const keyword of section.keywords) {
      if (textHasKeyword(file.text, keyword)) score += 4;
    }
  }

  if (file.root === "app" && /^app\/.+\/page\.tsx?$/.test(file.path)) score += 8;
  if (file.root === "app" && /^app\/api\/.+\/route\.tsx?$/.test(file.path)) score += 8;

  if (/\.(test|spec)\.(ts|tsx|js|jsx)$/.test(file.path)) score -= 35;
  if (file.root === "docs") score -= 35;
  if (file.root === "research") score -= 45;
  if (file.root === ".github" && section.number !== 4) score -= 80;

  if (score < 45) return null;

  return { file, score, reasons };
}

function applyRootCaps(matches: FileMatch[], section: SectionRule): FileMatch[] {
  if (!section.rootCaps) return matches.slice(0, section.maxFiles);

  const used: Record<string, number> = {};
  const capped: FileMatch[] = [];

  for (const match of matches) {
    const root = match.file.root;
    const cap = section.rootCaps[root];

    if (typeof cap === "number") {
      const current = used[root] ?? 0;
      if (current >= cap) continue;
      used[root] = current + 1;
    }

    capped.push(match);

    if (capped.length >= section.maxFiles) break;
  }

  return capped;
}

function getMatches(files: SourceFile[], section: SectionRule): FileMatch[] {
  const matches = files
    .map((file) => scoreFile(file, section))
    .filter((match): match is FileMatch => Boolean(match))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.file.lines !== a.file.lines) return b.file.lines - a.file.lines;
      return a.file.path.localeCompare(b.file.path);
    });

  return applyRootCaps(matches, section);
}

function extractRouteMethods(text: string): string[] {
  const methods = new Set<string>();

  for (const method of ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    const methodPattern = new RegExp(
      `export\\s+async\\s+function\\s+${method}\\b|export\\s+function\\s+${method}\\b|export\\s+const\\s+${method}\\b`
    );

    if (methodPattern.test(text)) methods.add(method);
  }

  return [...methods];
}

function extractRoutes(matches: FileMatch[]): string[] {
  const routes = new Set<string>();

  for (const { file } of matches) {
    const pageMatch = file.path.match(/^app\/(.+)\/page\.tsx?$/);

    if (pageMatch) {
      const route = `/${pageMatch[1]}`.replace(/\/\(.*?\)/g, "");
      routes.add(`${route} ${MD_ARROW} ${file.path}`);
    }

    const apiMatch = file.path.match(/^app\/api\/(.+)\/route\.tsx?$/);

    if (apiMatch) {
      const methods = extractRouteMethods(file.text);
      routes.add(`${methods.join("|") || "API"} /api/${apiMatch[1]} ${MD_ARROW} ${file.path}`);
    }
  }

  return [...routes].slice(0, 16);
}

function extractImports(matches: FileMatch[]): string[] {
  const imports = new Set<string>();

  for (const { file } of matches) {
    if (!isCodeFile(file)) continue;

    for (const match of file.text.matchAll(/from\s+["']([^"']+)["']/g)) {
      const source = match[1];

      if (!source.startsWith(".") && !source.startsWith("@/")) {
        imports.add(source);
      } else {
        imports.add(source.replace(/^@\
      }
    }
  }

  return [...imports].slice(0, 14);
}

function isLikelyConstant(name: string): boolean {
  return /^[A-Z0-9_]+$/.test(name);
}

function extractExports(matches: FileMatch[]): string[] {
  const exports = new Set<string>();

  for (const { file } of matches) {
    if (!isCodeFile(file)) continue;

    for (const match of file.text.matchAll(/export\s+(?:async\s+)?(?:function|const|class|type|interface)\s+([A-Za-z0-9_]+)/g)) {
      const name = match[1];
      if (isLikelyConstant(name)) continue;
      exports.add(`${name} ${MD_DASH} ${file.path}`);
    }

    if (/export\s+default\b/.test(file.text)) {
      const name = path.basename(file.path).replace(/\.(tsx?|jsx?|mjs|cjs)$/, "");
      exports.add(`default export ${MD_DASH} ${name} (${file.path})`);
    }
  }

  return [...exports].slice(0, 14);
}

function extractComponents(matches: FileMatch[]): string[] {
  const components = new Set<string>();

  for (const { file } of matches) {
    if (!file.path.endsWith(".tsx") && !file.path.endsWith(".jsx")) continue;

    const patterns = [
      /(?:export\s+default\s+function|export\s+function|function)\s+([A-Z][A-Za-z0-9_]*)\b/g,
      /(?:export\s+const|const)\s+([A-Z][A-Za-z0-9_]*)\s*=\s*(?:\([^)]*\)|[A-Za-z0-9_]+)\s*=>/g,
      /(?:export\s+const|const)\s+([A-Z][A-Za-z0-9_]*)\s*:\s*(?:React\.)?(?:FC|FunctionComponent)\b/g,
    ];

    for (const pattern of patterns) {
      for (const match of file.text.matchAll(pattern)) {
        const name = match[1];
        if (isLikelyConstant(name)) continue;
        components.add(`${name} ${MD_DASH} ${file.path}`);
      }
    }
  }

  return [...components].slice(0, 14);
}

function extractHooks(matches: FileMatch[]): string[] {
  const hooks = new Set<string>();

  for (const { file } of matches) {
    if (!isCodeFile(file)) continue;

    for (const match of file.text.matchAll(/\b(use[A-Z][A-Za-z0-9_]*)\b/g)) {
      hooks.add(`${match[1]} ${MD_DASH} ${file.path}`);
    }
  }

  return [...hooks].slice(0, 14);
}

function behaviorSignals(matches: FileMatch[]): string[] {
  const signals: Array<[string, RegExp]> = [
    ["runtime", /\bruntime\b|Runtime|EnginRuntime/g],
    ["state", /\buseState\b|\bstate\b|zustand|reducer/g],
    ["persistence", /localStorage|sessionStorage|supabase|persist|database|storage/g],
    ["events", /dispatchEvent|addEventListener|event|subscribe|broadcast/g],
    ["mobile touch", /touch|pointer|gesture|drag|swipe|pinch|mobile/g],
    ["rendering", /canvas|webgpu|render|viewport|mesh|shader|scene/g],
    ["auth", /auth|user|session|safeGetUser|login|logout/g],
    ["commerce", /shop|marketplace|ads|order|price|listing|sell/g],
  ];

  return signals
    .map(([name, pattern]) => {
      const count = matches.reduce((sum, match) => {
        pattern.lastIndex = 0;
        const textHit = pattern.test(match.file.text);
        pattern.lastIndex = 0;
        const pathHit = pattern.test(match.file.path);
        return sum + (textHit || pathHit ? 1 : 0);
      }, 0);

      return { name, count };
    })
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)
    .map((item) => `${item.name} ${MD_DASH} ${item.count} file hits`);
}

function formatList(items: string[], empty = "- None found."): string {
  if (!items.length) return empty;
  return items.map((item) => `- ${item}`).join("\n");
}

function fileSummary(match: FileMatch): string {
  const parts = [
    `\`${match.file.path}\``,
    `${match.file.lines} lines`,
    `score ${match.score}`,
  ];

  if (match.reasons.length) parts.push(match.reasons.slice(0, 2).join(", "));

  return `- ${parts.join(` ${MD_DASH} `)}`;
}

function keyInteractionMarkdown(section: SectionRule): string[] {
  if (!section.keyInteractionModel?.length) return [];

  return [
    "### Key interaction model",
    formatList(section.keyInteractionModel),
    "",
  ];
}

function sanitizeGeneratedMarkdown(value: string): string {
  return MOJIBAKE_REPLACEMENTS.reduce(
    (text, [bad, good]) => text.split(bad).join(good),
    value
  );
}

function sectionMarkdown(section: SectionRule, matches: FileMatch[]): ProductSectionOutput {
  const sourceLines = matches.reduce((sum, match) => sum + match.file.lines, 0);
  const routes = extractRoutes(matches);
  const imports = extractImports(matches);
  const exports = extractExports(matches);
  const components = extractComponents(matches);
  const hooks = extractHooks(matches);
  const signals = behaviorSignals(matches);
  const primaryFiles = matches.slice(0, Math.min(34, section.maxFiles));
  const supportingFiles = matches.slice(primaryFiles.length, Math.min(primaryFiles.length + 30, matches.length));

  const markdown = sanitizeGeneratedMarkdown([
    `## ${section.number}. ${section.title}`,
    "",
    "### Plain English",
    section.plainEnglish,
    "",
    "### What users experience",
    section.userExperience,
    "",
    ...keyInteractionMarkdown(section),
    "### Repo Evidence",
    `Matched focused repo evidence: ${matches.length} files, about ${sourceLines.toLocaleString()} readable source lines.`,
    "",
    "Behavior signals:",
    formatList(signals),
    "",
    "Routes and APIs:",
    formatList(routes),
    "",
    "Components:",
    formatList(components),
    "",
    "Hooks:",
    formatList(hooks),
    "",
    "Exports that define public behavior:",
    formatList(exports),
    "",
    "Import/export connections:",
    formatList(imports),
    "",
    "### Matched Files",
    "",
    "Primary files:",
    primaryFiles.map(fileSummary).join("\n") || "- None found.",
    "",
    "Supporting files:",
    supportingFiles.map(fileSummary).join("\n") || "- None found.",
    "",
  ].join("\n"));

  return {
    number: section.number,
    title: section.title,
    markdown,
    matchedFiles: matches.length,
    sourceLines,
    routes: routes.length,
    apis: matches.filter((match) => /^app\/api\/.+\/route\.tsx?$/.test(match.file.path)).length,
    components: components.length,
    hooks: hooks.length,
    files: matches.map((match) => match.file.path),
  };
}

export function buildProductSections(options: {
  changedFilesPath: string;
  maxLines?: number;
}): ProductSectionsResult {
  void options.maxLines;

  const trackedFiles = loadTrackedFiles(options.changedFilesPath);
  const sourceFiles = loadSourceFiles(trackedFiles);

  const sections = PRODUCT_SECTIONS.map((section) => {
    const matches = getMatches(sourceFiles, section);
    return sectionMarkdown(section, matches);
  });

  return {
    generatedAt: new Date().toISOString(),
    trackedFiles: trackedFiles.length,
    sections,
  };
}

export function renderProductSectionsMarkdown(result: ProductSectionsResult): string {
  return sanitizeGeneratedMarkdown([
    PRODUCT_SECTION_START,
    "",
    ...result.sections.map((section) => section.markdown.trim()),
    "",
    PRODUCT_SECTION_END,
    "",
  ].join("\n"));
}

export function buildProductReadmeSections(files: string[], lineBudget = 2800): ProductReadmeResult {
  void lineBudget;

  const trackedFiles = files
    .map(normalizePath)
    .filter(Boolean)
    .filter((file) => !isGloballyExcluded(file));

  const sourceFiles = loadSourceFiles(trackedFiles);

  const sections = PRODUCT_SECTIONS.map((section) => {
    const matches = getMatches(sourceFiles, section);
    return sectionMarkdown(section, matches);
  });

  return {
    markdown: sanitizeGeneratedMarkdown([
      PRODUCT_SECTION_START,
      "",
      ...sections.map((section) => section.markdown.trim()),
      "",
      PRODUCT_SECTION_END,
      "",
    ].join("\n")),
    stats: sections.map((section) => ({
      number: section.number,
      title: sanitizeGeneratedMarkdown(section.title),
      matchedFiles: section.matchedFiles,
      sourceLines: section.sourceLines,
      routes: section.routes,
      apis: section.apis,
      components: section.components,
      hooks: section.hooks,
    })),
  };
}

function parseArgs(argv: string[]): Record<string, string | boolean> {
  const args: Record<string, string | boolean> = {};

  for (let i = 0; i < argv.length; i++) {
    const value = argv[i];

    if (!value.startsWith("--")) continue;

    const key = value.slice(2);
    const next = argv[i + 1];

    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i++;
    }
  }

  return args;
}

function writeJson(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function runCli(): void {
  const args = parseArgs(process.argv.slice(2));
  const changedFilesPath = String(args["changed-files"] || "");
  const sectionsFile = String(args["sections-file"] || "");
  const markdownFile = String(args["markdown-file"] || "");
  const maxLines = args["max-lines"] ? Number(args["max-lines"]) : undefined;

  if (!changedFilesPath) {
    throw new Error("Missing required --changed-files path.");
  }

  const result = buildProductSections({
    changedFilesPath,
    maxLines,
  });

  if (sectionsFile) {
    writeJson(sectionsFile, {
      ...result,
      markdown: renderProductSectionsMarkdown(result),
    });
  }

  if (markdownFile) {
    fs.mkdirSync(path.dirname(markdownFile), { recursive: true });
    fs.writeFileSync(markdownFile, renderProductSectionsMarkdown(result));
  }

  console.log(JSON.stringify({
    trackedFiles: result.trackedFiles,
    sections: result.sections.map((section) => ({
      number: section.number,
      title: sanitizeGeneratedMarkdown(section.title),
      matchedFiles: section.matchedFiles,
      sourceLines: section.sourceLines,
      routes: section.routes,
      apis: section.apis,
      components: section.components,
      hooks: section.hooks,
    })),
  }, null, 2));
}

const isCli = Boolean(process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href);

if (isCli) {
  runCli();
}
