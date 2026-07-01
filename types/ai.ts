



export type AITier = "dr_eams" | "idari" | "boogieman";

export type AIRole =
  | "creative"
  | "assistant"
  | "debugger"
  | "overseer"
  | "policy"
  | "enforcement";

export interface AIAgent {
  id: string;
  tier: AITier;
  roles: AIRole[];
  name: string;
  description: string;
  
  widget_id?: string;
  is_active: boolean;
  config?: Record<string, unknown>;
}


export interface DrEamsAgent extends AIAgent {
  tier: "dr_eams";
  roles: ("creative" | "assistant")[];
}


export interface IDARiAgent extends AIAgent {
  tier: "idari";
  roles: ("debugger" | "overseer")[];
}


export interface BoogieManAgent extends AIAgent {
  tier: "boogieman";
  roles: ("policy" | "enforcement")[];
}

export type AnyAIAgent = DrEamsAgent | IDARiAgent | BoogieManAgent;

