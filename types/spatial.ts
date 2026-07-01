






export type SpaceType = "home" | "profile";

export interface Space {
  id: string;
  user_id: string;
  type: SpaceType;
  created_at: string;
  updated_at: string;
}





export type ContentType =
  | "image"
  | "video"
  | "audio"
  | "text"
  | "file"
  | "link"
  | "embed";

export type ContentVisibility = "private" | "shared";

export interface ContentObject {
  id: string;
  user_id: string;
  type: ContentType;
  title?: string;
  description?: string;
  
  storage_url?: string;
  
  text_content?: string;
  
  external_url?: string;
  
  metadata: Record<string, unknown>;
  
  visibility: ContentVisibility;
  
  created_at: string;
  updated_at: string;
}





export interface Album {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  cover_content_id?: string; 
  
  is_shared: boolean;
  
  shared_content_ids?: string[];
  created_at: string;
  updated_at: string;
}

export interface AlbumContent {
  id: string;
  album_id: string;
  content_id: string;
  order: number;
  created_at: string;
}





export type WidgetType =
  | "feed"           
  | "blank"          
  | "gallery"        
  | "album"          
  | "text"           
  | "media"          
  | "profile_info"   
  | "link_tree"      
  | "embed"          
  | "custom";        

export type WidgetVisibility = "private" | "public" | "followers";


export type OverlapLinkType =
  | "copy"      
  | "linked"    
  | "snapshot"; 

export interface Widget {
  id: string;
  user_id: string;
  
  space: SpaceType;
  
  type: WidgetType;
  
  title?: string;
  description?: string;
  
  order: number;
  
  config: WidgetConfig;
  
  visibility: WidgetVisibility;
  
  overlap?: OverlapConfig;
  
  created_at: string;
  updated_at: string;
}

export interface WidgetConfig {
  
  [key: string]: unknown;
  
  layout?: "grid" | "list" | "carousel" | "masonry" | "single";
  columns?: number;
  showTitle?: boolean;
  showDescription?: boolean;
  backgroundColor?: string;
  
  scope?: "me" | "following";
}





export interface OverlapConfig {
  
  link_type: OverlapLinkType;
  
  source_content_ids?: string[];
  source_album_id?: string;
  
  created_at: string;
  
  last_synced_at?: string;
}

export interface ShareIntent {
  
  content_ids?: string[];
  album_id?: string;
  
  link_type: OverlapLinkType;
  
  target_widget_id?: string; 
  create_new_widget?: {
    type: WidgetType;
    title?: string;
    config?: WidgetConfig;
  };
  
  visibility: WidgetVisibility;
}





export interface WidgetContent {
  id: string;
  widget_id: string;
  content_id: string;
  order: number;
  
  display_override?: {
    title?: string;
    description?: string;
  };
  created_at: string;
}





export interface FeedItem {
  id: string;
  user_id: string;
  
  widget_id: string;
  content_id?: string;
  
  type: "widget_shared" | "content_added" | "album_shared";
  
  created_at: string;
}





export interface NavigationState {
  
  space: SpaceType;
  
  currentIndex: number;
  
  totalWidgets: number;
  
  lastDirection?: "left" | "right";

  
  layer?: number;   
  face?: number;    
  slot?: number;    
  depth?: number;   
}





export function isContentObject(obj: unknown): obj is ContentObject {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "type" in obj &&
    "user_id" in obj &&
    "visibility" in obj
  );
}

export function isWidget(obj: unknown): obj is Widget {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "space" in obj &&
    "type" in obj &&
    "order" in obj
  );
}

export function isAlbum(obj: unknown): obj is Album {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "title" in obj &&
    "is_shared" in obj
  );
}





export type CreateContentInput = Omit<ContentObject, "id" | "created_at" | "updated_at" | "visibility"> & {
  visibility?: ContentVisibility;
};

export type CreateWidgetInput = Omit<Widget, "id" | "created_at" | "updated_at">;

export type CreateAlbumInput = Omit<Album, "id" | "created_at" | "updated_at" | "is_shared"> & {
  is_shared?: boolean;
};

export type UpdateContentInput = Partial<Omit<ContentObject, "id" | "user_id" | "created_at">>;

export type UpdateWidgetInput = Partial<Omit<Widget, "id" | "user_id" | "created_at">>;
