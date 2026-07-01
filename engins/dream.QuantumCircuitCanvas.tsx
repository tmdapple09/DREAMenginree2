'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';




type C = [number, number];

function cadd([r1, i1]: C, [r2, i2]: C): C { return [r1 + r2, i1 + i2]; }
function cmul([r1, i1]: C, [r2, i2]: C): C { return [r1 * r2 - i1 * i2, r1 * i2 + i1 * r2]; }
function cmag2([r, i]: C): number { return r * r + i * i; }

const IS2 = 1 / Math.SQRT2; 

type Gate = [C, C, C, C];

const GATE_H: Gate = [[IS2, 0], [IS2, 0], [IS2, 0], [-IS2, 0]];


function gateRx(theta: number): Gate {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [[c, 0], [0, -s], [0, -s], [c, 0]];
}

function gateRy(theta: number): Gate {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [[c, 0], [-s, 0], [s, 0], [c, 0]];
}

function gateRz(theta: number): Gate {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
  return [[c, -s], [0, 0], [0, 0], [c, s]];
}



type SV = C[];

function groundState(n: number): SV {
  const sv: SV = Array.from({ length: 1 << n }, () => [0, 0] as C);
  sv[0] = [1, 0];
  return sv;
}

function measurementProbs(sv: SV): number[] {
  return sv.map(cmag2);
}


function applyGate1(sv: SV, n: number, q: number, u: Gate): SV {
  const next = sv.slice();
  const bit = 1 << (n - 1 - q); 
  for (let i = 0; i < sv.length; i++) {
    if (i & bit) continue; 
    const j = i | bit;     
    const a = sv[i], b = sv[j];
    next[i] = cadd(cmul(u[0], a), cmul(u[1], b)); 
    next[j] = cadd(cmul(u[2], a), cmul(u[3], b)); 
  }
  return next;
}


function applyCNOT(sv: SV, n: number, ctrl: number, tgt: number): SV {
  const next = sv.slice();
  const cBit = 1 << (n - 1 - ctrl);
  const tBit = 1 << (n - 1 - tgt);
  for (let i = 0; i < sv.length; i++) {
    
    if ((i & cBit) !== 0 && (i & tBit) === 0) {
      const j = i | tBit;
      next[i] = sv[j];
      next[j] = sv[i];
    }
  }
  return next;
}

export type GateOp =
  | { kind: 'H';  q: number; label: string }
  | { kind: 'Rx' | 'Ry' | 'Rz'; q: number; theta: number; label: string }
  | { kind: 'CX'; ctrl: number; tgt: number; label: string };

function applyOp(sv: SV, n: number, op: GateOp): SV {
  if (op.kind === 'CX') return applyCNOT(sv, n, op.ctrl, op.tgt);
  if (op.kind === 'H')  return applyGate1(sv, n, op.q, GATE_H);
  if (op.kind === 'Rx') return applyGate1(sv, n, op.q, gateRx(op.theta));
  if (op.kind === 'Ry') return applyGate1(sv, n, op.q, gateRy(op.theta));
  return applyGate1(sv, n, op.q, gateRz(op.theta)); 
}






function buildQAOA(n: number, gamma: number, beta: number): GateOp[] {
  const ops: GateOp[] = [];
  
  for (let q = 0; q < n; q++) ops.push({ kind: 'H', q, label: 'H' });
  
  for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1, label: 'CX' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: gamma, label: 'Rz' });
  
  for (let q = 0; q < n; q++) ops.push({ kind: 'Rx', q, theta: 2 * beta, label: 'Rx' });
  
  for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1, label: 'CX' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: gamma / 2, label: 'Ry' });
  return ops;
}


function buildRealAmplitudes(n: number, layer1: number[], layer2: number[]): GateOp[] {
  const ops: GateOp[] = [];
  for (let q = 0; q < n; q++) ops.push({ kind: 'H', q, label: 'H' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: layer1[q] ?? Math.PI / 4, label: 'Ry' });
  for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1, label: 'CX' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: layer2[q] ?? Math.PI / 4, label: 'Ry' });
  return ops;
}


