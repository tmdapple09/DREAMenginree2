import type { DreamDrop, DreamDropType } from '@/engine/runtime/coercionTable';
import type { RuntimeId } from '@/types/module-manifest';

















export interface DropTarget {
  
  id: string;
  
  region: RuntimeId;
  
  accepts: DreamDropType[];
  
  priority: number;
  
  onDrop: (drop: DreamDrop) => void;
}



class DropTargetRegistry {
  private readonly _targets = new Map<string, DropTarget>();

  
  register(target: DropTarget): void {
    this._targets.set(target.id, target);
  }

  
  unregister(id: string): void {
    this._targets.delete(id);
  }

  
  route(drop: DreamDrop, region: RuntimeId): boolean {
    let best: DropTarget | null = null;
    for (const target of this._targets.values()) {
      if (target.region !== region) continue;
      const accepts =
        target.accepts.length === 0 || target.accepts.includes(drop.type);
      if (!accepts) continue;
      if (!best || target.priority > best.priority) {
        best = target;
      }
    }
    if (!best) return false;
    best.onDrop(drop);
    return true;
  }

  
  getTargetsForRegion(region: RuntimeId): DropTarget[] {
    return Array.from(this._targets.values()).filter((t) => t.region === region);
  }

  
  get size(): number {
    return this._targets.size;
  }
}


export const dropTargetRegistry = new DropTargetRegistry();






