import {
  createRuntimeObject,
  type EngineManifest,
  type IntentPacket,
  type JsonObject,
  type JsonValue,
  type RuntimeRuleSet,
} from '@/engine/runtime/iEngine';

export const COMPETING_PLATFORMS = [
  'Adobe Creative Cloud',
  'Adobe Firefly',
  'Canva',
  'Figma',
  'Figma Make',
  'Runway',
  'Google Flow',
  'Roblox Studio',
  'Unreal Engine',
  'UEFN',
  'Unity',
  'Godot',
  'Replit',
  'Cursor',
  'Windsurf',
  'GitHub Copilot',
  'Bolt',
  'Lovable',
  'v0',
  'Blender',
  'Spline',
  'Meshy',
  'Tripo AI',
  'Luma AI',
  'Leonardo.ai',
  'Krea',
  'Suno',
  'Udio',
  'BandLab',
  'CapCut',
  'TikTok',
  'Instagram',
  'YouTube',
  'Pinterest',
  'Behance',
  'Dribbble',
  'SoundCloud',
  'GarageBand',
  'FL Studio Mobile',
  'Logic Pro for iPad',
] as const;

export type CompetingPlatform = (typeof COMPETING_PLATFORMS)[number];

export const SUPERCILIOUS_CAPABILITIES = [
  'creative-suite',
  'generative-image',
  'collaborative-design',
  'agentic-app-build',
  'video-generation',
  'game-runtime',
  'spatial-3d',
  'code-runtime',
  'mesh-generation',
  'music-generation',
  'audio-workstation',
  'mobile-video-editing',
  'social-publishing',
  'portfolio-network',
  'recursive-surfaces',
  'dual-runtime-orchestration',
  'intent-bus-automation',
  'capability-authorized-sync',
] as const;

export type SuperciliousCapability = (typeof SUPERCILIOUS_CAPABILITIES)[number];

export type CapabilityVector = Record<SuperciliousCapability, boolean>;

export interface PlatformCapabilityProfile {
  platform: CompetingPlatform;
  capabilities: CapabilityVector;
}

export interface DreamEnginSuperiorityState {
  profiles: Record<CompetingPlatform, PlatformCapabilityProfile>;
  dreamEngin: CapabilityVector;
  absorbedPlatforms: CompetingPlatform[];
  missingByPlatform: Partial<Record<CompetingPlatform, SuperciliousCapability[]>>;
  proofCount: number;
}

export const dreamEnginSuperciliousManifest: EngineManifest = {
  id: 'i-engine.supercilious-platform-runtime',
  name: 'ι-Engine Supercilious Platform Runtime',
  version: '1.0.0',
  runtimeHooks: ['install', 'activate', 'suspend', 'resume', 'destroy'],
  acceptedIntentTypes: [
    'platform.superiority.audit',
    'platform.capability.absorb',
    'platform.superset.prove',
    'runtime.snapshot.create',
  ],
  schemaVersion: 1,
  minimumCoreVersion: '1.0.0',
};

const platformCapabilitySeeds: Record<CompetingPlatform, readonly SuperciliousCapability[]> = {
  'Adobe Creative Cloud': ['creative-suite', 'generative-image', 'mobile-video-editing', 'portfolio-network'],
  'Adobe Firefly': ['generative-image', 'video-generation'],
  Canva: ['creative-suite', 'collaborative-design', 'social-publishing'],
  Figma: ['collaborative-design', 'agentic-app-build'],
  'Figma Make': ['agentic-app-build', 'collaborative-design'],
  Runway: ['video-generation', 'generative-image'],
  'Google Flow': ['video-generation', 'generative-image'],
  'Roblox Studio': ['game-runtime', 'spatial-3d', 'social-publishing'],
  'Unreal Engine': ['game-runtime', 'spatial-3d'],
  UEFN: ['game-runtime', 'spatial-3d', 'social-publishing'],
  Unity: ['game-runtime', 'spatial-3d'],
  Godot: ['game-runtime'],
  Replit: ['code-runtime', 'agentic-app-build'],
  Cursor: ['code-runtime', 'agentic-app-build'],
  Windsurf: ['code-runtime', 'agentic-app-build'],
  'GitHub Copilot': ['code-runtime', 'agentic-app-build'],
  Bolt: ['agentic-app-build', 'code-runtime'],
  Lovable: ['agentic-app-build', 'code-runtime'],
  v0: ['agentic-app-build', 'collaborative-design'],
  Blender: ['spatial-3d', 'mesh-generation'],
  Spline: ['spatial-3d', 'collaborative-design'],
  Meshy: ['mesh-generation', 'spatial-3d'],
  'Tripo AI': ['mesh-generation', 'spatial-3d'],
  'Luma AI': ['spatial-3d', 'video-generation'],
  'Leonardo.ai': ['generative-image'],
  Krea: ['generative-image', 'video-generation'],
  Suno: ['music-generation'],
  Udio: ['music-generation'],
  BandLab: ['audio-workstation', 'social-publishing'],
  CapCut: ['mobile-video-editing', 'social-publishing'],
  TikTok: ['social-publishing', 'mobile-video-editing'],
  Instagram: ['social-publishing', 'portfolio-network'],
  YouTube: ['social-publishing', 'portfolio-network', 'mobile-video-editing'],
  Pinterest: ['social-publishing', 'portfolio-network'],
  Behance: ['portfolio-network', 'creative-suite'],
  Dribbble: ['portfolio-network', 'collaborative-design'],
  SoundCloud: ['social-publishing', 'audio-workstation'],
  GarageBand: ['audio-workstation'],
  'FL Studio Mobile': ['audio-workstation'],
  'Logic Pro for iPad': ['audio-workstation'],
};

