

export interface TranscriptWord {
  index: number;
  word: string;
  startMs: number;
  endMs: number;
  
  isSearchMatch?: boolean;
}

export interface TranscriptSegment {
  id: number;
  startMs: number;
  endMs: number;
  text: string;
  words: TranscriptWord[];
}

export interface TimelineCut {
  
  cutStartMs: number;
  
  cutEndMs: number;
  
  replacement?: string;
}

export interface SearchResult {
  segmentId: number;
  wordIndex: number;
  word: string;
  startMs: number;
  endMs: number;
  
  charOffset: number;
}




export function parseSRT(srt: string): TranscriptSegment[] {
  const blocks = srt.trim().split(/\n\s*\n/);
  const segments: TranscriptSegment[] = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length < 3) continue;
    const id = parseInt(lines[0], 10);
    const timeLine = lines[1];
    const text = lines.slice(2).join(' ').replace(/<[^>]+>/g, '');

    const timeMatch = timeLine.match(
      /(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/
    );
    if (!timeMatch) continue;

    const startMs = srtTimeToMs(timeMatch[1], timeMatch[2], timeMatch[3], timeMatch[4]);
    const endMs = srtTimeToMs(timeMatch[5], timeMatch[6], timeMatch[7], timeMatch[8]);
    const wordOffset = segments.flatMap((s) => s.words).length;
    const words = syllableProportionalWords(text, startMs, endMs, wordOffset);

    segments.push({ id, startMs, endMs, text, words });
  }

  return segments;
}


export function parseVTT(vtt: string): TranscriptSegment[] {
  const lines = vtt.replace(/\r\n/g, '\n').split('\n');
  const segments: TranscriptSegment[] = [];
  let id = 1;
  let i = 0;

  
  while (i < lines.length && !lines[i].includes('-->')) i++;

  while (i < lines.length) {
    const timeLine = lines[i];
    if (!timeLine.includes('-->')) { i++; continue; }

    const timeMatch = timeLine.match(
      /(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/
    );
    if (!timeMatch) { i++; continue; }

    const startMs = srtTimeToMs(timeMatch[1], timeMatch[2], timeMatch[3], timeMatch[4]);
    const endMs = srtTimeToMs(timeMatch[5], timeMatch[6], timeMatch[7], timeMatch[8]);
    i++;

    const textLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== '') {
      textLines.push(lines[i].trim());
      i++;
    }
    const text = textLines.join(' ').replace(/<[^>]+>/g, '');
    const wordOffset = segments.flatMap((s) => s.words).length;
    const words = syllableProportionalWords(text, startMs, endMs, wordOffset);
    segments.push({ id: id++, startMs, endMs, text, words });
    i++;
  }

  return segments;
}




export function computeCuts(
  segments: TranscriptSegment[],
  deletedIdx: Set<number>
): TimelineCut[] {
  const allWords = segments.flatMap((s) => s.words);
  const toDelete = allWords.filter((w) => deletedIdx.has(w.index));
  if (toDelete.length === 0) return [];

  const sorted = [...toDelete].sort((a, b) => a.startMs - b.startMs);
  const cuts: TimelineCut[] = [];
  let cur: TimelineCut = { cutStartMs: sorted[0].startMs, cutEndMs: sorted[0].endMs };

  for (let i = 1; i < sorted.length; i++) {
    const w = sorted[i];
    if (w.startMs <= cur.cutEndMs + 50) {
      
      cur.cutEndMs = Math.max(cur.cutEndMs, w.endMs);
    } else {
      cuts.push(cur);
      cur = { cutStartMs: w.startMs, cutEndMs: w.endMs };
    }
  }
  cuts.push(cur);
  return cuts;
}


export function applyEditsToSegments(
  segments: TranscriptSegment[],
  deletedIdx: Set<number>
): TranscriptSegment[] {
  const result: TranscriptSegment[] = [];
  for (const seg of segments) {
    const kept = seg.words.filter((w) => !deletedIdx.has(w.index));
    if (kept.length === 0) continue;
    result.push({
      ...seg,
      text: kept.map((w) => w.word).join(' '),
      words: kept,
      
      startMs: kept[0].startMs,
      endMs: kept[kept.length - 1].endMs,
    });
  }
  return result;
}




export function exportSRT(segments: TranscriptSegment[]): string {
  return segments
    .map((seg, idx: number) => {
      const start = msToSrtTime(seg.startMs);
      const end = msToSrtTime(seg.endMs);
      return `${idx + 1}\n${start} --> ${end}\n${seg.text}`;
    })
    .join('\n\n');
}




export function searchTranscript(
  segments: TranscriptSegment[],
  query: string
): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results: SearchResult[] = [];

  for (const seg of segments) {
    let charOffset = 0;
    for (const w of seg.words) {
      if (w.word.toLowerCase().includes(q)) {
        results.push({
          segmentId: seg.id,
          wordIndex: w.index,
          word: w.word,
          startMs: w.startMs,
          endMs: w.endMs,
          charOffset,
        });
      }
      charOffset += w.word.length + 1; 
    }
  }
  return results;
}


export function annotateSearchMatches(
  segments: TranscriptSegment[],
  query: string
): TranscriptSegment[] {
  if (!query.trim()) return segments;
  const q = query.trim().toLowerCase();
  return segments.map((seg) => ({
    ...seg,
    words: seg.words.map((w) => ({
      ...w,
      isSearchMatch: w.word.toLowerCase().includes(q),
    })),
  }));
}




export function segmentsToPlainText(segments: TranscriptSegment[]): string {
  return segments.map((s) => s.text).join(' ');
}


export function totalDurationMs(segments: TranscriptSegment[]): number {
  if (segments.length === 0) return 0;
  return segments[segments.length - 1].endMs - segments[0].startMs;
}



function srtTimeToMs(h: string, m: string, s: string, ms: string): number {
  return (
    parseInt(h, 10) * 3_600_000 +
    parseInt(m, 10) * 60_000 +
    parseInt(s, 10) * 1_000 +
    parseInt(ms, 10)
  );
}

function msToSrtTime(ms: number): string {
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  const msPart = ms % 1_000;
  return `${pad2(h)}:${pad2(m)}:${pad2(s)},${pad3(msPart)}`;
}

function pad2(n: number): string { return String(n).padStart(2, '0'); }
function pad3(n: number): string { return String(n).padStart(3, '0'); }


function syllableProportionalWords(
  text: string,
  startMs: number,
  endMs: number,
  indexOffset: number
): TranscriptWord[] {
  const rawWords = text.split(/\s+/).filter(Boolean);
  if (rawWords.length === 0) return [];
  const duration = endMs - startMs;
  const syllables = rawWords.map((w) => countSyllables(w));
  const totalSyllables = syllables.reduce((a, b) => a + b, 0) || rawWords.length;

  const result: TranscriptWord[] = [];
  let cursor = startMs;
  for (let i = 0; i < rawWords.length; i++) {
    const fraction = syllables[i] / totalSyllables;
    const wordDuration = duration * fraction;
    result.push({
      index: indexOffset + i,
      word: rawWords[i],
      startMs: cursor,
      endMs: cursor + wordDuration,
    });
    cursor += wordDuration;
  }
  return result;
}

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length <= 3) return 1;
  const cleaned = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  const matches = cleaned.match(/[aeiouy]{1,2}/g);
  return Math.max(1, matches?.length ?? 1);
}
