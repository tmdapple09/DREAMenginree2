import type { GameConfig } from '../GameEnginCore';



const demoGameConfig: GameConfig = {
  
  id: 'demo-game',
  name: 'DREAMengin Demo',
  version: '1.0.0',

  graphics: {
    
    qualityTier: 'high',
    
    maxLodLevel: 4,
    
    targetFps: 60,
    
    postFxEnabled: true,
    
    pbrEnabled: true,
  },

  simulation: {
    
    fixedTimestepMs: 16.6,
    
    gravity: [0, -9.81, 0],
    
    maxEntities: 2048,
    
    replayEnabled: true,
  },

  input: {
    
    touch: true,
    
    keyboard: true,
    
    gamepad: true,
    
    dualSense: true,
  },

  audio: {
    
    spatialAudio: true,
    
    voiceChannels: 4,
    
    musicChannels: 2,
    
    sfxChannels: 32,
  },

  networking: {
    
    primaryTransport: 'WebRTC',
    
    fallbackTransport: 'WebSocket',
    
    maxLatencyMs: 120,
    
    maxRollbackFrames: 8,
    
    tickRateHz: 60,
  },

  assets: {
    
    preload: [
      { id: 'mainCharacter', path: '/assets/characters/main.glb', priority: 10 },
      { id: 'terrain',       path: '/assets/terrain/heightmap.glb', priority: 9 },
    ],
    
    stream: [
      { id: 'envProbe',  path: '/assets/env/probe.hdr',   priority: 5 },
      { id: 'ambientFx', path: '/assets/audio/ambient.ogg', priority: 3 },
    ],
    
    memoryBudgetMib: 256,
    
    streamWorkers: 4,
  },

  offline: {
    
    enableActionQueue: true,
    
    enableSessionRestore: true,
    
    maxQueuedActions: 512,
  },

  security: {
    
    threatModel: 'default',
    
    contentModerationEnabled: true,
    
    antiCheatEnabled: true,
  },

  telemetry: {
    
    enabled: true,
    
    profilerRingBufferSize: 120,
    
    minAcceptableFps: 25,
  },
};

export default demoGameConfig;
