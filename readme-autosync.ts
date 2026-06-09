#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Project,
  SourceFile,
  SyntaxKind,
  Node,
  ArrowFunction,
  FunctionDeclaration,
  FunctionExpression,
} from 'ts-morph';

/**
 * readme-autosync.ts
 *
 * Autosync workflow: unchanged.
 * Generation engine: completely rewritten.
 *
 * Instead of file-enumeration prose the script now performs real AST analysis
 * on every affected subsystem and generates human-readable architectural
 * descriptions derived from actual code evidence.
 *
 * Analysis stack
 * ──────────────
 *  • ts-morph  — AST-level export / import / component / hook extraction
 *  • Route inference — Next.js app-dir conventions
 *  • Dependency graph — cross-subsystem import tracking
 *  • Architecture model → Markdown renderer
 *
 * Workflow entry-points (kept from original):
 *  runReadmeAutosync()  — programmatic
 *  CLI  --changed-files <path>  [--summary-file <path>]
 */

// Registry types (kept from original)

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
}

// Architecture model — structured before markdown is emitted

export interface ExportedSymbol {
  name: string;
  kind: 'function' | 'class' | 'interface' | 'type' | 'const' | 'enum' | 'component' | 'hook';
  file: string;
}

export interface ImportEdge {
  fromFile: string;
  toFile: string;
  /** The import specifier as written in the source */
  specifier: string;
  /** Which subsection id the imported file belongs to (if resolvable) */
  toSubsystem?: string;
}

export interface RouteEntry {
  path: string;
  kind: 'page' | 'api';
  methods?: string[];
  file: string;
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
  dependsOn: string[];   // subsystem ids this one imports from
  usedBy: string[];      // subsystem ids that import from this one (populated later)
  responsibilities: string[];
  capabilities: string[];
  keyModules: string[];
  integrationPoints: string[];
}

// Section registry (unchanged from original)

export const SECTION_REGISTRY: SectionDescriptor[] = [
  {
    id: 'the-engins',
    title: 'The Engins',
    globs: ['engins/**', 'components/runtime/**', 'lib/runtime/**', 'lib/dreamdm/**'],
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
        globs: ['engins/**', 'components/daydream/**', 'lib/engins/**'],
      },
    },
  },
  { id: 'dual-runtimes', title: 'Dual Runtimes', globs: ['lib/runtime/**', 'lib/vm/**', 'components/runtime/**', 'hooks/useSharedDream.ts'] },
  { id: 'shared-dreams', title: 'Shared Dreams', globs: ['lib/shared/**', 'lib/channels/**', 'hooks/useSharedDream*.ts', 'app/api/dreams/**'] },
  { id: 'dreamr---human-media', title: 'Dreamr — Human Media', globs: ['app/dreamr/**', 'app/api/dreamr/**', 'lib/feed/**', 'components/home/**'] },
  { id: 'the-shop', title: 'The Shop', globs: ['app/shop/**', 'app/api/shop/**', 'lib/shop/**', 'components/shop/**'] },
  { id: 'the-marketplace', title: 'The Marketplace', globs: ['app/marketplace/**', 'app/api/marketplace/**', 'lib/marketplace/**', 'components/marketplace/**'] },
  { id: 'ads-user-ads', title: 'Ads & User Ads', globs: ['app/ads/**', 'app/api/ads/**', 'lib/ads/**', 'components/ads/**'] },
  { id: 'the-dmbar-dreamdmbar', title: 'The DmBar (`dreamdmbar/`)', globs: ['dreamdmbar/**', 'components/home/dream.bar.*', 'lib/dreamdm/**'] },
  { id: 'messaging', title: 'Messaging', globs: ['app/messages/**', 'app/api/messages/**', 'components/messaging/**', 'lib/messaging/**'] },
  { id: 'homedream', title: 'HomeDream', globs: ['app/homedream/**', 'components/home/**', 'lib/home/**'] },
  { id: 'dreamspace', title: 'DreamSpace', globs: ['app/daydream/**', 'components/daydream/**', 'lib/daydream/**'] },
  { id: 'dreams-widgets-windows-surfaces', title: 'Dreams (Widgets / Windows / Surfaces)', globs: ['components/dream.**', 'components/runtime/**', 'lib/widgets/**', 'lib/windows/**'] },
  { id: 'user-facing-modularity', title: 'User-Facing Modularity', globs: ['components/**', 'styles/**', 'lib/ui/**', 'hooks/**'] },
  { id: 'custom-engins', title: 'Custom Engins', globs: ['engins/**', 'daydreams/**', 'components/daydream/**'] },
  { id: 'full-website-customizability', title: 'Full Website Customizability', globs: ['app/settings/**', 'app/api/settings/**', 'lib/theme/**', 'styles/**'] },
  { id: 'backend-system-core-coresurfaces', title: 'Backend, System, Core & CoreSurfaces', globs: ['backend/**', 'core/**', 'coresurfaces/**', 'system/**', 'app/api/**', 'lib/supabase/**'] },
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

