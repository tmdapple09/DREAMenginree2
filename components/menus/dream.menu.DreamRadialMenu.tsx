'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import MenuPanel, { type MenuItem } from './dream.panel.MenuPanel';




declare module 'react' {
  interface HTMLAttributes<T> {
    popover?: 'auto' | 'hint' | 'manual' | '';
  }
}

type Props = {
  open: boolean;
  onClose: () => void;
  onSelectNode?: (node: string) => void;
  side?: 'left' | 'right' | 'center';
};


const DREAM_ITEMS = [
  { id: 'music',       label: 'Music',       icon: '🎵', route: '/daydream/music'       },
  { id: 'games',       label: 'Games',       icon: '🎮', route: '/daydream/games'       },
  { id: 'lab',         label: 'Lab',         icon: '🔬', route: '/daydream/lab'         },
  { id: 'code',        label: 'Code',        icon: '💻', route: '/daydream/code'        },
  { id: 'brand',       label: 'Brand',       icon: '✦',  route: '/daydream/brand'       },
  { id: 'create',      label: 'Create',      icon: '⬡',  route: '/daydream/create'      },
  { id: 'analytics',   label: 'Analytics',   icon: '📊', route: '/daydream/analytics'   },
  { id: 'marketplace', label: 'Marketplace', icon: '🏪', route: '/marketplace'          },
  { id: 'shop',        label: 'Shop',        icon: '🛍', route: '/shop'                 },
];

export default function DreamRadialMenu({ open, onClose, onSelectNode, side }: Props) {
  const router = useRouter();

  
  
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const supportsPopover = typeof window !== 'undefined' && 'popover' in HTMLElement.prototype;

  useEffect(() => {
    const el = menuContainerRef.current;
    if (!el || !supportsPopover) return;
    try {
      if (open) {
        (el as HTMLDivElement & { showPopover?: () => void }).showPopover?.();
      } else {
        (el as HTMLDivElement & { hidePopover?: () => void }).hidePopover?.();
      }
    } catch {
      
    }
  }, [open, supportsPopover]);

  const items: MenuItem[] = DREAM_ITEMS.map((item) => ({
    id: item.id,
    label: item.label,
    icon: item.icon,
    onSelect: () => {
      onClose();
      if (onSelectNode) onSelectNode(item.id);
      router.push(item.route);
    },
  }));

  
  
  if (supportsPopover) {
    return (
      <div
        ref={menuContainerRef}
        popover="manual"
        style={{
          position: 'fixed',
          inset: 0,
          border: 'none',
          padding: 0,
          margin: 0,
          background: 'transparent',
          maxWidth: '100%',
          maxHeight: '100%',
          width: '100vw',
          height: '100vh',
          overflow: 'visible',
        }}
      >
        <MenuPanel
          open={open}
          title="Daydreams"
          accent="blue"
          items={items}
          onClose={onClose}
          side={side}
        />
      </div>
    );
  }

  return (
    <MenuPanel
      open={open}
      title="Daydreams"
      accent="blue"
      items={items}
      onClose={onClose}
      side={side}
    />
  );
}
