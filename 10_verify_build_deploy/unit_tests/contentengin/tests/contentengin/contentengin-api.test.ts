import { describe, expect, it } from 'vitest';
import { deflateSync } from 'zlib';
import { analyzeImageBytes } from '../../engins/contentengin/photo/imageAnalyzer';
function crc32(buf:Buffer){let c=0xffffffff; for(const b of buf){c^=b; for(let k=0;k<8;k++) c=(c&1)?(0xedb88320^(c>>>1)):(c>>>1);} return (c^0xffffffff)>>>0;}
function chunk(type:string,data:Buffer){const out=Buffer.alloc(12+data.length); out.writeUInt32BE(data.length,0); out.write(type,4); data.copy(out,8); out.writeUInt32BE(crc32(Buffer.concat([Buffer.from(type),data])),8+data.length); return out;}
function png1x1(){const ihdr=Buffer.alloc(13); ihdr.writeUInt32BE(1,0); ihdr.writeUInt32BE(1,4); ihdr[8]=8; ihdr[9]=6; const raw=Buffer.from([0,255,0,0,255]); return Uint8Array.from(Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]));}
describe('ContentEngin photo analysis',()=>{ it('decodes real PNG pixels and returns non-AI source analysis',async()=>{ const analysis=await analyzeImageBytes(png1x1(),'fixture.png'); expect(analysis.width).toBe(1); expect(analysis.height).toBe(1); expect(analysis.regions[0].bounds.maxX).toBe(0); }); it('fails honestly for unsupported non-PNG bytes',async()=>{ await expect(analyzeImageBytes(new Uint8Array([1,2,3]),'bad.jpg')).rejects.toThrow('PNG'); }); });
