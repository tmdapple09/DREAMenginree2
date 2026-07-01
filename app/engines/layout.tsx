import type { ReactNode } from 'react';




export default function EnginesRootLayout({ children }: {children: ReactNode}) {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {children}
    </div>
  );
}
