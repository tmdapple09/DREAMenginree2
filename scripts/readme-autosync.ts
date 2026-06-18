#!/usr/bin/env node
/**
 * readme-autosync.ts
 *
 * Autosync workflow: preserved.
 * Analysis engine: rewritten to separate real behavior owners from visual noise.
 *
 * Core rule:
 *   Key Modules are not "anything exported" and not "anything PascalCase".
 *   Key Modules must show evidence of behavior ownership, routing, runtime,
 *   capability execution, state/data mutation, provider logic, or major surface entry.
 */

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Project,
  SourceFile,
  SyntaxKind,
  Node,
} from 'ts-morph';

// ─────────────────────────────────────────────────────────────────────────────
// Registry types
// ─────────────────────────────────────────────────────────────────────────────

export interface SubsectionDescriptor {
  id: string;
  title: string;
  globs: string[];
}

export interface SectionDescriptor {
  id: string;
  title: string;
  globs: string[];
  subsections?: Record<string, SubsectionDescriptor>;
}

export interface AutosyncSummary {
  changedFiles: string[];
  affectedSections: Array<{ id: string; title: string }>;
  regeneratedSections: Array<{ id: string; title: string }>;
  regeneratedSubsections: Array<{ sectionId: string; subsectionId: string; title: string }>;
  readmeChanged: boolean;
  fullRebuild: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Architecture model
// ─────────────────────────────────────────────────────────────────────────────

export interface ExportedSymbol {
  name: string;
  kind: 'function' | 'class' | 'interface' | 'type' | 'const' | 'enum' | 'component' | 'hook';
  file: string;
}

export interface ImportEdge {
  fromFile: string;
  toFile: string;
  specifier: string;
  toSubsystem?: string;
}

export interface RouteEntry {
  path: string;
  kind: 'page' | 'api';
  methods?: string[];
  file: string;
}

export interface KeyModuleCandidate {
  file: string;
  label: string;
  score: number;
  reasons: string[];
}

export interface SubsystemModel {
  id: string;
  title: string;
  globs: string[];
  files: string[];
  exports: ExportedSymbol[];
  imports: ImportEdge[];
  routes: RouteEntry[];
  components: string[];
  hooks: string[];
  dependsOn: string[];
  usedBy: string[];
  responsibilities: string[];
  capabilities: string[];
  keyModules: string[];
  integrationPoints: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Section registry
// ─────────────────────────────────────────────────────────────────────────────

export const SECTION_REGISTRY: SectionDescriptor[] = [
  {
    id: 'the-engins',
    title: 'The Engins',
    globs: ['engins/**', 'components/runtime/**', 'engine/runtime/**', 'dreamdmbar/**'],
    subsections: {
      'branding-engin': { id: 'branding-engin', title: 'BrandingEngin', globs: ['engins/engin.BrandingEngin.tsx'] },
      'code-engin': { id: 'code-engin', title: 'CodeEngin', globs: ['engins/engin.CodeEngin.tsx', 'engins/CodeEngin/**'] },
      'content-engin': { id: 'content-engin', title: 'ContentEngin', globs: ['engins/engin.ContentEngin.tsx'] },
      'game-engin': { id: 'game-engin', title: 'GameEngin', globs: ['engins/engin.GameEngin.tsx', 'engins/autoopen/**'] },
      'lab-engin': { id: 'lab-engin', title: 'LabEngin', globs: ['engins/engin.LabEngin.tsx', 'engins/dream.QuantumCircuitCanvas.tsx'] },
      'starmaker-engin': { id: 'starmaker-engin', title: 'StarMakerEngin', globs: ['engins/engin.StarMakerEngin.tsx'] },
      'analytics-engin': { id: 'analytics-engin', title: 'AnalyticsEngin', globs: ['engins/dream.panel.AnalyticsEngin.tsx'] },
      'forge-engin': { id: 'forge-engin', title: 'ForgeEngin', globs: ['engins/dream.ForgeEngin.tsx'] },
      'portfolio-engin': { id: 'portfolio-engin', title: 'PortfolioEngin', globs: ['engins/portfolio/**'] },
      'custom-engins-capability': {
        id: 'custom-engins-capability',
        title: 'Custom Engins capability (current state)',
        globs: ['engins/**', 'components/daydream/**', 'engins/rulesets/**'],
      },
    },
  },
  { id: 'dual-runtimes', title: 'Dual Runtimes', globs: ['engine/runtime/**', 'engine/vm/**', 'components/runtime/**', 'hooks/useSharedDream.ts', 'dreamdmbar/**'] },
  { id: 'shared-dreams', title: 'Shared Dreams', globs: ['engine/sharedDream.ts', 'supabase/realtime.ts', 'hooks/useSharedDream*.ts', 'app/api/dreams/**', 'components/shared-dream/**'] },
  { id: 'dreamr---human-media', title: 'Dreamr — Human Media', globs: ['app/dreamr/**', 'app/api/dreamr/**', 'dreamr/**', 'dreamdmbar/homedream/dreamr/**', 'components/dreamr/**', 'components/home/**'] },
  { id: 'the-shop', title: 'The Shop', globs: ['app/shop/**', 'app/api/shop/**', 'engine/shop/**', 'components/shop/**'] },
  { id: 'the-marketplace', title: 'The Marketplace', globs: ['app/marketplace/**', 'app/api/marketplace/**', 'engine/marketplace/**', 'components/marketplace/**'] },
  { id: 'ads-user-ads', title: 'Ads & User Ads', globs: ['app/ads/**', 'app/api/ads/**', 'components/ads/**', 'types/ads.ts'] },
  { id: 'the-dmbar-dreamdmbar', title: 'The DmBar (`dreamdmbar/`)', globs: ['dreamdmbar/**', 'components/home/dream.bar.*'] },
  { id: 'messaging', title: 'Messaging', globs: ['app/messages/**', 'app/api/messages/**', 'components/messaging/**', 'dreamdmbar/hooks/useDreamDM*.ts', 'dreamdmbar/hooks/useMessagingCore.ts', 'dreamdmbar/hooks/useNotifications.ts'] },
  { id: 'homedream', title: 'HomeDream', globs: ['app/homedream/**', 'components/home/**', 'dreamdmbar/homedream/**'] },
  { id: 'dreamspace', title: 'DreamSpace', globs: ['app/daydream/**', 'components/daydream/**', 'daydreams/**'] },
  { id: 'dreams-widgets-windows-surfaces', title: 'Dreams (Widgets / Windows / Surfaces)', globs: ['components/dream.**', 'components/dreams/**', 'components/widgets/**', 'components/runtime/**', 'engine/widgets/**', 'engine/dream-window/**'] },
  { id: 'user-facing-modularity', title: 'User-Facing Modularity', globs: ['components/**', 'styles/**', 'components/ui-system/**', 'hooks/**'] },
  { id: 'custom-engins', title: 'Custom Engins', globs: ['engins/**', 'daydreams/**', 'components/daydream/**'] },
  { id: 'full-website-customizability', title: 'Full Website Customizability', globs: ['app/settings/**', 'app/api/settings/**', 'styles/**', 'components/customize/**'] },
  {
    id: 'backend-system-core-coresurfaces',
    title: 'Backend, System, Core & CoreSurfaces',
    globs: ['backend/**', 'core/**', 'coresurfaces/**', 'system/**', 'engine/**', 'app/api/**', 'supabase/**', 'utils/supabase/**'],
  },
  { id: 'agents-workflow', title: 'Agents & Workflow', globs: ['agents/**', '.github/workflows/**', '.github/scripts/**', 'scripts/**'] },
  { id: 'research-experiments-daydreams', title: 'Research, Experiments & Daydreams', globs: ['research/**', 'research-and-development/**', 'experiments/**', 'daydreams/**'] },
  { id: 'infra-ops', title: 'Infra & Ops', globs: ['terraform/**', 'prometheus/**', 'grafana/**', '.github/workflows/**', 'vercel.json', 'docker-compose.yml'] },
  { id: 'testing', title: 'Testing', globs: ['tests/**', 'vitest.config.ts', 'playwright.config.ts'] },
  {
    id: 'tech-stack-monorepo-layout',
    title: 'Tech Stack & Monorepo Layout',
    globs: [
      'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig*.json',
      'next.config.*', 'eslint.config.*', 'tailwind.config.*', 'vercel.json',
      '.env*.example', 'Dockerfile*',
    ],
  },
  { id: 'getting-started', title: 'Getting Started', globs: ['README.md', '.env.example', '.env.local.example'] },
  { id: 'environment-variables', title: 'Environment Variables', globs: ['.env.example', '.env.local.example', 'app/api/**'] },
  { id: 'contributing', title: 'Contributing', globs: ['CONTRIBUTING*', 'AGENTS.md', 'docs/**', '.github/**'] },
  { id: 'license', title: 'License', globs: ['LICENSE'] },
];

// ─────────────────────────────────────────────────────────────────────────────
// Path utilities
// ─────────────────────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const ROOT = resolve(__dirname, '..');
const README_PATH = join(ROOT, 'README.md');

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizePath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+/, '');
}

