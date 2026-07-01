

'use strict';

const QUALITY_CONFIG = {
  high:        { imageMaxPx: 2048, imageQuality: 0.9, videoBitrate: 4_000_000, audioKbps: 192 },
  balanced:    { imageMaxPx: 1024, imageQuality: 0.8, videoBitrate: 2_000_000, audioKbps: 128 },
  performance: { imageMaxPx: 720,  imageQuality: 0.6, videoBitrate: 1_000_000, audioKbps: 64  },
};


const jobs = new Map();

self.onmessage = async function (e) {
  const msg = e.data;

  if (!msg.jobId) return;

  
  if (!msg.type) {
    jobs.set(msg.jobId, {
      assetId:  msg.assetId,
      fileName: msg.fileName,
      mimeType: msg.mimeType,
      size:     msg.size,
      quality:  msg.quality || 'balanced',
      context:  msg.context || 'general',
      buffer:   null,
    });
    return;
  }

  
  if (msg.type === 'file_data') {
    const job = jobs.get(msg.jobId);
    if (!job) return;
    job.buffer = msg.buffer;
    
    try {
      const result = await processAsset(msg.jobId, job);
      self.postMessage({ jobId: msg.jobId, type: 'done', payload: result });
    } catch (err) {
      self.postMessage({
        jobId: msg.jobId,
        type: 'error',
        payload: { message: err && err.message ? err.message : String(err) },
      });
    } finally {
      jobs.delete(msg.jobId);
    }
  }
};

function detectType(mimeType, fileName) {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('audio/')) return 'audio';
  const ext = (fileName.split('.').pop() || '').toLowerCase();
  if (ext === 'glb' || ext === 'gltf') return '3d';
  return 'unknown';
}

function progress(jobId, pct) {
  self.postMessage({ jobId, type: 'progress', payload: pct });
}

async function processAsset(jobId, job) {
  const type = detectType(job.mimeType, job.fileName);
  const cfg = QUALITY_CONFIG[job.quality] || QUALITY_CONFIG.balanced;

  progress(jobId, 10);

  switch (type) {
    case 'image':
      return optimiseImage(jobId, job, cfg);
    case 'video':
      return optimiseVideo(jobId, job, cfg);
    case 'audio':
      return optimiseAudio(jobId, job, cfg);
    case '3d':
      return optimise3D(jobId, job, cfg);
    default:
      
      return passThrough(job);
  }
}



async function optimiseImage(jobId, job, cfg) {
  progress(jobId, 20);

  const blob = new Blob([job.buffer], { type: job.mimeType });
  const bitmap = await createImageBitmap(blob);

  const { width: origW, height: origH } = bitmap;
  const maxPx = cfg.imageMaxPx;

  let dstW = origW;
  let dstH = origH;
  if (origW > maxPx || origH > maxPx) {
    const ratio = Math.min(maxPx / origW, maxPx / origH);
    dstW = Math.round(origW * ratio);
    dstH = Math.round(origH * ratio);
  }

  progress(jobId, 40);

  const canvas = new OffscreenCanvas(dstW, dstH);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0, dstW, dstH);
  bitmap.close();

  progress(jobId, 60);

  
  let outputBlob;
  let mimeType;
  let extension;

  try {
    outputBlob = await canvas.convertToBlob({ type: 'image/avif', quality: cfg.imageQuality });
    mimeType = 'image/avif';
    extension = '.avif';
  } catch {
    outputBlob = await canvas.convertToBlob({ type: 'image/webp', quality: cfg.imageQuality });
    mimeType = 'image/webp';
    extension = '.webp';
  }

  progress(jobId, 90);

  return {
    optimised:     outputBlob,
    mimeType,
    extension,
    originalSize:  job.size,
    optimisedSize: outputBlob.size,
    assetId:       job.assetId,
    method:        `canvas-${extension.slice(1)}`,
  };
}




async function optimiseVideo(jobId, job, cfg) {
  progress(jobId, 20);

  
  if (typeof VideoDecoder === 'undefined' || typeof VideoEncoder === 'undefined') {
    progress(jobId, 90);
    return passThrough(job);
  }

  
  
  
  progress(jobId, 50);

  const blob = new Blob([job.buffer], { type: job.mimeType });
  
  let thumbnailBlob = null;
  try {
    if (typeof ImageDecoder !== 'undefined') {
      const decoder = new ImageDecoder({ data: blob.stream(), type: job.mimeType });
      const { image } = await decoder.decode();
      const canvas = new OffscreenCanvas(image.displayWidth, image.displayHeight);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      thumbnailBlob = await canvas.convertToBlob({ type: 'image/webp', quality: 0.8 });
    }
  } catch {
    
  }

  progress(jobId, 90);

  return {
    optimised:     blob,
    mimeType:      job.mimeType,
    extension:     '.' + job.fileName.split('.').pop(),
    originalSize:  job.size,
    optimisedSize: blob.size,
    assetId:       job.assetId,
    method:        'passthrough-video',
    thumbnailBlob,
  };
}




async function optimiseAudio(jobId, job, cfg) {
  progress(jobId, 20);

  
  
  
  progress(jobId, 60);

  const blob = new Blob([job.buffer], { type: job.mimeType });

  progress(jobId, 90);

  const ext = job.fileName.includes('.') ? '.' + job.fileName.split('.').pop() : '.m4a';
  return {
    optimised:     blob,
    mimeType:      job.mimeType || 'audio/mpeg',
    extension:     ext,
    originalSize:  job.size,
    optimisedSize: blob.size,
    assetId:       job.assetId,
    method:        'passthrough-audio',
  };
}




async function optimise3D(jobId, job) {
  progress(jobId, 50);
  const blob = new Blob([job.buffer], { type: 'model/gltf-binary' });
  progress(jobId, 90);
  return {
    optimised:     blob,
    mimeType:      'model/gltf-binary',
    extension:     '.glb',
    originalSize:  job.size,
    optimisedSize: blob.size,
    assetId:       job.assetId,
    method:        'passthrough-3d',
  };
}

function passThrough(job) {
  const blob = new Blob([job.buffer], { type: job.mimeType });
  const ext  = job.fileName.includes('.') ? '.' + job.fileName.split('.').pop() : '';
  return {
    optimised:     blob,
    mimeType:      job.mimeType,
    extension:     ext,
    originalSize:  job.size,
    optimisedSize: blob.size,
    assetId:       job.assetId,
    method:        'passthrough',
  };
}
