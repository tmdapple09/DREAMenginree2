'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SpatialNavigationEngine } from './SpatialNavigationEngine';
import type { WidgetInstanceRecord } from './WidgetInstanceMemory';




export interface UseNavigationOptions {
  enablePersistence?: boolean;
  widgets?: WidgetInstanceRecord[];
}

export interface NavigationState {
  layer: number;
  face: number;
  slot: number;
  depth: number;
}


export function useNavigation(options: UseNavigationOptions = {}) {
  const engineRef = useRef<SpatialNavigationEngine | null>(null);
  const [navState, setNavState] = useState<NavigationState>({
    layer: 0,
    face: 0,
    slot: -1,
    depth: 0,
  });
  const [isReady, setIsReady] = useState(false);

  
  useEffect(() => {
    const engine = new SpatialNavigationEngine({
      element: document,
      enablePersistence: options.enablePersistence,
    });

    
    if (options.widgets) {
      engine.getWidgetMemory().initialize(options.widgets);
    }

    
    if (options.enablePersistence) {
      engine.restore();
    }

    
    const handleNavChange = (data: unknown) => {
      const snapshot = (data as { state: Int32Array }).state;
      setNavState({
        layer: snapshot[0],
        face: snapshot[1],
        slot: snapshot[2],
        depth: snapshot[3],
      });
    };

    engine.on('navchange', handleNavChange);

    
    engine.start();
    engineRef.current = engine;
    setIsReady(true);

    return () => {
      engine.stop();
      engine.off('navchange', handleNavChange);
    };
  }, [options.enablePersistence]);

  
  useEffect(() => {
    if (engineRef.current && options.widgets) {
      engineRef.current.getWidgetMemory().initialize(options.widgets);
    }
  }, [options.widgets]);

  
  const goHome = useCallback(() => {
    engineRef.current?.homeAnchorInterrupt();
  }, []);

  
  const switchToProfile = useCallback(() => {
    engineRef.current?.getWidgetMemory().switchToProfile();
  }, []);

  
  const switchToHome = useCallback(() => {
    engineRef.current?.getWidgetMemory().switchToHome();
  }, []);

  
  const getActiveWidgets = useCallback(() => {
    return engineRef.current?.getWidgetMemory().getActiveWidgets() || [];
  }, []);

  return {
    navState,
    isReady,
    engine: engineRef.current,
    goHome,
    switchToProfile,
    switchToHome,
    getActiveWidgets,
  };
}
