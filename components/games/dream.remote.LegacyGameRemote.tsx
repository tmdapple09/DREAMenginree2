'use client';

/**
 * Compatibility alias. The GameEngin controller implementation is the shared
 * GameRemote surface so only one remote/controller system owns input.
 */

export { default } from '@/components/games/dream.remote.GameRemote';
export type { GameInputAction } from '@/components/games/dream.remote.GameRemote';

