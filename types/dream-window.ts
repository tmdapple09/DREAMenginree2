import type {
    DestinationRule,
    DreamWindowConfig,
    DreamWindowPosition,
    DreamWindowSize,
    DreamWindowState,
} from '@/engine/dream-window/DreamWindowLifecycle';






export interface DreamWindowRecord {
  
  id: string;
  
  type: string;
  
  owner_id: string;
  
  config: DreamWindowConfig;
  
  size: DreamWindowSize;
  
  position: DreamWindowPosition;
  
  visibility: 'private' | 'shared' | 'public';
  
  source_bindings: string[];
  
  destination_rules: DestinationRule[];
  
  active_state: DreamWindowState;
  
  created_at: string;
  
  updated_at: string;
}


export interface CreateDreamWindowBody {
  id?: string;
  type: string;
  owner_id: string;
  config: DreamWindowConfig;
  size: DreamWindowSize;
  position: DreamWindowPosition;
  visibility?: 'private' | 'shared' | 'public';
  sourceBindings: string[];
  destinationRules: DestinationRule[];
  activeState?: DreamWindowState;
}


export interface PatchDreamWindowBody {
  active_state?: DreamWindowState;
  position?: DreamWindowPosition;
  size?: DreamWindowSize;
  visibility?: 'private' | 'shared' | 'public';
  config?: DreamWindowConfig;
  source_bindings?: string[];
  destination_rules?: DestinationRule[];
}

export type {
    DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize
} from '@/engine/dream-window/DreamWindowLifecycle';
export { DREAM_WINDOW_STATES } from '@/engine/dream-window/DreamWindowLifecycle';
export type { DreamWindowState } from '@/engine/dream-window/DreamWindowLifecycle';
