#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { inflateRawSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const REPO_ROOT = process.cwd();

const DEFAULT_MAP_PATHS = [
  'Dreamengin.names.json',
  'Dreamengin.names(1).json',
  'fixed_code_tokens.json',
  'fixed_code_tokens(1).json',
  'data/Dreamengin.names.json',
  'data/fixed_code_tokens.json',
  'scripts/decoder/Dreamengin.names.json',
  'scripts/decoder/fixed_code_tokens.json'
];

const TEXT_EXTENSIONS = new Set([
  '.astro', '.c', '.cc', '.cjs', '.cpp', '.css', '.csv', '.cts', '.go', '.h', '.hpp', '.html', '.js', '.json',
  '.jsx', '.md', '.mjs', '.mts', '.py', '.rs', '.scss', '.sh', '.sql', '.svelte', '.toml', '.ts', '.tsx', '.txt',
  '.vue', '.wgsl', '.xml', '.yaml', '.yml'
]);

function usage() {
  return `Usage:
  node scripts/decode-zip-folders.mjs --zip-dir <dir-or-zip> --out-dir <dir> --map <json> --map <json> [--force]

Examples:
  pnpm decode:zips -- --zip-dir ./encoded-zips --out-dir ./decoded --force
  pnpm decode:zips -- --zip-dir ./incoming/a.zip --map ./Dreamengin.names.json --map ./fixed_code_tokens.json

What it does:
  1. Recursively finds .zip files under every --zip-dir target.
  2. Extracts each zip without external dependencies.
  3. Flattens nested zip paths into safe filenames.
  4. Decodes compact tokens such as D727, T80, P55, G44, R58, C44, S54, and B54.
  5. Writes a manifest so every rebased output file is traceable to its zip and original internal path.

Options:
  --zip-dir <path>       Zip file or directory containing zip files. Repeatable. Default: ./zips
  --out-dir <path>       Output directory for flattened decoded files. Default: ./decoded-zips
  --map <path>           Decoder JSON map. Repeatable. Defaults are auto-detected if present.
  --strip-prefix <path>  Remove this prefix from internal zip paths before flattening. Repeatable.
  --manifest <path>      Manifest output path. Default: <out-dir>/decode-manifest.json
  --force                Remove the output directory before writing.
  --dry-run              Read and decode, but do not write output files.
  --include-binary       Also write binary files. By default, binary files are skipped.
  --help                 Print this help.
`;
}

