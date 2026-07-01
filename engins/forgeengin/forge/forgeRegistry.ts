


export const INFORMATION_DOMAINS = [
  'audio',
  'visual',
  'memory',
  'physics',
  'logic',
  'identity',
  'communication',
  'ai',
] as const;
export type InformationDomain = (typeof INFORMATION_DOMAINS)[number];

export interface EnginEntry {
  
  id: string;
  
  name: string;
  
  emoji: string;
  
  accent: string;
  
  desc: string;
  
  daydreamHref: string;
  
  enginHref: string;
  
  domains: readonly InformationDomain[];
  
  capabilities: readonly string[];
  
  userFacing: boolean;
  
  kind: 'creative' | 'orchestrator' | 'service' | 'experimental';
}


export const ENGIN_REGISTRY: readonly EnginEntry[] = [
  {
    id: 'games',
    kind: 'creative',
    userFacing: true,
    name: 'GameEngin',
    emoji: '🎮',
    accent: '#3b82f6', 
    desc: 'Play, compete, build worlds. Babylon.js + WebGPU + ray-tracing.',
    daydreamHref: '/daydream/games',
    enginHref: '/engines/games',
    domains: ['physics', 'visual', 'logic'],
    capabilities: ['Babylon.js', 'WebGPU', 'Ray-Tracing', 'Spatial Audio', 'AI NPCs'],
  },
  {
    id: 'music',
    kind: 'creative',
    userFacing: true,
    name: 'StarMakerEngin',
    emoji: '🎵',
    accent: '#1d4ed8',
    desc: 'Full DAW · AI stem separation · spatial audio · live collab.',
    daydreamHref: '/daydream/music',
    enginHref: '/engines/music',
    domains: ['audio', 'visual', 'communication'],
    capabilities: ['Web Audio', 'Multitrack', 'AI Stems', 'Spatial Audio', 'Live Collab'],
  },
  {
    id: 'code',
    kind: 'creative',
    userFacing: true,
    name: 'CodeEngin',
    emoji: '💻',
    accent: '#38bdf8', 
    desc: 'IDE · AI copilot 2026 · multi-cursor · live preview.',
    daydreamHref: '/daydream/code',
    enginHref: '/engines/code',
    domains: ['logic', 'ai'],
    capabilities: ['Monaco', 'TypeScript', 'AI Copilot', 'Multi-Cursor', 'Live Preview'],
  },
  {
    id: 'lab',
    kind: 'creative',
    userFacing: true,
    name: 'LabEngin',
    emoji: '🔬',
    accent: '#93c5fd',
    desc: 'Experiments · quantum circuits 2026 · GPU compute · real-time viz.',
    daydreamHref: '/daydream/lab',
    enginHref: '/engines/lab',
    domains: ['physics', 'logic', 'ai'],
    capabilities: ['WebGPU', 'Quantum 2026', 'TensorFlow', 'GPU Compute', 'Real-Time Viz'],
  },
  {
    id: 'brand',
    kind: 'creative',
    userFacing: true,
    name: 'BrandingEngin',
    emoji: '🎨',
    accent: '#f8d26a',
    desc: 'Identity · AI brand kit · motion graphics · analytics 2.0.',
    daydreamHref: '/daydream/brand',
    enginHref: '/engines/brand',
    domains: ['visual', 'communication'],
    capabilities: ['AI Brand Kit', 'Motion Graphics', 'Analytics 2.0', 'Export'],
  },
  {
    id: 'create',
    kind: 'creative',
    userFacing: true,
    name: 'ContentEngin',
    emoji: '✨',
    accent: '#c8981a',
    desc: 'Procedural assets · validation · game-ready export.',
    daydreamHref: '/daydream/create',
    enginHref: '/engines/create',
    domains: ['communication', 'visual', 'memory'],
    capabilities: ['Procedural Assets', 'Asset Validation', 'GLB Export', 'Game Handoff', 'Rig Metadata'],
  },

  {
    id: 'render',
    kind: 'service',
    userFacing: false,
    name: 'RenderEngin',
    emoji: '🧊',
    accent: '#38bdf8',
    desc: 'WebGPU scene viewport for user assets, previews, snapshots, and cross-Engin render handoffs.',
    daydreamHref: '',
    enginHref: '',
    domains: ['visual', 'physics', 'logic'],
    capabilities: ['WebGPU', 'Scene Graph', 'Asset Preview', 'Runtime Snapshots', 'Cross-Engin Handoff'],
  },
  {
    id: 'forge',
    kind: 'orchestrator',
    userFacing: true,
    name: 'ForgeEngin',
    emoji: '🔥',
    accent: '#0f3b66',
    desc: 'Meta-creation engine. Orchestrate all engines. Workflow automation 2.0.',
    daydreamHref: '/daydream/forge',
    enginHref: '/daydream/forge',
    domains: ['logic', 'memory', 'ai'],
    capabilities: ['Cross-Engine', 'Status Matrix', 'Orchestration', 'Automation 2.0'],
  },
] as const;


