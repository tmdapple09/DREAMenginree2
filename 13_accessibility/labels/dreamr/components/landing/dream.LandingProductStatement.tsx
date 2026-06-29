'use client';

import Link from 'next/link';

export default function LandingProductStatement() {
  return (
    <div className="flex w-full min-w-0 max-w-[36rem] flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[52%] lg:py-16">
      {/* Brand kicker */}
      <div
        className="de-kicker mb-6"
        style={{ color: '#d4a832' }}
        aria-label="DREAMengin — A new kind of creative home"
      >
        A new kind of creative home
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
        Make, share, and grow your ideas{' '}
        <span
          style={{
            background:
              'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 40%, #c8981a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          in one place.
        </span>
      </h1>

      {/* Product statement */}
      <p
        className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
        style={{ color: 'rgba(165,195,235,0.78)' }}
      >
        DREAMengin gives you one place to build your digital world — your profile,
        posts, projects, music, games, storefront, messages, and creative tools all
        connected instead of scattered across a dozen apps.
      </p>

      {/* DREAMengin Engins */}
      <div className="de-premium-stack" aria-label="DREAMengin Engins">
        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">CodeEngin</span>
          <strong>Build your tools</strong>
          <p>
            Work on websites, apps, automations, and coding projects without leaving your space.
          </p>
        </article>

        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">GameEngin</span>
          <strong>Make playable worlds</strong>
          <p>
            Sketch game ideas, build characters, shape scenes, and keep your game work connected.
          </p>
        </article>

        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">StarMakerEngin</span>
          <strong>Create and share music</strong>
          <p>
            Keep songs, sounds, ideas, and releases close to the rest of your creative life.
          </p>
        </article>

        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">ContentEngin</span>
          <strong>Turn ideas into posts</strong>
          <p>
            Plan, draft, organize, and publish content from the same place you create it.
          </p>
        </article>

        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">LabEngin</span>
          <strong>Try things out</strong>
          <p>
            Test ideas, save experiments, compare notes, and see what is worth building next.
          </p>
        </article>

        <article className="de-premium-layer-card">
          <span className="de-premium-layer-label">BrandingEngin</span>
          <strong>Shape your presence</strong>
          <p>
            Bring your look, story, links, offers, audience, and campaigns into one living profile.
          </p>
        </article>
      </div>

      {/* DreamR statement */}
      <Link href="/mission" className="de-landing-mission-link mt-4 mb-6 block">
        DreamR is the social side of DREAMengin — a place for your work, your people, and your story.{' '}
        <span>Learn more →</span>
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
          Start building
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
          Log in
        </Link>
      </div>
    </div>
  );
}

