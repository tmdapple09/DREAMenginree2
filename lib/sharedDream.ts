// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/sharedDream.ts.

/**
 * lib/sharedDream.ts
 *
 * Backward-compatible facade over the canonical collaboration engine
 * in lib/collaboration.
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

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

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

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

// ── Source Grammar: Actions ─────────────────────────────────────────────────

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

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.

// ── Persistent session hook ───────────────────────────────────────────────────
export {
    useSharedDreamSession, type SharedDreamActivityEntry, type SharedDreamMember, type UseSharedDreamSessionOptions,
    type UseSharedDreamSessionResult
} from './sharedDream/useSharedDreamSession';
