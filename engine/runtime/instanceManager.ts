import type { RuntimeChannel } from '@/engine/runtime/runtimeChannel';
import { createLocalChannel, createRuntimeChannel } from '@/engine/runtime/runtimeChannel';
import type { RuntimeId } from '@/types/module-manifest';
import { create } from 'zustand';











const LS_KEY = 'dreamengin:engin-instances';

export const useInstanceManager = create<InstanceManagerState>((set, get) => ({
  instances: {},

  spawn(enginName, instanceId, region, mode = 'solo') {
    const key = `${enginName}:${instanceId}`;
    const existing = get().instances[key];
    if (existing) return existing;

    const channel = createLocalChannel(key);
    const instance: EnginInstance = {
      key,
      enginName,
      instanceId,
      region,
      mode,
      channel,
      createdAt: Date.now(),
    };

    set((state) => ({
      instances: { ...state.instances, [key]: instance },
    }));
    queueMicrotask(() => get().persistLocal());

    return instance;
  },

  createInstance({ enginName, instanceId, region, mode = 'solo' }) {
    return get().spawn(enginName, instanceId, region, mode);
  },

  destroy(key) {
    const { instances } = get();
    const instance = instances[key];
    if (!instance) return;

    
    instance.channel.close().catch(() => {});

    set((state) => {
      const next = { ...state.instances };
      delete next[key];
      return { instances: next };
    });
    queueMicrotask(() => get().persistLocal());
  },

  getInstancesForEngin(enginName) {
    return Object.values(get().instances).filter((i: EnginInstance) => i.enginName === enginName);
  },

  getInstancesForRegion(region) {
    return Object.values(get().instances).filter((i: EnginInstance) => i.region === region);
  },

  promoteToCoOp(key, channel) {
    const { instances } = get();
    const instance = instances[key];
    if (!instance) return;

    
    instance.channel.close().catch(() => {});

    set((state) => ({
      instances: {
        ...state.instances,
        [key]: { ...instance, channel, mode: 'coop' },
      },
    }));
    queueMicrotask(() => get().persistLocal());
  },

  persistLocal() {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(LS_KEY, JSON.stringify(serializeInstances(get().instances)));
    } catch {
      
    }
  },

  restoreLocal() {
    try {
      if (typeof localStorage === 'undefined') return;
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const rows = JSON.parse(raw) as PersistedInstance[];
      const restored: Record<string, EnginInstance> = {};
      for (const row of rows) {
        restored[row.key] = {
          ...row,
          channel: createLocalChannel(row.key),
          mode: row.mode === 'coop' ? 'coop' : 'solo',
        };
      }
      set({ instances: restored });
    } catch {
      
    }
  },
}));







export type EnginName =
  | 'StarMakerEngin'
  | 'GameEngin'
  | 'LabEngin'
  | 'CodeEngin'
  | 'BrandingEngin'
  | 'ContentEngin'
  | 'ForgeEngin'
  | (string & {});

export type InstanceMode = 'solo' | 'coop';


export interface EnginInstance {
  
  key: string;
  
  enginName: EnginName;
  
  instanceId: string;
  
  region: RuntimeId;
  
  mode: InstanceMode;
  
  channel: RuntimeChannel;
  
  createdAt: number;
}

interface InstanceManagerState {
  
  instances: Record<string, EnginInstance>;
  
  spawn: (
    enginName: EnginName,
    instanceId: string,
    region: RuntimeId,
    mode?: InstanceMode,
  ) => EnginInstance;
  createInstance: (options: {
    enginName: EnginName;
    instanceId: string;
    region: RuntimeId;
    mode?: InstanceMode;
  }) => EnginInstance;
  
  destroy: (key: string) => void;
  
  getInstancesForEngin: (enginName: EnginName) => EnginInstance[];
  
  getInstancesForRegion: (region: RuntimeId) => EnginInstance[];
  
  promoteToCoOp: (key: string, channel: RuntimeChannel) => void;
  persistLocal: () => void;
  restoreLocal: () => void;
}

type PersistedInstance = Omit<EnginInstance, 'channel'>;



function serializeInstances(instances: Record<string, EnginInstance>): PersistedInstance[] {
  return Object.values(instances).map((instance) => ({
    key: instance.key,
    enginName: instance.enginName,
    instanceId: instance.instanceId,
    region: instance.region,
    mode: instance.mode,
    createdAt: instance.createdAt,
  }));
}


export function buildInstanceKey(enginName: EnginName, instanceId: string): string {
  return `${enginName}:${instanceId}`;
}

export function createInstance(options: {
  enginName: EnginName;
  instanceId: string;
  region: RuntimeId;
  mode?: InstanceMode;
}): EnginInstance {
  return useInstanceManager.getState().createInstance(options);
}

export async function promoteInstanceToRealtime(key: string): Promise<void> {
  const channel = await createRuntimeChannel(key, 'shared');
  useInstanceManager.getState().promoteToCoOp(key, channel);
}

export async function persistInstanceList(userId: string): Promise<void> {
  const rows = serializeInstances(useInstanceManager.getState().instances);
  try {
    const { createClient } = await import('@/supabase/client/client');
    const supabase = createClient();
    type DbResponse<T> = Promise<{ data: T | null; error: { message?: string } | null }>;
    const db = supabase as unknown as {
      from: (table: 'engin_instances') => {
        upsert: (
          values: Array<Record<string, unknown>>,
          options: { onConflict: string },
        ) => DbResponse<unknown>;
      };
    };
    await db.from('engin_instances').upsert(
      rows.map((row) => ({
        owner_id: userId,
        instance_key: row.key,
        engin_name: row.enginName,
        instance_id: row.instanceId,
        region: row.region,
        mode: row.mode,
        updated_at: new Date().toISOString(),
      })),
      { onConflict: 'owner_id,instance_key' },
    );
  } catch {
    useInstanceManager.getState().persistLocal();
  }
}


export function spawnDualInstances(
  enginName: EnginName,
  regionA: RuntimeId,
  regionB: RuntimeId,
): [EnginInstance, EnginInstance] {
  const idA =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2);
  const idB =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2);

  const { spawn } = useInstanceManager.getState();
  const a = spawn(enginName, idA, regionA, 'solo');
  const b = spawn(enginName, idB, regionB, 'solo');
  return [a, b];
}






