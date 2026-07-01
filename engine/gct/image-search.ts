import { GCTEngine, Template, type GCTMatch } from './gct-engine';

export interface ImageSearchItem {
  id: string;
  
  data: Float32Array;
}


export async function findSimilarImages(
  queryImage: Float32Array,
  imageDatabase: ImageSearchItem[],
  threshold = 0.85
): Promise<GCTMatch[]> {
  if (imageDatabase.length === 0) return [];

  const engine = new GCTEngine({ preferGPU: true, numTemplates: imageDatabase.length });
  await engine.init();

  const templates: Template[] = imageDatabase.map((image) => ({
    id: image.id,
    data: image.data,
  }));

  const matches = await engine.search(queryImage, templates, threshold);
  return matches.sort((a, b) => b.correlation - a.correlation);
}