function globToRegExp(glob: string): RegExp {
  const normalized = normalizePath(glob);
  let pattern = '';

  for (let i = 0; i < normalized.length; i++) {
    const c = normalized[i];
    const n = normalized[i + 1];

    if (c === '*' && n === '*') {
      pattern += '.*';
      i++;
      continue;
    }

    if (c === '*') {
      pattern += '[^/]*';
      continue;
    }

    if (c === '?') {
      pattern += '.';
      continue;
    }

    if ('\\.^$+{}()|[]'.includes(c)) {
      pattern += `\\${c}`;
      continue;
    }

    pattern += c;
  }

  return new RegExp(`^${pattern}$`);
}

function matchesGlob(filePath: string, glob: string): boolean {
  return globToRegExp(glob).test(normalizePath(filePath));
}

function matchesAnyGlob(filePath: string, globs: string[]): boolean {
  const n = normalizePath(filePath);
  return globs.some((g) => matchesGlob(n, g));
}

function walkFiles(dir: string): string[] {
  const out: string[] = [];

  for (const entry of readdirSync(dir)) {
    if (['node_modules', '.git', '__pycache__', '.next', 'coverage', '.vercel'].includes(entry)) continue;

    const full = join(dir, entry);

    if (statSync(full).isDirectory()) {
      out.push(...walkFiles(full));
    } else if (!entry.endsWith('.pyc')) {
      out.push(normalizePath(relative(ROOT, full)));
    }
  }

  return out;
}

