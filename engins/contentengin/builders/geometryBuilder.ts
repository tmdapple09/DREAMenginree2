import type { PartNode, Vec3 } from '../assetTypes';
import { flattenParts } from './primitiveBuilder';

export interface MeshGeometry {
  positions: number[];
  normals: number[];
  indices: number[];
  materialIds: string[];
}

const add = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });

function pushBox(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string) {
  const hx = Math.max(size.x, 0.001) / 2;
  const hy = Math.max(size.y, 0.001) / 2;
  const hz = Math.max(size.z, 0.001) / 2;
  const faces = [
    { n: [1, 0, 0], v: [[hx, -hy, -hz], [hx, hy, -hz], [hx, hy, hz], [hx, -hy, hz]] },
    { n: [-1, 0, 0], v: [[-hx, hy, -hz], [-hx, -hy, -hz], [-hx, -hy, hz], [-hx, hy, hz]] },
    { n: [0, 1, 0], v: [[-hx, hy, -hz], [hx, hy, -hz], [hx, hy, hz], [-hx, hy, hz]] },
    { n: [0, -1, 0], v: [[hx, -hy, -hz], [-hx, -hy, -hz], [-hx, -hy, hz], [hx, -hy, hz]] },
    { n: [0, 0, 1], v: [[-hx, -hy, hz], [hx, -hy, hz], [hx, hy, hz], [-hx, hy, hz]] },
    { n: [0, 0, -1], v: [[-hx, hy, -hz], [hx, hy, -hz], [hx, -hy, -hz], [-hx, -hy, -hz]] },
  ];
  for (const face of faces) {
    const base = mesh.positions.length / 3;
    for (const v of face.v) {
      mesh.positions.push(center.x + v[0]!, center.y + v[1]!, center.z + v[2]!);
      mesh.normals.push(face.n[0]!, face.n[1]!, face.n[2]!);
      mesh.materialIds.push(materialId);
    }
    mesh.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
}

function pushCylinder(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string, segments: number) {
  const radius = Math.max(size.x, size.y, 0.001) / 2;
  const half = Math.max(size.z, 0.001) / 2;
  const seg = Math.max(8, Math.min(64, Math.floor(segments)));
  const base = mesh.positions.length / 3;
  for (let i = 0; i < seg; i += 1) {
    const a = (i / seg) * Math.PI * 2;
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;
    mesh.positions.push(center.x + x, center.y + y, center.z - half, center.x + x, center.y + y, center.z + half);
    mesh.normals.push(Math.cos(a), Math.sin(a), 0, Math.cos(a), Math.sin(a), 0);
    mesh.materialIds.push(materialId, materialId);
  }
  const bottomCenter = mesh.positions.length / 3;
  mesh.positions.push(center.x, center.y, center.z - half, center.x, center.y, center.z + half);
  mesh.normals.push(0, 0, -1, 0, 0, 1);
  mesh.materialIds.push(materialId, materialId);
  for (let i = 0; i < seg; i += 1) {
    const n = (i + 1) % seg;
    const b0 = base + i * 2;
    const t0 = b0 + 1;
    const b1 = base + n * 2;
    const t1 = b1 + 1;
    mesh.indices.push(b0, b1, t1, b0, t1, t0, bottomCenter, b0, b1, bottomCenter + 1, t1, t0);
  }
}

function pushEllipsoid(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string, segments: number) {
  const lat = Math.max(6, Math.min(32, Math.floor(segments / 2)));
  const lon = Math.max(8, Math.min(48, Math.floor(segments)));
  const base = mesh.positions.length / 3;
  const rx = Math.max(size.x, 0.001) / 2;
  const ry = Math.max(size.y, 0.001) / 2;
  const rz = Math.max(size.z, 0.001) / 2;
  for (let y = 0; y <= lat; y += 1) {
    const v = y / lat;
    const theta = v * Math.PI;
    for (let x = 0; x <= lon; x += 1) {
      const u = x / lon;
      const phi = u * Math.PI * 2;
      const nx = Math.cos(phi) * Math.sin(theta);
      const ny = Math.sin(phi) * Math.sin(theta);
      const nz = Math.cos(theta);
      mesh.positions.push(center.x + nx * rx, center.y + ny * ry, center.z + nz * rz);
      mesh.normals.push(nx, ny, nz);
      mesh.materialIds.push(materialId);
    }
  }
  for (let y = 0; y < lat; y += 1) {
    for (let x = 0; x < lon; x += 1) {
      const a = base + y * (lon + 1) + x;
      const b = a + lon + 1;
      mesh.indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
}

function pushPlane(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string) {
  const sx = Math.max(size.x, 0.001) / 2;
  const sy = Math.max(size.y, 0.001) / 2;
  const base = mesh.positions.length / 3;
  mesh.positions.push(center.x - sx, center.y - sy, center.z, center.x + sx, center.y - sy, center.z, center.x + sx, center.y + sy, center.z, center.x - sx, center.y + sy, center.z);
  mesh.normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1);
  mesh.materialIds.push(materialId, materialId, materialId, materialId);
  mesh.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
}

export function buildGeometry(parts: PartNode[]): MeshGeometry {
  const mesh: MeshGeometry = { positions: [], normals: [], indices: [], materialIds: [] };
  for (const part of flattenParts(parts).filter((p) => p.category !== 'root')) {
    const center = part.transform.position;
    const segments = part.primitive.segments ?? 16;
    switch (part.primitive.kind) {
      case 'sphere':
      case 'ellipsoid':
      case 'capsule':
        pushEllipsoid(mesh, center, part.dimensions, part.materialId, segments);
        break;
      case 'cylinder':
      case 'tube':
      case 'cone':
        pushCylinder(mesh, center, part.dimensions, part.materialId, segments);
        break;
      case 'plane':
      case 'ribbon':
      case 'terrain-grid':
      case 'water-plane':
        pushPlane(mesh, center, part.dimensions, part.materialId);
        break;
      default:
        pushBox(mesh, center, part.dimensions, part.materialId);
        break;
    }
  }
  return mesh;
}