export function createCapabilityVector(enabled: readonly SuperciliousCapability[] = SUPERCILIOUS_CAPABILITIES): CapabilityVector {
  return Object.fromEntries(SUPERCILIOUS_CAPABILITIES.map((capability) => [capability, enabled.includes(capability)])) as CapabilityVector;
}

export function createSuperciliousPlatformState(): DreamEnginSuperiorityState {
  const profiles = Object.fromEntries(COMPETING_PLATFORMS.map((platform) => [
    platform,
    createRuntimeObject({
      id: `platform:${platform.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      type: 'platform.capability.profile',
      ownerId: 'dreamengin-system',
      runtimeId: 'homedream',
      visibility: 'global',
      data: {
        platform,
        capabilities: createCapabilityVector(platformCapabilitySeeds[platform]),
      } satisfies JsonObject,
    }).data as unknown as PlatformCapabilityProfile,
  ])) as Record<CompetingPlatform, PlatformCapabilityProfile>;

  return {
    profiles,
    dreamEngin: createCapabilityVector(),
    absorbedPlatforms: [],
    missingByPlatform: {},
    proofCount: 0,
  };
}

export function assertDreamEnginSuperset(state: DreamEnginSuperiorityState): DreamEnginSuperiorityState {
  const missingByPlatform = Object.fromEntries(COMPETING_PLATFORMS.map((platform) => {
    const missing = SUPERCILIOUS_CAPABILITIES.filter((capability) => state.profiles[platform].capabilities[capability] && !state.dreamEngin[capability]);
    return [platform, missing];
  }).filter(([, missing]) => (missing as SuperciliousCapability[]).length > 0)) as Partial<Record<CompetingPlatform, SuperciliousCapability[]>>;

  return {
    ...state,
    absorbedPlatforms: Object.keys(missingByPlatform).length === 0 ? [...COMPETING_PLATFORMS] : state.absorbedPlatforms,
    missingByPlatform,
    proofCount: state.proofCount + 1,
  };
}

function mergeCapabilities(state: DreamEnginSuperiorityState, payload: JsonObject): DreamEnginSuperiorityState {
  const platform = payload.platform as CompetingPlatform | undefined;
  if (!platform || !COMPETING_PLATFORMS.includes(platform)) return state;
  const absorbed = platformCapabilitySeeds[platform];
  return {
    ...state,
    dreamEngin: createCapabilityVector([...SUPERCILIOUS_CAPABILITIES.filter((capability) => state.dreamEngin[capability]), ...absorbed]),
    absorbedPlatforms: [...new Set([...state.absorbedPlatforms, platform])],
  };
}

export const superciliousPlatformRuleSet: RuntimeRuleSet<DreamEnginSuperiorityState> = {
  id: 'ruleset.supercilious-platform.superset',
  version: '1.0.0',
  constraints: [
    'one engine owns platform supremacy state',
    'platform capability deltas enter through intent bus',
    'DreamDMBar is the surface exchange seam',
    'HomeDream and DreamSpace remain independently provable',
  ],
  parameters: {
    platformCount: COMPETING_PLATFORMS.length,
    capabilityCount: SUPERCILIOUS_CAPABILITIES.length,
    contexts: ['HomeDream', 'DreamSpace'],
  },
  transform: (state, intent: IntentPacket<JsonValue>) => {
    if (intent.type === 'platform.capability.absorb') {
      return mergeCapabilities(state, intent.data.payload as JsonObject);
    }
    if (intent.type === 'platform.superiority.audit' || intent.type === 'platform.superset.prove') {
      return assertDreamEnginSuperset(state);
    }
    return state;
  },
};
