'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  life: number;
  color: string;
  size: number;
};



const NAT = {
  head:  { w: 702, h: 560 },
  coat:  { w: 68, h: 901 },
  arm1:  { w: 445, h: 683 },
  arm2:  { w: 445, h: 529 },
  shoe1: { w: 295, h: 400 },
  shoe2: { w: 295, h: 416 },
} as const;


const S = 0.35;

const DIM = {
  head:  { w: Math.round(NAT.head.w  * S), h: Math.round(NAT.head.h  * S) }, 
  coat:  { w: Math.round(NAT.coat.w  * S), h: Math.round(NAT.coat.h  * S) }, 
  arm1:  { w: Math.round(NAT.arm1.w  * S), h: Math.round(NAT.arm1.h  * S) }, 
  arm2:  { w: Math.round(NAT.arm2.w  * S), h: Math.round(NAT.arm2.h  * S) }, 
  shoe1: { w: Math.round(NAT.shoe1.w * S), h: Math.round(NAT.shoe1.h * S) }, 
  shoe2: { w: Math.round(NAT.shoe2.w * S), h: Math.round(NAT.shoe2.h * S) }, 
} as const;

type Zone = 'idle' | 'head' | 'torso' | 'legs';

const REACT_MS = 2300; 


export const ZONE_QUOTES: Record<Exclude<Zone, 'idle'>, string[]> = {
  head: [
    "SCAN COMPLET. Cheese Balls. ",
    "DREAM.exe loaded. All systems operational. 💻",
    "Sleep mode: suspended indefinitely. 💡",
    "Scanning for bad ideas... none found. Hello! ✨",
    "Head so full of DREAMs, even IDARi can't find the bugs. 🤖",
    "99 problems but a Electroencephalographically aint 1. 😌",
    "Credit Card confirmed buying 300000 hand sanitizers. 💭",
  ],
  torso: [
    "Right arm: deployed. Left arm: backup. DREAMs: on schedule. 💪",
    "These arms built DREAMengin. The coffee got credit it didn't earn. ☕",
    "Wave protocol active. Welcome to the platform. Stay a while. 👋",
    "Built with these arms, powered by your DREAMs. Engin-eering at its finest. 🛠️",
    "Left arm for balance. Right arm for shipping features. Both arms: legendary. 🙌",
    "Arms extended. Ready to catch every idea you throw at us. 🚀",
  ],
  legs: [
    "These shoes walked through every version of DREAMengin. Worth every step. 👟",
    "Sole purpose: building the foundation you stand on. Literally. ✨",
    "Step 1: dream it. Step 2: build it. Step 3: these shoes. That's the formula. 🔥",
    "Left shoe: logic. Right shoe: vibes. Both: absolutely necessary. 👠",
    "Legs run on DREAMs and impossible timelines. Currently running both. 🌟",
    "Every great journey on this platform starts right here. These feet know the path. 🚶",
  ],
};


export function pickZoneQuote(zone: Exclude<Zone, 'idle'>): string {
  const pool = ZONE_QUOTES[zone];
  return pool[Math.floor(Math.random() * pool.length)];
}


export function hitZone(offsetY: number, displayH: number): Zone {
  const rel = offsetY / displayH;
  if (rel < 0.30) return 'head';
  if (rel < 0.68) return 'torso';
  return 'legs';
}