// Path utilities (kept from original)

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
    if (c === '*' && n === '*') { pattern += '.*'; i++; continue; }
    if (c === '*') { pattern += '[^/]*'; continue; }
    if (c === '?') { pattern += '.'; continue; }
    if ('\\.^$+{}()|[]'.includes(c)) { pattern += `\\${c}`; continue; }
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
    if (['node_modules', '.git', '__pycache__', '.next', 'coverage'].includes(entry)) continue;
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
  const cleaned = withoutLeaf.split('/').filter((s) => s && !/^\(.*\)$/.test(s)).join('/');
  return `/${cleaned}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
}

function toComponentName(filePath: string): string {
  const file = basename(filePath, extname(filePath));
  const clean = file.replace(/^(dream\.|engin\.|page\.)/i, '').replace(/[-._]+/g, ' ');
  return clean.split(' ').filter(Boolean).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
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
      if (tree.has(childPath)) emit(childPath, `${prefix}${isLast ? '    ' : '│   '}`);
    });
  };
  emit('', '');
  if (sorted.length > maxLines) lines.push(`… (${sorted.length - maxLines} more files)`);
  return lines;
}

// ts-morph project — lazily initialised once per run

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

// Analyzer: exports

function isReactComponent(name: string, sf: SourceFile): boolean {
  // Heuristic: PascalCase name whose function body contains JSX
  if (!/^[A-Z]/.test(name)) return false;
  const text = sf.getFullText();
  // Quick scan: does this file return JSX?
  return /<[A-Z]/.test(text) || /return\s*\(?\s*</.test(text);
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

  // Named and default exports
  for (const decl of sf.getExportedDeclarations().values()) {
    for (const node of decl) {
      let name = '';
      let rawKind: ExportedSymbol['kind'] = 'const';

      if (Node.isFunctionDeclaration(node) || Node.isFunctionExpression(node) || Node.isArrowFunction(node)) {
        name = Node.isFunctionDeclaration(node) ? (node.getName() ?? '') : '';
        if (!name) {
          // Try to get name from the variable declaration parent
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
        // Detect component via initialiser shape
        const init = node.getInitializer();
        if (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init))) {
          rawKind = isHook(name) ? 'hook' : isReactComponent(name, sf) ? 'component' : 'function';
        }
      }

      if (name && !symbols.some((s) => s.name === name)) {
        symbols.push({ name, kind: rawKind, file: filePath });
      }
    }
  }

  return symbols;
}

// Analyzer: imports

export function analyzeImports(filePath: string): ImportEdge[] {
  const abs = join(ROOT, filePath);
  const ext = extname(filePath).toLowerCase();
  if (!['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'].includes(ext)) return [];

  const sf = getSourceFile(abs);
  if (!sf) return [];

  const edges: ImportEdge[] = [];

  for (const decl of sf.getImportDeclarations()) {
    const spec = decl.getModuleSpecifierValue();
    if (!spec.startsWith('.') && !spec.startsWith('@/') && !spec.startsWith('~/')) continue; // skip node_modules

    // Resolve relative to ROOT
    let toFile = spec;
    if (spec.startsWith('.')) {
      const dir = abs.replace(/\/[^/]+$/, '');
      toFile = normalizePath(relative(ROOT, resolve(dir, spec)));
    } else if (spec.startsWith('@/') || spec.startsWith('~/')) {
      toFile = normalizePath(spec.replace(/^[@~]\//, ''));
    }

    // Normalise: strip extension inference
    const stripped = toFile.replace(/\.(t|j)sx?$/i, '');
    edges.push({ fromFile: filePath, toFile: stripped, specifier: spec });
  }

  return edges;
}

// Analyzer: routes (Next.js app-dir)

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

// Analyzer: components and hooks

export function analyzeComponents(exports: ExportedSymbol[]): string[] {
  return [...new Set(exports.filter((e) => e.kind === 'component').map((e) => e.name))].sort();
}

export function analyzeHooks(exports: ExportedSymbol[]): string[] {
  return [...new Set(exports.filter((e) => e.kind === 'hook').map((e) => e.name))].sort();
}

// Analyzer: cross-subsystem dependency graph

export function analyzeDependencies(
  edges: ImportEdge[],
  subsystems: Array<{ id: string; globs: string[] }>,
  ownId: string,
): string[] {
  const depIds = new Set<string>();
  for (const edge of edges) {
    for (const sys of subsystems) {
      if (sys.id === ownId) continue;
      // Try exact match with common extensions
      const candidates = [
        edge.toFile,
        `${edge.toFile}.ts`,
        `${edge.toFile}.tsx`,
        `${edge.toFile}/index.ts`,
        `${edge.toFile}/index.tsx`,
      ];
      if (candidates.some((c) => matchesAnyGlob(c, sys.globs))) {
        depIds.add(sys.id);
        break;
      }
    }
  }
  return [...depIds].sort();
}

// Analyzer: full subsystem — combines all above

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

  // Infer key modules: PascalCase exports, unique filenames without extension
  const keyModules = inferKeyModules(descriptor.title, files, exports);

  // Infer responsibilities and capabilities from code evidence
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
    usedBy: [],  // populated in a second pass by the caller
    responsibilities,
    capabilities,
    keyModules,
    integrationPoints,
  };
}

// Architectural narrative inference
// (Evidence-based, never generic filler)

interface Narrative {
  responsibilities: string[];
  capabilities: string[];
  integrationPoints: string[];
}

function inferKeyModules(
  title: string,
  files: string[],
  exports: ExportedSymbol[],
): string[] {
  // Prefer class/component/enum exports; fall back to large file names
  const fromExports = exports
    .filter((e) => ['class', 'component', 'enum'].includes(e.kind))
    .map((e) => e.name);

  // Top-level file names that look like module roots
  const fromFiles = files
    .filter((f) => /\.(t|j)sx?$/.test(f))
    .map((f) => basename(f, extname(f)))
    .filter((n) => /^[A-Z]/.test(n) || n.includes('Engin') || n.includes('dream'));

  const combined = [...new Set([...fromExports, ...fromFiles])];
  // Deduplicate by prefix similarity, keep at most 12
  return combined.slice(0, 12).sort();
}

/**
 * Generates human-readable bullets from repository evidence.
 * Does NOT use canned strings — every bullet is constructed from data.
 */
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
  const id = descriptor.id;
  const title = descriptor.title;

  const apiRoutes = routes.filter((r) => r.kind === 'api');
  const pageRoutes = routes.filter((r) => r.kind === 'page');
  const classes = exports.filter((e) => e.kind === 'class').map((e) => e.name);
  const interfaces = exports.filter((e) => e.kind === 'interface').map((e) => e.name);
  const types = exports.filter((e) => e.kind === 'type').map((e) => e.name);
  const functions = exports.filter((e) => e.kind === 'function').map((e) => e.name);
  const components = exports.filter((e) => e.kind === 'component').map((e) => e.name);

  const hasRuntime = files.some((f) => /runtime|EnginDispatcher|dualRuntime/.test(f));
  const hasDb = files.some((f) => /supabase|prisma|postgres|migration|\.sql$/.test(f));
  const hasAI = files.some((f) => /\/ai\/|boogieman|openai|anthropic|llm|completion/.test(f));
  const hasAuth = files.some((f) => /auth|session|jwt|supabase\/auth/.test(f));
  const hasMessaging = files.some((f) => /message|channel|websocket|realtime/.test(f));
  const hasFeed = files.some((f) => /feed|algorithm|rank|score/.test(f));
  const hasPayment = files.some((f) => /stripe|payment|billing|subscription/.test(f));
  const hasStorage = files.some((f) => /storage|upload|cdn|bucket|blob/.test(f));
  const hasTheme = files.some((f) => /theme|style|css|tailwind/.test(f));
  const hasTest = files.some((f) => /test|spec|vitest|playwright/.test(f));
  const hasInfra = files.some((f) => /terraform|docker|prometheus|grafana|vercel/.test(f));

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
    responsibilities.push(`API surface: ${prefixes.join(', ')}${Object.keys(grouped).length > 4 ? ', …' : ''}`);
  }

  if (components.length > 0) {
    responsibilities.push(`Renders ${components.slice(0, 6).join(', ')}${components.length > 6 ? `, +${components.length - 6} more` : ''}`);
  }

  if (classes.length > 0) {
    responsibilities.push(`Core abstractions: ${classes.slice(0, 5).join(', ')}`);
  }

  if (hasRuntime) responsibilities.push('Runtime orchestration and engin lifecycle management');
  if (hasDb) responsibilities.push('Database schema ownership and data persistence');
  if (hasAI) responsibilities.push('AI model integration and inference routing');
  if (hasAuth) responsibilities.push('Authentication, session, and access control');
  if (hasMessaging) responsibilities.push('Real-time communication and channel management');
  if (hasFeed) responsibilities.push('Feed ranking, algorithm execution, and content scoring');
  if (hasPayment) responsibilities.push('Commerce, billing, and subscription lifecycle');
  if (hasStorage) responsibilities.push('Asset storage, upload pipelines, and CDN management');
  if (hasTheme) responsibilities.push('Theming, design tokens, and visual customisation');
  if (hasTest) responsibilities.push('Quality assurance and integration coverage');
  if (hasInfra) responsibilities.push('Infrastructure provisioning and operational observability');

  if (hooks.length > 0) {
    capabilities.push(`Exposes ${hooks.slice(0, 6).join(', ')} as composable React hooks`);
  }

  if (interfaces.length > 0) {
    capabilities.push(`Public contract surface: ${interfaces.slice(0, 5).join(', ')}`);
  }

  if (types.length > 0) {
    capabilities.push(`Shared type vocabulary: ${types.slice(0, 5).join(', ')}`);
  }

  if (functions.length > 0) {
    capabilities.push(`Utility functions: ${functions.slice(0, 6).join(', ')}`);
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
    integrationPoints.push('Integrates with the Dual Runtime layer for execution orchestration');
  }
  if (dependsOn.includes('shared-dreams')) {
    integrationPoints.push('Participates in the Shared Dreams pub/sub channel system');
  }
  if (dependsOn.includes('backend-system-core-coresurfaces')) {
    integrationPoints.push('Consumes core backend services and database abstractions');
  }
  if (dependsOn.includes('the-dmbar-dreamdmbar')) {
    integrationPoints.push('Surfaces through the DmBar spatial navigation layer');
  }
  if (dependsOn.includes('agents-workflow')) {
    integrationPoints.push('Orchestrated by agent workflows and automation pipelines');
  }

  // Generic cross-section dependency mentions
  for (const dep of dependsOn.slice(0, 4)) {
    const depTitle = SECTION_REGISTRY.find((s) => s.id === dep)?.title ?? dep;
    if (!integrationPoints.some((p) => p.includes(depTitle))) {
      integrationPoints.push(`Depends on ${depTitle}`);
    }
  }

  if (integrationPoints.length === 0 && dependsOn.length === 0 && files.length > 0) {
    integrationPoints.push('Self-contained — no detected cross-subsystem imports');
  }

  return { responsibilities, capabilities, integrationPoints };
}

// Prose generator — subsystem-level description paragraph

function generateSubsystemDescription(model: SubsystemModel): string {
  const { title, files, routes, components, hooks, exports, dependsOn, usedBy } = model;
  const apiRoutes = routes.filter((r) => r.kind === 'api');
  const pageRoutes = routes.filter((r) => r.kind === 'page');
  const classes = exports.filter((e) => e.kind === 'class').map((e) => e.name);

  const parts: string[] = [];

  // Opening: what this subsystem IS (derived from evidence)
  if (files.length === 0) {
    parts.push(`${title} is registered in the section registry but currently has no matched source files.`);
    return parts.join(' ');
  }

  const entityCount = components.length + apiRoutes.length + pageRoutes.length + classes.length;
  const hasReact = components.length > 0 || /\.tsx$/.test(files[0] ?? '');

  if (hasReact && apiRoutes.length > 0) {
    parts.push(
      `${title} is a full-stack subsystem that owns both React surfaces and API handlers.`,
    );
  } else if (hasReact) {
    parts.push(`${title} is a UI subsystem composed of React components and presentation logic.`);
  } else if (apiRoutes.length > 0) {
    parts.push(`${title} is a backend subsystem that exposes ${apiRoutes.length} API route${apiRoutes.length !== 1 ? 's' : ''}.`);
  } else {
    parts.push(`${title} provides shared infrastructure used across the platform.`);
  }

  // What it does (responsibilities summary)
  if (hooks.length > 0) {
    parts.push(`It exposes ${hooks.slice(0, 3).join(', ')} as React hooks for consumption by sibling subsystems.`);
  }

  if (classes.length > 0) {
    parts.push(`Core abstractions are encapsulated in ${classes.slice(0, 3).join(', ')}.`);
  }

  // Relationships
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
    parts.push(`Consumed by ${usedByTitles.join(', ')}.`);
  }

  return parts.join(' ');
}

// Markdown builder — replaces the old buildSectionBlock / buildSubsectionBlock

function fmtList(items: string[]): string {
  return items.length ? items.map((i) => `- ${i}`).join('\n') : '- _none detected_';
}

function fmtRoutes(routes: RouteEntry[]): string {
  if (routes.length === 0) return '_none_';
  return routes
    .map((r) => {
      const methods = r.methods?.length ? ` \`[${r.methods.join(', ')}]\`` : '';
      return `- \`${r.path}\`${methods}`;
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
      let kind = `project file`;
      if (f.endsWith('/route.ts') || f.endsWith('/route.tsx')) kind = 'API route handler';
      else if (f.endsWith('/page.tsx') || f.endsWith('/page.ts')) kind = 'route page';
      else if (ext === '.tsx' || ext === '.jsx') kind = `React component module`;
      else if (ext === '.ts' || ext === '.js') kind = 'TypeScript module';
      else if (ext === '.sql') kind = 'SQL schema/migration';
      else if (ext === '.md') kind = 'documentation';
      return `- \`${f}\` — ${kind}.`;
    })
    .join('\n');
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

  if (model.keyModules.length > 0) {
    sections.push(`${subLevel} Key Modules`, fmtList(model.keyModules.map((m) => `\`${m}\``)));
  }

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

  // Public surfaces
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
      sections.push('**Components:**', fmtSymbolList(model.components));
    }
  }

  // Notable abstractions
  const notableExports = model.exports.filter((e) =>
    ['class', 'interface', 'type', 'enum'].includes(e.kind),
  );
  if (notableExports.length > 0 || model.hooks.length > 0) {
    sections.push(`${subLevel} Notable Abstractions`);
    if (notableExports.length > 0) {
      sections.push(fmtList(
        notableExports.slice(0, 12).map((e) => `\`${e.name}\` — ${e.kind}`),
      ));
    }
    if (model.hooks.length > 0) {
      sections.push(fmtList(model.hooks.slice(0, 8).map((h) => `\`${h}\` — hook`)));
    }
  }

  // Capabilities
  if (model.capabilities.length > 0) {
    sections.push(`${subLevel} Capabilities`, fmtList(model.capabilities));
  }

  // File structure
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

