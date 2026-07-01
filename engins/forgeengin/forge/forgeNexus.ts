import { CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY } from './forgeRegistry';



export interface NexusEdge {
  
  from: string;
  
  to: string;
  
  weight: number;
  
  strength: number;
  
  label: string;
}

export interface NexusNode {
  
  id: string;
  
  name: string;
  
  emoji: string;
  
  accent: string;
  
  inbound: number;
  
  outbound: number;
  
  centrality: number;
  
  isolated: boolean;
}

export interface AffinityCluster {
  
  id: string;
  
  engines: string[];
  
  internalWeight: number;
  
  label: string;
  
  accent: string;
}

export interface NexusSnapshot {
  
  edges: NexusEdge[];
  
  nodes: NexusNode[];
  
  clusters: AffinityCluster[];
  
  dominantPipeline: string[];
  
  totalTransitions: number;
  
  computedAt: string;
}

interface HistoryEntry {
  enginId: string;
  label: string;
  timestamp: string;
}


function readHistory(): HistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FORGE_HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}


export function buildTransitionMap(history: HistoryEntry[]): Map<string, number> {
  const map = new Map<string, number>();
  for (let i = 1; i < history.length; i++) {
    const from = history[i - 1].enginId;
    const to = history[i].enginId;
    if (from === to) continue;
    const key = `${from}→${to}`;
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return map;
}


export function computeEdges(transitions: Map<string, number>): NexusEdge[] {
  if (transitions.size === 0) return [];

  const maxWeight = Math.max(...transitions.values());
  const edges: NexusEdge[] = [];

  for (const [key, weight] of transitions) {
    const [from, to] = key.split('→');
    const fromEng = ENGIN_REGISTRY.find((e) => e.id === from);
    const toEng = ENGIN_REGISTRY.find((e) => e.id === to);
    if (!fromEng || !toEng) continue;

    edges.push({
      from,
      to,
      weight,
      strength: maxWeight > 0 ? weight / maxWeight : 0,
      label: `${fromEng.emoji} → ${toEng.emoji}`,
    });
  }

  return edges.sort((a, b) => b.weight - a.weight);
}


export function computeNodes(edges: NexusEdge[]): NexusNode[] {
  const inbound = new Map<string, number>();
  const outbound = new Map<string, number>();

  for (const edge of edges) {
    outbound.set(edge.from, (outbound.get(edge.from) ?? 0) + edge.weight);
    inbound.set(edge.to, (inbound.get(edge.to) ?? 0) + edge.weight);
  }

  const maxDegree = Math.max(
    1,
    ...CREATIVE_ENGINES.map((e) =>
      (inbound.get(e.id) ?? 0) + (outbound.get(e.id) ?? 0),
    ),
  );

  return CREATIVE_ENGINES.map((engine) => {
    const ib = inbound.get(engine.id) ?? 0;
    const ob = outbound.get(engine.id) ?? 0;
    return {
      id: engine.id,
      name: engine.name,
      emoji: engine.emoji,
      accent: engine.accent,
      inbound: ib,
      outbound: ob,
      centrality: (ib + ob) / maxDegree,
      isolated: ib === 0 && ob === 0,
    };
  });
}


export function detectClusters(edges: NexusEdge[]): AffinityCluster[] {
  
  const pairs: Array<[string, string, number]> = [];
  const edgeMap = new Map<string, number>();
  for (const edge of edges) {
    edgeMap.set(`${edge.from}→${edge.to}`, edge.weight);
  }

  const seen = new Set<string>();
  for (const edge of edges) {
    const reverseKey = `${edge.to}→${edge.from}`;
    const reverseWeight = edgeMap.get(reverseKey) ?? 0;
    const pairKey = [edge.from, edge.to].sort().join('+');
    if (reverseWeight > 0 && !seen.has(pairKey)) {
      seen.add(pairKey);
      pairs.push([edge.from, edge.to, edge.weight + reverseWeight]);
    }
  }

  if (pairs.length === 0) return [];

  
  const clusters: Set<string>[] = [];
  const weights: number[] = [];

  for (const [a, b, w] of pairs) {
    let merged = false;
    for (let i = 0; i < clusters.length; i++) {
      if (clusters[i].has(a) || clusters[i].has(b)) {
        clusters[i].add(a);
        clusters[i].add(b);
        weights[i] += w;
        merged = true;
        break;
      }
    }
    if (!merged) {
      clusters.push(new Set([a, b]));
      weights.push(w);
    }
  }

  return clusters.map((engineSet, i: number) => {
    const engineIds = [...engineSet];
    
    const primary = ENGIN_REGISTRY.find((e) => e.id === engineIds[0]);
    const emojis = engineIds
      .map((id) => ENGIN_REGISTRY.find((e) => e.id === id)?.emoji ?? '?')
      .join(' + ');

    return {
      id: `cluster-${i}`,
      engines: engineIds,
      internalWeight: weights[i],
      label: emojis,
      accent: primary?.accent ?? '#ef4444',
    };
  });
}


export function findDominantPipeline(edges: NexusEdge[]): string[] {
  if (edges.length === 0) return [];

  
  const bestNext = new Map<string, { to: string; weight: number }>();
  for (const edge of edges) {
    const current = bestNext.get(edge.from);
    if (!current || edge.weight > current.weight) {
      bestNext.set(edge.from, { to: edge.to, weight: edge.weight });
    }
  }

  
  const outWeights = new Map<string, number>();
  for (const edge of edges) {
    outWeights.set(edge.from, (outWeights.get(edge.from) ?? 0) + edge.weight);
  }

  let startEngine = '';
  let maxOut = 0;
  for (const [id, w] of outWeights) {
    if (w > maxOut) {
      maxOut = w;
      startEngine = id;
    }
  }

  if (!startEngine) return [];

  
  const pipeline: string[] = [startEngine];
  const visited = new Set<string>([startEngine]);
  let current = startEngine;

  while (pipeline.length < CREATIVE_ENGINES.length) {
    const next = bestNext.get(current);
    if (!next || visited.has(next.to)) break;
    pipeline.push(next.to);
    visited.add(next.to);
    current = next.to;
  }

  return pipeline;
}


export function computeNexus(historyOverride?: HistoryEntry[]): NexusSnapshot {
  const history = historyOverride ?? readHistory();
  const transitions = buildTransitionMap(history);
  const edges = computeEdges(transitions);
  const nodes = computeNodes(edges);
  const clusters = detectClusters(edges);
  const dominantPipeline = findDominantPipeline(edges);
  const totalTransitions = edges.reduce((sum: number, e: { weight: number }) => sum + e.weight, 0);

  return {
    edges,
    nodes,
    clusters,
    dominantPipeline,
    totalTransitions,
    computedAt: new Date().toISOString(),
  };
}
