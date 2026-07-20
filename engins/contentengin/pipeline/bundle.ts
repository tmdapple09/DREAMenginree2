import { createHash } from 'crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'fs/promises';
import path from 'path';
import type { ContentAsset } from '../assetTypes';
import { createGlbArtifact } from './exportGlb';
import { validateAsset } from './validate';
import { makeManifest } from './writeManifest';


type Quaternion = readonly [number, number, number, number];

function quaternionMultiply(left: Quaternion, right: Quaternion): Quaternion {
  const [lx, ly, lz, lw] = left;
  const [rx, ry, rz, rw] = right;
  return [
    lw * rx + lx * rw + ly * rz - lz * ry,
    lw * ry - lx * rz + ly * rw + lz * rx,
    lw * rz + lx * ry - ly * rx + lz * rw,
    lw * rw - lx * rx - ly * ry - lz * rz,
  ];
}

function quaternionFromEuler(x: number, y: number, z: number): Quaternion {
  const cx = Math.cos(x * 0.5); const sx = Math.sin(x * 0.5);
  const cy = Math.cos(y * 0.5); const sy = Math.sin(y * 0.5);
  const cz = Math.cos(z * 0.5); const sz = Math.sin(z * 0.5);
  return [
    sx * cy * cz - cx * sy * sz,
    cx * sy * cz + sx * cy * sz,
    cx * cy * sz - sx * sy * cz,
    cx * cy * cz + sx * sy * sz,
  ];
}

function eulerFromQuaternion([x, y, z, w]: Quaternion): { x: number; y: number; z: number } {
  const roll = Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y));
  const pitchValue = 2 * (w * y - z * x);
  const pitch = Math.asin(Math.max(-1, Math.min(1, pitchValue)));
  const yaw = Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z));
  return { x: roll, y: pitch, z: yaw };
}

function collisionForGltf(asset: ContentAsset): Record<string, unknown> {
  const half = Math.SQRT1_2;
  const basis: Quaternion = [-half, 0, 0, half];
  const inverseBasis: Quaternion = [half, 0, 0, half];
  return {
    version: 2,
    strategy: asset.collision.strategy,
    coordinateSystem: { units: 'meters', upAxis: 'Y', forwardAxis: '-Z', handedness: 'right' },
    shapes: asset.collision.shapes.map((shape) => {
      const local = quaternionFromEuler(
        shape.transform.rotation.x,
        shape.transform.rotation.y,
        shape.transform.rotation.z,
      );
      const target = quaternionMultiply(quaternionMultiply(basis, local), inverseBasis);
      return {
        kind: shape.kind,
        transform: {
          position: {
            x: shape.transform.position.x,
            y: shape.transform.position.z,
            z: -shape.transform.position.y,
          },
          rotation: eulerFromQuaternion(target),
          rotationQuaternion: { x: target[0], y: target[1], z: target[2], w: target[3] },
          scale: {
            x: shape.transform.scale.x,
            y: shape.transform.scale.z,
            z: shape.transform.scale.y,
          },
        },
        dimensions: {
          x: shape.dimensions.x,
          y: shape.dimensions.z,
          z: shape.dimensions.y,
        },
      };
    }),
  };
}

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
  const modelArtifact = createGlbArtifact(asset, { triangleRatio: 1, lodLevel: 0 });
  const lod1Artifact = createGlbArtifact(asset, { triangleRatio: 0.55, lodLevel: 1 });
  const lod2Artifact = createGlbArtifact(asset, { triangleRatio: 0.25, lodLevel: 2 });
  asset.validation = validateAsset(asset, modelArtifact.buffer);

  const recipe = Buffer.from(JSON.stringify(asset.recipe, null, 2));
  const validation = Buffer.from(JSON.stringify(asset.validation, null, 2));
  const scan = Buffer.from(JSON.stringify(modelArtifact.scan, null, 2));
  const collision = Buffer.from(JSON.stringify(collisionForGltf(asset), null, 2));
  const thumbnail = Buffer.from('RIFF\x1a\x00\x00\x00WEBPVP8 \x0e\x00\x00\x00\x2f\x00\x00\x00\x10\x07\x10\x11\x11\x88\x88\xfe\x07\x00', 'binary');
  const sourceAnalysis = asset.recipe.sourceImage
    ? Buffer.from(JSON.stringify(asset.recipe.sourceImage, null, 2))
    : null;
  const digest = (buffer: Buffer): string => `sha256-${createHash('sha256').update(buffer).digest('hex')}`;
  const integrity: Record<string, string> = {
    'model.glb': digest(modelArtifact.buffer),
    'model.lod1.glb': digest(lod1Artifact.buffer),
    'model.lod2.glb': digest(lod2Artifact.buffer),
    'collision.json': digest(collision),
    'recipe.json': digest(recipe),
    'validation.json': digest(validation),
    'scan.json': digest(scan),
    'thumbnail.webp': digest(thumbnail),
  };
  if (sourceAnalysis) integrity['source_analysis.json'] = digest(sourceAnalysis);
  const manifest = Buffer.from(JSON.stringify(makeManifest(asset, integrity, {
    scan: modelArtifact.scan,
    lodScans: [modelArtifact.scan, lod1Artifact.scan, lod2Artifact.scan],
  }), null, 2));

  await Promise.all([
    writeFile(path.join(outDir, 'model.glb'), modelArtifact.buffer),
    writeFile(path.join(outDir, 'model.lod1.glb'), lod1Artifact.buffer),
    writeFile(path.join(outDir, 'model.lod2.glb'), lod2Artifact.buffer),
    writeFile(path.join(outDir, 'collision.json'), collision),
    writeFile(path.join(outDir, 'manifest.json'), manifest),
    writeFile(path.join(outDir, 'recipe.json'), recipe),
    writeFile(path.join(outDir, 'validation.json'), validation),
    writeFile(path.join(outDir, 'scan.json'), scan),
    writeFile(path.join(outDir, 'thumbnail.webp'), thumbnail),
    ...(sourceAnalysis ? [writeFile(path.join(outDir, 'source_analysis.json'), sourceAnalysis)] : []),
  ]);
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
