import { describe, expect, it } from 'vitest';
import {
  AssetManifestLoader,
  BrandCollaborationDeltaPacker,
  BrandFileHydrator,
  BrandLocalApplyQueue,
  BrandPatchLog,
  BrandSdfGlyphAtlas,
  BrandVectorPathCache,
  CacheStorageRuntime,
  CodeDiagnosticWorkerBridge,
  CodeEditRingBuffer,
  CodeEditorHotState,
  CodeExecutionWorkerBridge,
  CodeKeystrokeBenchmark,
  CodePieceTableDocument,
  CodeSnapshotCompactor,
  CodeStartupHydrator,
  CollaborationApplyQueue,
  CollaborationRevisionClock,
  CommandRingBuffer,
  ContentRayAccelerationStructure,
  ContentRenderJobQueue,
  ContentTileRenderer4K,
  ContentWorkerRenderBridge,
  CrdtPatchModel,
  DeferredPersistenceQueue,
  DeferredSyncQueue,
  DeterministicMergePatchModel,
  GameFrustumCuller,
  GameGeometryThroughputBenchmark,
  GameInputRingBuffer,
  GameInstanceBufferManager,
  GameLODSelector,
  GameMaterialBucketBuffer,
  GamePhysicsCommandBuffer,
  HotActionClassifier,
  HotRuntime,
  IndexedDbBlobStore,
  InternalOnlyMetricStore,
  LabCollisionCandidateBuffer,
  LabCollisionKernel,
  LabParticleSoABuffer,
  LabSimulationClock,
  LazyEnginHydrator,
  MidiEventRingBuffer,
  RevisionCoalescer,
  SnapshotCompactor,
  StarMakerAudioCommandQueue,
  StarMakerLatencyProbe,
  StarMakerMeteringDecoupler,
  StarMakerMixerKernel,
  StarMakerTrackBufferPool,
  StreamingAssetLoader,
  TransportLatencyProbe,
  TypedMemoryArena,
  UserFacingMetricLeakTest,
  WebGPUDeviceRuntime,
  createCanonicalScorecards,
  createCustomEnginCapabilityProfile,
  createEnginCapabilityScorecard,
  createEnginRuntime,
  detectEnginHardwareCapabilities,
  fallbackEnginHardwareCapabilities,
  getEnginExecutionPlan,
  validateEnginCapabilityProfile,
  type EnginAction,
  type EnginRuleSetContract,
} from '@/engine/engin-runtime';
import { patchBaseState, type EnginBaseState } from '@/engine/engin-runtime/EnginBaseState';

