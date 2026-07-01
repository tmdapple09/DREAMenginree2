'use client';

import NeuralSeamCanvas from '@/components/home/dream.NeuralSeamCanvas';
import { useDualRuntime } from '@/components/runtime/dream.DualRuntimeContainer';
import RuntimeView from '@/components/runtime/dream.RuntimeView';
import DreamDMBar from '@/dreamdmbar/dreamsurface.dreamdmbar';
import { useDreamLayout } from '@/hooks/useDreamLayout';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import { DIVIDER_H } from '@/dreamdmbar/runtime/barInteractions';
import { useOS } from '@/engine/os/OSContext';
import { parseDreamDragData, surfaceForRuntime, transferDream, type DreamRuntime } from '@/engine/dreams/drag';
import { isPublicSurfacePath } from '@/engine/routing/surfaces';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

type Post = { id: string; content?: string; created_at?: string; [key: string]: unknown };



const DEFAULT_WORKFLOW_SPLIT = 0.5;

export default function PersistentDreamBar( ){
  const pathname    = usePathname();
  const dualRuntime = useDualRuntime();
  const {
    openBothMenus,
    openDrEams,
    runtimeCallbacks,
    splitRatio,
    setSplitRatio,
    isBarMinimized,
    setIsBarMinimized,
    homeData,
  } = useDreamSystem();

  const [viewportHeight, setViewportHeight] = useState(0);
  const os = useOS();
  const { layout, updateDreamLayout } = useDreamLayout();

  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const revealSplitRuntime = useCallback((nextRatio = DEFAULT_WORKFLOW_SPLIT) => {
    setIsBarMinimized(false);
    setSplitRatio((current) => {
      if (current >= 0.98 || current <= 0.02) return nextRatio;
      return current;
    });
  }, [setIsBarMinimized, setSplitRatio]);

  const handleHomeDreamSpace = useCallback(() => {
    if (runtimeCallbacks?.openHomeDreamSpace) {
      runtimeCallbacks.openHomeDreamSpace();
    } else {
      dualRuntime.goToHomeDreamSpace();
      revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
    }
  }, [runtimeCallbacks, dualRuntime, revealSplitRuntime]);

  const openDreamSpaceInSurface = useCallback(() => {
    dualRuntime.goToDreamSpace();
    revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
  }, [dualRuntime, revealSplitRuntime]);

  const openInSurfaceRegion = useCallback((path: string) => {
    dualRuntime.setTopRuntime({ type: 'custom', path });
    revealSplitRuntime(Math.max(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const openEnginInSurfaceRegion = useCallback((enginName: string) => {
    dualRuntime.setTopRuntime({ type: 'engin', name: enginName });
    revealSplitRuntime(Math.max(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const backFromSurfaceRegion = useCallback(() => {
    dualRuntime.setTopRuntime('HomeDream Surface');
  }, [dualRuntime]);

  const openInDreamRegion = useCallback((path: string) => {
    dualRuntime.setBottomRuntime({ type: 'custom', path });
    revealSplitRuntime(Math.min(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const openEnginInDreamRegion = useCallback((enginName: string) => {
    dualRuntime.setBottomRuntime({ type: 'engin', name: enginName });
    revealSplitRuntime(Math.min(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const backFromDreamRegion = useCallback(() => {
    dualRuntime.setBottomRuntime('DreamSpace');
  }, [dualRuntime]);

  const handleDreamDrop = useCallback((event: React.DragEvent<HTMLDivElement>, toRuntime: DreamRuntime) => {
    const raw = event.dataTransfer.getData('application/x-dreamengin-dream')
      || event.dataTransfer.getData('text/plain');
    const dreamData = parseDreamDragData(raw);
    if (!dreamData) return;
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const position = { x: Math.round(event.clientX - rect.left), y: Math.round(event.clientY - rect.top) };
    const toSurface = surfaceForRuntime(toRuntime);
    const fromRuntime = dreamData.runtime;
    void transferDream({ ...dreamData, runtime: toRuntime, surface: toSurface, position }, fromRuntime, toRuntime, position);
    os.bus.emit('dream:transfer', { dreamData, fromRuntime, toRuntime, position });
    const fromSurface = dreamData.surface;
    const nextLayout = {
      home: { dreams: layout.home.dreams.filter((id) => id !== dreamData.dream_id) },
      dreamspace: { dreams: layout.dreamspace.dreams.filter((id) => id !== dreamData.dream_id) },
    };
    nextLayout[toSurface].dreams = [...nextLayout[toSurface].dreams, dreamData.dream_id];
    if (fromSurface !== toSurface) {
      updateDreamLayout(nextLayout);
    }
  }, [layout, os.bus, updateDreamLayout]);

  const swapDreamRuntimes = useCallback(() => {
    const previousLayout = {
      home: { dreams: [...layout.home.dreams] },
      dreamspace: { dreams: [...layout.dreamspace.dreams] },
      hidden: layout.hidden ? [...layout.hidden] : [],
    };
    const nextLayout = {
      home: { dreams: layout.dreamspace.dreams },
      dreamspace: { dreams: layout.home.dreams },
      hidden: layout.hidden ?? [],
    };
    updateDreamLayout(nextLayout, 0);
    os.bus.emit('dream:transfer', {
      gesture: 'swap-runtimes',
      home: nextLayout.home.dreams,
      dreamspace: nextLayout.dreamspace.dreams,
    });
    window.dispatchEvent(new CustomEvent('dream:transfer', {
      detail: { gesture: 'swap-runtimes', home: nextLayout.home.dreams, dreamspace: nextLayout.dreamspace.dreams },
    }));
    void fetch('/api/dreams/transfer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dreamData: { dream_id: '__swap__', type: 'runtime-swap' }, fromRuntime: 'HOME', toRuntime: 'FACE', swap: true }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Runtime swap failed');
      })
      .catch((error: unknown ) => {
        updateDreamLayout(previousLayout, 0);
        os.bus.emit('dream:transfer:rollback', previousLayout);
        console.error('[Dream runtime swap]', error);
      });
  }, [layout.dreamspace.dreams, layout.hidden, layout.home.dreams, os.bus, updateDreamLayout]);

  
  if (isPublicSurfacePath(pathname)) {
    return null;
  }

  
  
  
  
  
  
  
  
  
  const isHomeRoute =
    pathname === '/homedream' ||
    pathname.startsWith('/homedream/') ||
    pathname === '/dreamdmbar' ||
    pathname.startsWith('/dreamdmbar/');
  const isHomeActive = runtimeCallbacks !== null || isHomeRoute;

  
  
  
  
  const dividerHeight   = isBarMinimized ? 0 : DIVIDER_H;
  const runtimeSplitRatio = splitRatio;
  const topHeight       = `calc((100% - ${dividerHeight}px) * ${runtimeSplitRatio})`;
  const bottomRegionTop = `calc(${topHeight} + ${dividerHeight}px)`;
  const bottomHeight    = `calc(100% - ${bottomRegionTop})`;
  const seamOffset      = viewportHeight > 0
    ? Math.round(((viewportHeight - dividerHeight) * runtimeSplitRatio) + dividerHeight / 2)
    : undefined;

  return (
    <>
      <NeuralSeamCanvas active={isHomeActive} splitRatio={splitRatio} />

      
      <div
        style={{
          display: isHomeActive ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: topHeight,
          zIndex: 1,
          overflow: 'hidden',
          borderBottom: isBarMinimized ? '1px solid rgba(93,232,255,0.12)' : 'none',
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDreamDrop(event, 'HOME')}
      >
        {(homeData || isHomeRoute) && (
          <RuntimeView
            world={dualRuntime.state.surfaceSpaceWorld}
            isActive={true}
            userId={homeData?.userId}
            profile={homeData?.profile ?? null}
            posts={(homeData?.initialPosts ?? []) as Post[]}
            isAdmin={homeData?.isAdmin ?? false}
            onOpenDrEams={openDrEams}
            onOpenDreamSpace={openDreamSpaceInSurface}
            onOpenInRegion={openInSurfaceRegion}
            onOpenEngin={openEnginInSurfaceRegion}
            runtimeId="homedream"
            onBackFromRegion={backFromSurfaceRegion}
            seamOffsetPx={seamOffset}
            splitRatio={runtimeSplitRatio}
            seamVisible={!isBarMinimized}
            dominantRegion={dualRuntime.state.dominantRegion}
          />
        )}
      </div>

      
      {isHomeActive && !isBarMinimized && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: topHeight,
            height: dividerHeight,
            zIndex: 1,
            pointerEvents: 'none',
            background: 'var(--de-surface-space-bg, #f0f4fb)',
          }}
        />
      )}

      
      <DreamDMBar
        onBothMenus={openBothMenus}
        splitRatio={isHomeActive ? splitRatio : undefined}
        onSplitChange={isHomeActive ? setSplitRatio : undefined}
        onMinimizedChange={isHomeActive ? setIsBarMinimized : undefined}
        onSwapRuntimes={isHomeActive ? swapDreamRuntimes : undefined}
      />

      
      <div
        style={{
          display: isHomeActive ? 'block' : 'none',
          position: 'fixed',
          left: 0,
          right: 0,
          top: bottomRegionTop,
          height: bottomHeight,
          zIndex: 1,
          overflow: 'hidden',
          borderTop: isBarMinimized ? '1px solid rgba(232,192,64,0.1)' : 'none',
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDreamDrop(event, 'FACE')}
      >
        {(homeData || isHomeRoute) && (
          <RuntimeView
            world={dualRuntime.state.dreamSpaceWorld}
            isActive={true}
            userId={homeData?.userId}
            profile={homeData?.profile ?? null}
            posts={(homeData?.initialPosts ?? []) as Post[]}
            isAdmin={homeData?.isAdmin ?? false}
            onOpenDrEams={openDrEams}
            onOpenDreamSpace={handleHomeDreamSpace}
            onOpenInRegion={openInDreamRegion}
            onOpenEngin={openEnginInDreamRegion}
            runtimeId="dreamspace"
            onBackFromRegion={backFromDreamRegion}
            seamOffsetPx={seamOffset}
            splitRatio={runtimeSplitRatio}
            seamVisible={!isBarMinimized}
            dominantRegion={dualRuntime.state.dominantRegion}
          />
        )}
      </div>
    </>
  );
}


export const DreamDMContainer = PersistentDreamBar;
