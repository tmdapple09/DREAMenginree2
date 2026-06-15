'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { computeBounds } from '@/engins/isosurfaceAssetPipeline';
import type { CameraState } from '@/engins/isosurfaceAssetPipeline';
import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';

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

export default function AssetViewport({
  mesh,
  sourceUrl,
  camera,
  editMode,
  brushRadius,
  onCamera,
  onSculpt,
  onFrame,
}: {
  mesh: Mesh | null;
  sourceUrl?: string;
  camera: CameraState;
  editMode: boolean;
  brushRadius: number;
  onCamera: (patch: Partial<CameraState>) => void;
  onSculpt: (point: Vec3) => void;
  onFrame?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cameraRef = useRef(camera);
  const pointers = useRef(new Map<number, { x: number; y: number; pointerType: string }>());
  const gesture = useRef<{
    mode: GestureMode;
    lastCenter?: { x: number; y: number };
    lastDistance?: number;
  }>({ mode: 'none' });
  const lastSculptAt = useRef(0);

  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [imageVersion, setImageVersion] = useState(0);

  cameraRef.current = camera;

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

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawViewport(
      ctx,
      width,
      height,
      mesh,
      cameraRef.current,
      editMode,
      brushRadius,
      pointer,
      imageRef.current
    );
  }, [mesh, editMode, brushRadius, pointer, imageVersion]);

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
    return {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
    };
  }

  function resetGestureAfterPointerChange(currentEditMode: boolean) {
    const pts = [...pointers.current.values()];

    if (pts.length === 0) {
      gesture.current = { mode: 'none' };
      return;
    }

    if (pts.length === 1) {
      gesture.current = {
        mode: currentEditMode ? 'sculpt' : 'orbit',
        lastCenter: { x: pts[0].x, y: pts[0].y },
      };
      return;
    }

    if (pts.length === 2) {
      gesture.current = {
        mode: 'pinch',
        lastDistance: pointDistance(pts[0], pts[1]),
        lastCenter: pointCenter(pts[0], pts[1]),
      };
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

    const projected = mesh.vertices.map((v) => ({
      ...project(v, r.width, r.height, cameraRef.current),
      vertex: v,
    }));

    const picked = pickMeshPoint(mesh, projected, p.x, p.y);

    onSculpt(picked ?? screenToAsset(r.width, r.height, p.x, p.y, cameraRef.current));
  }

  return <canvas ref={canvasRef} className="ce-viewport-canvas" style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none' }} onContextMenu={(e) => e.preventDefault()} onDoubleClick={() => onFrame?.()} onPointerLeave={() => setPointer(null)} onWheel={(e) => { e.preventDefault(); onCamera({ zoom: clamp(cameraRef.current.zoom * (e.deltaY > 0 ? 0.92 : 1.08), 0.25, 6) }); }} onPointerDown={(e) => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); const p = canvasPoint(e); pointers.current.set(e.pointerId, { ...p, pointerType: e.pointerType }); setPointer(p); if (pointers.current.size === 1) { const desktopPan = e.button === 2 || e.button === 1 || e.altKey || e.metaKey; if (desktopPan) { gesture.current = { mode: 'pan', lastCenter: p }; return; } if (editMode) { gesture.current = { mode: 'sculpt', lastCenter: p }; sculptAt(e.currentTarget, p, true); return; } gesture.current = { mode: 'orbit', lastCenter: p }; return; } if (pointers.current.size === 2) { const pts = [...pointers.current.values()]; gesture.current = { mode: 'pinch', lastDistance: pointDistance(pts[0], pts[1]), lastCenter: pointCenter(pts[0], pts[1]) }; return; } gesture.current = { mode: 'blocked' }; }} onPointerMove={(e) => { const p = canvasPoint(e); setPointer(p); if (!pointers.current.has(e.pointerId)) return; const previous = pointers.current.get(e.pointerId)!; pointers.current.set(e.pointerId, { ...p, pointerType: e.pointerType }); if (pointers.current.size >= 3) { gesture.current = { mode: 'blocked' }; return; } if (pointers.current.size === 2) { const pts = [...pointers.current.values()]; const distance = pointDistance(pts[0], pts[1]); const center = pointCenter(pts[0], pts[1]); const lastCenter = gesture.current.lastCenter ?? center; const lastDistance = gesture.current.lastDistance ?? distance; onCamera({ panX: cameraRef.current.panX + center.x - lastCenter.x, panY: cameraRef.current.panY + center.y - lastCenter.y, zoom: clamp(cameraRef.current.zoom * (distance / Math.max(1, lastDistance)), 0.25, 6) }); gesture.current = { mode: 'pinch', lastCenter: center, lastDistance: distance }; return; } const dx = p.x - previous.x; const dy = p.y - previous.y; if (gesture.current.mode === 'pan') { onCamera({ panX: cameraRef.current.panX + dx, panY: cameraRef.current.panY + dy }); return; } if (gesture.current.mode === 'orbit') { onCamera({ yaw: cameraRef.current.yaw + dx * 0.01, pitch: clamp(cameraRef.current.pitch + dy * 0.01, -1.35, 1.35) }); return; } if (gesture.current.mode === 'sculpt') { sculptAt(e.currentTarget, p, false); } }} onPointerUp={(e) => { pointers.current.delete(e.pointerId); if (pointers.current.size === 0) { gesture.current = { mode: 'none' }; setPointer(null); return; } resetGestureAfterPointerChange(editMode); }} onPointerCancel={(e) => { pointers.current.delete(e.pointerId); if (pointers.current.size === 0) { gesture.current = { mode: 'none' }; setPointer(null); return; } resetGestureAfterPointerChange(editMode); }} />;
}

