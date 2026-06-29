import { readFileSync } from 'node:fs';
const file = process.argv[2];
if (!file) throw new Error('validate-glb.mjs <file>');
const buffer = readFileSync(file);
const errors = [];
if (buffer.readUInt32LE(0) !== 0x46546c67) errors.push('Missing GLB magic.');
if (buffer.readUInt32LE(4) !== 2) errors.push('Unsupported GLB version.');
const jsonLength = buffer.readUInt32LE(12);
if (buffer.toString('utf8', 16, 20) !== 'JSON') errors.push('Missing JSON chunk.');
let vertexCount = 0; let indexCount = 0; let meshPrimitiveCount = 0; let primitiveMaterialIndexes = []; let primitiveMaterialIds = [];
try {
  const gltf = JSON.parse(buffer.toString('utf8', 20, 20 + jsonLength).trim());
  const primitives = gltf.meshes?.[0]?.primitives ?? [];
  meshPrimitiveCount = primitives.length;
  primitiveMaterialIndexes = primitives.map((p) => p.material).filter((m) => typeof m === 'number');
  primitiveMaterialIds = primitiveMaterialIndexes.map((index) => gltf.materials?.[index]?.extras?.contentenginMaterialId ?? gltf.materials?.[index]?.name ?? String(index));
  vertexCount = gltf.accessors?.[primitives[0]?.attributes?.POSITION]?.count ?? 0;
  indexCount = primitives.reduce((sum, primitive) => sum + (gltf.accessors?.[primitive.indices]?.count ?? 0), 0);
  if (!meshPrimitiveCount) errors.push('No mesh primitive found.');
  if (!vertexCount) errors.push('No vertices found.');
  if (!indexCount) errors.push('No indices found.');
  if (primitiveMaterialIndexes.length !== primitives.length) errors.push('Every mesh primitive must have a material index.');
} catch (error) { errors.push(error instanceof Error ? error.message : 'Could not parse GLB JSON.'); }
console.log(JSON.stringify({ file, glbSizeBytes: buffer.length, valid: errors.length === 0, meshPrimitiveCount, vertexCount, indexCount, primitiveMaterialIndexes, primitiveMaterialIds, errors }, null, 2));
if (errors.length) process.exit(1);
