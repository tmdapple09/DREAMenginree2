import {
    RUNTIME_REGIONS,
    SURFACE_NAMES,
    type DreamWindowState,
    type RuntimeSeamName,
} from '@/engine/identity/canonical-names';














export const DEFAULT_RUNTIME_REGION_STATE: RuntimeRegionState = {
  surfaceSpace: {
    activeSurface: SURFACE_NAMES.HOME_DREAM_SURFACE,
    region: RUNTIME_REGIONS.SURFACE_SPACE,
    isDominant: true,
  },
  dreamSpace: {
    mountedWindows: [],
    region: RUNTIME_REGIONS.DREAM_SPACE,
    isDominant: false,
  },
  seam: {
    position: 0,
    label: 'DreamDM Bar',
  },
};










export interface DreamWindowRef {
  
  id: string;
  
  activeState: DreamWindowState;
}


export interface SurfaceSpaceState {
  
  activeSurface: string;
  
  region: 'Surface Space';
  
  isDominant: boolean;
}


export interface DreamSpaceState {
  
  mountedWindows: DreamWindowRef[];
  
  region: 'DreamSpace';
  
  isDominant: boolean;
}


export interface SeamState {
  
  position: number;
  
  label: RuntimeSeamName;
}


export interface RuntimeRegionState {
  surfaceSpace: SurfaceSpaceState;
  dreamSpace: DreamSpaceState;
  seam: SeamState;
}






export function activateSurface(
  state: RuntimeRegionState,
  surfaceName: string,
): RuntimeRegionState {
  return {
    ...state,
    surfaceSpace: {
      ...state.surfaceSpace,
      activeSurface: surfaceName,
    },
  };
}


export function mountWindowInDreamSpace(
  state: RuntimeRegionState,
  ref: DreamWindowRef,
): RuntimeRegionState {
  const existing = state.dreamSpace.mountedWindows.filter((w) => w.id !== ref.id);
  return {
    ...state,
    dreamSpace: {
      ...state.dreamSpace,
      mountedWindows: [...existing, ref],
    },
  };
}


export function dismountWindowFromDreamSpace(
  state: RuntimeRegionState,
  id: string,
): RuntimeRegionState {
  return {
    ...state,
    dreamSpace: {
      ...state.dreamSpace,
      mountedWindows: state.dreamSpace.mountedWindows.filter((w) => w.id !== id),
    },
  };
}


export function setSeamPosition(
  state: RuntimeRegionState,
  position: number,
): RuntimeRegionState {
  const clamped = Math.min(1, Math.max(0, position));
  const dreamIsDominant = clamped >= 0.5;

  return {
    ...state,
    seam: { ...state.seam, position: clamped },
    surfaceSpace: { ...state.surfaceSpace, isDominant: !dreamIsDominant },
    dreamSpace: { ...state.dreamSpace, isDominant: dreamIsDominant },
  };
}


export function getSurfaceSpaceSurface(state: RuntimeRegionState): string {
  return state.surfaceSpace.activeSurface;
}


export function isDreamSpaceDominant(state: RuntimeRegionState): boolean {
  return state.dreamSpace.isDominant;
}









export { RUNTIME_REGIONS };
