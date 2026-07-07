







let madMaxiExportsPromise: Promise<MadMaxiWasmExports | null> | null = null;







type MadMaxiWasmExports = {
  memory: WebAssembly.Memory;
  getSnapshotSize: () => number;
  writeSnapshot: (ptr: number) => void;
  loadSnapshot: (ptr: number) => void;
};



async function loadMadMaxiExports(): Promise<MadMaxiWasmExports | null> {
  if (madMaxiExportsPromise) return madMaxiExportsPromise;
  madMaxiExportsPromise = (async () => {
    try {
      const wasmPath = '/cartridges/mad-maxi/logic/main.wasm';
      if (typeof fetch !== 'function') return null;
      const response = await fetch(wasmPath);
      if (!response.ok) return null;
      const bytes = new Uint8Array(await response.arrayBuffer());
      const { instance } = await WebAssembly.instantiate(bytes as BufferSource, {});
      return instance.exports as unknown as MadMaxiWasmExports;
    } catch {
      return null;
    }
  })();
  return madMaxiExportsPromise;
}

export async function invokeMadMaxiSnapshotTransfer(): Promise<void> {
  const exp = await loadMadMaxiExports();
  if (!exp) return;

  const size = exp.getSnapshotSize();
  const bytesPerPage = 65536;
  const requiredPages = Math.max(1, Math.ceil((size + 64) / bytesPerPage));
  const currentPages = exp.memory.buffer.byteLength / bytesPerPage;
  if (currentPages < requiredPages) {
    exp.memory.grow(requiredPages - currentPages);
  }

  const ptr = 32;
  exp.writeSnapshot(ptr);
  exp.loadSnapshot(ptr);
}






