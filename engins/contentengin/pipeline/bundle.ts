import { mkdir, readFile, readdir, stat, writeFile } from 'fs/promises';
import path from 'path';
import type { ContentAsset } from '../assetTypes';
import { createGlbBuffer } from './exportGlb';
import { validateAsset } from './validate';
import { makeManifest } from './writeManifest';

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let value = n;
  for (let bit = 0; bit < 8; bit += 1) {
    value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
  }
  return value >>> 0;
});

function crc32(buffer: Buffer): number {
  let value = 0xffffffff;
  for (const byte of buffer) value = crcTable[(value ^ byte) & 255]! ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

export async function writeAssetBundle(asset: ContentAsset, outDir: string): Promise<string> {
  await mkdir(outDir, { recursive: true });
  const glb = createGlbBuffer(asset);
  asset.validation = validateAsset(asset, glb);

  await Promise.all([
    writeFile(path.join(outDir, 'model.glb'), glb),
    writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(makeManifest(asset), null, 2)),
    writeFile(path.join(outDir, 'recipe.json'), JSON.stringify(asset.recipe, null, 2)),
    writeFile(path.join(outDir, 'validation.json'), JSON.stringify(asset.validation, null, 2)),
    writeFile(path.join(outDir, 'scan.json'), JSON.stringify(asset.intrinsicScan, null, 2)),
    writeFile(
      path.join(outDir, 'thumbnail.webp'),
      Buffer.from('RIFF\x1a\x00\x00\x00WEBPVP8 \x0e\x00\x00\x00\x2f\x00\x00\x00\x10\x07\x10\x11\x11\x88\x88\xfe\x07\x00', 'binary'),
    ),
  ]);

  if (asset.recipe.sourceImage) {
    await writeFile(path.join(outDir, 'source_analysis.json'), JSON.stringify(asset.recipe.sourceImage, null, 2));
  }
  return outDir;
}

export async function zipDirectory(dir: string, zipPath: string): Promise<string> {
  const files: string[] = [];
  async function walk(directory: string): Promise<void> {
    for (const entry of await readdir(directory)) {
      const file = path.join(directory, entry);
      if ((await stat(file)).isDirectory()) await walk(file);
      else files.push(file);
    }
  }
  await walk(dir);

  const chunks: Buffer[] = [];
  const central: Buffer[] = [];
  let offset = 0;
  for (const file of files) {
    const data = await readFile(file);
    const name = Buffer.from(path.relative(dir, file).replace(/\\/g, '/'));
    const checksum = crc32(data);
    const local = Buffer.alloc(30 + name.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt32LE(0, 10);
    local.writeUInt32LE(checksum, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    name.copy(local, 30);
    chunks.push(local, data);

    const center = Buffer.alloc(46 + name.length);
    center.writeUInt32LE(0x02014b50, 0);
    center.writeUInt16LE(20, 4);
    center.writeUInt16LE(20, 6);
    center.writeUInt16LE(0, 8);
    center.writeUInt16LE(0, 10);
    center.writeUInt32LE(0, 12);
    center.writeUInt32LE(checksum, 16);
    center.writeUInt32LE(data.length, 20);
    center.writeUInt32LE(data.length, 24);
    center.writeUInt16LE(name.length, 28);
    center.writeUInt32LE(offset, 42);
    name.copy(center, 46);
    central.push(center);
    offset += local.length + data.length;
  }

  const centralSize = central.reduce((sum, buffer) => sum + buffer.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);
  await writeFile(zipPath, Buffer.concat([...chunks, ...central, end]));
  return zipPath;
}
