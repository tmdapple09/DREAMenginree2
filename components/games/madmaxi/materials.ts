import type * as BJSNS from '@babylonjs/core';



type BJS = typeof BJSNS;
type Scene = BJSNS.Scene;
type PBRMaterial = BJSNS.PBRMaterial;
type DynamicTexture = BJSNS.DynamicTexture;

const NOISE_TEX_KEY = '__madmaxi_shared_noise_tex__';
const SCANLINE_TEX_KEY_PREFIX = '__madmaxi_scanline_tex__';

type SceneAny = Scene & Record<string, unknown>;


export function getSharedNoiseTexture(BJS: BJS, scene: Scene): DynamicTexture {
  const cached = (scene as SceneAny)[NOISE_TEX_KEY] as DynamicTexture | undefined;
  if (cached) return cached;

  const SIZE = 256;
  const tex = new BJS.DynamicTexture(
    'madmaxi_shared_noise',
    { width: SIZE, height: SIZE },
    scene,
    false,
  );
  const ctx = tex.getContext() as CanvasRenderingContext2D;
  const img = ctx.createImageData(SIZE, SIZE);

  
  const hash = (x: number, y: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };
  const smooth = (a: number, b: number, t: number) => a + (b - a) * t * t * (3 - 2 * t);
  const valueNoise = (x: number, y: number) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const tl = hash(xi, yi);
    const tr = hash(xi + 1, yi);
    const bl = hash(xi, yi + 1);
    const br = hash(xi + 1, yi + 1);
    const top = smooth(tl, tr, xf);
    const bot = smooth(bl, br, xf);
    return smooth(top, bot, yf);
  };

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const n =
        valueNoise(x * 0.045, y * 0.045) * 0.65 +
        valueNoise(x * 0.18, y * 0.18) * 0.35;
      const v = Math.max(0, Math.min(255, Math.round(n * 255)));
      const i = (y * SIZE + x) * 4;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  tex.update(false);
  tex.hasAlpha = false;
  tex.wrapU = BJS.Texture.WRAP_ADDRESSMODE;
  tex.wrapV = BJS.Texture.WRAP_ADDRESSMODE;
  tex.anisotropicFilteringLevel = 8;

  (scene as SceneAny)[NOISE_TEX_KEY] = tex;
  return tex;
}

export interface DetailMatOpts {
  
  baseColor: [number, number, number];
  metallic: number;
  roughness: number;
  emissive?: [number, number, number];
  
  emissiveBoost?: number;
  envIntensity?: number;
  clearCoat?: { intensity: number; roughness?: number };
  
  noiseTile?: number;
  
  noiseStrength?: number;
  
  rimColor?: [number, number, number];
  rimPower?: number;
  
  alpha?: number;
  backFaceCulling?: boolean;
}


export function makeDetailMat(
  BJS: BJS,
  scene: Scene,
  name: string,
  opts: DetailMatOpts,
): PBRMaterial {
  const m = new BJS.PBRMaterial(name, scene);
  m.albedoColor = new BJS.Color3(opts.baseColor[0], opts.baseColor[1], opts.baseColor[2]);
  m.metallic = opts.metallic;
  m.roughness = opts.roughness;
  m.environmentIntensity = opts.envIntensity ?? 1.6;
  if (opts.alpha !== undefined) m.alpha = opts.alpha;
  if (opts.backFaceCulling !== undefined) m.backFaceCulling = opts.backFaceCulling;

  if (opts.emissive) {
    const boost = opts.emissiveBoost ?? 1;
    m.emissiveColor = new BJS.Color3(
      opts.emissive[0] * boost,
      opts.emissive[1] * boost,
      opts.emissive[2] * boost,
    );
  }

  if (opts.clearCoat) {
    m.clearCoat.isEnabled = true;
    m.clearCoat.intensity = opts.clearCoat.intensity;
    m.clearCoat.roughness = opts.clearCoat.roughness ?? 0.08;
  }

  
  
  
  const strength = opts.noiseStrength ?? 0.35;
  if (strength > 0) {
    const noise = getSharedNoiseTexture(BJS, scene);
    
    
    
    
    const bump = noise.clone() as DynamicTexture;
    bump.uScale = opts.noiseTile ?? 4;
    bump.vScale = opts.noiseTile ?? 4;
    bump.level = strength * 0.6; 
    m.bumpTexture = bump;
    m.invertNormalMapX = false;
    m.invertNormalMapY = false;
    m.useParallax = false;
  }

  
  
  
  if (opts.rimColor) {
    const rim = opts.rimColor;
    const power = opts.rimPower ?? 2.4;
    
    
    
    
    
    const baseE = m.emissiveColor ?? new BJS.Color3(0, 0, 0);
    m.emissiveColor = new BJS.Color3(
      Math.min(1, baseE.r + rim[0] * 0.18),
      Math.min(1, baseE.g + rim[1] * 0.18),
      Math.min(1, baseE.b + rim[2] * 0.18),
    );
    m.emissiveIntensity = Math.max(m.emissiveIntensity ?? 1, 1 + 1 / Math.max(1.2, power));
  }

  return m;
}


export interface ScanLineTexture {
  texture: DynamicTexture;
  advance(animTick: number): void;
}

export function createScanLineTexture(
  BJS: BJS,
  scene: Scene,
  name: string,
  tint: [number, number, number] = [0.2, 0.85, 1.0],
): ScanLineTexture {
  const key = `${SCANLINE_TEX_KEY_PREFIX}${name}`;
  const cached = (scene as SceneAny)[key] as ScanLineTexture | undefined;
  if (cached) return cached;

  const W = 64, H = 128;
  const tex = new BJS.DynamicTexture(name, { width: W, height: H }, scene, false);
  const ctx = tex.getContext() as CanvasRenderingContext2D;

  const repaint = () => {
    ctx.fillStyle = '#04060a';
    ctx.fillRect(0, 0, W, H);
    const r = Math.round(tint[0] * 255);
    const g = Math.round(tint[1] * 255);
    const b = Math.round(tint[2] * 255);
    for (let y = 0; y < H; y += 4) {
      const a = 0.55 + 0.45 * Math.sin(y * 0.18);
      ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
      ctx.fillRect(0, y, W, 2);
    }
    
    ctx.fillStyle = `rgba(${r},${g},${b},0.85)`;
    ctx.fillRect(6, 24, 18, 3);
    ctx.fillRect(8, 60, 26, 3);
    ctx.fillRect(4, 96, 14, 3);
    tex.update(false);
  };
  repaint();

  tex.wrapU = BJS.Texture.WRAP_ADDRESSMODE;
  tex.wrapV = BJS.Texture.WRAP_ADDRESSMODE;
  tex.hasAlpha = false;

  const out: ScanLineTexture = {
    texture: tex,
    advance(animTick: number) {
      
      tex.vOffset = (animTick * 0.012) % 1;
      tex.uOffset = (animTick * 0.0006) % 1;
    },
  };
  (scene as SceneAny)[key] = out;
  return out;
}
