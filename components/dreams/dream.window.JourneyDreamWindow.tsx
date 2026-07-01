'use client';

import JourneyTrail from '@/components/daydream/dream.JourneyTrail';
import Link from 'next/link';



export default function JourneyDreamWindow( ){
  return (
    <div className="de-widget" style={{ minHeight: 180 }}>
      
      <div className="de-widget-header">
        <span className="de-widget-title" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: '#c8981a' }}>✦</span> Your Journey
        </span>
        <Link
          href="/daydream/brand"
          style={{ fontSize: 11, color: 'var(--de-text-dim)', textDecoration: 'none' }}
          aria-label="See full journey in BrandingEngin"
        >
          See all →
        </Link>
      </div>

      
      <div className="de-widget-body">
        <JourneyTrail limit={5} compact />
      </div>

      
      <div style={{
        padding:     '8px 16px',
        borderTop:   '1px solid rgba(160,195,240,0.15)',
        textAlign:   'center',
      }}>
        <Link
          href="/daydream/brand"
          style={{ fontSize: 11, color: '#c8981a', textDecoration: 'none', fontWeight: 600 }}
          aria-label="View your full journey in BrandingEngin"
        >
          View your full journey in BrandingEngin
        </Link>
      </div>
    </div>
  );
}
