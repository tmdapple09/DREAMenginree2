'use client';

import { DEFAULT_SPLIT_RATIO } from '@/dreamdmbar/runtime/barInteractions';
import type { SystemPanelId } from '@/components/panels/panelTypes';
import {
    moveTorus as computeMoveTorus,
    torusFocusKey,
} from '@/engine/runtime/dualRuntime';
import { createClient } from '@/supabase/client/client';
import { getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from 'react';



type ProfileLike = {
  id?: string;
  handle?: string | null;
  display_name?: string | null;
  avatar_url?: string | null;
};

export interface HomeData {
  userId: string;
  profile: ProfileLike | null;
  initialPosts: unknown[];
  isAdmin: boolean;
}


export type BarIntentMode = 'default' | 'search' | 'message' | 'dreams' | 'comment' | 'module-actions';


export interface ModuleBarAction {
  id: string;
  label: string;
  icon?: string;
  onAction: () => void;
  active?: boolean;
  disabled?: boolean;
}

export interface BarIntent {
  mode: BarIntentMode;
  
  targetPostId?: string;
  
  targetLabel?: string;
  
  moduleId?: string;
  
  moduleActions?: ModuleBarAction[];
}

export const DEFAULT_BAR_INTENT: BarIntent = { mode: 'default' };


export interface WorldFocusState {
  focusKey: string;
  worldSelection: unknown | null;
  torusX: number;
  torusY: number;
  dominantViewport: 'top' | 'bottom';
}

export const DEFAULT_WORLD_FOCUS: WorldFocusState = {
  focusKey:          'home',
  worldSelection:    null,
  torusX:            0,
  torusY:            0,
  dominantViewport:  'top',
};

type ReturnHomeFn     = () => void;
type OpenInSurfaceFn  = (id: SystemPanelId) => void;
type OpenInDominantFn = (path: string) => void;


export interface RuntimeCallbacks {
  
  returnHome:      ReturnHomeFn;
  
  openInSurface?:  OpenInSurfaceFn;
  
  openInDominant?: OpenInDominantFn;
  
  openHomeDreamSpace?: () => void;
  
  returnDreamSpace?: () => void;
}

interface DreamSystemContextValue {
  
  bothMenusOpen: boolean;
  openBothMenus:  () => void;
  closeBothMenus: () => void;

  
  drEamsOpen:  boolean;
  openDrEams:  () => void;
  closeDrEams: () => void;

  
  runtimeCallbacks: RuntimeCallbacks | null;
  registerRuntimeCallbacks:   (cbs: RuntimeCallbacks) => void;
  unregisterRuntimeCallbacks: () => void;

  
  openInSurface: (id: SystemPanelId) => void;
  
  openInDominant: OpenInDominantFn;

  
  barIntent: BarIntent;
  setBarIntent:   (intent: BarIntent) => void;
  clearBarIntent: () => void;

  
  splitRatio: number;
  setSplitRatio: Dispatch<SetStateAction<number>>;

  
  isBarMinimized: boolean;
  setIsBarMinimized: Dispatch<SetStateAction<boolean>>;

  
  homeData: HomeData | null;
  setHomeData: Dispatch<SetStateAction<HomeData | null>>;

  
  worldFocus: WorldFocusState;

  
  setFocus: (key: string, payload?: unknown, viewport?: 'top' | 'bottom') => void;

  
  moveTorus: (dx: number, dy: number) => void;

  
  setDominantViewport: (viewport: 'top' | 'bottom') => void;
}


interface DreamSystemOfflineSnapshot {
  bothMenusOpen: boolean;
  drEamsOpen: boolean;
  barIntent: BarIntent;
  splitRatio: number;
  isBarMinimized: boolean;
  homeData: HomeData | null;
  worldFocus: WorldFocusState;
  savedAt: string;
}

const DREAM_SYSTEM_OFFLINE_ID = 'shell';

function sanitizeBarIntentForOffline(intent: BarIntent): BarIntent {
  if (intent.mode !== 'module-actions') return intent;
  return {
    mode: 'module-actions',
    moduleId: intent.moduleId,
    targetLabel: intent.targetLabel,
    moduleActions: intent.moduleActions?.map((action) => ({
      id: action.id,
      label: action.label,
      icon: action.icon,
      active: action.active,
      disabled: action.disabled,
      onAction: () => {},
    })),
  };
}

function normalizeOfflineSnapshot(value: unknown): DreamSystemOfflineSnapshot | null {
  if (!value || typeof value !== 'object') return null;
  const snapshot = value as Partial<DreamSystemOfflineSnapshot>;
  if (typeof snapshot.splitRatio !== 'number') return null;
  return {
    bothMenusOpen: Boolean(snapshot.bothMenusOpen),
    drEamsOpen: Boolean(snapshot.drEamsOpen),
    barIntent: snapshot.barIntent && typeof snapshot.barIntent === 'object' ? snapshot.barIntent : DEFAULT_BAR_INTENT,
    splitRatio: Math.max(0, Math.min(1, snapshot.splitRatio)),
    isBarMinimized: Boolean(snapshot.isBarMinimized),
    homeData: snapshot.homeData ?? null,
    worldFocus: snapshot.worldFocus && typeof snapshot.worldFocus === 'object' ? {
      ...DEFAULT_WORLD_FOCUS,
      ...snapshot.worldFocus,
    } : DEFAULT_WORLD_FOCUS,
    savedAt: typeof snapshot.savedAt === 'string' ? snapshot.savedAt : new Date(0).toISOString(),
  };
}

const DreamSystemContext = createContext<DreamSystemContextValue>({
  bothMenusOpen:              false,
  openBothMenus:              () => {},
  closeBothMenus:             () => {},
  drEamsOpen:                 false,
  openDrEams:                 () => {},
  closeDrEams:                () => {},
  runtimeCallbacks:           null,
  registerRuntimeCallbacks:   () => {},
  unregisterRuntimeCallbacks: () => {},
  openInSurface:              () => {},
  openInDominant:             () => {},
  barIntent:                  DEFAULT_BAR_INTENT,
  setBarIntent:               () => {},
  clearBarIntent:             () => {},
  splitRatio:                 DEFAULT_SPLIT_RATIO,
  setSplitRatio:              () => {},
  isBarMinimized:             false,
  setIsBarMinimized:          () => {},
  homeData:                   null,
  setHomeData:                () => {},
  worldFocus:                 DEFAULT_WORLD_FOCUS,
  setFocus:                   () => {},
  moveTorus:                  () => {},
  setDominantViewport:        () => {},
});

export function DreamSystemProvider({ children }: {children: ReactNode}) {
  const [bothMenusOpen, setBothMenusOpen]       = useState(false);
  const [drEamsOpen,    setDrEamsOpen]           = useState(false);
  const [runtimeCallbacks, setRuntimeCallbacks] = useState<RuntimeCallbacks | null>(null);
  const [barIntent,     setBarIntentState]       = useState<BarIntent>(DEFAULT_BAR_INTENT);
  
  
  
  const [splitRatio,    setSplitRatioState]      = useState(0.9);
  const [isBarMinimized, setIsBarMinimized]      = useState(false);
  const [homeData,      setHomeData]             = useState<HomeData | null>(null);

  const [worldFocus, setWorldFocusState] = useState<WorldFocusState>(DEFAULT_WORLD_FOCUS);
  const splitRatioRafRef = useRef<number | null>(null);
  const pendingSplitRatioRef = useRef<SetStateAction<number> | null>(null);

  const setSplitRatio = useCallback((next: SetStateAction<number>) => {
    const pending = pendingSplitRatioRef.current;
    if (typeof next === 'function' && typeof pending === 'function') {
      pendingSplitRatioRef.current = (current: number) => next(pending(current));
    } else if (typeof next === 'function' && typeof pending === 'number') {
      pendingSplitRatioRef.current = next(pending);
    } else {
      pendingSplitRatioRef.current = next;
    }

    if (splitRatioRafRef.current !== null) return;

    splitRatioRafRef.current = window.requestAnimationFrame(() => {
      splitRatioRafRef.current = null;
      const queued = pendingSplitRatioRef.current;
      pendingSplitRatioRef.current = null;
      if (queued !== null) setSplitRatioState(queued);
    });
  }, []);

  useEffect(() => () => {
    if (splitRatioRafRef.current !== null) {
      window.cancelAnimationFrame(splitRatioRafRef.current);
      splitRatioRafRef.current = null;
    }
  }, []);

  const offlineRestoredRef = useRef(false);

  
  
  
  useEffect(() => {
    const boot = async () => {
      try {
        const supabase = createClient();
        const user = await safeGetUser(supabase);
        if (!user) return;
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, handle, display_name, avatar_url')
          .eq('id', user.id)
          .single();
        
        setHomeData((prev) => prev ?? {
          userId: user.id,
          profile: profile ?? null,
          initialPosts: [],
          isAdmin: false,
        });
      } catch {  }
    };
    void boot();
  }, []);

  
  const callbacksRef = useRef<RuntimeCallbacks | null>(null);

  const openBothMenus  = useCallback(() => setBothMenusOpen(true),  []);
  const closeBothMenus = useCallback(() => setBothMenusOpen(false), []);
  const openDrEams     = useCallback(() => setDrEamsOpen(true),     []);
  const closeDrEams    = useCallback(() => setDrEamsOpen(false),    []);

  const registerRuntimeCallbacks = useCallback((cbs: RuntimeCallbacks) => {
    callbacksRef.current = cbs;
    setRuntimeCallbacks(cbs);
  }, []);

  const unregisterRuntimeCallbacks = useCallback(() => {
    callbacksRef.current = null;
    setRuntimeCallbacks(null);
  }, []);

  const openInSurface = useCallback((id: SystemPanelId) => {
    callbacksRef.current?.openInSurface?.(id);
  }, []);

  const openInDominant = useCallback((path: string) => {
    if (callbacksRef.current?.openInDominant) {
      callbacksRef.current.openInDominant(path);
      return;
    }
    window.location.assign(path);
  }, []);

  const setBarIntent   = useCallback((intent: BarIntent) => setBarIntentState(intent), []);
  const clearBarIntent = useCallback(() => setBarIntentState(DEFAULT_BAR_INTENT), []);

  const setFocus = useCallback((
    key: string,
    payload?: unknown,
    viewport?: 'top' | 'bottom',
  ) => {
    setWorldFocusState((prev) => ({
      ...prev,
      focusKey:         key,
      worldSelection:   payload ?? null,
      dominantViewport: viewport ?? prev.dominantViewport,
    }));
  }, []);

  const moveTorus = useCallback((dx: number, dy: number) => {
    setWorldFocusState((prev) => {
      const { x, y } = computeMoveTorus(prev.torusX, prev.torusY, dx, dy);
      return {
        ...prev,
        torusX:        x,
        torusY:        y,
        focusKey:      torusFocusKey(x, y),
        worldSelection: null,
      };
    });
  }, []);

  const setDominantViewport = useCallback((viewport: 'top' | 'bottom') => {
    setWorldFocusState((prev) => ({ ...prev, dominantViewport: viewport }));
  }, []);

  const contextValue = useMemo<DreamSystemContextValue>(() => ({
    bothMenusOpen,
    openBothMenus,
    closeBothMenus,
    drEamsOpen,
    openDrEams,
    closeDrEams,
    runtimeCallbacks,
    registerRuntimeCallbacks,
    unregisterRuntimeCallbacks,
    openInSurface,
    openInDominant,
    barIntent,
    setBarIntent,
    clearBarIntent,
    splitRatio,
    setSplitRatio,
    isBarMinimized,
    setIsBarMinimized,
    homeData,
    setHomeData,
    worldFocus,
    setFocus,
    moveTorus,
    setDominantViewport,
  }), [
    bothMenusOpen,
    openBothMenus,
    closeBothMenus,
    drEamsOpen,
    openDrEams,
    closeDrEams,
    runtimeCallbacks,
    registerRuntimeCallbacks,
    unregisterRuntimeCallbacks,
    openInSurface,
    openInDominant,
    barIntent,
    setBarIntent,
    clearBarIntent,
    splitRatio,
    setSplitRatio,
    isBarMinimized,
    setIsBarMinimized,
    homeData,
    setHomeData,
    worldFocus,
    setFocus,
    moveTorus,
    setDominantViewport,
  ]);

  return (
    <DreamSystemContext.Provider value={contextValue}>
      {children}
    </DreamSystemContext.Provider>
  );
}

export const useDreamSystem = () => useContext(DreamSystemContext);
