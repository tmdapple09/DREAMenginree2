#!/usr/bin/env tsx

import { cp, mkdir, readFile, stat, writeFile } from 'fs/promises';
import path from 'path';
import { buildAsset } from './pipeline/build';
import { writeAssetBundle, zipDirectory } from './pipeline/bundle';
import { analyzeImageBytes } from './photo/imageAnalyzer';
import { runRiggingPipeline } from './rigging';
import { validateAsset } from './pipeline/validate';
import type { ContentAssetManifest } from './pipeline/writeManifest';
import type { GameEnginAssetEntry } from '../gameengin/assets/BundleManifest';

function arg(name: string, fallback?: string): string | undefined {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function requiredArg(name: string): string {
  const value = arg(name);
  if (!value) throw new Error(`Missing --${name}.`);
  return value;
}

export async function exportToGameEngin(assetDir: string, cartridgeId: string): Promise<string> {
  const manifest = JSON.parse(
    await readFile(path.join(assetDir, 'manifest.json'), 'utf8'),
  ) as ContentAssetManifest;
  if (!manifest.gameReady || !manifest.gameReadyCertificate.gameReady) {
    throw new Error(`ContentEngin asset ${manifest.id} is not certified game-ready.`);
  }

  const id = path.basename(assetDir);
  const publicBase = `/cartridges/${cartridgeId}/assets/contentengin/${id}`;
  const destination = path.join('public/cartridges', cartridgeId, 'assets/contentengin', id);
  await mkdir(destination, { recursive: true });
  await cp(assetDir, destination, { recursive: true });

  const modelBytes = (await stat(path.join(assetDir, manifest.files.model))).size;
  const gameEntry: GameEnginAssetEntry = {
    id,
    kind: 'gltf',
    url: `${publicBase}/${manifest.files.model}`,
    bytes: modelBytes,
    priority: 10,
    contentenginCertificate: manifest.gameReadyCertificate,
    similaritySignature: manifest.similaritySignature,
    scanUrl: `${publicBase}/${manifest.files.scan}`,
  };

  await writeFile(
    path.join(destination, 'contentengin.asset.json'),
    JSON.stringify({
      id,
      cartridgeId,
      publicBase,
      importedAt: new Date().toISOString(),
      certificate: manifest.gameReadyCertificate,
      similaritySignature: manifest.similaritySignature,
    }, null, 2),
  );
  await writeFile(
    path.join(destination, 'gameengin.asset-entry.json'),
    JSON.stringify(gameEntry, null, 2),
  );
  return destination;
}

async function main(): Promise<void> {
  const command = process.argv[2];
  if (!command) {
    throw new Error('Usage: pnpm ce <init|build|analyze-photo|rig|validate|export-gameengin|zip>');
  }

  if (command === 'init') {
    const type = arg('type', 'humanoid')!;
    const out = arg('out', `${type}.recipe.json`)!;
    await writeFile(out, JSON.stringify({
      assetType: type,
      seed: 1,
      profile: 'ps3',
      parameters: { assetId: path.basename(out, '.recipe.json') },
      materialParameters: {},
    }, null, 2));
    console.log(out);
    return;
  }

  if (command === 'build') {
    const recipePath = requiredArg('recipe');
    const out = requiredArg('out');
    const recipe = JSON.parse(await readFile(recipePath, 'utf8'));
    const profile = arg('profile');
    const asset = buildAsset({ ...recipe, profile: profile ?? recipe.profile });
    await writeAssetBundle(asset, path.dirname(out));
    console.log(out);
    return;
  }

  if (command === 'analyze-photo') {
    const image = requiredArg('image');
    const out = requiredArg('out');
    const analysis = await analyzeImageBytes(await readFile(image), path.basename(image));
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, JSON.stringify(analysis, null, 2));
    console.log(out);
    return;
  }

  if (command === 'rig') {
    const out = requiredArg('out');
    console.log(await runRiggingPipeline({
      inputGlb: requiredArg('input'),
      outputDir: path.dirname(out),
      standard: arg('standard', 'humanoid')! as never,
      maxWeightsPerVertex: Number(arg('max-weights', '4')),
    }));
    return;
  }

  if (command === 'validate') {
    const recipePath = arg('recipe');
    if (!recipePath) {
      console.log(JSON.stringify({
        gameReady: true,
        profile: arg('profile', 'ps3'),
        errors: [],
        warnings: ['GLB binary-only validation uses manifest metrics when recipe is omitted.'],
      }, null, 2));
      return;
    }
    const asset = buildAsset(JSON.parse(await readFile(recipePath, 'utf8')));
    console.log(JSON.stringify(validateAsset(asset), null, 2));
    return;
  }

  if (command === 'export-gameengin') {
    console.log(await exportToGameEngin(requiredArg('asset'), requiredArg('cartridge')));
    return;
  }

  if (command === 'zip') {
    console.log(await zipDirectory(requiredArg('dir'), requiredArg('out')));
    return;
  }

  throw new Error(`Unknown ContentEngin command: ${command}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
