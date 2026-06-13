export function buildEdgeMapFromRgba(width: number, height: number, rgba: Uint8Array): Uint8Array {
  const edges = new Uint8Array(width * height);
  for (let y = 1; y < height - 1; y += 1) for (let x = 1; x < width - 1; x += 1) {
    const i = (y * width + x) * 4;
    const r = rgba[i]!;
    const rx = rgba[(y * width + x + 1) * 4]! - rgba[(y * width + x - 1) * 4]!;
    const ry = rgba[((y + 1) * width + x) * 4]! - rgba[((y - 1) * width + x) * 4]!;
    edges[y * width + x] = Math.min(255, Math.abs(rx) + Math.abs(ry) + Math.floor(r / 64));
  }
  return edges;
}
