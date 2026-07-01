'use client';

import {
    COLS,
    FRAME_W,
    ICONS,
    ROWS,
    SHEET_PATH,
    hasIcon,
    type IconName,
} from '@/components/icons/sheet';

type Props = {
  
  name: string;
  
  size?: number;
  
  ariaLabel?: string;
  className?: string;
};


export default function SheetIcon({
  name,
  size = FRAME_W,
  ariaLabel,
  className = '',
}: Props) {
  if (process.env.NODE_ENV === 'development' && !hasIcon(name)) {
    console.warn(`[SheetIcon] unknown icon "${name}", falling back to "dot"`);
  }

  const key: IconName = hasIcon(name) ? name : 'dot';
  const { col, row } = ICONS[key];

  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel || undefined}
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flexShrink: 0,
        backgroundImage: `url(${SHEET_PATH})`,
        backgroundRepeat: 'no-repeat',
        
        backgroundSize: `${COLS * size}px ${ROWS * size}px`,
        backgroundPosition: `${-(col * size)}px ${-(row * size)}px`,
      }}
    />
  );
}
