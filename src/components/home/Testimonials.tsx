import { useEffect, useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { TESTIMONIALS } from '@/data/home-content';

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx]!;

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '80px 0' }} aria-roledescription="carousel" aria-label="Testimonianze studenti">
      <div
        style={{
          background: '#fff',
          borderRadius: 40,
          padding: '72px 72px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-10px -10px -10px -10px',
              background: t.color,
              borderRadius: 32,
              transform: 'rotate(-3deg)',
              transition: 'background .5s',
            }}
          />
          <div
            role="img"
            aria-label={`Foto di ${t.name}`}
            style={{
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              aspectRatio: '4/5',
              background: `url('/assets/${t.img}') center/cover`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                background: '#fff',
                borderRadius: 99,
                padding: '6px 14px',
                fontFamily: 'Urbanist,sans-serif',
                fontWeight: 700,
                fontSize: 12,
                color: '#051A2E',
              }}
            >
              studia {t.lang}
            </div>
          </div>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: '#051A2E',
              color: '#E9FA49',
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              fontFamily: 'Urbanist,sans-serif',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '.1em',
              transform: 'rotate(10deg)',
              boxShadow: '0 10px 24px rgba(5,26,46,.25)',
              zIndex: 2,
              lineHeight: 1.2,
            }}
          >
            STORIE
            <br />
            VERE
            <br />
            ★★★★★
          </div>
        </div>

        <div>
          <Eyebrow>Testimonianze</Eyebrow>
          <svg viewBox="0 0 48 40" width="56" height="44" aria-hidden="true" style={{ marginTop: 14 }}>
            <path
              d="M0 40V22C0 10 6 2 18 0v8c-6 2-10 6-10 14h10v18H0zM28 40V22c0-12 6-20 18-22v8c-6 2-10 6-10 14h10v18H28z"
              fill="#E9FA49"
            />
          </svg>
          <blockquote
            aria-live="polite"
            style={{
              fontFamily: 'Urbanist,sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: '#051A2E',
              lineHeight: 1.2,
              letterSpacing: '-.01em',
              margin: '14px 0 28px',
              minHeight: 240,
            }}
          >
            «{t.quote}»
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <div
              aria-hidden="true"
              style={{
                width: 54,
                height: 54,
                borderRadius: '50%',
                background: `url('/assets/${t.img}') center/cover`,
                border: '3px solid #fff',
                boxShadow: '0 4px 12px rgba(5,26,46,.08)',
              }}
            />
            <div>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 16, color: '#051A2E' }}>{t.name}</div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 2 }}>{t.role}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonianza ${i + 1}`}
                  aria-current={idx === i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: idx === i ? 32 : 10,
                    height: 10,
                    borderRadius: 99,
                    background: idx === i ? '#051A2E' : '#C9DCF1',
                    border: 0,
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all .22s',
                  }}
                />
              ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
              <button
                aria-label="Precedente"
                onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                style={{ width: 48, height: 48, borderRadius: 99, background: '#fff', border: 0, padding: 0, cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#051A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                aria-label="Successivo"
                onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                style={{ width: 48, height: 48, borderRadius: 99, background: '#E9FA49', border: 0, padding: 0, cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#051A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
