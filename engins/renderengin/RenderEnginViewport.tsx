'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import {
  composeModelMatrix,
  createMeshBuffers,
  createRenderAsset,
  mat4LookAt,
  mat4Perspective,
  type MeshBuffers,
  type Vec2,
  type Vec3,
} from './core';
import { createParsedGlbRenderAsset, createParsedObjRenderAsset, estimateRenderAssetMemory, type ParsedRenderAsset } from './assets';
import {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginFrameStats,
} from './webgpu';
import type { RenderIntent } from './core';
import type { RenderServiceIntentEnvelope } from './serviceRuntime';

interface RenderViewportProps {
  runtime?: EnginRuntime<RenderIntent>;
  incomingIntent?: RenderServiceIntentEnvelope | null;
}

type VertexInput = { position: Vec3; normal: Vec3; uv: Vec2 };

type GridPreviewTile = 'empty' | 'ground' | 'wall' | 'water' | 'spawn' | string;

type GridPreview = GridPreviewTile[][];

function createDemoTriangle(): MeshBuffers {
  return createMeshBuffers([
    { position: [0, 0.75, 0], normal: [0, 0, 1], uv: [0.5, 1] },
    { position: [-0.75, -0.65, 0], normal: [0, 0, 1], uv: [0, 0] },
    { position: [0.75, -0.65, 0], normal: [0, 0, 1], uv: [1, 0] },
  ], [0, 1, 2]);
}

function orbitEye(azimuth: number, elevation: number, zoom: number): Vec3 {
  const safeElevation = Math.max(-1.25, Math.min(1.25, elevation));
  return [
    Math.sin(azimuth) * Math.cos(safeElevation) * zoom,
    Math.sin(safeElevation) * zoom,
    Math.cos(azimuth) * Math.cos(safeElevation) * zoom,
  ];
}

function sanitizeIdPart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9:_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'asset';
}

function drawFallbackScene(canvas: HTMLCanvasElement, label: string): void {
  const context = canvas.getContext('2d');
  if (!context) return;
  const width = canvas.width;
  const height = canvas.height;
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#eff6ff');
  gradient.addColorStop(1, '#fef3c7');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = '#38bdf8';
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(width * 0.5, height * 0.18);
  context.lineTo(width * 0.22, height * 0.78);
  context.lineTo(width * 0.78, height * 0.78);
  context.closePath();
  context.stroke();
  context.fillStyle = 'rgba(56, 189, 248, 0.14)';
  context.fill();
  context.fillStyle = '#0f172a';
  context.font = '700 18px system-ui, sans-serif';
  context.fillText(label, 24, 36);
}

function isGridPreview(value: unknown): value is GridPreview {
  return Array.isArray(value) && value.every((row) => Array.isArray(row) && row.every((tile) => typeof tile === 'string'));
}

function tileHeight(tile: GridPreviewTile): number {
  if (tile === 'wall') return 0.65;
  if (tile === 'spawn') return 0.32;
  if (tile === 'water') return 0.08;
  if (tile === 'empty') return 0;
  return 0.18;
}

