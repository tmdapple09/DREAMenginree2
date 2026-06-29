'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { computeBounds } from '@/engins/isosurfaceAssetPipeline';
import type { CameraState, RigBendPoint } from '@/engins/isosurfaceAssetPipeline';
import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';
import {
  composeModelMatrix,
  createMeshBuffers,
  mat4LookAt,
  mat4Perspective,
  type MeshBuffers,
  type Vec3 as RenderVec3,
} from '@/engins/renderengin/core';
import {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginSceneObject,
  type RenderGpuCullBounds,
} from '@/engins/renderengin/webgpu';

type ColorRGB = { r: number; g: number; b: number };
type ColoredMesh = Mesh & { vertexColors?: ColorRGB[]; palette?: ColorRGB[] };

interface ProjectedVertex {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  vertex: Vec3;
}

interface PointerPoint {
  x: number;
  y: number;
  pointerType?: string;
}

type GestureMode = 'none' | 'orbit' | 'pan' | 'sculpt' | 'pinch' | 'blocked';
type RenderMode = 'webgpu' | 'canvas';

type RenderServiceRuntime = {
  renderer: WebGpuRenderEngin;
  meshKey: string | null;
  object: RenderEnginSceneObject | null;
};

export default function AssetViewport({
  mesh,
  sourceUrl,
  camera,
  editMode,
  pickMode = false,
  rigBendPoints = [],
  brushRadius,
  onCamera,
  onSculpt,
  onFrame,
}: {
  mesh: Mesh | null;
  sourceUrl?: string;
  camera: CameraState;
  editMode: boolean;
  pickMode?: boolean;
  rigBendPoints?: RigBendPoint[];
  brushRadius: number;
  onCamera: (patch: Partial<CameraState>) => void;
  onSculpt: (point: Vec3) => void;
  onFrame?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cameraRef = useRef(camera);
  const pointers = useRef(new Map<number, { x: number; y: number; pointerType: string }>());
  const gesture = useRef<{
    mode: GestureMode;
    lastCenter?: { x: number; y: number };
    lastDistance?: number;
  }>({ mode: 'none' });
  const lastSculptAt = useRef(0);
  const pickStart = useRef<{ x: number; y: number; at: number } | null>(null);
  const gpuRef = useRef<RenderServiceRuntime | null>(null);

  const [pointer, setPointerState] = useState<{ x: number; y: number } | null>(null);
  const [imageVersion, setImageVersion] = useState(0);
  const [renderMode, setRenderMode] = useState<RenderMode>('canvas');
  const pointerFrameRef = useRef<number | null>(null);
  const pendingPointerRef = useRef<{ x: number; y: number } | null>(null);

  cameraRef.current = camera;

  const setPointer = useCallback((next: { x: number; y: number } | null) => {
    pendingPointerRef.current = next;
    if (pointerFrameRef.current !== null) return;
    pointerFrameRef.current = window.requestAnimationFrame(() => {
      pointerFrameRef.current = null;
      setPointerState(pendingPointerRef.current);
    });
  }, []);

  useEffect(() => () => {
    if (pointerFrameRef.current !== null) {
      window.cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!sourceUrl) {
      imageRef.current = null;
      setImageVersion((v) => v + 1);
      return;
    }

    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      if (cancelled) return;
      imageRef.current = img;
      setImageVersion((v) => v + 1);
    };

    img.onerror = () => {
      if (cancelled) return;
      imageRef.current = null;
      setImageVersion((v) => v + 1);
    };

    img.src = sourceUrl;
    return () => {
      cancelled = true;
      if (imageRef.current === img) imageRef.current = null;
    };
  }, [sourceUrl]);

  useEffect(() => {
    let cancelled = false;

    async function initWebGPU() {
      try {
        const canvas = canvasRef.current;
        if (!canvas || !globalThis.navigator?.gpu) return;

        const { device } = await requestWebGpuDevice();
        if (cancelled) return;

        const renderer = new WebGpuRenderEngin({ device, canvas });
        gpuRef.current = { renderer, meshKey: null, object: null };
        setRenderMode('webgpu');
      } catch {
        gpuRef.current?.renderer.dispose();
        gpuRef.current = null;
        setRenderMode('canvas');
      }
    }

    void initWebGPU();

    return () => {
      cancelled = true;
      gpuRef.current?.renderer.dispose();
      gpuRef.current = null;
    };
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const nextW = Math.floor(width * dpr);
    const nextH = Math.floor(height * dpr);

    if (canvas.width !== nextW || canvas.height !== nextH) {
      canvas.width = nextW;
      canvas.height = nextH;
    }

    if (overlay.width !== nextW || overlay.height !== nextH) {
      overlay.width = nextW;
      overlay.height = nextH;
    }

    const overlayCtx = overlay.getContext('2d');
    if (!overlayCtx) return;
    overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (renderMode === 'webgpu' && gpuRef.current) {
      drawRenderEnginService(canvas, width, height, mesh as ColoredMesh | null, cameraRef.current, editMode, gpuRef.current);
      drawOverlay(overlayCtx, width, height, editMode || pickMode, brushRadius, pointer, imageRef.current, cameraRef.current, mesh, rigBendPoints);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawViewport(ctx, width, height, mesh as ColoredMesh | null, cameraRef.current, editMode || pickMode, brushRadius, pointer, imageRef.current, rigBendPoints);
    overlayCtx.clearRect(0, 0, width, height);
  }, [mesh, editMode, pickMode, rigBendPoints, brushRadius, pointer, imageVersion, renderMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.touchAction = 'none';
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    draw();
    return () => ro.disconnect();
  }, [draw]);

  useEffect(() => {
    draw();
  }, [draw, camera]);

  function canvasPoint(e: React.PointerEvent<HTMLCanvasElement>): { x: number; y: number } {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function resetGestureAfterPointerChange(currentEditMode: boolean) {
    const pts = [...pointers.current.values()];
    if (pts.length === 0) {
      gesture.current = { mode: 'none' };
      return;
    }
    if (pts.length === 1) {
      gesture.current = { mode: currentEditMode ? 'sculpt' : 'orbit', lastCenter: { x: pts[0].x, y: pts[0].y } };
      return;
    }
    if (pts.length === 2) {
      gesture.current = { mode: 'pinch', lastDistance: pointDistance(pts[0], pts[1]), lastCenter: pointCenter(pts[0], pts[1]) };
      return;
    }
    gesture.current = { mode: 'blocked' };
  }

  function sculptAt(canvas: HTMLCanvasElement, p: { x: number; y: number }, force: boolean) {
    if (!mesh || mesh.vertices.length === 0) return;
    const now = performance.now();
    if (!force && now - lastSculptAt.current < 24) return;
    lastSculptAt.current = now;
    const r = canvas.getBoundingClientRect();
    const projected = mesh.vertices.map((v) => ({ ...project(v, r.width, r.height, cameraRef.current), vertex: v }));
    const picked = pickMeshPoint(mesh, projected, p.x, p.y);
    onSculpt(picked ?? screenToAsset(r.width, r.height, p.x, p.y, cameraRef.current));
  }

  const handlers = {
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    onDoubleClick: () => onFrame?.(),
    onPointerLeave: () => setPointer(null),
    onWheel: (e: React.WheelEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      onCamera({ zoom: clamp(cameraRef.current.zoom * (e.deltaY > 0 ? 0.92 : 1.08), 0.25, 6) });
    },
    onPointerDown: (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      const p = canvasPoint(e);
      pointers.current.set(e.pointerId, { ...p, pointerType: e.pointerType });
      setPointer(p);

      if (pointers.current.size === 1) {
        const desktopPan = e.button === 2 || e.button === 1 || e.altKey || e.metaKey;
        if (desktopPan) {
          gesture.current = { mode: 'pan', lastCenter: p };
          return;
        }
        if (pickMode) {
          pickStart.current = { ...p, at: performance.now() };
          gesture.current = { mode: 'blocked', lastCenter: p };
          return;
        }
        if (editMode) {
          gesture.current = { mode: 'sculpt', lastCenter: p };
          sculptAt(e.currentTarget, p, true);
          return;
        }
        gesture.current = { mode: 'orbit', lastCenter: p };
        return;
      }

      if (pointers.current.size === 2) {
        const pts = [...pointers.current.values()];
        gesture.current = { mode: 'pinch', lastDistance: pointDistance(pts[0], pts[1]), lastCenter: pointCenter(pts[0], pts[1]) };
        return;
      }

      gesture.current = { mode: 'blocked' };
    },
    onPointerMove: (e: React.PointerEvent<HTMLCanvasElement>) => {
      const p = canvasPoint(e);
      setPointer(p);
      if (!pointers.current.has(e.pointerId)) return;

      const previous = pointers.current.get(e.pointerId)!;
      pointers.current.set(e.pointerId, { ...p, pointerType: e.pointerType });

      if (pointers.current.size >= 3) {
        gesture.current = { mode: 'blocked' };
        return;
      }

      if (pointers.current.size === 2) {
        const pts = [...pointers.current.values()];
        const distance = pointDistance(pts[0], pts[1]);
        const center = pointCenter(pts[0], pts[1]);
        const lastCenter = gesture.current.lastCenter ?? center;
        const lastDistance = gesture.current.lastDistance ?? distance;
        onCamera({
          panX: cameraRef.current.panX + center.x - lastCenter.x,
          panY: cameraRef.current.panY + center.y - lastCenter.y,
          zoom: clamp(cameraRef.current.zoom * (distance / Math.max(1, lastDistance)), 0.25, 6),
        });
        gesture.current = { mode: 'pinch', lastCenter: center, lastDistance: distance };
        return;
      }

      const dx = p.x - previous.x;
      const dy = p.y - previous.y;
      if (gesture.current.mode === 'pan') {
        onCamera({ panX: cameraRef.current.panX + dx, panY: cameraRef.current.panY + dy });
        return;
      }
      if (gesture.current.mode === 'orbit') {
        onCamera({ yaw: cameraRef.current.yaw + dx * 0.01, pitch: clamp(cameraRef.current.pitch + dy * 0.01, -1.35, 1.35) });
        return;
      }
      if (gesture.current.mode === 'sculpt' && !pickMode) sculptAt(e.currentTarget, p, false);
    },
    onPointerUp: (e: React.PointerEvent<HTMLCanvasElement>) => {
      const p = canvasPoint(e);
      const start = pickStart.current;
      if (pickMode && start && pointers.current.size === 1 && pointDistance(start, p) <= 8 && performance.now() - start.at <= 700) {
        sculptAt(e.currentTarget, p, true);
      }
      if (pointers.current.size <= 1) pickStart.current = null;
      pointers.current.delete(e.pointerId);
      if (pointers.current.size === 0) {
        gesture.current = { mode: 'none' };
        setPointer(null);
        return;
      }
      resetGestureAfterPointerChange(editMode && !pickMode);
    },
    onPointerCancel: (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (pointers.current.size <= 1) pickStart.current = null;
      pointers.current.delete(e.pointerId);
      if (pointers.current.size === 0) {
        gesture.current = { mode: 'none' };
        setPointer(null);
        return;
      }
      resetGestureAfterPointerChange(editMode && !pickMode);
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', touchAction: 'none' }}>
      <canvas ref={canvasRef} className="ce-viewport-canvas" style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none' }} {...handlers} />
      <canvas ref={overlayRef} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', touchAction: 'none' }} />
    </div>
  );
}

function drawRenderEnginService(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  mesh: ColoredMesh | null,
  camera: CameraState,
  editMode: boolean,
  gpu: RenderServiceRuntime
) {
  const renderer = gpu.renderer;
  const pixelRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
  const renderWidth = Math.max(1, Math.floor(width * pixelRatio));
  const renderHeight = Math.max(1, Math.floor(height * pixelRatio));
  if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
    canvas.width = renderWidth;
    canvas.height = renderHeight;
    renderer.resize(renderWidth, renderHeight);
  }

  const sceneCamera = createRenderServiceCamera(camera, width, height);
  if (!mesh || mesh.vertices.length === 0 || mesh.indices.length < 3) {
    renderer.disposeScene();
    renderer.setScene({
      viewMatrix: sceneCamera.viewMatrix,
      projectionMatrix: sceneCamera.projectionMatrix,
      cameraPosition: sceneCamera.eye,
      lightDirection: [0.25, -0.65, -1],
      objects: [],
    });
    renderer.renderFrame();
    gpu.meshKey = null;
    gpu.object = null;
    return;
  }

  const nextKey = meshSignature(mesh);
  if (gpu.meshKey !== nextKey || !gpu.object) {
    renderer.resetDynamicPreviewResidency();
    const renderMesh = contentMeshToRenderMesh(mesh);
    const uploaded = renderer.uploadMesh(renderMesh);
    gpu.object = renderer.createSceneObject(
      uploaded,
      composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]),
      {
        albedo: editMode ? [0.95, 0.72, 0.22, 1] : [0.58, 0.72, 0.95, 1],
        orm: [1, 0.55, 0, 0],
        emissive: [0, 0, 0, 0],
      },
      undefined,
      { cullBounds: contentMeshCullBounds(mesh), objectId: 1, zIndex: 0 },
    );
    gpu.meshKey = nextKey;
  }

  renderer.setScene({
    viewMatrix: sceneCamera.viewMatrix,
    projectionMatrix: sceneCamera.projectionMatrix,
    cameraPosition: sceneCamera.eye,
    lightDirection: [0.25, -0.65, -1],
    objects: gpu.object ? [gpu.object] : [],
  });
  renderer.renderFrame();
}

