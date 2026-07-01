

const DEFAULT_FFT_SIZE       = 2048;
const DEFAULT_SLICE_DURATION = 0.1;   
const DEFAULT_TOP_K          = 5;     
const PEAK_THRESHOLD_FRAC    = 0.21;  

export interface FrequencyPeak {
  
  binIndex:     number;
  
  frequencyHz:  number;
  
  magnitude:    number;
  
  timeSlice:    number;
  
  timeSec:      number;
}

export interface PeakMap {
  
  songId?:       string;
  
  fftSize:       number;
  
  sampleRate:    number;
  
  sliceDuration: number;
  
  totalSlices:   number;
  
  duration:      number;
  
  peaks:         FrequencyPeak[];
}


function computeMagnitudes(
  samples:    Float32Array,
  fftSize:    number,
): Float32Array {
  const N    = Math.min(samples.length, fftSize);
  const half = Math.floor(N / 2);
  const mags = new Float32Array(half);

  
  for (let k = 0; k < half; k++) {
    let re = 0;
    let im = 0;
    const angle = (2 * Math.PI * k) / N;
    for (let n = 0; n < N; n++) {
      re += samples[n] * Math.cos(angle * n);
      im -= samples[n] * Math.sin(angle * n);
    }
    mags[k] = Math.sqrt(re * re + im * im) / N;
  }
  return mags;
}


function topKIndices(arr: Float32Array, k: number): number[] {
  const indexed = Array.from(arr).map((v, i: number) => ({ v, i }));
  indexed.sort((a, b) => b.v - a.v);
  return indexed.slice(0, k).map((x) => x.i);
}


export function buildPeakMap(
  audioBuffer: AudioBuffer,
  options: {
    fftSize?:       number;
    sliceDuration?: number;
    topK?:          number;
    songId?:        string;
  } = {},
): PeakMap {
  const fftSize       = options.fftSize       ?? DEFAULT_FFT_SIZE;
  const sliceDuration = options.sliceDuration ?? DEFAULT_SLICE_DURATION;
  const topK          = options.topK          ?? DEFAULT_TOP_K;
  const { sampleRate, duration } = audioBuffer;

  const channelData  = audioBuffer.getChannelData(0); 
  const samplesPerSlice = Math.floor(sliceDuration * sampleRate);
  const totalSlices  = Math.ceil(channelData.length / samplesPerSlice);
  const peaks:        FrequencyPeak[] = [];

  for (let slice = 0; slice < totalSlices; slice++) {
    const start  = slice * samplesPerSlice;
    const end    = Math.min(start + samplesPerSlice, channelData.length);
    const frame  = channelData.slice(start, end);

    
    const padded = new Float32Array(fftSize);
    padded.set(frame.slice(0, fftSize));

    const mags    = computeMagnitudes(padded, fftSize);
    const maxMag  = Math.max(...mags);
    const threshold = maxMag * PEAK_THRESHOLD_FRAC;

    const topIdxs = topKIndices(mags, topK * 2); 

    let added = 0;
    for (const bin of topIdxs) {
      if (added >= topK) break;
      if (mags[bin] < threshold) continue;
      peaks.push({
        binIndex:    bin,
        frequencyHz: (bin * sampleRate) / fftSize,
        magnitude:   mags[bin],
        timeSlice:   slice,
        timeSec:     slice * sliceDuration,
      });
      added++;
    }
  }

  return {
    songId:        options.songId,
    fftSize,
    sampleRate,
    sliceDuration,
    totalSlices,
    duration,
    peaks,
  };
}
