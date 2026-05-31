#!/usr/bin/env node
/**
 * Repository Architecture Analyzer
 *
 * Scans repository for:
 * 1. Errors via lint/typecheck/build
 * 2. Orphaned/unused code by cross-referencing imports/exports
 * 3. Reads Architecture.md to understand intended structure
 * 4. Matches orphaned code to best architectural locations
 * 5. Flags completely unused files for deletion
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ─── Configuration ────────────────────────────────────────────────────────────

const CONFIG = {
  scanExtensions: [
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".mjs",
    ".cjs",
    ".py",
    ".go",
    ".rs",
    ".java",
    ".kt",
    ".swift",
    ".rb",
    ".php",
    ".cs",
  ],
  ignorePatterns: [
    "node_modules",
    ".git",
    "dist",
    "build",
    ".github",
    "flagged-for-deletion",
    "coverage",
    ".next",
    ".nuxt",
    "out",
    "public",
    "static",
    "vendor",
    "__snapshots__",
    ".storybook",
    ".husky",
  ],
  architectureFile: "Architecture.md",
  outputDir: ".github",
  testPatterns: [
    "*.test.",
    "*.spec.",
    "__tests__",
    "__mocks__",
    "tests/",
    "test/",
  ],
  configPatterns: [
    ".config.",
    "vite.config",
    "webpack.config",
    "rollup.config",
    "eslint.config",
    "prettier.config",
    "tsconfig",
    "jest.config",
    "next.config",
    "nuxt.config",
    "tailwind.config",
    "postcss.config",
    "babel.config",
    ".d.ts",
  ],
};

// ─── CLI Args ─────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {
    architecture: CONFIG.architectureFile,
    mode: "analyze", // analyze | auto-cleanup | dry-run
    orphanedRelocation: true,
    flagDeletion: true,
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--architecture=")) {
      parsed.architecture = args[i].split("=")[1];
    } else if (args[i].startsWith("--mode=")) {
      parsed.mode = args[i].split("=")[1];
    } else if (args[i].startsWith("--orphaned-relocation=")) {
      parsed.orphanedRelocation = args[i].split("=")[1] === "true";
    } else if (args[i].startsWith("--flag-deletion=")) {
      parsed.flagDeletion = args[i].split("=")[1] === "true";
    }
  }

  return parsed;
}

const ARGS = parseArgs();

// ─── Logging ──────────────────────────────────────────────────────────────────

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

function log(level, message) {
  const timestamp = new Date().toISOString();
  switch (level) {
    case "info":
      console.log(`${colors.cyan}[${timestamp}] ℹ ${message}${colors.reset}`);
      break;
    case "success":
      console.log(`${colors.green}[${timestamp}] ✓ ${message}${colors.reset}`);
      break;
    case "warn":
      console.log(`${colors.yellow}[${timestamp}] ⚠ ${message}${colors.reset}`);
      break;
    case "error":
      console.log(`${colors.red}[${timestamp}] ✗ ${message}${colors.reset}`);
      break;
    case "highlight":
      console.log(`${colors.magenta}[${timestamp}] ▶ ${message}${colors.reset}`);
      break;
  }
}

// ─── Architecture.md Parser ───────────────────────────────────────────────────

class ArchitectureParser {
  constructor(filepath) {
    this.filepath = filepath;
    this.sections = [];
    this.layers = [];
    this.modules = [];
    this.patterns = [];
    this.dependencies = [];
    this.raw = "";
  }

  parse() {
    if (!fs.existsSync(this.filepath)) {
      log("error", `Architecture file not found: ${this.filepath}`);
      process.exit(1);
    }

    this.raw = fs.readFileSync(this.filepath, "utf-8");
    log("info", `Parsing architecture document: ${this.filepath}`);

    // Extract all sections by headers
    this.parseSections();

    // Identify architectural layers (e.g., Presentation, Domain, Data)
    this.extractLayers();

    // Extract module/component definitions
    this.extractModules();

    // Extract file patterns and conventions
    this.extractPatterns();

    // Extract dependency rules
    this.extractDependencyRules();

    log("success", `Architecture parsed: ${this.layers.length} layers, ${this.modules.length} modules, ${this.patterns.length} patterns`);

    return {
      layers: this.layers,
      modules: this.modules,
      patterns: this.patterns,
      dependencies: this.dependencies,
      raw: this.raw,
    };
  }

  parseSections() {
    const headerRegex = /^(#{1,4})\s+(.+)$/gm;
    let match;
    const sections = [];

    while ((match = headerRegex.exec(this.raw)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const startIdx = match.index;

      // Find next header at same or higher level
      const nextHeaderRegex = new RegExp(`^#{1,${level}}\\s+`, "gm");
      nextHeaderRegex.lastIndex = startIdx + 1;
      const nextMatch = nextHeaderRegex.exec(this.raw);
      const endIdx = nextMatch ? nextMatch.index : this.raw.length;

      const content = this.raw.slice(startIdx + match[0].length, endIdx).trim();

      sections.push({ level, title, content, startIdx, endIdx });
    }

    this.sections = sections;
  }

  extractLayers() {
    // Common layer keywords
    const layerKeywords = [
      "layer",
      "layers",
      "tier",
      "tiers",
      "level",
      "architecture",
      "structure",
      "organization",
    ];

    for (const section of this.sections) {
      const lowerTitle = section.title.toLowerCase();
      const lowerContent = section.content.toLowerCase();

      // Direct layer mentions
      if (
        layerKeywords.some((k) => lowerTitle.includes(k)) ||
        layerKeywords.some((k) => lowerContent.includes(k))
      ) {
        // Extract bullet points as potential layers
        const bulletMatches = section.content.match(/^[-*]\s+(.+)$/gm);
        if (bulletMatches) {
          bulletMatches.forEach((b) => {
            const layerName = b.replace(/^[-*]\s+/, "").trim();
            // Extract folder patterns if mentioned in parentheses or code blocks
            const folderMatch = layerName.match(/`([^`]+)`/);
            const folderPattern = folderMatch ? folderMatch[1] : null;

            this.layers.push({
              name: layerName.replace(/`[^`]+`/g, "").trim(),
              folderPattern: folderPattern,
              sourceSection: section.title,
            });
          });
        }
      }

      // Extract explicit layer definitions like "### Domain Layer" or "## Data Layer"
      const layerMatch = lowerTitle.match(
        /(presentation|domain|data|infrastructure|application|service|api|ui|core|shared|common|utils|features?|entities?|use.case|controller|view|model|store)\s*(?:layer|tier|level)?/,
      );
      if (layerMatch) {
        const folderMatch = section.content.match(/`([^`\/]+)\/`/g);
        const folderPatterns = folderMatch
          ? folderMatch.map((f) => f.replace(/`/g, ""))
          : [];

        this.layers.push({
          name: section.title,
          folderPattern: folderPatterns,
          sourceSection: section.title,
          description: section.content.slice(0, 300),
        });
      }
    }

    // If no layers found, infer from common patterns
    if (this.layers.length === 0) {
      this.inferDefaultLayers();
    }
  }

  inferDefaultLayers() {
    log("warn", "No explicit layers found in Architecture.md, using defaults");
    this.layers = [
      {
        name: "Presentation / UI",
        folderPattern: ["components", "pages", "views", "ui", "app"],
        sourceSection: "Inferred",
        description: "User interface components and pages",
      },
      {
        name: "Domain / Business Logic",
        folderPattern: ["domain", "services", "hooks", "store", "state"],
        sourceSection: "Inferred",
        description: "Business logic, state management, services",
      },
      {
        name: "Data / Infrastructure",
        folderPattern: ["api", "data", "infra", "db", "repositories", "lib"],
        sourceSection: "Inferred",
        description: "Data access, external APIs, infrastructure",
      },
      {
        name: "Shared / Common",
        folderPattern: ["shared", "common", "utils", "types", "constants"],
        sourceSection: "Inferred",
        description: "Shared utilities, types, constants",
      },
    ];
  }

  extractModules() {
    // Look for module/component definitions
    const modulePatterns = [
      /(?:module|component|feature|service)s?\s*[:\-]?\s*$/gim,
      /^(?:#{2,4})\s+(?:modules?|components?|features?|services?|domains?)/gim,
    ];

    for (const section of this.sections) {
      const lowerTitle = section.title.toLowerCase();
      if (
        lowerTitle.includes("module") ||
        lowerTitle.includes("component") ||
        lowerTitle.includes("feature") ||
        lowerTitle.includes("service") ||
        lowerTitle.includes("domain")
      ) {
        const bulletMatches = section.content.match(/^[-*]\s+(.+)$/gm);
        if (bulletMatches) {
          bulletMatches.forEach((b) => {
            const modName = b.replace(/^[-*]\s+/, "").trim();
            const folderMatch = modName.match(/`([^`]+)`/);
            this.modules.push({
              name: modName.replace(/`[^`]+`/g, "").trim(),
              folderPattern: folderMatch ? folderMatch[1] : null,
              parentSection: section.title,
            });
          });
        }
      }
    }
  }

  extractPatterns() {
    // Extract file naming conventions and folder patterns
    const codeBlockMatches = this.raw.match(/```[\s\S]*?```/g) || [];

    for (const block of codeBlockMatches) {
      // Look for directory tree structures
      const treeLines = block.split("\n");
      for (const line of treeLines) {
        // Match patterns like src/components/ or features/
        const dirMatches = line.match(/([\w-]+\/)+/g);
        if (dirMatches) {
          dirMatches.forEach((d) => {
            this.patterns.push({
              type: "directory",
              pattern: d,
              source: "code-block",
            });
          });
        }

        // Match file patterns
        const fileMatches = line.match(/[\w-]+\.\w+/g);
        if (fileMatches) {
          fileMatches.forEach((f) => {
            if (f.includes(".")) {
              this.patterns.push({
                type: "file",
                pattern: f,
                source: "code-block",
              });
            }
          });
        }
      }
    }

    // Extract naming conventions from text
    const conventionMatches = this.raw.match(
      /(?:naming.?convention|convention|pattern)s?[^.]*:([^\n]+)/gi,
    );
    if (conventionMatches) {
      conventionMatches.forEach((c) => {
        this.patterns.push({
          type: "naming-convention",
          pattern: c.trim(),
          source: "text",
        });
      });
    }
  }

  extractDependencyRules() {
    // Extract dependency direction rules (e.g., "Domain cannot depend on Presentation")
    const depMatches = this.raw.match(
      /(?:depends?\s+on|cannot\s+depend|allowed\s+imports|import\s+from|reference)[^.\n]+/gi,
    );
    if (depMatches) {
      depMatches.forEach((d) => {
        this.dependencies.push({
          rule: d.trim(),
          type: "dependency-rule",
        });
      });
    }
  }
}

// ─── Repository Scanner ───────────────────────────────────────────────────────

class RepositoryScanner {
  constructor(rootDir) {
    this.rootDir = rootDir;
    this.files = [];
    this.importGraph = new Map();
    this.exportMap = new Map();
    this.fileMetadata = new Map();
  }

  scan() {
    log("info", "Scanning repository for source files...");
    this.files = this.walkDir(this.rootDir);
    log("success", `Found ${this.files.length} source files`);

    log("info", "Building import/export graph...");
    this.buildModuleGraph();
    log("success", `Import graph built: ${this.importGraph.size} modules`);

    return {
      files: this.files,
      importGraph: this.importGraph,
      exportMap: this.exportMap,
      fileMetadata: this.fileMetadata,
    };
  }

  walkDir(dir, relativeTo = "") {
    let results = [];

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.join(relativeTo, entry.name);

        if (entry.isDirectory()) {
          // Skip ignored directories
          if (CONFIG.ignorePatterns.some((p) => entry.name === p || relPath.includes(p))) {
            continue;
          }
          results = results.concat(this.walkDir(fullPath, relPath));
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name);
          if (CONFIG.scanExtensions.includes(ext)) {
            // Skip config files
            if (CONFIG.configPatterns.some((p) => entry.name.includes(p))) {
              continue;
            }
            results.push(relPath);
          }
        }
      }
    } catch (err) {
      log("warn", `Could not read directory: ${dir}`);
    }

    return results;
  }

  buildModuleGraph() {
    for (const file of this.files) {
      const fullPath = path.join(this.rootDir, file);
      const content = fs.readFileSync(fullPath, "utf-8");
      const ext = path.extname(file);

      // Classify file type
      const isTest = CONFIG.testPatterns.some((p) => file.includes(p));
      const isConfig = CONFIG.configPatterns.some((p) => file.includes(p));

      this.fileMetadata.set(file, {
        size: content.length,
        lines: content.split("\n").length,
        extension: ext,
        isTest,
        isConfig,
        directory: path.dirname(file),
        filename: path.basename(file),
        exports: [],
        imports: [],
      });

      // Parse imports based on file extension
      const imports = this.parseImports(content, ext, file);
      const exports = this.parseExports(content, ext);

      this.importGraph.set(file, imports);
      this.exportMap.set(file, exports);

      const meta = this.fileMetadata.get(file);
      meta.imports = imports;
      meta.exports = exports;
    }

    // Resolve import targets
    for (const [file, imports] of this.importGraph) {
      for (const imp of imports) {
        if (imp.source.startsWith(".") || imp.source.startsWith("/")) {
          const resolved = this.resolveImport(file, imp.source);
          if (resolved) {
            imp.resolved = resolved;
          }
        }
      }
    }
  }

  parseImports(content, ext, filePath) {
    const imports = [];

    if ([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].includes(ext)) {
      // ES6 imports
      const es6Matches = content.matchAll(/import\s+(?:(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+)?['"]([^'"]+)['"];?/g);
      for (const match of es6Matches) {
        imports.push({ type: "es6", source: match[1], raw: match[0] });
      }

      // CommonJS requires
      const cjsMatches = content.matchAll(/require\(['"]([^'"]+)['"]\)/g);
      for (const match of cjsMatches) {
        imports.push({ type: "cjs", source: match[1], raw: match[0] });
      }

      // Dynamic imports
      const dynMatches = content.matchAll(/import\(['"]([^'"]+)['"]\)/g);
      for (const match of dynMatches) {
        imports.push({ type: "dynamic", source: match[1], raw: match[0] });
      }
    }

    if ([".py"].includes(ext)) {
      const pyMatches = content.matchAll(/(?:from\s+([\w.]+)\s+import|import\s+([\w.]+))/g);
      for (const match of pyMatches) {
        imports.push({
          type: "python",
          source: match[1] || match[2],
          raw: match[0],
        });
      }
    }

    if ([".go"].includes(ext)) {
      const goMatches = content.matchAll(/import\s+(?:\(\s*)?["']([^"']+)["']/g);
      for (const match of goMatches) {
        imports.push({ type: "go", source: match[1], raw: match[0] });
      }
    }

    if ([".rs"].includes(ext)) {
      const rsMatches = content.matchAll(/use\s+([\w:]+);/g);
      for (const match of rsMatches) {
        imports.push({ type: "rust", source: match[1], raw: match[0] });
      }
    }

    if ([".java", ".kt"].includes(ext)) {
      const javaMatches = content.matchAll(/import\s+([\w.]+);/g);
      for (const match of javaMatches) {
        imports.push({ type: "java", source: match[1], raw: match[0] });
      }
    }

    return imports;
  }

  parseExports(content, ext) {
    const exports = [];

    if ([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"].includes(ext)) {
      // Named exports
      const namedMatches = content.matchAll(/export\s+(?:const|let|var|function|class|interface|type|enum)\s+(\w+)/g);
      for (const match of namedMatches) {
        exports.push({ type: "named", name: match[1] });
      }

      // Default exports
      const defaultMatches = content.matchAll(/export\s+default\s+(?:class|function)?\s*(\w+)?/g);
      for (const match of defaultMatches) {
        exports.push({ type: "default", name: match[1] || "default" });
      }

      // Re-exports
      const reExportMatches = content.matchAll(/export\s+(?:\*\s+from|{[^}]*}\s+from)\s+['"]([^'"]+)['"]/g);
      for (const match of reExportMatches) {
        exports.push({ type: "re-export", source: match[1] });
      }
    }

    if ([".py"].includes(ext)) {
      // Python exports are typically top-level classes/functions
      const classMatches = content.matchAll(/^class\s+(\w+)/gm);
      for (const match of classMatches) {
        exports.push({ type: "class", name: match[1] });
      }

      const funcMatches = content.matchAll(/^def\s+(\w+)\s*\(/gm);
      for (const match of funcMatches) {
        if (!match[1].startsWith("_")) {
          exports.push({ type: "function", name: match[1] });
        }
      }
    }

    if ([".go"].includes(ext)) {
      const goExportMatches = content.matchAll(/^func\s+([A-Z]\w*)\s*\(/gm);
      for (const match of goExportMatches) {
        exports.push({ type: "function", name: match[1] });
      }

      const typeMatches = content.matchAll(/^type\s+([A-Z]\w*)\s+/gm);
      for (const match of typeMatches) {
        exports.push({ type: "type", name: match[1] });
      }
    }

    return exports;
  }

  resolveImport(fromFile, importPath) {
    const fromDir = path.dirname(path.join(this.rootDir, fromFile));
    const candidates = [];

    // Direct file
    candidates.push(path.join(fromDir, importPath));

    // With extensions
    for (const ext of CONFIG.scanExtensions) {
      candidates.push(path.join(fromDir, importPath + ext));
      if (importPath.endsWith("/index")) {
        candidates.push(path.join(fromDir, importPath.slice(0, -6) + "/index" + ext));
      }
    }

    // Directory index
    for (const ext of CONFIG.scanExtensions) {
      candidates.push(path.join(fromDir, importPath, "index" + ext));
    }

    for (const candidate of candidates) {
      const relCandidate = path.relative(this.rootDir, candidate);
      if (this.files.includes(relCandidate)) {
        return relCandidate;
      }
    }

    return null;
  }
}

// ─── Orphaned Code Analyzer ───────────────────────────────────────────────────

class OrphanedCodeAnalyzer {
  constructor(scanner, architecture) {
    this.scanner = scanner;
    this.architecture = architecture;
    this.orphanedFiles = [];
    this.orphanedExports = [];
    this.unusedImports = [];
  }

  analyze() {
    log("info", "Analyzing orphaned code...");

    this.findOrphanedFiles();
    this.findOrphanedExports();
    this.findUnusedImports();

    log("success", `Analysis complete: ${this.orphanedFiles.length} orphaned files, ${this.orphanedExports.length} orphaned exports, ${this.unusedImports.length} unused imports`);

    return {
      orphanedFiles: this.orphanedFiles,
      orphanedExports: this.orphanedExports,
      unusedImports: this.unusedImports,
    };
  }

  findOrphanedFiles() {
    // A file is orphaned if:
    // 1. No other file imports from it (not an entry point)
    // 2. It's not a config/test file
    // 3. It doesn't export anything (dead code file)

    const allImportedFiles = new Set();

    for (const [file, imports] of this.scanner.importGraph) {
      for (const imp of imports) {
        if (imp.resolved) {
          allImportedFiles.add(imp.resolved);
        }
      }
    }

    for (const file of this.scanner.files) {
      const meta = this.scanner.fileMetadata.get(file);

      // Skip test files (they're imported by test runners)
      if (meta.isTest) continue;

      // Skip entry points (files that don't import anything but are top-level)
      if (meta.imports.length === 0 && meta.directory === ".") continue;

      // Check if this file is imported by anyone
      const isImported = allImportedFiles.has(file);

      // Check if file has no exports at all
      const hasNoExports = meta.exports.length === 0;

      // Check if all exports are unused (no one imports them)
      const allExportsUnused = this.areAllExportsUnused(file);

      if (!isImported && hasNoExports) {
        this.orphanedFiles.push({
          file,
          reason: "no-exports-and-unimported",
          metadata: meta,
          confidence: "high",
        });
      } else if (!isImported && meta.exports.length > 0) {
        this.orphanedFiles.push({
          file,
          reason: "has-exports-but-unimported",
          metadata: meta,
          confidence: "medium",
          exports: meta.exports,
        });
      } else if (allExportsUnused && meta.exports.length > 0) {
        this.orphanedFiles.push({
          file,
          reason: "exports-unused",
          metadata: meta,
          confidence: "medium",
          exports: meta.exports,
        });
      }
    }
  }

  findOrphanedExports() {
    for (const file of this.scanner.files) {
      const meta = this.scanner.fileMetadata.get(file);
      const exports = meta.exports;

      for (const exp of exports) {
        if (exp.type === "re-export") continue;

        const isUsed = this.isExportUsed(file, exp.name);
        if (!isUsed) {
          this.orphanedExports.push({
            file,
            exportName: exp.name,
            exportType: exp.type,
            confidence: "medium",
          });
        }
      }
    }
  }

  findUnusedImports() {
    for (const [file, imports] of this.scanner.importGraph) {
      for (const imp of imports) {
        if (imp.resolved) {
          // Check if any export from the imported file is used
          const importedMeta = this.scanner.fileMetadata.get(imp.resolved);
          if (importedMeta && importedMeta.exports.length > 0) {
            // Complex: we'd need AST parsing to check which specific imports are used
            // For now, mark unresolved imports
          }
        }

        // Mark unresolved local imports as potential issues
        if (
          (imp.source.startsWith(".") || imp.source.startsWith("/")) &&
          !imp.resolved
        ) {
          this.unusedImports.push({
            file,
            import: imp.source,
            reason: "unresolved",
            confidence: "high",
          });
        }
      }
    }
  }

  areAllExportsUnused(file) {
    const meta = this.scanner.fileMetadata.get(file);
    if (!meta || meta.exports.length === 0) return false;

    for (const exp of meta.exports) {
      if (this.isExportUsed(file, exp.name)) return false;
    }

    return true;
  }

  isExportUsed(file, exportName) {
    // Check if any file imports this specific export
    for (const [_, imports] of this.scanner.importGraph) {
      for (const imp of imports) {
        if (imp.resolved === file) {
          // Check if import references this export
          if (imp.raw.includes(exportName) || imp.raw.includes("*")) {
            return true;
          }
        }
      }
    }

    // If it's a default export, more permissive check
    const meta = this.scanner.fileMetadata.get(file);
    if (meta) {
      const defaultExport = meta.exports.find((e) => e.type === "default");
      if (defaultExport && defaultExport.name === exportName) {
        // Default exports are harder to track, assume used if file is imported
        for (const [_, imports] of this.scanner.importGraph) {
          for (const imp of imports) {
            if (imp.resolved === file) return true;
          }
        }
      }
    }

    return false;
  }
}

// ─── Architecture Matcher ─────────────────────────────────────────────────────

class ArchitectureMatcher {
  constructor(scanner, architecture, orphanedAnalyzer) {
    this.scanner = scanner;
    this.architecture = architecture;
    this.orphaned = orphanedAnalyzer;
  }

  generateRelocationPlan() {
    log("info", "Generating orphaned code relocation plan based on architecture...");

    const plan = {
      relocations: [],
      deletions: [],
      integrations: [],
      notes: [],
    };

    for (const orphaned of this.orphaned.orphanedFiles) {
      const file = orphaned.file;
      const meta = this.scanner.fileMetadata.get(file);

      // First, determine if file is truly useless
      if (orphaned.confidence === "high" && orphaned.reason === "no-exports-and-unimported") {
        // Check file size - tiny files with no exports are likely safe to delete
        if (meta.lines <= 5 || meta.size < 200) {
          plan.deletions.push({
            file,
            reason: "Empty or near-empty file with no exports and no importers",
            action: "flag-for-deletion",
          });
          continue;
        }

        // Check if file is a data/config-like file with only exports
        if (meta.exports.length === 0) {
          const content = fs.readFileSync(path.join(this.scanner.rootDir, file), "utf-8");
          // If file only has side effects or console.log, it's dead code
          if (
            content.trim().length === 0 ||
            /^\s*\/\/|^\s*\/\*/.test(content.trim()) ||
            content.includes("console.log") && !content.includes("export")
          ) {
            plan.deletions.push({
              file,
              reason: "File contains no meaningful code (comments only, console.log, or empty)",
              action: "flag-for-deletion",
            });
            continue;
          }
        }
      }

      // For orphaned files with exports, try to match to architecture
      if (orphaned.exports && orphaned.exports.length > 0) {
        const bestLayer = this.findBestLayerForFile(file, meta, orphaned.exports);
        const bestModule = this.findBestModuleForFile(file, meta, orphaned.exports);

        if (bestLayer || bestModule) {
          // Check if file is already in the right place
          const isInCorrectLocation = this.isFileInCorrectLocation(file, bestLayer, bestModule);

          if (!isInCorrectLocation) {
            const suggestedPath = this.generateSuggestedPath(file, meta, bestLayer, bestModule);
            plan.relocations.push({
              file,
              reason: orphaned.reason,
              confidence: orphaned.confidence,
              suggestedLayer: bestLayer?.name || "unknown",
              suggestedModule: bestModule?.name || "unknown",
              suggestedPath,
              exports: orphaned.exports,
              rationale: this.generateRationale(file, meta, bestLayer, bestModule),
            });
          } else {
            plan.integrations.push({
              file,
              reason: `File is correctly placed in ${bestLayer?.name || bestModule?.name} but has no importers`,
              action: "integrate-into-codebase",
              suggestion: this.findIntegrationPoint(file, meta, bestLayer, bestModule),
            });
          }
        } else {
          // Cannot determine architecture placement - flag for deletion if high confidence
          if (orphaned.confidence === "high") {
            plan.deletions.push({
              file,
              reason: `Cannot determine architectural placement. ${orphaned.reason}`,
              action: "flag-for-deletion",
            });
          } else {
            plan.notes.push({
              file,
              reason: `Orphaned but architecture placement unclear. Manual review needed.`,
              exports: orphaned.exports,
            });
          }
        }
      } else {
        // No exports at all
        plan.deletions.push({
          file,
          reason: orphaned.reason,
          action: "flag-for-deletion",
        });
      }
    }

    // Process orphaned exports (unused exports in otherwise-used files)
    for (const exp of this.orphaned.orphanedExports) {
      plan.notes.push({
        file: exp.file,
        reason: `Export "${exp.exportName}" (${exp.exportType}) appears unused`,
        suggestion: "Remove unused export or verify external usage",
        confidence: exp.confidence,
      });
    }

    log("success", `Relocation plan: ${plan.relocations.length} relocations, ${plan.deletions.length} deletions, ${plan.integrations.length} integrations`);

    return plan;
  }

  findBestLayerForFile(file, meta, exports) {
    const dirName = meta.directory.toLowerCase();
    const fileName = meta.filename.toLowerCase();

    // Read file content for semantic analysis
    const content = fs.readFileSync(path.join(this.scanner.rootDir, file), "utf-8");

    let bestLayer = null;
    let bestScore = 0;

    for (const layer of this.architecture.layers) {
      let score = 0;

      // Check directory pattern match
      if (layer.folderPattern) {
        const patterns = Array.isArray(layer.folderPattern)
          ? layer.folderPattern
          : [layer.folderPattern];
        for (const pattern of patterns) {
          if (dirName.includes(pattern.toLowerCase())) {
            score += 10;
          }
        }
      }

      // Semantic analysis from content
      score += this.scoreBySemantic(content, layer.name, layer.description);

      // Export type analysis
      for (const exp of exports) {
        if (exp.type === "named" || exp.type === "default") {
          // Component-like exports go to presentation
          if (
            layer.name.toLowerCase().includes("presentation") ||
            layer.name.toLowerCase().includes("ui")
          ) {
            if (this.isComponentLike(exp.name, content)) score += 5;
          }

          // Service-like exports go to domain
          if (
            layer.name.toLowerCase().includes("domain") ||
            layer.name.toLowerCase().includes("service")
          ) {
            if (this.isServiceLike(exp.name, content)) score += 5;
          }

          // Data access goes to infrastructure
          if (
            layer.name.toLowerCase().includes("data") ||
            layer.name.toLowerCase().includes("infrastructure")
          ) {
            if (this.isDataAccessLike(exp.name, content)) score += 5;
          }

          // Utils go to shared
          if (
            layer.name.toLowerCase().includes("shared") ||
            layer.name.toLowerCase().includes("common") ||
            layer.name.toLowerCase().includes("util")
          ) {
            if (this.isUtilityLike(exp.name, content)) score += 5;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestLayer = layer;
      }
    }

    return bestScore > 0 ? bestLayer : null;
  }

  findBestModuleForFile(file, meta, exports) {
    const dirName = meta.directory.toLowerCase();

    let bestModule = null;
    let bestScore = 0;

    for (const mod of this.architecture.modules) {
      let score = 0;

      if (mod.folderPattern) {
        const patterns = Array.isArray(mod.folderPattern)
          ? mod.folderPattern
          : [mod.folderPattern];
        for (const pattern of patterns) {
          if (dirName.includes(pattern.toLowerCase())) {
            score += 10;
          }
        }
      }

      // Check module name in path
      const modNameLower = mod.name.toLowerCase();
      if (dirName.includes(modNameLower) || file.toLowerCase().includes(modNameLower)) {
        score += 8;
      }

      if (score > bestScore) {
        bestScore = score;
        bestModule = mod;
      }
    }

    return bestScore > 0 ? bestModule : null;
  }

  scoreBySemantic(content, layerName, layerDescription) {
    let score = 0;
    const contentLower = content.toLowerCase();

    // Check for React/Vue/Angular patterns in presentation
    if (
      layerName.toLowerCase().includes("presentation") ||
      layerName.toLowerCase().includes("ui")
    ) {
      if (content.includes("React") || content.includes("jsx") || content.includes("tsx")) {
        score += 3;
      }
      if (content.includes("return (") || content.includes("render")) {
        score += 3;
      }
    }

    // Check for API/fetch patterns in data layer
    if (
      layerName.toLowerCase().includes("data") ||
      layerName.toLowerCase().includes("infrastructure")
    ) {
      if (content.includes("fetch(") || content.includes("axios") || content.includes("api")) {
        score += 3;
      }
      if (content.includes("database") || content.includes("prisma") || content.includes("mongoose")) {
        score += 3;
      }
    }

    // Check for business logic in domain layer
    if (
      layerName.toLowerCase().includes("domain") ||
      layerName.toLowerCase().includes("service")
    ) {
      if (content.includes("class") && content.includes("Service")) {
        score += 3;
      }
    }

    // Check for utility patterns
    if (
      layerName.toLowerCase().includes("util") ||
      layerName.toLowerCase().includes("shared") ||
      layerName.toLowerCase().includes("common")
    ) {
      if (content.includes("export const") && content.includes("=>")) {
        score += 2;
      }
    }

    return score;
  }

  isComponentLike(name, content) {
    return (
      /^[A-Z]/.test(name) ||
      content.includes("React") ||
      content.includes("Props") ||
      content.includes("Component")
    );
  }

  isServiceLike(name, content) {
    return (
      name.toLowerCase().includes("service") ||
      name.toLowerCase().includes("usecase") ||
      name.toLowerCase().includes("handler") ||
      content.includes("class") && content.includes("Service")
    );
  }

  isDataAccessLike(name, content) {
    return (
      name.toLowerCase().includes("repository") ||
      name.toLowerCase().includes("dao") ||
      name.toLowerCase().includes("client") ||
      name.toLowerCase().includes("api") ||
      content.includes("fetch(") ||
      content.includes("axios")
    );
  }

  isUtilityLike(name, content) {
    return (
      name.toLowerCase().includes("util") ||
      name.toLowerCase().includes("helper") ||
      name.toLowerCase().includes("format") ||
      /^[a-z]/.test(name) && content.length < 500
    );
  }

  isFileInCorrectLocation(file, layer, module) {
    if (!layer && !module) return false;

    const dirName = path.dirname(file).toLowerCase();

    if (layer?.folderPattern) {
      const patterns = Array.isArray(layer.folderPattern)
        ? layer.folderPattern
        : [layer.folderPattern];
      for (const pattern of patterns) {
        if (dirName.includes(pattern.toLowerCase())) return true;
      }
    }

    if (module?.folderPattern) {
      const patterns = Array.isArray(module.folderPattern)
        ? module.folderPattern
        : [module.folderPattern];
      for (const pattern of patterns) {
        if (dirName.includes(pattern.toLowerCase())) return true;
      }
    }

    return false;
  }

  generateSuggestedPath(file, meta, layer, module) {
    const filename = path.basename(file);

    // Build suggested path from layer + module
    const parts = [];

    if (layer?.folderPattern) {
      const patterns = Array.isArray(layer.folderPattern)
        ? layer.folderPattern
        : [layer.folderPattern];
      parts.push(patterns[0]);
    } else if (layer?.name) {
      parts.push(layer.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
    }

    if (module?.folderPattern) {
      const patterns = Array.isArray(module.folderPattern)
        ? module.folderPattern
        : [module.folderPattern];
      parts.push(patterns[0]);
    } else if (module?.name) {
      parts.push(module.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
    }

    if (parts.length === 0) {
      return path.join("src", filename);
    }

    return path.join(...parts, filename);
  }

  generateRationale(file, meta, layer, module) {
    const reasons = [];

    if (layer) {
      reasons.push(`File semantics match "${layer.name}" layer`);
    }

    if (module) {
      reasons.push(`File belongs to "${module.name}" module`);
    }

    if (meta.exports.length > 0) {
      const exportTypes = [...new Set(meta.exports.map((e) => e.type))].join(", ");
      reasons.push(`Contains ${exportTypes} exports`);
    }

    // Add content-based reasoning
    const content = fs.readFileSync(path.join(this.scanner.rootDir, file), "utf-8");
    if (content.includes("React")) reasons.push("Uses React");
    if (content.includes("fetch(") || content.includes("axios")) reasons.push("Performs HTTP requests");
    if (content.includes("class") && content.includes("Service")) reasons.push("Implements service pattern");

    return reasons.join("; ");
  }

  findIntegrationPoint(file, meta, layer, module) {
    // Find files in the same layer/module that could use this code
    const candidates = [];

    for (const [otherFile, otherMeta] of this.scanner.fileMetadata) {
      if (otherFile === file) continue;

      const otherDir = otherMeta.directory.toLowerCase();

      if (layer?.folderPattern) {
        const patterns = Array.isArray(layer.folderPattern)
          ? layer.folderPattern
          : [layer.folderPattern];
        for (const pattern of patterns) {
          if (otherDir.includes(pattern.toLowerCase())) {
            candidates.push(otherFile);
            break;
          }
        }
      }
    }

    return candidates.length > 0
      ? `Consider importing into: ${candidates.slice(0, 3).join(", ")}${candidates.length > 3 ? "..." : ""}`
      : "No clear integration point found - review manually";
  }
}

// ─── Report Generator ─────────────────────────────────────────────────────────

class ReportGenerator {
  constructor(plan, architecture, orphaned) {
    this.plan = plan;
    this.architecture = architecture;
    this.orphaned = orphaned;
  }

  generate() {
    const outputDir = CONFIG.outputDir;
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // JSON results
    const results = {
      timestamp: new Date().toISOString(),
      architecture: {
        file: ARGS.architecture,
        layers: this.architecture.layers.length,
        modules: this.architecture.modules.length,
        patterns: this.architecture.patterns.length,
      },
      summary: {
        orphanedFiles: this.orphaned.orphanedFiles.length,
        orphanedExports: this.orphaned.orphanedExports.length,
        unusedImports: this.orphaned.unusedImports.length,
        proposedRelocations: this.plan.relocations.length,
        proposedDeletions: this.plan.deletions.length,
        proposedIntegrations: this.plan.integrations.length,
        manualReviewNotes: this.plan.notes.length,
      },
      relocations: this.plan.relocations,
      deletions: this.plan.deletions,
      integrations: this.plan.integrations,
      notes: this.plan.notes,
    };

    fs.writeFileSync(
      path.join(outputDir, "analysis-results.json"),
      JSON.stringify(results, null, 2),
    );

    // Relocation plan markdown
    this.generateRelocationPlan(outputDir);

    // Flagged files markdown
    this.generateFlaggedFiles(outputDir);

    // Flagged for deletion manifest (for Node 25 activation)
    this.generateDeletionManifest(outputDir);

    // Summary for GitHub step summary
    this.generateSummary(outputDir);

    log("success", `Reports written to ${outputDir}/`);
  }

  generateRelocationPlan(outputDir) {
    let md = "### 🔄 Proposed Code Relocations\n\n";

    if (this.plan.relocations.length === 0) {
      md += "_No relocations needed. All orphaned files are correctly placed or should be deleted._\n";
    } else {
      md += "| File | Reason | Suggested Location | Rationale | Confidence |\n";
      md += "|------|--------|-------------------|-----------|------------|\n";

      for (const r of this.plan.relocations) {
        const safeFile = r.file.replace(/\|/g, "\\|");
        const safeReason = r.reason.replace(/\|/g, "\\|");
        const safePath = r.suggestedPath.replace(/\|/g, "\\|");
        const safeRationale = r.rationale.replace(/\|/g, "\\|").replace(/\n/g, " ");
        const confidenceEmoji = r.confidence === "high" ? "🔴" : "🟡";

        md += `| ${safeFile} | ${safeReason} | \`${safePath}\` | ${safeRationale} | ${confidenceEmoji} ${r.confidence} |\n`;
      }
    }

    md += "\n";

    // Integrations
    if (this.plan.integrations.length > 0) {
      md += "### 🔗 Files Needing Integration\n\n";
      md += "These files are in the correct architectural location but have no importers:\n\n";
      md += "| File | Suggestion |\n";
      md += "|------|------------|\n";

      for (const i of this.plan.integrations) {
        md += `| ${i.file} | ${i.suggestion} |\n`;
      }

      md += "\n";
    }

    fs.writeFileSync(path.join(outputDir, "orphaned-relocation-plan.md"), md);
  }

  generateFlaggedFiles(outputDir) {
    let md = "### 🚩 Files Flagged for Deletion\n\n";

    if (this.plan.deletions.length === 0) {
      md += "_No files flagged for deletion._\n";
    } else {
      md += "These files have been identified as completely unused and will be moved to `flagged-for-deletion/` on manual activation:\n\n";
      md += "| File | Reason | Size | Lines |\n";
      md += "|------|--------|------|-------|\n";

      for (const d of this.plan.deletions) {
        const meta = this.scanner?.fileMetadata?.get(d.file);
        const size = meta ? `${(meta.size / 1024).toFixed(1)} KB` : "unknown";
        const lines = meta ? meta.lines : "unknown";
        md += `| \`${d.file}\` | ${d.reason} | ${size} | ${lines} |\n`;
      }

      md += "\n";
      md += "**To activate deletion:** Run `node scripts/cleanup-flagged.js` locally after reviewing.\n";
    }

    // Notes
    if (this.plan.notes.length > 0) {
      md += "\n### 📝 Manual Review Notes\n\n";
      md += "| File | Note |\n";
      md += "|------|------|\n";

      for (const n of this.plan.notes) {
        md += `| ${n.file} | ${n.reason}${n.suggestion ? ` - ${n.suggestion}` : ""} |\n`;
      }
    }

    fs.writeFileSync(path.join(outputDir, "flagged-files.md"), md);
  }

  generateDeletionManifest(outputDir) {
    const manifest = {
      version: "1.0.0",
      createdAt: new Date().toISOString(),
      architecture: ARGS.architecture,
      totalFiles: this.plan.deletions.length,
      files: this.plan.deletions.map((d) => ({
        originalPath: d.file,
        reason: d.reason,
        confidence: "high",
        flaggedAt: new Date().toISOString(),
      })),
    };

    fs.writeFileSync(
      path.join(outputDir, "flagged-for-deletion-manifest.json"),
      JSON.stringify(manifest, null, 2),
    );
  }

  generateSummary(outputDir) {
    const summary = `## 🧹 Repository Architecture Cleanup Summary

### Scan Results
- **Orphaned files found:** ${this.orphaned.orphanedFiles.length}
- **Orphaned exports found:** ${this.orphaned.orphanedExports.length}
- **Unused imports found:** ${this.orphaned.unusedImports.length}

### Proposed Actions
- **🔄 Relocations:** ${this.plan.relocations.length}
- **🚩 Flagged for deletion:** ${this.plan.deletions.length}
- **🔗 Need integration:** ${this.plan.integrations.length}
- **📝 Need manual review:** ${this.plan.notes.length}

### Architecture Understanding
- **Document:** ${ARGS.architecture}
- **Layers detected:** ${this.architecture.layers.map((l) => l.name).join(", ") || "N/A"}
- **Modules detected:** ${this.architecture.modules.length}

${this.plan.deletions.length > 0 ? '> ⚠️ **' + this.plan.deletions.length + ' files are flagged for deletion.** Review them in the artifacts before running cleanup.' : '> ✅ No files flagged for deletion.'}
`;

    fs.writeFileSync(path.join(outputDir, "analysis-summary.md"), summary);
  }

  setScanner(scanner) {
    this.scanner = scanner;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  log("highlight", "═══════════════════════════════════════════════════════");
  log("highlight", "  Repository Architecture Cleanup Analyzer");
  log("highlight", `  Mode: ${ARGS.mode} | Architecture: ${ARGS.architecture}`);
  log("highlight", "═══════════════════════════════════════════════════════");

  const rootDir = process.cwd();

  // Step 1: Parse Architecture.md
  const archParser = new ArchitectureParser(path.join(rootDir, ARGS.architecture));
  const architecture = archParser.parse();

  // Step 2: Scan repository
  const scanner = new RepositoryScanner(rootDir);
  const scanResults = scanner.scan();

  // Step 3: Analyze orphaned code
  const orphanedAnalyzer = new OrphanedCodeAnalyzer(scanner, architecture);
  const orphanedResults = orphanedAnalyzer.analyze();

  // Step 4: Match to architecture and generate plan
  const matcher = new ArchitectureMatcher(scanner, architecture, orphanedAnalyzer);
  const plan = matcher.generateRelocationPlan();

  // Step 5: Generate reports
  const reporter = new ReportGenerator(plan, architecture, orphanedResults);
  reporter.setScanner(scanner);
  reporter.generate();

  // Step 6: Output results
  console.log("\n");
  log("highlight", "═══ ANALYSIS COMPLETE ═══");

  if (plan.relocations.length > 0) {
    log("info", `📦 ${plan.relocations.length} files should be relocated`);
    for (const r of plan.relocations.slice(0, 5)) {
      console.log(`   ${colors.cyan}→${colors.reset} ${r.file} → ${colors.green}${r.suggestedPath}${colors.reset}`);
    }
    if (plan.relocations.length > 5) {
      console.log(`   ... and ${plan.relocations.length - 5} more`);
    }
  }

  if (plan.deletions.length > 0) {
    log("warn", `🚩 ${plan.deletions.length} files flagged for deletion`);
    for (const d of plan.deletions.slice(0, 5)) {
      console.log(`   ${colors.red}✗${colors.reset} ${d.file}`);
    }
    if (plan.deletions.length > 5) {
      console.log(`   ... and ${plan.deletions.length - 5} more`);
    }
  }

  if (plan.integrations.length > 0) {
    log("info", `🔗 ${plan.integrations.length} files need integration into the codebase`);
  }

  if (plan.notes.length > 0) {
    log("warn", `📝 ${plan.notes.length} items need manual review`);
  }

  // GitHub Actions outputs
  if (process.env.GITHUB_OUTPUT) {
    const hasChanges = plan.relocations.length > 0 || plan.deletions.length > 0 ? "true" : "false";
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_changes=${hasChanges}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `orphaned_files=${orphanedResults.orphanedFiles.length}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `flagged_deletions=${plan.deletions.length}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `proposed_relocations=${plan.relocations.length}\n`);
  }

  log("success", "Analysis complete. Reports saved to .github/");
}

main();
