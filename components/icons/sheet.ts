

export const SHEET_PATH = '/images/iconslist.png';


export const SHEET_W = 1168;
export const SHEET_H = 896;


export const COLS = 11;
export const ROWS = 9;


export const FRAME_W = 96;
export const FRAME_H = 96;

export type IconName =
  
  | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
  | 'tiktok' | 'messenger' | 'pinterest' | 'douyin' | 'whatsapp' | 'airpods'
  
  | 'tiktok2' | 'bigo' | 'snapchat' | 'reddit' | 'discord'
  | 'apple-music' | 'spotify' | 'music' | 'soundcloud' | 'twitch' | 'vimeo'
  
  | 'vimeo2' | 'dropbox' | 'behance' | 'nba' | 'medium'
  | 'basketball' | 'vimeo3' | 'dribbble' | 'behance2' | 'figma'
  
  | 'calendar' | 'cart' | 'maps' | 'video' | 'people'
  | 'globe' | 'windows' | 'safari' | 'firefox'
  
  | 'apple' | 'android' | 'amazon' | 'paypal'
  | 'ebay' | 'shopify' | 'mastercard' | 'visa' | 'venmo'
  
  | 'netflix' | 'hulu' | 'hoopla' | 'disney-plus' | 'prime-video'
  | 'youtube-music' | 'skype' | 'nintendo-switch'
  
  | 'xbox' | 'ps5' | 'steam' | 'epic-games'
  | 'controller' | 'nintendo' | 'settings' | 'wallet' | 'lock'
  
  | 'star' | 'mail' | 'phone' | 'chat' | 'wifi'
  | 'camera' | 'heart' | 'bell' | 'microphone'
  
  | 'check' | 'close' | 'eye' | 'folder' | 'upload'
  | 'document' | 'list' | 'edit' | 'more' | 'trash' | 'settings2'
  
  | 'dot';

export const ICONS: Record<IconName, { col: number; row: number }> = {
  
  facebook:       { col: 0,  row: 0 },
  twitter:        { col: 1,  row: 0 },
  instagram:      { col: 2,  row: 0 },
  linkedin:       { col: 3,  row: 0 },
  youtube:        { col: 4,  row: 0 },
  tiktok:         { col: 5,  row: 0 },
  messenger:      { col: 6,  row: 0 },
  pinterest:      { col: 7,  row: 0 },
  douyin:         { col: 8,  row: 0 },
  whatsapp:       { col: 9,  row: 0 },
  airpods:        { col: 10, row: 0 },

  
  tiktok2:        { col: 0,  row: 1 },
  bigo:           { col: 1,  row: 1 },
  snapchat:       { col: 2,  row: 1 },
  reddit:         { col: 3,  row: 1 },
  discord:        { col: 4,  row: 1 },
  'apple-music':  { col: 5,  row: 1 },
  spotify:        { col: 6,  row: 1 },
  music:          { col: 7,  row: 1 },
  soundcloud:     { col: 8,  row: 1 },
  twitch:         { col: 9,  row: 1 },
  vimeo:          { col: 10, row: 1 },

  
  vimeo2:         { col: 0,  row: 2 },
  dropbox:        { col: 1,  row: 2 },
  behance:        { col: 2,  row: 2 },
  nba:            { col: 3,  row: 2 },
  medium:         { col: 4,  row: 2 },
  basketball:     { col: 5,  row: 2 },
  vimeo3:         { col: 6,  row: 2 },
  dribbble:       { col: 7,  row: 2 },
  behance2:       { col: 8,  row: 2 },
  figma:          { col: 10, row: 2 },

  
  calendar:       { col: 0,  row: 3 },
  cart:           { col: 1,  row: 3 },
  maps:           { col: 2,  row: 3 },
  video:          { col: 3,  row: 3 },
  people:         { col: 4,  row: 3 },
  globe:          { col: 5,  row: 3 },
  windows:        { col: 6,  row: 3 },
  safari:         { col: 7,  row: 3 },
  firefox:        { col: 8,  row: 3 },

  
  apple:          { col: 0,  row: 4 },
  android:        { col: 1,  row: 4 },
  amazon:         { col: 2,  row: 4 },
  paypal:         { col: 3,  row: 4 },
  ebay:           { col: 5,  row: 4 },
  shopify:        { col: 6,  row: 4 },
  mastercard:     { col: 7,  row: 4 },
  visa:           { col: 9,  row: 4 },
  venmo:          { col: 10, row: 4 },

  
  netflix:          { col: 0,  row: 5 },
  hulu:             { col: 1,  row: 5 },
  hoopla:           { col: 2,  row: 5 },
  'disney-plus':    { col: 3,  row: 5 },
  'prime-video':    { col: 4,  row: 5 },
  'youtube-music':  { col: 6,  row: 5 },
  skype:            { col: 7,  row: 5 },
  'nintendo-switch':{ col: 10, row: 5 },

  
  xbox:         { col: 0,  row: 6 },
  ps5:          { col: 2,  row: 6 },
  steam:        { col: 3,  row: 6 },
  'epic-games': { col: 5,  row: 6 },
  controller:   { col: 6,  row: 6 },
  nintendo:     { col: 7,  row: 6 },
  settings:     { col: 8,  row: 6 },
  wallet:       { col: 9,  row: 6 },
  lock:         { col: 10, row: 6 },

  
  star:       { col: 0,  row: 7 },
  mail:       { col: 1,  row: 7 },
  phone:      { col: 2,  row: 7 },
  chat:       { col: 3,  row: 7 },
  wifi:       { col: 4,  row: 7 },
  camera:     { col: 6,  row: 7 },
  heart:      { col: 7,  row: 7 },
  bell:       { col: 8,  row: 7 },
  microphone: { col: 10, row: 7 },

  
  check:    { col: 0,  row: 8 },
  close:    { col: 1,  row: 8 },
  eye:      { col: 2,  row: 8 },
  folder:   { col: 3,  row: 8 },
  upload:   { col: 4,  row: 8 },
  document: { col: 5,  row: 8 },
  list:     { col: 6,  row: 8 },
  edit:     { col: 7,  row: 8 },
  more:     { col: 8,  row: 8 },
  trash:    { col: 9,  row: 8 },
  settings2:{ col: 10, row: 8 },

  
  dot:      { col: 0,  row: 8 },
};

export const ICON_ENTRIES = Object.entries(ICONS) as [IconName, { col: number; row: number }][];


export function getIconPos(name: IconName): { x: number; y: number } {
  const { col, row } = ICONS[name];
  return {
    x: col === 0 ? 0 : -(col * FRAME_W),
    y: row === 0 ? 0 : -(row * FRAME_H),
  };
}


export function hasIcon(name: string): name is IconName {
  return Object.prototype.hasOwnProperty.call(ICONS, name);
}


export function validateIconMap(): void {
  if (process.env.NODE_ENV !== 'development') return;
  const seen = new Map<string, IconName>();
  for (const [name, { col, row }] of ICON_ENTRIES) {
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) {
      console.warn(`[icons] "${name}" is out of bounds (col=${col}, row=${row})`);
    }
    const key = `${col},${row}`;
    if (seen.has(key)) {
      console.warn(`[icons] "${name}" shares coords with "${seen.get(key)}" at (${key})`);
    } else {
      seen.set(key, name);
    }
  }
}
