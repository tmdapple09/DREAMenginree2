








export type JourneyDotKind =
  
  | 'surface_first_entry'        
  | 'engin_first_activated'      
  | 'surface_milestone_visit'    

  | 'dream_window_first_mount'   
  | 'dream_window_bound'         

  | 'content_first_created'      
  | 'content_shared'             
  | 'creative_streak'            

  | 'connector_linked'           
  | 'connector_first_sync'       

  | 'profile_first_projected'    
  | 'profile_section_added'      

  | 'first_follower'             
  | 'follower_milestone'         
  | 'first_dm_sent'              
  | 'first_dm_received'          

  | 'shop_item_first_listed'     
  | 'marketplace_item_first_listed' 
  | 'first_sale'                 
  | 'ad_slot_first_created'      

  | 'workflow_first_activation'  
  | 'workflow_first_export'      
  | 'workflow_first_handoff'     

  | 'runtime_first_entry'        
  | 'dreamspace_first_open';     


export interface JourneyDot {
  id: string;
  user_id: string;
  kind: JourneyDotKind;
  
  surface: string;
  
  label: string;
  
  significance: number;
  
  domain_color: string;
  
  metadata: Record<string, unknown>;
  
  created_at: string;
}


export type LogJourneyDotInput = Omit<JourneyDot, 'id' | 'user_id' | 'created_at'>;


export interface JourneyTimeGroup {
  label: string;     
  dots: JourneyDot[];
}


export const JOURNEY_DOMAIN_COLORS: Record<string, string> = {
  'HomeDream Surface':           '#c8981a',
  'Music Daydream Surface':      '#8b5cf6',
  'Games Daydream Surface':      '#22c55e',
  'Lab Daydream Surface':        '#f59e0b',
  'Code Daydream Surface':       '#0ea5e9',
  'Brand Daydream Surface':      '#ec4899',
  'Create Daydream Surface':     '#ef4444',
  'DreamDM Surface':             '#38bdf8',
  'DreamShop Surface':           '#c8981a',
  'DreamMarketplace Surface':    '#a78bfa',
};
