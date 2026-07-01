'use client';

import GameRemote from '@/components/games/dream.remote.GameRemote';
import type { MobileHudMode } from '@/engins/gameengin/games/mobileControls';

interface GameHUDProps {
  gameLabel: string;
  gameEmoji?: string;
  playHref?: string;
  mode?: MobileHudMode;
  onExit: () => void;
}


export default function GameHUD({ gameLabel, playHref, onExit }: GameHUDProps) {
  return <GameRemote embedded gameLabel={gameLabel} playHref={playHref} onExit={onExit} />;
}

