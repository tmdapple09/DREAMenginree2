import { web3Client } from './client';
import {
    DEFAULT_CHAIN_ID,
    EngagementPayload,
    EngagementStats,
    SUPPORTED_CHAINS,
    Web3Error,
} from './types';



const BACKEND_BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? '/api';

async function trackOffChain(payload: EngagementPayload): Promise<void> {
  const res = await fetch(`${BACKEND_BASE}/engagement/track`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Web3Error(
      body?.error ?? `Engagement track failed (${res.status})`,
      'CONTRACT_ERROR'
    );
  }
}

async function fetchStatsOffChain(contentId: string): Promise<EngagementStats> {
  const res = await fetch(
    `${BACKEND_BASE}/engagement/stats/${encodeURIComponent(contentId)}`
  );
  if (!res.ok) {
    return {
      contentId,
      likes: 0,
      reposts: 0,
      comments: 0,
      verifiedLikes: 0,
      hasLiked: false,
    };
  }
  const data = (await res.json()) as Partial<EngagementStats>;
  return {
    contentId,
    likes: data.likes ?? 0,
    reposts: data.reposts ?? 0,
    comments: data.comments ?? 0,
    verifiedLikes: data.verifiedLikes ?? data.likes ?? 0,
    hasLiked: data.hasLiked ?? false,
  };
}


async function trackOnChain(
  payload: EngagementPayload
): Promise<string | null> {
  const account = web3Client.getAccount();
  if (!account) return null;

  const chain = SUPPORTED_CHAINS[account.chainId ?? DEFAULT_CHAIN_ID];
  if (!chain?.engagementContractAddress) {
    
    return null;
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  void payload;
  return null;
}


export async function trackEngagement(
  contentId: string,
  type: EngagementPayload['type'],
  options: {
    contentCid?: string;
    
    offChainOnly?: boolean;
  } = {}
): Promise<{ txHash: string | null; offChain: boolean }> {
  const actor = web3Client.getAccount()?.address ?? 'anonymous';
  const payload: EngagementPayload = {
    contentId,
    type,
    actor,
    timestamp: new Date().toISOString(),
    contentCid: options.contentCid,
  };

  let txHash: string | null = null;

  if (!options.offChainOnly) {
    txHash = await trackOnChain(payload).catch(() => null);
    if (txHash) payload.txHash = txHash;
  }

  await trackOffChain(payload);

  return { txHash, offChain: txHash === null };
}


export async function getEngagementStats(
  contentId: string
): Promise<EngagementStats> {
  return fetchStatsOffChain(contentId);
}


const optimisticCache = new Map<
  string,
  { delta: Partial<Record<EngagementPayload['type'], number>>; hasLiked: boolean }
>();

export function applyOptimisticEngagement(
  contentId: string,
  type: EngagementPayload['type'],
  undo = false
): void {
  const existing = optimisticCache.get(contentId) ?? {
    delta: {},
    hasLiked: false,
  };
  const current = existing.delta[type] ?? 0;
  optimisticCache.set(contentId, {
    delta: { ...existing.delta, [type]: undo ? current - 1 : current + 1 },
    hasLiked: type === 'like' ? !undo : existing.hasLiked,
  });
}

export function getOptimisticDelta(
  contentId: string
): { delta: Partial<Record<EngagementPayload['type'], number>>; hasLiked: boolean } {
  return optimisticCache.get(contentId) ?? { delta: {}, hasLiked: false };
}

export function clearOptimisticDelta(contentId: string): void {
  optimisticCache.delete(contentId);
}