type Images = {
  head:  HTMLImageElement | null;
  coat:  HTMLImageElement | null;
  arm1:  HTMLImageElement | null;
  arm2:  HTMLImageElement | null;
  shoe1: HTMLImageElement | null;
  shoe2: HTMLImageElement | null;
};

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload  = () => resolve(img);
    img.onerror = () => resolve(img); 
    img.src = src;
  });
}

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function HeroSprite({
  width  = 480,
  height = 480,
  className = '',
}: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const zoneRef    = useRef<Zone>('idle');
  const reactUntil = useRef<number>(0);
  const imgsRef    = useRef<Images>({
    head: null, coat: null, arm1: null, arm2: null, shoe1: null, shoe2: null,
  });

  const particlesRef = useRef<Particle[]>([]);

  const [hint, setHint] = useState<{ label: string; key: number } | null>(null);

  
  useEffect(() => {
    Promise.all([
      loadImg('/head_transparent.png'),
      loadImg('/coat_transparent.png'),
      loadImg('/arm2_transparent.png'),
      loadImg('/arm1_transparent.png'),
      loadImg('/shoe2_transparent.png'),
      loadImg('/shoe1_transparent.png'),
                ]).then(([head, coat, arm1, arm2, shoe1, shoe2]) => {
      imgsRef.current = { head, coat, arm1, arm2, shoe1, shoe2 };
    });
  }, []);

  
  const emitParticlesAt = useCallback((x: number, y: number, zone: Zone) => {
    if (zone === 'idle') return;
    const palettes: Record<Exclude<Zone, 'idle'>, string[]> = {
      head:  ['#FFE600', '#00E5FF', '#FFFFFF', '#FFD700', '#40F0FF'],
      torso: ['#C0D4E8', '#8ABEDC', '#E0EEF8', '#A8C8DC', '#D0E8F4'],
      legs:  ['#6080A0', '#8090B0', '#A0B4C8', '#B0C0D0', '#90A8BC'],
    };
    const colors = palettes[zone];
    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        life: 1.0,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 1.5 + Math.random() * 4,
      });
    }
  }, []);

  const triggerZone = useCallback((zone: Zone) => {
    if (zone === 'idle') return;
    zoneRef.current    = zone;
    reactUntil.current = performance.now() + REACT_MS;
    setHint({ label: pickZoneQuote(zone), key: Date.now() });
    setTimeout(() => setHint(null), REACT_MS - 100);
  }, []);

  const handlePointer = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const zone = hitZone(relY, rect.height);
    triggerZone(zone);
    emitParticlesAt(relX, relY, zone);
  }, [triggerZone, emitParticlesAt]);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') triggerZone('head');
    if (e.key === ' ')     triggerZone('torso');
    if (e.key === 'ArrowDown') triggerZone('legs');
  }, [triggerZone]);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctxOrNull = canvas.getContext('2d');
    if (!ctxOrNull) return;
    const ctx: CanvasRenderingContext2D = ctxOrNull;

    const dpr = window.devicePixelRatio || 1;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let rafId   = 0;
    let stopped = false;
    const startTime = performance.now();

    
    function drawPart(
      img: HTMLImageElement | null,
      pw: number, ph: number,
      dx: number, dy: number,
      pivotX: number, pivotY: number,
      angle: number,
    ) {
      if (!img?.complete || !img.naturalWidth) return;
      ctx.save();
      ctx.translate(pivotX, pivotY);
      ctx.rotate(angle);
      ctx.drawImage(img, dx - pivotX, dy - pivotY, pw, ph);
      ctx.restore();
    }

    
    function onVisibility( ){
      if (!document.hidden) rafId = requestAnimationFrame(tick);
    }
    document.addEventListener('visibilitychange', onVisibility);

    function tick(now: number ){
      if (stopped) return;

      
      if (document.hidden) { rafId = requestAnimationFrame(tick); return; }

      
      if (zoneRef.current !== 'idle' && now >= reactUntil.current) {
        zoneRef.current = 'idle';
      }

      const zone = zoneRef.current;
      const t    = (now - startTime) / 1000; 
      const imgs = imgsRef.current;

      ctx.clearRect(0, 0, width, height);

      const idleBob   = Math.sin(t * 1.6) * 3;                     
      const idleArm   = 0.65 + Math.sin(t * 1.6) * 0.08;          
      const idleWave  = -0.40 + Math.sin(t * 2.0) * 0.10;         
      const idleLeg   = Math.sin(t * 1.6) * 0.06;                  
      const idleHead  = Math.sin(t * 0.9) * 0.04;                  

      let headAngle  = idleHead;
      let headBounce = 0;
      let armAngle   = idleArm;       
      let arm2Angle  = idleWave;      
      let legAngle   = idleLeg;
      let bodyBob    = idleBob;

      if (zone !== 'idle') {
        
        const elapsed  = now - (reactUntil.current - REACT_MS);
        const progress = Math.min(elapsed / REACT_MS, 1);

        if (zone === 'head') {
          
          headAngle  = Math.sin(progress * Math.PI * 10) * 0.45 * (1 - progress);
          headBounce = Math.sin(progress * Math.PI * 5)  * -12  * (1 - progress);
        } else if (zone === 'torso') {
          
          armAngle  = Math.sin(progress * Math.PI * 7) * 0.95* (1 - progress * 0.4);
          arm2Angle = Math.sin(progress * Math.PI * 7) * 0.95* (1 - progress * 0.4);
          bodyBob   = Math.sin(progress * Math.PI * 4) * 5;
        } else if (zone === 'legs') {
          
          legAngle = Math.sin(progress * Math.PI * 8) * 0.65 * (1 - progress * 0.3);
          bodyBob  = Math.abs(Math.sin(progress * Math.PI * 3)) * -10 * (1 - progress);
        }
      }

      const cx        = width / 2;
      const feetY     = height - 22 + bodyBob;
      const shoeTopY  = feetY  - DIM.shoe1.h;
      const coatBotY  = feetY  - DIM.shoe1.h + 4;   
      const coatTopY  = coatBotY - DIM.coat.h;
      const headTopY  = coatTopY - DIM.head.h + 8 + headBounce; 
      const shoulderY = coatTopY + 6;                

      
      
      const shoulderXR = cx - Math.round(DIM.coat.w * 0.44); 
      const shoulderXL = cx + Math.round(DIM.coat.w * 0.44); 

      
      const hipXR = cx + Math.round(DIM.coat.w * 0.20); 
      const hipXL = cx - Math.round(DIM.coat.w * 0.20); 

      
      ctx.fillStyle = 'rgba(0,0,0,0.20)';
      ctx.beginPath();
      ctx.ellipse(cx, feetY + 5, 24, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      
      
      
      drawPart(
        imgs.arm2, DIM.arm2.w, DIM.arm2.h,
        shoulderXL - Math.round(DIM.arm2.w * 0.87), shoulderY - Math.round(DIM.arm2.h * 0.04),
        shoulderXL, shoulderY,                 
        -armAngle,
      );

      
      drawPart(
        imgs.shoe1, DIM.shoe1.w, DIM.shoe1.h,
        hipXL - Math.round(DIM.shoe1.w / 2), shoeTopY,   
        hipXL, shoeTopY,                                   
        -legAngle,
      );

      
      if (imgs.coat?.complete && imgs.coat.naturalWidth) {
        ctx.drawImage(imgs.coat, cx - DIM.coat.w / 2, coatTopY, DIM.coat.w, DIM.coat.h);
      }

      
      drawPart(
        imgs.shoe2, DIM.shoe2.w, DIM.shoe2.h,
        hipXR - Math.round(DIM.shoe2.w / 2), shoeTopY,   
        hipXR, shoeTopY,                                   
        legAngle,
      );

      
      
      
      
      drawPart(
        imgs.arm1, DIM.arm1.w, DIM.arm1.h,
        shoulderXR - Math.round(DIM.arm1.w * 0.88), shoulderY - Math.round(DIM.arm1.h * 0.10),
        shoulderXR, shoulderY,                 
        arm2Angle,
      );

      
      if (imgs.head?.complete && imgs.head.naturalWidth) {
        ctx.save();
        ctx.translate(cx, headTopY + DIM.head.h / 2);
        ctx.rotate(headAngle);
        ctx.drawImage(imgs.head, -DIM.head.w / 2, -DIM.head.h / 2, DIM.head.w, DIM.head.h);
        ctx.restore();
      }

      
      {
        const symX  = cx;
        const symY  = headTopY + Math.round(DIM.head.h * 0.54) + headBounce;
        const fsize = Math.round(DIM.head.w * 0.38);
        const glow  = 8 + Math.sin(t * 3.2) * 4;
        ctx.save();
        ctx.font          = `bold ${fsize}px "Arial Unicode MS","Segoe UI Symbol","Helvetica","DejaVu Sans",sans-serif`;
        ctx.textAlign     = 'center';
        ctx.textBaseline  = 'middle';
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, symY - fsize, symX, fsize * 2);
        ctx.clip();
        ctx.fillStyle   = '#FFE600';
        ctx.shadowColor = '#FFE600';
        ctx.shadowBlur  = glow;
        ctx.fillText('∞', symX, symY);
        ctx.restore();
        
        ctx.save();
        ctx.beginPath();
        ctx.rect(symX, symY - fsize, width, fsize * 2);
        ctx.clip();
        ctx.fillStyle   = '#00E5FF';
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur  = glow;
        ctx.fillText('∞', symX, symY);
        ctx.restore();
        ctx.restore();
      }

      
      {
        const live: Particle[] = [];
        for (const p of particlesRef.current) {
          p.x  += p.vx;
          p.y  += p.vy;
          p.vy += 0.14;   
          p.vx *= 0.96;   
          p.life -= 0.025;
          if (p.life > 0) {
            live.push(p);
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle   = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur  = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
        particlesRef.current = live;
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [width, height]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'none',
          display: 'block',
          width: width,
          height: height,
        }}
        aria-label="Dr. Eams — tap head, torso, or legs to interact"
        role="img"
        tabIndex={0}
        onPointerDown={handlePointer}
        onKeyDown={handleKey}
      />
      {hint && (
        <div
          key={hint.key}
          style={{
            position: 'absolute',
            top: -Math.round(height * 0.25),
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.95)',
            background: 'rgba(10,30,80,0.82)',
            border: '1px solid rgba(90,200,250,0.4)',
            borderRadius: 12,
            padding: '7px 14px',
            maxWidth: Math.round(width * 0.65),
            textAlign: 'center',
            whiteSpace: 'normal',
            animation: 'de-fade-up 0.25s ease forwards',
          }}
        >
          {hint.label}
        </div>
      )}
    </div>
  );
}
