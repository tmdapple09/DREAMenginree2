import { inflateSync } from 'zlib';

export interface DecodedPng { width: number; height: number; rgba: Uint8Array }
const sig = [137, 80, 78, 71, 13, 10, 26, 10];
function paeth(a: number, b: number, c: number) { const p = a + b - c; const pa = Math.abs(p - a); const pb = Math.abs(p - b); const pc = Math.abs(p - c); return pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
export function decodePng(bytes: Uint8Array): DecodedPng {
  if (!sig.every((v, i) => bytes[i] === v)) throw new Error('Only PNG photo references are supported by the deterministic local analyzer.');
  let offset = 8; let width = 0; let height = 0; let bitDepth = 0; let colorType = 0; const idat: Buffer[] = [];
  while (offset < bytes.length) {
    const len = Buffer.from(bytes.buffer, bytes.byteOffset + offset, 4).readUInt32BE(0); offset += 4;
    const type = Buffer.from(bytes.buffer, bytes.byteOffset + offset, 4).toString('ascii'); offset += 4;
    const data = Buffer.from(bytes.buffer, bytes.byteOffset + offset, len); offset += len + 4;
    if (type === 'IHDR') { width = data.readUInt32BE(0); height = data.readUInt32BE(4); bitDepth = data[8]!; colorType = data[9]!; }
    if (type === 'IDAT') idat.push(data);
    if (type === 'IEND') break;
  }
  if (bitDepth !== 8 || ![2, 6].includes(colorType)) throw new Error('PNG analyzer supports 8-bit RGB/RGBA PNG images.');
  const channels = colorType === 6 ? 4 : 3;
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const rgba = new Uint8Array(width * height * 4);
  let inOff = 0;
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < height; y += 1) {
    const filter = raw[inOff++];
    const line = Buffer.from(raw.subarray(inOff, inOff + stride)); inOff += stride;
    for (let x = 0; x < stride; x += 1) {
      const left = x >= channels ? line[x - channels]! : 0;
      const up = prev[x] ?? 0;
      const upLeft = x >= channels ? prev[x - channels]! : 0;
      if (filter === 1) line[x] = (line[x]! + left) & 255;
      else if (filter === 2) line[x] = (line[x]! + up) & 255;
      else if (filter === 3) line[x] = (line[x]! + Math.floor((left + up) / 2)) & 255;
      else if (filter === 4) line[x] = (line[x]! + paeth(left, up, upLeft)) & 255;
      else if (filter !== 0) throw new Error(`Unsupported PNG filter ${filter}.`);
    }
    for (let x = 0; x < width; x += 1) {
      const src = x * channels; const dst = (y * width + x) * 4;
      rgba[dst] = line[src]!; rgba[dst + 1] = line[src + 1]!; rgba[dst + 2] = line[src + 2]!; rgba[dst + 3] = channels === 4 ? line[src + 3]! : 255;
    }
    prev = line;
  }
  return { width, height, rgba };
}
