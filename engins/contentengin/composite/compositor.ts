

export type BlendMode =
  | 'over'    
  | 'add'
  | 'multiply'
  | 'screen'
  | 'darken'
  | 'lighten'
  | 'difference'
  | 'exclusion'
  | 'hardlight'
  | 'softlight';

export type NodeType =
  | 'MediaIn'       
  | 'Over'          
  | 'Merge'         
  | 'ColorCorrect'  
  | 'Transform'     
  | 'Roto'          
  | 'MotionBlur'    
  | 'Keyer'         
  | 'Output';       

export interface NodeParam {
  name: string;
  type: 'float' | 'vec2' | 'vec4' | 'enum' | 'boolean';
  value: number | number[] | string | boolean;
  min?: number;
  max?: number;
  options?: string[]; 
}

export interface CompNode {
  id: string;
  type: NodeType;
  label: string;
  
  inputs: Record<string, string | null>;
  
  params: NodeParam[];
  
  position: { x: number; y: number };
  
  enabled: boolean;
}

export interface CompGraph {
  id: string;
  name: string;
  nodes: CompNode[];
  
  evaluationOrder: string[];
}



const DEFAULT_PARAMS: Record<NodeType, NodeParam[]> = {
  MediaIn: [
    { name: 'source', type: 'enum', value: 'none', options: ['none', 'video', 'image', '3d_render', 'roto_plate'] },
    { name: 'frame', type: 'float', value: 0, min: 0 },
    { name: 'premultiplied', type: 'boolean', value: true },
  ],
  Over: [
    { name: 'mix', type: 'float', value: 1.0, min: 0, max: 1 },
  ],
  Merge: [
    { name: 'operation', type: 'enum', value: 'over', options: ['over', 'add', 'multiply', 'screen', 'darken', 'lighten', 'difference', 'exclusion'] },
    { name: 'mix', type: 'float', value: 1.0, min: 0, max: 1 },
  ],
  ColorCorrect: [
    { name: 'gain', type: 'vec4', value: [1, 1, 1, 1] },
    { name: 'gamma', type: 'vec4', value: [1, 1, 1, 1] },
    { name: 'lift', type: 'vec4', value: [0, 0, 0, 0] },
    { name: 'saturation', type: 'float', value: 1.0, min: 0, max: 4 },
  ],
  Transform: [
    { name: 'translate', type: 'vec2', value: [0, 0] },
    { name: 'rotate', type: 'float', value: 0, min: -360, max: 360 },
    { name: 'scale', type: 'vec2', value: [1, 1] },
  ],
  Roto: [
    { name: 'feather', type: 'float', value: 0, min: 0, max: 100 },
    { name: 'invertMask', type: 'boolean', value: false },
  ],
  MotionBlur: [
    { name: 'samples', type: 'float', value: 8, min: 1, max: 32 },
    { name: 'shutterAngle', type: 'float', value: 180, min: 0, max: 360 },
  ],
  Keyer: [
    { name: 'mode', type: 'enum', value: 'chroma', options: ['chroma', 'luma', 'difference'] },
    { name: 'keyColor', type: 'vec4', value: [0, 1, 0, 1] }, 
    { name: 'tolerance', type: 'float', value: 0.1, min: 0, max: 1 },
    { name: 'despill', type: 'boolean', value: true },
  ],
  Output: [
    { name: 'format', type: 'enum', value: 'exr', options: ['exr', 'png', 'jpg', 'mp4'] },
    { name: 'colorspace', type: 'enum', value: 'linear', options: ['linear', 'sRGB', 'ACEScg', 'rec709'] },
  ],
};

const DEFAULT_INPUTS: Record<NodeType, string[]> = {
  MediaIn:      [],
  Over:         ['A', 'B'],
  Merge:        ['A', 'B'],
  ColorCorrect: ['input'],
  Transform:    ['input'],
  Roto:         [],
  MotionBlur:   ['input'],
  Keyer:        ['input'],
  Output:       ['input'],
};



let _nodeIdSeq = 1;
function nextNodeId(type: NodeType): string {
  return `${type}_${_nodeIdSeq++}`;
}


