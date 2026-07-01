import type { CartridgeSaveAPI, CartridgeSaveSlot } from '../cartridge';



const PREFIX = 'dreamge:save';
const MAX_SLOTS = 8;

function catalogKey(cartridgeId: string): string {
  return `${PREFIX}:${cartridgeId}:catalog`;
}

function slotKey(cartridgeId: string, slot: number): string {
  return `${PREFIX}:${cartridgeId}:${slot}`;
}

function readCatalog(cartridgeId: string): Record<number, { timestamp: number; label: string }> {
  try {
    const raw = localStorage.getItem(catalogKey(cartridgeId));
    if (!raw) return {};
    return JSON.parse(raw) as Record<number, { timestamp: number; label: string }>;
  } catch {
    return {};
  }
}

function writeCatalog(
  cartridgeId: string,
  catalog: Record<number, { timestamp: number; label: string }>,
): void {
  try {
    localStorage.setItem(catalogKey(cartridgeId), JSON.stringify(catalog));
  } catch {
    
  }
}

function autoLabel(slot: number): string {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { month: 'short', day: 'numeric' });
  return slot === 0 ? `Auto · ${date} ${time}` : `Slot ${slot} · ${date} ${time}`;
}


export function createSaveAPI(cartridgeId: string): CartridgeSaveAPI {
  return {
    async list(): Promise<CartridgeSaveSlot[]> {
      const catalog = readCatalog(cartridgeId);
      const slots: CartridgeSaveSlot[] = [];
      for (const [rawSlot, meta] of Object.entries(catalog)) {
        const slot = Number(rawSlot);
        const rawData = localStorage.getItem(slotKey(cartridgeId, slot));
        if (!rawData) continue;
        try {
          const data = JSON.parse(rawData) as any;
          slots.push({ slot, timestamp: meta.timestamp, label: meta.label, data });
        } catch {
          
        }
      }
      return slots.sort((a, b) => a.slot - b.slot);
    },

    async load(slot: number): Promise<CartridgeSaveSlot | null> {
      const catalog = readCatalog(cartridgeId);
      const meta = catalog[slot];
      if (!meta) return null;
      const rawData = localStorage.getItem(slotKey(cartridgeId, slot));
      if (!rawData) return null;
      try {
        const data = JSON.parse(rawData) as any;
        return { slot, timestamp: meta.timestamp, label: meta.label, data };
      } catch {
        return null;
      }
    },

    async write(slot: number, data, label?: string): Promise<void> {
      if (slot < 0 || slot >= MAX_SLOTS) {
        throw new Error(`Save slot ${slot} out of range (0–${MAX_SLOTS - 1})`);
      }
      const timestamp = Date.now();
      const resolvedLabel = label ?? autoLabel(slot);
      try {
        localStorage.setItem(slotKey(cartridgeId, slot), JSON.stringify(data));
      } catch {
        throw new Error('Save failed: storage quota exceeded');
      }
      const catalog = readCatalog(cartridgeId);
      catalog[slot] = { timestamp, label: resolvedLabel };
      writeCatalog(cartridgeId, catalog);
    },

    async erase(slot: number): Promise<void> {
      localStorage.removeItem(slotKey(cartridgeId, slot));
      const catalog = readCatalog(cartridgeId);
      delete catalog[slot];
      writeCatalog(cartridgeId, catalog);
    },

    async autoSave(data): Promise<void> {
      await this.write(0, data, autoLabel(0));
    },
  };
}


export function purgeCartridgeSaves(cartridgeId: string): void {
  for (let i = 0; i < MAX_SLOTS; i++) {
    localStorage.removeItem(slotKey(cartridgeId, i));
  }
  localStorage.removeItem(catalogKey(cartridgeId));
}


export function getSaveStorageBytes(cartridgeId: string): number {
  let bytes = 0;
  for (let i = 0; i < MAX_SLOTS; i++) {
    const raw = localStorage.getItem(slotKey(cartridgeId, i));
    if (raw) bytes += raw.length * 2; 
  }
  const cat = localStorage.getItem(catalogKey(cartridgeId));
  if (cat) bytes += cat.length * 2;
  return bytes;
}