function createGridPreviewMesh(grid: GridPreview): MeshBuffers {
  const vertices: VertexInput[] = [];
  const indices: number[] = [];
  const rows = grid.length;
  const cols = Math.max(1, ...grid.map((row) => row.length));
  const tileSize = 0.24;
  const originX = -(cols * tileSize) / 2;
  const originZ = -(rows * tileSize) / 2;

  const pushQuad = (a: Vec3, b: Vec3, c: Vec3, d: Vec3, normal: Vec3) => {
    const base = vertices.length;
    vertices.push(
      { position: a, normal, uv: [0, 0] },
      { position: b, normal, uv: [1, 0] },
      { position: c, normal, uv: [1, 1] },
      { position: d, normal, uv: [0, 1] },
    );
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };

  const pushBox = (x0: number, z0: number, x1: number, z1: number, height: number) => {
    const y0 = 0;
    const y1 = height;
    pushQuad([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], [0, 1, 0]);
    pushQuad([x0, y0, z1], [x1, y0, z1], [x1, y0, z0], [x0, y0, z0], [0, -1, 0]);
    pushQuad([x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1], [-1, 0, 0]);
    pushQuad([x1, y0, z1], [x1, y1, z1], [x1, y1, z0], [x1, y0, z0], [1, 0, 0]);
    pushQuad([x0, y0, z1], [x0, y1, z1], [x1, y1, z1], [x1, y0, z1], [0, 0, 1]);
    pushQuad([x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z0], [0, 0, -1]);
  };

  grid.forEach((row, rowIndex) => {
    row.forEach((tile, colIndex) => {
      const height = tileHeight(tile);
      if (height <= 0) return;
      const x0 = originX + colIndex * tileSize;
      const z0 = originZ + rowIndex * tileSize;
      pushBox(x0, z0, x0 + tileSize * 0.9, z0 + tileSize * 0.9, height);
    });
  });

  if (!vertices.length) return createDemoTriangle();
  return createMeshBuffers(vertices, indices);
}

