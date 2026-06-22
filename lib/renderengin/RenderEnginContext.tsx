"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  RenderEnginBackend,
  RenderEnginManifest,
  RenderEnginRegistration,
  RenderEnginRuntimeHooks,
  RenderEnginSurfaceSnapshot,
} from "./types";

const OWNER_ID = "renderengin";
const RUNTIME_ID = "renderengin-root";

const RENDER_ENGIN_MANIFEST: RenderEnginManifest = {
  id: "renderengin.manifest.root",
  type: "renderengin.manifest",
  ownerId: OWNER_ID,
  runtimeId: RUNTIME_ID,
  visibility: "global",
  createdAt: "2026-06-22T00:00:00.000Z",
  updatedAt: "2026-06-22T00:00:00.000Z",
  version: 1,
  data: {
    schemaVersion: "1.0.0",
    supportedBackends: ["canvas2d", "dom", "webgpu", "babylon"],
    requiredHooks: ["mount", "resize", "render", "snapshot", "dispose"],
    compatibility: {
      minDevicePixelRatio: 1,
      maxDevicePixelRatio: 3,
      reducedMotion: "honor-system",
    },
  },
};

type InternalSurface = RenderEnginRegistration & {
  backend: RenderEnginBackend;
  mounted: boolean;
  frame: number;
  width: number;
  height: number;
  updatedAt: string;
};

type RenderEnginContextValue = RenderEnginRuntimeHooks & {
  manifest: RenderEnginManifest;
  negotiateBackend(preferred?: RenderEnginBackend): RenderEnginBackend;
  surfaces: readonly RenderEnginSurfaceSnapshot[];
};

const RenderEnginContext = createContext<RenderEnginContextValue | null>(null);

function validateManifest(manifest: RenderEnginManifest): boolean {
  return (
    manifest.type === "renderengin.manifest" &&
    manifest.data.schemaVersion === "1.0.0" &&
    manifest.data.supportedBackends.includes("canvas2d") &&
    manifest.data.requiredHooks.join("|") ===
      "mount|resize|render|snapshot|dispose"
  );
}

function toSnapshot(surface: InternalSurface): RenderEnginSurfaceSnapshot {
  return {
    id: `renderengin.surface.${surface.surfaceId}`,
    type: "renderengin.surface",
    ownerId: OWNER_ID,
    runtimeId: RUNTIME_ID,
    visibility: "local",
    createdAt: surface.updatedAt,
    updatedAt: surface.updatedAt,
    version: surface.frame + 1,
    data: {
      surfaceId: surface.surfaceId,
      label: surface.label,
      layer: surface.layer,
      accentColor: surface.accentColor,
      backend: surface.backend,
      mounted: surface.mounted,
      frame: surface.frame,
      width: surface.width,
      height: surface.height,
    },
  };
}

export function RenderEnginProvider({ children }: { children: ReactNode }) {
  if (!validateManifest(RENDER_ENGIN_MANIFEST)) {
    throw new Error("RenderEngin manifest failed validation");
  }

  const surfacesRef = useRef(new Map<string, InternalSurface>());
  const [, forceVersion] = useState(0);

  const force = useCallback(() => forceVersion((v) => v + 1), []);

  const negotiateBackend = useCallback(
    (preferred?: RenderEnginBackend): RenderEnginBackend => {
      if (
        preferred &&
        RENDER_ENGIN_MANIFEST.data.supportedBackends.includes(preferred)
      ) {
        if (
          preferred === "webgpu" &&
          typeof navigator !== "undefined" &&
          !("gpu" in navigator)
        ) {
          return "canvas2d";
        }
        return preferred;
      }
      return "canvas2d";
    },
    [],
  );

  const mount = useCallback<RenderEnginRuntimeHooks["mount"]>(
    (surface) => {
      const now = new Date().toISOString();
      const current = surfacesRef.current.get(surface.surfaceId);
      surfacesRef.current.set(surface.surfaceId, {
        ...surface,
        backend: negotiateBackend(surface.preferredBackend),
        mounted: true,
        frame: current?.frame ?? 0,
        width: current?.width ?? 0,
        height: current?.height ?? 0,
        updatedAt: now,
      });
      force();
    },
    [force, negotiateBackend],
  );

  const resize = useCallback<RenderEnginRuntimeHooks["resize"]>(
    (surfaceId, width, height) => {
      const current = surfacesRef.current.get(surfaceId);
      if (!current) return;
      surfacesRef.current.set(surfaceId, {
        ...current,
        width,
        height,
        updatedAt: new Date().toISOString(),
      });
      force();
    },
    [force],
  );

  const render = useCallback<RenderEnginRuntimeHooks["render"]>((surfaceId) => {
    const current = surfacesRef.current.get(surfaceId);
    if (!current) return;
    surfacesRef.current.set(surfaceId, {
      ...current,
      frame: current.frame + 1,
      updatedAt: new Date().toISOString(),
    });
  }, []);

  const snapshot = useCallback<RenderEnginRuntimeHooks["snapshot"]>(
    (surfaceId) => {
      const current = surfacesRef.current.get(surfaceId);
      return current ? toSnapshot(current) : null;
    },
    [],
  );

  const dispose = useCallback<RenderEnginRuntimeHooks["dispose"]>(
    (surfaceId) => {
      const current = surfacesRef.current.get(surfaceId);
      if (!current) return;
      surfacesRef.current.set(surfaceId, {
        ...current,
        mounted: false,
        updatedAt: new Date().toISOString(),
      });
      force();
    },
    [force],
  );

  const surfaces = Array.from(surfacesRef.current.values()).map(toSnapshot);

  const value = useMemo<RenderEnginContextValue>(
    () => ({
      manifest: RENDER_ENGIN_MANIFEST,
      negotiateBackend,
      surfaces,
      mount,
      resize,
      render,
      snapshot,
      dispose,
    }),
    [dispose, mount, negotiateBackend, render, resize, snapshot, surfaces],
  );

  return (
    <RenderEnginContext.Provider value={value}>
      {children}
    </RenderEnginContext.Provider>
  );
}

export function useRenderEngin() {
  const ctx = useContext(RenderEnginContext);
  if (!ctx)
    throw new Error("useRenderEngin must be used inside RenderEnginProvider");
  return ctx;
}