function toRoutePath(filePath: string): string {
  const n = normalizePath(filePath);
  if (!n.startsWith('app/')) return '';

  const withoutApp = n.slice(4);
  const withoutLeaf = withoutApp.replace(/\/(route|page)\.(t|j)sx?$/i, '');
  const cleaned = withoutLeaf
    .split('/')
    .filter((s) => s && !/^\(.*\)$/.test(s))
    .join('/');

  return `/${cleaned}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
}

function buildTreeLines(files: string[], maxLines = 120): string[] {
  const sorted = [...new Set(files)].sort();
  if (sorted.length === 0) return ['(no files currently matched)'];

  const tree = new Map<string, Set<string>>();

  for (const file of sorted) {
    const parts = file.split('/');

    for (let i = 0; i < parts.length; i++) {
      const parent = parts.slice(0, i).join('/');
      if (!tree.has(parent)) tree.set(parent, new Set());
      tree.get(parent)!.add(parts[i]);
    }
  }

  const lines: string[] = [];

  const emit = (parent: string, prefix: string) => {
    const children = [...(tree.get(parent) ?? [])].sort();

    children.forEach((child, idx) => {
      if (lines.length >= maxLines) return;

      const isLast = idx === children.length - 1;
      const childPath = parent ? `${parent}/${child}` : child;

      lines.push(`${prefix}${isLast ? '└── ' : '├── '}${child}`);

      if (tree.has(childPath)) {
        emit(childPath, `${prefix}${isLast ? '    ' : '│   '}`);
      }
    });
  };

  emit('', '');

  if (sorted.length > maxLines) {
    lines.push(`… (${sorted.length - maxLines} more files)`);
  }

  return lines;
}

function readFileTextSafe(filePath: string): string {
  try {
    const abs = join(ROOT, filePath);
    return existsSync(abs) ? readFileSync(abs, 'utf8') : '';
  } catch {
    return '';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Signal filters: this is what stops random UI fluff from becoming "key"
// ─────────────────────────────────────────────────────────────────────────────

function isLowSignalExportName(name: string): boolean {
  return /(?:Props$|Style$|Styles$|ClassName$|Icon$|Emoji$|Glow|Glowing|Light|Aura|Sparkle|Particle|Gradient|Skeleton|Placeholder|Badge$|Pill$|Chip$|Button$|Card$|Tile$|Label$|Avatar$|Spinner$|Shimmer|Divider$|Border$|Ring$|Orb$)/i.test(name);
}

function isDemoOrMockName(name: string): boolean {
  return /(?:Demo|Mock|Sample|Fixture|Stub|Fake|Example|PreviewOnly|Placeholder)/i.test(name);
}

function isImportantExportName(name: string): boolean {
  if (isLowSignalExportName(name)) return false;
  if (isDemoOrMockName(name)) return false;

  return /(?:Engin|Engine|Runtime|RuleSet|Ruleset|Capability|Intent|Dispatcher|Provider|Feed|Profile|Message|Conversation|Surface|Bridge|Bus|Registry|Snapshot|Manifest|Transport|Adapter|Store|Reducer|Orchestr|Resolver|Validator|Auth|Permission|Session|Channel|Realtime|Dream|DreamR|HomeDream|DreamSpace|DMBar|Workflow|Pipeline|Asset|Cartridge|Command|Controller|Service|Repository|Gateway|Client|Connector|Sync|Queue|Mutation|Transaction|Presence|Notification)/i.test(name);
}

function isDecorativePath(filePath: string): boolean {
  return /(?:glow|glowing|light|aura|sparkle|particle|gradient|skeleton|placeholder|badge|pill|chip|icon|ornament|shine|shimmer|decoration|confetti|avatar)/i.test(filePath);
}

function isDemoOrMockPath(filePath: string): boolean {
  return /(?:demo|mock|sample|fixture|stub|fake|example|placeholder)/i.test(filePath);
}

function isImportantPath(filePath: string): boolean {
  return [
    /^engine\/runtime\//,
    /^engine\/vm\//,
    /^engine\/social\//,
    /^engine\/connectors\//,
    /^engine\/shared/,
    /^engine\/shop\//,
    /^engine\/marketplace\//,
    /^engine\/widgets\//,
    /^engine\/dream-window\//,
    /^engins\/engin\./,
    /^engins\/.*(?:RuleSet|Ruleset|Runtime|Pipeline|Registry|Capability)/i,
    /^components\/runtime\//,
    /^dreamdmbar\//,
    /^app\/api\/(?:dreams|dreamr|messages|youtube|contentengin|gameengin|homedream|shop|marketplace|ads|settings)\//,
    /^app\/(?:homedream|dreamr|messages|u|view-profile|daydream|shop|marketplace)\//,
    /^components\/home\/.*(?:HomeDream|Feed|Profile|Message|Post|DreamR|Surface|Runtime|DMBar)/i,
    /^components\/dreamr\//,
    /^components\/messaging\//,
    /^components\/shared-dream\//,
    /^components\/daydream\/.*(?:IDE|Surface|Runtime|Engin|Dream|Studio|Asset|Pipeline)/i,
    /^supabase\//,
    /^utils\/supabase\//,
  ].some((pattern) => pattern.test(filePath));
}

function hasBehaviorEvidence(filePath: string, text: string): boolean {
  if (/\/(page|route)\.(t|j)sx?$/i.test(filePath)) return true;

  return [
    /IntentBus|EnginDispatcher|Capability|RuleSet|Ruleset|Runtime|Snapshot|Manifest|Dispatcher|Registry|Workflow/,
    /\bdispatch\b|\bsubscribe\b|\bpublish\b|routeIntent|resolveCapability|executeCapability|\bexecute\b|\bregister\b|\bauthorize\b|\bvalidate\b|negotiate/i,
    /createServerClient|safeGetUser|supabase|\.from\(|\.auth\.|channel\(|realtime|postgres|database|storage/i,
    /NextRequest|NextResponse|export\s+(async\s+)?function\s+(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)/,
    /feed|profile|message|conversation|notification|presence|session|comment|like|post/i,
    /upload|storage|export|import|provider|connector|rss|youtube|webhook|callback/i,
    /state|mutation|persist|hydrate|snapshot|sync|queue|offline|transaction/i,
    /asset|cartridge|recipe|rig|animate|validate|GLB|bundle|manifest/i,
    /auth|permission|policy|visibility|owner|user_id|access/i,
    /WebGPU|AudioWorklet|worker|wasm|vm|scheduler|command buffer|ring buffer/i,
  ].some((pattern) => pattern.test(text));
}

function isTypeOnlyFile(exports: ExportedSymbol[]): boolean {
  return exports.length > 0 && exports.every((symbol) => ['interface', 'type'].includes(symbol.kind));
}

function lineCount(text: string): number {
  if (!text) return 0;
  return text.split(/\r?\n/g).length;
}

// ─────────────────────────────────────────────────────────────────────────────
// ts-morph project
// ─────────────────────────────────────────────────────────────────────────────

let _project: Project | null = null;

function getTsProject(): Project {
  if (_project) return _project;

  const tsconfigPath = join(ROOT, 'tsconfig.json');

  _project = existsSync(tsconfigPath)
    ? new Project({ tsConfigFilePath: tsconfigPath, skipAddingFilesFromTsConfig: true })
    : new Project({ compilerOptions: { allowJs: true, resolveJsonModule: true } });

  return _project;
}

function getSourceFile(absPath: string): SourceFile | undefined {
  const project = getTsProject();
  const existing = project.getSourceFile(absPath);

  if (existing) return existing;
  if (!existsSync(absPath)) return undefined;

  try {
    return project.addSourceFileAtPath(absPath);
  } catch {
    return undefined;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: exports
// ─────────────────────────────────────────────────────────────────────────────

function isReactComponent(name: string, sf: SourceFile): boolean {
  if (!/^[A-Z]/.test(name)) return false;

  const text = sf.getFullText();

  return /<[A-Z][A-Za-z0-9._-]*/.test(text) || /return\s*\(?\s*</.test(text);
}

function isHook(name: string): boolean {
  return /^use[A-Z]/.test(name);
}

export function analyzeExports(filePath: string): ExportedSymbol[] {
  const abs = join(ROOT, filePath);
  const ext = extname(filePath).toLowerCase();

  if (!['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'].includes(ext)) return [];

  const sf = getSourceFile(abs);
  if (!sf) return [];

  const symbols: ExportedSymbol[] = [];

  for (const decl of sf.getExportedDeclarations().values()) {
    for (const node of decl) {
      let name = '';
      let rawKind: ExportedSymbol['kind'] = 'const';

      if (Node.isFunctionDeclaration(node) || Node.isFunctionExpression(node) || Node.isArrowFunction(node)) {
        name = Node.isFunctionDeclaration(node) ? (node.getName() ?? '') : '';

        if (!name) {
          const varDecl = node.getParentIfKind(SyntaxKind.VariableDeclaration);
          if (varDecl && Node.isVariableDeclaration(varDecl)) name = varDecl.getName();
        }

        rawKind = isHook(name) ? 'hook' : isReactComponent(name, sf) ? 'component' : 'function';
      } else if (Node.isClassDeclaration(node)) {
        name = node.getName() ?? '';
        rawKind = 'class';
      } else if (Node.isInterfaceDeclaration(node)) {
        name = node.getName();
        rawKind = 'interface';
      } else if (Node.isTypeAliasDeclaration(node)) {
        name = node.getName();
        rawKind = 'type';
      } else if (Node.isEnumDeclaration(node)) {
        name = node.getName();
        rawKind = 'enum';
      } else if (Node.isVariableDeclaration(node)) {
        name = node.getName();

        const init = node.getInitializer();

        if (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init))) {
          rawKind = isHook(name) ? 'hook' : isReactComponent(name, sf) ? 'component' : 'function';
        } else if (/^[A-Z]/.test(name) && isReactComponent(name, sf)) {
          rawKind = 'component';
        } else {
          rawKind = 'const';
        }
      }

      if (name && !symbols.some((s) => s.name === name)) {
        symbols.push({ name, kind: rawKind, file: filePath });
      }
    }
  }

  return symbols;
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: imports
// ─────────────────────────────────────────────────────────────────────────────

export function analyzeImports(filePath: string): ImportEdge[] {
  const abs = join(ROOT, filePath);
  const ext = extname(filePath).toLowerCase();

  if (!['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'].includes(ext)) return [];

  const sf = getSourceFile(abs);
  if (!sf) return [];

  const edges: ImportEdge[] = [];

  for (const decl of sf.getImportDeclarations()) {
    const spec = decl.getModuleSpecifierValue();

    if (!spec.startsWith('.') && !spec.startsWith('@/') && !spec.startsWith('~/')) continue;

    let toFile = spec;

    if (spec.startsWith('.')) {
      const dir = abs.replace(/\/[^/]+$/, '');
      toFile = normalizePath(relative(ROOT, resolve(dir, spec)));
    } else if (spec.startsWith('@/') || spec.startsWith('~/')) {
      toFile = normalizePath(spec.replace(/^[@~]\//, ''));
    }

    const stripped = toFile.replace(/\.(t|j)sx?$/i, '');
    edges.push({ fromFile: filePath, toFile: stripped, specifier: spec });
  }

  return edges;
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: routes
// ─────────────────────────────────────────────────────────────────────────────

function httpMethodsFromFile(filePath: string): string[] {
  const abs = join(ROOT, filePath);
  if (!existsSync(abs)) return [];

  try {
    const src = readFileSync(abs, 'utf8');
    const methods: string[] = [];

    for (const m of ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']) {
      if (new RegExp(`export\\s+(async\\s+)?function\\s+${m}\\b`).test(src)) methods.push(m);
      if (new RegExp(`export\\s+const\\s+${m}\\b`).test(src)) methods.push(m);
    }

    return methods;
  } catch {
    return [];
  }
}

export function analyzeRoutes(files: string[]): RouteEntry[] {
  const routes: RouteEntry[] = [];

  for (const file of files) {
    if (/\/route\.(t|j)sx?$/i.test(file)) {
      const path = toRoutePath(file);
      if (path) routes.push({ path, kind: 'api', methods: httpMethodsFromFile(file), file });
    } else if (/\/page\.(t|j)sx?$/i.test(file)) {
      const path = toRoutePath(file);
      if (path) routes.push({ path, kind: 'page', file });
    }
  }

  return routes.sort((a, b) => a.path.localeCompare(b.path));
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: components and hooks
// ─────────────────────────────────────────────────────────────────────────────

export function analyzeComponents(exports: ExportedSymbol[]): string[] {
  return [...new Set(
    exports
      .filter((e) => e.kind === 'component')
      .filter((e) => !isLowSignalExportName(e.name))
      .filter((e) => !isDemoOrMockName(e.name))
      .map((e) => e.name),
  )].sort();
}

export function analyzeHooks(exports: ExportedSymbol[]): string[] {
  return [...new Set(
    exports
      .filter((e) => e.kind === 'hook')
      .filter((e) => !isDemoOrMockName(e.name))
      .map((e) => e.name),
  )].sort();
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: dependency graph
// ─────────────────────────────────────────────────────────────────────────────

export function analyzeDependencies(
  edges: ImportEdge[],
  subsystems: Array<{ id: string; globs: string[] }>,
  ownId: string,
): string[] {
  const depIds = new Set<string>();

  for (const edge of edges) {
    for (const sys of subsystems) {
      if (sys.id === ownId) continue;

      const candidates = [
        edge.toFile,
        `${edge.toFile}.ts`,
        `${edge.toFile}.tsx`,
        `${edge.toFile}.js`,
        `${edge.toFile}.jsx`,
        `${edge.toFile}/index.ts`,
        `${edge.toFile}/index.tsx`,
        `${edge.toFile}/index.js`,
        `${edge.toFile}/index.jsx`,
      ];

      if (candidates.some((c) => matchesAnyGlob(c, sys.globs))) {
        depIds.add(sys.id);
        break;
      }
    }
  }

  return [...depIds].sort();
}

function populateUsedBy(models: SubsystemModel[]): void {
  const byId = new Map(models.map((model) => [model.id, model]));

  for (const model of models) {
    for (const dep of model.dependsOn) {
      const target = byId.get(dep);
      if (!target) continue;
      if (!target.usedBy.includes(model.id)) target.usedBy.push(model.id);
    }
  }

  for (const model of models) {
    model.usedBy.sort();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Key module inference
// ─────────────────────────────────────────────────────────────────────────────

function scoreKeyModule(file: string, fileExports: ExportedSymbol[]): KeyModuleCandidate {
  const text = readFileTextSafe(file);

  let score = 0;
  const reasons: string[] = [];

  const importantPath = isImportantPath(file);
  const behaviorEvidence = hasBehaviorEvidence(file, text);
  const importantExports = fileExports.filter((symbol) => isImportantExportName(symbol.name));
  const lowSignalExports = fileExports.filter((symbol) => isLowSignalExportName(symbol.name));
  const typeOnly = isTypeOnlyFile(fileExports);
  const lines = lineCount(text);

  if (importantPath) {
    score += 4;
    reasons.push('important path');
  }

  if (behaviorEvidence) {
    score += 3;
    reasons.push('behavior evidence');
  }

  if (/\/route\.(t|j)sx?$/i.test(file)) {
    score += 3;
    reasons.push('API boundary');
  }

  if (/\/page\.(t|j)sx?$/i.test(file)) {
    score += 2;
    reasons.push('route surface');
  }

  if (/^engins\/engin\./.test(file)) {
    score += 5;
    reasons.push('Engin entry');
  }

  if (/^engine\/runtime\//.test(file) || /^components\/runtime\//.test(file)) {
    score += 4;
    reasons.push('runtime layer');
  }

  if (/^dreamdmbar\//.test(file)) {
    score += 3;
    reasons.push('DreamDMBar layer');
  }

  if (importantExports.length > 0) {
    score += Math.min(5, importantExports.length * 2);
    reasons.push(`important exports: ${importantExports.slice(0, 3).map((s) => s.name).join(', ')}`);
  }

  if (fileExports.some((symbol) => symbol.kind === 'class')) {
    score += 2;
    reasons.push('class abstraction');
  }

  if (fileExports.some((symbol) => symbol.kind === 'hook' && isImportantExportName(symbol.name))) {
    score += 2;
    reasons.push('important hook');
  }

  if (lines >= 250 && behaviorEvidence) {
    score += 1;
    reasons.push('large behavior file');
  }

  if (typeOnly) {
    score -= 4;
    reasons.push('type-only');
  }

  if (lowSignalExports.length > 0) {
    score -= Math.min(4, lowSignalExports.length * 2);
    reasons.push('low-signal export');
  }

  if (isDecorativePath(file)) {
    score -= 4;
    reasons.push('decorative path');
  }

  if (isDemoOrMockPath(file)) {
    score -= 5;
    reasons.push('demo/mock path');
  }

  if (fileExports.length === 0 && !/\/(page|route)\.(t|j)sx?$/i.test(file)) {
    score -= 2;
    reasons.push('no public exports');
  }

  const labelExports = importantExports
    .map((symbol) => symbol.name)
    .slice(0, 3);

  const label = labelExports.length > 0
    ? `${file} — ${labelExports.join(', ')}`
    : file;

  return { file, label, score, reasons };
}

function inferKeyModules(
  title: string,
  files: string[],
  exports: ExportedSymbol[],
): string[] {
  const byFile = new Map<string, ExportedSymbol[]>();

  for (const symbol of exports) {
    const existing = byFile.get(symbol.file) ?? [];
    existing.push(symbol);
    byFile.set(symbol.file, existing);
  }

  const candidates = files
    .filter((file) => /\.(t|j)sx?$/i.test(file))
    .map((file) => scoreKeyModule(file, byFile.get(file) ?? []));

  const strong = candidates
    .filter((candidate) => candidate.score >= 5)
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file))
    .slice(0, 12);

  if (strong.length > 0) {
    return strong.map((candidate) => `${candidate.label} (${candidate.reasons.slice(0, 3).join('; ')})`);
  }

  const fallback = candidates
    .filter((candidate) => candidate.score >= 3)
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file))
    .slice(0, 6);

  if (fallback.length > 0) {
    return fallback.map((candidate) => `${candidate.label} (${candidate.reasons.slice(0, 2).join('; ')})`);
  }

  return [];
}

// ─────────────────────────────────────────────────────────────────────────────
// Analyzer: full subsystem
// ─────────────────────────────────────────────────────────────────────────────

export function analyzeSubsystem(
  descriptor: SectionDescriptor | SubsectionDescriptor,
  files: string[],
  allSubsystems: Array<{ id: string; globs: string[] }>,
): SubsystemModel {
  const exports: ExportedSymbol[] = [];
  const imports: ImportEdge[] = [];

  const tsFiles = files.filter((f) => /\.(t|j)sx?$/i.test(f));

  for (const file of tsFiles) {
    exports.push(...analyzeExports(file));
    imports.push(...analyzeImports(file));
  }

  const routes = analyzeRoutes(files);
  const components = analyzeComponents(exports);
  const hooks = analyzeHooks(exports);
  const dependsOn = analyzeDependencies(imports, allSubsystems, descriptor.id);
  const keyModules = inferKeyModules(descriptor.title, files, exports);

  const { responsibilities, capabilities, integrationPoints } =
    inferArchitecturalNarrative(descriptor, files, exports, routes, hooks, dependsOn);

  return {
    id: descriptor.id,
    title: descriptor.title,
    globs: descriptor.globs,
    files,
    exports,
    imports,
    routes,
    components,
    hooks,
    dependsOn,
    usedBy: [],
    responsibilities,
    capabilities,
    keyModules,
    integrationPoints,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Architectural narrative inference
// ─────────────────────────────────────────────────────────────────────────────

interface Narrative {
  responsibilities: string[];
  capabilities: string[];
  integrationPoints: string[];
}

function filteredInterfaces(exports: ExportedSymbol[]): string[] {
  return exports
    .filter((e) => e.kind === 'interface')
    .filter((e) => !isLowSignalExportName(e.name))
    .filter((e) => isImportantExportName(e.name))
    .map((e) => e.name);
}

function filteredTypes(exports: ExportedSymbol[]): string[] {
  return exports
    .filter((e) => e.kind === 'type')
    .filter((e) => !isLowSignalExportName(e.name))
    .filter((e) => isImportantExportName(e.name))
    .map((e) => e.name);
}

function filteredFunctions(exports: ExportedSymbol[]): string[] {
  return exports
    .filter((e) => e.kind === 'function')
    .filter((e) => !isLowSignalExportName(e.name))
    .filter((e) => !isDemoOrMockName(e.name))
    .filter((e) => isImportantExportName(e.name))
    .map((e) => e.name);
}

function inferArchitecturalNarrative(
  descriptor: SectionDescriptor | SubsectionDescriptor,
  files: string[],
  exports: ExportedSymbol[],
  routes: RouteEntry[],
  hooks: string[],
  dependsOn: string[],
): Narrative {
  const responsibilities: string[] = [];
  const capabilities: string[] = [];
  const integrationPoints: string[] = [];

  const apiRoutes = routes.filter((r) => r.kind === 'api');
  const pageRoutes = routes.filter((r) => r.kind === 'page');

  const classes = exports
    .filter((e) => e.kind === 'class')
    .filter((e) => !isDemoOrMockName(e.name))
    .map((e) => e.name);

  const interfaces = filteredInterfaces(exports);
  const types = filteredTypes(exports);
  const functions = filteredFunctions(exports);

  const components = exports
    .filter((e) => e.kind === 'component')
    .filter((e) => !isLowSignalExportName(e.name))
    .filter((e) => !isDemoOrMockName(e.name))
    .map((e) => e.name);

  const joinedFiles = files.join('\n');

  const hasRuntime = /runtime|EnginDispatcher|dualRuntime|IntentBus|Capability|RuleSet|Ruleset/.test(joinedFiles);
  const hasDb = /supabase|prisma|postgres|migration|\.sql$/.test(joinedFiles);
  const hasAI = /\/ai\/|boogieman|openai|anthropic|llm|completion/i.test(joinedFiles);
  const hasAuth = /auth|session|jwt|supabase\/auth/i.test(joinedFiles);
  const hasMessaging = /message|channel|websocket|realtime|conversation|notification/i.test(joinedFiles);
  const hasFeed = /feed|algorithm|rank|score|post|comment|like/i.test(joinedFiles);
  const hasPayment = /stripe|payment|billing|subscription/i.test(joinedFiles);
  const hasStorage = /storage|upload|cdn|bucket|blob|asset/i.test(joinedFiles);
  const hasTheme = /theme|style|css|tailwind|customize/i.test(joinedFiles);
  const hasTest = /test|spec|vitest|playwright/i.test(joinedFiles);
  const hasInfra = /terraform|docker|prometheus|grafana|vercel/i.test(joinedFiles);
  const hasGame = /game|cartridge|wasm|webgpu|controller/i.test(joinedFiles);
  const hasContent = /contentengin|asset|recipe|glb|rig|animate|validate|export/i.test(joinedFiles);

  if (pageRoutes.length > 0) {
    responsibilities.push(
      `User-facing surfaces: ${pageRoutes.slice(0, 5).map((r) => r.path).join(', ')}${pageRoutes.length > 5 ? `, +${pageRoutes.length - 5} more` : ''}`,
    );
  }

  if (apiRoutes.length > 0) {
    const grouped = apiRoutes.reduce<Record<string, RouteEntry[]>>((acc, r) => {
      const prefix = r.path.split('/').slice(0, 3).join('/') || r.path;
      (acc[prefix] ??= []).push(r);
      return acc;
    }, {});

    const prefixes = Object.keys(grouped).slice(0, 4);

    responsibilities.push(`API transport boundaries: ${prefixes.join(', ')}${Object.keys(grouped).length > 4 ? ', …' : ''}`);
  }

  if (components.length > 0) {
    responsibilities.push(`Renders production surfaces/components: ${components.slice(0, 6).join(', ')}${components.length > 6 ? `, +${components.length - 6} more` : ''}`);
  }

  if (classes.length > 0) {
    responsibilities.push(`Core abstractions: ${classes.slice(0, 5).join(', ')}`);
  }

  if (hasRuntime) responsibilities.push('Runtime orchestration, capability routing, and Engin lifecycle coordination');
  if (hasDb) responsibilities.push('Database access, persistence, and server-side data coordination');
  if (hasAI) responsibilities.push('AI provider integration and inference routing');
  if (hasAuth) responsibilities.push('Authentication, sessions, authorization, and access control');
  if (hasMessaging) responsibilities.push('Messaging, conversations, notifications, realtime channels, or presence');
  if (hasFeed) responsibilities.push('Feed, post, comment, ranking, or social interaction behavior');
  if (hasPayment) responsibilities.push('Commerce, billing, and subscription lifecycle');
  if (hasStorage) responsibilities.push('Asset storage, upload, export, or CDN-facing pipelines');
  if (hasTheme) responsibilities.push('Theming, design tokens, visual customization, or settings surfaces');
  if (hasGame) responsibilities.push('GameEngin cartridge/runtime interaction or playable system behavior');
  if (hasContent) responsibilities.push('ContentEngin asset creation, validation, rigging, animation, or export behavior');
  if (hasTest) responsibilities.push('Quality gates, regression checks, or integration coverage');
  if (hasInfra) responsibilities.push('Infrastructure provisioning, deployment, or operational observability');

  if (hooks.length > 0) {
    capabilities.push(`Exposes hooks: ${hooks.slice(0, 6).join(', ')}${hooks.length > 6 ? `, +${hooks.length - 6} more` : ''}`);
  }

  if (interfaces.length > 0) {
    capabilities.push(`Important contract surface: ${interfaces.slice(0, 5).join(', ')}`);
  }

  if (types.length > 0) {
    capabilities.push(`Important shared type vocabulary: ${types.slice(0, 5).join(', ')}`);
  }

  if (functions.length > 0) {
    capabilities.push(`Behavior functions: ${functions.slice(0, 6).join(', ')}`);
  }

  if (apiRoutes.some((r) => (r.methods ?? []).includes('GET'))) {
    capabilities.push('Read endpoints for data retrieval');
  }

  if (apiRoutes.some((r) => ['POST', 'PUT', 'PATCH'].some((m) => r.methods?.includes(m)))) {
    capabilities.push('Write endpoints for mutations');
  }

  if (apiRoutes.some((r) => (r.methods ?? []).includes('DELETE'))) {
    capabilities.push('Delete endpoints for resource lifecycle');
  }

  if (files.length === 0) {
    capabilities.push('No source files currently matched — section registered but unpopulated');
  }

  if (dependsOn.includes('dual-runtimes') || dependsOn.includes('the-engins')) {
    integrationPoints.push('Integrates with the Engin / Dual Runtime layer for execution orchestration');
  }

  if (dependsOn.includes('shared-dreams')) {
    integrationPoints.push('Participates in the Shared Dreams pub/sub channel system');
  }

  if (dependsOn.includes('backend-system-core-coresurfaces')) {
    integrationPoints.push('Consumes backend, engine, Supabase, or core system services');
  }

  if (dependsOn.includes('the-dmbar-dreamdmbar')) {
    integrationPoints.push('Surfaces through the DreamDMBar navigation / communication layer');
  }

  if (dependsOn.includes('agents-workflow')) {
    integrationPoints.push('Orchestrated by agent workflows or automation pipelines');
  }

  for (const dep of dependsOn.slice(0, 4)) {
    const depTitle = SECTION_REGISTRY.find((s) => s.id === dep)?.title ?? dep;

    if (!integrationPoints.some((p) => p.includes(depTitle))) {
      integrationPoints.push(`Depends on ${depTitle}`);
    }
  }

  if (integrationPoints.length === 0 && dependsOn.length === 0 && files.length > 0) {
    integrationPoints.push('Self-contained by detected imports — no cross-subsystem dependency found');
  }

  return { responsibilities, capabilities, integrationPoints };
}

// ─────────────────────────────────────────────────────────────────────────────
// Prose generator
// ─────────────────────────────────────────────────────────────────────────────

function generateSubsystemDescription(model: SubsystemModel): string {
  const { title, files, routes, components, hooks, exports, dependsOn, usedBy } = model;

  const apiRoutes = routes.filter((r) => r.kind === 'api');
  const pageRoutes = routes.filter((r) => r.kind === 'page');
  const classes = exports.filter((e) => e.kind === 'class').map((e) => e.name);

  const parts: string[] = [];

  if (files.length === 0) {
    parts.push(`${title} is registered in the section registry but currently has no matched source files.`);
    return parts.join(' ');
  }

  const hasReact = components.length > 0 || files.some((f) => /\.tsx$/.test(f));

  if (hasReact && apiRoutes.length > 0) {
    parts.push(`${title} is a full-stack subsystem with React surfaces and API transport boundaries.`);
  } else if (hasReact) {
    parts.push(`${title} is a user-facing surface subsystem composed of React components and presentation logic.`);
  } else if (apiRoutes.length > 0) {
    parts.push(`${title} is a server/API subsystem exposing ${apiRoutes.length} route handler${apiRoutes.length !== 1 ? 's' : ''}.`);
  } else {
    parts.push(`${title} provides platform behavior, contracts, or infrastructure used by the rest of DREAMengin.`);
  }

  if (pageRoutes.length > 0) {
    parts.push(`Primary route surface${pageRoutes.length !== 1 ? 's' : ''}: ${pageRoutes.slice(0, 3).map((r) => r.path).join(', ')}${pageRoutes.length > 3 ? ', …' : ''}.`);
  }

  if (hooks.length > 0) {
    parts.push(`It exposes ${hooks.slice(0, 3).join(', ')} as reusable hooks.`);
  }

  if (classes.length > 0) {
    parts.push(`Core abstractions are encapsulated in ${classes.slice(0, 3).join(', ')}.`);
  }

  if (dependsOn.length > 0) {
    const depTitles = dependsOn.slice(0, 3).map(
      (id) => SECTION_REGISTRY.find((s) => s.id === id)?.title ?? id,
    );

    parts.push(`It depends on ${depTitles.join(', ')}.`);
  }

  if (usedBy.length > 0) {
    const usedByTitles = usedBy.slice(0, 3).map(
      (id) => SECTION_REGISTRY.find((s) => s.id === id)?.title ?? id,
    );

    parts.push(`It is consumed by ${usedByTitles.join(', ')}.`);
  }

  return parts.join(' ');
}

// ─────────────────────────────────────────────────────────────────────────────
// Markdown builder
// ─────────────────────────────────────────────────────────────────────────────

function fmtList(items: string[]): string {
  return items.length ? items.map((i) => `- ${i}`).join('\n') : '- _none detected_';
}

function fmtRoutes(routes: RouteEntry[]): string {
  if (routes.length === 0) return '_none_';

  return routes
    .map((r) => {
      const methods = r.methods?.length ? ` \`[${r.methods.join(', ')}]\`` : '';
      return `- \`${r.path}\`${methods} — \`${r.file}\``;
    })
    .join('\n');
}

