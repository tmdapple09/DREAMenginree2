import { describe, expect, it } from 'vitest';
import {
  AudioTrackMixer,
  GeometryBatcher,
  MidiEventRingBuffer,
  ParticleSoAKernel,
  RayGridAccelerator,
  createEnginCapabilityExecutionKernel,
} from '@/lib/engin-runtime/EnginCapabilityExecution';
import {
  CANONICAL_ENGIN_IDS,
  ENGIN_CAPABILITY_PROFILES,
  acceptanceValueForTarget,
  capabilityProfileMatchesRuleSet,
  createCustomEnginCapabilityProfile,
  validateCanonicalEnginCapabilityProfiles,
  validateEnginCapabilityProfile,
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

  it('validates conservative custom extension profiles without canonical ids', () => {
    const custom = createCustomEnginCapabilityProfile('test');

    expect(custom.enginId).toBe('test');
    expect(validateEnginCapabilityProfile(custom).valid).toBe(true);
    expect(custom.targets.some((target) => target.dimension === 'ui-response')).toBe(true);
    expect(custom.targets.some((target) => target.dimension === 'collaboration-sync')).toBe(true);
    expect(custom.targets.some((target) => target.dimension === 'install-footprint')).toBe(false);
  });

  it('wires each rule-set to its matching capability target profile', () => {
    for (const ruleSet of RULE_SETS) {
      expect(capabilityProfileMatchesRuleSet(ruleSet.params.enginId, ruleSet.capabilityTargets.enginId)).toBe(true);
      expect(ruleSet.capabilityTargets.targets.length).toBeGreaterThan(0);
      expect(ruleSet.capabilityTargets.levers.length).toBeGreaterThan(0);
    }
  });

  it('translates at least and at most targets into eighty-percent acceptance values', () => {
    const gamesGeometry = ENGIN_CAPABILITY_PROFILES.games.targets.find(
      (target) => target.dimension === 'geometry-throughput',
    );
    const gamesLatency = ENGIN_CAPABILITY_PROFILES.games.targets.find(
      (target) => target.dimension === 'gpu-render-latency',
    );
    const brandResponse = ENGIN_CAPABILITY_PROFILES.brand.targets.find(
      (target) => target.dimension === 'ui-response',
    );
    const codeFootprint = ENGIN_CAPABILITY_PROFILES.code.targets.find(
      (target) => target.dimension === 'install-footprint',
    );

    expect(gamesGeometry).toBeDefined();
    expect(gamesLatency).toBeDefined();
    expect(brandResponse).toBeDefined();
    expect(codeFootprint).toBeDefined();
    expect(acceptanceValueForTarget(gamesGeometry!)).toBe(8_000_000);
    expect(acceptanceValueForTarget(gamesLatency!)).toBe(2.5);
    expect(acceptanceValueForTarget(brandResponse!)).toBe(0.625);
    expect(acceptanceValueForTarget(codeFootprint!)).toBe(100);
  });

  it('matches canonical rule-set aliases to widened profile ids', () => {
    expect(capabilityProfileMatchesRuleSet('game', 'games')).toBe(true);
    expect(capabilityProfileMatchesRuleSet('content', 'create')).toBe(true);
    expect(capabilityProfileMatchesRuleSet('starmaker', 'music')).toBe(true);
    expect(capabilityProfileMatchesRuleSet('branding', 'brand')).toBe(true);
    expect(capabilityProfileMatchesRuleSet('test', 'test')).toBe(true);
    expect(capabilityProfileMatchesRuleSet('test', 'code')).toBe(false);
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


describe('MidiEventRingBuffer', () => {
  it('keeps future events queued after draining due events', () => {
    const midi = new MidiEventRingBuffer(8);
    midi.push(30, 60, 0.1);
    midi.push(10, 61, 0.2);
    midi.push(20, 62, 0.3);
    midi.push(40, 63, 0.4);
    midi.push(25, 64, 0.5);

    expect([...midi.drainDue(19)]).toEqual([10, 61, 0.2]);
    expect(midi.size).toBe(4);
    expect([...midi.drainDue(25)]).toEqual([20, 62, 0.3, 25, 64, 0.5]);
    expect(midi.size).toBe(2);
    expect([...midi.drainDue(39)]).toEqual([30, 60, 0.1]);
    expect(midi.size).toBe(1);
    expect([...midi.drainDue(40)]).toEqual([40, 63, 0.4]);
    expect(midi.size).toBe(0);
  });

  it('overwrites the oldest event explicitly when full', () => {
    const midi = new MidiEventRingBuffer(2);
    midi.push(10, 60, 0.1);
    midi.push(20, 61, 0.2);
    midi.push(30, 62, 0.3);

    expect(midi.size).toBe(2);
    expect([...midi.drainDue(100)]).toEqual([20, 61, 0.2, 30, 62, 0.3]);
  });
});
