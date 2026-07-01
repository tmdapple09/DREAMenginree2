'use client';

import DrEamsPanel from '@/components/dreamengin/dream.panel.DrEamsPanel';
import DualBottomMenu, { type SystemMenuAction } from '@/components/menus/dream.menu.DualBottomMenu';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import { runHomeAction } from '@/coresurfaces/home/buttons/contextual-home';
import { isPublicSurfacePath } from '@/engine/routing/surfaces';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';



export default function GlobalDreamBar( ){
  const pathname = usePathname();
  const router = useRouter();

  const {
    bothMenusOpen,
    closeBothMenus,
    drEamsOpen,
    openDrEams,
    closeDrEams,
    runtimeCallbacks,
    openInSurface,
    openInDominant,
    splitRatio,
    setFocus,
  } = useDreamSystem();

  const handleHome = useCallback(() => {
    closeBothMenus();
    closeDrEams();
    
    setFocus('home');
    
    
    
    
    
    const fired = runHomeAction(splitRatio, runtimeCallbacks);
    if (!fired) {
      
      router.push('/dreamdmbar');
    }
  }, [closeBothMenus, closeDrEams, setFocus, runtimeCallbacks, router, splitRatio]);

  

  const handleSystemAction = useCallback((action: SystemMenuAction) => {
    
    
    
    
    if (action === 'dr-eams')       { openDrEams(); return; }
    if (action === 'go-home')       { handleHome(); return; }
    if (action === 'logout')        { window.location.assign('/api/auth/logout'); return; }

    
    
    
    const hasSpaCallbacks = Boolean(runtimeCallbacks?.openInSurface);
    if (action === 'settings')      { hasSpaCallbacks ? openInSurface('settings')            : router.push('/settings');              return; }
    if (action === 'account')       { hasSpaCallbacks ? openInSurface('profile')             : router.push('/edit-profiledream');     return; }
    if (action === 'profiles')      { hasSpaCallbacks ? openInSurface('profile')             : router.push('/edit-profiledream');     return; }
    if (action === 'feed-settings') { hasSpaCallbacks ? openInSurface('feed-settings')       : router.push('/feed-settings');         return; }
    if (action === 'connectors')    { hasSpaCallbacks ? openInSurface('connectors')          : router.push('/connectors');            return; }
    if (action === 'marketplace')   { hasSpaCallbacks ? openInSurface('marketplace')         : router.push('/marketplace');           return; }
    if (action === 'appearance')    { hasSpaCallbacks ? openInSurface('settings/appearance') : router.push('/settings/appearance');   return; }
  }, [openDrEams, handleHome, openInSurface, runtimeCallbacks, router]);

  if (isPublicSurfacePath(pathname)) return null;

  return (
    <>
      <DualBottomMenu
        open={bothMenusOpen}
        onClose={closeBothMenus}
        onSystemAction={handleSystemAction}
        onOpenDaydream={(route) => {
          if (runtimeCallbacks?.openInDominant) openInDominant(route);
          else router.push(route);
        }}
      />

      {drEamsOpen && <DrEamsPanel onClose={closeDrEams} />}
    </>
  );
}
