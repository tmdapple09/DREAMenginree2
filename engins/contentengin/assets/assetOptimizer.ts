import { storeOriginal } from './indexedDBStore';



export type OptimisationQuality = 'high' | 'balanced' | 'performance';

export type AssetUploadContext =
  | 'dreamr_feed'
  | 'profile'
  | 'starmaker'
  | 'general';

export interface OptimiseOptions {
  
  quality?: OptimisationQuality;
  
  context?: AssetUploadContext;
  
  onProgress?: (percent: number) => void;
}

export interface OptimisationResult {
  
  optimised: Blob;
  
  mimeType: string;
  
  extension: string;
  
  originalSize: number;
  
  optimisedSize: number;
  
  assetId: string;
  
  method: string;
}

let workerInstance: Worker | null = null;
let jobCounter = 0;
const pendingJobs = new Map<
  number,
  {
    resolve: (r: OptimisationResult) => void;
    reject: (e: Error) => void;
    onProgress?: (pct: number) => void;
  }
>();

function getWorker(): Worker {
  if (!workerInstance) {
    workerInstance = new Worker('/workers/asset-optimizer.worker.js');
    workerInstance.onmessage = (e: MessageEvent) => {
      const { jobId, type, payload } = e.data as {
        jobId: number;
        type: 'progress' | 'done' | 'error';
        payload: unknown;
      };
      const job = pendingJobs.get(jobId);
      if (!job) return;

      if (type === 'progress') {
        job.onProgress?.(payload as number);
      } else if (type === 'done') {
        pendingJobs.delete(jobId);
        job.resolve(payload as OptimisationResult);
      } else if (type === 'error') {
        pendingJobs.delete(jobId);
        job.reject(new Error((payload as { message: string }).message));
      }
    };
  }
  return workerInstance;
}


export async function optimiseAsset(
  file: File,
  options: OptimiseOptions = {},
): Promise<OptimisationResult> {
  const { quality = 'balanced', context = 'general', onProgress } = options;

  
  const assetId = crypto.randomUUID();

  
  await storeOriginal(assetId, file, file.name);

  onProgress?.(5);

  
  const worker = getWorker();
  const jobId = ++jobCounter;

  return new Promise<OptimisationResult>((resolve, reject) => {
    pendingJobs.set(jobId, { resolve, reject, onProgress });

    worker.postMessage({
      jobId,
      assetId,
      fileName: file.name,
      mimeType: file.type,
      size: file.size,
      quality,
      context,
    }, []);

    
    
    file.arrayBuffer().then((buf) => {
      worker.postMessage({ jobId, type: 'file_data', buffer: buf }, [buf]);
    }).catch(reject);
  });
}


export function registryTagsForContext(context: AssetUploadContext): {
  folder: string;
  source: string;
} {
  switch (context) {
    case 'dreamr_feed':
      return { folder: 'dreamr_feed', source: 'dreamr_feed' };
    case 'profile':
      return { folder: 'dreamr_profile', source: 'profile' };
    case 'starmaker':
      return { folder: 'starmaker_audio', source: 'starmaker' };
    default:
      return { folder: 'general', source: 'general' };
  }
}
