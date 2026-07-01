import type { CollabMode, SessionRole } from '@/engine/collaboration/index';




export type RealityMode = 'open' | 'invite_only' | 'private';


export interface RealityEnginSlot {
  
  enginName: string;
  
  instanceId: string;
  
  active: boolean;
  
  lastStateAt: string | null;
  
  lastState: Record<string, unknown> | null;
}


export interface Reality {
  id: string;
  name: string;
  description: string | null;
  creatorId: string;
  mode: RealityMode;
  
  channelId: string;
  
  collabMode: CollabMode;
  
  enginSlots: RealityEnginSlot[];
  
  activityCount: number;
  createdAt: string;
  lastActivityAt: string;
}


export interface RealityMember {
  realityId: string;
  userId: string;
  
  displayName: string | null;
  avatarUrl: string | null;
  role: SessionRole;
  joinedAt: string;
  lastSeenAt: string;
  
  isOnline: boolean;
}


export interface RealitySnapshot {
  id: string;
  realityId: string;
  capturedById: string;
  
  enginStates: Record<string, Record<string, unknown>>;
  capturedAt: string;
}

export type RealityActivityKind =
  | 'member_joined'
  | 'member_left'
  | 'engin_activated'
  | 'engin_state_saved'
  | 'snapshot_captured'
  | 'reality_created'
  | 'reality_renamed'
  | 'mode_changed'
  | 'custom';


export interface RealityActivityEntry {
  id: string;
  realityId: string;
  userId: string | null;
  kind: RealityActivityKind;
  label: string;
  meta: Record<string, unknown>;
  createdAt: string;
}


export interface RealityContextValue {
  
  reality: Reality | null;
  
  isLoading: boolean;
  
  members: readonly RealityMember[];
  
  onlineMembers: readonly RealityMember[];
  
  activity: readonly RealityActivityEntry[];
  
  myRole: SessionRole;
  
  isConnected: boolean;
  
  activateEngin: (instanceId: string) => Promise<void>;
  
  deactivateEngin: (instanceId: string) => Promise<void>;
  
  captureSnapshot: () => Promise<void>;
  
  restoreLatestSnapshot: () => Promise<Record<string, Record<string, unknown>>>;
  
  logActivity: (kind: RealityActivityKind, label: string, meta?: Record<string, unknown>) => void;
  
  getInviteLink: () => string;
  
  leave: () => Promise<void>;
}
