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
import { createParsedGlbRenderAsset, createParsedObjRenderAsset, estimateRenderAssetMemory, verifyCertifiedGlbRenderAsset, type ParsedRenderAsset } from './assets';
import {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginFrameStats,
  type RenderGpuCullBounds,
} from './webgpu';
import type { RenderIntent } from './core';
import {
  createBenchmarkScene,
  createRenderPerformanceReport,
  evaluateCertificateAdmission,
  evaluateRenderPerformanceGate,
  frameStatsToPerformanceSample,
  type RenderPerformanceSample,
} from './diagnostics';
import type { GameReadyAssetCertificate } from '@/types/gameReadyAsset';
import type { RenderServiceIntentEnvelope } from './serviceRuntime';

interface RenderViewportProps {
  runtime?: EnginRuntime<RenderIntent>;
  incomingIntent?: RenderServiceIntentEnvelope | null;
}

type VertexInput = { position: Vec3; normal: Vec3; uv: Vec2 };

type GridPreviewTile = 'empty' | 'ground' | 'wall' | 'water' | 'spawn' | string;

type GridPreview = GridPreviewTile[][];

const MAX_RENDER_HANDOFF_BYTES = 64 * 1024 * 1024;
const MAX_RENDER_IMPORT_BYTES = 64 * 1024 * 1024;

function isGameReadyCertificate(value: unknown): value is GameReadyAssetCertificate {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<GameReadyAssetCertificate>;
  return candidate.version === 2
    && typeof candidate.certificateDigest === 'string'
    && typeof candidate.canonicalSignature === 'string'
    && typeof candidate.geometryDigest === 'string';
}

async function verifyBufferIntegrity(buffer: ArrayBuffer, expected: unknown): Promise<void> {
  if (typeof expected !== 'string' || !expected) return;
  if (!/^sha256-[0-9a-f]{64}$/i.test(expected)) throw new Error('RenderEngin handoff integrity is not a SHA-256 value.');
  const digest = await crypto.subtle.digest('SHA-256', buffer);
  const actual = `sha256-${Array.from(new Uint8Array(digest)).map((value) => value.toString(16).padStart(2, '0')).join('')}`;
  if (actual.toLowerCase() !== expected.toLowerCase()) throw new Error('RenderEngin rejected a handoff whose bytes do not match the declared integrity digest.');
}



function assertRenderPayloadSize(byteLength: number, label: string): void {
  if (!Number.isFinite(byteLength) || byteLength <= 0) {
    throw new Error(`${label} is empty or unreadable.`);
  }
  if (byteLength > MAX_RENDER_HANDOFF_BYTES) {
    throw new Error(`${label} is too large for mobile RenderEngin preview (${byteLength} bytes).`);
  }
}

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

function stableNumericObjectId(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) || 1;
}

