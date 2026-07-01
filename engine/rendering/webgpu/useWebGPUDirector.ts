'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
    WebGPUDirector,
    applyDirectorFrame,
    buildSceneObjects,
    type CameraSignals,
    type CameraState,
    type DirectorBabylonEngine,
    type DirectorBabylonMesh,
    type DirectorBabylonScene,
    type DirectorFrame,
    type MeshHints,
    type RuntimeMetrics,
} from './director';





type BabylonPerformanceMonitor = {
  averageFrameTime: number;
};

type BabylonEngineWithMonitor = DirectorBabylonEngine & {
  performanceMonitor?: BabylonPerformanceMonitor | null;
};

type BabylonSceneWithMeshes = DirectorBabylonScene & {
  meshes: DirectorBabylonMesh[];
};

export interface UseWebGPUDirectorOptions {
  
  engineRef: React.RefObject<BabylonEngineWithMonitor | null>;

  
  sceneRef?: React.RefObject<BabylonSceneWithMeshes | null>;

  
  cameraState?: CameraState;

  
  cameraVelocity?: number;

  
  cutActive?: boolean;

  
  focusTargetId?: string;

  
  hintsResolver?: (mesh: DirectorBabylonMesh) => MeshHints;

  
  tickMs?: number;

  
  autoApply?: boolean;

  
  devicePixelRatio?: number;
}

export interface UseWebGPUDirectorReturn {
  
  frame: DirectorFrame | null;

  
  tick: () => void;
}

export function useWebGPUDirector(
  options: UseWebGPUDirectorOptions,
): UseWebGPUDirectorReturn {
  const {
    engineRef,
    sceneRef,
    cameraState     = 'browse',
    cameraVelocity  = 0,
    cutActive       = false,
    focusTargetId,
    hintsResolver,
    tickMs          = 500,
    autoApply       = false,
    devicePixelRatio = 1,
  } = options;

  const directorRef        = useRef(new WebGPUDirector());
  const lastVisibleSetRef  = useRef(new Set<string>());
  const [frame, setFrame]  = useState<DirectorFrame | null>(null);

  const runTick = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;

    
    const perf = (engine as BabylonEngineWithMonitor).performanceMonitor;
    const avgFrameMs = perf?.averageFrameTime ?? 16.6;

    const metrics: RuntimeMetrics = {
      frameMs:           avgFrameMs,
      avgFrameMs,
      gpuMs:             avgFrameMs * 0.55,
      cpuMs:             avgFrameMs * 0.30,
      droppedFrameRatio: avgFrameMs > 20 ? (avgFrameMs - 20) / 30 : 0,
      uploadMs:          avgFrameMs * 0.10,
    };

    
    const camera: CameraSignals = {
      state:         cameraState,
      velocity:      cameraVelocity,
      cutActive,
      focusTargetId,
    };

    
    const scene  = sceneRef?.current;
    const meshes = scene?.meshes ?? [];

    const objects = buildSceneObjects(
      meshes,
      hintsResolver ?? (() => ({})),
      lastVisibleSetRef.current,
    );

    
    lastVisibleSetRef.current = new Set(
      meshes.filter((m) => m.isVisible).map((m) => m.id),
    );

    const newFrame = directorRef.current.update({ metrics, camera, objects });
    setFrame(newFrame);

    
    if (autoApply && scene) {
      applyDirectorFrame(engine, scene, newFrame, devicePixelRatio);
    }
  }, [
    engineRef, sceneRef,
    cameraState, cameraVelocity, cutActive, focusTargetId,
    hintsResolver, autoApply, devicePixelRatio,
  ]);

  
  useEffect(() => {
    
    runTick();

    const id = window.setInterval(runTick, tickMs);
    return () => window.clearInterval(id);
  }, [runTick, tickMs]);

  return { frame, tick: runTick };
}

export {
    WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals,
    defaultDirectorMetrics, type CameraSignals,
    type CameraState,
    type DirectorFrame,
    type MeshHints,
    type RuntimeMetrics
} from './director';
