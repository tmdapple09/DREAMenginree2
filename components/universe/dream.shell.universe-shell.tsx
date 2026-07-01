'use client';

import { cn } from '@/utils/index';
import { ReactNode } from 'react';

interface UniverseShellProps {
  children: ReactNode;
  className?: string;
}


export function UniverseShell({
  children,
  className,
}: UniverseShellProps) {
  return (
    <div className={cn('relative min-h-screen', className)}>
      
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default UniverseShell;

