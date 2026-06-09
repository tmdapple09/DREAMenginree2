import type { SupabaseClient } from '@/engine/io';
import {
    broadcastControlSignal as collabBroadcastControlSignal,
    broadcastCursor as collabBroadcastCursor,
    broadcastDataPacket as collabBroadcastDataPacket,
    broadcastEdit as collabBroadcastEdit,
    broadcastMediaSync as collabBroadcastMediaSync,
    broadcastModeChange as collabBroadcastModeChange,
    broadcastPresenceUpdate as collabBroadcastPresenceUpdate,
    broadcastStatePatch as collabBroadcastStatePatch,
    createCollabSession,
    type CollabEventHandler,
    type CollabEventType,
    type CollabMode,
    type CollabPayload,
    type CollabSession,
    type PresenceUpdateData,
    type SessionRole,
} from '@/lib/collaboration';

// Framework directives stay physically first when required.

// Runtime file: lib/sharedDream.ts.

/**
 * lib/sharedDream.ts
 *
 * Backward-compatible facade over the canonical collaboration engine
 * in lib/collaboration.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type SharedDreamSession = CollabSession;

export type DreamEventType = CollabEventType;

export type DreamBroadcastPayload = CollabPayload;

export type DreamEventHandler = CollabEventHandler;

export type DreamSessionRole = SessionRole;

export type DreamSessionMode = CollabMode;

export type DreamPresenceUpdate = PresenceUpdateData;

export interface SharedDreamSessionOptions {
  role?: SessionRole;
  mode?: CollabMode;
}

// Runtime functions, classes, handlers, and state transitions.

async function connectSharedDream(
  channelId: string,
  supabaseClient: SupabaseClient,
  handlers: DreamEventHandler[] = [],
  options: SharedDreamSessionOptions = {},
): Promise<SharedDreamSession> {
  const session = await createCollabSession(channelId, {
    transport: 'supabase',
    supabaseClient,
    expectedPeerCount: 40,
    role: options.role ?? 'participant',
    mode: options.mode ?? 'shared_dream',
  });

  for (const handler of handlers) {
    session.onMessage(handler);
  }

  return session;
}

export async function createSharedDreamSession(
  channelId: string,
  supabaseClient: SupabaseClient,
  handlers: DreamEventHandler[] = [],
  options: SharedDreamSessionOptions = {},
): Promise<SharedDreamSession> {
  return connectSharedDream(channelId, supabaseClient, handlers, options);
}

export async function joinSharedDreamSession(
  channelId: string,
  supabaseClient: SupabaseClient,
  handlers: DreamEventHandler[] = [],
  options: SharedDreamSessionOptions = {},
): Promise<SharedDreamSession> {
  return connectSharedDream(channelId, supabaseClient, handlers, options);
}

export function broadcastCursorPosition(
  session: SharedDreamSession,
  x: number,
  y: number,
): void {
  void collabBroadcastCursor(session, x, y);
}

export function broadcastEdit(session: SharedDreamSession, payload: unknown): void {
  void collabBroadcastEdit(session, payload);
}

export function broadcastStatePatch(session: SharedDreamSession, patch: unknown): void {
  void collabBroadcastStatePatch(session, patch);
}

export function broadcastDataPacket(session: SharedDreamSession, packet: unknown): void {
  void collabBroadcastDataPacket(session, packet);
}

export function broadcastMediaSync(
  session: SharedDreamSession,
  command: string,
  timeRefSec?: number,
  payload?: Record<string, unknown>,
): void {
  void collabBroadcastMediaSync(session, command, timeRefSec, payload);
}

export function broadcastControlSignal(
  session: SharedDreamSession,
  signal: string,
  payload?: Record<string, unknown>,
): void {
  void collabBroadcastControlSignal(session, signal, payload);
}

export function broadcastModeChange(
  session: SharedDreamSession,
  mode: CollabMode,
  changedByRole?: SessionRole,
): void {
  void collabBroadcastModeChange(session, mode, changedByRole);
}

export function broadcastPresenceUpdate(
  session: SharedDreamSession,
  presence: PresenceUpdateData,
): void {
  void collabBroadcastPresenceUpdate(session, presence);
}

export async function leaveSharedDreamSession(session: SharedDreamSession): Promise<void> {
  await session.leave();
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.

export {
    useSharedDreamSession, type SharedDreamActivityEntry, type SharedDreamMember, type UseSharedDreamSessionOptions,
    type UseSharedDreamSessionResult
} from './sharedDream/useSharedDreamSession';