function buildEfficientSU2(n: number, params: number[]): GateOp[] {
  const ops: GateOp[] = [];
  const p = (i: number) => params[i] ?? Math.PI / 4;
  for (let q = 0; q < n; q++) ops.push({ kind: 'H', q, label: 'H' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: p(q),         label: 'Ry' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: p(q + n),     label: 'Rz' });
  for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1, label: 'CX' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: p(q + 2 * n), label: 'Ry' });
  for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: p(q + 3 * n), label: 'Rz' });
  return ops;
}







const ASSET_RETURNS  = [0.12, 0.09, 0.15];
const ASSET_SIGMA    = [0.20, 0.15, 0.25];
const ASSET_CORR     = [[1, 0.3, 0.1], [0.3, 1, 0.2], [0.1, 0.2, 1]];
const RISK_AVERSION  = 0.5;


function quboCost(bits: boolean[]): number {
  let cost = 0;
  const n = bits.length;
  for (let i = 0; i < n; i++) {
    if (bits[i]) cost -= ASSET_RETURNS[i] ?? 0.1;
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (bits[i] && bits[j]) {
        const cov = (ASSET_SIGMA[i] ?? 0.2) * (ASSET_SIGMA[j] ?? 0.2) * ((ASSET_CORR[i]?.[j]) ?? 0.2);
        cost += RISK_AVERSION * cov;
      }
    }
  }
  return cost;
}

function makeCircuit(n: number, algorithm: string, ansatz: string): GateOp[] {
  if (algorithm === 'qaoa') {
    
    
    const gamma = Math.PI * 0.4;
    const beta  = Math.PI * 0.35;
    return buildQAOA(n, gamma, beta);
  }
  if (ansatz === 'efficient_su2') {
    
    const p = [0.9, 0.7, 1.1,  0.6, 0.8, 0.5,  1.2, 1.0, 0.7,  0.4, 0.8, 1.0];
    return buildEfficientSU2(n, p);
  }
  
  const t1 = [Math.PI / 3, Math.PI / 4, Math.PI / 5];
  const t2 = [Math.PI / 6, Math.PI / 4, Math.PI / 3];
  return buildRealAmplitudes(n, t1, t2);
}

export interface QuantumMeasurementResult {
  
  probabilities: number[];
  
  topBitstring: string;
  
  topProbability: number;
  
  selectedAssets: boolean[];
  
  expectationValue: number;
}

function buildMeasurementResult(ps: number[], n: number): QuantumMeasurementResult {
  const topIdx = ps.reduce((best, v: number, i: number) => (v > ps[best] ? i : best), 0);
  const topBits = Array.from({ length: n }, (_, k: number ) => Boolean((topIdx >> (n - 1 - k)) & 1));
  const ev = ps.reduce((sum: number, prob, i: number) => {
    const bits = Array.from({ length: n }, (_, k: number ) => Boolean((i >> (n - 1 - k)) & 1));
    return sum + prob * quboCost(bits);
  }, 0);
  return {
    probabilities:    ps,
    topBitstring:     topBits.map((b) => (b ? '1' : '0')).join(''),
    topProbability:   ps[topIdx],
    selectedAssets:   topBits,
    expectationValue: ev,
  };
}


function scheduleColumns(ops: GateOp[], n: number): number[] {
  const lastCol = new Array<number>(n).fill(-1);
  return ops.map((op) => {
    const qs = op.kind === 'CX' ? [op.ctrl, op.tgt] : [op.q];
    const col = Math.max(...qs.map((q) => lastCol[q])) + 1;
    qs.forEach((q) => { lastCol[q] = col; });
    return col;
  });
}

const BG_COLOR   = 'rgba(7, 10, 17, 0.98)';
const WIRE_COLOR = '#1a2535';
const DIM_COLOR  = '#2d3d52';


