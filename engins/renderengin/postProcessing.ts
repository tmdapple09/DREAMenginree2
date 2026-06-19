import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export type RenderPostProcessPass = 'tone-map' | 'gamma-correct' | 'bloom-threshold' | 'bloom-composite';

export interface RenderPostProcessGraph extends JsonObject {
  passes: RenderPostProcessPass[];
  exposure: number;
  gamma: number;
  bloomThreshold: number;
  bloomIntensity: number;
}

export function createRenderPostProcessGraph(input: Partial<RenderPostProcessGraph> = {}): RenderPostProcessGraph {
  return {
    passes: input.passes ?? ['tone-map', 'gamma-correct'],
    exposure: input.exposure ?? 1,
    gamma: input.gamma ?? 2.2,
    bloomThreshold: input.bloomThreshold ?? 1,
    bloomIntensity: input.bloomIntensity ?? 0.2,
  };
}

export function executePostProcessPixel(pixel: readonly [number, number, number, number], graph: RenderPostProcessGraph): [number, number, number, number] {
  let [r, g, b] = pixel;
  const a = pixel[3];
  if (graph.passes.includes('bloom-threshold')) {
    const bloom = Math.max(0, Math.max(r, g, b) - graph.bloomThreshold) * graph.bloomIntensity;
    r += bloom; g += bloom; b += bloom;
  }
  if (graph.passes.includes('tone-map')) {
    r = 1 - Math.exp(-r * graph.exposure);
    g = 1 - Math.exp(-g * graph.exposure);
    b = 1 - Math.exp(-b * graph.exposure);
  }
  if (graph.passes.includes('gamma-correct')) {
    r = Math.pow(Math.max(0, r), 1 / graph.gamma);
    g = Math.pow(Math.max(0, g), 1 / graph.gamma);
    b = Math.pow(Math.max(0, b), 1 / graph.gamma);
  }
  if (graph.passes.includes('bloom-composite')) {
    r = Math.min(1, r + graph.bloomIntensity * 0.05);
    g = Math.min(1, g + graph.bloomIntensity * 0.05);
    b = Math.min(1, b + graph.bloomIntensity * 0.05);
  }
  return [Math.min(1, r), Math.min(1, g), Math.min(1, b), a];
}
