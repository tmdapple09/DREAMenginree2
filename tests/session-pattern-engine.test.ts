import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SessionPatternEngine } from '@/engine/intelligence/sessionPatternEngine';


vi.mock('@tensorflow/tfjs', () => ({
  setBackend: vi.fn().mockResolvedValue(undefined),
  ready: vi.fn().mockResolvedValue(undefined),
  tensor1d: vi.fn((data: number[]) => ({
    dispose: vi.fn(),
    dataSync: vi.fn(() => data),
  })),
  softmax: vi.fn((tensor: { dataSync: () => number[]; dispose: () => void }) => ({
    dataSync: tensor.dataSync,
    dispose: vi.fn(),
  })),
}));
vi.mock('@tensorflow/tfjs-backend-webgpu', () => ({}));

describe('SessionPatternEngine', () => {
  let engine: SessionPatternEngine;

  beforeEach(() => {
    engine = new SessionPatternEngine();
  });

  it('starts with no transitions and isReady false', () => {
    const state = engine.getState();
    expect(state.transitionCount).toBe(0);
    expect(state.isReady).toBe(false);
    expect(state.subsystemsSeen).toEqual([]);
  });

  it('ingests subsystem activations and tracks unique systems', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('GameEngin');

    const state = engine.getState();
    expect(state.subsystemsSeen).toEqual(['CodeEngin', 'LabEngin', 'GameEngin']);
    expect(state.transitionCount).toBe(2);
  });

  it('returns warm cold-start defaults before MIN_TRANSITIONS are reached', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    
    
    const preds = engine.predict('CodeEngin');
    expect(preds.length).toBeGreaterThan(0);
    
    for (const p of preds) {
      expect(p.confidence).toBeGreaterThan(0);
      expect(p.confidence).toBeLessThanOrEqual(1);
    }
  });

  it('predicts after MIN_TRANSITIONS (3) are satisfied', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    const state = engine.getState();
    expect(state.isReady).toBe(true);

    const preds = engine.predict('CodeEngin');
    expect(preds.length).toBeGreaterThan(0);
    expect(preds[0].subsystemId).toBe('LabEngin');
    expect(preds[0].confidence).toBeGreaterThan(0);
    expect(preds[0].label).toContain('LabEngin');
  });

  it('returns predictions in descending confidence order', () => {
    
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    const preds = engine.predict('CodeEngin');
    expect(preds.length).toBeGreaterThanOrEqual(2);
    
    expect(preds[0].subsystemId).toBe('LabEngin');
    for (let i = 1; i < preds.length; i++) {
      expect(preds[i - 1].confidence).toBeGreaterThanOrEqual(preds[i].confidence);
    }
  });

  it('returns at most topN predictions', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('BrandingEngin');
    engine.ingest('CodeEngin');
    engine.ingest('ContentEngin');

    const preds = engine.predict('CodeEngin', 2);
    expect(preds.length).toBeLessThanOrEqual(2);
  });

  it('returns cold-start defaults for a subsystem with no learned transitions', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    
    
    const preds = engine.predict('StarMakerEngin');
    expect(preds.length).toBeGreaterThan(0);
    for (const p of preds) {
      expect(p.confidence).toBeGreaterThan(0);
    }
  });

  it('all prediction confidences are in [0, 1]', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    const preds = engine.predict('CodeEngin');
    for (const p of preds) {
      expect(p.confidence).toBeGreaterThanOrEqual(0);
      expect(p.confidence).toBeLessThanOrEqual(1);
    }
  });

  it('does not count consecutive duplicate ingests as transitions', () => {
    engine.ingest('CodeEngin');
    engine.ingest('CodeEngin'); 
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    
    const preds = engine.predict('CodeEngin');
    const selfPred = preds.find((p) => p.subsystemId === 'CodeEngin');
    expect(selfPred).toBeUndefined();
  });

  it('reset() clears all learned transitions; predict falls back to cold-start', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    engine.reset();

    const state = engine.getState();
    expect(state.transitionCount).toBe(0);
    expect(state.isReady).toBe(false);
    expect(state.subsystemsSeen).toEqual([]);

    
    const preds = engine.predict('CodeEngin');
    expect(preds.length).toBeGreaterThan(0);
    
    
    const state2 = engine.getState();
    expect(state2.isReady).toBe(false);
  });

  it('getActivationSequence returns ingested order', () => {
    engine.ingest('A');
    engine.ingest('B');
    engine.ingest('A');
    expect(engine.getActivationSequence()).toEqual(['A', 'B', 'A']);
  });

  it('uses emoji label for known subsystems', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');

    const preds = engine.predict('CodeEngin');
    expect(preds[0].label).toBe('🧪 LabEngin');
  });

  it('uses fallback label for unknown subsystems', () => {
    
    
    for (let i = 0; i < 6; i++) {
      engine.ingest('X');
      engine.ingest('Y');
    }
    
    const preds = engine.predict('X');
    expect(preds[0].label).toContain('Y');
  });

  

  it('blends cold-start and learned weights in the 3–10 transition window', () => {
    
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');
    engine.ingest('CodeEngin');
    engine.ingest('ContentEngin'); 

    const state = engine.getState();
    expect(state.transitionCount).toBe(7);
    expect(state.isReady).toBe(true);

    const preds = engine.predict('CodeEngin');
    
    expect(preds.length).toBeGreaterThan(0);
    
    
    const labPred = preds.find((p) => p.subsystemId === 'LabEngin');
    expect(labPred).toBeDefined();
    
    const gamePred = preds.find((p) => p.subsystemId === 'GameEngin');
    expect(gamePred).toBeDefined();
    expect(gamePred!.confidence).toBeGreaterThan(labPred!.confidence);
  });

  

  it('exportMatrix returns a plain JSON-serialisable representation', () => {
    engine.ingest('CodeEngin');
    engine.ingest('LabEngin');
    engine.ingest('CodeEngin');
    engine.ingest('GameEngin');

    const matrix = engine.exportMatrix();
    expect(typeof matrix).toBe('object');
    expect(matrix['CodeEngin']).toBeDefined();
    expect(matrix['CodeEngin']['LabEngin']).toBe(1);
    expect(matrix['CodeEngin']['GameEngin']).toBe(1);
    
    const roundTripped = JSON.parse(JSON.stringify(matrix)) as typeof matrix;
    expect(roundTripped['CodeEngin']['LabEngin']).toBe(1);
  });

  it('importMatrix restores learned transitions from a saved matrix', () => {
    const savedMatrix = {
      CodeEngin: { LabEngin: 5, GameEngin: 2 },
      LabEngin: { CodeEngin: 3 },
    };
    const fresh = new SessionPatternEngine();
    fresh.importMatrix(savedMatrix);

    
    
    for (let i = 0; i < 6; i++) {
      fresh.ingest('CodeEngin');
      fresh.ingest('LabEngin');
    }

    const preds = fresh.predict('CodeEngin');
    expect(preds.length).toBeGreaterThan(0);
    
    expect(preds[0].subsystemId).toBe('LabEngin');
  });

  it('importMatrix is a no-op for malformed data', () => {
    const engine2 = new SessionPatternEngine();
    
    expect(() => engine2.importMatrix({ bad: null as any as Record<string, number> })).not.toThrow();
    expect(() => engine2.importMatrix({})).not.toThrow();
  });
});
