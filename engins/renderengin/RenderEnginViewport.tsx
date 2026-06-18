'use client';

import { useEffect, useRef, useState } from 'react';
import {
  composeModelMatrix,
  createMeshBuffers,
  mat4LookAt,
  mat4Perspective,
  type MeshBuffers,
} from './core';
import {
  requestWebGpuDevice,
  WebGpuRenderEngin,
  type RenderEnginFrameStats,
} from './webgpu';

function createDemoTriangle(): MeshBuffers {
  return createMeshBuffers([
    { position: [0, 0.75, 0], normal: [0, 0, 1], uv: [0.5, 1] },
    { position: [-0.75, -0.65, 0], normal: [0, 0, 1], uv: [0, 0] },
    { position: [0.75, -0.65, 0], normal: [0, 0, 1], uv: [1, 0] },
  ], [0, 1, 2]);
}

export default function RenderEnginViewport(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState('Booting RenderEngin WebGPU viewport…');
  const [stats, setStats] = useState<RenderEnginFrameStats | null>(null);

  useEffect(() => {
    let renderer: WebGpuRenderEngin | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let cancelled = false;

    async function boot() {
      try {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const { device } = await requestWebGpuDevice();
        if (cancelled) return;
        const pixelRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
        canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
        renderer = new WebGpuRenderEngin({ device, canvas });
        const mesh = renderer.uploadMesh(createDemoTriangle());
        const object = renderer.createSceneObject(mesh, composeModelMatrix([0, 0, 0], [0, 0, 0, 1], [1, 1, 1]));
        renderer.setScene({
          viewMatrix: mat4LookAt([0, 0, 2.4], [0, 0, 0], [0, 1, 0]),
          projectionMatrix: mat4Perspective(Math.PI / 3, canvas.width / canvas.height, 0.1, 100),
          cameraPosition: [0, 0, 2.4],
          lightDirection: [0.25, -0.65, -1],
          objects: [object],
        });
        resizeObserver = new ResizeObserver(([entry]) => {
          if (!renderer) return;
          const nextRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
          const width = Math.max(1, Math.floor(entry.contentRect.width * nextRatio));
          const height = Math.max(1, Math.floor(entry.contentRect.height * nextRatio));
          canvas.width = width;
          canvas.height = height;
          renderer.resize(width, height);
          renderer.setScene({
            viewMatrix: mat4LookAt([0, 0, 2.4], [0, 0, 0], [0, 1, 0]),
            projectionMatrix: mat4Perspective(Math.PI / 3, width / height, 0.1, 100),
            cameraPosition: [0, 0, 2.4],
            lightDirection: [0.25, -0.65, -1],
            objects: [object],
          });
        });
        resizeObserver.observe(canvas);
        renderer.start({
          onReady: () => setStatus('RenderEngin WebGPU viewport running'),
          onFrame: (nextStats) => setStats(nextStats),
          onError: (error) => setStatus(error.message),
        });
      } catch (error) {
        setStatus(error instanceof Error ? error.message : String(error));
      }
    }

    void boot();
    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      renderer?.stop();
    };
  }, []);

  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <canvas
        ref={canvasRef}
        width={960}
        height={540}
        aria-label="RenderEngin WebGPU viewport"
        style={{ width: '100%', minHeight: 320, borderRadius: 24, background: 'linear-gradient(135deg, #eff6ff, #fef3c7)' }}
      />
      <p style={{ color: '#1d4ed8', fontWeight: 800 }}>{status}</p>
      {stats ? (
        <p style={{ color: '#92400e', fontFamily: 'monospace' }}>
          frame {stats.frameIndex} · cpu {stats.cpuFrameMs.toFixed(2)}ms · draw calls {stats.drawCalls} · indices {stats.indexCount}
        </p>
      ) : null}
    </section>
  );
}
