import { createServerClient } from '@/supabase/server/serverClient';



const EMBEDDING_MODEL = 'text-embedding-3-small';
const EMBEDDING_DIMENSIONS = 1536;


async function fetchEmbedding(text: string): Promise<number[] | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn('[dream-docs] OPENAI_API_KEY not set — skipping embedding');
    return null;
  }

  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: EMBEDDING_MODEL,
      input: text,
      dimensions: EMBEDDING_DIMENSIONS,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`OpenAI embeddings error ${res.status}: ${body.slice(0, 500)}`);
  }

  const json = (await res.json()) as {
    data: Array<{ embedding: number[] }>;
  };

  return json.data[0]?.embedding ?? null;
}


export async function embedDocSection(sectionId: number, content: string): Promise<void> {
  const embedding = await fetchEmbedding(content);
  if (!embedding) return;

  const supabase = await createServerClient();

  const { error } = await supabase
    .from('dream_doc_sections')
    .update({
      embedding: `[${embedding.join(',')}]`,
      updated_at: new Date().toISOString(),
    })
    .eq('id', sectionId);

  if (error) {
    console.error('[dream-docs] failed to persist embedding for section', sectionId, error);
  }
}
