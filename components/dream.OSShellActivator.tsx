'use client';

import { useDualRuntime } from '@/components/runtime/dream.DualRuntimeContainer';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import { DIVIDER_H } from '@/dreamdmbar/runtime/barInteractions';
import type { SystemPanelId } from '@/components/panels/panelTypes';
import { isPublicSurfacePath } from '@/engine/routing/surfaces';
import { EnginDispatcher } from '@/engine/runtime/EnginDispatcher';
import { dreamOSBus } from '@/engine/runtime/dreamOSBus';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';



const DEFAULT_WORKFLOW_SPLIT = 0.5;


const OWN_BRIDGE_ROUTES = new Set<string>();

export default function OSShellActivator( ){
  const pathname = usePathname();
  const dualRuntime = useDualRuntime();
  const {
    registerRuntimeCallbacks,
    unregisterRuntimeCallbacks,
    closeBothMenus,
    closeDrEams,
    splitRatio,
    setSplitRatio,
    isBarMinimized,
    setIsBarMinimized,
    homeData,
  } = useDreamSystem();

  const skip =
    isPublicSurfacePath(pathname) ||
    OWN_BRIDGE_ROUTES.has(pathname ?? '') ||
    !homeData?.userId;

  
  

  const revealSplitRuntime = useCallback(
    (nextRatio = DEFAULT_WORKFLOW_SPLIT) => {
      setIsBarMinimized(false);
      setSplitRatio((current) => {
        if (current >= 0.98 || current <= 0.02) return nextRatio;
        return current;
      });
    },
    [setIsBarMinimized, setSplitRatio],
  );

  const returnHome = useCallback(() => {
    dualRuntime.goToHome();
    revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
    closeBothMenus();
    closeDrEams();
  }, [closeBothMenus, closeDrEams, dualRuntime, revealSplitRuntime]);

  const openHomeDreamSpace = useCallback(() => {
    dualRuntime.goToHomeDreamSpace();
    revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
  }, [dualRuntime, revealSplitRuntime]);

  const returnDreamSpace = useCallback(() => {
    dualRuntime.setBottomRuntime('DreamSpace');
    dualRuntime.setDominantRuntime('DreamSpace');
    setIsBarMinimized(false);
    setSplitRatio((current) => (current >= 0.5 ? 0.25 : current));
    closeBothMenus();
    closeDrEams();
  }, [closeBothMenus, closeDrEams, dualRuntime, setIsBarMinimized, setSplitRatio]);

  const openInSurface = useCallback(
    (id: SystemPanelId) => {
      dualRuntime.setTopRuntime({ type: 'panel', name: id });
      revealSplitRuntime(Math.max(splitRatio, 0.5));
    },
    [dualRuntime, revealSplitRuntime, splitRatio],
  );

  useEffect(() => {
    if (skip) return;
    registerRuntimeCallbacks({
      returnHome,
      openInSurface,
      openHomeDreamSpace,
      returnDreamSpace,
    });
    return unregisterRuntimeCallbacks;
  }, [
    skip,
    openHomeDreamSpace,
    openInSurface,
    registerRuntimeCallbacks,
    returnDreamSpace,
    returnHome,
    unregisterRuntimeCallbacks,
  ]);

  
  useEffect(() => {
    if (skip) return;
    if (splitRatio >= 0.55) {
      dualRuntime.setDominantRuntime('Surface Space');
      return;
    }
    if (splitRatio <= 0.45) {
      dualRuntime.setDominantRuntime('DreamSpace');
    }
  }, [skip, dualRuntime, splitRatio]);

  
  useEffect(() => {
    if (skip) return;
    dreamOSBus.publishRuntimeContext({
      region: 'Surface Space',
      world: dualRuntime.state.surfaceSpaceWorld,
      splitRatio,
      dominant: dualRuntime.state.dominantRegion === 'Surface Space',
    });
    dreamOSBus.publishRuntimeContext({
      region: 'DreamSpace',
      world: dualRuntime.state.dreamSpaceWorld,
      splitRatio: 1 - splitRatio,
      dominant: dualRuntime.state.dominantRegion === 'DreamSpace',
    });
  }, [
    skip,
    dualRuntime.state.dominantRegion,
    dualRuntime.state.dreamSpaceWorld,
    dualRuntime.state.surfaceSpaceWorld,
    splitRatio,
  ]);

  
  useEffect(() => {
    if (skip) return;
    const dispatcher = EnginDispatcher.getInstance();
    const updateSeam = () => {
      const vh = window.innerHeight;
      const dividerHeight = isBarMinimized ? 0 : DIVIDER_H;
      const seamY = Math.round((vh - dividerHeight) * splitRatio + dividerHeight / 2);
      dispatcher.setDreamDMBarY(seamY);
    };
    updateSeam();
    window.addEventListener('resize', updateSeam);
    return () => window.removeEventListener('resize', updateSeam);
  }, [skip, isBarMinimized, splitRatio]);

  return null;
}
