

export class PipelineCache {
  private readonly memoryCache = new Map<string, GPUComputePipeline>();
  private dbName = 'dreamengin-pipeline-cache';
  private storeName = 'pipelines';
  private db: IDBDatabase | null = null;

  constructor(private readonly device: GPUDevice) {}

  
  async init(): Promise<void> {
    if (typeof indexedDB === 'undefined') {
      console.warn('[PipelineCache] IndexedDB not available, cache disabled');
      return;
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => {
        console.error('[PipelineCache] Failed to open IndexedDB');
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event: Event ) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'hash' });
        }
      };
    });
  }

  
  async getOrCreate(
    wgslSource: string,
    layout?: GPUPipelineLayout,
  ): Promise<{
    pipeline: GPUComputePipeline;
    sourceHash: string;
    cacheHit: boolean;
  }> {
    const sourceHash = await this.hashSource(wgslSource);

    
    const cached = this.memoryCache.get(sourceHash);
    if (cached) {
      return { pipeline: cached, sourceHash, cacheHit: true };
    }

    
    const diskCached = await this.loadFromDisk(sourceHash);
    if (diskCached) {
      this.memoryCache.set(sourceHash, diskCached);
      return { pipeline: diskCached, sourceHash, cacheHit: true };
    }

    
    const pipeline = await this.compile(wgslSource, layout);
    this.memoryCache.set(sourceHash, pipeline);
    await this.saveToDisk(sourceHash, wgslSource);

    return { pipeline, sourceHash, cacheHit: false };
  }

  
  private async compile(
    wgslSource: string,
    layout?: GPUPipelineLayout,
  ): Promise<GPUComputePipeline> {
    const shaderModule = this.device.createShaderModule({
      code: wgslSource,
    });

    
    const compilationInfo = await shaderModule.getCompilationInfo();
    const errors = compilationInfo.messages.filter((m) => m.type === 'error');
    if (errors.length > 0) {
      console.error('[PipelineCache] Shader compilation errors:', errors);
      throw new Error(`Shader compilation failed: ${errors[0].message}`);
    }

    const pipeline = await this.device.createComputePipelineAsync({
      layout: layout ?? 'auto',
      compute: {
        module: shaderModule,
        entryPoint: 'main',
      },
    });

    return pipeline;
  }

  
  private async hashSource(wgslSource: string): Promise<string> {
    
    const features = Array.from(this.device.features).sort().join(',');
    const input = `${wgslSource}|${features}`;

    if (typeof crypto === 'undefined' || !crypto.subtle) {
      
      return this.simpleHash(input);
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  
  private simpleHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; 
    }
    return Math.abs(hash).toString(16).padStart(8, '0');
  }

  
  private async loadFromDisk(hash: string): Promise<GPUComputePipeline | null> {
    if (!this.db) return null;

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(hash);

      request.onsuccess = async () => {
        const record = request.result;
        if (!record) {
          resolve(null);
          return;
        }

        try {
          
          
          
          
          const pipeline = await this.compile(record.source);
          resolve(pipeline);
        } catch {
          resolve(null);
        }
      };

      request.onerror = () => {
        resolve(null);
      };
    });
  }

  
  private async saveToDisk(hash: string, source: string): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      const record = {
        hash,
        source,
        timestamp: Date.now(),
      };

      const request = store.put(record);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        console.error('[PipelineCache] Failed to save to disk');
        resolve(); 
      };
    });
  }

  
  async clear(): Promise<void> {
    this.memoryCache.clear();

    if (!this.db) return;

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        console.error('[PipelineCache] Failed to clear disk cache');
        resolve();
      };
    });
  }

  
  async getStats(): Promise<{
    memoryCacheSize: number;
    diskCacheSize: number;
  }> {
    const memoryCacheSize = this.memoryCache.size;

    if (!this.db) {
      return { memoryCacheSize, diskCacheSize: 0 };
    }

    const diskCacheSize = await new Promise<number>((resolve) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.count();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        resolve(0);
      };
    });

    return { memoryCacheSize, diskCacheSize };
  }

  
  close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}