function createRenderCullBounds(mesh: MeshBuffers): RenderGpuCullBounds {
  if (!mesh.vertices.length) return { center: [0, 0, 0], radius: 1 };
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;
  for (const vertex of mesh.vertices) {
    const [x, y, z] = vertex.position;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (z < minZ) minZ = z;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    if (z > maxZ) maxZ = z;
  }
  const center: Vec3 = [(minX + maxX) * 0.5, (minY + maxY) * 0.5, (minZ + maxZ) * 0.5];
  let radiusSq = 0;
  for (const vertex of mesh.vertices) {
    const dx = vertex.position[0] - center[0];
    const dy = vertex.position[1] - center[1];
    const dz = vertex.position[2] - center[2];
    const d = dx * dx + dy * dy + dz * dz;
    if (d > radiusSq) radiusSq = d;
  }
  return { center, radius: Math.max(0.001, Math.sqrt(radiusSq)) };
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
  const lastStatsStateAtRef = useRef(0);
  const cameraStateRef = useRef({ azimuth: 0, elevation: 0, zoom: 2.4 });
  const pendingCameraRef = useRef<{ azimuth: number; elevation: number; zoom: number } | null>(null);
  const cameraRafRef = useRef<number | null>(null);
  const processedIntentIdsRef = useRef(new Set<string>());
  const activeAssetLabelRef = useRef('Demo triangle');
  const activeObjectIdRef = useRef('object:demo-triangle');
  const activeObjectNumericIdRef = useRef(stableNumericObjectId('object:demo-triangle'));
  const objectIdLookupRef = useRef(new Map<number, string>([[activeObjectNumericIdRef.current, activeObjectIdRef.current]]));
  const [status, setStatus] = useState('Checking browser WebGPU support…');
  const [stats, setStats] = useState<RenderEnginFrameStats | null>(null);
  const [camera, setCamera] = useState({ azimuth: 0, elevation: 0, zoom: 2.4 });
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>('object:demo-triangle');
  const [assetInfo, setAssetInfo] = useState('Demo triangle loaded');
  const pointerRef = useRef<{ id: number; x: number; y: number; mode: 'orbit' | 'pan' } | null>(null);
  const sceneMeshRef = useRef<MeshBuffers>(createDemoTriangle());
  const cameraEyeRef = useRef<Vec3>(orbitEye(0, 0, 2.4));
  const activeCertificateRef = useRef<GameReadyAssetCertificate | null>(null);
  const performanceSamplesRef = useRef<RenderPerformanceSample[]>([]);

  useEffect(() => { runtimeRef.current = runtime; }, [runtime]);

  useEffect(() => () => {
    if (cameraRafRef.current !== null) {
      window.cancelAnimationFrame(cameraRafRef.current);
      cameraRafRef.current = null;
    }
  }, []);

  const registerActiveObjectId = useCallback((objectId: string): number => {
    const numericId = stableNumericObjectId(objectId);
    activeObjectIdRef.current = objectId;
    activeObjectNumericIdRef.current = numericId;
    objectIdLookupRef.current.set(numericId, objectId);
    setSelectedObjectId(objectId);
    return numericId;
  }, []);

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
    const numericObjectId = registerActiveObjectId(objectId);
    const memory = estimateRenderAssetMemory(mesh);
    const asset = createRenderAsset({ id: meta.assetId, ownerId, runtimeId, visibility: 'local', mesh, material: { albedo: [0.58, 0.72, 0.95], orm: [1, 0.55, 0] } });
    const renderer = rendererRef.current;
    if (renderer) {
      renderer.disposeScene();
      const gpuMesh = renderer.uploadMesh(mesh);
      sceneObjectRef.current = renderer.createSceneObject(gpuMesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]), undefined, undefined, { cullBounds: createRenderCullBounds(mesh), objectId: numericObjectId, zIndex: 0 });
      applyCurrentScene();
    }
    runtimeRef.current?.dispatch({ type: 'render.asset.register', payload: { asset, memory, source: meta.source } });
    runtimeRef.current?.dispatch({ type: 'render.asset.load', payload: { id: meta.assetId, progress: 1, status: 'loaded', memory, source: meta.source } });
    runtimeRef.current?.dispatch({ type: 'render.scene.load', payload: { scene: { objectCount: 1, source: meta.source, selectedObjectId: objectId, assetId: meta.assetId } } });
    setAssetInfo(`${meta.name} · ${mesh.vertices.length} vertices · ${mesh.indices.length} indices · ${String(memory.totalBytes)} bytes`);
  }, [applyCurrentScene, registerActiveObjectId]);

  const loadParsedAsset = useCallback((parsed: ParsedRenderAsset, name: string, source: string) => {
    sceneMeshRef.current = parsed.mesh;
    activeAssetLabelRef.current = name;
    const objectId = `object:${sanitizeIdPart(parsed.asset.id)}`;
    const numericObjectId = registerActiveObjectId(objectId);
    const renderer = rendererRef.current;
    if (renderer) {
      renderer.disposeScene();
      const gpuMesh = renderer.uploadMesh(parsed.mesh);
      sceneObjectRef.current = renderer.createSceneObject(gpuMesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]), undefined, undefined, { cullBounds: createRenderCullBounds(parsed.mesh), objectId: numericObjectId, zIndex: 0 });
      applyCurrentScene();
    }
    const memory = estimateRenderAssetMemory(parsed.mesh);
    runtimeRef.current?.dispatch({ type: 'render.asset.register', payload: { asset: parsed.asset, manifest: parsed.manifest, memory } });
    runtimeRef.current?.dispatch({ type: 'render.asset.load', payload: { id: parsed.asset.id, progress: 1, status: 'loaded', memory, source } });
    runtimeRef.current?.dispatch({ type: 'render.scene.load', payload: { scene: { objectCount: 1, source, selectedObjectId: activeObjectIdRef.current, assetId: parsed.asset.id } } });
    setAssetInfo(`${name} · ${parsed.validation.vertexCount} vertices · ${parsed.validation.indexCount} indices · ${memory.totalBytes} bytes`);
  }, [applyCurrentScene, registerActiveObjectId]);

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
        const object = renderer.createSceneObject(mesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]), undefined, undefined, { cullBounds: createRenderCullBounds(sceneMeshRef.current), objectId: activeObjectNumericIdRef.current, zIndex: 0 });
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
            const now = performance.now();
            performanceSamplesRef.current.push(frameStatsToPerformanceSample(nextStats));
            if (performanceSamplesRef.current.length > 120) performanceSamplesRef.current.splice(0, performanceSamplesRef.current.length - 120);
            if (now - lastStatsStateAtRef.current >= 250) {
              lastStatsStateAtRef.current = now;
              setStats(nextStats);
            }
            if (now - lastFrameTelemetryAtRef.current >= 1000) {
              lastFrameTelemetryAtRef.current = now;
              const performanceReport = createRenderPerformanceReport(performanceSamplesRef.current);
              const performanceGate = evaluateRenderPerformanceGate(performanceReport, createBenchmarkScene(sceneMeshRef.current, 1));
              runtimeRef.current?.dispatch({
                type: 'render.frame.render',
                payload: {
                  ...nextStats,
                  telemetry: 'throttled',
                  performanceReport,
                  performanceGate,
                  certifiedAsset: Boolean(activeCertificateRef.current),
                  certificateDigest: activeCertificateRef.current?.certificateDigest,
                },
              });
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
    let cancelled = false;
    const payload = incomingIntent.payload;

    const applyIntent = async () => {
      try {
        const suppliedCertificate = isGameReadyCertificate(payload.gameReadyCertificate)
          ? payload.gameReadyCertificate
          : undefined;
        const glbUrl = typeof payload.glbUrl === 'string'
          ? payload.glbUrl
          : typeof payload.modelUrl === 'string'
            ? payload.modelUrl
            : '';

        if (payload.gameReadyCertificate !== undefined && !suppliedCertificate) {
          throw new Error('RenderEngin rejected a malformed game-ready certificate.');
        }
        if (suppliedCertificate) {
          const admission = evaluateCertificateAdmission(suppliedCertificate, {
            similaritySignature: typeof payload.similaritySignature === 'string' ? payload.similaritySignature : undefined,
            orientedSimilaritySignature: typeof payload.orientedSimilaritySignature === 'string' ? payload.orientedSimilaritySignature : undefined,
            geometryDigest: typeof payload.geometryDigest === 'string' ? payload.geometryDigest : undefined,
            scanDigest: typeof payload.scanDigest === 'string' ? payload.scanDigest : undefined,
          });
          if (admission.passed !== true) throw new Error('RenderEngin rejected a handoff whose certificate or structural evidence did not verify.');
          activeCertificateRef.current = suppliedCertificate;
          performanceSamplesRef.current = [];
          runtimeRef.current?.dispatch({ type: 'render.asset.preview', payload: { status: 'certificate-admitted', certificateAdmission: admission, certificateDigest: suppliedCertificate.certificateDigest } });
        } else {
          activeCertificateRef.current = null;
          performanceSamplesRef.current = [];
          if (incomingIntent.source === 'ContentEngin' && !glbUrl) {
            throw new Error('RenderEngin rejected a ContentEngin non-GLB handoff without a valid game-ready certificate.');
          }
        }
        if (glbUrl) {
          setStatus(`Loading RenderEngin GLB handoff from ${incomingIntent.source}…`);
          const response = await fetch(glbUrl, { cache: 'force-cache' });
          if (!response.ok) throw new Error(`RenderEngin GLB fetch failed: ${response.status}`);
          const contentLength = Number(response.headers.get('content-length') ?? '0');
          if (contentLength > MAX_RENDER_HANDOFF_BYTES) {
            throw new Error(`RenderEngin GLB handoff is too large for mobile preview (${contentLength} bytes).`);
          }
          const buffer = await response.arrayBuffer();
          assertRenderPayloadSize(buffer.byteLength, 'RenderEngin GLB handoff');
          await verifyBufferIntegrity(buffer, payload.integrity);
          if (cancelled) return;
          const name = typeof payload.fileName === 'string'
            ? payload.fileName
            : `${String(payload.assetId ?? 'contentengin-asset')}.glb`;
          const parsed = createParsedGlbRenderAsset({
            id: `asset:${sanitizeIdPart(String(payload.assetId ?? name))}`,
            ownerId: String(payload.ownerId ?? 'local-user'),
            runtimeId: 'render:shared-service',
            name,
            buffer,
          });
          if (incomingIntent.source === 'ContentEngin' || suppliedCertificate) {
            const verified = verifyCertifiedGlbRenderAsset(buffer, parsed, suppliedCertificate);
            const admission = evaluateCertificateAdmission(verified.certificate, {
              similaritySignature: verified.metadata.canonicalSimilaritySignature,
              orientedSimilaritySignature: verified.metadata.orientedSimilaritySignature,
              geometryDigest: verified.computedGeometryDigest,
              scanDigest: verified.metadata.scanDigest,
            });
            if (admission.passed !== true) {
              throw new Error('RenderEngin rejected a GLB whose verified certificate failed runtime admission.');
            }
            activeCertificateRef.current = verified.certificate;
            runtimeRef.current?.dispatch({
              type: 'render.asset.preview',
              payload: {
                status: 'glb-certificate-bound',
                certificateAdmission: admission,
                certificateDigest: verified.certificate.certificateDigest,
                geometryDigest: verified.certificate.geometryDigest,
              },
            });
          }
          loadParsedAsset(parsed, name, incomingIntent.source);
          setStatus(`RenderEngin GLB handoff loaded from ${incomingIntent.source}`);
          return;
        }
        if (typeof payload.objSource === 'string') {
          const fileName = typeof payload.fileName === 'string' ? payload.fileName : `${String(payload.assetId ?? 'render-handoff')}.obj`;
          const parsed = createParsedObjRenderAsset({ id: `asset:${sanitizeIdPart(fileName)}`, ownerId: String(payload.ownerId ?? 'local-user'), runtimeId: 'render:shared-service', name: fileName, source: payload.objSource });
          loadParsedAsset(parsed, fileName, incomingIntent.source);
          setStatus(`RenderEngin OBJ handoff loaded from ${incomingIntent.source}`);
          return;
        }
        if (isGridPreview(payload.worldGrid)) {
          const name = typeof payload.worldName === 'string' ? payload.worldName : 'GameEngin world';
          const mesh = createGridPreviewMesh(payload.worldGrid);
          loadMeshIntoViewport(mesh, { assetId: String(payload.assetId ?? `game-world:${sanitizeIdPart(name)}`), name, source: incomingIntent.source, ownerId: String(payload.ownerId ?? 'local-user'), runtimeId: 'render:shared-service' });
          setStatus(`RenderEngin GameEngin world handoff loaded from ${incomingIntent.source}`);
          return;
        }
        setAssetInfo(`${incomingIntent.source} handoff received · waiting for mesh payload · ${String(payload.assetId ?? payload.assetKind ?? incomingIntent.intentType)}`);
        setStatus('RenderEngin service intent applied; no direct mesh payload was attached.');
      } catch (error) {
        if (!cancelled) setStatus(error instanceof Error ? error.message : String(error));
      }
    };

    void applyIntent();
    return () => {
      cancelled = true;
    };
  }, [incomingIntent, loadMeshIntoViewport, loadParsedAsset]);

  function updateCamera(next: typeof camera): void {
    cameraStateRef.current = next;
    pendingCameraRef.current = next;
    if (cameraRafRef.current !== null) return;
    cameraRafRef.current = window.requestAnimationFrame(() => {
      cameraRafRef.current = null;
      const pending = pendingCameraRef.current;
      pendingCameraRef.current = null;
      if (!pending) return;
      setCamera(pending);
      runtimeRef.current?.dispatch({ type: 'render.camera.orbit', payload: { orbit: [pending.azimuth, pending.elevation], zoom: pending.zoom } });
      runtimeRef.current?.dispatch({ type: 'render.camera.zoom', payload: { zoom: pending.zoom } });
    });
  }

  async function importAssetFile(file: File): Promise<void> {
    if (file.size <= 0) throw new Error('RenderEngin import is empty.');
    if (file.size > MAX_RENDER_IMPORT_BYTES) {
      throw new Error(`RenderEngin import is too large for mobile preview (${file.size} bytes).`);
    }
    const lowerName = file.name.toLowerCase();
    if (lowerName.endsWith('.glb')) {
      const buffer = await file.arrayBuffer();
      assertRenderPayloadSize(buffer.byteLength, 'RenderEngin GLB import');
      const parsed = createParsedGlbRenderAsset({ id: `asset:${sanitizeIdPart(file.name)}`, ownerId: 'local-user', runtimeId: 'render:surface', name: file.name, buffer });
      loadParsedAsset(parsed, file.name, 'local-glb-import');
      return;
    }
    if (!lowerName.endsWith('.obj')) {
      throw new Error('RenderEngin only accepts OBJ or GLB imports in this viewport.');
    }
    const source = await file.text();
    assertRenderPayloadSize(source.length, 'RenderEngin OBJ import');
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
        <button type="button" onClick={() => updateCamera({ ...cameraStateRef.current, zoom: Math.max(0.8, cameraStateRef.current.zoom - 0.3) })} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Zoom in</button>
        <button type="button" onClick={() => updateCamera({ ...cameraStateRef.current, zoom: Math.min(12, cameraStateRef.current.zoom + 0.3) })} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Zoom out</button>
        <button type="button" onClick={() => { const objectId = activeObjectIdRef.current; setSelectedObjectId(objectId); runtime?.dispatch({ type: 'render.object.select', payload: { id: objectId } }); }} style={{ border: '1px solid #bae6fd', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Select object</button>
        <button type="button" onClick={captureSnapshot} style={{ border: '1px solid #fbbf24', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Capture snapshot</button>
        <button type="button" onClick={() => fileInputRef.current?.click()} style={{ border: '1px solid #38bdf8', borderRadius: 999, padding: '8px 12px', fontWeight: 900 }}>Import OBJ/GLB</button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".obj,.glb,model/obj,model/gltf-binary,text/plain"
          hidden
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            void importAssetFile(file).catch((error) => {
              setStatus(error instanceof Error ? error.message : String(error));
            });
            event.currentTarget.value = '';
          }}
        />
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
          const currentCamera = cameraStateRef.current;
          updateCamera({ ...currentCamera, azimuth: currentCamera.azimuth + dx * 0.01, elevation: currentCamera.elevation + dy * 0.01 });
        }}
        onPointerUp={(event) => { if (pointerRef.current?.id === event.pointerId) pointerRef.current = null; }}
        onWheel={(event) => {
          event.preventDefault();
          const currentCamera = cameraStateRef.current;
          updateCamera({ ...currentCamera, zoom: Math.max(0.8, Math.min(12, currentCamera.zoom + event.deltaY * 0.003)) });
        }}
        onClick={(event) => {
          const renderer = rendererRef.current;
          const fallbackObjectId = activeObjectIdRef.current;
          if (!renderer) {
            setSelectedObjectId(fallbackObjectId);
            runtime?.dispatch({ type: 'render.object.select', payload: { id: fallbackObjectId, source: 'fallback-active-object' } });
            return;
          }
          void renderer.pickResidentObjectFromCanvas(event.clientX, event.clientY).then((pick) => {
            const objectId = pick.hit ? (objectIdLookupRef.current.get(pick.objectId) ?? `object:${String(pick.objectId)}`) : fallbackObjectId;
            setSelectedObjectId(objectId);
            runtime?.dispatch({ type: 'render.object.select', payload: { id: objectId, gpuPicked: pick.hit, objectIndex: pick.objectIndex } });
          }).catch(() => {
            setSelectedObjectId(fallbackObjectId);
            runtime?.dispatch({ type: 'render.object.select', payload: { id: fallbackObjectId, source: 'pick-fallback' } });
          });
        }}
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
