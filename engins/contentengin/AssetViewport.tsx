'use client';

import { useEffect, useRef } from 'react';
import type { CameraState } from '@/engins/isosurfaceAssetPipeline';
import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';

export default function AssetViewport({ mesh, sourceUrl, camera, editMode, onCamera, onSculpt }: { mesh: Mesh | null; sourceUrl?: string; camera: CameraState; editMode: boolean; onCamera: (patch: Partial<CameraState>) => void; onSculpt: (point: Vec3) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drag = useRef<{ x: number; y: number; mode: 'orbit' | 'pan' | 'sculpt' } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(canvas.clientWidth * dpr); canvas.height = Math.floor(canvas.clientHeight * dpr);
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawViewport(ctx, canvas.clientWidth, canvas.clientHeight, mesh, camera, sourceUrl);
  }, [mesh, camera, sourceUrl]);

  return <canvas ref={canvasRef} className="ce-viewport-canvas" onWheel={(e) => { e.preventDefault(); onCamera({ zoom: Math.max(0.35, Math.min(4, camera.zoom + (e.deltaY > 0 ? -0.08 : 0.08))) }); }} onPointerDown={(e) => { (e.currentTarget as HTMLCanvasElement).setPointerCapture(e.pointerId); drag.current = { x: e.clientX, y: e.clientY, mode: editMode && e.shiftKey ? 'sculpt' : e.altKey ? 'pan' : 'orbit' }; }} onPointerMove={(e) => { const d = drag.current; if (!d) return; const dx = e.clientX - d.x; const dy = e.clientY - d.y; drag.current = { ...d, x: e.clientX, y: e.clientY }; if (d.mode === 'sculpt') onSculpt(screenToAsset(e.currentTarget, e.clientX, e.clientY, camera)); else if (d.mode === 'pan') onCamera({ panX: camera.panX + dx, panY: camera.panY + dy }); else onCamera({ yaw: camera.yaw + dx * 0.01, pitch: Math.max(-1.2, Math.min(1.2, camera.pitch + dy * 0.01)) }); }} onPointerUp={() => { drag.current = null; }} />;
}

function drawViewport(ctx: CanvasRenderingContext2D, width: number, height: number, mesh: Mesh | null, camera: CameraState, sourceUrl?: string) {
  ctx.clearRect(0, 0, width, height);
  const grd = ctx.createLinearGradient(0, 0, 0, height); grd.addColorStop(0, '#111827'); grd.addColorStop(1, '#020617'); ctx.fillStyle = grd; ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = 'rgba(148,163,184,.24)'; ctx.lineWidth = 1;
  for (let i = -10; i <= 10; i++) { const a = project({ x: i / 5, y: -1, z: -1 }, width, height, camera); const b = project({ x: i / 5, y: -1, z: 1 }, width, height, camera); const c = project({ x: -1, y: -1, z: i / 5 }, width, height, camera); const d = project({ x: 1, y: -1, z: i / 5 }, width, height, camera); line(ctx, a, b); line(ctx, c, d); }
  if (sourceUrl) { ctx.globalAlpha = 0.18; const img = new Image(); img.src = sourceUrl; ctx.fillStyle = '#f59e0b'; ctx.fillRect(width - 112, 18, 86, 86); ctx.globalAlpha = 1; }
  if (!mesh) { ctx.fillStyle = '#f8fafc'; ctx.font = '700 20px system-ui'; ctx.textAlign = 'center'; ctx.fillText('Upload an image, then press Process', width / 2, height / 2); return; }
  const projected = mesh.vertices.map((v) => project(v, width, height, camera));
  for (let i = 0; i + 2 < mesh.indices.length; i += 3) {
    const a = projected[mesh.indices[i]]; const b = projected[mesh.indices[i + 1]]; const c = projected[mesh.indices[i + 2]];
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.closePath();
    const shade = Math.max(0.25, Math.min(0.9, 0.55 + (a.z + b.z + c.z) * 0.08));
    ctx.fillStyle = `rgba(${Math.round(245 * shade)}, ${Math.round(158 * shade)}, ${Math.round(11 * shade)}, .72)`; ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.stroke();
  }
}

function project(v: Vec3, width: number, height: number, camera: CameraState) {
  const cy = Math.cos(camera.yaw); const sy = Math.sin(camera.yaw); const cp = Math.cos(camera.pitch); const sp = Math.sin(camera.pitch);
  const x = v.x * cy - v.z * sy; const z = v.x * sy + v.z * cy; const y = v.y * cp - z * sp; const depth = v.y * sp + z * cp + 3;
  const scale = Math.min(width, height) * 0.34 * camera.zoom / Math.max(0.6, depth * 0.34);
  return { x: width / 2 + camera.panX + x * scale, y: height / 2 + camera.panY - y * scale, z: depth };
}
function line(ctx: CanvasRenderingContext2D, a: { x: number; y: number }, b: { x: number; y: number }) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
function screenToAsset(canvas: HTMLCanvasElement, x: number, y: number, camera: CameraState): Vec3 { const r = canvas.getBoundingClientRect(); return { x: ((x - r.left - r.width / 2 - camera.panX) / (r.width * 0.34 * camera.zoom)) * 2, y: -((y - r.top - r.height / 2 - camera.panY) / (r.height * 0.34 * camera.zoom)) * 2, z: 0 }; }
