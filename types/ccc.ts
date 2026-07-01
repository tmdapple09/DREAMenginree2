










export interface CCCNode {
  id: string;
  depth: number;
  parent_id?: string;
  children_ids: string[];
  state: Record<string, unknown>;
}

export interface CCCField {
  id: string;
  nodes: CCCNode[];
  
  transformations: CCCTransformation[];
}

export interface CCCTransformation {
  id: string;
  source_node_id: string;
  target_node_id: string;
  payload: unknown;
  timestamp: string;
}


export interface CCCLayer {
  id: string;
  depth: number;
  label?: string;
  parent_layer_id?: string;
  child_layer_ids: string[];
  field: CCCField;
}

