import type {
    AchievementDefinition,
    AchievementState,
    CartridgeAchievementsAPI,
} from '../cartridge';



const PREFIX = 'dreamge:ach';

type PersistedState = Record<string, {
  unlocked: boolean;
  unlockedAt?: number;
  progress?: number;
}>;

function storeKey(cartridgeId: string): string {
  return `${PREFIX}:${cartridgeId}`;
}

function readState(cartridgeId: string): PersistedState {
  try {
    const raw = localStorage.getItem(storeKey(cartridgeId));
    if (!raw) return {};
    return JSON.parse(raw) as PersistedState;
  } catch {
    return {};
  }
}

function writeState(cartridgeId: string, state: PersistedState): void {
  try {
    localStorage.setItem(storeKey(cartridgeId), JSON.stringify(state));
  } catch {
    
  }
}

export type AchievementUnlockListener = (achievement: AchievementDefinition) => void;


export function createAchievementsAPI(
  cartridgeId: string,
  definitions: AchievementDefinition[],
  onUnlock: AchievementUnlockListener,
): CartridgeAchievementsAPI {
  const defMap = new Map(definitions.map((d) => [d.id, d]));

  return {
    async unlock(id: string): Promise<void> {
      const def = defMap.get(id);
      if (!def) return;
      const state = readState(cartridgeId);
      if (state[id]?.unlocked) return; 
      state[id] = { ...state[id], unlocked: true, unlockedAt: Date.now() };
      writeState(cartridgeId, state);
      onUnlock(def);
    },

    async progress(id: string, increment: number): Promise<void> {
      const def = defMap.get(id);
      if (!def || !def.total) return;
      const state = readState(cartridgeId);
      if (state[id]?.unlocked) return; 
      const current = state[id]?.progress ?? 0;
      const next = Math.min(current + increment, def.total);
      state[id] = { ...state[id], progress: next, unlocked: false };
      if (next >= def.total) {
        state[id].unlocked = true;
        state[id].unlockedAt = Date.now();
        writeState(cartridgeId, state);
        onUnlock(def);
      } else {
        writeState(cartridgeId, state);
      }
    },

    async getAll(): Promise<AchievementState[]> {
      const state = readState(cartridgeId);
      return definitions.map((def) => {
        const s = state[def.id];
        return {
          id: def.id,
          unlocked: s?.unlocked ?? false,
          unlockedAt: s?.unlockedAt,
          progress: s?.progress,
          total: def.total,
        };
      });
    },
  };
}


export function purgeCartridgeAchievements(cartridgeId: string): void {
  localStorage.removeItem(storeKey(cartridgeId));
}


export function getUnlockedCount(cartridgeId: string): number {
  const state = readState(cartridgeId);
  return Object.values(state).filter((s) => s.unlocked).length;
}
