'use client';

import { useEffect, useMemo, useRef, useState } from 'react';






interface DrEamsPanelProps {
  onClose: () => void;
}

type Message = { role: 'user' | 'ai'; text: string };


const QUICK_ACTIONS = [
  { label: '✨ Tour the app', prompt: 'What is Dreamengin and where should I start?' },
  { label: '🏠 HomeDream vs DreamSpace', prompt: 'How do HomeDream and DreamSpace work?' },
  { label: '💬 DreamDMBar help', prompt: 'How do I use the DreamDMBar menu, messages, comments, and actions?' },
  { label: '🧠 Engins guide', prompt: 'What are GameEngin, CodeEngin, StarMakerEngin, ForgeEngin, LabEngin, and BrandEngin?' },
];


const KNOWLEDGE_BASE: Array<{ keywords: readonly string[]; answer: string }> = [
  {
    keywords: ['what', 'start', 'tour', 'dreamengin', 'where'],
    answer: 'Dreamengin is a creative operating world. Start in HomeDream for your personal surface and feed, open DreamSpace for the spatial/world surface, use DreamR for social discovery, use the DreamDMBar for commands/messages/comments/actions, and open Engins when you want to create, play, code, brand, forge, experiment, or make music.',
  },
  {
    keywords: ['homedream', 'home', 'personal'],
    answer: 'HomeDream is your personal creative surface. It hosts your feed, profile entry points, widgets, movable Dreams, daydream launchers, messages, and DreamDMBar actions. A HomeDream instance can also be opened inside DreamSpace without making HomeDream responsible for the DreamDMBar.',
  },
  {
    keywords: ['dreamspace', 'space', 'spatial', 'world'],
    answer: 'DreamSpace is the expanded spatial/world surface. It is where Daydreams, Engins, apps, modules, and spatial Dreams can run as an independent runtime. You can open DreamSpace inside the Surface runtime, or open a separate HomeDream instance inside DreamSpace.',
  },
  {
    keywords: ['dreamdmbar', 'dmbar', 'bar', 'menu', 'message', 'comment', 'action'],
    answer: 'The DreamDMBar is the command and communication seam. Use the gold/menu control for Daydreams, profile/settings/feed/connectors, and Dr. Eams. It routes actions into the active runtime instead of forcing every button to leave the OS shell.',
  },
  {
    keywords: ['dreamr', 'feed', 'post', 'social'],
    answer: 'DreamR is the social layer. Feed posts are not just posts: they can become objects, media, Dreams, profile activity, and shared context. HomeDream shows the same feed model as a personal surface; DreamR shows it as the social surface.',
  },
  {
    keywords: ['engin', 'gameengin', 'codeengin', 'starmaker', 'forge', 'lab', 'brand', 'content'],
    answer: 'Engins are first-class capabilities. GameEngin runs games/cartridges with GameRemote. CodeEngin is the workbench. StarMakerEngin handles music/audio. ForgeEngin builds Dreams/modules/spaces. LabEngin experiments before graduation. BrandEngin styles identity and surfaces. ContentEngin publishes media/posts as Dream objects.',
  },
  {
    keywords: ['how', 'button', 'open', 'daydream'],
    answer: 'Use the Daydream buttons or the DreamDMBar menu. Inside the dual runtime they open inside the active runtime region; outside the shell they navigate normally. If a surface feels stuck, use Home to reset the current region or open the opposite surface from the HomeDream quick links.',
  },
];

function answerFromDreamenginKnowledge(question: string): string | null {
  const q = question.toLowerCase();
  const ranked = KNOWLEDGE_BASE
    .map((entry) => ({ entry, score: entry.keywords.reduce((sum, key) => sum + (q.includes(key) ? 1 : 0), 0) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  return best && best.score > 0 ? best.entry.answer : null;
}

function DrEamsAvatar({ size = 44 }: {size?: number}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #4A90D9 0%, #2a8ab8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.42,
        flexShrink: 0,
        boxShadow: '0 2px 12px rgba(74,144,217,0.35)',
      }}
      aria-hidden="true"
    >
      ◈
    </div>
  );
}

