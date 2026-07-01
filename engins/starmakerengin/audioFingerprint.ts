import { TORRIDITY_DP, TORRIDITY_N } from '@/dreamr/torridity';




export interface Peak {
  
  binIndex: number;
  
  frequencyHz: number;
  
  magnitude: number;
  
  timeSlice: number;
}


export interface PeakMap {
  songId?: string;
  
  fftSize: number;
  
  sampleRate: number;
  
  sliceDurationSec: number;
  
  peaks: Peak[];
  
  totalSlices: number;
}


export interface Fingerprint {
  id: string;
  startTime: number;   
  endTime: number;     
  peakMap: PeakMap;
  
  signature: number[];
}

export interface MatchResult {
  timeSlice: number;
  startTimeSec: number;
  endTimeSec: number;
  similarityScore: number;
}

const DEFAULT_FFT_SIZE        = 2048;
const DEFAULT_SLICE_DURATION  = 0.1;   
const DEFAULT_TOP_K           = 5;


const PEAK_THRESHOLD_FRACTION = TORRIDITY_DP * TORRIDITY_N; 


export function buildPeakMap(audioBuffer: AudioBuffer, topK = DEFAULT_TOP_K): PeakMap {
  const sampleRate      = audioBuffer.sampleRate;
  const fftSize         = DEFAULT_FFT_SIZE;
  const sliceSamples    = Math.floor(sampleRate * DEFAULT_SLICE_DURATION);
  const channelData     = audioBuffer.getChannelData(0); 
  const totalSlices     = Math.floor(channelData.length / sliceSamples);
  const peaks: Peak[]   = [];

  const maxMagnitude    = 1.0; 
  const energyThreshold = maxMagnitude * PEAK_THRESHOLD_FRACTION;

  for (let slice = 0; slice < totalSlices; slice++) {
    const offset   = slice * sliceSamples;
    const window   = channelData.slice(offset, offset + sliceSamples);

    
    const halfBins = Math.min(fftSize / 2, sliceSamples / 2);
    const magnitudes: { bin: number; mag: number }[] = [];

    for (let bin = 1; bin < halfBins; bin++) {
      let re = 0, im = 0;
      const twoPiBinOverN = (2 * Math.PI * bin) / sliceSamples;
      for (let i = 0; i < sliceSamples; i++) {
        re += (window[i] ?? 0) * Math.cos(twoPiBinOverN * i);
        im += (window[i] ?? 0) * Math.sin(twoPiBinOverN * i);
      }
      const mag = Math.sqrt(re * re + im * im) / sliceSamples;
      if (mag >= energyThreshold) {
        magnitudes.push({ bin, mag });
      }
    }

    
    magnitudes.sort((a, b) => b.mag - a.mag);
    for (let k = 0; k < Math.min(topK, magnitudes.length); k++) {
      const { bin, mag } = magnitudes[k];
      peaks.push({
        binIndex:     bin,
        frequencyHz:  (bin * sampleRate) / fftSize,
        magnitude:    mag,
        timeSlice:    slice,
      });
    }
  }

  return {
    fftSize,
    sampleRate,
    sliceDurationSec: DEFAULT_SLICE_DURATION,
    peaks,
    totalSlices,
  };
}

function peaksInWindow(peakMap: PeakMap, startSec: number, endSec: number): Peak[] {
  const startSlice = Math.floor(startSec / peakMap.sliceDurationSec);
  const endSlice   = Math.ceil(endSec / peakMap.sliceDurationSec);
  return peakMap.peaks.filter(
    (p) => p.timeSlice >= startSlice && p.timeSlice < endSlice
  );
}

function buildSignature(peaks: Peak[], fftSize: number): number[] {
  const halfBins = fftSize / 2;
  const vec      = new Array<number>(halfBins).fill(0);
  for (const p of peaks) {
    if (p.binIndex < halfBins) {
      vec[p.binIndex] = Math.max(vec[p.binIndex], p.magnitude);
    }
  }
  
  const norm = Math.sqrt(vec.reduce((a, v: number) => a + v * v, 0));
  return norm > 0 ? vec.map((v) => v / norm) : vec;
}


