

export type {
    DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize
} from './DreamWindowLifecycle';
export {
    DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, activateDreamWindow, bindDreamWindow, collapseDreamWindow, createDreamWindowInstance, mountDreamWindow, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers
} from './DreamWindowLifecycle';
export type {
    DreamWindowLayer,
    DreamWindowLayerValidationResult, DreamWindowState
} from './DreamWindowLifecycle';
export type { ConnectionAction, ConnectionResult } from './connectionVerbs';
export {
    CONNECTION_VERBS, createActivateAction,
    createAttachAction, createBindAction, createConnectAcrossAction, createMountAction, createOpenIntoAction, createRouteIntoAction, dispatch, isValidConnectionVerb
} from './connectionVerbs';
export type { ConnectionVerb } from './connectionVerbs';
export type {
    DreamSpaceState, DreamWindowRef, RuntimeRegionState, SeamState, SurfaceSpaceState
} from './runtimeRegion';
export {
    DEFAULT_RUNTIME_REGION_STATE, RUNTIME_REGIONS, activateSurface, dismountWindowFromDreamSpace, getSurfaceSpaceSurface,
    isDreamSpaceDominant, mountWindowInDreamSpace, setSeamPosition
} from './runtimeRegion';
export type { EnginConnectionPath } from './enginConnectionNetwork';
export {
    ALL_CONNECTION_PATHS,
    getPathsForDomain,
    getPathsForEngin,
    hasConnectionPath
} from './enginConnectionNetwork';
