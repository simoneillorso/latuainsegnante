import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { Squiggle } from '@/components/shared/Squiggle';
import { METHOD_PHASES } from '@/data/about-content';

export const Method = () => {
  const [sel, setSel] = useState(0);
  const p = METHOD_PHASES[sel]!;

  return (
    <section
      id="metodo"
      style={{
        padding: '80px 32px',
        margin: '0 -32px',
        background: 'linear-gradient(150deg, #EDE9FF 0%, #E5EFFE 55%, #EEF7F4 100%)',
        borderRadius: 40,
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
        <Eyebrow color="#1CB886">Il metodo</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 16px' }}>
          Si chiama{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>ADPM</span>
            <Squiggle color="#9E89FB" width={180} style={{ position: 'absolute', left: 0, right: 0, bottom: -10, width: '100%' }} />
          </span>
          .<br />Quattro passi, un solo scopo.
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, color: '#3A4F63', lineHeight: 1.6 }}>
          <b style={{ color: '#051A2E' }}>A</b>scolto · <b style={{ color: '#051A2E' }}>D</b>isegno ·{' '}
          <b style={{ color: '#051A2E' }}>P</b>ratica · <b style={{ color: '#051A2E' }}>M</b>isura. L'ho messo a punto in dodici anni e lo aggiorno su ogni studente nuovo.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}>
        <div role="tablist" aria-label="Fasi del metodo" style={{ display: 'grid', gap: 12, position: 'sticky', top: 110 }}>
          {METHOD_PHASES.map((ph, i) => {
            const active = sel === i;
            return (
              <button
                key={ph.n}
                role="tab"
                aria-selected={active}
                onClick={() => setSel(i)}
                style={{
                  textAlign: 'left',
                  background: active ? '#fff' : 'transparent',
                  border: active ? '1.5px solid ' + ph.color : '1.5px solid transparent',
                  boxShadow: active ? '0 12px 28px rgba(5,26,46,.08)' : 'none',
                  borderRadius: 20,
                  padding: '18px 20px',
                  cursor: 'pointer',
                  color: '#051A2E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'all .22s',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: active ? ph.color : '#F4F7FA',
                    color: '#051A2E',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'Urbanist,sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    flexShrink: 0,
                    transition: 'all .22s',
                  }}
                >
                  {ph.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 18, color: '#051A2E' }}>{ph.name}</div>
                  <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80', marginTop: 2 }}>{ph.time}</div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#051A2E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ opacity: active ? 1 : 0.3, flexShrink: 0, transition: 'opacity .22s' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            );
          })}
        </div>

        <div
          style={{
            background: '#fff',
            borderRadius: 32,
            padding: '44px 48px',
            boxShadow: '0 4px 24px rgba(5,26,46,.10)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: p.color, opacity: 0.18 }}
          />
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 14px',
              borderRadius: 99,
              background: p.color,
              marginBottom: 22,
              position: 'relative',
            }}
          >
            <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 12, color: '#051A2E', letterSpacing: '.08em' }}>
              FASE {p.n} · {p.name.toUpperCase()}
            </span>
          </div>
          <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 38, color: '#051A2E', lineHeight: 1.1, letterSpacing: '-.02em', margin: '0 0 18px', position: 'relative' }}>
            {p.title}
          </h3>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.7, margin: '0 0 28px', position: 'relative' }}>{p.body}</p>
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 14, position: 'relative' }}>
            Cosa porti a casa
          </div>
          <div style={{ display: 'grid', gap: 10, position: 'relative' }}>
            {p.deliverables.map((d) => (
              <div
                key={d}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 14, background: '#F4F7FA' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1CB886"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
