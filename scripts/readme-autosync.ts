import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';

export type ProductSection = {
  number: number;
  id: string;
  title: string;
  plainEnglish: string;
  userFacing: string;
  globs: string[];
  keywords: string[];
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

type ImportRecord = {
  specifier: string;
  resolved?: string;
};

type ExportRecord = {
  name: string;
  kind: string;
};

type FileFact = {
  file: string;
  ext: string;
  lines: number;
  text: string;
  route?: string;
  routeKind?: 'page' | 'api';
  methods: string[];
  imports: ImportRecord[];
  exports: ExportRecord[];
  components: string[];
  hooks: string[];
  signals: string[];
};

const SOURCE_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.json', '.md', '.mdx', '.yml', '.yaml', '.sql', '.sh', '.html', '.txt', '.toml',
]);

const MEDIA_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.mp4', '.mov', '.webm', '.avi', '.mkv', '.mp3', '.wav', '.ogg', '.flac', '.wasm', '.zip', '.gz', '.tar', '.pdf', '.ttf', '.otf', '.woff', '.woff2', '.bin',
]);

const EXCLUDED_PARTS = new Set([
  '.git', '.next', '.turbo', '.vercel', 'node_modules', 'coverage', 'dist', 'out', 'playwright-report', 'test-results', 'build-memory',
]);

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    number: 4,
    id: 'tech-stack-monorepo-layout',
    title: 'Tech Stack & Monorepo Layout',
    plainEnglish: 'This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase schema, and major folders that make the product ship as one web-native system.',
    userFacing: 'Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.',
    globs: ['package.json', 'pnpm-workspace.yaml', 'pnpm-lock.yaml', 'next.config.*', 'tsconfig*.json', 'tailwind.config.*', 'postcss.config.*', 'eslint.config.*', '.github/**', 'app/**', 'components/**', 'engine/**', 'engins/**', 'dreamdmbar/**', 'dreamr/**', 'daydreams/**', 'coresurfaces/**', 'hooks/**', 'types/**', 'utils/**', 'styles/**', 'assembly/**', 'config/**', 'optimizer/**', 'scripts/**', 'supabase/**'],
    keywords: ['next', 'react', 'typescript', 'pnpm', 'tailwind', 'supabase', 'workflow', 'config', 'package', 'monorepo'],
  },
  {
    number: 5,
    id: 'engins-and-daydreams',
    title: 'The Engins and DayDreams',
    plainEnglish: 'Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.',
    userFacing: 'A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, and their DayDream wrappers.',
    globs: ['engins/**', 'app/engines/**', 'app/daydream/**', 'components/daydream/**', 'components/engines/**', 'daydreams/**', 'engine/engins/**', 'engine/runtime/**'],
    keywords: ['engin', 'engine', 'daydream', 'ruleset', 'workspace', 'studio', 'asset', 'game', 'music', 'lab', 'brand', 'code', 'content'],
  },
  {
    number: 6,
    id: 'dual-runtimes',
    title: 'Dual Runtimes',
    plainEnglish: 'Dual runtimes are the split execution model that lets DREAMengin coordinate navigation, state, snapshots, handoffs, surface lifecycle, and active Engin behavior without making every screen own the whole system.',
    userFacing: 'Users feel this when one part of the app keeps context while another part opens a studio, preview, editor, remote surface, or companion panel without losing state.',
    globs: ['engine/runtime/**', 'engine/vm/**', 'components/runtime/**', 'hooks/useEngin*.ts', 'hooks/useShared*.ts', 'types/runtime*', 'types/engin*', 'dreamdmbar/**'],
    keywords: ['runtime', 'dual', 'bus', 'dispatcher', 'snapshot', 'sync', 'bridge', 'channel', 'intent', 'capability', 'state'],
  },
  {
    number: 7,
    id: 'shared-dreams',
    title: 'Shared Dreams',
    plainEnglish: 'Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.',
    userFacing: 'Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.',
    globs: ['engine/shared**', 'lib/shared/**', 'hooks/useSharedDream*.ts', 'app/api/dreams/**', 'app/dreams/**', 'components/shared-dream/**', 'types/shared*', 'supabase/**dream**'],
    keywords: ['shared', 'dream', 'collab', 'presence', 'channel', 'visibility', 'share', 'supabase', 'public'],
  },
  {
    number: 8,
    id: 'dreamr-human-media',
    title: 'DreamR — Human Media',
    plainEnglish: 'DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.',
    userFacing: 'Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.',
    globs: ['dreamr/**', 'app/dreamr/**', 'app/api/dreamr/**', 'components/dreamr/**', 'app/profiledream/**', 'app/view-profile/**', 'app/edit-profiledream/**', 'components/home/**dreamr**', 'dreamdmbar/homedream/dreamr/**', 'types/dreamr*', 'types/feed*'],
    keywords: ['dreamr', 'feed', 'post', 'profile', 'human', 'media', 'like', 'follow', 'creator', 'identity'],
  },
  {
    number: 9,
    id: 'shop',
    title: 'The Shop',
    plainEnglish: 'The Shop is the owned storefront area for a user or creator. It covers the files that present products, services, offers, carts, and purchase-related surfaces tied to a person or brand.',
    userFacing: 'Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.',
    globs: ['app/shop/**', 'app/api/shop/**', 'components/shop/**', 'engine/shop/**', 'types/shop*', 'supabase/**shop**'],
    keywords: ['shop', 'product', 'storefront', 'cart', 'checkout', 'order', 'seller', 'service'],
  },
  {
    number: 10,
    id: 'marketplace',
    title: 'The Marketplace',
    plainEnglish: 'The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.',
    userFacing: 'Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.',
    globs: ['app/marketplace/**', 'app/api/marketplace/**', 'components/marketplace/**', 'engine/marketplace/**', 'types/marketplace*', 'supabase/**marketplace**'],
    keywords: ['marketplace', 'listing', 'sell', 'buy', 'catalog', 'vendor', 'purchase', 'commerce'],
  },
  {
    number: 11,
    id: 'ads-user-ads',
    title: 'Ads & User Ads',
    plainEnglish: 'Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.',
    userFacing: 'Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.',
    globs: ['app/ads/**', 'app/api/ads/**', 'app/user-ads/**', 'app/api/user-ads/**', 'components/ads/**', 'engine/ads/**', 'types/ads*', 'supabase/**ads**'],
    keywords: ['ads', 'ad', 'campaign', 'impression', 'click', 'sponsor', 'promotion', 'target'],
  },
  {
    number: 12,
    id: 'dreamdmbar',
    title: 'The DreamDmBar (dreamdmbar/)',
    plainEnglish: 'The DreamDmBar is the communication, navigation, search, command, notification, and contextual action layer that should always be near the user.',
    userFacing: 'Users feel it as the bar that lets them message, search, jump between modules, respond to context, open actions, and keep moving without hunting through pages.',
    globs: ['dreamdmbar/**', 'app/dreamdmbar/**', 'components/**dreamdmbar**', 'components/**DreamDMBar**', 'types/dreamdm*', 'types/message*'],
    keywords: ['dreamdmbar', 'dmbar', 'message', 'conversation', 'search', 'notification', 'draft', 'command', 'module', 'bar'],
  },
  {
    number: 13,
    id: 'messaging',
    title: 'Messaging',
    plainEnglish: 'Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.',
    userFacing: 'Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.',
    globs: ['app/messages/**', 'app/api/messages/**', 'components/messaging/**', 'dreamdmbar/hooks/useDreamDM*.ts', 'dreamdmbar/hooks/useMessagingCore.ts', 'dreamdmbar/hooks/useNotifications.ts', 'types/message*', 'types/conversation*', 'supabase/**message**'],
    keywords: ['message', 'conversation', 'dm', 'draft', 'notification', 'inbox', 'thread', 'recipient'],
  },
  {
    number: 14,
    id: 'homedream',
    title: 'HomeDream',
    plainEnglish: 'HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.',
    userFacing: 'Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.',
    globs: ['app/homedream/**', 'components/home/**', 'dreamdmbar/homedream/**', 'app/api/homedream/**', 'types/home*'],
    keywords: ['homedream', 'home', 'feed', 'post', 'profile', 'launcher', 'card', 'welcome'],
  },
  {
    number: 15,
    id: 'dreamspace',
    title: 'DreamSpace',
    plainEnglish: 'DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.',
    userFacing: 'Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.',
    globs: ['app/dreamspace/**', 'app/daydream/**', 'components/daydream/**', 'daydreams/**', 'coresurfaces/**', 'components/runtime/**DreamSpace**', 'types/daydream*', 'types/surface*'],
    keywords: ['dreamspace', 'daydream', 'region', 'surface', 'workspace', 'shell', 'runtime', 'window'],
  },
  {
    number: 16,
    id: 'dreams-widgets-windows-surfaces',
    title: 'Dreams (Widgets / Windows / Surfaces)',
    plainEnglish: 'Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.',
    userFacing: 'Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.',
    globs: ['components/dream.**', 'components/dreams/**', 'components/widgets/**', 'components/runtime/**', 'engine/widgets/**', 'engine/dream-window/**', 'daydreams/**', 'coresurfaces/**', 'types/widget*', 'types/surface*', 'types/dream*'],
    keywords: ['dream', 'widget', 'window', 'surface', 'panel', 'card', 'open', 'drag', 'stateful'],
  },
  {
    number: 17,
    id: 'user-facing-modularity',
    title: 'User-Facing Modularity',
    plainEnglish: 'User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.',
    userFacing: 'Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.',
    globs: ['components/runtime/**', 'components/modules/**', 'engine/module**', 'engine/runtime/module**', 'hooks/useModule*.ts', 'dreamdmbar/hooks/useModuleBarIntent.ts', 'types/module*', 'app/**/modules/**'],
    keywords: ['module', 'modular', 'capability', 'launcher', 'panel', 'surface', 'compose', 'plugin'],
  },
  {
    number: 18,
    id: 'custom-engins',
    title: 'Custom Engins',
    plainEnglish: 'Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.',
    userFacing: 'Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.',
    globs: ['engine/engins/**', 'engins/**', 'engine/runtime/*registry*', 'engine/runtime/*capab*', 'types/engin*', 'types/capability*', 'config/engins/**', 'assembly/**'],
    keywords: ['custom', 'engin', 'capability', 'registry', 'manifest', 'ruleset', 'extension', 'compose'],
  },
  {
    number: 19,
    id: 'full-website-customizability',
    title: 'Full Website Customizability',
    plainEnglish: 'Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.',
    userFacing: 'Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.',
    globs: ['app/settings/**', 'app/edit-profiledream/**', 'app/profiledream/**', 'app/view-profile/**', 'components/profile/**', 'components/settings/**', 'engins/engin.BrandingEngin.tsx', 'styles/**', 'types/profile*', 'types/theme*'],
    keywords: ['customize', 'theme', 'appearance', 'profile', 'brand', 'identity', 'layout', 'style', 'settings'],
  },
  {
    number: 20,
    id: 'backend-system-core-coresurfaces',
    title: 'Backend, System, Core & CoreSurfaces',
    plainEnglish: 'Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.',
    userFacing: 'Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.',
    globs: ['app/api/**', 'engine/**', 'coresurfaces/**', 'supabase/**', 'config/**', 'assembly/**', 'types/**', 'utils/**', 'hooks/**', 'components/system/**', 'components/core/**'],
    keywords: ['api', 'backend', 'system', 'core', 'supabase', 'server', 'route', 'database', 'auth', 'persistence', 'state'],
  },
];

