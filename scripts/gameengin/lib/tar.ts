

import { Buffer } from 'node:buffer';

const BLOCK = 512;

export interface TarFile {
  name: string;
  data: Uint8Array;
  mode?: number;       
  mtime?: number;      
}

function pad(str: string, len: number): Buffer {
  const buf = Buffer.alloc(len, 0);
  buf.write(str, 0, Math.min(str.length, len), 'utf8');
  return buf;
}

function octal(num: number, width: number): Buffer {
  
  const s = num.toString(8).padStart(width - 1, '0');
  const buf = Buffer.alloc(width, 0);
  buf.write(s, 0, width - 1, 'ascii');
  return buf;
}

function header(file: TarFile): Buffer {
  if (file.name.length > 100) {
    throw new Error(`tar: filename too long for ustar header (${file.name.length} > 100): ${file.name}`);
  }
  const h = Buffer.alloc(BLOCK, 0);
  pad(file.name, 100).copy(h, 0);
  octal(file.mode ?? 0o644, 8).copy(h, 100);
  octal(0, 8).copy(h, 108);                      
  octal(0, 8).copy(h, 116);                      
  octal(file.data.length, 12).copy(h, 124);      
  octal(file.mtime ?? Math.floor(Date.now() / 1000), 12).copy(h, 136);
  Buffer.from('        ', 'ascii').copy(h, 148); 
  h.write('0', 156, 'ascii');                    
  
  Buffer.from('ustar\0', 'ascii').copy(h, 257);  
  Buffer.from('00', 'ascii').copy(h, 263);       
  
  
  let sum = 0;
  for (let i = 0; i < BLOCK; i++) sum += h[i];
  octal(sum, 8).copy(h, 148);
  
  h.write('\0 ', 148 + 6, 'ascii');
  return h;
}

export function packTar(files: TarFile[]): Uint8Array {
  const parts: Buffer[] = [];
  for (const f of files) {
    parts.push(header(f));
    parts.push(Buffer.from(f.data));
    const rem = f.data.length % BLOCK;
    if (rem !== 0) parts.push(Buffer.alloc(BLOCK - rem, 0));
  }
  
  parts.push(Buffer.alloc(BLOCK, 0));
  parts.push(Buffer.alloc(BLOCK, 0));
  return new Uint8Array(Buffer.concat(parts));
}

export function unpackTar(buf: Uint8Array): TarFile[] {
  const out: TarFile[] = [];
  let off = 0;
  while (off + BLOCK <= buf.length) {
    const h = Buffer.from(buf.buffer, buf.byteOffset + off, BLOCK);
    if (h[0] === 0) break; 
    const name = h.toString('utf8', 0, 100).replace(/\0+$/, '');
    const sizeStr = h.toString('ascii', 124, 124 + 11).replace(/\0+$/, '').trim();
    const size = parseInt(sizeStr, 8);
    off += BLOCK;
    const data = buf.slice(off, off + size);
    out.push({ name, data });
    off += Math.ceil(size / BLOCK) * BLOCK;
  }
  return out;
}
