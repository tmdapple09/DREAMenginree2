


export type CapabilityMask =
  | 'CAN_SEND_TEXT'
  | 'CAN_SEND_MEDIA'
  | 'CAN_SEND_POST'
  | 'CAN_REQUEST_PUBLISH'
  | 'CAN_REQUEST_OPEN'
  | 'CAN_REQUEST_FOCUS';

export interface WidgetLink {
  linkId: string;
  targetWidgetId: string;
  capabilities: CapabilityMask[];
  actionMap: Record<string, string>; 
}

export interface WidgetLinkNode {
  widgetId: string;
  outgoingLinks: WidgetLink[];
  incomingLinks: string[]; 
}


export class WidgetLinkGraph {
  private nodes: Map<string, WidgetLinkNode>;

  constructor() {
    this.nodes = new Map();
  }

  
  initialize(nodes: WidgetLinkNode[]): void {
    this.nodes.clear();
    nodes.forEach((node) => {
      this.nodes.set(node.widgetId, node);
    });
  }

  
  addWidget(widgetId: string): void {
    if (!this.nodes.has(widgetId)) {
      this.nodes.set(widgetId, {
        widgetId,
        outgoingLinks: [],
        incomingLinks: []
      });
    }
  }

  
  addLink(
    sourceWidgetId: string,
    targetWidgetId: string,
    capabilities: CapabilityMask[],
    actionMap: Record<string, string> = {}
  ): string {
    
    this.addWidget(sourceWidgetId);
    this.addWidget(targetWidgetId);

    const linkId = `link_${sourceWidgetId}_${targetWidgetId}_${Date.now()}`;

    const sourceNode = this.nodes.get(sourceWidgetId)!;
    const targetNode = this.nodes.get(targetWidgetId)!;

    
    sourceNode.outgoingLinks.push({
      linkId,
      targetWidgetId,
      capabilities,
      actionMap
    });

    
    if (!targetNode.incomingLinks.includes(sourceWidgetId)) {
      targetNode.incomingLinks.push(sourceWidgetId);
    }

    return linkId;
  }

  
  removeLink(linkId: string): boolean {
    for (const [widgetId, node] of this.nodes) {
      const linkIndex = node.outgoingLinks.findIndex((link) => link.linkId === linkId);
      if (linkIndex !== -1) {
        const link = node.outgoingLinks[linkIndex];
        node.outgoingLinks.splice(linkIndex, 1);

        
        const targetNode = this.nodes.get(link.targetWidgetId);
        if (targetNode) {
          const hasOtherLinks = node.outgoingLinks.some(
            l => l.targetWidgetId === link.targetWidgetId
          );
          if (!hasOtherLinks) {
            targetNode.incomingLinks = targetNode.incomingLinks.filter(
              id => id !== widgetId
            );
          }
        }

        return true;
      }
    }
    return false;
  }

  
  hasCapability(
    sourceWidgetId: string,
    targetWidgetId: string,
    capability: CapabilityMask
  ): boolean {
    const sourceNode = this.nodes.get(sourceWidgetId);
    if (!sourceNode) return false;

    return sourceNode.outgoingLinks.some(
      link =>
        link.targetWidgetId === targetWidgetId &&
        link.capabilities.includes(capability)
    );
  }

  
  getOutgoingLinks(widgetId: string): WidgetLink[] {
    const node = this.nodes.get(widgetId);
    return node ? node.outgoingLinks : [];
  }

  
  getIncomingLinks(widgetId: string): string[] {
    const node = this.nodes.get(widgetId);
    return node ? node.incomingLinks : [];
  }

  
  getActionHandler(
    sourceWidgetId: string,
    targetWidgetId: string,
    action: string
  ): string | null {
    const sourceNode = this.nodes.get(sourceWidgetId);
    if (!sourceNode) return null;

    const link = sourceNode.outgoingLinks.find(
      l => l.targetWidgetId === targetWidgetId
    );

    return link?.actionMap[action] || null;
  }

  
  validateMessage(
    sourceWidgetId: string,
    targetWidgetId: string,
    requiredCapability: CapabilityMask
  ): boolean {
    return this.hasCapability(sourceWidgetId, targetWidgetId, requiredCapability);
  }

  
  export(): WidgetLinkNode[] {
    return Array.from(this.nodes.values());
  }

  
  clear(): void {
    this.nodes.clear();
  }
}
