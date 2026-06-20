import { getEnginByName } from '@/engins/forgeengin/forge/forgeRegistry';
import type { RuntimeWorld } from './dualRuntime';
import type { RuntimeRegion } from '@/engine/identity/canonical-names';
import type { RuntimeRegionKey } from '@/types/dreamArtifact';

export type ApperceptiveSurface = 'HomeDream' | 'DreamSpace' | 'Profile' | 'Dream' | 'Engin' | 'Panel' | 'Custom';

export interface ApperceptiveContext {
  readonly userId: string | null;
  readonly runtimeId: 'homedream' | 'dreamspace';
  readonly runtimeRegion: RuntimeRegionKey;
  readonly dominantRegion?: RuntimeRegion;
  readonly surface: ApperceptiveSurface;
  readonly activeEngin: string | null;
  readonly selectedObject: string | null;
  readonly activeConversationId: string | null;
  readonly runtimeRegionAvailable: boolean;
  readonly currentIntent: string;
  readonly capabilities: readonly string[];
  readonly capabilityLabels: readonly string[];
  readonly nextActions: readonly string[];
  readonly render: {
    readonly serviceId: 'render';
    readonly userFacing: false;
    readonly intentNamespace: 'render.*';
  };
}

function unique(values: readonly string[]): readonly string[] {
  return Array.from(new Set(values));
}

function nextActionsFor(surface: ApperceptiveSurface, selectedObject: string | null): readonly string[] {
  if (!selectedObject && surface !== 'Engin') return ['inspect', 'message'];
  if (surface === 'HomeDream') return ['inspect', 'message'];
  if (surface === 'DreamSpace') return ['place', 'inspect', 'message'];
  if (surface === 'Profile') return ['inspect', 'message', 'share'];
  if (surface === 'Dream') return ['resume', 'edit', 'share', 'message'];
  if (surface === 'Engin') return ['resume', 'save', 'export', 'handoff', 'message'];
  if (surface === 'Panel') return ['inspect', 'configure', 'message'];
  return ['inspect', 'message'];
}

export function buildApperceptiveContext(input: {
  world: RuntimeWorld;
  runtimeId: 'homedream' | 'dreamspace';
  runtimeRegion: RuntimeRegionKey;
  dominantRegion?: RuntimeRegion;
  userId?: string | null;
  iframeUrl?: string | null;
  isActive: boolean;
  canOpenInRegion: boolean;
  activeConversationId?: string | null;
}): ApperceptiveContext {
  const { world } = input;
  let surface: ApperceptiveSurface = 'Custom';
  let activeEngin: string | null = null;
  let selectedObject: string | null = null;
  let currentIntent = 'runtime.surface.view';

  if (world === 'HomeDream Surface') surface = 'HomeDream';
  else if (world === 'DreamSpace') surface = 'DreamSpace';
  else if (world === 'View Profile Surface') surface = 'Profile';
  else if (typeof world === 'object' && world.type === 'engin') {
    surface = 'Engin';
    activeEngin = world.name;
    currentIntent = `engin.open.${world.name}`;
  } else if (typeof world === 'object' && world.type === 'dream') {
    surface = 'Dream';
    selectedObject = world.id;
    currentIntent = `dream.open.${world.id}`;
  } else if (typeof world === 'object' && world.type === 'panel') {
    surface = 'Panel';
    selectedObject = world.name;
    currentIntent = `panel.open.${world.name}`;
  } else if (typeof world === 'object' && world.type === 'custom') {
    selectedObject = world.path;
    currentIntent = `route.open.${world.path}`;
  }

  if (input.iframeUrl) currentIntent = `route.open.${input.iframeUrl}`;

  const enginRegistration = activeEngin ? getEnginByName(activeEngin) : null;
  const capabilities = unique([
    'intent.route',
    'state.snapshot',
    'capability.resolve',
    ...(surface === 'HomeDream' || surface === 'DreamSpace'
      ? ['runtime.region.receive', 'dreamdmbar.intent.carry']
      : []),
  ]);
  const capabilityLabels = unique([
    ...(enginRegistration?.capabilities ?? []),
  ]);

  const nextActions = unique([
    ...nextActionsFor(surface, selectedObject),
    ...(activeEngin === 'GameEngin' ? ['handoff.toContentEngin'] : []),
    ...(activeEngin === 'ContentEngin' ? ['content.exportToGame'] : []),
  ]);

  return {
    userId: input.userId ?? null,
    runtimeId: input.runtimeId,
    runtimeRegion: input.runtimeRegion,
    dominantRegion: input.dominantRegion,
    surface,
    activeEngin,
    selectedObject,
    activeConversationId: input.activeConversationId ?? null,
    runtimeRegionAvailable: input.isActive && input.canOpenInRegion,
    currentIntent,
    capabilities,
    capabilityLabels,
    nextActions,
    render: {
      serviceId: 'render',
      userFacing: false,
      intentNamespace: 'render.*',
    },
  };
}