function drawViewport(ctx: CanvasRenderingContext2D, width: number, height: number, mesh: Mesh | null, camera: CameraState, editMode: boolean, brushRadius: number, pointer: { x: number; y: number } | null, sourceImage: HTMLImageElement | null) { ctx.clearRect(0, 0, width, height); const grd = ctx.createLinearGradient(0, 0, 0, height); grd.addColorStop(0, '#111827'); grd.addColorStop(1, '#020617'); ctx.fillStyle = grd; ctx.fillRect(0, 0, width, height); drawGrid(ctx, width, height, camera, mesh); if (!mesh) { ctx.fillStyle = '#f8fafc'; ctx.font = '700 20px system-ui'; ctx.textAlign = 'center'; ctx.fillText('Upload an image, then press Process', width / 2, height / 2); } else drawMesh(ctx, width, height, mesh, camera, editMode); drawSource(ctx, width, sourceImage); if (editMode && pointer) { ctx.beginPath(); ctx.arc(pointer.x, pointer.y, Math.max(8, brushRadius * Math.min(width, height) * 0.34 * camera.zoom), 0, Math.PI * 2); ctx.strokeStyle = 'rgba(251,191,36,.9)'; ctx.lineWidth = 2; ctx.stroke(); } }
function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, camera: CameraState, mesh: Mesh | null) { const y = mesh ? computeBounds(mesh).min.y : -1; ctx.strokeStyle = 'rgba(148,163,184,.22)'; ctx.lineWidth = 1; for (let i = -10; i <= 10; i++) { line(ctx, project({ x: i / 5, y, z: -1.4 }, width, height, camera), project({ x: i / 5, y, z: 1.4 }, width, height, camera)); line(ctx, project({ x: -1.4, y, z: i / 5 }, width, height, camera), project({ x: 1.4, y, z: i / 5 }, width, height, camera)); } }
function drawSource(ctx: CanvasRenderingContext2D, width: number, img: HTMLImageElement | null) { if (!img || !img.naturalWidth || !img.naturalHeight) return; const max = width < 760 ? 88 : 128; const ratio = Math.min(max / img.naturalWidth, max / img.naturalHeight); const w = img.naturalWidth * ratio; const h = img.naturalHeight * ratio; const x = width - w - 18; const y = 18; ctx.save(); ctx.globalAlpha = 0.72; ctx.drawImage(img, x, y, w, h); ctx.globalAlpha = 1; ctx.strokeStyle = 'rgba(255,255,255,.62)'; ctx.lineWidth = 1; ctx.strokeRect(x, y, w, h); ctx.restore(); }
function drawMesh(ctx: CanvasRenderingContext2D, width: number, height: number, mesh: Mesh, camera: CameraState, editMode: boolean) { const projected = mesh.vertices.map((v) => project(v, width, height, camera)); const tris: { a: number; b: number; c: number; depth: number; shade: number }[] = []; const light = norm({ x: -0.35, y: 0.65, z: 0.7 }); for (let i = 0; i + 2 < mesh.indices.length; i += 3) { const a = mesh.indices[i]; const b = mesh.indices[i + 1]; const c = mesh.indices[i + 2]; if (![a, b, c].every((idx) => Number.isInteger(idx) && idx >= 0 && idx < mesh.vertices.length)) continue; const pa = projected[a]; const pb = projected[b]; const pc = projected[c]; if (!pa.visible || !pb.visible || !pc.visible) continue; const area2D = Math.abs((pb.x - pa.x) * (pc.y - pa.y) - (pc.x - pa.x) * (pb.y - pa.y)); if (area2D < 0.01) continue; const normal = norm(cross(sub(mesh.vertices[b], mesh.vertices[a]), sub(mesh.vertices[c], mesh.vertices[a]))); tris.push({ a, b, c, depth: (pa.z + pb.z + pc.z) / 3, shade: clamp(dot(normal, light) * 0.45 + 0.55, 0.25, 0.95) }); } tris.sort((a, b) => b.depth - a.depth); for (const t of tris) { const pa = projected[t.a]; const pb = projected[t.b]; const pc = projected[t.c]; ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.lineTo(pc.x, pc.y); ctx.closePath(); ctx.fillStyle = `rgba(${Math.round(255 * t.shade)}, ${Math.round(158 * t.shade)}, ${Math.round(18 * t.shade)}, .86)`; ctx.fill(); ctx.strokeStyle = editMode ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.11)'; ctx.lineWidth = editMode ? 0.9 : 0.55; ctx.stroke(); } }
function project(v: Vec3, width: number, height: number, camera: CameraState) { const local = sub(v, camera.target); const cy = Math.cos(camera.yaw); const sy = Math.sin(camera.yaw); const cp = Math.cos(camera.pitch); const sp = Math.sin(camera.pitch); const rx = local.x * cy - local.z * sy; const rz = local.x * sy + local.z * cy; const ry = local.y * cp - rz * sp; const depth = local.y * sp + rz * cp + 3; const scale = Math.min(width, height) * 0.34 * camera.zoom / Math.max(0.25, depth * 0.35); return { x: width / 2 + camera.panX + rx * scale, y: height / 2 + camera.panY - ry * scale, z: depth, visible: depth > 0.05 }; }
function pickMeshPoint(_mesh: Mesh, projected: ProjectedVertex[], pointerX: number, pointerY: number, maxPixelDistance = 42): Vec3 | null { let best = Infinity; let bestVertex: Vec3 | null = null; for (const p of projected) { if (!p.visible) continue; const d = (p.x - pointerX) ** 2 + (p.y - pointerY) ** 2; if (d < best) { best = d; bestVertex = p.vertex; } } return bestVertex && Math.sqrt(best) <= maxPixelDistance ? bestVertex : null; }
function screenToAsset(width: number, height: number, x: number, y: number, camera: CameraState): Vec3 { return { x: ((x - width / 2 - camera.panX) / (Math.min(width, height) * 0.34 * camera.zoom)) * 2 + camera.target.x, y: -((y - height / 2 - camera.panY) / (Math.min(width, height) * 0.34 * camera.zoom)) * 2 + camera.target.y, z: camera.target.z }; }
function line(ctx: CanvasRenderingContext2D, a: { x: number; y: number; visible?: boolean }, b: { x: number; y: number; visible?: boolean }) { if (a.visible === false || b.visible === false) return; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
function pointDistance(a: PointerPoint, b: PointerPoint): number { return Math.hypot(a.x - b.x, a.y - b.y); }
function pointCenter(a: PointerPoint, b: PointerPoint): PointerPoint { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
function clamp(n: number, min: number, max: number): number { return Math.max(min, Math.min(max, n)); }
function sub(a: Vec3, b: Vec3): Vec3 { return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }; }
function cross(a: Vec3, b: Vec3): Vec3 { return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x }; }
function dot(a: Vec3, b: Vec3): number { return a.x * b.x + a.y * b.y + a.z * b.z; }
function norm(v: Vec3): Vec3 { const l = Math.hypot(v.x, v.y, v.z); return l <= 1e-12 ? { x: 0, y: 0, z: 1 } : { x: v.x / l, y: v.y / l, z: v.z / l }; }