export const USER_FACING_ENGINES = ENGIN_REGISTRY.filter((e) => e.userFacing);
export const CREATIVE_ENGINES = ENGIN_REGISTRY.filter((e) => e.kind === 'creative' && e.userFacing);
export const INTERNAL_SERVICE_ENGINES = ENGIN_REGISTRY.filter((e) => e.kind === 'service');

export function isUserFacingEnginName(name: string): boolean {
  return ENGIN_REGISTRY.some((engin) => engin.name === name && engin.userFacing);
}

export function getEnginById(id: string): EnginEntry | null {
  return ENGIN_REGISTRY.find((engin) => engin.id === id) ?? null;
}

export function getEnginByName(name: string): EnginEntry | null {
  return ENGIN_REGISTRY.find((engin) => engin.name === name) ?? null;
}

export interface ForgeActivityPulse {
  enginId: string;
  
  lastActive: string;
  
  heat: number;
  
  label: string;
}


const FORGE_STORAGE_KEY = 'de:forge:activity';


export function recordForgeActivity(enginId: string, label: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(FORGE_STORAGE_KEY);
    const data: Record<string, ForgeActivityPulse> = raw ? JSON.parse(raw) : {};
    data[enginId] = {
      enginId,
      lastActive: new Date().toISOString(),
      heat: 1.0,
      label,
    };
    localStorage.setItem(FORGE_STORAGE_KEY, JSON.stringify(data));
    
    appendToHistory(enginId, label);
  } catch {
    
  }
}


export const FORGE_HISTORY_KEY = 'de:forge:history';


const MAX_HISTORY = 100;

function appendToHistory(enginId: string, label: string): void {
  try {
    const raw = localStorage.getItem(FORGE_HISTORY_KEY);
    const history: Array<{ enginId: string; label: string; timestamp: string }> = raw ? JSON.parse(raw) : [];
    history.push({ enginId, label, timestamp: new Date().toISOString() });
    if (history.length > MAX_HISTORY) history.splice(0, history.length - MAX_HISTORY);
    localStorage.setItem(FORGE_HISTORY_KEY, JSON.stringify(history));
  } catch {
    
  }
}


export function readForgeActivity(): ForgeActivityPulse[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FORGE_STORAGE_KEY);
    if (!raw) return [];
    const data: Record<string, ForgeActivityPulse> = JSON.parse(raw);
    const now = Date.now();
    return Object.values(data).map((pulse) => {
      const elapsed = now - new Date(pulse.lastActive).getTime();
      
      const decay = Math.max(0, 1 - elapsed / (30 * 60 * 1000));
      return { ...pulse, heat: decay };
    });
  } catch {
    return [];
  }
}


export function getForgeHeat(enginId: string): ForgeActivityPulse | null {
  const all = readForgeActivity();
  return all.find((p) => p.enginId === enginId) ?? null;
}


export function formatRelativeTime(isoStr: string): string {
  const elapsed = Date.now() - new Date(isoStr).getTime();
  if (elapsed < 60_000) return 'just now';
  if (elapsed < 3600_000) return `${Math.floor(elapsed / 60_000)}m ago`;
  if (elapsed < 86400_000) return `${Math.floor(elapsed / 3600_000)}h ago`;
  return `${Math.floor(elapsed / 86400_000)}d ago`;
}

export interface ForgeWorkflow {
  
  id: string;
  
  title: string;
  
  emoji: string;
  
  accent: string;
  
  desc: string;
  
  engines: readonly string[];
  
  steps: readonly string[];
}


