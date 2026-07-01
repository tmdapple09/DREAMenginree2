import PlatformBadge from '@/components/ui/dream.PlatformBadge';
import {
    ArrowLeft,
    ArrowRight,
    Beaker,
    Cpu,
    Heart,
    LayoutGrid,
    Lock,
    MessageCircle,
    Music,
    Settings,
    Shield,
    ShoppingBag,
    Sparkles,
    Twitter,
    Users
} from 'lucide-react';
import Link from 'next/link';



export default function AboutPage( ){

  const features = [
    {
      icon: Shield,
      title: 'You own your space',
      description: 'Your profile, posts, projects, shop, messages, and private work belong to you. DREAMengin is built around clear controls for what stays private, what you share, and what becomes public.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Cpu,
      title: 'Helpful AI when you want it',
      description: 'Dr. Eams can help you find your way around, draft ideas, organize work, and turn a plain request into action. It is there to help — not to make the place feel robotic.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'A real creative network',
      description: 'Follow people, message them, share work, collaborate, and build a community around what you make instead of chasing random trends.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Music,
      title: 'Music, content, games, and more',
      description: 'Keep different kinds of projects together. A song, a video idea, a game character, a storefront item, and a post can all live in the same creative world.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Beaker,
      title: 'A place to try ideas',
      description: 'Use LabEngin for experiments, notes, simulations, research, and weird ideas that are not ready to be polished yet.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: ShoppingBag,
      title: 'Built-in ways to earn',
      description: 'Showcase and sell digital products, creative services, themes, assets, and community-made tools from inside the same place people discover your work.',
      color: 'from-orange-500 to-amber-600'
    },
  ];

  const navigationPrinciples = [
    {
      title: 'Everything starts from HomeDream',
      description: 'HomeDream is your personal starting point. From there you can open messages, profiles, projects, tools, and shared spaces without feeling lost.'
    },
    {
      title: 'DreamSpace is where work opens up',
      description: 'DreamSpace is the bigger canvas for projects, apps, rooms, windows, and shared creative sessions.'
    },
    {
      title: 'The DreamDM Bar keeps things moving',
      description: 'The bar is your quick way to move between conversations, spaces, tools, and the things you are currently working on.'
    },
  ];

  const widgetSystem = [
    {
      title: 'Widgets make your space yours',
      description: 'Add useful blocks like feeds, links, media, notes, products, music, and project pieces to the surfaces you use most.'
    },
    {
      title: 'Engins are focused creative tools',
      description: 'Open an Engin when you want to code, make content, build games, work on music, test ideas, or shape your brand.'
    },
    {
      title: 'Your work can move with you',
      description: 'A piece of work can start private, be shared with someone, or become public when you are ready.'
    },
  ];

  const spaces = [
    { name: 'HomeDream', path: '/homedream', icon: Sparkles, description: 'Your personal home base for daily activity, saved work, and quick access.' },
    { name: 'DreamSpace', path: '/dreamdmbar', icon: LayoutGrid, description: 'A larger creative canvas for projects, windows, tools, and shared spaces.' },
    { name: 'DreamR', path: '/dreamr', icon: Users, description: 'The social side of DREAMengin for posts, discovery, profiles, and community.' },
    { name: 'DreamDM', path: '/messages', icon: MessageCircle, description: 'Messages, boards, and conversations that can connect directly to your work.' },
    { name: 'DreamMarketplace', path: '/marketplace', icon: ShoppingBag, description: 'A place to discover and offer themes, assets, services, tools, and creative goods.' },
    { name: 'CodeEngin', path: '/engines/code', icon: Cpu, description: 'A focused space for software, automations, notebooks, and coding projects.' },
    { name: 'StarMakerEngin', path: '/engines/music', icon: Music, description: 'A music workspace for song ideas, sound, recording, sharing, and releases.' },
    { name: 'LabEngin', path: '/engines/lab', icon: Beaker, description: 'A playground for experiments, data, simulations, research, and discovery.' },
    { name: 'Settings', path: '/settings', icon: Settings, description: 'Controls for privacy, security, appearance, and how your space behaves.' },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(155deg, #070e1c 0%, #0c1829 45%, #0f2244 75%, #0a1628 100%)' }}
    >
      
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(200,152,26,0.09) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      </div>

      
      <header
        className="sticky top-0 z-30"
        style={{
          background: 'rgba(7,14,28,0.80)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 p-2 -ml-2 rounded-full" style={{ color: 'rgba(165,195,235,0.72)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', paddingLeft: 10, paddingRight: 12 }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Link
            href="/join"
            style={{
              padding: '9px 20px', borderRadius: 999, fontSize: 13, fontWeight: 700,
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#fff', boxShadow: '0 4px 16px rgba(245,158,11,0.30)',
              textDecoration: 'none',
            }}
          >
            Get Started
          </Link>
        </div>
      </header>

      
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">

        
        <section className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div style={{
              width: 100, height: 100, borderRadius: 28,
              background: 'linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(200,152,26,0.12) 100%)',
              border: '1.5px solid rgba(56,189,248,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 52,
              boxShadow: '0 0 40px rgba(56,189,248,0.15)',
            }}>∞</div>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 12, lineHeight: 1.15 }}>
            What DREAMengin is
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(165,195,235,0.65)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
            DREAMengin is a creative home for your digital life. It brings your profile, content, messages, projects, tools, shop, and community into one connected space so your ideas are not scattered everywhere.
          </p>
        </section>

        
        <section className="mb-12">
          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div className="de-widget-body" style={{ padding: '24px 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="sm:flex-row sm:items-center sm:gap-6">
                <div style={{ width: 80, height: 80, borderRadius: 20, flexShrink: 0, background: 'linear-gradient(135deg, rgba(42,138,184,0.14) 0%, rgba(42,138,184,0.08) 100%)', border: '1.5px solid rgba(42,138,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>∞</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: 4 }}>Helpful Guide</div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 8 }}>Meet Dr. Eams</h2>
                  <p style={{ fontSize: 14, color: 'rgba(165,195,235,0.65)', lineHeight: 1.7 }}>
                    Dr. Eams is the guide inside DREAMengin. You can ask for help finding something, starting a post, opening a tool, organizing an idea, or understanding what to do next. The goal is simple: less hunting around, more making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div className="de-widget-body" style={{ padding: '24px 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="sm:flex-row-reverse sm:items-center sm:gap-6">
                <div style={{ width: 80, height: 80, borderRadius: 20, flexShrink: 0, background: 'linear-gradient(135deg, rgba(139,92,246,0.14) 0%, rgba(200,152,26,0.08) 100%)', border: '1.5px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>👾</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: 4 }}>Safety Helper</div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 8 }}>Meet Boogie</h2>
                  <p style={{ fontSize: 14, color: 'rgba(165,195,235,0.65)', lineHeight: 1.7 }}>
                    Boogie helps keep the community safe. It watches for harmful behavior, spam, scams, and content that breaks the rules so people can create and connect without the space turning messy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div className="de-widget-body" style={{ padding: '24px 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="sm:flex-row sm:items-center sm:gap-6">
                <div style={{ width: 80, height: 80, borderRadius: 20, flexShrink: 0, background: 'linear-gradient(135deg, rgba(16,185,129,0.14) 0%, rgba(200,152,26,0.08) 100%)', border: '1.5px solid rgba(16,185,129,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>🧠</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#10b981', marginBottom: 4 }}>Behind-the-scenes care</div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 8 }}>Meet IDARi</h2>
                  <p style={{ fontSize: 14, color: 'rgba(165,195,235,0.65)', lineHeight: 1.7 }}>
                    IDARi is the behind-the-scenes system that helps DREAMengin stay smooth, connected, and reliable. Most people do not need to think about it. It is there so the experience feels less like managing apps and more like moving through your own space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 20, textAlign: 'center' }}>How it feels to use</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {navigationPrinciples.map((principle) => (
              <div key={principle.title} style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
                <div className="de-widget-body">
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'rgba(220,235,255,0.95)', marginBottom: 6 }}>{principle.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(165,195,235,0.65)', lineHeight: 1.6 }}>{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-12">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 20, textAlign: 'center' }}>Tools that fit your space</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {widgetSystem.map((item) => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
                <div className="de-widget-body">
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'rgba(220,235,255,0.95)', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(165,195,235,0.65)', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-12">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 20, textAlign: 'center' }}>What makes DREAMengin different</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {features.map((feature) => (
              <div key={feature.title} style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
                <div className="de-widget-body">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace(' to-', ', ')})`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <feature.icon className="w-5 h-5" style={{ color: '#fff' }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'rgba(220,235,255,0.95)', marginBottom: 6 }}>{feature.title}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(165,195,235,0.65)', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-12">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 20, textAlign: 'center' }}>Explore the main spaces</h2>
          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div className="de-widget-body" style={{ padding: '6px 8px' }}>
              {spaces.map((page) => (
                <Link key={page.name} href={page.path} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", minHeight: 52, cursor: "pointer", borderRadius: 10, transition: "background 0.12s", textDecoration: "none" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(42,138,184,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <page.icon className="w-4 h-4" style={{ color: '#38bdf8' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(220,235,255,0.95)' }}>{page.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(165,195,235,0.65)' }}>{page.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        
        <section className="mb-12">
          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 20, boxShadow: "0 4px 32px rgba(0,0,0,0.3)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 10px", borderBottom: "1px solid rgba(16,185,129,0.2)", background: 'rgba(16,185,129,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Lock className="w-4 h-4" style={{ color: '#10b981' }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: '#10b981', textTransform: "uppercase" }}>Our privacy promise</span>
              </div>
            </div>
            <div className="de-widget-body">
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'We do not want your private work treated like someone else\'s product',
                  'You choose what is private, shared, or public',
                  'Messages and personal spaces are designed to feel personal',
                  'Your creative home should be easy to change, clean up, and grow',
                  'The platform is built around people making things, not trapping attention',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(200,220,255,0.82)', lineHeight: 1.5 }}>
                    <span style={{ color: '#10b981', flexShrink: 0, marginTop: 1, fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        
        <section className="mb-12" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 8 }}>Connect Everything</h2>
          <p style={{ fontSize: 13, color: 'rgba(165,195,235,0.65)', marginBottom: 20 }}>Bring the places you already use closer to the work you are building.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {[
              { name: 'instagram',  label: 'Instagram'  },
              { name: 'youtube',    label: 'YouTube'    },
              { name: 'spotify',    label: 'Spotify'    },
              { name: 'tiktok',     label: 'TikTok'     },
              { name: 'discord',    label: 'Discord'    },
              { name: 'twitch',     label: 'Twitch'     },
              { name: 'soundcloud', label: 'SoundCloud' },
              { name: 'reddit',     label: 'Reddit'     },
              { name: 'figma',      label: 'Figma'      },
              { name: 'dropbox',    label: 'Dropbox'    },
            ].map(({ name, label }) => (
              <Link key={name} href="/connectors" aria-label={`Connect ${label}`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.7, textDecoration: 'none' }}>
                <PlatformBadge name={name} size={48} label={label} />
                <span style={{ fontSize: 10, color: 'rgba(165,195,235,0.65)', fontWeight: 600 }}>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        
        <section style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'rgba(220,235,255,0.95)', marginBottom: 8 }}>Ready to build your Dream?</h2>
          <p style={{ fontSize: 14, color: 'rgba(165,195,235,0.65)', marginBottom: 24, lineHeight: 1.6 }}>Start with your own space, then add the people, tools, projects, and ideas that matter to you.</p>
          <Link href="/join" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700, background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#fff", boxShadow: "0 4px 20px rgba(245,158,11,0.35)", cursor: "pointer", textDecoration: "none" }}>
            Start building
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        
        <footer style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, rgba(42,138,184,0.2), rgba(200,152,26,0.15))', border: '1.5px solid rgba(42,138,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>∞</div>
            <span style={{ fontWeight: 800, fontSize: 15, color: 'rgba(220,235,255,0.95)' }}>DREAMengin</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <a href="https://x.com/dreamenginx" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(200,220,255,0.80)", cursor: "pointer", textDecoration: "none" }}>
              <Twitter className="w-3 h-3" />
              @dreamenginx
            </a>
            <PlatformBadge name="instagram" size={36} label="Instagram" />
            <PlatformBadge name="tiktok"    size={36} label="TikTok"    />
          </div>
          <p style={{ fontSize: 12, color: 'rgba(165,195,235,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            Built with <Heart className="w-3 h-3" style={{ color: '#dc4444' }} /> for dreamers everywhere
          </p>
        </footer>
      </main>
    </div>
  );
}