export default function RenderEnginViewport({ runtime, incomingIntent }: RenderViewportProps): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const rendererRef = useRef<WebGpuRenderEngin | null>(null);
  const sceneObjectRef = useRef<ReturnType<WebGpuRenderEngin['createSceneObject']> | null>(null);
  const runtimeRef = useRef(runtime);
  const lastFrameTelemetryAtRef = useRef(0);
  const processedIntentIdsRef = useRef(new Set<string>());
  const activeAssetLabelRef = useRef('Demo triangle');
  const activeObjectIdRef = useRef('object:demo-triangle');
  const [status, setStatus] = useState('Checking browser WebGPU support…');
  const [stats, setStats] = useState<RenderEnginFrameStats | null>(null);
  const [camera, setCamera] = useState({ azimuth: 0, elevation: 0, zoom: 2.4 });
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>('object:demo-triangle');
  const [assetInfo, setAssetInfo] = useState('Demo triangle loaded');
  const pointerRef = useRef<{ id: number; x: number; y: number; mode: 'orbit' | 'pan' } | null>(null);
  const sceneMeshRef = useRef<MeshBuffers>(createDemoTriangle());
  const cameraEyeRef = useRef<Vec3>(orbitEye(0, 0, 2.4));

  useEffect(() => { runtimeRef.current = runtime; }, [runtime]);

  const applyCurrentScene = useCallback((width?: number, height?: number) => {
    const renderer = rendererRef.current;
    const object = sceneObjectRef.current;
    const canvas = canvasRef.current;
    if (!renderer || !object || !canvas) return;
    const nextWidth = Math.max(1, width ?? canvas.width);
    const nextHeight = Math.max(1, height ?? canvas.height);
    const cameraEye = cameraEyeRef.current;
    renderer.setScene({
      viewMatrix: mat4LookAt(cameraEye, [0, 0.2, 0], [0, 1, 0]),
      projectionMatrix: mat4Perspective(Math.PI / 3, nextWidth / nextHeight, 0.1, 100),
      cameraPosition: cameraEye,
      lightDirection: [0.25, -0.65, -1],
      objects: [object],
    });
  }, []);

  const loadMeshIntoViewport = useCallback((mesh: MeshBuffers, meta: { assetId: string; name: string; source: string; ownerId?: string; runtimeId?: string }) => {
    const ownerId = meta.ownerId ?? 'local-user';
    const runtimeId = meta.runtimeId ?? 'render:shared-service';
    const objectId = `object:${sanitizeIdPart(meta.assetId)}`;
    sceneMeshRef.current = mesh;
    activeAssetLabelRef.current = meta.name;
    activeObjectIdRef.current = objectId;
    setSelectedObjectId(objectId);
    const memory = estimateRenderAssetMemory(mesh);
    const asset = createRenderAsset({ id: meta.assetId, ownerId, runtimeId, visibility: 'local', mesh, material: { albedo: [0.58, 0.72, 0.95], orm: [1, 0.55, 0] } });
    const renderer = rendererRef.current;
    if (renderer) {
      renderer.disposeScene();
      const gpuMesh = renderer.uploadMesh(mesh);
      sceneObjectRef.current = renderer.createSceneObject(gpuMesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]));
      applyCurrentScene();
    }
    runtimeRef.current?.dispatch({ type: 'render.asset.register', payload: { asset, memory, source: meta.source } });
    runtimeRef.current?.dispatch({ type: 'render.asset.load', payload: { id: meta.assetId, progress: 1, status: 'loaded', memory, source: meta.source } });
    runtimeRef.current?.dispatch({ type: 'render.scene.load', payload: { scene: { objectCount: 1, source: meta.source, selectedObjectId: objectId, assetId: meta.assetId } } });
    setAssetInfo(`${meta.name} · ${mesh.vertices.length} vertices · ${mesh.indices.length} indices · ${String(memory.totalBytes)} bytes`);
  }, [applyCurrentScene]);

  const loadParsedAsset = useCallback((parsed: ParsedRenderAsset, name: string, source: string) => {
    sceneMeshRef.current = parsed.mesh;
    activeAssetLabelRef.current = name;
    const renderer = rendererRef.current;
    if (renderer) {
      renderer.disposeScene();
      const gpuMesh = renderer.uploadMesh(parsed.mesh);
      sceneObjectRef.current = renderer.createSceneObject(gpuMesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]));
      applyCurrentScene();
    }
    const memory = estimateRenderAssetMemory(parsed.mesh);
    runtimeRef.current?.dispatch({ type: 'render.asset.register', payload: { asset: parsed.asset, manifest: parsed.manifest, memory } });
    runtimeRef.current?.dispatch({ type: 'render.asset.load', payload: { id: parsed.asset.id, progress: 1, status: 'loaded', memory, source } });
    runtimeRef.current?.dispatch({ type: 'render.scene.load', payload: { scene: { objectCount: 1, source, selectedObjectId: activeObjectIdRef.current, assetId: parsed.asset.id } } });
    setAssetInfo(`${name} · ${parsed.validation.vertexCount} vertices · ${parsed.validation.indexCount} indices · ${memory.totalBytes} bytes`);
  }, [applyCurrentScene]);

  useEffect(() => {
    cameraEyeRef.current = orbitEye(camera.azimuth, camera.elevation, camera.zoom);
    applyCurrentScene();
  }, [applyCurrentScene, camera]);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    let cancelled = false;

    async function boot() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      try {
        runtimeRef.current?.dispatch({ type: 'render.viewport.resize', payload: { width: canvas.width, height: canvas.height, mobile: matchMedia('(pointer: coarse)').matches } });
        const { device, adapter } = await requestWebGpuDevice();
        runtimeRef.current?.dispatch({ type: 'render.asset.preview', payload: { source: activeAssetLabelRef.current, adapter: adapter.info?.description ?? 'WebGPU adapter' } });
        if (cancelled) return;
        const pixelRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
        canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
        const renderer = new WebGpuRenderEngin({ device, canvas });
        rendererRef.current = renderer;
        const mesh = renderer.uploadMesh(sceneMeshRef.current);
        const object = renderer.createSceneObject(mesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]));
        sceneObjectRef.current = object;
        runtimeRef.current?.dispatch({ type: 'render.scene.load', payload: { scene: { objectCount: 1, source: activeAssetLabelRef.current, selectedObjectId: activeObjectIdRef.current } } });
        applyCurrentScene();
        resizeObserver = new ResizeObserver(([entry]) => {
          if (!rendererRef.current) return;
          const nextRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
          const width = Math.max(1, Math.floor(entry.contentRect.width * nextRatio));
          const height = Math.max(1, Math.floor(entry.contentRect.height * nextRatio));
          canvas.width = width;
          canvas.height = height;
          rendererRef.current.resize(width, height);
          runtimeRef.current?.dispatch({ type: 'render.viewport.resize', payload: { width, height, mobile: matchMedia('(pointer: coarse)').matches } });
          applyCurrentScene(width, height);
        });
        resizeObserver.observe(canvas);
        renderer.start({
          onReady: () => setStatus('RenderEngin WebGPU viewport running'),
          onFrame: (nextStats) => {
            setStats(nextStats);
            const now = performance.now();
            if (now - lastFrameTelemetryAtRef.current >= 1000) {
              lastFrameTelemetryAtRef.current = now;
              runtimeRef.current?.dispatch({ type: 'render.frame.render', payload: { ...nextStats, telemetry: 'throttled' } });
            }
          },
          onError: (error) => setStatus(error.message),
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        runtimeRef.current?.dispatch({ type: 'render.asset.preview', payload: { status: 'fallback-2d', reason: message } });
        drawFallbackScene(canvas, '2D fallback renderer active');
        setStatus(`${message} Falling back to safe 2D preview.`);
      }
    }

    void boot();
    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      rendererRef.current?.dispose();
      rendererRef.current = null;
      sceneObjectRef.current = null;
    };
  }, [applyCurrentScene]);

  useEffect(() => {
    if (!incomingIntent || processedIntentIdsRef.current.has(incomingIntent.id)) return;
    processedIntentIdsRef.current.add(incomingIntent.id);
    const payload = incomingIntent.payload;
    try {
      if (typeof payload.objSource === 'string') {
        const fileName = typeof payload.fileName === 'string' ? payload.fileName : `${String(payload.assetId ?? 'render-handoff')}.obj`;
        const parsed = createParsedObjRenderAsset({ id: `asset:${sanitizeIdPart(fileName)}`, ownerId: String(payload.ownerId ?? 'local-user'), runtimeId: 'render:shared-service', name: fileName, source: payload.objSource });
        loadParsedAsset(parsed, fileName, incomingIntent.source);
        setStatus(`Render handoff loaded from ${incomingIntent.source}`);
        return;
      }
      if (isGridPreview(payload.worldGrid)) {
        const name = typeof payload.worldName === 'string' ? payload.worldName : 'GameEngin world';
        const mesh = createGridPreviewMesh(payload.worldGrid);
        loadMeshIntoViewport(mesh, { assetId: String(payload.assetId ?? `game-world:${sanitizeIdPart(name)}`), name, source: incomingIntent.source, ownerId: String(payload.ownerId ?? 'local-user'), runtimeId: 'render:shared-service' });
        setStatus(`Render handoff loaded from ${incomingIntent.source}`);
        return;
      }
      setAssetInfo(`${incomingIntent.source} handoff received · waiting for mesh payload · ${String(payload.assetId ?? payload.assetKind ?? incomingIntent.intentType)}`);
      setStatus('Render service intent applied; no direct mesh payload was attached.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error));
    }
  }, [incomingIntent, loadMeshIntoViewport, loadParsedAsset]);

  function updateCamera(next: typeof camera): void {
    setCamera(next);
    runtime?.dispatch({ type: 'render.camera.orbit', payload: { orbit: [next.azimuth, next.elevation], zoom: next.zoom } });
    runtime?.dispatch({ type: 'render.camera.zoom', payload: { zoom: next.zoom } });
  }

  async function importAssetFile(file: File): Promise<void> {
    if (file.name.toLowerCase().endsWith('.glb')) {
      const buffer = await file.arrayBuffer();
      const parsed = createParsedGlbRenderAsset({ id: `asset:${sanitizeIdPart(file.name)}`, ownerId: 'local-user', runtimeId: 'render:surface', name: file.name, buffer });
      loadParsedAsset(parsed, file.name, 'local-glb-import');
      return;
    }
    const source = await file.text();
    const parsed = createParsedObjRenderAsset({ id: `asset:${sanitizeIdPart(file.name)}`, ownerId: 'local-user', runtimeId: 'render:surface', name: file.name, source });
    loadParsedAsset(parsed, file.name, 'local-obj-import');
  }

  function captureSnapshot(): void {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    runtime?.dispatch({ type: 'render.viewport.snapshot', payload: { dataUrl, width: canvas.width, height: canvas.height } });
    setAssetInfo(`Snapshot captured · ${canvas.width}×${canvas.height}`);
  }

  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button type="button" onClick={() => updateCamera({ azimuth: 0, elevation: 0, zoom: 2.4 })} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Reset camera</button>
        <button type="button" onClick={() => updateCamera({ ...camera, zoom: Math.max(0.8, camera.zoom - 0.3) })} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Zoom in</button>
        <button type="button" onClick={() => updateCamera({ ...camera, zoom: Math.min(12, camera.zoom + 0.3) })} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Zoom out</button>
        <button type="button" onClick={() => { const objectId = activeObjectIdRef.current; setSelectedObjectId(objectId); runtime?.dispatch({ type: 'render.object.select', payload: { id: objectId } }); }} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Select object</button>
        <button type="button" onClick={captureSnapshot} style={{ border: '1px solid #fbbf24', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Capture snapshot</button>
        <button type="button" onClick={() => fileInputRef.current?.click()} style={{ border: '1px solid #38bdf8', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Import OBJ/GLB</button>
        <input ref={fileInputRef} type="file" accept=".obj,.glb,model/obj,model/gltf-binary,text/plain" hidden onChange={(event) => { const file = event.target.files?.[0]; if (file) void importAssetFile(file); }} />
      </div>
      <canvas
        ref={canvasRef}
        width={960}
        height={540}
        aria-label="RenderEngin WebGPU viewport"
        onPointerDown={(event) => { pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, mode: event.shiftKey ? 'pan' : 'orbit' }; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerMove={(event) => {
          const pointer = pointerRef.current;
          if (!pointer || pointer.id !== event.pointerId) return;
          const dx = event.clientX - pointer.x;
          const dy = event.clientY - pointer.y;
          pointerRef.current = { ...pointer, x: event.clientX, y: event.clientY };
          updateCamera({ ...camera, azimuth: camera.azimuth + dx * 0.01, elevation: camera.elevation + dy * 0.01 });
        }}
        onPointerUp={(event) => { if (pointerRef.current?.id === event.pointerId) pointerRef.current = null; }}
        onWheel={(event) => { event.preventDefault(); updateCamera({ ...camera, zoom: Math.max(0.8, Math.min(12, camera.zoom + event.deltaY * 0.003)) }); }}
        onClick={() => { const objectId = activeObjectIdRef.current; setSelectedObjectId(objectId); runtime?.dispatch({ type: 'render.object.select', payload: { id: objectId } }); }}
        style={{ width: '100%', minHeight: 320, borderRadius: 24, background: 'linear-gradient(135deg, #eff6ff, #fef3c7)', touchAction: 'none', outline: selectedObjectId ? '3px solid rgba(56,189,248,0.55)' : 'none' }}
      />
      <p style={{ color: '#1d4ed8', fontWeight: 800 }}>{status}</p>
      <p style={{ color: '#0f172a', fontWeight: 800 }}>{assetInfo}</p>
      {stats ? (
        <p style={{ color: '#92400e', fontFamily: 'monospace' }}>
          frame {stats.frameIndex} · cpu {stats.cpuFrameMs.toFixed(2)}ms · draw calls {stats.drawCalls} · indices {stats.indexCount} · camera zoom {camera.zoom.toFixed(2)}
        </p>
      ) : null}
    </section>
  );
}
