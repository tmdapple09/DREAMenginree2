'use client';

import Link from 'next/link';

export default function LandingProductStatement() {
  return (
    <div className="flex w-full min-w-0 max-w-[36rem] flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[52%] lg:py-16">
      {/* Brand kicker */}
      <div
        className="de-kicker mb-6"
        style={{ color: '#d4a832' }}
        aria-label="DREAMengin — Creative OS"
      >
        Creative Operating Surface
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="font-bold tracking-tight leading-[1.04] mb-5"
        style={{
          fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
          color: 'rgba(220,235,255,0.97)',
        }}
      >
        Space to{' '}
        <span
          style={{
            background:
              'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 40%, #c8981a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          dream
        </span>
        .
      </h1>

      {/* Product statement */}
      <p
        className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
        style={{ color: 'rgba(165,195,235,0.78)' }}
      >
        A privacy-first creative browser based OS. Your world — your rules, your dreams, and entirely yours.
      </p>

      {/* Premium Stack */}
      <div className="de-premium-stack" aria-label="DREAMengin premium stack">
        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">Engine underneath</span>
          <strong>WASM motion + glow math</strong>
          <p>Low-level browser muscle shapes simulation, particles, and sync fingerprints without dragging React into hot loops.</p>
        </article>
        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">Runtime in the middle</span>
          <strong>Fingerprint-synced Dreams</strong>
          <p>HomeDream and DreamSpace share validated runtime frames so objects move surfaces without duplicate state.</p>
        </article>
        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">Product on top</span>
          <strong>DreamR creative world</strong>
          <p>A glass-and-gold social OS where profiles, feeds, games, media, and tools become movable Dreams.</p>
        </article>
      </div>

      {/* DreamR statement */}
      <Link href="/mission" className="de-landing-mission-link mt-4 mb-6 block">
        DreamR — A social platform where your individuality is the algorithm.{' '}
        <span>Where creativity—not likes—gets you seen. →</span>
      </Link>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none lg:justify-start">
        <Link
          href="/join"
          className="w-full sm:w-auto font-semibold rounded-full text-white text-center"
          style={{
            padding: '14px 32px',
            fontSize: '0.975rem',
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            boxShadow: '0 6px 28px rgba(245,158,11,0.40)',
            letterSpacing: '0.01em',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          Sign Up and start dreaming again!
        </Link>
        <Link
          href="/login"
          className="w-full sm:w-auto font-medium rounded-full text-center"
          style={{
            padding: '14px 32px',
            fontSize: '0.975rem',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(200,220,255,0.88)',
            letterSpacing: '0.01em',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          Welcome Back!
        </Link>
      </div>
    </div>
  );
}