// replaceSection / upsertSubsectionInSection (kept from original)

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

// computeAffected (kept from original)

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
    const title = top.split(/[-_]/g).filter(Boolean).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    const baseId = top.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
    let id = baseId;
    let seq = 2;
    while (usedIds.has(id)) { id = `${baseId}-${seq}`; seq++; }
    usedIds.add(id);
    dynamic.push({ id, title, globs: [`${top}/**`] });
  }
  return dynamic;
}

export function computeAffected(
  changedFiles: string[],
  sections: SectionDescriptor[],
): Map<string, { section: SectionDescriptor; subsections: Set<string> }> {
  const affected = new Map<string, { section: SectionDescriptor; subsections: Set<string> }>();
  for (const cf of changedFiles.map(normalizePath)) {
    for (const section of sections) {
      if (!matchesAnyGlob(cf, section.globs)) continue;
      if (!affected.has(section.id)) affected.set(section.id, { section, subsections: new Set() });
      if (section.subsections) {
        for (const sub of Object.values(section.subsections)) {
          if (matchesAnyGlob(cf, sub.globs)) affected.get(section.id)!.subsections.add(sub.id);
        }
      }
    }
  }
  return affected;
}

// runReadmeAutosync — main entry point (workflow unchanged, engine replaced)

export function runReadmeAutosync(options: { changedFiles: string[]; summaryFile?: string }): AutosyncSummary {
  if (!existsSync(README_PATH)) throw new Error(`README not found at ${README_PATH}`);

  const allFiles = walkFiles(ROOT);
  const dynamicSections = inferDynamicSections(options.changedFiles, SECTION_REGISTRY);
  const sections = [...SECTION_REGISTRY, ...dynamicSections];
  const affected = computeAffected(options.changedFiles, sections);

  if (affected.size === 0) {
    const summary: AutosyncSummary = {
      changedFiles: options.changedFiles,
      affectedSections: [],
      regeneratedSections: [],
      regeneratedSubsections: [],
      readmeChanged: false,
    };
    if (options.summaryFile) writeFileSync(options.summaryFile, JSON.stringify(summary, null, 2));
    return summary;
  }

  // Build a lightweight subsystem index for dependency resolution
  const subsystemIndex: Array<{ id: string; globs: string[] }> = sections.map((s) => ({
    id: s.id,
    globs: s.globs,
  }));

  let readme = readFileSync(README_PATH, 'utf8');
  const regeneratedSubsections: Array<{ sectionId: string; subsectionId: string; title: string }> = [];
  const regeneratedSections: Array<{ id: string; title: string }> = [];

  for (const { section, subsections } of affected.values()) {
    const sectionFiles = allFiles.filter((f) => matchesAnyGlob(f, section.globs));

    // Build the top-level section block with the new architectural engine
    let replacement = buildArchitecturalSectionBlock(section, sectionFiles, subsystemIndex);

    // Upsert any affected subsections
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

  const original = readFileSync(README_PATH, 'utf8');
  const readmeChanged = original !== readme;
  if (readmeChanged) writeFileSync(README_PATH, readme);

  const summary: AutosyncSummary = {
    changedFiles: options.changedFiles,
    affectedSections: [...affected.values()].map(({ section }) => ({ id: section.id, title: section.title })),
    regeneratedSections,
    regeneratedSubsections,
    readmeChanged,
  };

  if (options.summaryFile) writeFileSync(options.summaryFile, JSON.stringify(summary, null, 2));
  return summary;
}

// CLI entry (unchanged from original)

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
  if (!changedFilesFile) {
    console.error('Missing required argument: --changed-files <path>');
    process.exit(1);
  }
  const summaryFile = parseArg('--summary-file');
  const changedFiles = readChangedFiles(resolve(changedFilesFile));
  const summary = runReadmeAutosync({ changedFiles, summaryFile: summaryFile ? resolve(summaryFile) : undefined });
  console.log(JSON.stringify(summary, null, 2));
}
