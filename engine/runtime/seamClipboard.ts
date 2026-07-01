import type { RuntimeRegion } from '@/engine/identity/canonical-names';
import { dreamOSBus } from '@/engine/runtime/dreamOSBus';
import { bridge } from '@/engine/runtime/dualRuntimeBridge';
import {
    ENGIN_KEYS,
    findWorkflows,
    type EnginKey,
} from '@/engine/runtime/enginWorkflowRegistry';












const _ENGIN_ALIAS_MAP: Readonly<Record<string, EnginKey>> = {
  
  starmaker: 'starmaker',
  game: 'game',
  code: 'code',
  lab: 'lab',
  brand: 'brand',
  content: 'content',
  forge: 'forge',
  
  starmakerEngin: 'starmaker',
  gameEngin: 'game',
  codeEngin: 'code',
  labEngin: 'lab',
  brandingEngin: 'brand',
  contentEngin: 'content',
  forgeEngin: 'forge',
  
  starmakerEngin_lc: 'starmaker', 
  branding: 'brand',
  create: 'content',
  music: 'starmaker',
  games: 'game',
};


const MAX_PAYLOAD_BYTES = 512 * 1024;







export type SeamClipboardMimeType = 'text/plain' | 'application/json' | 'application/x-dream-artifact';

export interface SeamClipboardPayload {
  
  content: string;
  
  mimeType: SeamClipboardMimeType;
  
  sourceRegion: RuntimeRegion;
  
  targetRegion: RuntimeRegion;
  
  timestamp: number;
}

type SeamClipboardListener = (payload: SeamClipboardPayload) => void;

type UnsubscribeFn = () => void;



function _toEnginKey(value: unknown): EnginKey | null {
  if (typeof value !== 'string') return null;
  
  const direct = _ENGIN_ALIAS_MAP[value];
  if (direct !== undefined) return direct;
  
  const lc = value.toLowerCase();
  const lcHit = _ENGIN_ALIAS_MAP[lc];
  if (lcHit !== undefined) return lcHit;
  
  if ((ENGIN_KEYS as readonly string[]).includes(lc)) return lc as EnginKey;
  
  const stripped = lc.replace(/engin$/, '');
  if ((ENGIN_KEYS as readonly string[]).includes(stripped)) return stripped as EnginKey;
  const strippedHit = _ENGIN_ALIAS_MAP[stripped];
  if (strippedHit !== undefined) return strippedHit;
  return null;
}

class SeamClipboard {
  private current: SeamClipboardPayload | null = null;
  private readonly listeners = new Set<SeamClipboardListener>();

  
  set(input: Omit<SeamClipboardPayload, 'timestamp'>): void {
    
    const byteLen = typeof TextEncoder !== 'undefined'
      ? new TextEncoder().encode(input.content).length
      : input.content.length;
    if (byteLen > MAX_PAYLOAD_BYTES) {
      console.warn(
        `[SeamClipboard] Payload rejected: ${byteLen} bytes exceeds ${MAX_PAYLOAD_BYTES} byte limit`,
      );
      return;
    }

    const payload: SeamClipboardPayload = { ...input, timestamp: Date.now() };
    this.current = payload;

    
    if (input.mimeType === 'application/x-dream-artifact') {
      try {
        const parsed = JSON.parse(input.content) as any;
        const sourceEngin = _toEnginKey(parsed['engin']);
        const targetEngin = _toEnginKey(parsed['targetEngin']);
        if (sourceEngin !== null && targetEngin !== null) {
          const workflows = findWorkflows(sourceEngin, targetEngin);
          for (const workflow of workflows) {
            
            try {
              workflow.execute({ ...parsed, _seamTimestamp: payload.timestamp });
            } catch (workflowErr: unknown) {
              console.error(`[SeamClipboard] Workflow ${workflow.id} failed`, workflowErr);
            }
          }
        }
      } catch (_err: unknown) {
        
        
      }
    }

    
    bridge.emitDurable('seam', 'drop', payload as unknown as any);

    
    dreamOSBus.emit('seam:drop', payload);

    
    this._notify(payload);
  }

  
  clear(): void {
    this.current = null;
    dreamOSBus.emit('seam:clear', { timestamp: Date.now() });
  }

  
  get(): SeamClipboardPayload | null {
    return this.current;
  }

  
  setWithEngins(from: EnginKey, to: EnginKey, artifact: Record<string, unknown>): string[] {
    const workflows = findWorkflows(from, to);
    const firedIds: string[] = [];
    for (const workflow of workflows) {
      
      try {
        workflow.execute({ ...artifact, _seamTimestamp: Date.now() });
        firedIds.push(workflow.id);
      } catch (err: unknown) {
        console.error(`[SeamClipboard] Workflow ${workflow.id} failed`, err);
      }
    }
    return firedIds;
  }

  
  subscribe(handler: SeamClipboardListener): UnsubscribeFn {
    this.listeners.add(handler);
    return () => { this.listeners.delete(handler); };
  }

  
  getSubscriberCount(): number {
    return this.listeners.size;
  }

  private _notify(payload: SeamClipboardPayload): void {
    for (const listener of Array.from(this.listeners)) {
      try {
        listener(payload);
      } catch (err: unknown) {
        console.error('[SeamClipboard] listener error', err);
      }
    }
  }
}


export const seamClipboard = new SeamClipboard();






