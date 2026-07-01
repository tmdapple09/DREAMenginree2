import { widgetEventBus, type WidgetMsg } from './WidgetEventBus';
import { WidgetLinkGraph } from './WidgetLinkGraph';
import { toErrorMessage } from '@/utils/index';





export const MSG_TYPE_POST_REQUEST = 1;
export const MSG_TYPE_POST_RESULT = 2;
export const MSG_TYPE_FOCUS_REQUEST = 3;
export const MSG_TYPE_SEND_TEXT = 4;
export const MSG_TYPE_SEND_MEDIA = 5;


export interface WidgetCapabilityConfig {
  canSendPost: boolean;
  canReceivePost: boolean;
  canSendText: boolean;
  canSendMedia: boolean;
  canRequestFocus: boolean;
}


export interface PostRequestPayload {
  text?: string;
  mediaIds?: string[];
  targetPlatform?: string;
  options?: Record<string, unknown>;
}


export interface PostResultPayload {
  success: boolean;
  postId?: string;
  error?: string;
}


export class CrossWidgetPostingEngine {
  private linkGraph: WidgetLinkGraph;
  private widgetCapabilities: Map<string, WidgetCapabilityConfig>;

  constructor(linkGraph: WidgetLinkGraph) {
    this.linkGraph = linkGraph;
    this.widgetCapabilities = new Map();
  }

  
  registerWidget(widgetId: string, capabilities: WidgetCapabilityConfig): void {
    this.widgetCapabilities.set(widgetId, capabilities);
  }

  
  validatePostRequest(
    sourceWidgetId: string,
    targetWidgetId: string
  ): { valid: boolean; reason?: string } {
    
    if (!this.linkGraph.hasCapability(sourceWidgetId, targetWidgetId, 'CAN_SEND_POST')) {
      return {
        valid: false,
        reason: 'No POST link exists from source to target'
      };
    }

    
    const targetCapabilities = this.widgetCapabilities.get(targetWidgetId);
    if (!targetCapabilities?.canReceivePost) {
      return {
        valid: false,
        reason: 'Target widget does not support receiving posts'
      };
    }

    return { valid: true };
  }

  
  async handlePostRequest(msg: WidgetMsg): Promise<void> {
    const sourceWidgetId = msg.fromInstanceId;
    const targetWidgetId = msg.toWidgetId;
    const payload = msg.payload as PostRequestPayload;

    
    const validation = this.validatePostRequest(sourceWidgetId, targetWidgetId);
    if (!validation.valid) {
      
      this.sendPostResult(targetWidgetId, sourceWidgetId, {
        success: false,
        error: validation.reason
      });
      return;
    }

    
    
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: payload.text ?? '',
          media_ids: payload.mediaIds ?? [],
          target_platform: payload.targetPlatform,
          source_widget: sourceWidgetId,
          target_widget: targetWidgetId,
          options: payload.options ?? {},
        }),
      });

      if (res.ok) {
        const data = await res.json() as { id?: string; post_id?: string };
        this.sendPostResult(targetWidgetId, sourceWidgetId, {
          success: true,
          postId: data.id ?? data.post_id,
        });
      } else {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` })) as { error?: string };
        this.sendPostResult(targetWidgetId, sourceWidgetId, {
          success: false,
          error: err.error ?? `Post failed (HTTP ${res.status})`,
        });
      }
    } catch (networkErr: unknown) {
      this.sendPostResult(targetWidgetId, sourceWidgetId, {
        success: false,
        error: networkErr instanceof Error ? toErrorMessage(networkErr) : 'Network error',
      });
    }
  }

  
  private sendPostResult(
    fromWidgetId: string,
    toWidgetId: string,
    result: PostResultPayload
  ): void {
    widgetEventBus.send(
      fromWidgetId,
      toWidgetId,
      MSG_TYPE_POST_RESULT,
      result
    );
  }

  
  handleMessage(msg: WidgetMsg): void {
    switch (msg.type) {
      case MSG_TYPE_POST_REQUEST:
        this.handlePostRequest(msg);
        break;

      case MSG_TYPE_SEND_TEXT:
        this.handleSendText(msg);
        break;

      case MSG_TYPE_SEND_MEDIA:
        this.handleSendMedia(msg);
        break;

      default:
        console.warn('Unknown message type:', msg.type);
    }
  }

  
  private handleSendText(msg: WidgetMsg): void {
    const sourceWidgetId = msg.fromInstanceId;
    const targetWidgetId = msg.toWidgetId;

    if (!this.linkGraph.hasCapability(sourceWidgetId, targetWidgetId, 'CAN_SEND_TEXT')) {
      console.warn('No CAN_SEND_TEXT capability');
      return;
    }

    console.debug('SEND_TEXT:', {
      source: sourceWidgetId,
      target: targetWidgetId,
      payload: msg.payload
    });
  }

  
  private handleSendMedia(msg: WidgetMsg): void {
    const sourceWidgetId = msg.fromInstanceId;
    const targetWidgetId = msg.toWidgetId;

    if (!this.linkGraph.hasCapability(sourceWidgetId, targetWidgetId, 'CAN_SEND_MEDIA')) {
      console.warn('No CAN_SEND_MEDIA capability');
      return;
    }

    console.debug('SEND_MEDIA:', {
      source: sourceWidgetId,
      target: targetWidgetId,
      payload: msg.payload
    });
  }

  
  createPostingLink(
    sourceWidgetId: string,
    targetWidgetId: string,
    actionMap?: Record<string, string>
  ): string {
    return this.linkGraph.addLink(
      sourceWidgetId,
      targetWidgetId,
      ['CAN_SEND_POST', 'CAN_REQUEST_PUBLISH'],
      actionMap || {}
    );
  }
}
