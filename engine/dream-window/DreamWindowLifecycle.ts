import {
    DREAM_WINDOW_STATES,
    type ConnectionVerb,
    type DreamWindowState,
} from '@/engine/identity/canonical-names';





export interface DreamWindowSize {
  width: number;
  height: number;
}

export interface DreamWindowPosition {
  x: number;
  y: number;
}

export interface DreamWindowConfig {
  
  label: string;
  
  [key: string]: unknown;
}

export interface DestinationRule {
  
  targetSurface: string;
  
  verb: ConnectionVerb;
}


export interface DreamWindowInstance {
  
  id: string;
  
  type: string;
  
  owner: string;
  
  config: DreamWindowConfig;
  
  size: DreamWindowSize;
  
  position: DreamWindowPosition;
  
  visibility: 'private' | 'shared' | 'public';
  
  sourceBindings: string[];
  
  destinationRules: DestinationRule[];
  
  activeState: DreamWindowState;
}



function assertState(
  instance: DreamWindowInstance,
  expected: DreamWindowState,
  fnName: string,
): void {
  if (instance.activeState !== expected) {
    throw new Error(
      `${fnName}: invalid transition from '${instance.activeState}'. ` +
        `Expected '${expected}'. ` +
        `Dream Window '${instance.id}' must be in ${expected} state first.`,
    );
  }
}




export function bindDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.UNBOUND, 'bindDreamWindow');

  if (instance.sourceBindings.length === 0) {
    throw new Error(
      `bindDreamWindow: cannot bind Dream Window '${instance.id}' — ` +
        `sourceBindings must be non-empty. Attach at least one source provider ` +
        `before calling bindDreamWindow.`,
    );
  }

  return { ...instance, activeState: DREAM_WINDOW_STATES.BOUND };
}


export function mountDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.BOUND, 'mountDreamWindow');
  return { ...instance, activeState: DREAM_WINDOW_STATES.MOUNTED };
}


export function collapseDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.MOUNTED, 'collapseDreamWindow');
  return { ...instance, activeState: DREAM_WINDOW_STATES.COLLAPSED };
}


export function activateDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.COLLAPSED, 'activateDreamWindow');
  return { ...instance, activeState: DREAM_WINDOW_STATES.MOUNTED };
}


export function unmountDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.MOUNTED, 'unmountDreamWindow');
  return { ...instance, activeState: DREAM_WINDOW_STATES.BOUND };
}


export function unbindDreamWindow(instance: DreamWindowInstance): DreamWindowInstance {
  assertState(instance, DREAM_WINDOW_STATES.BOUND, 'unbindDreamWindow');
  return { ...instance, activeState: DREAM_WINDOW_STATES.UNBOUND };
}




export function createDreamWindowInstance(
  params: Omit<DreamWindowInstance, 'activeState' | 'visibility'> & {
    visibility?: DreamWindowInstance['visibility'];
  },
): DreamWindowInstance {
  return {
    ...params,
    visibility: params.visibility ?? 'private',
    activeState: DREAM_WINDOW_STATES.UNBOUND,
  };
}




export const DREAM_WINDOW_REQUIRED_LAYERS = [
  'DreamShell',
  'DreamConnectorLayer',
  'DreamFeatureLayer',
  'DreamOutputLayer',
] as const;

export type DreamWindowLayer = (typeof DREAM_WINDOW_REQUIRED_LAYERS)[number];


export interface DreamWindowLayerValidationResult {
  valid: boolean;
  missingLayers: DreamWindowLayer[];
  
  error: string | null;
}


export function validateDreamWindowLayers(
  instance: DreamWindowInstance,
): DreamWindowLayerValidationResult {
  
  const configLayers = Array.isArray((instance.config as any).layers)
    ? ((instance.config as any).layers as string[])
    : [];

  const missingLayers = DREAM_WINDOW_REQUIRED_LAYERS.filter(
    (layer) => !configLayers.includes(layer),
  );

  if (missingLayers.length === 0) {
    return { valid: true, missingLayers: [], error: null };
  }

  return {
    valid: false,
    missingLayers,
    error:
      `Dream Window '${instance.id}' is missing required layers: ` +
      missingLayers.join(', ') +
      `. Every Dream Window must pass through all four layers: ` +
      DREAM_WINDOW_REQUIRED_LAYERS.join(' → ') +
      `.`,
  };
}




export { DREAM_WINDOW_STATES };
export type { DreamWindowState };
