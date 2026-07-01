

export const AVATAR_IMAGE_KEY   = 'de:avatar:image';
export const AVATAR_CREATED_KEY = 'de:avatar:created';
export const AVATAR_PLAY_AS_ME_KEY = 'de:avatar:play-as-me';


export function getAvatarDataUrl(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(AVATAR_IMAGE_KEY);
}


export function setAvatarDataUrl(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(AVATAR_IMAGE_KEY, dataUrl);
  window.localStorage.setItem(AVATAR_CREATED_KEY, new Date().toISOString());
}


export function hasAvatar(): boolean {
  if (typeof window === 'undefined') return false;
  return !!window.localStorage.getItem(AVATAR_CREATED_KEY);
}


export function clearAvatar(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(AVATAR_IMAGE_KEY);
  window.localStorage.removeItem(AVATAR_CREATED_KEY);
}


export function resizeImageToDataUrl(
  file: File,
  size = 256,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      canvas.width  = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(new Error('canvas 2d unavailable')); return; }

      
      const side = Math.min(img.naturalWidth, img.naturalHeight);
      const sx   = (img.naturalWidth  - side) / 2;
      const sy   = (img.naturalHeight - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('image load failed')); };
    img.src = url;
  });
}


export function setPlayAsMe(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(AVATAR_PLAY_AS_ME_KEY, '1');
}


export function consumePlayAsMe(): boolean {
  if (typeof window === 'undefined') return false;
  const flag = window.localStorage.getItem(AVATAR_PLAY_AS_ME_KEY) === '1';
  if (flag) window.localStorage.removeItem(AVATAR_PLAY_AS_ME_KEY);
  return flag;
}

