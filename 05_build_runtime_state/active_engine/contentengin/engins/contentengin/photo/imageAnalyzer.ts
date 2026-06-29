import { SourceImageAnalysis, ShapeRegion } from '../assetTypes';
import { rgbaToHex } from '../materials/paletteExtractor';
import { decodePng } from './pngDecoder';

function paletteFromRgba(rgba: Uint8Array, max = 6): string[] {
  const bins = new Map<string, number>();
  for (let i = 0; i < rgba.length; i += 16) {
    const key = rgbaToHex(Math.round(rgba[i]! / 32) * 32, Math.round(rgba[i + 1]! / 32) * 32, Math.round(rgba[i + 2]! / 32) * 32);
    bins.set(key, (bins.get(key) ?? 0) + 1);
  }
  return [...bins.entries()].sort((a, b) => b[1] - a[1]).slice(0, max).map(([k]) => k);
}

function luminance(r: number, g: number, b: number) { return 0.2126 * r + 0.7152 * g + 0.0722 * b; }

function detectRegion(width: number, height: number, rgba: Uint8Array, colors: string[]): ShapeRegion {
  let minX = width, minY = height, maxX = 0, maxY = 0, sx = 0, sy = 0, count = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const alpha = rgba[i + 3]!;
      const lum = luminance(rgba[i]!, rgba[i + 1]!, rgba[i + 2]!);
      if (alpha > 12 && lum < 248) {
        minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); sx += x; sy += y; count += 1;
      }
    }
  }
  if (!count) { minX = 0; minY = 0; maxX = width - 1; maxY = height - 1; count = width * height; sx = ((width - 1) * count) / 2; sy = ((height - 1) * count) / 2; }
  const aspect = (maxX - minX + 1) / Math.max(1, maxY - minY + 1);
  const label: ShapeRegion['label'] = aspect > 2.4 ? 'road' : aspect < 0.45 ? 'trunk' : 'unknown';
  return {
    id: 'region-main', label,
    bounds: { minX, minY, maxX, maxY }, centroid: { x: sx / count, y: sy / count },
    contour: [{ x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY }, { x: minX, y: maxY }],
    averageColor: colors[0] ?? '#808080', dominantColors: colors, confidence: 0.72,
  };
}

export async function analyzeImageBytes(bytes: Uint8Array, name = 'source'): Promise<SourceImageAnalysis> {
  const decoded = decodePng(bytes);
  const dominantColors = paletteFromRgba(decoded.rgba, 6);
  const lums = dominantColors.map((hex) => Number.parseInt(hex.slice(1), 16));
  const shadowColors = [...dominantColors].sort((a, b) => Number.parseInt(a.slice(1), 16) - Number.parseInt(b.slice(1), 16)).slice(0, 2);
  const highlightColors = [...dominantColors].sort((a, b) => Number.parseInt(b.slice(1), 16) - Number.parseInt(a.slice(1), 16)).slice(0, 2);
  void lums;
  return {
    width: decoded.width, height: decoded.height, dominantColors, shadowColors, highlightColors,
    edgeMapPath: `${name}.edges.json`, maskPath: `${name}.mask.json`, symmetryAxisX: decoded.width / 2,
    regions: [detectRegion(decoded.width, decoded.height, decoded.rgba, dominantColors)],
  };
}