function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+/, '');
}

function isExcluded(file: string): boolean {
  const parts = normalizePath(file).split('/');
  return parts.some((part) => EXCLUDED_PARTS.has(part));
}

function shouldRead(file: string): boolean {
  const normalized = normalizePath(file);
  if (!normalized || isExcluded(normalized)) return false;
  const ext = extname(normalized).toLowerCase();
  if (MEDIA_EXTENSIONS.has(ext)) return false;
  if (SOURCE_EXTENSIONS.has(ext)) return true;
  return !ext && existsSync(normalized) && statSync(normalized).isFile();
}

function countLines(text: string): number {
  if (!text) return 0;
  return text.split(/\r?\n/g).length;
}

function globToRegExp(glob: string): RegExp {
  const normalized = normalizePath(glob).replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const source = normalized
    .replace(/\*\*/g, '<<<GLOBSTAR>>>')
    .replace(/\*/g, '[^/]*')
    .replace(/<<<GLOBSTAR>>>/g, '.*');
  return new RegExp(`^${source}$`, 'i');
}

function matchesGlob(file: string, glob: string): boolean {
  const normalized = normalizePath(file);
  if (glob.endsWith('/**')) {
    const base = normalizePath(glob.slice(0, -3));
    return normalized === base || normalized.startsWith(`${base}/`);
  }
  if (!glob.includes('*')) return normalized === normalizePath(glob);
  return globToRegExp(glob).test(normalized);
}

