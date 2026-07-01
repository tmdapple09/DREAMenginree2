










export const MAX_WIDGETS = 48;

export type DreamKind = "home" | "work";

export interface Dream {
  id: string;
  user_id: string;
  kind: DreamKind;
  title?: string;
  widget_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface HomeAnchor {
  user_id: string;
  home_dream_id: string;
  work_dream_id?: string;
  active_dream_id: string;
  widget_count: number;
}

export interface InfiniteLoop {
  id: string;
  user_id: string;
  dream_ids: string[];
  label?: string;
  created_at: string;
}


export type UserAction =
  | "create"
  | "work"
  | "play"
  | "sell"
  | "build"
  | "research"
  | "return";

