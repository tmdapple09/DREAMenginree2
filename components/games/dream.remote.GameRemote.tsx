'use client';

/**
 * GameRemote — shared control surface for GameEngin cartridges.
 *
 * GameEngin shells mount this remote beside cartridge-owned visuals. A game may
 * draw its own HUD inside the cartridge, but generic overlay controllers
 * must not replace this universal input capability.
 */

export { default, type GameInputAction } from '@/components/games/dream.remote.GameRemoteSurface';

