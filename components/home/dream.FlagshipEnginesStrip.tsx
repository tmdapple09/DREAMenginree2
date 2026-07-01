'use client';

import { getEnginById } from '@/engins/forgeengin/forge/forgeRegistry';
import { ChevronRight, Flame, Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';



interface FlagshipEnginesStripProps {
  
  isCompactViewport?: boolean;
  
  onOpenEngin?: (enginName: string) => void;
}


const SHINY_GOLD =
  'linear-gradient(135deg, #f6d27a 0%, #c8981a 38%, #e8b830 65%, #87CEEB 100%)';

const FLAGSHIPS = [
  { id: 'games', label: 'GameEngin', tagline: 'Play, prototype, ship cartridges', Icon: Gamepad2 },
  { id: 'forge', label: 'ForgeEngin', tagline: 'The meta-creation command center', Icon: Flame },
] as const;

export default function FlagshipEnginesStrip({
  isCompactViewport = false,
  onOpenEngin,
}: FlagshipEnginesStripProps) {
  const router = useRouter();
  const openPage = (href: string) => {
    router.push(href);
  };

  const openEngin = (enginName: string, href: string) => {
    if (onOpenEngin) {
      onOpenEngin(enginName);
      return;
    }
    openPage(href);
  };

  return (
    <section
      aria-label="Flagship engines"
      style={{
        marginBottom: 16,
        borderRadius: isCompactViewport ? 20 : 24,
        
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(245,250,255,0.82) 100%)',
        border: '1.5px solid rgba(200,152,26,0.28)',
        boxShadow:
          '0 12px 40px rgba(15,30,52,0.10), 0 2px 12px rgba(200,152,26,0.10), inset 0 1px 0 rgba(255,255,255,0.95)',
        overflow: 'hidden',
      }}
    >
      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 18px 10px',
          borderBottom: '1px solid rgba(200,152,26,0.12)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 28,
            height: 28,
            borderRadius: 9,
            background: SHINY_GOLD,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 13,
            flexShrink: 0,
            boxShadow: '0 2px 10px rgba(200,152,26,0.35)',
          }}
        >
          ✦
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: 'var(--de-heading)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Flagship Engines
          </div>
          <div
            style={{
              fontSize: 10,
              color: 'var(--de-text-dim)',
              fontWeight: 500,
              marginTop: 2,
            }}
          >
            The two finished products of DREAMengin
          </div>
        </div>
        <button
          type="button"
          onClick={() => openPage('/daydream/analytics')}
          aria-label="Open analytics Daydream"
          style={{
            border: '1px solid rgba(200,152,26,0.32)',
            background: 'rgba(200,152,26,0.10)',
            color: '#8a6720',
            borderRadius: 999,
            padding: '5px 10px',
            fontSize: 11,
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            whiteSpace: 'nowrap',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          DREAMfield <ChevronRight size={12} />
        </button>
      </div>

      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isCompactViewport ? '1fr' : '1fr 1fr',
          gap: 12,
          padding: '14px',
        }}
      >
        {FLAGSHIPS.map(({ id, label, tagline, Icon }) => {
          const engin = getEnginById(id);
          if (!engin) return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => openEngin(engin.name, engin.daydreamHref)}
              aria-label={`Open ${label}`}
              className="de-pressable"
              style={{
                position: 'relative',
                textAlign: 'left',
                padding: '14px 14px 12px',
                borderRadius: 18,
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                border: '1px solid rgba(255,255,255,0.95)',
                background: `linear-gradient(160deg, rgba(255,255,255,0.92) 0%, ${engin.accent}10 100%)`,
                boxShadow:
                  '0 6px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.96)',
                overflow: 'hidden',
                transition:
                  'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
              }}
            >
              
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: SHINY_GOLD,
                  boxShadow: '0 2px 12px rgba(200,152,26,0.45)',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: SHINY_GOLD,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(200,152,26,0.40)',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: 'var(--de-heading)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.15,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--de-text-dim)',
                      marginTop: 2,
                      lineHeight: 1.35,
                    }}
                  >
                    {tagline}
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  color="var(--de-text-dim)"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                />
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 999,
                  background: `${engin.accent}14`,
                  border: `1px solid ${engin.accent}30`,
                  color: engin.accent,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Flagship
              </div>
            </button>
          );
        })}
      </div>

    </section>
  );
}