function parseArgs(argv) {
  const options = {
    zipDirs: [],
    outDir: 'decoded-zips',
    maps: [],
    stripPrefixes: [],
    manifest: null,
    force: false,
    dryRun: false,
    includeBinary: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = () => {
      const value = argv[index + 1];
      if (!value || value.startsWith('--')) {
        throw new Error(`${arg} requires a value`);
      }
      index += 1;
      return value;
    };

    switch (arg) {
      case '--zip-dir':
      case '--zip':
        options.zipDirs.push(next());
        break;
      case '--out-dir':
      case '--out':
        options.outDir = next();
        break;
      case '--map':
      case '--maps':
        options.maps.push(next());
        break;
      case '--strip-prefix':
      case '--rebase-from':
        options.stripPrefixes.push(normalizeZipPath(next()));
        break;
      case '--manifest':
        options.manifest = next();
        break;
      case '--force':
        options.force = true;
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--include-binary':
        options.includeBinary = true;
        break;
      case '--help':
      case '-h':
        console.log(usage());
        process.exit(0);
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  if (options.zipDirs.length === 0) {
    options.zipDirs.push('zips');
  }

  if (!options.manifest) {
    options.manifest = join(options.outDir, 'decode-manifest.json');
  }

  return options;
}

function normalizeZipPath(path) {
  return path.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+/, '').replace(/\/+$/, '');
}

function assertSafeZipPath(path) {
  const normalized = normalizeZipPath(path);
  const parts = normalized.split('/').filter(Boolean);
  if (parts.length === 0 || parts.some((part) => part === '.' || part === '..')) {
    throw new Error(`Unsafe zip path: ${path}`);
  }
  if (/^[a-zA-Z]:/.test(normalized) || normalized.startsWith('/')) {
    throw new Error(`Absolute zip path rejected: ${path}`);
  }
  return parts.join('/');
}

function walkZipTargets(targets, outDir) {
  const zips = [];
  const resolvedOut = resolve(REPO_ROOT, outDir);
  const ignoredNames = new Set(['.git', 'node_modules', '.next', 'dist', 'build']);

  function visit(path) {
    const absolute = resolve(REPO_ROOT, path);
    if (!existsSync(absolute)) {
      return;
    }
    if (absolute === resolvedOut || absolute.startsWith(`${resolvedOut}/`)) {
      return;
    }

    const stat = statSync(absolute);
    if (stat.isFile() && absolute.toLowerCase().endsWith('.zip')) {
      zips.push(absolute);
      return;
    }
    if (!stat.isDirectory()) {
      return;
    }

    const name = basename(absolute);
    if (ignoredNames.has(name)) {
      return;
    }

    for (const child of readdirSync(absolute)) {
      visit(join(absolute, child));
    }
  }

  for (const target of targets) {
    visit(target);
  }

  return [...new Set(zips)].sort();
}

function readUInt16(buffer, offset) {
  return buffer.readUInt16LE(offset);
}

function readUInt32(buffer, offset) {
  return buffer.readUInt32LE(offset);
}

function findEndOfCentralDirectory(buffer) {
  const minOffset = Math.max(0, buffer.length - 0xffff - 22);
  for (let offset = buffer.length - 22; offset >= minOffset; offset -= 1) {
    if (readUInt32(buffer, offset) === 0x06054b50) {
      return offset;
    }
  }
  throw new Error('Invalid zip: end of central directory not found');
}

function decodeZipEntries(zipPath) {
  const buffer = readFileSync(zipPath);
  const eocdOffset = findEndOfCentralDirectory(buffer);
  const entryCount = readUInt16(buffer, eocdOffset + 10);
  const centralDirectoryOffset = readUInt32(buffer, eocdOffset + 16);
  const entries = [];

  let offset = centralDirectoryOffset;
  for (let index = 0; index < entryCount; index += 1) {
    if (readUInt32(buffer, offset) !== 0x02014b50) {
      throw new Error(`Invalid zip: central directory header missing at ${offset}`);
    }

    const generalPurposeBitFlag = readUInt16(buffer, offset + 8);
    const compressionMethod = readUInt16(buffer, offset + 10);
    const compressedSize = readUInt32(buffer, offset + 20);
    const uncompressedSize = readUInt32(buffer, offset + 24);
    const fileNameLength = readUInt16(buffer, offset + 28);
    const extraFieldLength = readUInt16(buffer, offset + 30);
    const fileCommentLength = readUInt16(buffer, offset + 32);
    const localHeaderOffset = readUInt32(buffer, offset + 42);
    const nameStart = offset + 46;
    const nameEnd = nameStart + fileNameLength;
    const rawName = buffer.subarray(nameStart, nameEnd);
    const name = rawName.toString((generalPurposeBitFlag & 0x0800) === 0x0800 ? 'utf8' : 'utf8');

    offset = nameEnd + extraFieldLength + fileCommentLength;

    if (name.endsWith('/')) {
      continue;
    }
    if ((generalPurposeBitFlag & 0x0001) === 0x0001) {
      throw new Error(`Encrypted zip entry is unsupported: ${name}`);
    }

    const safeName = assertSafeZipPath(name);
    if (readUInt32(buffer, localHeaderOffset) !== 0x04034b50) {
      throw new Error(`Invalid zip: local file header missing for ${name}`);
    }

    const localNameLength = readUInt16(buffer, localHeaderOffset + 26);
    const localExtraLength = readUInt16(buffer, localHeaderOffset + 28);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressed = buffer.subarray(dataStart, dataStart + compressedSize);

    let data;
    if (compressionMethod === 0) {
      data = Buffer.from(compressed);
    } else if (compressionMethod === 8) {
      data = inflateRawSync(compressed);
    } else {
      throw new Error(`Unsupported zip compression method ${compressionMethod} for ${name}`);
    }

    if (data.length !== uncompressedSize) {
      throw new Error(`Zip entry size mismatch for ${name}: expected ${uncompressedSize}, got ${data.length}`);
    }

    entries.push({ path: safeName, data });
  }

  return entries;
}

function discoverMapPaths(explicitMaps) {
  if (explicitMaps.length > 0) {
    return explicitMaps;
  }

  return DEFAULT_MAP_PATHS.filter((path) => existsSync(resolve(REPO_ROOT, path)));
}

function loadDecoderMaps(paths) {
  const tokenMap = new Map();
  const loaded = [];

  for (const path of paths) {
    const absolute = resolve(REPO_ROOT, path);
    if (!existsSync(absolute)) {
      throw new Error(`Decoder map not found: ${path}`);
    }

    const parsed = JSON.parse(readFileSync(absolute, 'utf8'));
    let count = 0;
    for (const [key, value] of Object.entries(parsed)) {
      if (key === '__legend') {
        continue;
      }
      if (/^[A-Z]\d+$/.test(key) && typeof value === 'string') {
        tokenMap.set(key, value);
        count += 1;
      }
    }
    loaded.push({ path: relative(REPO_ROOT, absolute), entries: count });
  }

  return { tokenMap, loaded };
}

function looksLikeText(buffer, path) {
  if (TEXT_EXTENSIONS.has(extname(path).toLowerCase())) {
    return true;
  }
  const sample = buffer.subarray(0, Math.min(buffer.length, 4096));
  if (sample.includes(0)) {
    return false;
  }
  const decoded = sample.toString('utf8');
  const replacementCount = [...decoded].filter((char) => char === '\ufffd').length;
  return replacementCount === 0;
}

function decodeText(text, tokenMap) {
  let replacements = 0;
  const decoded = text.replace(/(?<![A-Za-z0-9_$])([A-Z]\d{1,6})(?![A-Za-z0-9_$])/g, (match, token) => {
    const replacement = tokenMap.get(token);
    if (!replacement) {
      return match;
    }
    replacements += 1;
    return replacement;
  });

  return { decoded, replacements };
}

function stripInternalPrefix(internalPath, prefixes) {
  const normalized = normalizeZipPath(internalPath);
  for (const prefix of prefixes) {
    if (normalized === prefix) {
      return basename(normalized);
    }
    if (normalized.startsWith(`${prefix}/`)) {
      return normalized.slice(prefix.length + 1);
    }
  }
  return normalized;
}

function safeFileStem(value) {
  return value
    .replace(/\\/g, '/')
    .split('/')
    .filter(Boolean)
    .join('__')
    .replace(/[^A-Za-z0-9._-]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'entry';
}

function flattenedOutputName(zipPath, internalPath) {
  const zipStem = safeFileStem(basename(zipPath, extname(zipPath)));
  const entryStem = safeFileStem(internalPath);
  return `${zipStem}__${entryStem}`;
}

function sha256(data) {
  return createHash('sha256').update(data).digest('hex');
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const zipPaths = walkZipTargets(options.zipDirs, options.outDir);
  const mapPaths = discoverMapPaths(options.maps);
  const { tokenMap, loaded } = loadDecoderMaps(mapPaths);

  if (zipPaths.length === 0) {
    throw new Error(`No .zip files found under: ${options.zipDirs.join(', ')}`);
  }
  if (tokenMap.size === 0) {
    throw new Error('No decoder tokens loaded. Pass --map <json> or add default map files to the repo root/data/scripts/decoder.');
  }

  const outDir = resolve(REPO_ROOT, options.outDir);
  const manifestPath = resolve(REPO_ROOT, options.manifest);

  if (!options.dryRun) {
    if (options.force && existsSync(outDir)) {
      rmSync(outDir, { recursive: true, force: true });
    }
    mkdirSync(outDir, { recursive: true });
    mkdirSync(dirname(manifestPath), { recursive: true });
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    zipTargets: options.zipDirs,
    outputDirectory: relative(REPO_ROOT, outDir) || '.',
    stripPrefixes: options.stripPrefixes,
    maps: loaded,
    totals: {
      zipFiles: zipPaths.length,
      entriesSeen: 0,
      textEntriesWritten: 0,
      binaryEntriesWritten: 0,
      binaryEntriesSkipped: 0,
      replacements: 0
    },
    entries: []
  };

  const usedOutputNames = new Set();

  for (const zipPath of zipPaths) {
    const entries = decodeZipEntries(zipPath);
    for (const entry of entries) {
      manifest.totals.entriesSeen += 1;
      const rebasedInternalPath = stripInternalPrefix(entry.path, options.stripPrefixes);
      let outputName = flattenedOutputName(zipPath, rebasedInternalPath);
      if (usedOutputNames.has(outputName)) {
        const suffix = sha256(`${zipPath}:${entry.path}`).slice(0, 10);
        outputName = `${outputName}__${suffix}`;
      }
      usedOutputNames.add(outputName);

      const outputPath = join(outDir, outputName);
      const relativeOutputPath = relative(REPO_ROOT, outputPath);
      const isText = looksLikeText(entry.data, entry.path);

      if (!isText && !options.includeBinary) {
        manifest.totals.binaryEntriesSkipped += 1;
        manifest.entries.push({
          zip: relative(REPO_ROOT, zipPath),
          sourcePath: entry.path,
          rebasedPath: rebasedInternalPath,
          outputPath: null,
          type: 'binary',
          skipped: true,
          sha256: sha256(entry.data)
        });
        continue;
      }

      if (isText) {
        const originalText = entry.data.toString('utf8');
        const { decoded, replacements } = decodeText(originalText, tokenMap);
        manifest.totals.textEntriesWritten += 1;
        manifest.totals.replacements += replacements;
        if (!options.dryRun) {
          writeFileSync(outputPath, decoded, 'utf8');
        }
        manifest.entries.push({
          zip: relative(REPO_ROOT, zipPath),
          sourcePath: entry.path,
          rebasedPath: rebasedInternalPath,
          outputPath: relativeOutputPath,
          type: 'text',
          replacements,
          sha256: sha256(decoded)
        });
      } else {
        manifest.totals.binaryEntriesWritten += 1;
        if (!options.dryRun) {
          writeFileSync(outputPath, entry.data);
        }
        manifest.entries.push({
          zip: relative(REPO_ROOT, zipPath),
          sourcePath: entry.path,
          rebasedPath: rebasedInternalPath,
          outputPath: relativeOutputPath,
          type: 'binary',
          replacements: 0,
          sha256: sha256(entry.data)
        });
      }
    }
  }

  if (!options.dryRun) {
    writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }

  console.log(JSON.stringify({
    ok: true,
    dryRun: options.dryRun,
    zipFiles: manifest.totals.zipFiles,
    entriesSeen: manifest.totals.entriesSeen,
    textEntriesWritten: manifest.totals.textEntriesWritten,
    binaryEntriesWritten: manifest.totals.binaryEntriesWritten,
    binaryEntriesSkipped: manifest.totals.binaryEntriesSkipped,
    replacements: manifest.totals.replacements,
    outputDirectory: manifest.outputDirectory,
    manifest: relative(REPO_ROOT, manifestPath)
  }, null, 2));
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
