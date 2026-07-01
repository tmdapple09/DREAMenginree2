'use client';

import { useCallback, useEffect, useState } from 'react';
import {
    DEFAULT_DUAL_RUNTIME,
    makeHomeActiveTop,
    setRuntimeWorld,
    swapDominantRuntime,
    type DualRuntimeState,
    type RuntimeWorld,
} from './dualRuntime';











const STORAGE_KEY = 'de-dual-runtime-state';

const OPFS_FILENAME = 'de-dual-runtime-state.json';







export interface UseDualRuntimePersistenceReturn {
  state: DualRuntimeState;
  setTopWorld: (world: RuntimeWorld) => void;
  setBottomWorld: (world: RuntimeWorld) => void;
  swapDominant: () => void;
  goHome: () => void;
}




function serializeWorld(world: RuntimeWorld): string {
  if (typeof world === 'string') return JSON.stringify({ kind: 'string', value: world });
  return JSON.stringify({ kind: 'object', value: world });
}

function deserializeWorld(raw: string): RuntimeWorld {
  try {
    const parsed = JSON.parse(raw) as { kind: 'string' | 'object'; value: RuntimeWorld };
    return parsed.value;
  } catch {
    return DEFAULT_DUAL_RUNTIME.surfaceSpaceWorld;
  }
}


function serializeState(state: DualRuntimeState): string {
  return JSON.stringify({
    surfaceSpaceWorld: serializeWorld(state.surfaceSpaceWorld),
    dreamSpaceWorld:   serializeWorld(state.dreamSpaceWorld),
    dominantRegion:    state.dominantRegion,
  });
}

function deserializeState(raw: string): DualRuntimeState {
  try {
    const obj = JSON.parse(raw) as {
      surfaceSpaceWorld: string;
      dreamSpaceWorld: string;
      dominantRegion: 'Surface Space' | 'DreamSpace';
    };
    return {
      surfaceSpaceWorld: deserializeWorld(obj.surfaceSpaceWorld),
      dreamSpaceWorld:   deserializeWorld(obj.dreamSpaceWorld),
      dominantRegion:    obj.dominantRegion ?? DEFAULT_DUAL_RUNTIME.dominantRegion,
    };
  } catch {
    return DEFAULT_DUAL_RUNTIME;
  }
}





async function writeStateOpfs(serialized: string): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(OPFS_FILENAME, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(serialized);
    await writable.close();
  } catch {
    
    try {
      localStorage.setItem(STORAGE_KEY, serialized);
    } catch {  }
  }
}

async function readStateOpfs(): Promise<string | null> {
  try {
    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(OPFS_FILENAME);
    const file = await fileHandle.getFile();
    return await file.text();
  } catch {
    
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}


export function useDualRuntimePersistence(): UseDualRuntimePersistenceReturn {
  
  const [state, setState] = useState<DualRuntimeState>(DEFAULT_DUAL_RUNTIME);

  
  useEffect(() => {
    readStateOpfs().then((raw) => {
      if (raw) {
        setState(deserializeState(raw));
      }
    });

  }, []); 

  
  useEffect(() => {
    writeStateOpfs(serializeState(state));
  }, [state]);

  const setTopWorld = useCallback((world: RuntimeWorld) => {
    setState((prev) => setRuntimeWorld(prev, 'top', world));
  }, []);

  const setBottomWorld = useCallback((world: RuntimeWorld) => {
    setState((prev) => setRuntimeWorld(prev, 'bottom', world));
  }, []);

  const swapDominant = useCallback(() => {
    setState((prev) => swapDominantRuntime(prev));
  }, []);

  const goHome = useCallback(() => {
    setState((prev) => makeHomeActiveTop(prev));
  }, []);

  return { state, setTopWorld, setBottomWorld, swapDominant, goHome };
}






