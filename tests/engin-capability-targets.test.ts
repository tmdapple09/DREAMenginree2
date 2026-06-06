import { describe, expect, it } from 'vitest';
import {
  AudioTrackMixer,
  GeometryBatcher,
  ParticleSoAKernel,
  RayGridAccelerator,
  createEnginCapabilityExecutionKernel,
} from '@/lib/engin-runtime/EnginCapabilityExecution';
import {
  CANONICAL_ENGIN_IDS,
  ENGIN_CAPABILITY_PROFILES,
  acceptanceValueForTarget,
  validateCanonicalEnginCapabilityProfiles,
} from '@/lib/engin-runtime/EnginCapabilityTargets';
import { BRAND_ENGIN_RULE_SET } from '@/lib/engins/brand/brandEnginRuleSet';
import { CODE_ENGIN_RULE_SET } from '@/lib/engins/code/codeEnginRuleSet';
import { CONTENT_ENGIN_RULE_SET } from '@/lib/engins/content/contentEnginRuleSet';
import { GAME_ENGIN_RULE_SET } from '@/lib/engins/game/gameEnginRuleSet';
import { LAB_ENGIN_RULE_SET } from '@/lib/engins/lab/labEnginRuleSet';
import { STAR_MAKER_ENGIN_RULE_SET } from '@/lib/engins/music/starMakerEnginRuleSet';

const RULE_SETS = [
  CODE_ENGIN_RULE_SET,
  GAME_ENGIN_RULE_SET,
  STAR_MAKER_ENGIN_RULE_SET,
  CONTENT_ENGIN_RULE_SET,
  BRAND_ENGIN_RULE_SET,
  LAB_ENGIN_RULE_SET,
] as const;

describe('Engin capability target profiles', () => {
  it('declares valid internal targets for every canonical Engin', () => {
    const validations = validateCanonicalEnginCapabilityProfiles();

    expect(validations).toHaveLength(CANONICAL_ENGIN_IDS.length);
    expect(validations.every((validation) => validation.valid)).toBe(true);
  });

  it('wires each rule-set to its matching capability target profile', () => {
    for (const ruleSet of RULE_SETS) {
      expect(ruleSet.capabilityTargets.enginId).toBe(ruleSet.params.enginId);
      expect(ruleSet.capabilityTargets.targets.length).toBeGreaterThan(0);
      expect(ruleSet.capabilityTargets.levers.length).toBeGreaterThan(0);
    }
  });

  it('translates at least eighty percent progress into acceptance values', () => {
    const gamesProfile = ENGIN_CAPABILITY_PROFILES.games;
    const geometryTarget = gamesProfile.targets.find(
      (target) => target.dimension === 'geometry-throughput',
    );
    const renderLatencyTarget = gamesProfile.targets.find(
      (target) => target.dimension === 'gpu-render-latency',
    );

    expect(geometryTarget).toBeDefined();
    expect(renderLatencyTarget).toBeDefined();
    expect(acceptanceValueForTarget(geometryTarget!)).toBe(8_000_000);
    expect(acceptanceValueForTarget(renderLatencyTarget!)).toBe(1.25);
  });
});

describe('Engin capability execution kernels', () => {
  it('creates concrete hot-path kernels for each canonical rule-set', () => {
    for (const ruleSet of RULE_SETS) {
      const kernel = createEnginCapabilityExecutionKernel(ruleSet.capabilityTargets);
      expect(kernel.plan.enginId).toBe(ruleSet.params.enginId);
      expect(kernel.plan.subsystems.length).toBeGreaterThan(0);
    }
  });

  it('batches instanced geometry past the Games acceptance floor without extra draw calls per instance', () => {
    const batcher = new GeometryBatcher();
    const plan = batcher.buildPlan({
      sourceMeshPolygons: 2_000,
      instances: 4_000,
      materialBuckets: 2,
    });

    expect(plan.totalPolygons).toBeGreaterThanOrEqual(8_000_000);
    expect(plan.drawCalls).toBe(2);
  });

  it('preallocates the StarMaker audio mixer for the required track floor', () => {
    const mixer = new AudioTrackMixer(256, 128);
    const output = new Float32Array(128);
    mixer.samples[0] = 0.5;
    mixer.samples[128] = 0.25;
    mixer.mixInto(output);

    expect(mixer.gains).toHaveLength(256);
    expect(output[0]).toBeCloseTo(0.75);
  });

  it('uses a ray accelerator with deterministic nearest-hit results', () => {
    const rays = new RayGridAccelerator();
    rays.rebuild([
      { minX: 5, minY: -1, minZ: -1, maxX: 6, maxY: 1, maxZ: 1 },
      { minX: 2, minY: -1, minZ: -1, maxX: 3, maxY: 1, maxZ: 1 },
    ]);

    const hit = rays.intersect({
      originX: 0,
      originY: 0,
      originZ: 0,
      dirX: 1,
      dirY: 0,
      dirZ: 0,
    });

    expect(hit).toEqual({ index: 1, distance: 2 });
  });

  it('runs Lab particle integration through struct-of-arrays buffers', () => {
    const particles = new ParticleSoAKernel(65_536);
    particles.vx.fill(2);
    particles.vy.fill(3);
    particles.integrate(0.5);

    expect(particles.x[65_535]).toBe(1);
    expect(particles.y[65_535]).toBe(1.5);
  });
});
