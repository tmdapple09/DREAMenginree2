'use client';

import { makeEnginApp } from '@/components/engines/shared';
import dynamic from 'next/dynamic';

const GameEngin = dynamic(() => import('@/engins/engin.GameEngin'), { ssr: false });



export default makeEnginApp({
  id: 'games',
  name: 'GameEngin',
  emoji: '🎮',
  accentColor: '#c8981a',
  backHref: '/daydream/games',
  backLabel: 'Games Daydream',
  nav: [
    { href: '/engines/games',         label: 'Hub',        emoji: '🎮' },
    { href: '/engines/games/library', label: 'Library',    emoji: '📚' },
    { href: '/gameengin/cartridges',  label: 'Cartridges', emoji: '💾' },
    { href: '/engines/games/scores',  label: 'Scores',     emoji: '🏆' },
    { href: '/engines/games/builder', label: 'Builder',    emoji: '🗺️' },
  ],
  EnginComponent: GameEngin,
});