function hexToRGB(hex: string): string {
  if (hex.length === 7 && hex[0] === '#') {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
  return '100,180,255'; 
}

function drawGateBox(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number,
  gw: number, gh: number,
  label: string,
  color: string,
  active: boolean,
) {
  if (active) { ctx.shadowColor = color; ctx.shadowBlur = 10; }
  ctx.fillStyle = `rgba(${hexToRGB(color)},0.12)`;
  ctx.fillRect(cx - gw / 2, cy - gh / 2, gw, gh);
  ctx.strokeStyle = color;
  ctx.lineWidth = active ? 1.5 : 0.8;
  ctx.strokeRect(cx - gw / 2, cy - gh / 2, gw, gh);
  ctx.shadowBlur = 0;
  ctx.fillStyle = color;
  ctx.font = `bold ${Math.max(5, Math.floor(gh * 0.55))}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, cx, cy);
}

function drawCNOTGate(
  ctx: CanvasRenderingContext2D,
  cx: number, yCtrl: number, yTgt: number,
  color: string,
  active: boolean,
) {
  if (active) { ctx.shadowColor = color; ctx.shadowBlur = 8; }
  ctx.strokeStyle = color;
  ctx.lineWidth = active ? 1.5 : 0.8;
  
  ctx.beginPath(); ctx.moveTo(cx, yCtrl); ctx.lineTo(cx, yTgt); ctx.stroke();
  
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(cx, yCtrl, 3.5, 0, Math.PI * 2); ctx.fill();
  
  const r = 6;
  ctx.beginPath(); ctx.arc(cx, yTgt, r, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - r, yTgt); ctx.lineTo(cx + r, yTgt);
  ctx.moveTo(cx, yTgt - r); ctx.lineTo(cx, yTgt + r);
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawMeasureBox(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string): void {
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;
  
  ctx.beginPath(); ctx.arc(cx, cy + r * 0.15, r * 0.85, Math.PI, 0); ctx.stroke();
  
  ctx.beginPath(); ctx.moveTo(cx, cy + r * 0.15); ctx.lineTo(cx + r * 0.7, cy - r * 0.55); ctx.stroke();
}

function renderFrame(
  ctx: CanvasRenderingContext2D,
  W: number, H: number,
  n: number,
  ops: GateOp[],
  cols: number[],
  numCols: number,
  step: number,
  sv: SV,
  accent: string,
  secondary: string,
) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, W, H);

  const circuitH  = Math.floor(H * 0.62);
  const probY     = circuitH;
  const probH     = H - circuitH;
  const LEFT      = 26;
  const RIGHT     = 20; 
  const wireSpacing = circuitH / (n + 1);
  const wireYs    = Array.from({ length: n }, (_, q: number) => wireSpacing * (q + 1));
  const colW      = numCols > 0 ? (W - LEFT - RIGHT) / numCols : W - LEFT - RIGHT;
  const gateH     = Math.min(13, wireSpacing * 0.58);
  const gateW     = Math.min(22, colW * 0.75);

  for (let q = 0; q < n; q++) {
    const y = (wireYs[q] as number);
    ctx.fillStyle = '#5a7a9a';
    ctx.font = '9px monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`q${q}`, 2, y);
    ctx.strokeStyle = WIRE_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(LEFT - 4, y); ctx.lineTo(W - RIGHT, y); ctx.stroke();
  }

  for (let i = 0; i < ops.length; i++) {
    const op     = ops[i];
    const col    = cols[i];
    const cx     = LEFT + (col + 0.5) * colW;
    const active = i === step - 1;
    const past   = i < step;
    const color  = active ? accent : past ? accent + 'aa' : DIM_COLOR;

    if (op.kind === 'CX') {
      drawCNOTGate(ctx, cx, wireYs[op.ctrl], wireYs[op.tgt], color, active);
    } else {
      drawGateBox(ctx, cx, wireYs[op.q], gateW, gateH, op.label, color, active);
    }
  }

  const mx    = W - RIGHT + 10;
  const done  = step >= ops.length;
  for (let q = 0; q < n; q++) {
    drawMeasureBox(ctx, mx, (wireYs[q] as number), 6, done ? accent : DIM_COLOR);
  }

  const ps    = measurementProbs(sv);
  const count = 1 << n;
  const barW  = (W - 6) / count;
  const maxBH = probH - 17;
  const topI  = ps.reduce((b, v: number, i: number) => (v > ps[b] ? i : b), 0);

  ctx.fillStyle = '#334155';
  ctx.font = '6px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('MEASUREMENT DISTRIBUTION', 4, probY + 7);

  for (let i = 0; i < count; i++) {
    const x     = 3 + i * barW;
    const bh    = Math.max(1, ps[i] * maxBH);
    const isTop = done && i === topI;
    const col   = isTop ? accent : done ? secondary + '99' : DIM_COLOR + '55';

    ctx.fillStyle = col;
    ctx.fillRect(x + 1, probY + probH - bh - 9, barW - 2, bh);

    
    const lbl = i.toString(2).padStart(n, '0');
    ctx.fillStyle = isTop ? accent : '#3d5068';
    ctx.font = `${Math.max(5, Math.floor(barW * 0.28))}px monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(lbl, x + barW / 2, probY + probH - 1);

    
    if (done && ps[i] > 0.04) {
      ctx.fillStyle = isTop ? accent : secondary + 'cc';
      ctx.font = '5px sans-serif';
      ctx.fillText(
        `${(ps[i] * 100).toFixed(0)}%`,
        x + barW / 2,
        probY + probH - bh - 11,
      );
    }
  }
}