function createRenderServiceCamera(camera: CameraState, width: number, height: number) {
  const target: RenderVec3 = [camera.target.x, camera.target.y, camera.target.z];
  const distance = Math.max(0.65, 3.2 / Math.max(0.2, camera.zoom));
  const cosPitch = Math.cos(camera.pitch);
  const eye: RenderVec3 = [
    target[0] + Math.sin(camera.yaw) * cosPitch * distance,
    target[1] + Math.sin(camera.pitch) * distance,
    target[2] + Math.cos(camera.yaw) * cosPitch * distance,
  ];
  return {
    eye,
    viewMatrix: mat4LookAt(eye, target, [0, 1, 0]),
    projectionMatrix: mat4Perspective(Math.PI / 3, Math.max(0.1, width / Math.max(1, height)), 0.05, 100),
  };
}

function contentMeshToRenderMesh(mesh: ColoredMesh): MeshBuffers {
  const normals = computeVertexNormals(mesh);
  const bounds = computeBounds(mesh);
  const sizeX = Math.max(1e-5, bounds.max.x - bounds.min.x);
  const sizeZ = Math.max(1e-5, bounds.max.z - bounds.min.z);
  return createMeshBuffers(mesh.vertices.map((vertex, index) => ({
    position: [vertex.x, vertex.y, vertex.z] as RenderVec3,
    normal: normals[index] ?? [0, 1, 0],
    uv: [
      clamp((vertex.x - bounds.min.x) / sizeX, 0, 1),
      clamp((vertex.z - bounds.min.z) / sizeZ, 0, 1),
    ],
  })), mesh.indices);
}

