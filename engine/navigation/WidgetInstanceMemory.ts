


export enum WidgetPresentation {
  FLOATING = 'FLOATING',
  DOCKED = 'DOCKED',
  FULL = 'FULL',
}

export enum WidgetVisibility {
  ACTIVE = 'ACTIVE',
  BACKGROUND = 'BACKGROUND',
  PARKED = 'PARKED',
}

export enum WidgetBindingType {
  STATIC = 'STATIC',
  LIVE = 'LIVE',
  SNAPSHOT = 'SNAPSHOT',
}

export interface WidgetTransformState {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface WidgetInstanceRecord {
  instanceId: string;
  ownerId: string;
  context: 'HOME' | 'PROFILE' | 'OTHER';
  transformState: WidgetTransformState;
  zIndex: number;
  presentation: WidgetPresentation;
  bindingType: WidgetBindingType;
  bindingConfig: Record<string, unknown>;
  visibility: WidgetVisibility;
  internalState: Record<string, unknown>;
}


export class WidgetInstanceMemory {
  private instances: WidgetInstanceRecord[];
  private homeIndices: number[];
  private profileIndices: number[];
  private activeIndicesPointer: number[]; 
  private sortedCache: WidgetInstanceRecord[] | null; 
  private sortedCacheDirty: boolean;

  constructor() {
    this.instances = [];
    this.homeIndices = [];
    this.profileIndices = [];
    this.activeIndicesPointer = this.homeIndices;
    this.sortedCache = null;
    this.sortedCacheDirty = true;
  }

  
  initialize(instances: WidgetInstanceRecord[]): void {
    this.instances = instances;

    
    this.homeIndices = [];
    this.profileIndices = [];

    instances.forEach((instance, index: number) => {
      if (instance.context === 'HOME') {
        this.homeIndices.push(index);
      } else if (instance.context === 'PROFILE') {
        this.profileIndices.push(index);
      }
    });

    
    this.activeIndicesPointer = this.homeIndices;
  }

  
  switchToProfile(): void {
    this.activeIndicesPointer = this.profileIndices;
    this.sortedCacheDirty = true;
  }

  
  switchToHome(): void {
    this.activeIndicesPointer = this.homeIndices;
    this.sortedCacheDirty = true;
  }

  
  getActiveWidgets(): WidgetInstanceRecord[] {
    return this.activeIndicesPointer.map((index) => this.instances[index]);
  }

  
  getWidget(instanceId: string): WidgetInstanceRecord | undefined {
    return this.instances.find((w) => w.instanceId === instanceId);
  }

  
  updateTransform(instanceId: string, transform: Partial<WidgetTransformState>): void {
    const widget = this.getWidget(instanceId);
    if (widget) {
      Object.assign(widget.transformState, transform);
      this.sortedCacheDirty = true;
    }
  }

  
  updatePresentation(instanceId: string, presentation: WidgetPresentation): void {
    const widget = this.getWidget(instanceId);
    if (widget) {
      widget.presentation = presentation;
      this.sortedCacheDirty = true;
    }
  }

  
  getActiveWidgetsSorted(): WidgetInstanceRecord[] {
    if (!this.sortedCacheDirty && this.sortedCache) {
      return this.sortedCache;
    }

    const active = this.getActiveWidgets();
    this.sortedCache = active.slice().sort((a, b) => a.zIndex - b.zIndex);
    this.sortedCacheDirty = false;
    return this.sortedCache;
  }

  
  removeFromActive(instanceId: string): void {
    const widgetIndex = this.instances.findIndex((w) => w.instanceId === instanceId);
    if (widgetIndex === -1) return;

    const activeIndex = this.activeIndicesPointer.indexOf(widgetIndex);
    if (activeIndex !== -1) {
      this.activeIndicesPointer.splice(activeIndex, 1);
      this.sortedCacheDirty = true;
    }
  }

  
  addToActive(instanceId: string): void {
    const widgetIndex = this.instances.findIndex((w) => w.instanceId === instanceId);
    if (widgetIndex === -1) return;

    const widget = this.instances[widgetIndex];
    const targetIndices = widget.context === 'HOME' ? this.homeIndices : this.profileIndices;

    if (!targetIndices.includes(widgetIndex)) {
      targetIndices.push(widgetIndex);
      this.sortedCacheDirty = true;
    }
  }
}
