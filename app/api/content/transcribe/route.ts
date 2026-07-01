import { parseSRT, parseVTT, totalDurationMs } from '@/engins/contentengin/content/transcriptEditor';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const TranscribeSchema = z.object({
  
  subtitleContent: z.string().min(1).max(500_000).optional(),
  
  format: z.enum(['srt', 'vtt']).optional(),
  
  audioBase64: z.string().max(7_000_000).optional(),
  
  language: z.string().max(10).optional(),
});

type TranscribeBody = z.infer<typeof TranscribeSchema>;

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Body must be valid JSON' }, { status: 400 });
  }

  const parsed = TranscribeSchema.safeParse(body as TranscribeBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation error', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { subtitleContent, format, audioBase64 } = parsed.data;

  if (subtitleContent) {
    
    const detectedFormat = format ?? 'srt';
    let segments: ReturnType<typeof parseSRT> = [];
    try {
      segments = detectedFormat === 'vtt'
        ? parseVTT(subtitleContent)
        : parseSRT(subtitleContent);
    } catch {
      
    }

    const wordCount = segments.flatMap((s) => s.words).length;
    const durationMs = totalDurationMs(segments);

    return NextResponse.json({
      source: detectedFormat,
      rawContent: subtitleContent.trim(),
      segmentCount: segments.length,
      wordCount,
      durationMs,
      durationSeconds: +(durationMs / 1000).toFixed(2),
      message: `Transcript loaded from ${detectedFormat} file — ${segments.length} segments, ${wordCount} words.`,
    });
  }

  if (audioBase64) {
    
    return NextResponse.json({
      source: 'audio',
      rawContent: '',
      segmentCount: 0,
      wordCount: 0,
      durationMs: 0,
      durationSeconds: 0,
      message: 'Audio transcription is not yet configured. Upload an SRT or VTT file instead.',
    });
  }

  return NextResponse.json(
    { error: 'Provide either subtitleContent (SRT/VTT) or audioBase64.' },
    { status: 400 }
  );
}
