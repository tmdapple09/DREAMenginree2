


export interface BezierPoint {
  
  x: number;
  y: number;
  
  inTanX: number;
  inTanY: number;
  
  outTanX: number;
  outTanY: number;
}


export interface RotoShape {
  
  frame: number;
  points: BezierPoint[];
  
  inverted: boolean;
  
  feather: number;
}


export interface RotoLayer {
  id: string;
  name: string;
  
  opacity: number;
  
  visible: boolean;
  
  blendMode: 'add' | 'subtract' | 'intersect';
  
  keyframes: RotoShape[];
}


export interface RotoProject {
  id: string;
  name: string;
  width: number;
  height: number;
  frameCount: number;
  fps: number;
  layers: RotoLayer[];
}


export interface InterpolatedShape {
  frame: number;
  points: BezierPoint[];
  opacity: number;
  feather: number;
}




export function createProject(
  name: string,
  width: number,
  height: number,
  frameCount: number,
  fps = 24
): RotoProject {
  return {
    id: `roto_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name, width, height, frameCount, fps, layers: [],
  };
}


export function addLayer(project: RotoProject, name: string): RotoProject {
  const layer: RotoLayer = {
    id: `layer_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name, opacity: 1, visible: true, blendMode: 'add', keyframes: [],
  };
  return { ...project, layers: [...project.layers, layer] };
}


export function setKeyframe(
  project: RotoProject,
  layerId: string,
  shape: RotoShape
): RotoProject {
  const layers = project.layers.map((l) => {
    if (l.id !== layerId) return l;
    const kfs = l.keyframes.filter((k) => k.frame !== shape.frame);
    return { ...l, keyframes: [...kfs, shape].sort((a, b) => a.frame - b.frame) };
  });
  return { ...project, layers };
}


export function removeKeyframe(
  project: RotoProject,
  layerId: string,
  frame: number
): RotoProject {
  const layers = project.layers.map((l) =>
    l.id !== layerId ? l : { ...l, keyframes: l.keyframes.filter((k) => k.frame !== frame) }
  );
  return { ...project, layers };
}


export function interpolateShape(layer: RotoLayer, frame: number): InterpolatedShape | null {
  if (layer.keyframes.length === 0) return null;

  const kfs = layer.keyframes;
  
  const exact = kfs.find((k) => k.frame === frame);
  if (exact) return { frame, points: exact.points, opacity: layer.opacity, feather: exact.feather };

  
  if (frame <= kfs[0].frame) return { frame, points: kfs[0].points, opacity: layer.opacity, feather: kfs[0].feather };
  if (frame >= kfs[kfs.length - 1].frame) {
    const last = kfs[kfs.length - 1];
    return { frame, points: last.points, opacity: layer.opacity, feather: last.feather };
  }

  
  let left = 0;
  let right = kfs.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (kfs[mid].frame <= frame) left = mid;
    else right = mid;
  }
  const lo = kfs[left];
  const hi = kfs[right];

  const t = (frame - lo.frame) / (hi.frame - lo.frame);

  
  if (lo.points.length !== hi.points.length) {
    return { frame, points: lo.points, opacity: layer.opacity, feather: lerp(lo.feather, hi.feather, t) };
  }

  const points = lo.points.map((lp, i: number) => {
    const hp = hi.points[i];
    return {
      x: lerp(lp.x, hp.x, t),
      y: lerp(lp.y, hp.y, t),
      inTanX: lerp(lp.inTanX, hp.inTanX, t),
      inTanY: lerp(lp.inTanY, hp.inTanY, t),
      outTanX: lerp(lp.outTanX, hp.outTanX, t),
      outTanY: lerp(lp.outTanY, hp.outTanY, t),
    };
  });

  return { frame, points, opacity: layer.opacity, feather: lerp(lo.feather, hi.feather, t) };
}


export function exportShapeSVG(shape: RotoShape, w: number, h: number): string {
  if (shape.points.length === 0) return '';

  function px(norm: number, dim: number): string {
    return (norm * dim).toFixed(2);
  }

  const pts = shape.points;
  const first = pts[0];
  let d = `M ${px(first.x, w)} ${px(first.y, h)}`;

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const next = pts[(i + 1) % pts.length];
    const cp1x = (p.x + p.outTanX) * w;
    const cp1y = (p.y + p.outTanY) * h;
    const cp2x = (next.x + next.inTanX) * w;
    const cp2y = (next.y + next.inTanY) * h;
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${px(next.x, w)} ${px(next.y, h)}`;
  }

  d += ' Z';

  const fill = shape.inverted ? 'black' : 'white';
  const filter = shape.feather > 0 ? ` filter="url(#feather_${shape.frame})"` : '';
  return `<path d="${d}" fill="${fill}" opacity="1"${filter} />`;
}


export function exportFrameSVG(project: RotoProject, frame: number): string {
  const { width: w, height: h } = project;
  const shapePaths: string[] = [];
  const filters: string[] = [];

  for (const layer of project.layers) {
    if (!layer.visible) continue;
    const interp = interpolateShape(layer, frame);
    if (!interp || interp.points.length === 0) continue;

    if (interp.feather > 0) {
      const blur = interp.feather * Math.max(w, h);
      filters.push(
        `<filter id="feather_${frame}" x="-50%" y="-50%" width="200%" height="200%">` +
        `<feGaussianBlur in="SourceGraphic" stdDeviation="${blur.toFixed(2)}" />` +
        `</filter>`
      );
    }

    const dummyShape: RotoShape = {
      frame,
      points: interp.points,
      inverted: false,
      feather: interp.feather,
    };
    shapePaths.push(exportShapeSVG(dummyShape, w, h));
  }

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`,
    `<defs>${filters.join('')}</defs>`,
    `<rect width="${w}" height="${h}" fill="black" />`,
    ...shapePaths,
    '</svg>',
  ].join('\n');
}


export function keyframeList(layer: RotoLayer): number[] {
  return layer.keyframes.map((k) => k.frame);
}



function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