function TypingDots( ){
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '10px 14px' }}>
      {[0, 1, 2].map((i: number ) => (
        <div
          key={i}
          style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--de-text-dim)',
            animation: `dreams-dot 1.2s ${i * 0.2}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function DrEamsPanel({ onClose }: DrEamsPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hey! I'm Dr. Eams — ask me what DreamR, HomeDream, DreamSpace, DreamDMBar, messages, comments, widgets, or any Engin does and I’ll point you to the right surface. ◈" },
  ]);
  const [input, setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);
  const showChips = messages.length === 1; 

  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 180);
    return () => clearTimeout(t);
  }, []);

  const send = async (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text }]);
    const localAnswer = answerFromDreamenginKnowledge(text);
    if (localAnswer) {
      setMessages((m) => [...m, { role: 'ai', text: localAnswer }]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/ai/eams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          ui: { route: typeof window !== 'undefined' ? window.location.pathname : '/dreamdmbar' },
        }),
      });

      const data = await res.json().catch(() => ({}));

      
      
      const reply =
        (data?.response_text && typeof data.response_text === 'string')
          ? data.response_text
          : (data?.error?.message && typeof data.error.message === 'string')
            ? `⚠️ ${data.error.message}`
            : "I'm here! Could you rephrase that?";

      setMessages((m) => [...m, { role: 'ai', text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'ai', text: 'I could not reach the hosted AI service, but I can still answer Dreamengin product questions. Ask about HomeDream, DreamSpace, DreamR, DreamDMBar, messages, comments, widgets, or Engins.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      <style>{`
        @keyframes dreams-dot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        style={{ background: 'rgba(8,20,50,0.32)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
        onPointerDown={onClose}
        data-de-overlay="dr-eams-panel"
      >
        
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dr. Eams AI"
          style={{
            width: 'min(30rem, 96vw)',
            maxHeight: '88vh',
            background: 'rgba(255,255,255,0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(160,195,240,0.4)',
            borderRadius: '24px 24px 0 0',
            boxShadow: '0 -8px 48px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'de-dual-menu-up 0.28s cubic-bezier(0.34,1.22,0.64,1)',
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          
          <div style={{
            padding: '16px 20px 12px',
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: '1px solid rgba(160,195,240,0.25)',
          }}>
            <DrEamsAvatar size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--de-heading)', lineHeight: 1.2 }}>Dr. Eams</div>
              <div style={{ fontSize: 12, color: 'var(--de-text-dim)', marginTop: 2 }}>Your Dreamengin AI · always on</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Dr. Eams"
              style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(160,195,240,0.15)',
                border: '1px solid rgba(160,195,240,0.3)',
                color: 'var(--de-text)', fontSize: 15, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>

          
          <div
            ref={scrollRef}
            style={{
              flex: 1, overflowY: 'auto', padding: '16px 18px',
              display: 'flex', flexDirection: 'column', gap: 10,
              minHeight: 180,
              scrollbarWidth: 'none',
            }}
          >
            {messages.map((m, idx: number) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-end',
                  gap: 8,
                }}
              >
                {m.role === 'ai' && <DrEamsAvatar size={28} />}
                <div style={{
                  maxWidth: '78%',
                  padding: '10px 14px',
                  borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: m.role === 'user'
                    ? 'linear-gradient(135deg, #0f2a5c, #1a4a8a)'
                    : 'rgba(240,245,255,0.95)',
                  border: m.role === 'ai' ? '1px solid rgba(160,195,240,0.3)' : 'none',
                  color: m.role === 'user' ? '#fff' : 'var(--de-text)',
                  fontSize: 14,
                  lineHeight: 1.55,
                  boxShadow: m.role === 'user' ? '0 2px 12px rgba(15,42,92,0.2)' : '0 1px 6px rgba(0,0,0,0.04)',
                }}>
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
                <DrEamsAvatar size={28} />
                <div style={{
                  background: 'rgba(240,245,255,0.95)',
                  border: '1px solid rgba(160,195,240,0.3)',
                  borderRadius: '18px 18px 18px 4px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          
          {showChips && (
            <div style={{ padding: '2px 16px 6px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {QUICK_ACTIONS.map((qa) => (
                <button
                  key={qa.label}
                  type="button"
                  onClick={() => void send(qa.prompt)}
                  style={{
                    padding: '6px 14px', borderRadius: 100,
                    background: 'rgba(240,245,255,0.9)',
                    border: '1px solid rgba(160,195,240,0.4)',
                    color: 'var(--de-heading)', fontSize: 12, fontWeight: 600,
                    cursor: 'pointer', WebkitTapHighlightColor: 'transparent',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {qa.label}
                </button>
              ))}
            </div>
          )}

          
          <div style={{
            padding: '10px 14px 14px',
            display: 'flex', gap: 10, alignItems: 'center',
            borderTop: '1px solid rgba(160,195,240,0.25)',
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send(); } }}
              placeholder="Ask Dr. Eams anything…"
              style={{
                flex: 1, padding: '12px 16px', borderRadius: 100,
                background: 'rgba(240,245,255,0.9)',
                border: '1px solid rgba(160,195,240,0.4)',
                color: 'var(--de-heading)', fontSize: 15, outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={() => void send()}
              disabled={!canSend}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: canSend
                  ? 'linear-gradient(135deg, #0f2a5c, #2a8ab8)'
                  : 'rgba(160,195,240,0.2)',
                border: 'none',
                color: canSend ? 'white' : 'var(--de-text-dim)',
                fontSize: 18, cursor: canSend ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.15s, transform 0.1s',
                boxShadow: canSend ? '0 2px 12px rgba(42,138,184,0.3)' : 'none',
              }}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