export function createNode(
  type: NodeType,
  label?: string,
  position: { x: number; y: number } = { x: 0, y: 0 }
): CompNode {
  const id = nextNodeId(type);
  const inputs: Record<string, string | null> = {};
  for (const input of DEFAULT_INPUTS[type]) inputs[input] = null;

  return {
    id,
    type,
    label: label ?? `${type} ${_nodeIdSeq - 1}`,
    inputs,
    params: DEFAULT_PARAMS[type].map((p) => ({ ...p, value: Array.isArray(p.value) ? [...p.value] : p.value })),
    position,
    enabled: true,
  };
}


export function createGraph(name: string = 'Untitled Comp'): CompGraph {
  return { id: `graph_${Date.now()}`, name, nodes: [], evaluationOrder: [] };
}


export function addNode(graph: CompGraph, node: CompNode): CompGraph {
  return {
    ...graph,
    nodes: [...graph.nodes, node],
    evaluationOrder: topologicalSort([...graph.nodes, node]),
  };
}


export function connectNodes(
  graph: CompGraph,
  fromNodeId: string,
  toNodeId: string,
  inputName: string
): CompGraph {
  const nodes = graph.nodes.map((n) => {
    if (n.id !== toNodeId) return n;
    return { ...n, inputs: { ...n.inputs, [inputName]: fromNodeId } };
  });
  return { ...graph, nodes, evaluationOrder: topologicalSort(nodes) };
}


export function disconnectInput(
  graph: CompGraph,
  nodeId: string,
  inputName: string
): CompGraph {
  const nodes = graph.nodes.map((n) => {
    if (n.id !== nodeId) return n;
    return { ...n, inputs: { ...n.inputs, [inputName]: null } };
  });
  return { ...graph, nodes, evaluationOrder: topologicalSort(nodes) };
}


export function setParam(
  graph: CompGraph,
  nodeId: string,
  paramName: string,
  value: NodeParam['value']
): CompGraph {
  const nodes = graph.nodes.map((n) => {
    if (n.id !== nodeId) return n;
    return {
      ...n,
      params: n.params.map((p) => p.name === paramName ? { ...p, value } : p),
    };
  });
  return { ...graph, nodes };
}


export function findNode(graph: CompGraph, nodeId: string): CompNode | undefined {
  return graph.nodes.find((n) => n.id === nodeId);
}


export function topologicalSort(nodes: CompNode[]): string[] {
  const idSet = new Set(nodes.map((n) => n.id));
  const inDeg = new Map<string, number>();
  const outEdges = new Map<string, string[]>();

  for (const n of nodes) {
    if (!inDeg.has(n.id)) inDeg.set(n.id, 0);
    for (const src of Object.values(n.inputs)) {
      if (src && idSet.has(src)) {
        inDeg.set(n.id, (inDeg.get(n.id) ?? 0) + 1);
        const edges = outEdges.get(src) ?? [];
        edges.push(n.id);
        outEdges.set(src, edges);
      }
    }
  }

  const queue = nodes.filter((n) => (inDeg.get(n.id) ?? 0) === 0).map((n) => n.id);
  const order: string[] = [];

  while (queue.length > 0) {
    const id = queue.shift()!;
    order.push(id);
    for (const next of outEdges.get(id) ?? []) {
      const deg = (inDeg.get(next) ?? 0) - 1;
      inDeg.set(next, deg);
      if (deg === 0) queue.push(next);
    }
  }

  
  for (const n of nodes) {
    if (!order.includes(n.id)) order.push(n.id);
  }

  return order;
}


export function graphSummary(graph: CompGraph): string {
  const counts: Partial<Record<NodeType, number>> = {};
  for (const n of graph.nodes) counts[n.type] = (counts[n.type] ?? 0) + 1;
  const typeList = Object.entries(counts).map(([t, c]) => `${c}× ${t}`).join(', ');
  return `"${graph.name}" — ${graph.nodes.length} nodes (${typeList}), eval order: ${graph.evaluationOrder.join(' → ')}`;
}
