import { describe, expect, it } from 'vitest';

import {
  SHADER,
  createRenderPostProcessGraph,
  createTenMillionPolygonProof,
  evaluateGpuBenchmarkProof,
  executePostProcessPixel,
} from '@/engins/renderengin';
import { readFileSync } from 'node:fs';

describe('RenderEngin GPU texture/shadow/postprocess/proof surface', () => {
  it('binds albedo textures in the WebGPU shader instead of using only uniform color', () => {
    expect(SHADER).toContain('@group(0) @binding(1) var albedoTexture : texture_2d<f32>');
    expect(SHADER).toContain('@group(0) @binding(2) var albedoSampler : sampler');
    expect(SHADER).toContain('textureSample(albedoTexture, albedoSampler, input.uv)');
  });

  it('executes post-processing passes deterministically', () => {
    const graph = createRenderPostProcessGraph({ passes: ['bloom-threshold', 'tone-map', 'gamma-correct', 'bloom-composite'], exposure: 1.2, bloomThreshold: 0.7, bloomIntensity: 0.5 });
    const pixel = executePostProcessPixel([1.4, 0.8, 0.2, 1], graph);

    expect(pixel[0]).toBeGreaterThan(pixel[1]);
    expect(pixel[0]).toBeLessThanOrEqual(1);
    expect(pixel[3]).toBe(1);
  });

  it('creates explicit 10M polygon GPU benchmark proof objects', () => {
    const proof = createTenMillionPolygonProof({ sourceTrianglesPerInstance: 50_000, instanceCount: 220, drawCalls: 8 });
    const result = evaluateGpuBenchmarkProof(proof, { averageGpuFrameMs: 15.5, averageCpuFrameMs: 9.2, droppedFrameCount: 0 });

    expect(proof.totalTriangles).toBe(11_000_000);
    expect(proof.passes10M).toBe(true);
    expect(result).toMatchObject({ passed: true, desktopPass: true });
  });

  it('ships server-backed RLS for user-owned render assets', () => {
    const sql = readFileSync('supabase/migrations/20260619000000_renderengin_assets_rls.sql', 'utf8');

    expect(sql).toContain('create table if not exists public.render_assets');
    expect(sql).toContain('alter table public.render_assets enable row level security');
    expect(sql).toContain('auth.uid() = owner_id');
    expect(sql).toContain("visibility in ('shared', 'global')");
  });
});
