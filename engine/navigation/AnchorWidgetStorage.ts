


export interface HomeSlotMapping {
  slotIndex: number; 
  widgetId: string | null; 
}

export interface PriorityWidget {
  widgetId: string;
  lastFocused: number; 
  pinned: boolean;
  usageCount?: number;
}

export interface AnchorWidgetState {
  mode: number;
  prevMode: number;
  isOpen: boolean;
  homeSlots: HomeSlotMapping[];
  priorityWidgets: PriorityWidget[];
  navSnapshot: Int32Array | null;
}


export class AnchorWidgetStorage {
  private static readonly STORAGE_KEY = 'anchor_widget_state';
  private static readonly HOME_SLOTS_COUNT = 8;
  private static readonly PRIORITY_WIDGETS_COUNT = 12;

  
  private static createDefaultHomeSlots(): HomeSlotMapping[] {
    return Array.from({ length: this.HOME_SLOTS_COUNT }, (_, index: number ) => ({
      slotIndex: index,
      widgetId: null
    }));
  }

  
  static async load(): Promise<AnchorWidgetState | null> {
    try {
      if (typeof window === 'undefined') return null;

      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;

      const data = JSON.parse(stored);

      
      if (data.navSnapshot) {
        data.navSnapshot = new Int32Array(data.navSnapshot);
      }

      return data;
    } catch (error: unknown) {
      console.error('Failed to load anchor widget state:', error);
      return null;
    }
  }

  
  static async save(state: AnchorWidgetState): Promise<void> {
    try {
      if (typeof window === 'undefined') return;

      
      const stateToStore = {
        ...state,
        navSnapshot: state.navSnapshot ? Array.from(state.navSnapshot) : null
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stateToStore));
    } catch (error: unknown) {
      console.error('Failed to save anchor widget state:', error);
    }
  }

  
  static saveIdle(state: AnchorWidgetState): void {
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => this.save(state));
    } else {
      
      setTimeout(() => this.save(state), 100);
    }
  }

  
  static getSlotWidget(state: AnchorWidgetState, slotIndex: number): string | null {
    const slot = state.homeSlots.find((s) => s.slotIndex === slotIndex);
    return slot?.widgetId || null;
  }

  
  static setSlotWidget(
    state: AnchorWidgetState,
    slotIndex: number,
    widgetId: string | null
  ): void {
    const slot = state.homeSlots.find((s) => s.slotIndex === slotIndex);
    if (slot) {
      slot.widgetId = widgetId;
    } else {
      state.homeSlots.push({ slotIndex, widgetId });
    }
  }

  
  static updatePriorities(state: AnchorWidgetState, focusedWidgetId: string): void {
    const existing = state.priorityWidgets.find((w) => w.widgetId === focusedWidgetId);

    if (existing) {
      existing.lastFocused = Date.now();
      existing.usageCount = (existing.usageCount || 0) + 1;
    } else {
      state.priorityWidgets.push({
        widgetId: focusedWidgetId,
        lastFocused: Date.now(),
        pinned: false,
        usageCount: 1
      });
    }

    
    state.priorityWidgets.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.lastFocused - a.lastFocused;
    });

    
    state.priorityWidgets = state.priorityWidgets.slice(
      0,
      this.PRIORITY_WIDGETS_COUNT
    );
  }

  
  static createInitialState(): AnchorWidgetState {
    return {
      mode: 0, 
      prevMode: 0,
      isOpen: false,
      homeSlots: this.createDefaultHomeSlots(),
      priorityWidgets: [],
      navSnapshot: null
    };
  }

  
  static clear(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
