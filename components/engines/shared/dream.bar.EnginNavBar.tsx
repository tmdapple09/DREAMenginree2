'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';



export interface NavItem {
  href: string;
  label: string;
  emoji?: string;
}

interface EnginNavBarProps {
  items: NavItem[];
  accentColor: string;
}

export default function EnginNavBar({ items, accentColor }: EnginNavBarProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 overflow-x-auto px-2 py-1">
      {items.map((item) => {
        
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-all"
            style={
              isActive
                ? { color: accentColor, background: `${accentColor}18`, borderBottom: `2px solid ${accentColor}` }
                : { color: 'rgba(255,255,255,0.55)', borderBottom: '2px solid transparent' }
            }
          >
            {item.emoji && <span>{item.emoji}</span>}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
