'use client';

import GameController from '@/components/games/dream.GameController';
import MobileGameHUD from '@/components/games/dream.hud.MobileGameHUD';
import type { MobileHudMode } from '@/lib/games/mobileControls';

interface GameHUDProps {
  gameLabel: string;
  gameEmoji?: string;
  playHref?: string;
  mode?: MobileHudMode;
  onExit: () => void;
}


export default function GameHUD({ gameLabel, gameEmoji, playHref, mode = 'buttons', onExit }: GameHUDProps) {
  if (mode === 'controller') {
    return <GameController gameLabel={gameLabel} onExit={onExit} />;
  }
  return (
    <MobileGameHUD
      gameLabel={gameLabel}
      gameEmoji={gameEmoji}
      playHref={playHref}
      mode={mode}
      onExit={onExit}
    />
  );
}