function routeFromFile(file: string): { route?: string; routeKind?: 'page' | 'api' } {
  const normalized = normalizePath(file);
  const pageMatch = normalized.match(/^app\/(.+)\/page\.tsx?$/);
  if (pageMatch) {
    return { route: `/${pageMatch[1].replace(/\(([^)]+)\)\//g, '').replace(/\/page$/, '')}`.replace(/\/index$/, '').replace(/\/\//g, '/'), routeKind: 'page' };
  }
  const apiMatch = normalized.match(/^app\/api\/(.+)\/route\.tsx?$/);
  if (apiMatch) return { route: `/api/${apiMatch[1]}`, routeKind: 'api' };
  return {};
}

function extractImports(text: string, file: string): ImportRecord[] {
  const imports: ImportRecord[] = [];
  const re = /import(?:\s+type)?[\s\S]*?from\s+['"]([^'"]+)['"]|import\(['"]([^'"]+)['"]\)/g;
  for (const match of text.matchAll(re)) {
    const specifier = match[1] ?? match[2];
    if (!specifier) continue;
    imports.push({ specifier, resolved: resolveImport(file, specifier) });
  }
  return imports.slice(0, 60);
}

function resolveImport(fromFile: string, specifier: string): string | undefined {
  if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return undefined;
  const base = specifier.startsWith('@/') ? specifier.slice(2) : normalizePath(join(dirname(fromFile), specifier));
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.jsx`, `${base}/index.ts`, `${base}/index.tsx`];
  return candidates.find((candidate) => existsSync(candidate));
}

function extractExports(text: string): ExportRecord[] {
  const exports: ExportRecord[] = [];
  const re = /export\s+(?:default\s+)?(?:async\s+)?(?:function|class|const|let|var|type|interface|enum)\s+([A-Za-z0-9_$]+)/g;
  for (const match of text.matchAll(re)) exports.push({ name: match[1], kind: match[0].includes('default') ? 'default' : 'named' });
  if (/export\s+default\s+/.test(text) && !exports.some((entry) => entry.kind === 'default')) exports.push({ name: 'default', kind: 'default' });
  return exports.slice(0, 60);
}

function extractComponents(text: string): string[] {
  const names = new Set<string>();
  for (const match of text.matchAll(/(?:function|const)\s+([A-Z][A-Za-z0-9_]*)/g)) names.add(match[1]);
  return [...names].slice(0, 40);
}

function extractHooks(text: string): string[] {
  const names = new Set<string>();
  for (const match of text.matchAll(/(?:function|const)\s+(use[A-Z][A-Za-z0-9_]*)/g)) names.add(match[1]);
  for (const match of text.matchAll(/\b(use[A-Z][A-Za-z0-9_]*)\s*\(/g)) names.add(match[1]);
  return [...names].slice(0, 40);
}

function extractMethods(text: string): string[] {
  const methods: string[] = [];
  for (const method of ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']) {
    if (new RegExp(`export\\s+(?:async\\s+)?function\\s+${method}\\b`).test(text) || new RegExp(`export\\s+const\\s+${method}\\b`).test(text)) methods.push(method);
  }
  return methods;
}

function extractSignals(text: string): string[] {
  const signals: string[] = [];
  const checks: Array<[string, RegExp]> = [
    ['state', /useState|createStore|setState|Reducer|dispatch/g],
    ['runtime', /runtime|Runtime|EnginRuntime|IntentBus|dispatcher/g],
    ['persistence', /localStorage|sessionStorage|supabase|insert\(|update\(|upsert\(|select\(/g],
    ['events', /addEventListener|dispatchEvent|CustomEvent|subscribe|publish|channel/g],
    ['mobile-touch', /touch|pointer|gesture|pinch|drag|PointerEvent/g],
    ['rendering', /canvas|WebGPU|webgpu|babylon|mesh|render|viewport|glb|obj/g],
    ['auth', /auth|getUser|safeGetUser|redirect\(['"]\/login/g],
    ['commerce', /checkout|product|order|cart|marketplace|shop|stripe/g],
  ];
  for (const [label, re] of checks) if (re.test(text)) signals.push(label);
  return signals;
}

function analyzeFile(file: string): FileFact | null {
  const normalized = normalizePath(file);
  if (!shouldRead(normalized)) return null;
  let text = '';
  try {
    const stat = statSync(normalized);
    if (stat.size > 1_200_000) return null;
    text = readFileSync(normalized, 'utf8');
  } catch {
    return null;
  }
  const route = routeFromFile(normalized);
  return {
    file: normalized,
    ext: extname(normalized).toLowerCase(),
    text,
    lines: countLines(text),
    route: route.route,
    routeKind: route.routeKind,
    methods: extractMethods(text),
    imports: extractImports(text, normalized),
    exports: extractExports(text),
    components: extractComponents(text),
    hooks: extractHooks(text),
    signals: extractSignals(text),
  };
}

function keywordRegex(keyword: string): RegExp {
  const escaped = keyword.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i');
}

function matchScore(section: ProductSection, fact: FileFact): number {
  let globScore = 0;
  for (const glob of section.globs) if (matchesGlob(fact.file, glob)) globScore += 20;

  const path = fact.file.toLowerCase();
  const text = fact.text.slice(0, 8000).toLowerCase();
  let pathHits = 0;
  let contentHits = 0;

  for (const keyword of section.keywords) {
    const normalized = keyword.toLowerCase();
    const re = keywordRegex(normalized);
    if (path.includes(normalized) || re.test(path)) pathHits += 1;
    else if (normalized.length > 3 && re.test(text)) contentHits += 1;
  }

  if (globScore > 0) return globScore + pathHits * 4 + Math.min(contentHits, 4);
  if (pathHits > 0) return pathHits * 6 + Math.min(contentHits, 3);
  if (contentHits >= 3) return contentHits;
  return 0;
}

function rootOf(file: string): string {
  const parts = file.split('/');
  if (parts.length <= 1) return file;
  return parts[0];
}

function topCounts(values: string[], limit = 12): Array<{ value: string; count: number }> {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([value, count]) => ({ value, count }));
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}

function bulletList(values: string[], empty: string, limit: number): string[] {
  const items = unique(values).filter(Boolean).slice(0, limit);
  if (!items.length) return [`- ${empty}`];
  return items.map((item) => `- \`${item}\``);
}

function buildSectionMarkdown(section: ProductSection, facts: FileFact[], perSectionFileLimit: number): { markdown: string; stats: ProductSectionStats } {
  const ranked = facts
    .map((fact) => ({ fact, score: matchScore(section, fact) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.fact.file.localeCompare(b.fact.file));

  const matchedFacts = ranked.map((entry) => entry.fact);
  const keyFacts = matchedFacts.slice(0, perSectionFileLimit);
  const sourceLines = matchedFacts.reduce((sum, fact) => sum + fact.lines, 0);
  const routes = matchedFacts.filter((fact) => fact.routeKind === 'page');
  const apis = matchedFacts.filter((fact) => fact.routeKind === 'api');
  const components = unique(matchedFacts.flatMap((fact) => fact.components));
  const hooks = unique(matchedFacts.flatMap((fact) => fact.hooks));
  const exports = unique(matchedFacts.flatMap((fact) => fact.exports.map((entry) => `${entry.name} (${entry.kind})`)));
  const imports = unique(matchedFacts.flatMap((fact) => fact.imports.map((entry) => entry.resolved ?? entry.specifier))).filter((item) => !item.startsWith('node:'));
  const signals = topCounts(matchedFacts.flatMap((fact) => fact.signals), 12);
  const roots = topCounts(matchedFacts.map((fact) => rootOf(fact.file)), 12);

  const lines: string[] = [];
  lines.push(`## ${section.number}. ${section.title}`);
  lines.push('');
  lines.push('### Plain English');
  lines.push(section.plainEnglish);
  lines.push('');
  lines.push('### What users experience');
  lines.push(section.userFacing);
  lines.push('');
  lines.push('### Repo-grounded detail');
  lines.push(`Matched repo evidence: ${matchedFacts.length} files, about ${sourceLines.toLocaleString()} readable source lines.`);
  lines.push('');
  lines.push('Important source roots:');
  lines.push(...(roots.length ? roots.slice(0, 8).map((item) => `- \`${item.value}\` — ${item.count} matched files`) : ['- None found.']));
  lines.push('');
  lines.push('Behavior signals found in matched files:');
  lines.push(...(signals.length ? signals.slice(0, 8).map((item) => `- ${item.value} — ${item.count} file hits`) : ['- None found.']));
  lines.push('');
  lines.push('Routes and API endpoints:');
  lines.push(...bulletList([...routes.map((fact) => `${fact.route} ← ${fact.file}`), ...apis.map((fact) => `${fact.methods.join('|') || 'API'} ${fact.route} ← ${fact.file}`)], 'No direct app routes matched this section.', 14));
  lines.push('');
  lines.push('Components and hooks:');
  lines.push(...bulletList([...components.map((name) => `component:${name}`), ...hooks.map((name) => `hook:${name}`)], 'No obvious component or hook names were detected.', 16));
  lines.push('');
  lines.push('Exports that define public behavior:');
  lines.push(...bulletList(exports, 'No named exports were detected in the matched files.', 12));
  lines.push('');
  lines.push('Import/export connections:');
  lines.push(...bulletList(imports, 'No internal import connections were detected in the matched files.', 12));
  lines.push('');
  lines.push('### Key files');
  if (!keyFacts.length) {
    lines.push('- No files currently matched. The generator should be tuned if this section is expected to exist.');
  } else {
    for (const fact of keyFacts) {
      const tags = [fact.routeKind, fact.signals.slice(0, 3).join('/'), fact.components[0], fact.hooks[0]].filter(Boolean).join(' · ');
      lines.push(`- \`${fact.file}\` — ${fact.lines} lines${tags ? `; ${tags}` : ''}`);
    }
    if (matchedFacts.length > keyFacts.length) {
      lines.push(`- Plus ${matchedFacts.length - keyFacts.length} additional matched files summarized by roots/signals above.`);
    }
  }
  lines.push('');

  return {
    markdown: lines.join('\n'),
    stats: {
      number: section.number,
      title: section.title,
      matchedFiles: matchedFacts.length,
      sourceLines,
      routes: routes.length,
      apis: apis.length,
      components: components.length,
      hooks: hooks.length,
    },
  };
}

export function buildProductReadmeSections(files: string[], lineBudget = 2800): ProductReadmeResult {
  const facts = files.map(normalizePath).map(analyzeFile).filter((fact): fact is FileFact => Boolean(fact));
  const frontDoorReserve = 180;
  const available = Math.max(lineBudget - frontDoorReserve, 1200);
  const perSectionLines = Math.max(58, Math.floor(available / PRODUCT_SECTIONS.length));
  const perSectionFileLimit = Math.max(18, Math.min(34, perSectionLines - 58));

  const stats: ProductSectionStats[] = [];
  const sections = PRODUCT_SECTIONS.map((section) => {
    const built = buildSectionMarkdown(section, facts, perSectionFileLimit);
    stats.push(built.stats);
    return built.markdown;
  });

  return {
    markdown: [
      '<!-- DREAMENGIN_PRODUCT_README:START -->',
      '',
      ...sections,
      '<!-- DREAMENGIN_PRODUCT_README:END -->',
      '',
    ].join('\n'),
    stats,
  };
}

export function computeAffected(changedFiles: string[]): Map<string, { section: ProductSection; subsections: Set<string> }> {
  const normalized = changedFiles.map(normalizePath);
  const affected = new Map<string, { section: ProductSection; subsections: Set<string> }>();
  for (const section of PRODUCT_SECTIONS) {
    const hit = normalized.some((file) => section.globs.some((glob) => matchesGlob(file, glob)) || section.keywords.some((keyword) => file.toLowerCase().includes(keyword.toLowerCase())));
    if (hit) affected.set(section.id, { section, subsections: new Set<string>() });
  }
  return affected;
}

export function buildAutosyncSummary(changedFiles: string[]) {
  const affected = [...computeAffected(changedFiles).values()].map((entry) => ({ id: entry.section.id, title: `${entry.section.number}. ${entry.section.title}` }));
  return {
    changedFiles,
    affectedSections: affected,
    regeneratedSections: affected,
    regeneratedSubsections: [],
    readmeChanged: false,
    sectionCount: PRODUCT_SECTIONS.length,
    trackedFiles: changedFiles.length,
  };
}

export function replaceSection(markdown: string, section: Pick<ProductSection, 'title'>, replacement: string): string {
  const heading = `## ${section.title}`;
  const start = markdown.indexOf(heading);
  if (start === -1) return `${markdown}${markdown.endsWith('\n') ? '' : '\n'}\n${replacement.trim()}\n`;
  const next = markdown.indexOf('\n## ', start + heading.length);
  const before = markdown.slice(0, start);
  const after = next === -1 ? '' : markdown.slice(next + 1);
  return `${before}${replacement.trim()}\n\n${after}`;
}

function parseCliArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

if (process.argv[1] && /readme-autosync\.(t|j)s$/.test(process.argv[1])) {
  const changedFilesPath = parseCliArg('--changed-files');
  const summaryPath = parseCliArg('--summary-file');
  const files = changedFilesPath && existsSync(changedFilesPath)
    ? readFileSync(changedFilesPath, 'utf8').split(/\r?\n/g).map((line) => normalizePath(line.trim())).filter(Boolean)
    : [];
  const result = buildProductReadmeSections(files.length ? files : PRODUCT_SECTIONS.flatMap((section) => section.globs), 2800);
  const summary = {
    changedFiles: files,
    affectedSections: PRODUCT_SECTIONS.map((section) => ({ id: section.id, title: `${section.number}. ${section.title}` })),
    regeneratedSections: PRODUCT_SECTIONS.map((section) => ({ id: section.id, title: `${section.number}. ${section.title}` })),
    regeneratedSubsections: [],
    readmeChanged: true,
    sectionCount: PRODUCT_SECTIONS.length,
    trackedFiles: files.length,
    productSections: result.stats,
  };
  if (summaryPath) {
    const out = summaryPath.startsWith('/') ? summaryPath : join(process.cwd(), summaryPath);
    writeFileSync(out, JSON.stringify(summary, null, 2));
  }
  console.log(JSON.stringify(summary, null, 2));
}
