



export async function initTfBackend(): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    await import('@tensorflow/tfjs-backend-webgpu');
    const tf = await import('@tensorflow/tfjs');
    await tf.setBackend('webgpu');
    await tf.ready();
  } catch {
    
  }
}
