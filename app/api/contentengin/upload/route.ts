import { NextRequest, NextResponse } from 'next/server';
import { analyzeImageBytes } from '@/engins/contentengin/photo/imageAnalyzer';


const MAX_REFERENCE_IMAGE_BYTES = 6 * 1024 * 1024;
const PNG_MIME_TYPES = new Set(['image/png', 'application/octet-stream', '']);

function safeFileName(name: string): string {
  const trimmed = name.trim().replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, 120);
  return trimmed || 'source.png';
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const form = await req.formData();
    const file = form.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file is required' }, { status: 400 });
    }

    if (file.size <= 0) {
      return NextResponse.json({ error: 'file is empty' }, { status: 400 });
    }

    if (file.size > MAX_REFERENCE_IMAGE_BYTES) {
      return NextResponse.json({ error: 'PNG reference image exceeds the 6 MB local analysis limit' }, { status: 413 });
    }

    if (!PNG_MIME_TYPES.has(file.type)) {
      return NextResponse.json({ error: 'Only PNG reference images are supported by the deterministic local analyzer' }, { status: 415 });
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    const sourceAnalysis = await analyzeImageBytes(bytes, safeFileName(file.name));

    return NextResponse.json({
      uploaded: false,
      persisted: false,
      sourceImagesRetained: false,
      sourceAnalysis,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to analyze reference image';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
