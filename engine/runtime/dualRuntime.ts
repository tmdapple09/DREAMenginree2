import {
    RUNTIME_REGIONS,
    SURFACE_NAMES,
} from '@/engine/identity/canonical-names';
import type { SystemPanelId } from '@/components/panels/panelTypes';













export const DEFAULT_DUAL_RUNTIME: DualRuntimeState = {
  surfaceSpaceWorld: SURFACE_NAMES.HOME_DREAM_SURFACE,
  dreamSpaceWorld:   RUNTIME_REGIONS.DREAM_SPACE,
  dominantRegion:    RUNTIME_REGIONS.SURFACE_SPACE,
};




export const TORUS_DOMAINS = ['home', 'dreamr', 'games', 'music', 'code', 'brand'] as const;

export const TORUS_WIDTH  = TORUS_DOMAINS.length; 

export const TORUS_HEIGHT = 2;                     


export const TORUS_FOCUS_MAP: Record<TorusDomain, [surface: string, engin: string]> = {
  home:   ['home',             'home'],
  dreamr: ['dreamr.feed',      'dreamr.channel'],
  games:  ['games.library',    'games.play'],
  music:  ['music.surface',    'music.engin'],
  code:   ['code.surface',     'code.engin'],
  brand:  ['brand.surface',    'brand.engin'],
};










export type RuntimeWorld =
  | typeof SURFACE_NAMES.HOME_DREAM_SURFACE      
  | typeof SURFACE_NAMES.VIEW_PROFILE_SURFACE    
  | typeof RUNTIME_REGIONS.DREAM_SPACE           
  | { type: 'dream'; id: string }
  | { type: 'engin'; name: string }
  | { type: 'panel'; name: SystemPanelId }       
  | { type: 'custom'; path: string };



export interface DualRuntimeState {
  
  surfaceSpaceWorld: RuntimeWorld;
  
  dreamSpaceWorld: RuntimeWorld;
  
  dominantRegion: 'Surface Space' | 'DreamSpace';
}

export type TorusDomain = (typeof TORUS_DOMAINS)[number];






export function setRuntimeWorld(
  state: DualRuntimeState,
  runtime: 'top' | 'bottom',
  world: RuntimeWorld,
): DualRuntimeState {
  return {
    ...state,
    [runtime === 'top' ? 'surfaceSpaceWorld' : 'dreamSpaceWorld']: world,
  };
}


export function swapDominantRuntime(state: DualRuntimeState): DualRuntimeState {
  return {
    ...state,
    dominantRegion:
      state.dominantRegion === RUNTIME_REGIONS.SURFACE_SPACE
        ? RUNTIME_REGIONS.DREAM_SPACE
        : RUNTIME_REGIONS.SURFACE_SPACE,
  };
}


export function makeHomeActiveTop(state: DualRuntimeState): DualRuntimeState {
  return {
    ...state,
    surfaceSpaceWorld: SURFACE_NAMES.HOME_DREAM_SURFACE,
    dominantRegion:    RUNTIME_REGIONS.SURFACE_SPACE,
  };
}


export function makeHomeDreamSpaceActive(state: DualRuntimeState): DualRuntimeState {
  return {
    ...state,
    dreamSpaceWorld: SURFACE_NAMES.HOME_DREAM_SURFACE,
    dominantRegion:  RUNTIME_REGIONS.DREAM_SPACE,
  };
}


export function makeDreamSpaceActiveSurface(state: DualRuntimeState): DualRuntimeState {
  return {
    ...state,
    surfaceSpaceWorld: RUNTIME_REGIONS.DREAM_SPACE,
    dominantRegion:    RUNTIME_REGIONS.SURFACE_SPACE,
  };
}


export function isHomeActiveTop(state: DualRuntimeState): boolean {
  return (
    state.surfaceSpaceWorld === SURFACE_NAMES.HOME_DREAM_SURFACE &&
    state.dominantRegion === RUNTIME_REGIONS.SURFACE_SPACE
  );
}


export function worldsEqual(a: RuntimeWorld, b: RuntimeWorld): boolean {
  if (typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    if (a.type !== b.type) return false;
    if (a.type === 'dream' && b.type === 'dream') return a.id === b.id;
    if (a.type === 'engin' && b.type === 'engin') return a.name === b.name;
    if (a.type === 'custom' && b.type === 'custom') return a.path === b.path;
  }
  return false;
}


export function torusFocusKey(x: number, y: number): string {
  
  
  
  const domain = TORUS_DOMAINS[((x % TORUS_WIDTH) + TORUS_WIDTH) % TORUS_WIDTH] ?? 'home';
  const pair = TORUS_FOCUS_MAP[domain as keyof typeof TORUS_FOCUS_MAP] ?? TORUS_FOCUS_MAP.home;
  return y === 0 ? pair[0] : pair[1];
}


export function moveTorus(
  x: number,
  y: number,
  dx: number,
  dy: number,
): { x: number; y: number } {
  const nx = ((x + dx) % TORUS_WIDTH  + TORUS_WIDTH)  % TORUS_WIDTH;
  const ny = ((y + dy) % TORUS_HEIGHT + TORUS_HEIGHT) % TORUS_HEIGHT;
  return { x: nx, y: ny };
}









export { RUNTIME_REGIONS, SURFACE_NAMES };