export const FORGE_WORKFLOWS: readonly ForgeWorkflow[] = [
  {
    id: 'music-video',
    title: 'Music Video Pipeline',
    emoji: '🎬',
    accent: '#1d4ed8',
    desc: 'Record a track, build game-ready visual assets, and package the identity.',
    engines: ['music', 'create', 'brand'],
    steps: [
      'Open StarMakerEngin → compose & mix a track with AI stem separation',
      'Open ContentEngin → build game-ready visual assets from the track identity',
      'Open BrandingEngin → apply brand kit to thumbnails',
    ],
  },
  {
    id: 'game-soundtrack',
    title: 'Game Soundtrack Flow',
    emoji: '🎮',
    accent: '#3b82f6',
    desc: 'Produce beats, wire them into a game world with spatial audio.',
    engines: ['music', 'games'],
    steps: [
      'Open StarMakerEngin → create a beat with spatial audio positioning',
      'Open GameEngin → attach audio to a scene with 3D positioning',
    ],
  },
  {
    id: 'data-story',
    title: 'Data Story',
    emoji: '📊',
    accent: '#93c5fd',
    desc: 'Run an experiment, analyse with code, and export visual evidence assets.',
    engines: ['lab', 'code', 'create'],
    steps: [
      'Open LabEngin → run a simulation & export data',
      'Open CodeEngin → write an analysis notebook with AI copilot',
      'Open ContentEngin → generate export-ready research visuals',
    ],
  },
  {
    id: 'brand-campaign',
    title: 'Brand Campaign',
    emoji: '📣',
    accent: '#f8d26a',
    desc: 'Build brand identity, generate campaign assets, and prepare exports.',
    engines: ['brand', 'create'],
    steps: [
      'Open BrandingEngin → generate AI brand kit with motion graphics',
      'Open ContentEngin → generate campaign assets and export-ready media',
    ],
  },
  {
    id: 'full-stack-game',
    title: 'Full-Stack Game Dev',
    emoji: '🚀',
    accent: '#38bdf8',
    desc: 'Code the logic, build the world, playtest & share.',
    engines: ['code', 'games', 'create'],
    steps: [
      'Open CodeEngin → write game scripts with multi-cursor editing',
      'Open GameEngin → world-build with ray-traced lighting & playtest',
      'Open ContentEngin → create launch assets and export a shareable bundle',
    ],
  },
  {
    id: 'ai-music-generation',
    title: 'AI Music Generation',
    emoji: '🤖',
    accent: '#1d4ed8',
    desc: 'Code generative algorithms, produce music, analyze results.',
    engines: ['code', 'music', 'lab'],
    steps: [
      'Open CodeEngin → write generative audio algorithm',
      'Open StarMakerEngin → generate procedural music tracks',
      'Open LabEngin → analyze audio spectral properties',
    ],
  },
  {
    id: 'quantum-game',
    title: 'Quantum Physics Game',
    emoji: '⚛️',
    accent: '#93c5fd',
    desc: 'Simulate quantum mechanics, build game world, export levels.',
    engines: ['lab', 'games', 'forge'],
    steps: [
      'Open LabEngin → run quantum circuit simulation',
      'Open GameEngin → import physics simulation into gameplay',
      'Open ForgeEngin → export game level as 3D model',
    ],
  },
  {
    id: 'sonic-branding',
    title: 'Sonic Brand Identity',
    emoji: '🔊',
    accent: '#f8d26a',
    desc: 'Design brand kit, create sonic identity, and export campaign assets.',
    engines: ['brand', 'music', 'create'],
    steps: [
      'Open BrandingEngin → design AI-powered brand kit',
      'Open StarMakerEngin → create sonic branding and audio logo',
      'Open ContentEngin → generate campaign assets and export-ready media',
    ],
  },
  {
    id: 'research-publication',
    title: 'Research Publication Pipeline',
    emoji: '📄',
    accent: '#93c5fd',
    desc: 'Experiment, analyze, and export shareable findings.',
    engines: ['lab', 'code', 'create', 'brand'],
    steps: [
      'Open LabEngin → conduct experiment with GPU compute',
      'Open CodeEngin → analyze data with AI copilot',
      'Open ContentEngin → generate research visuals and export a shareable bundle',
      'Open BrandingEngin → create presentation graphics',
    ],
  },
  {
    id: 'interactive-tutorial',
    title: 'Interactive Tutorial Creation',
    emoji: '📚',
    accent: '#38bdf8',
    desc: 'Code examples, build interactive demos, and export tutorial assets.',
    engines: ['code', 'games', 'create'],
    steps: [
      'Open CodeEngin → write tutorial notebook with live preview',
      'Open GameEngin → create interactive demo world',
      'Open ContentEngin → export tutorial media and shareable asset bundle',
    ],
  },
] as const;