export function recordReferenceFingerprint(
  peakMap: PeakMap,
  startTime: number,
  endTime: number
): Fingerprint {
  const windowPeaks = peaksInWindow(peakMap, startTime, endTime);
  const signature   = buildSignature(windowPeaks, peakMap.fftSize);
  const id          = `fp_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  return { id, startTime, endTime, peakMap: { ...peakMap, peaks: windowPeaks }, signature };
}


export function matchFingerprint(
  fingerprint: Fingerprint,
  candidatePeakMap: PeakMap,
  threshold = 0.8
): MatchResult[] {
  const results: MatchResult[] = [];
  const fpDuration = fingerprint.endTime - fingerprint.startTime;
  const fpSlices   = Math.ceil(fpDuration / candidatePeakMap.sliceDurationSec);

  for (let slice = 0; slice <= candidatePeakMap.totalSlices - fpSlices; slice++) {
    const startSec   = slice * candidatePeakMap.sliceDurationSec;
    const endSec     = startSec + fpDuration;
    const windowPeaks = peaksInWindow(candidatePeakMap, startSec, endSec);
    const candidateSig = buildSignature(windowPeaks, candidatePeakMap.fftSize);

    
    let dot = 0;
    const len = Math.min(fingerprint.signature.length, candidateSig.length);
    for (let i = 0; i < len; i++) dot += fingerprint.signature[i] * candidateSig[i];

    if (dot >= threshold) {
      results.push({ timeSlice: slice, startTimeSec: startSec, endTimeSec: endSec, similarityScore: dot });
    }
  }

  return results;
}


export function createFingerprintIsolator( ){
  let _reference: Fingerprint | null = null;

  return {
    
    get hasReference() {
      return _reference !== null;
    },

    
    recordReference(peakMap: PeakMap, startTime: number, endTime: number): Fingerprint {
      _reference = recordReferenceFingerprint(peakMap, startTime, endTime);
      return _reference;
    },

    
    isolate(
      candidatePeakMap: PeakMap,
      sourceBuffer: AudioBuffer,
      threshold = 0.75,
    ): AudioBuffer | null {
      if (!_reference) return null;
      const matches = matchFingerprint(_reference, candidatePeakMap, threshold);
      return extractAudioChunks(sourceBuffer, matches);
    },

    
    clear() {
      _reference = null;
    },
  };
}


export function extractAudioChunks(
  audioBuffer: AudioBuffer,
  timeSlices: MatchResult[]
): AudioBuffer {
  if (timeSlices.length === 0) {
    
    const ctx   = new AudioContext();
    const empty = ctx.createBuffer(audioBuffer.numberOfChannels, 1, audioBuffer.sampleRate);
    return empty;
  }

  const sampleRate   = audioBuffer.sampleRate;
  const numChannels  = audioBuffer.numberOfChannels;
  const ctx          = new AudioContext();

  
  const totalSamples = timeSlices.reduce(
    (acc, s) => acc + Math.floor((s.endTimeSec - s.startTimeSec) * sampleRate),
    0
  );

  const output = ctx.createBuffer(numChannels, totalSamples, sampleRate);

  let writeOffset = 0;
  for (const slice of timeSlices) {
    const startSample = Math.floor(slice.startTimeSec * sampleRate);
    const endSample   = Math.min(
      Math.floor(slice.endTimeSec * sampleRate),
      audioBuffer.length
    );
    const chunkLength = endSample - startSample;

    for (let ch = 0; ch < numChannels; ch++) {
      const srcData  = audioBuffer.getChannelData(ch);
      const dstData  = output.getChannelData(ch);
      for (let i = 0; i < chunkLength; i++) {
        dstData[writeOffset + i] = srcData[startSample + i] ?? 0;
      }
    }
    writeOffset += chunkLength;
  }

  return output;
}
