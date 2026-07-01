

export interface GenerativeFillRequest {
  
  imageBase64: string;
  
  prompt: string;
  
  mask?: { x: number; y: number; width: number; height: number };
  
  quality?: 'fast' | 'hd';
}

export interface GenerativeFillResult {
  
  resultBase64: string;
  
  message: string;
  
  provider: string;
}

export interface DominantColor {
  r: number;
  g: number;
  b: number;
  
  hex: string;
  
  coverage: number;
}

export interface ImageAnalysis {
  dominantColors: DominantColor[];
  width: number;
  height: number;
  averageBrightness: number;
}




export async function requestGenerativeFill(
  req: GenerativeFillRequest,
  retries = 1
): Promise<GenerativeFillResult> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('/api/content/generative-fill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      });

      if (res.status >= 500 && attempt < retries) {
        
        await sleep(300 * (attempt + 1));
        continue;
      }

      if (!res.ok && res.status !== 501) {
        const err = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(err.error ?? `Generative fill failed (${res.status})`);
      }

      return res.json() as Promise<GenerativeFillResult>;
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < retries) {
        await sleep(300 * (attempt + 1));
        continue;
      }
    }
  }

  throw lastError ?? new Error('Generative fill failed');
}




export function createMaskDataUrl(
  imageWidth: number,
  imageHeight: number,
  selection: { x: number; y: number; width: number; height: number }
): string {
  if (typeof document === 'undefined') {
    throw new Error('createMaskDataUrl requires a browser environment.');
  }

  const canvas = document.createElement('canvas');
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D context for mask canvas.');

  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, imageWidth, imageHeight);

  
  const px = Math.round(selection.x * imageWidth);
  const py = Math.round(selection.y * imageHeight);
  const pw = Math.round(selection.width * imageWidth);
  const ph = Math.round(selection.height * imageHeight);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(px, py, pw, ph);

  const dataUrl = canvas.toDataURL('image/png');
  return dataUrl.split(',')[1] ?? dataUrl;
}


export function analyzeImageColors(img: HTMLImageElement, topN = 5): ImageAnalysis {
  if (typeof document === 'undefined') {
    throw new Error('analyzeImageColors requires a browser environment.');
  }

  const canvas = document.createElement('canvas');
  const maxDim = 200; 
  const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
  canvas.width = Math.round(img.naturalWidth * scale);
  canvas.height = Math.round(img.naturalHeight * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D context for analysis canvas.');

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const buckets = new Map<number, number>();
  let totalBrightness = 0;
  const totalPixels = canvas.width * canvas.height;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i] >> 3;     
    const g = data[i + 1] >> 3;
    const b = data[i + 2] >> 3;
    const key = (r << 10) | (g << 5) | b;
    buckets.set(key, (buckets.get(key) ?? 0) + 1);

    const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
    totalBrightness += brightness;
  }

  const sorted = [...buckets.entries()].sort((a, b) => b[1] - a[1]).slice(0, topN);

  const dominantColors: DominantColor[] = sorted.map(([key, count]) => {
    const r = ((key >> 10) & 0x1f) << 3;
    const g = ((key >> 5) & 0x1f) << 3;
    const b = (key & 0x1f) << 3;
    return {
      r, g, b,
      hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
      coverage: count / totalPixels,
    };
  });

  return {
    dominantColors,
    width: img.naturalWidth,
    height: img.naturalHeight,
    averageBrightness: totalPixels > 0 ? totalBrightness / totalPixels : 0,
  };
}




export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      
      const base64 = result.split(',')[1] ?? result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}



function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
