'use client';

import { useGodTier } from '@/engine/rendering/god-tier/useGodTier';
import { usePathname } from 'next/navigation';



export default function GodTierProvider( ){
  const pathname = usePathname();

  
  const activeTask =
    pathname.startsWith('/game')       ? 'game_session' :
    pathname.startsWith('/showcase')   ? 'hero_showcase' :
    pathname.startsWith('/shop')       ? 'purchase' :
    pathname.startsWith('/checkout')   ? 'checkout' :
    pathname.startsWith('/dream')      ? 'dream_browse' :
    'browse';

  
  useGodTier({
    route: pathname,
    activeTask,
    primaryIntent: 'explore',
    nextLikelyRoutes: [],
  });

  
  return null;
}