function computeVertexNormals(mesh: Mesh): RenderVec3[] {
  const normals = mesh.vertices.map((): RenderVec3 => [0, 0, 0]);
  for (let i = 0; i + 2 < mesh.indices.length; i += 3) {
    const ia = mesh.indices[i];
    const ib = mesh.indices[i + 1];
    const ic = mesh.indices[i + 2];
    if (![ia, ib, ic].every((idx) => Number.isInteger(idx) && idx >= 0 && idx < mesh.vertices.length)) continue;
    const a = mesh.vertices[ia];
    const b = mesh.vertices[ib];
    const c = mesh.vertices[ic];
    const normal = cross(sub(b, a), sub(c, a));
    normals[ia] = addNormal(normals[ia], normal);
    normals[ib] = addNormal(normals[ib], normal);
    normals[ic] = addNormal(normals[ic], normal);
  }
  return normals.map((normal) => {
    const l = Math.hypot(normal[0], normal[1], normal[2]);
    return l <= 1e-8 ? [0, 1, 0] : [normal[0] / l, normal[1] / l, normal[2] / l];
  });
}

function addNormal(a: RenderVec3, b: Vec3): RenderVec3 {
  return [a[0] + b.x, a[1] + b.y, a[2] + b.z];
}

function contentMeshCullBounds(mesh: Mesh): RenderGpuCullBounds {
  if (!mesh.vertices.length) return { center: [0, 0, 0], radius: 1 };
  const bounds = computeBounds(mesh);
  const center: RenderVec3 = [
    (bounds.min.x + bounds.max.x) * 0.5,
    (bounds.min.y + bounds.max.y) * 0.5,
    (bounds.min.z + bounds.max.z) * 0.5,
  ];
  let radiusSq = 0;
  for (const vertex of mesh.vertices) {
    const dx = vertex.x - center[0];
    const dy = vertex.y - center[1];
    const dz = vertex.z - center[2];
    const d = dx * dx + dy * dy + dz * dz;
    if (d > radiusSq) radiusSq = d;
  }
  return { center, radius: Math.max(0.001, Math.sqrt(radiusSq)) };
}

