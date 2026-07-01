import type { SupabaseClient } from '@supabase/supabase-js';
import { toErrorMessage } from '@/utils/index';







export type EmbeddableContentType =
  | 'post'
  | 'music_release'
  | 'profile'
  | 'product'
  | 'notebook'
  | 'dream_window';


export interface ContentEmbeddingRow {
  id: string;
  content_id: string;
  content_type: EmbeddableContentType;
  embedding: number[];
  owner_id: string;
  created_at: string;
  updated_at: string;
}


export interface SimilarityResult {
  contentId: string;
  contentType: EmbeddableContentType;
  ownerId: string;
  
  distance: number;
}



export interface UpsertEmbeddingParams {
  client: SupabaseClient;
  contentId: string;
  contentType: EmbeddableContentType;
  embedding: number[];
  ownerId: string;
}


export async function upsertEmbedding({
  client,
  contentId,
  contentType,
  embedding,
  ownerId,
}: UpsertEmbeddingParams): Promise<{ id: string | null; error: string | null }> {
  const { data, error } = await client
    .from('content_embeddings')
    .upsert(
      {
        content_id: contentId,
        content_type: contentType,
        embedding: `[${embedding.join(',')}]`,
        owner_id: ownerId,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'content_id,content_type' },
    )
    .select('id')
    .single();

  if (error) return { id: null, error: toErrorMessage(error) };
  return { id: (data as { id: string }).id, error: null };
}



export interface SimilaritySearchParams {
  client: SupabaseClient;
  
  queryEmbedding: number[];
  
  contentType?: EmbeddableContentType;
  
  limit?: number;
  
  maxDistance?: number;
}


export async function searchSimilar({
  client,
  queryEmbedding,
  contentType,
  limit = 10,
  maxDistance = 1.0,
}: SimilaritySearchParams): Promise<{ results: SimilarityResult[]; error: string | null }> {
  const { data, error } = await client.rpc('match_content_embeddings', {
    query_embedding: `[${queryEmbedding.join(',')}]`,
    match_count: limit,
    max_distance: maxDistance,
    filter_content_type: contentType ?? null,
  });

  if (error) return { results: [], error: toErrorMessage(error) };

  const results: SimilarityResult[] = (
    data as Array<{
      content_id: string;
      content_type: EmbeddableContentType;
      owner_id: string;
      distance: number;
    }>
  ).map((row) => ({
    contentId: row.content_id,
    contentType: row.content_type,
    ownerId: row.owner_id,
    distance: row.distance,
  }));

  return { results, error: null };
}




export async function deleteEmbedding(
  client: SupabaseClient,
  contentId: string,
  contentType: EmbeddableContentType,
): Promise<{ error: string | null }> {
  const { error } = await client
    .from('content_embeddings')
    .delete()
    .eq('content_id', contentId)
    .eq('content_type', contentType);

  return { error: error?.message ?? null };
}



export type TriadVote = 'approve' | 'reject' | 'abstain';
export type ConsensusOutcome = 'approved' | 'rejected' | 'escalated';

export interface LogConsensusParams {
  client: SupabaseClient;
  requestId: string;
  userId: string;
  eamsVote: TriadVote;
  idariVote: TriadVote;
  boogieVote: TriadVote;
  outcome: ConsensusOutcome;
  reasoning?: Record<string, unknown>;
}


export async function logTriadConsensus({
  client,
  requestId,
  userId,
  eamsVote,
  idariVote,
  boogieVote,
  outcome,
  reasoning,
}: LogConsensusParams): Promise<{ id: string | null; error: string | null }> {
  const { data, error } = await client
    .from('ai_triad_consensus_log')
    .insert({
      request_id: requestId,
      user_id: userId,
      eams_vote: eamsVote,
      idari_vote: idariVote,
      boogie_vote: boogieVote,
      outcome,
      reasoning: reasoning ?? {},
    })
    .select('id')
    .single();

  if (error) return { id: null, error: toErrorMessage(error) };
  return { id: (data as { id: string }).id, error: null };
}


export function deriveConsensus(
  eamsVote: TriadVote,
  idariVote: TriadVote,
  boogieVote: TriadVote,
): ConsensusOutcome {
  const votes = [eamsVote, idariVote, boogieVote];
  const approvals = votes.filter((v) => v === 'approve').length;
  const rejections = votes.filter((v) => v === 'reject').length;

  if (approvals >= 2) return 'approved';
  if (rejections >= 2) return 'rejected';
  return 'escalated';
}
