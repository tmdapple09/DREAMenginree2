import { inflateSync } from 'zlib';

export interface DecodedPng { width: number; height: number; rgba: Uint8Array }

const PNG_SIGNATURE = [137, 80, 78, 71, 13, 10, 26, 10];
const MAX_PNG_PIXELS = 4_194_304; 
const MAX_IDAT_BYTES = 8 * 1024 * 1024;
const MAX_INFLATED_BYTES = MAX_PNG_PIXELS * 4 + 4096;

function paeth(a: number, b: number, c: number): number {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}

function readChunkLength(bytes: Uint8Array, offset: number): number {
  if (offset + 8 > bytes.length) throw new Error('Invalid PNG chunk header.');
  return Buffer.from(bytes.buffer, bytes.byteOffset + offset, 4).readUInt32BE(0);
}

export function decodePng(bytes: Uint8Array): DecodedPng {
  if (bytes.length < PNG_SIGNATURE.length || !PNG_SIGNATURE.every((v, i) => bytes[i] === v)) {
    throw new Error('Only PNG photo references are supported by the deterministic local analyzer.');
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idat: Buffer[] = [];
  let idatBytes = 0;

  while (offset < bytes.length) {
    const len = readChunkLength(bytes, offset);
    offset += 4;
    if (offset + 4 + len + 4 > bytes.length) throw new Error('Invalid PNG chunk length.');

    const type = Buffer.from(bytes.buffer, bytes.byteOffset + offset, 4).toString('ascii');
    offset += 4;
    const data = Buffer.from(bytes.buffer, bytes.byteOffset + offset, len);
    offset += len + 4; 

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8]!;
      colorType = data[9]!;
    } else if (type === 'IDAT') {
      idatBytes += data.length;
      if (idatBytes > MAX_IDAT_BYTES) throw new Error('PNG compressed data exceeds the local analysis limit.');
      idat.push(data);
    } else if (type === 'IEND') {
      break;
    }
  }

  if (width <= 0 || height <= 0) throw new Error('PNG is missing a valid image header.');
  if (width * height > MAX_PNG_PIXELS) throw new Error('PNG dimensions exceed the mobile-safe local analysis limit.');
  if (bitDepth !== 8 || ![2, 6].includes(colorType)) throw new Error('PNG analyzer supports 8-bit RGB/RGBA PNG images.');
  if (!idat.length) throw new Error('PNG is missing image data.');

  const channels = colorType === 6 ? 4 : 3;
  const raw = inflateSync(Buffer.concat(idat), { maxOutputLength: MAX_INFLATED_BYTES });
  const stride = width * channels;
  const expectedRawLength = height * (stride + 1);
  if (raw.length < expectedRawLength) throw new Error('PNG image data is incomplete.');

  const rgba = new Uint8Array(width * height * 4);
  let inOff = 0;
  let prev = Buffer.alloc(stride);

  for (let y = 0; y < height; y += 1) {
    const filter = raw[inOff++];
    const line = Buffer.from(raw.subarray(inOff, inOff + stride));
    inOff += stride;

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
      const src = x * channels;
      const dst = (y * width + x) * 4;
      rgba[dst] = line[src]!;
      rgba[dst + 1] = line[src + 1]!;
      rgba[dst + 2] = line[src + 2]!;
      rgba[dst + 3] = channels === 4 ? line[src + 3]! : 255;
    }

    prev = line;
  }

  return { width, height, rgba };
}