export interface QuantumCircuitCanvasProps {
  active: boolean;
  accentColor: string;
  secondaryColor: string;
  height: number;
  numQubits?: number;
  algorithm?: 'vqe' | 'qaoa';
  ansatz?: 'real_amplitudes' | 'efficient_su2';
  onMeasure?: (result: QuantumMeasurementResult) => void;
}

const STEP_MS = 140; 

export default function QuantumCircuitCanvas({
  active,
  accentColor,
  secondaryColor,
  height,
  numQubits = 3,
  algorithm = 'vqe',
  ansatz = 'real_amplitudes',
  onMeasure,
}: QuantumCircuitCanvasProps) {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const svRef          = useRef<SV>(groundState(numQubits));
  const stepRef        = useRef(0);
  const measuredRef    = useRef(false);
  const rafRef         = useRef<number>(0);
  const tPrevRef       = useRef<number>(0);
  const onMeasureRef   = useRef(onMeasure);
  onMeasureRef.current = onMeasure;

  const ops     = useMemo(() => makeCircuit(numQubits, algorithm, ansatz),
    [numQubits, algorithm, ansatz]);
  const cols    = useMemo(() => scheduleColumns(ops, numQubits), [ops, numQubits]);
  const numCols = useMemo(
    () => (cols.length > 0 ? Math.max(...cols) + 1 : 1),
    [cols],
  );

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    renderFrame(
      ctx, canvas.width, canvas.height,
      numQubits, ops, cols, numCols,
      stepRef.current, svRef.current,
      accentColor, secondaryColor,
    );
  }, [numQubits, ops, cols, numCols, accentColor, secondaryColor]);

  
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);

    if (!active) {
      
      svRef.current  = groundState(numQubits);
      stepRef.current = 0;
      measuredRef.current = false;
      tPrevRef.current = 0;
      paint();
      return;
    }

    const tick = (ts: number) => {
      if (ts - tPrevRef.current >= STEP_MS) {
        tPrevRef.current = ts;
        if (stepRef.current < ops.length) {
          svRef.current = applyOp(svRef.current, numQubits, ops[stepRef.current]);
          stepRef.current++;
          paint();
          if (stepRef.current === ops.length && !measuredRef.current) {
            measuredRef.current = true;
            const result = buildMeasurementResult(
              measurementProbs(svRef.current),
              numQubits,
            );
            onMeasureRef.current?.(result);
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, numQubits, ops, paint]);

  
  useEffect(() => { paint(); }, [paint]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={height}
      style={{ width: '100%', height, display: 'block' }}
    />
  );
}
