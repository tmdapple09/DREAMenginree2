'use client';

import GameRemote from '@/components/games/dream.remote.GameRemote';
import type { MobileHudMode } from '@/lib/games/mobileControls';

interface GameHUDProps {
  gameLabel: string;
  gameEmoji?: string;
  playHref?: string;
  mode?: MobileHudMode;
  onExit: () => void;
}

/**
 * Compatibility wrapper only.
 *
 * GameEngin's shared control surface is GameRemote. Cartridge-specific HUDs
 * belong inside cartridges; this wrapper keeps older imports from creating a
 * second generic HUD/controller layer.
 */
export default function GameHUD({ gameLabel, playHref, onExit }: GameHUDProps) {
  return <GameRemote embedded gameLabel={gameLabel} playHref={playHref} onExit={onExit} />;
}