function meshSignature(mesh: Mesh): string {
  let hash = 2166136261;
  for (const vertex of mesh.vertices) {
    hash = hashFloat(hash, vertex.x);
    hash = hashFloat(hash, vertex.y);
    hash = hashFloat(hash, vertex.z);
  }
  for (const index of mesh.indices) hash = Math.imul(hash ^ index, 16777619);
  return `${mesh.vertices.length}:${mesh.indices.length}:${hash >>> 0}`;
}

function hashFloat(hash: number, value: number): number {
  const n = Math.round(value * 100000);
  return Math.imul(hash ^ n, 16777619);
}

function drawOverlay(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  editMode: boolean,
  brushRadius: number,
  pointer: { x: number; y: number } | null,
  img: HTMLImageElement | null,
  camera: CameraState,
  mesh: Mesh | null,
  rigBendPoints: RigBendPoint[]
) {
  ctx.clearRect(0, 0, width, height);
  if (!mesh) {
    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 20px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Upload an image, then press Process', width / 2, height / 2);
  }
  drawSource(ctx, width, img);
  drawRigBendMarkers(ctx, width, height, camera, rigBendPoints);
  if (editMode && pointer) {
    ctx.beginPath();
    ctx.arc(pointer.x, pointer.y, Math.max(8, brushRadius * Math.min(width, height) * 0.34 * camera.zoom), 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(251,191,36,.9)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawViewport(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  mesh: ColoredMesh | null,
  camera: CameraState,
  editMode: boolean,
  brushRadius: number,
  pointer: { x: number; y: number } | null,
  sourceImage: HTMLImageElement | null,
  rigBendPoints: RigBendPoint[]
) {
  ctx.clearRect(0, 0, width, height);
  const grd = ctx.createLinearGradient(0, 0, 0, height);
  grd.addColorStop(0, '#111827');
  grd.addColorStop(1, '#020617');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);
  drawGrid(ctx, width, height, camera, mesh);
  if (!mesh) {
    ctx.fillStyle = '#f8fafc';
    ctx.font = '700 20px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('Upload an image, then press Process', width / 2, height / 2);
  } else {
    drawMesh(ctx, width, height, mesh, camera, editMode);
  }
  drawSource(ctx, width, sourceImage);
  drawRigBendMarkers(ctx, width, height, camera, rigBendPoints);
  if (editMode && pointer) {
    ctx.beginPath();
    ctx.arc(pointer.x, pointer.y, Math.max(8, brushRadius * Math.min(width, height) * 0.34 * camera.zoom), 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(251,191,36,.9)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}


function drawRigBendMarkers(ctx: CanvasRenderingContext2D, width: number, height: number, camera: CameraState, bendPoints: RigBendPoint[]) {
  if (!bendPoints.length) return;
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.font = '800 11px system-ui';
  bendPoints.forEach((point, index) => {
    const p = project(point.position, width, height, camera);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(245,158,11,.95)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(15,23,42,.92)';
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.fillText(String(index + 1), p.x, p.y + 4);
    ctx.fillStyle = 'rgba(255,255,255,.92)';
    ctx.fillText(point.label, p.x, p.y - 10);
  });
  ctx.restore();
}

function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, camera: CameraState, mesh: Mesh | null) {
  const y = mesh ? computeBounds(mesh).min.y : -1;
  ctx.strokeStyle = 'rgba(148,163,184,.22)';
  ctx.lineWidth = 1;
  for (let i = -10; i <= 10; i++) {
    line(ctx, project({ x: i / 5, y, z: -1.4 }, width, height, camera), project({ x: i / 5, y, z: 1.4 }, width, height, camera));
    line(ctx, project({ x: -1.4, y, z: i / 5 }, width, height, camera), project({ x: 1.4, y, z: i / 5 }, width, height, camera));
  }
}

function drawSource(ctx: CanvasRenderingContext2D, width: number, img: HTMLImageElement | null) {
  if (!img || !img.naturalWidth || !img.naturalHeight) return;
  const max = width < 760 ? 88 : 128;
  const ratio = Math.min(max / img.naturalWidth, max / img.naturalHeight);
  const w = img.naturalWidth * ratio;
  const h = img.naturalHeight * ratio;
  const x = width - w - 18;
  const y = 18;
  ctx.save();
  ctx.globalAlpha = 0.72;
  ctx.drawImage(img, x, y, w, h);
  ctx.globalAlpha = 1;
  ctx.strokeStyle = 'rgba(255,255,255,.62)';
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, w, h);
  ctx.restore();
}

function drawMesh(ctx: CanvasRenderingContext2D, width: number, height: number, mesh: ColoredMesh, camera: CameraState, editMode: boolean) {
  const projected = mesh.vertices.map((v) => project(v, width, height, camera));
  const tris: { a: number; b: number; c: number; depth: number; shade: number }[] = [];
  const light = norm({ x: -0.35, y: 0.65, z: 0.7 });

  for (let i = 0; i + 2 < mesh.indices.length; i += 3) {
    const a = mesh.indices[i];
    const b = mesh.indices[i + 1];
    const c = mesh.indices[i + 2];
    if (![a, b, c].every((idx) => Number.isInteger(idx) && idx >= 0 && idx < mesh.vertices.length)) continue;

    const pa = projected[a];
    const pb = projected[b];
    const pc = projected[c];
    if (!pa.visible || !pb.visible || !pc.visible) continue;

    const area2D = Math.abs((pb.x - pa.x) * (pc.y - pa.y) - (pc.x - pa.x) * (pb.y - pa.y));
    if (area2D < 0.01) continue;

    const normal = norm(cross(sub(mesh.vertices[b], mesh.vertices[a]), sub(mesh.vertices[c], mesh.vertices[a])));
    tris.push({ a, b, c, depth: (pa.z + pb.z + pc.z) / 3, shade: clamp(dot(normal, light) * 0.45 + 0.55, 0.25, 0.95) });
  }

  tris.sort((a, b) => b.depth - a.depth);
  for (const t of tris) {
    const pa = projected[t.a];
    const pb = projected[t.b];
    const pc = projected[t.c];
    const c = averageColor(mesh, t.a, t.b, t.c, t.shade);
    ctx.beginPath();
    ctx.moveTo(pa.x, pa.y);
    ctx.lineTo(pb.x, pb.y);
    ctx.lineTo(pc.x, pc.y);
    ctx.closePath();
    ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, .88)`;
    ctx.fill();
    ctx.strokeStyle = editMode ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.11)';
    ctx.lineWidth = editMode ? 0.9 : 0.55;
    ctx.stroke();
  }
}

function averageColor(mesh: ColoredMesh, a: number, b: number, c: number, shade: number) {
  const fallback = { r: 255, g: 158, b: 18 };
  const colors = [mesh.vertexColors?.[a], mesh.vertexColors?.[b], mesh.vertexColors?.[c]].filter(Boolean) as ColorRGB[];
  if (!colors.length) return { r: Math.round(fallback.r * shade), g: Math.round(fallback.g * shade), b: Math.round(fallback.b * shade) };
  const avg = colors.reduce((s, v) => ({ r: s.r + v.r, g: s.g + v.g, b: s.b + v.b }), { r: 0, g: 0, b: 0 });
  return { r: Math.round((avg.r / colors.length) * 255 * shade), g: Math.round((avg.g / colors.length) * 255 * shade), b: Math.round((avg.b / colors.length) * 255 * shade) };
}

function project(v: Vec3, width: number, height: number, camera: CameraState) {
  const local = sub(v, camera.target);
  const cy = Math.cos(camera.yaw);
  const sy = Math.sin(camera.yaw);
  const cp = Math.cos(camera.pitch);
  const sp = Math.sin(camera.pitch);
  const rx = local.x * cy - local.z * sy;
  const rz = local.x * sy + local.z * cy;
  const ry = local.y * cp - rz * sp;
  const depth = local.y * sp + rz * cp + 3;
  const scale = Math.min(width, height) * 0.34 * camera.zoom / Math.max(0.25, depth * 0.35);
  return { x: width / 2 + camera.panX + rx * scale, y: height / 2 + camera.panY - ry * scale, z: depth, visible: depth > 0.05 };
}

function pickMeshPoint(_mesh: Mesh, projected: ProjectedVertex[], pointerX: number, pointerY: number, maxPixelDistance = 42): Vec3 | null {
  let best = Infinity;
  let bestVertex: Vec3 | null = null;
  for (const p of projected) {
    if (!p.visible) continue;
    const d = (p.x - pointerX) ** 2 + (p.y - pointerY) ** 2;
    if (d < best) {
      best = d;
      bestVertex = p.vertex;
    }
  }
  return bestVertex && Math.sqrt(best) <= maxPixelDistance ? bestVertex : null;
}

function screenToAsset(width: number, height: number, x: number, y: number, camera: CameraState): Vec3 {
  return {
    x: ((x - width / 2 - camera.panX) / (Math.min(width, height) * 0.34 * camera.zoom)) * 2 + camera.target.x,
    y: -((y - height / 2 - camera.panY) / (Math.min(width, height) * 0.34 * camera.zoom)) * 2 + camera.target.y,
    z: camera.target.z,
  };
}

function line(ctx: CanvasRenderingContext2D, a: { x: number; y: number; visible?: boolean }, b: { x: number; y: number; visible?: boolean }) {
  if (a.visible === false || b.visible === false) return;
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
}
function pointDistance(a: PointerPoint, b: PointerPoint): number { return Math.hypot(a.x - b.x, a.y - b.y); }
function pointCenter(a: PointerPoint, b: PointerPoint): PointerPoint { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
function clamp(n: number, min: number, max: number): number { return Math.max(min, Math.min(max, n)); }
function sub(a: Vec3, b: Vec3): Vec3 { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
function cross(a: Vec3, b: Vec3): Vec3 { return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x }; }
function dot(a: Vec3, b: Vec3): number { return a.x * b.x + a.y * b.y + a.z * b.z; }
function norm(v: Vec3): Vec3 { const l = Math.hypot(v.x, v.y, v.z); return l <= 1e-12 ? { x: 0, y: 0, z: 1 } : { x: v.x / l, y: v.y / l, z: v.z / l }; }
