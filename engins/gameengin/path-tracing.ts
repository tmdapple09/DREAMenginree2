

export interface PathTraceConfig {
  
  raysPerPixel?: number;
  
  maxBounces?: number;
  
  renderScale?: number;
}

export interface BVHNode {
  readonly minX: number; readonly minY: number; readonly minZ: number;
  readonly maxX: number; readonly maxY: number; readonly maxZ: number;
  readonly left: number;
  readonly right: number;
  readonly primitiveIndex: number;
}


export class PathTracer {
  private readonly raysPerPixel: number;
  private readonly maxBounces: number;
  private readonly renderScale: number;

  private bvh: BVHNode[] = [];
  private frameIndex = 0;
  private device: GPUDevice | null = null;

  constructor(config: PathTraceConfig = {}) {
    this.raysPerPixel = Math.max(1, config.raysPerPixel ?? 2);
    this.maxBounces   = Math.max(1, config.maxBounces   ?? 4);
    this.renderScale  = Math.min(1, Math.max(0.25, config.renderScale ?? 0.5));
  }

  
  initialize(device: GPUDevice | null): boolean {
    if (!device) return false;
    this.device = device;
    return true;
  }

  
  buildBVH(primitives: Array<{ min: [number, number, number]; max: [number, number, number] }>): number {
    this.bvh = [];
    const indices = primitives.map((_, i: number) => i);
    const buildNode = (range: number[]): number => {
      if (range.length === 1) {
        const idx = range[0];
        const p = primitives[idx];
        const node: BVHNode = {
          minX: p.min[0], minY: p.min[1], minZ: p.min[2],
          maxX: p.max[0], maxY: p.max[1], maxZ: p.max[2],
          left: -1, right: -1, primitiveIndex: idx,
        };
        this.bvh.push(node);
        return this.bvh.length - 1;
      }
      let minX = Infinity, minY = Infinity, minZ = Infinity;
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
      for (const i of range) {
        const p = primitives[i];
        if (p.min[0] < minX) minX = p.min[0];
        if (p.min[1] < minY) minY = p.min[1];
        if (p.min[2] < minZ) minZ = p.min[2];
        if (p.max[0] > maxX) maxX = p.max[0];
        if (p.max[1] > maxY) maxY = p.max[1];
        if (p.max[2] > maxZ) maxZ = p.max[2];
      }
      const dx = maxX - minX, dy = maxY - minY, dz = maxZ - minZ;
      const axis = dx > dy && dx > dz ? 0 : dy > dz ? 1 : 2;
      range.sort((a, b) => {
        const ca = (primitives[a].min[axis] + primitives[a].max[axis]) * 0.5;
        const cb = (primitives[b].min[axis] + primitives[b].max[axis]) * 0.5;
        return ca - cb;
      });
      const mid = range.length >> 1;
      const left = buildNode(range.slice(0, mid));
      const right = buildNode(range.slice(mid));
      const node: BVHNode = {
        minX, minY, minZ, maxX, maxY, maxZ,
        left, right, primitiveIndex: -1,
      };
      this.bvh.push(node);
      return this.bvh.length - 1;
    };
    if (indices.length === 0) return -1;
    return buildNode(indices);
  }

  
  estimateDispatches(width: number, height: number): number {
    const w = Math.ceil(width  * this.renderScale);
    const h = Math.ceil(height * this.renderScale);
    const tiles = Math.ceil((w * h) / 64);
    return tiles * this.raysPerPixel * this.maxBounces;
  }

  
  beginFrame(): number {
    this.frameIndex += 1;
    return this.frameIndex;
  }

  get isReady(): boolean { return this.device !== null && this.bvh.length > 0; }
  get bvhSize(): number  { return this.bvh.length; }
}

export interface Reservoir {
  sample: number;       
  weightSum: number;    
  count: number;        
  targetPdf: number;    
}


export class RestirGI {
  private readonly capacity: number;
  private readonly spatialRadius: number;
  private reservoirs: Reservoir[] = [];

  constructor(opts: { capacity?: number; spatialRadius?: number } = {}) {
    this.capacity = Math.max(1, opts.capacity ?? 32);
    this.spatialRadius = Math.max(1, opts.spatialRadius ?? 3);
  }

  
  resize(pixelCount: number): void {
    this.reservoirs = new Array(pixelCount).fill(null).map(() => ({
      sample: -1, weightSum: 0, count: 0, targetPdf: 0,
    }));
  }

  
  update(pixelIndex: number, candidate: number, weight: number, targetPdf: number, rng: () => number): void {
    const r = this.reservoirs[pixelIndex];
    if (!r) return;
    r.weightSum += weight;
    r.count += 1;
    if (r.count > this.capacity) r.count = this.capacity;
    if (r.weightSum > 0 && rng() < weight / r.weightSum) {
      r.sample = candidate;
      r.targetPdf = targetPdf;
    }
  }

  
  combineSpatial(pixelIndex: number, neighbourIndex: number, rng: () => number): void {
    const a = this.reservoirs[pixelIndex];
    const b = this.reservoirs[neighbourIndex];
    if (!a || !b || b.count === 0) return;
    const w = b.targetPdf * (b.weightSum / Math.max(1, b.count));
    a.weightSum += w;
    a.count += b.count;
    if (a.count > this.capacity) a.count = this.capacity;
    if (a.weightSum > 0 && rng() < w / a.weightSum) {
      a.sample = b.sample;
      a.targetPdf = b.targetPdf;
    }
  }

  reservoirAt(pixelIndex: number): Reservoir | undefined {
    return this.reservoirs[pixelIndex];
  }

  get spatialReuseRadius(): number { return this.spatialRadius; }
}

export interface DenoiserConfig {
  
  latencyBudgetMs?: number;
  
  temporal?: boolean;
}


export class NeuralDenoiser {
  private readonly latencyBudgetMs: number;
  private readonly temporal: boolean;
  private modelLoaded = false;
  private warmFrames = 0;

  constructor(config: DenoiserConfig = {}) {
    this.latencyBudgetMs = Math.max(1, config.latencyBudgetMs ?? 6);
    this.temporal = config.temporal ?? true;
  }

  
  markModelLoaded(): void { this.modelLoaded = true; }

  
  recommendedSamplesPerPixel(): number {
    if (!this.modelLoaded) return 16;
    return this.latencyBudgetMs >= 8 ? 1 : 2;
  }

  
  bilateralFallback(input: Float32Array, width: number, height: number, sigma = 1.5): Float32Array {
    const out = new Float32Array(input.length);
    const r = Math.max(1, Math.round(sigma * 2));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let sum = 0, weight = 0;
        const center = input[y * width + x];
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
            const v = input[ny * width + nx];
            const w = Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma)) *
                      Math.exp(-Math.abs(v - center) * 4);
            sum += v * w;
            weight += w;
          }
        }
        out[y * width + x] = weight > 0 ? sum / weight : center;
      }
    }
    return out;
  }

  
  tick(): void {
    if (this.temporal) this.warmFrames = Math.min(this.warmFrames + 1, 64);
  }

  get isModelLoaded(): boolean { return this.modelLoaded; }
  get temporalWarmFrames(): number { return this.warmFrames; }
}
