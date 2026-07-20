import type { PartNode, Vec3 } from '../assetTypes';
import { flattenParts } from './primitiveBuilder';

export interface MeshGeometry {
  positions: number[];
  normals: number[];
  texcoords: number[];
  tangents: number[];
  indices: number[];
  materialIds: string[];
}

function pushVertex(
  mesh: MeshGeometry,
  position: readonly [number, number, number],
  normal: readonly [number, number, number],
  uv: readonly [number, number],
  tangent: readonly [number, number, number, number],
  materialId: string,
): number {
  const index = mesh.positions.length / 3;
  mesh.positions.push(...position);
  mesh.normals.push(...normal);
  mesh.texcoords.push(...uv);
  mesh.tangents.push(...tangent);
  mesh.materialIds.push(materialId);
  return index;
}

function pushBox(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string): void {
  const hx = Math.max(size.x, 0.001) / 2;
  const hy = Math.max(size.y, 0.001) / 2;
  const hz = Math.max(size.z, 0.001) / 2;
  const faces = [
    { n: [1, 0, 0] as const, t: [0, 0, 1, 1] as const, v: [[hx, -hy, -hz], [hx, hy, -hz], [hx, hy, hz], [hx, -hy, hz]] as const },
    { n: [-1, 0, 0] as const, t: [0, 0, -1, 1] as const, v: [[-hx, hy, -hz], [-hx, -hy, -hz], [-hx, -hy, hz], [-hx, hy, hz]] as const },
    { n: [0, 1, 0] as const, t: [1, 0, 0, 1] as const, v: [[-hx, hy, -hz], [hx, hy, -hz], [hx, hy, hz], [-hx, hy, hz]] as const },
    { n: [0, -1, 0] as const, t: [-1, 0, 0, 1] as const, v: [[hx, -hy, -hz], [-hx, -hy, -hz], [-hx, -hy, hz], [hx, -hy, hz]] as const },
    { n: [0, 0, 1] as const, t: [1, 0, 0, 1] as const, v: [[-hx, -hy, hz], [hx, -hy, hz], [hx, hy, hz], [-hx, hy, hz]] as const },
    { n: [0, 0, -1] as const, t: [-1, 0, 0, 1] as const, v: [[-hx, hy, -hz], [hx, hy, -hz], [hx, -hy, -hz], [-hx, -hy, -hz]] as const },
  ];
  const uvs = [[0, 0], [1, 0], [1, 1], [0, 1]] as const;
  for (const face of faces) {
    const base = mesh.positions.length / 3;
    face.v.forEach((vertex, index) => {
      pushVertex(
        mesh,
        [center.x + vertex[0], center.y + vertex[1], center.z + vertex[2]],
        face.n,
        uvs[index]!,
        face.t,
        materialId,
      );
    });
    mesh.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
}

function pushCylinder(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string, segments: number): void {
  const radius = Math.max(size.x, size.y, 0.001) / 2;
  const half = Math.max(size.z, 0.001) / 2;
  const seg = Math.max(8, Math.min(64, Math.floor(segments)));

  const sideBase = mesh.positions.length / 3;
  for (let index = 0; index <= seg; index += 1) {
    const u = index / seg;
    const angle = u * Math.PI * 2;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const x = cosine * radius;
    const y = sine * radius;
    const tangent = [-sine, cosine, 0, 1] as const;
    pushVertex(mesh, [center.x + x, center.y + y, center.z - half], [cosine, sine, 0], [u, 0], tangent, materialId);
    pushVertex(mesh, [center.x + x, center.y + y, center.z + half], [cosine, sine, 0], [u, 1], tangent, materialId);
  }
  for (let index = 0; index < seg; index += 1) {
    const bottom0 = sideBase + index * 2;
    const top0 = bottom0 + 1;
    const bottom1 = bottom0 + 2;
    const top1 = bottom0 + 3;
    mesh.indices.push(bottom0, bottom1, top1, bottom0, top1, top0);
  }

  const bottomCenter = pushVertex(mesh, [center.x, center.y, center.z - half], [0, 0, -1], [0.5, 0.5], [1, 0, 0, 1], materialId);
  const bottomRing: number[] = [];
  const topCenter = pushVertex(mesh, [center.x, center.y, center.z + half], [0, 0, 1], [0.5, 0.5], [1, 0, 0, 1], materialId);
  const topRing: number[] = [];
  for (let index = 0; index < seg; index += 1) {
    const angle = index / seg * Math.PI * 2;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const uv: readonly [number, number] = [0.5 + cosine * 0.5, 0.5 + sine * 0.5];
    bottomRing.push(pushVertex(mesh, [center.x + cosine * radius, center.y + sine * radius, center.z - half], [0, 0, -1], uv, [1, 0, 0, 1], materialId));
    topRing.push(pushVertex(mesh, [center.x + cosine * radius, center.y + sine * radius, center.z + half], [0, 0, 1], uv, [1, 0, 0, 1], materialId));
  }
  for (let index = 0; index < seg; index += 1) {
    const next = (index + 1) % seg;
    mesh.indices.push(bottomCenter, bottomRing[next]!, bottomRing[index]!);
    mesh.indices.push(topCenter, topRing[index]!, topRing[next]!);
  }
}

function pushEllipsoid(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string, segments: number): void {
  const lat = Math.max(6, Math.min(32, Math.floor(segments / 2)));
  const lon = Math.max(8, Math.min(48, Math.floor(segments)));
  const rx = Math.max(size.x, 0.001) / 2;
  const ry = Math.max(size.y, 0.001) / 2;
  const rz = Math.max(size.z, 0.001) / 2;

  const top = pushVertex(mesh, [center.x, center.y, center.z + rz], [0, 0, 1], [0.5, 0], [1, 0, 0, 1], materialId);
  const rings: number[][] = [];
  for (let ring = 1; ring < lat; ring += 1) {
    const v = ring / lat;
    const theta = v * Math.PI;
    const row: number[] = [];
    for (let segment = 0; segment < lon; segment += 1) {
      const u = segment / lon;
      const phi = u * Math.PI * 2;
      const nx = Math.cos(phi) * Math.sin(theta);
      const ny = Math.sin(phi) * Math.sin(theta);
      const nz = Math.cos(theta);
      row.push(pushVertex(
        mesh,
        [center.x + nx * rx, center.y + ny * ry, center.z + nz * rz],
        [nx, ny, nz],
        [u, v],
        [-Math.sin(phi), Math.cos(phi), 0, 1],
        materialId,
      ));
    }
    rings.push(row);
  }
  const bottom = pushVertex(mesh, [center.x, center.y, center.z - rz], [0, 0, -1], [0.5, 1], [1, 0, 0, 1], materialId);
  const firstRing = rings[0]!;
  const lastRing = rings[rings.length - 1]!;
  for (let segment = 0; segment < lon; segment += 1) {
    const next = (segment + 1) % lon;
    mesh.indices.push(top, firstRing[segment]!, firstRing[next]!);
    mesh.indices.push(bottom, lastRing[next]!, lastRing[segment]!);
  }
  for (let ring = 0; ring + 1 < rings.length; ring += 1) {
    const current = rings[ring]!;
    const nextRing = rings[ring + 1]!;
    for (let segment = 0; segment < lon; segment += 1) {
      const next = (segment + 1) % lon;
      mesh.indices.push(current[segment]!, nextRing[segment]!, current[next]!);
      mesh.indices.push(current[next]!, nextRing[segment]!, nextRing[next]!);
    }
  }
}

function pushPlane(mesh: MeshGeometry, center: Vec3, size: Vec3, materialId: string): void {
  const sx = Math.max(size.x, 0.001) / 2;
  const sy = Math.max(size.y, 0.001) / 2;
  const base = mesh.positions.length / 3;
  pushVertex(mesh, [center.x - sx, center.y - sy, center.z], [0, 0, 1], [0, 0], [1, 0, 0, 1], materialId);
  pushVertex(mesh, [center.x + sx, center.y - sy, center.z], [0, 0, 1], [1, 0], [1, 0, 0, 1], materialId);
  pushVertex(mesh, [center.x + sx, center.y + sy, center.z], [0, 0, 1], [1, 1], [1, 0, 0, 1], materialId);
  pushVertex(mesh, [center.x - sx, center.y + sy, center.z], [0, 0, 1], [0, 1], [1, 0, 0, 1], materialId);
  mesh.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
}

export interface BuildGeometryOptions { readonly detailScale?: number; }

export function buildGeometry(parts: PartNode[], options: BuildGeometryOptions = {}): MeshGeometry {
  const mesh: MeshGeometry = { positions: [], normals: [], texcoords: [], tangents: [], indices: [], materialIds: [] };
  for (const part of flattenParts(parts).filter((candidate) => candidate.category !== 'root')) {
    const center = part.transform.position;
    const detailScale = Math.max(0.2, Math.min(1, options.detailScale ?? 1));
    const segments = Math.max(6, Math.round((part.primitive.segments ?? 16) * detailScale));
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
