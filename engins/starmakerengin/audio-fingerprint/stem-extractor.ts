import type { TimeSlice } from './fingerprint';




export function extractStem(audioBuffer: AudioBuffer, slices: TimeSlice[]): AudioBuffer {
  if (slices.length === 0) return audioBuffer;

  const { sampleRate, numberOfChannels } = audioBuffer;

  const totalSamples = slices.reduce((sum, sl) => {
    const start = Math.max(0, Math.floor(sl.startTimeSec * sampleRate));
    const end   = Math.min(audioBuffer.length, Math.floor(sl.endTimeSec * sampleRate));
    return sum + Math.max(0, end - start);
  }, 0);

  const output = new AudioBuffer({
    numberOfChannels,
    length:     Math.max(totalSamples, 1),
    sampleRate,
  });

  let offset = 0;
  for (const sl of slices) {
    const startSample = Math.max(0, Math.floor(sl.startTimeSec * sampleRate));
    const endSample   = Math.min(audioBuffer.length, Math.floor(sl.endTimeSec * sampleRate));
    const len = Math.max(0, endSample - startSample);
    if (len === 0) continue;

    for (let ch = 0; ch < numberOfChannels; ch++) {
      const src = audioBuffer.getChannelData(ch).subarray(startSample, endSample);
      const dst = output.getChannelData(ch);
      const copyLen = Math.min(len, output.length - offset);
      if (copyLen > 0) dst.set(src.subarray(0, copyLen), offset);
    }
    offset += len;
  }

  return output;
}

const FADE_SAMPLES = 220; 


export async function extractStemAsync(
  audioBuffer: AudioBuffer,
  slices: TimeSlice[],
): Promise<AudioBuffer> {
  if (slices.length === 0) return audioBuffer;

  
  if (typeof OfflineAudioContext === 'undefined') {
    return extractStem(audioBuffer, slices);
  }

  const { sampleRate, numberOfChannels } = audioBuffer;

  const totalSamples = slices.reduce((sum, sl) => {
    const start = Math.max(0, Math.floor(sl.startTimeSec * sampleRate));
    const end   = Math.min(audioBuffer.length, Math.floor(sl.endTimeSec * sampleRate));
    return sum + Math.max(0, end - start);
  }, 0);

  if (totalSamples === 0) return audioBuffer;

  try {
    const ctx = new OfflineAudioContext(numberOfChannels, totalSamples, sampleRate);
    let destOffset = 0;

    for (const sl of slices) {
      const startSample = Math.max(0, Math.floor(sl.startTimeSec * sampleRate));
      const endSample   = Math.min(audioBuffer.length, Math.floor(sl.endTimeSec * sampleRate));
      const len = Math.max(0, endSample - startSample);
      if (len === 0) continue;

      
      const sliceBuf = new AudioBuffer({ numberOfChannels, length: len, sampleRate });
      for (let ch = 0; ch < numberOfChannels; ch++) {
        const src = audioBuffer.getChannelData(ch).subarray(startSample, endSample);
        sliceBuf.getChannelData(ch).set(src);
      }

      
      const fadeSamples = Math.min(FADE_SAMPLES, Math.floor(len / 4));
      for (let ch = 0; ch < numberOfChannels; ch++) {
        const data = sliceBuf.getChannelData(ch);
        for (let i = 0; i < fadeSamples; i++) {
          const t = i / fadeSamples;
          data[i] *= t;                         
          data[len - 1 - i] *= t;              
        }
      }

      const src = ctx.createBufferSource();
      src.buffer = sliceBuf;
      src.connect(ctx.destination);
      src.start(destOffset / sampleRate);

      destOffset += len;
    }

    return await ctx.startRendering();
  } catch {
    
    return extractStem(audioBuffer, slices);
  }
}
