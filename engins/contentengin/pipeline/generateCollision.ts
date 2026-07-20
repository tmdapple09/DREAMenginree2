import type { CollisionBlock, CollisionShape, PartNode, Vec3 } from '../assetTypes';
import { flattenParts } from '../builders/primitiveBuilder';

const COMPOUND_SHAPE_LIMIT = 32;

function positiveDimensions(dimensions: Vec3): Vec3 {
  return {
    x: Math.max(0.001, Math.abs(dimensions.x)),
    y: Math.max(0.001, Math.abs(dimensions.y)),
    z: Math.max(0.001, Math.abs(dimensions.z)),
  };
}

function volume(part: PartNode): number {
  const dimensions = positiveDimensions(part.dimensions);
  return dimensions.x * dimensions.y * dimensions.z;
}

function shapeFor(part: PartNode): CollisionShape {
  const kind = part.primitive.kind === 'terrain-grid'
    ? 'heightfield'
    : part.primitive.kind === 'sphere' || part.primitive.kind === 'ellipsoid'
      ? 'sphere'
      : part.primitive.kind === 'capsule'
        ? 'capsule'
        : 'box';
  return {
    kind,
    transform: {
      position: { ...part.transform.position },
      rotation: { ...part.transform.rotation },
      scale: { ...part.transform.scale },
    },
    dimensions: positiveDimensions(part.dimensions),
  };
}

function aggregateBox(parts: readonly PartNode[]): CollisionShape {
  let minX = Infinity; let minY = Infinity; let minZ = Infinity;
  let maxX = -Infinity; let maxY = -Infinity; let maxZ = -Infinity;
  for (const part of parts) {
    const dimensions = positiveDimensions(part.dimensions);
    const { position } = part.transform;
    minX = Math.min(minX, position.x - dimensions.x * 0.5);
    minY = Math.min(minY, position.y - dimensions.y * 0.5);
    minZ = Math.min(minZ, position.z - dimensions.z * 0.5);
    maxX = Math.max(maxX, position.x + dimensions.x * 0.5);
    maxY = Math.max(maxY, position.y + dimensions.y * 0.5);
    maxZ = Math.max(maxZ, position.z + dimensions.z * 0.5);
  }
  if (!Number.isFinite(minX)) {
    return {
      kind: 'box',
      transform: {
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
      dimensions: { x: 1, y: 1, z: 1 },
    };
  }
  return {
    kind: 'box',
    transform: {
      position: {
        x: (minX + maxX) * 0.5,
        y: (minY + maxY) * 0.5,
        z: (minZ + maxZ) * 0.5,
      },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    dimensions: {
      x: Math.max(0.001, maxX - minX),
      y: Math.max(0.001, maxY - minY),
      z: Math.max(0.001, maxZ - minZ),
    },
  };
}

function selectCompoundParts(parts: readonly PartNode[]): PartNode[] {
  const selected = new Map<string, PartNode>();
  const byCategory = new Map<string, PartNode[]>();
  for (const part of parts) {
    const bucket = byCategory.get(part.category) ?? [];
    bucket.push(part);
    byCategory.set(part.category, bucket);
  }
  for (const bucket of byCategory.values()) {
    bucket.sort((left, right) => volume(right) - volume(left));
    if (bucket[0]) selected.set(bucket[0].id, bucket[0]);
  }
  for (const part of [...parts].sort((left, right) => volume(right) - volume(left))) {
    if (selected.size >= COMPOUND_SHAPE_LIMIT) break;
    selected.set(part.id, part);
  }
  return [...selected.values()]
    .sort((left, right) => volume(right) - volume(left))
    .slice(0, COMPOUND_SHAPE_LIMIT);
}

export function generateCollision(
  parts: PartNode[],
  strategy: CollisionBlock['strategy'] = 'compound',
): CollisionBlock {
  const candidates = flattenParts(parts).filter((part) => part.category !== 'root');
  if (strategy === 'simple') return { strategy, shapes: [aggregateBox(candidates)] };
  if (strategy === 'heightfield') {
    const terrain = candidates.filter((part) => part.primitive.kind === 'terrain-grid');
    return { strategy, shapes: (terrain.length ? terrain : candidates.slice(0, 1)).map(shapeFor) };
  }
  return {
    strategy,
    shapes: selectCompoundParts(candidates).map(shapeFor),
  };
}
