import type { SupabaseClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import type { ChildSafetyResult } from './childSafetyDetector';
import { scanContent } from './childSafetyDetector';
import { classifyImage } from './imageClassifier';






























const MAX_IMAGES_PER_SCAN = 4;


const FETCH_TIMEOUT_MS = 10_000; 


const MAX_IMAGE_BYTES = 5_242_880;


const IMAGE_MIME_PREFIX = 'image/';


type ImageMime = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif';
const SUPPORTED_IMAGE_MIMES: ImageMime[] = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];


const EXT_TO_MIME: Record<string, ImageMime> = {
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  png:  'image/png',
  webp: 'image/webp',
  gif:  'image/gif',
};






interface SupabaseLike {

  from: (table: string) => any;
}

export interface ScanMediaUrlsInput {
  
  urls: string[];
  
  supabase: SupabaseLike;
}






function inferMime(contentType: string | null, url: string): ImageMime | null {
  if (contentType) {
    const base = contentType.split(';')[0].trim().toLowerCase();
    if (SUPPORTED_IMAGE_MIMES.includes(base as ImageMime)) {
      return base as ImageMime;
    }
    if (base.startsWith(IMAGE_MIME_PREFIX)) {
      
      return 'image/jpeg';
    }
    
    return null;
  }

  
  const pathname = new URL(url).pathname;
  const ext = pathname.split('.').pop()?.toLowerCase() ?? '';
  return EXT_TO_MIME[ext] ?? null;
}


async function loadKnownBadHashes(supabase: SupabaseLike): Promise<Set<string>> {
  try {
    const { data, error } = await (supabase as SupabaseClient)
      .from('child_safety_hash_registry')
      .select('hash_sha256');
    if (error || !data) return new Set();
    return new Set(
      (data as { hash_sha256: string }[]).map((r) => r.hash_sha256.toLowerCase()),
    );
  } catch {
    return new Set();
  }
}


function cleanResult(): ChildSafetyResult {
  return {
    flagged: false,
    rule_code: null,
    severity: 0,
    confidence: 0,
    category: 'CLEAN',
    signal_count: 0,
    _audit: { signals: [], hash_match: false },
  };
}


async function fetchImageWithTimeout(
  url: string,
): Promise<{ buffer: Buffer; mime: ImageMime | null } | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'image/*' },
    });
    if (!res.ok) return null;

    const contentType = res.headers.get('content-type');
    const mime = inferMime(contentType, url);
    if (mime === null) return null; 

    
    const contentLength = parseInt(res.headers.get('content-length') ?? '0', 10);
    if (contentLength > MAX_IMAGE_BYTES) return null;

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.byteLength > MAX_IMAGE_BYTES) return null;

    return { buffer, mime };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}






export async function scanMediaUrlsForChildSafety(
  input: ScanMediaUrlsInput,
): Promise<ChildSafetyResult> {
  const { urls, supabase } = input;

  if (!urls || urls.length === 0) return cleanResult();

  
  const imageUrls = urls.slice(0, MAX_IMAGES_PER_SCAN);

  
  const knownBadHashes = await loadKnownBadHashes(supabase);

  let worstResult: ChildSafetyResult = cleanResult();

  for (const url of imageUrls) {
    try {
      
      new URL(url);
    } catch {
      continue; 
    }

    const fetched = await fetchImageWithTimeout(url);
    if (!fetched) continue; 

    const { buffer, mime } = fetched;

    const imageHash = createHash('sha256').update(buffer).digest('hex');
    const hashResult = scanContent({
      mediaHashes: [imageHash],
      knownBadHashes,
    });

    if (hashResult.flagged) {
      
      return hashResult;
    }

    const imageBase64 = buffer.toString('base64');
    const imgClassification = await classifyImage(imageBase64, mime ?? 'image/jpeg');

    const result = scanContent({ imageClassification: imgClassification });

    if (result.flagged && result.severity > worstResult.severity) {
      worstResult = result;
    }
  }

  return worstResult;
}


export function isImageUrl(url: string): boolean {
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    const ext = pathname.split('.').pop() ?? '';
    return ext in EXT_TO_MIME || pathname.includes('/images/');
  } catch {
    return false;
  }
}
