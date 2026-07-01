'use client';

import { DIVIDER_H } from '@/dreamdmbar/runtime/barInteractions';
import {
    createIdleParticle,
    createSeamParticle,
    evictDeadParticles,
    tickParticles,
    type SeamParticle,
} from '@/dreamdmbar/runtime/bridgeSeamFlow';
import { bridge } from '@/engine/runtime/dualRuntimeBridge';
import { useCallback, useEffect, useRef } from 'react';




const BLEED_PX = 28;


const IDLE_PARTICLE_TARGET = 3;


const IDLE_SPAWN_INTERVAL_MS = 2200;

interface NeuralSeamCanvasProps {
  
  active: boolean;
  
  splitRatio: number;
}

export default function NeuralSeamCanvas({ active, splitRatio }: NeuralSeamCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SeamParticle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastFrameAt = useRef<number>(0);
  const lastIdleSpawnAt = useRef<number>(0);
  const screenHRef = useRef<number>(typeof window !== 'undefined' ? window.innerHeight : 812);
  const screenWRef = useRef<number>(typeof window !== 'undefined' ? window.innerWidth : 390);

  const getSeamTop = useCallback((): number => {
    return Math.round(splitRatio * (screenHRef.current - DIVIDER_H));
  }, [splitRatio]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = DIVIDER_H + BLEED_PX * 2;
    screenHRef.current = window.innerHeight;
    screenWRef.current = w;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  const drawFrame = useCallback((now: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dt = Math.min(now - (lastFrameAt.current || now), 64); 
    lastFrameAt.current = now;

    const W = canvas.width / (window.devicePixelRatio || 1);
    const H = DIVIDER_H + BLEED_PX * 2;
    const centerY = H / 2;

    
    ctx.clearRect(0, 0, W, H);

    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0,   'rgba(0,0,0,0)');
    bgGrad.addColorStop(0.35,'rgba(8,12,28,0.10)');
    bgGrad.addColorStop(0.5, 'rgba(8,12,28,0.18)');
    bgGrad.addColorStop(0.65,'rgba(8,12,28,0.10)');
    bgGrad.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.setLineDash([2, 8]);
    ctx.lineWidth = 0.5;
    const gridLines = [0.2, 0.35, 0.5, 0.65, 0.8];
    for (const frac of gridLines) {
      const y = frac * H;
      const dist = Math.abs(frac - 0.5); 
      const opacity = 0.06 - dist * 0.08;
      if (opacity <= 0) continue;
      ctx.strokeStyle = `rgba(125,211,252,${opacity.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();

    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(200,152,26,0.07)';
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(W, centerY);
    ctx.stroke();
    ctx.restore();

    const pulseAlpha = 0.04 + 0.02 * Math.sin(now * 0.0007);
    const idleGlow = ctx.createRadialGradient(W / 2, centerY, 0, W / 2, centerY, W * 0.4);
    idleGlow.addColorStop(0, `rgba(93,232,255,${pulseAlpha.toFixed(3)})`);
    idleGlow.addColorStop(1, 'rgba(93,232,255,0)');
    ctx.fillStyle = idleGlow;
    ctx.fillRect(0, centerY - 20, W, 40);

    const now2 = now;
    const hasEnoughIdle = particlesRef.current.filter((p) => p.isIdle).length >= IDLE_PARTICLE_TARGET;
    if (!hasEnoughIdle && now2 - lastIdleSpawnAt.current > IDLE_SPAWN_INTERVAL_MS) {
      const startX = Math.random() * 0.3; 
      particlesRef.current.push(createIdleParticle(startX));
      lastIdleSpawnAt.current = now2;
    }

    tickParticles(particlesRef.current, dt);
    particlesRef.current = evictDeadParticles(particlesRef.current);

    for (const p of particlesRef.current) {
      const px = p.x * W;
      const py = centerY + p.y;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));

      if (!p.isIdle && p.glow > 0.8) {
        
        const glowRadius = p.size * p.glow * 5;
        const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        glowGrad.addColorStop(0, p.color + 'cc');
        glowGrad.addColorStop(0.4, p.color + '44');
        glowGrad.addColorStop(1, p.color + '00');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      
      ctx.shadowBlur = p.isIdle ? 4 : p.size * p.glow * 3;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }, []);

  const startLoop = useCallback(() => {
    const tick = (now: number) => {
      if (!active) return;
      drawFrame(now);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [active, drawFrame]);

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!active) return;
    resizeCanvas();
    startLoop();

    const onResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    
    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stopLoop();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [active, resizeCanvas, startLoop, stopLoop]);

  useEffect(() => {
    if (!active) return;

    const unsub = bridge.subscribeEventActivity((emission) => {
      particlesRef.current.push(createSeamParticle(emission.channel));
      
      if (particlesRef.current.length > 80) {
        
        const oldest = particlesRef.current.find((p) => !p.isIdle);
        if (oldest) {
          particlesRef.current = particlesRef.current.filter((p) => p.id !== oldest.id);
        }
      }
    });

    return unsub;
  }, [active]);

  const seamTop = getSeamTop();
  const canvasTop = seamTop - BLEED_PX;

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: canvasTop,
        left: 0,
        width: '100vw',
        height: DIVIDER_H + BLEED_PX * 2,
        zIndex: 99,
        pointerEvents: 'none',
        
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    />
  );
}