describe('DREAMengin hot runtime execution inventory', () => {
  it('routes hot actions through classifier, hot runtime, rings, typed memory, and deferred queues', () => {
    const plan = getEnginExecutionPlan('code');
    const classifier = new HotActionClassifier(plan);
    const runtime = new HotRuntime<EnginAction>(plan);
    const ring = new CommandRingBuffer<EnginAction>();
    const arena = new TypedMemoryArena(1024);
    const persistence = new DeferredPersistenceQueue<string>();
    const sync = new DeferredSyncQueue<string>();
    const revisions = new RevisionCoalescer();
    const snapshots = new SnapshotCompactor<string>();

    expect(classifier.classify('code:cell-update')).toBe('keystroke');
    expect(runtime.submit({ type: 'code:cell-update' }, 1)).toBe(true);
    ring.push({ type: 'code:cell-update' });
    expect(ring.drain()).toHaveLength(1);
    expect(arena.allocFloat32(8)).toHaveLength(8);
    persistence.push('save-later');
    sync.push('sync-later');
    snapshots.remember('checkpoint');
    expect(revisions.mark(2)).toBe(true);
    expect(persistence.drain()).toEqual(['save-later']);
    expect(sync.drain()).toEqual(['sync-later']);
    expect(snapshots.latest()).toBe('checkpoint');
  });



  it('exposes an honest WebGPU initialization contract instead of assuming GPU readiness', async () => {
    const webgpu = new WebGPUDeviceRuntime();
    const result = await webgpu.ensureInitialized();
    expect(typeof result.ready).toBe('boolean');
    expect(['ready', 'unavailable', 'failed', 'lost']).toContain(result.state);
    expect(webgpu.ready).toBe(result.ready);
  });

  it('wires CodeEngin edit hot state, workers, compaction, startup, and keystroke probe', () => {
    const document = new CodePieceTableDocument('hello');
    document.edit(5, 0, ' world');
    const edits = new CodeEditRingBuffer();
    const hotState = new CodeEditorHotState();
    const diagnostics = new CodeDiagnosticWorkerBridge();
    const execution = new CodeExecutionWorkerBridge();
    const compactor = new CodeSnapshotCompactor();
    const hydrator = new CodeStartupHydrator();

    edits.push({ cellId: 'a', start: 0, deleteCount: 0, insertText: 'x' });
    hotState.document.edit(0, 0, 'x');
    compactor.remember(document.toString());
    expect(document.toString()).toBe('hello world');
    expect(edits.drain()).toHaveLength(1);
    expect(diagnostics.requestDiagnostics({ file: 'x.ts' })).toBe(true);
    expect(execution.requestExecution({ cell: 'a' })).toBe(true);
    expect(compactor.latest()).toBe('hello world');
    expect(hydrator.hydrateShell()).toBe('shell-ready');
    expect(new CodeKeystrokeBenchmark().measure()).toBeGreaterThanOrEqual(0);
  });

  it('wires GameEngin render, geometry, culling, LOD, input, physics, and throughput lanes', () => {
    const instances = new GameInstanceBufferManager();
    const buckets = new GameMaterialBucketBuffer();
    const culler = new GameFrustumCuller();
    const lod = new GameLODSelector();
    const input = new GameInputRingBuffer<string>();
    const physics = new GamePhysicsCommandBuffer<string>();

    buckets.add('mat', 1);
    input.push('button-a');
    physics.push('step');
    expect(instances.transforms.length).toBe(16 * 65_536);
    expect(buckets.bucketCount).toBe(1);
    expect(culler.cull([{ visible: true }, { visible: false }])).toHaveLength(1);
    expect(lod.select(200)).toBe(3);
    expect(input.drain()).toEqual(['button-a']);
    expect(physics.drain()).toEqual(['step']);
    expect(new GameGeometryThroughputBenchmark().measure()).toBeGreaterThanOrEqual(8_000_000);
  });

  it('wires StarMaker audio worklet bridge primitives, MIDI queue, transport, mixer, and metering lanes', () => {
    const tracks = new StarMakerTrackBufferPool(256, 128);
    const commands = new StarMakerAudioCommandQueue<string>();
    const midi = new MidiEventRingBuffer();
    const mixer = new StarMakerMixerKernel(256, 128);
    const meters = new StarMakerMeteringDecoupler();

    commands.push('transport:start');
    midi.push(0, 60, 1);
    meters.push(0.5);
    expect(tracks.tracks).toHaveLength(256);
    expect(commands.drain()).toEqual(['transport:start']);
    expect(midi.drainDue(1)).toHaveLength(3);
    expect(mixer.gains).toHaveLength(256);
    expect(meters.read()).toBe(0.5);
    expect(new StarMakerLatencyProbe().measurement('midi-latency', 0).value).toBe(0);
  });

  it('wires Content, Branding, Lab, collaboration, storage, scorecard, and leak-safety lanes', async () => {
    const contentJobs = new ContentRenderJobQueue<string>();
    const contentWorker = new ContentWorkerRenderBridge();
    const tiles = new ContentTileRenderer4K();
    const rays = new ContentRayAccelerationStructure();
    const vectorCache = new BrandVectorPathCache();
    const atlas = new BrandSdfGlyphAtlas();
    const fileHydrator = new BrandFileHydrator();
    const deltas = new BrandCollaborationDeltaPacker();
    const patchLog = new BrandPatchLog<object>();
    const localApply = new BrandLocalApplyQueue<object>();
    const particles = new LabParticleSoABuffer(65_536);
    const candidates = new LabCollisionCandidateBuffer();
    const collision = new LabCollisionKernel();
    const simClock = new LabSimulationClock();
    const apply = new CollaborationApplyQueue<object>();
    const revisions = new CollaborationRevisionClock();
    const transport = new TransportLatencyProbe();
    const merge = new DeterministicMergePatchModel<{ a: number; b?: number }>();
    const crdt = new CrdtPatchModel<{ a: number; b?: number }>();
    const manifest = new AssetManifestLoader();
    const lazy = new LazyEnginHydrator();
    const streaming = new StreamingAssetLoader();
    const indexedDb = new IndexedDbBlobStore();
    const cacheStorage = new CacheStorageRuntime();
    const metrics = new InternalOnlyMetricStore();
    const leakTest = new UserFacingMetricLeakTest(['EnginCapabilityScorecard']);

    contentJobs.push('tile');
    rays.rebuild([{ minX: 0, minY: 0, minZ: 0, maxX: 1, maxY: 1, maxZ: 1 }]);
    vectorCache.getOrBuild('p', () => new Float32Array([1, 2]));
    atlas.glyphs.set('A', new Float32Array([1]));
    patchLog.push({ op: 'set' });
    localApply.push({ op: 'set' });
    candidates.push(1, 2);
    apply.push({ op: 'remote' });
    const scorecard = createEnginCapabilityScorecard(createCustomEnginCapabilityProfile('custom:test'), [
      { dimension: 'idle-memory', value: 1 },
      { dimension: 'input-latency', value: 1 },
      { dimension: 'startup-time', value: 1 },
      { dimension: 'collaboration-sync', value: 1 },
    ]);
    metrics.set(scorecard);

    expect(contentJobs.drain()).toEqual(['tile']);
    expect(contentWorker.submit({ job: 'render' })).toBe(true);
    expect(tiles.tiles()).toBeGreaterThan(1);
    expect(fileHydrator.previewFirst(new Uint8Array(10_000))).toHaveLength(4096);
    expect(deltas.pack(1, 2, new Uint8Array([3]))).toHaveLength(9);
    expect(particles.flags).toHaveLength(65_536);
    expect(candidates.count).toBe(1);
    expect(collision.collide(0, 0, 1, 1, 2)).toBe(true);
    expect(simClock.step(1 / 30)).toBe(2);
    expect(revisions.next()).toBe(1);
    expect(transport.measurement('collaboration-sync', 0).value).toBe(0);
    expect(merge.merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(crdt.merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(manifest.load({ id: 'm' })).toEqual({ id: 'm' });
    expect(lazy.hydrateLayer('shell')).toBe('shell');
    expect(streaming.stream(new Uint8Array(128 * 1024))).toHaveLength(2);
    expect(await indexedDb.put('x', new Blob())).toBe(typeof indexedDB !== 'undefined');
    expect(await cacheStorage.available()).toBe(typeof caches !== 'undefined');
    expect(metrics.get(scorecard.enginId)).toBe(scorecard);
    expect(leakTest.scan('safe surface copy')).toEqual([]);
  });

  it('creates canonical internal scorecards from hardware capabilities', () => {
    const scorecards = createCanonicalScorecards(fallbackEnginHardwareCapabilities());
    expect(scorecards).toHaveLength(6);
    expect(scorecards.every((scorecard) => scorecard.entries.length > 0)).toBe(true);
  });
});

describe('custom Engin capability profiles', () => {
  type CustomAction = EnginAction<'custom:ping', { value: number }>;
  const customProfile = createCustomEnginCapabilityProfile('custom:extension');
  const customRuleSet: EnginRuleSetContract<CustomAction> = {
    manifest: {
      id: 'custom:extension',
      name: 'ExtensionEngin',
      version: '1.0.0',
      schema: { actionTypes: ['custom:ping'], domainVersion: 1 },
      compatibility: { minRuntimeVersion: '1.0.0', requiredFeatures: ['lifecycle-hooks', 'manifest-schema', 'strict-intent-routing', 'sync-transport', 'state-snapshotting', 'compatibility-negotiation'] },
    },
    params: { enginId: 'custom:extension', name: 'ExtensionEngin', layoutMode: 'standard', accentColor: '#fff' },
    requiredCapabilities: ['state:read'],
    capabilityTargets: customProfile,
    constraints: [],
    transform(state: EnginBaseState, action: CustomAction): EnginBaseState {
      return patchBaseState(state, { domain: { value: action.payload?.value ?? 0 } });
    },
    deriveState(state: EnginBaseState) { return { value: state.domain.value ?? 0 }; },
  };

  it('validates and boots custom Engins without pretending to be CodeEngin', () => {
    expect(validateEnginCapabilityProfile(customProfile).valid).toBe(true);
    const runtime = createEnginRuntime(customRuleSet, { persistenceKey: false });
    expect(runtime.executionKernel.plan.enginId).toBe('custom:extension');
    expect(runtime.dispatch({ type: 'custom:ping', payload: { value: 7 } })).toBe(true);
    expect(runtime.getDerivedState().value).toBe(7);
  });

  it('detects real hardware capabilities without exposing them to UI', async () => {
    const hardware = await detectEnginHardwareCapabilities();
    expect(typeof hardware.worker).toBe('boolean');
    expect(typeof hardware.wasm).toBe('boolean');
  });
});

describe('internal-only metric leak safety', () => {
  it('keeps target numbers, scorecards, and benchmark names out of user-facing surfaces', async () => {
    const { readFile } = await import('node:fs/promises');
    const { glob } = await import('glob');
    const files = await glob(['app/**/*.{ts,tsx,md}', 'components/**/*.{ts,tsx,md}', 'public/**/*.{html,md,txt,json}'], {
      ignore: ['**/node_modules/**', 'public/Agents-MUST-READ-ARCHITECTURE.md'],
    });
    const leakTest = new UserFacingMetricLeakTest([
      'EnginCapabilityScorecard',
      'EnginPerformanceProbe',
      'CodeKeystrokeBenchmark',
      'GameGeometryThroughputBenchmark',
      'StarMakerLatencyProbe',
      'LabParticleBenchmark64K',
      '82 TFLOPS',
      '100+ million polygons',
      '0.1 ms audio latency',
    ]);
    const leaks: string[] = [];
    for (const file of files) {
      const leaked = leakTest.scan(await readFile(file, 'utf8'));
      if (leaked.length > 0) leaks.push(`${file}:${leaked.join(',')}`);
    }
    expect(leaks).toEqual([]);
  });
});
