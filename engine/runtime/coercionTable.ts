












const MIME_MAP: Array<[pattern: RegExp, type: DreamDropType]> = [
  [/^image\
  [/^video\
  [/^audio\
  [/^text\/html$/,       'text/code'],
  [/^text\/css$/,        'text/code'],
  [/^text\/javascript$/, 'text/code'],
  [/^application\/json$/, 'text/code'],
  [/^text\/plain$/,      'text/code'],
  [/^application\/x-dream-engin-state$/, 'engin-state'],
];

const EXT_MAP: Record<string, DreamDropType> = {
  jpg: 'image', jpeg: 'image', png: 'image', gif: 'image', webp: 'image', svg: 'image', avif: 'image',
  mp4: 'video', webm: 'video', mov: 'video', mkv: 'video',
  mp3: 'audio', wav: 'audio', ogg: 'audio', flac: 'audio', aac: 'audio',
  js: 'text/code', ts: 'text/code', tsx: 'text/code', jsx: 'text/code',
  css: 'text/code', html: 'text/code', json: 'text/code', md: 'text/code',
  txt: 'text/code',
};







export type DreamDropType =
  | 'image'
  | 'video'
  | 'audio'
  | 'text/code'
  | 'url'
  | 'engin-state'
  | 'unknown';


export interface DreamDrop {
  
  type: DreamDropType;
  
  content: string;
  
  mimeType?: string;
  
  filename?: string;
  
  timestamp: number;
}



function mimeToDropType(mime: string): DreamDropType {
  for (const [pattern, type] of MIME_MAP) {
    if (pattern.test(mime)) return type;
  }
  return 'unknown';
}

function extToDropType(filename: string): DreamDropType {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  return EXT_MAP[ext] ?? 'unknown';
}

function isUrl(value: string): boolean {
  try {
    const u = new URL(value.trim());
    return u.protocol === 'http:' || u.protocol === 'https:' || u.protocol === 'blob:';
  } catch {
    return false;
  }
}


export function coerceDataTransfer(dt: DataTransfer): DreamDrop {
  const ts = Date.now();

  
  if (dt.files.length > 0) {
    const file = dt.files[0];
    if (file) {
      const type = file.type ? mimeToDropType(file.type) : extToDropType(file.name);
      return {
        type,
        content: URL.createObjectURL(file),
        mimeType: file.type || undefined,
        filename: file.name,
        timestamp: ts,
      };
    }
  }

  
  for (const item of Array.from(dt.items)) {
    if (item.kind !== 'string') continue;
    const dropType = mimeToDropType(item.type);
    if (dropType !== 'unknown') {
      
      const content = dt.getData(item.type);
      return { type: dropType, content, mimeType: item.type, timestamp: ts };
    }
  }

  
  const plainText = dt.getData('text/plain');
  if (plainText) {
    if (isUrl(plainText)) {
      return { type: 'url', content: plainText.trim(), mimeType: 'text/plain', timestamp: ts };
    }
    return { type: 'text/code', content: plainText, mimeType: 'text/plain', timestamp: ts };
  }

  return { type: 'unknown', content: '', timestamp: ts };
}


export function coerceRawPayload(payload: unknown): DreamDrop {
  const ts = Date.now();

  if (!payload || typeof payload !== 'object') {
    const str = String(payload ?? '');
    return {
      type: isUrl(str) ? 'url' : 'text/code',
      content: str,
      timestamp: ts,
    };
  }

  const p = payload as Record<string, unknown>;

  
  if (typeof p['type'] === 'string' && typeof p['content'] === 'string' && p['timestamp']) {
    return p as unknown as DreamDrop;
  }

  
  if (typeof p['engin'] === 'string' || typeof p['enginState'] === 'string') {
    return { type: 'engin-state', content: JSON.stringify(payload), timestamp: ts };
  }

  
  if (typeof p['url'] === 'string') {
    return { type: 'url', content: p['url'], timestamp: ts };
  }

  
  return { type: 'unknown', content: JSON.stringify(payload), timestamp: ts };
}


export function classifyDrop(drop: DreamDrop): string {
  const labels: Record<DreamDropType, string> = {
    'image':       'Image',
    'video':       'Video',
    'audio':       'Audio',
    'text/code':   'Text / Code',
    'url':         'URL',
    'engin-state': 'Engin State',
    'unknown':     'Unknown',
  };
  return labels[drop.type] ?? 'Unknown';
}