function fmtSymbolList(names: string[], max = 10): string {
  if (names.length === 0) return '_none_';

  const shown = names.slice(0, max).map((n) => `\`${n}\``).join(', ');

  return names.length > max ? `${shown}, +${names.length - max} more` : shown;
}

function buildFileIndex(files: string[]): string {
  if (files.length === 0) return '- _No files currently matched._';

  return files
    .sort()
    .map((f) => {
      const ext = extname(f).toLowerCase();

      let kind = 'project file';

      if (f.endsWith('/route.ts') || f.endsWith('/route.tsx')) kind = 'API route transport boundary';
      else if (f.endsWith('/page.tsx') || f.endsWith('/page.ts')) kind = 'route page surface';
      else if (ext === '.tsx' || ext === '.jsx') kind = 'React component module';
      else if (ext === '.ts' || ext === '.js') kind = 'TypeScript module';
      else if (ext === '.sql') kind = 'SQL schema/migration';
      else if (ext === '.md') kind = 'documentation';

      return `- \`${f}\` — ${kind}.`;
    })
    .join('\n');
}

function fmtKeyModules(items: string[]): string {
  if (items.length === 0) return '- _none detected_';

  return items.map((item) => `- ${item}`).join('\n');
}

function notableExportsForMarkdown(exports: ExportedSymbol[]): ExportedSymbol[] {
  return exports
    .filter((e) => ['class', 'interface', 'type', 'enum'].includes(e.kind))
    .filter((e) => !isLowSignalExportName(e.name))
    .filter((e) => !isDemoOrMockName(e.name))
    .filter((e) => e.kind === 'class' || e.kind === 'enum' || isImportantExportName(e.name))
    .slice(0, 12);
}

export function buildArchitecturalSectionBlock(
  section: SectionDescriptor,
  files: string[],
  allSubsystems: Array<{ id: string; globs: string[] }>,
): string {
  const model = analyzeSubsystem(section, files, allSubsystems);
  return renderSectionMarkdown('##', section.title, model, files);
}

export function buildArchitecturalSubsectionBlock(
  subsection: SubsectionDescriptor,
  files: string[],
  allSubsystems: Array<{ id: string; globs: string[] }>,
): string {
  const pseudo: SectionDescriptor = { id: subsection.id, title: subsection.title, globs: subsection.globs };
  const model = analyzeSubsystem(pseudo, files, allSubsystems);

  return renderSectionMarkdown('###', subsection.title, model, files);
}

function renderSectionMarkdown(
  headingLevel: '##' | '###',
  title: string,
  model: SubsystemModel,
  files: string[],
): string {
  const subLevel = headingLevel === '##' ? '###' : '####';
  const subSubLevel = headingLevel === '##' ? '####' : '#####';

  const apiRoutes = model.routes.filter((r) => r.kind === 'api');
  const pageRoutes = model.routes.filter((r) => r.kind === 'page');
  const description = generateSubsystemDescription(model);

  const sections: string[] = [
    `${headingLevel} ${title}`,
    description,
  ];

  if (model.responsibilities.length > 0) {
    sections.push(`${subLevel} Responsibilities`, fmtList(model.responsibilities));
  }

  sections.push(`${subLevel} Key Modules`, fmtKeyModules(model.keyModules));

  if (model.dependsOn.length > 0 || model.usedBy.length > 0 || model.integrationPoints.length > 0) {
    sections.push(`${subLevel} Architectural Relationships`);

    if (model.dependsOn.length > 0) {
      const depTitles = model.dependsOn.map((id) => SECTION_REGISTRY.find((s) => s.id === id)?.title ?? id);
      sections.push(fmtList(depTitles.map((t) => `Depends on **${t}**`)));
    }

    if (model.usedBy.length > 0) {
      const usedByTitles = model.usedBy.map((id) => SECTION_REGISTRY.find((s) => s.id === id)?.title ?? id);
      sections.push(fmtList(usedByTitles.map((t) => `Used by **${t}**`)));
    }

    if (model.integrationPoints.length > 0) {
      sections.push(fmtList(model.integrationPoints));
    }
  }

  const hasPublicSurfaces = apiRoutes.length > 0 || pageRoutes.length > 0 || model.components.length > 0;

  if (hasPublicSurfaces) {
    sections.push(`${subLevel} Public Surfaces`);

    if (pageRoutes.length > 0) {
      sections.push('**Routes:**', fmtRoutes(pageRoutes));
    }

    if (apiRoutes.length > 0) {
      sections.push('**API Endpoints:**', fmtRoutes(apiRoutes));
    }

    if (model.components.length > 0) {
      sections.push('**Production Components:**', fmtSymbolList(model.components));
    }
  }

  const notableExports = notableExportsForMarkdown(model.exports);

  if (notableExports.length > 0 || model.hooks.length > 0) {
    sections.push(`${subLevel} Notable Abstractions`);

    if (notableExports.length > 0) {
      sections.push(fmtList(
        notableExports.map((e) => `\`${e.name}\` — ${e.kind} in \`${e.file}\``),
      ));
    }

    if (model.hooks.length > 0) {
      sections.push(fmtList(model.hooks.slice(0, 8).map((h) => `\`${h}\` — hook`)));
    }
  }

  if (model.capabilities.length > 0) {
    sections.push(`${subLevel} Capabilities`, fmtList(model.capabilities));
  }

  const tree = buildTreeLines(files).join('\n');

  sections.push(
    `${subSubLevel} File Structure`,
    '```text',
    tree,
    '```',
    `<details><summary>${title} file index (${files.length} files)</summary>`,
    '',
    buildFileIndex(files),
    '',
    '</details>',
  );

  return sections.join('\n') + '\n';
}

// ─────────────────────────────────────────────────────────────────────────────
// README section replacement
// ─────────────────────────────────────────────────────────────────────────────

function findSectionBounds(readme: string, title: string): { start: number; end: number } | null {
  const headingPattern = new RegExp(`(^|\\n)## ${escapeRegExp(title)}\\s*\\n`, 'm');
  const match = headingPattern.exec(readme);

  if (!match || match.index < 0) return null;

  const headingStart = match.index + (match[1] ? match[1].length : 0);
  const searchFrom = headingStart + match[0].replace(/^\n/, '').length;
  const rest = readme.slice(searchFrom);
  const nextSectionOffset = rest.search(/\n##\s+/);
  const sectionEnd = nextSectionOffset === -1 ? readme.length : searchFrom + nextSectionOffset;

  return { start: headingStart, end: sectionEnd };
}

export function replaceSection(readme: string, section: SectionDescriptor, replacement: string): string {
  const bounds = findSectionBounds(readme, section.title);

  if (!bounds) return `${readme.trimEnd()}\n\n${replacement.trim()}\n`;

  return `${readme.slice(0, bounds.start)}${replacement.trim()}\n\n${readme.slice(bounds.end).replace(/^\n+/, '')}`;
}

function removeAllSectionsByTitle(readme: string, title: string): string {
  let next = readme;
  let guard = 0;

  while (guard < 200) {
    const bounds = findSectionBounds(next, title);
    if (!bounds) break;

    next = `${next.slice(0, bounds.start)}${next.slice(bounds.end).replace(/^\n+/, '')}`;
    guard++;
  }

  return next;
}

function stripManagedGeneratedSections(readme: string, sections: SectionDescriptor[]): string {
  let next = readme;

  for (const section of sections) {
    next = removeAllSectionsByTitle(next, section.title);
  }

  return `${next.trimEnd()}\n`;
}

function dedupeManagedGeneratedSections(readme: string, sections: SectionDescriptor[]): string {
  let next = readme;

  for (const section of sections) {
    const first = findSectionBounds(next, section.title);
    if (!first) continue;

    const preserved = next.slice(first.start, first.end).trim();

    next = removeAllSectionsByTitle(next, section.title);
    next = `${next.slice(0, first.start)}${preserved}\n\n${next.slice(first.start).replace(/^\n+/, '')}`;
  }

  return `${next.trimEnd()}\n`;
}

export function upsertSubsectionInSection(
  sectionBody: string,
  subsection: SubsectionDescriptor,
  replacement: string,
): string {
  const subsectionPattern = new RegExp(`(^|\\n)### ${escapeRegExp(subsection.title)}\\s*\\n`, 'm');
  const match = subsectionPattern.exec(sectionBody);

  if (!match || match.index < 0) {
    return `${sectionBody.trimEnd()}\n\n${replacement.trim()}\n`;
  }

  const subsectionStart = match.index + (match[1] ? match[1].length : 0);
  const searchFrom = subsectionStart + match[0].replace(/^\n/, '').length;
  const rest = sectionBody.slice(searchFrom);
  const nextSubsectionOffset = rest.search(/\n###\s+/);
  const subsectionEnd = nextSubsectionOffset === -1 ? sectionBody.length : searchFrom + nextSubsectionOffset;

  return `${sectionBody.slice(0, subsectionStart)}${replacement.trim()}\n\n${sectionBody.slice(subsectionEnd).replace(/^\n+/, '')}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Affected section inference
// ─────────────────────────────────────────────────────────────────────────────

function inferDynamicSections(changedFiles: string[], registry: SectionDescriptor[]): SectionDescriptor[] {
  const handledTopLevels = new Set(
    registry.flatMap((s) => s.globs).map((g) => normalizePath(g).split('/')[0]).filter(Boolean),
  );

  const dynamic: SectionDescriptor[] = [];
  const seen = new Set<string>();
  const usedIds = new Set(registry.map((s) => s.id));

  for (const cf of changedFiles) {
    const top = normalizePath(cf).split('/')[0];

    if (!top || top.startsWith('.') || handledTopLevels.has(top) || seen.has(top)) continue;

    seen.add(top);

    const title = top
      .split(/[-_]/g)
      .filter(Boolean)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');

    const baseId = top.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';

    let id = baseId;
    let seq = 2;

    while (usedIds.has(id)) {
      id = `${baseId}-${seq}`;
      seq++;
    }

    usedIds.add(id);
    dynamic.push({ id, title, globs: [`${top}/**`] });
  }

  return dynamic;
}

function inferFullRebuildDynamicSections(allFiles: string[], registry: SectionDescriptor[]): SectionDescriptor[] {
  const dynamic = inferDynamicSections(allFiles, registry);
  const usedIds = new Set([...registry, ...dynamic].map((section) => section.id));
  const usedTitles = new Set([...registry, ...dynamic].map((section) => section.title));

  const topLevelDirs = [...new Set(allFiles.map((file) => normalizePath(file).split('/')[0]).filter(Boolean))]
    .filter((top) => !top.startsWith('.') && top !== 'node_modules')
    .sort();

  for (const top of topLevelDirs) {
    const title = top
      .split(/[-_]/g)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    if (!title || usedTitles.has(title)) continue;

    const baseId = top.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';

    let id = baseId;
    let seq = 2;

    while (usedIds.has(id)) {
      id = `${baseId}-${seq}`;
      seq++;
    }

    usedIds.add(id);
    usedTitles.add(title);

    dynamic.push({ id, title, globs: [`${top}/**`] });
  }

  return dynamic;
}

export function computeAffected(
  changedFiles: string[],
  sections: SectionDescriptor[] = SECTION_REGISTRY,
): Map<string, { section: SectionDescriptor; subsections: Set<string> }> {
  const affected = new Map<string, { section: SectionDescriptor; subsections: Set<string> }>();

  for (const cf of changedFiles.map(normalizePath)) {
    for (const section of sections) {
      if (!matchesAnyGlob(cf, section.globs)) continue;

      if (!affected.has(section.id)) {
        affected.set(section.id, { section, subsections: new Set() });
      }

      if (section.subsections) {
        for (const sub of Object.values(section.subsections)) {
          if (matchesAnyGlob(cf, sub.globs)) {
            affected.get(section.id)!.subsections.add(sub.id);
          }
        }
      }
    }
  }

  return affected;
}

export function buildAutosyncSummary(changedFiles: readonly string[]): AutosyncSummary {
  const normalizedChangedFiles = [...changedFiles].map(normalizePath);
  const dynamicSections = inferDynamicSections(normalizedChangedFiles, SECTION_REGISTRY);
  const sections = [...SECTION_REGISTRY, ...dynamicSections];
  const affected = computeAffected(normalizedChangedFiles, sections);

  const regeneratedSubsections = [...affected.values()].flatMap(({ section, subsections }) =>
    [...subsections].map((subsectionId) => ({
      sectionId: section.id,
      subsectionId,
      title: section.subsections?.[subsectionId]?.title ?? subsectionId,
    })),
  );

  return {
    changedFiles: normalizedChangedFiles,
    affectedSections: [...affected.values()].map(({ section }) => ({ id: section.id, title: section.title })),
    regeneratedSections: [...affected.values()].map(({ section }) => ({ id: section.id, title: section.title })),
    regeneratedSubsections,
    readmeChanged: false,
    fullRebuild: false,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main autosync entry
// ─────────────────────────────────────────────────────────────────────────────

export function runReadmeAutosync(options: { changedFiles: string[]; summaryFile?: string; fullRebuild?: boolean }): AutosyncSummary {
  if (!existsSync(README_PATH)) throw new Error(`README not found at ${README_PATH}`);

  const allFiles = walkFiles(ROOT);
  const fullRebuild = options.fullRebuild === true;

  const dynamicSections = fullRebuild
    ? inferFullRebuildDynamicSections(allFiles, SECTION_REGISTRY)
    : inferDynamicSections(options.changedFiles, SECTION_REGISTRY);

  const sections = [...SECTION_REGISTRY, ...dynamicSections];

  const affected = fullRebuild
    ? new Map(sections.map((section) => [
      section.id,
      { section, subsections: new Set(Object.keys(section.subsections ?? {})) },
    ]))
    : computeAffected(options.changedFiles, sections);

  if (affected.size === 0) {
    const summary: AutosyncSummary = {
      changedFiles: options.changedFiles.map(normalizePath),
      affectedSections: [],
      regeneratedSections: [],
      regeneratedSubsections: [],
      readmeChanged: false,
      fullRebuild,
    };

    if (options.summaryFile) {
      writeFileSync(options.summaryFile, JSON.stringify(summary, null, 2));
    }

    return summary;
  }

  const subsystemIndex: Array<{ id: string; globs: string[] }> = sections.map((s) => ({
    id: s.id,
    globs: s.globs,
  }));

  let readme = readFileSync(README_PATH, 'utf8');

  if (fullRebuild) {
    readme = stripManagedGeneratedSections(readme, sections);
  }

  const regeneratedSubsections: Array<{ sectionId: string; subsectionId: string; title: string }> = [];
  const regeneratedSections: Array<{ id: string; title: string }> = [];

  for (const { section, subsections } of affected.values()) {
    const sectionFiles = allFiles.filter((f) => matchesAnyGlob(f, section.globs));

    let replacement = buildArchitecturalSectionBlock(section, sectionFiles, subsystemIndex);

    if (subsections.size > 0 && section.subsections) {
      for (const subsectionId of [...subsections].sort()) {
        const subsection = section.subsections[subsectionId];
        if (!subsection) continue;

        const subFiles = allFiles.filter((f) => matchesAnyGlob(f, subsection.globs));
        const subBlock = buildArchitecturalSubsectionBlock(subsection, subFiles, subsystemIndex);

        replacement = upsertSubsectionInSection(replacement, subsection, subBlock);
        regeneratedSubsections.push({ sectionId: section.id, subsectionId, title: subsection.title });
      }
    }

    readme = replaceSection(readme, section, replacement);
    regeneratedSections.push({ id: section.id, title: section.title });
  }

  if (!fullRebuild) {
    readme = dedupeManagedGeneratedSections(readme, sections);
  }

  const original = readFileSync(README_PATH, 'utf8');
  const readmeChanged = original !== readme;

  if (readmeChanged) {
    writeFileSync(README_PATH, readme);
  }

  const summary: AutosyncSummary = {
    changedFiles: options.changedFiles.map(normalizePath),
    affectedSections: [...affected.values()].map(({ section }) => ({ id: section.id, title: section.title })),
    regeneratedSections,
    regeneratedSubsections,
    readmeChanged,
    fullRebuild,
  };

  if (options.summaryFile) {
    writeFileSync(options.summaryFile, JSON.stringify(summary, null, 2));
  }

  return summary;
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

function parseArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;

  return process.argv[index + 1];
}

function readChangedFiles(changedFilesPath: string): string[] {
  if (!existsSync(changedFilesPath)) return [];

  return readFileSync(changedFilesPath, 'utf8')
    .split(/\r?\n/g)
    .map((l) => l.trim())
    .filter(Boolean)
    .map(normalizePath);
}

if (process.argv[1] && resolve(process.argv[1]) === __filename) {
  const changedFilesFile = parseArg('--changed-files');
  const summaryFile = parseArg('--summary-file');
  const fullRebuild = process.argv.includes('--full') || !changedFilesFile;
  const changedFiles = changedFilesFile ? readChangedFiles(resolve(changedFilesFile)) : walkFiles(ROOT);

  if (fullRebuild) {
    console.log('readme-autosync: running full README rebuild from live repo state.');
  }

  const summary = runReadmeAutosync({
    changedFiles,
    fullRebuild,
    summaryFile: summaryFile ? resolve(summaryFile) : undefined,
  });

  console.log(JSON.stringify(summary, null, 2));
}
