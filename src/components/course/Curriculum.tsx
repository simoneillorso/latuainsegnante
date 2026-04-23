import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import type { Lesson } from '@/data/course-types';

type Props = {
  lessons: Lesson[];
  extras: string[];
};

export const Curriculum = ({ lessons, extras }: Props) => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ padding: '60px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 110 }}>
          <Eyebrow color="#1CB886">Il programma</Eyebrow>
          <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 52, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 18px' }}>
            Dodici lezioni
            <br />con un filo rosso
            <br />chiarissimo.
          </h2>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.6, margin: '0 0 28px' }}>
            Ogni lezione parte da un problema reale e finisce con una capacità concreta. Il programma si adatta al tuo settore e al tuo ritmo — queste sono le fondamenta.
          </p>
          <div style={{ background: '#fff', borderRadius: 20, padding: '20px 22px', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 14, color: '#051A2E', marginBottom: 14 }}>Incluso in tutte le lezioni</div>
            {extras.map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1CB886" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#3A4F63' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <ol style={{ display: 'grid', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
          {lessons.map((l, i) => {
            const isOpen = open === i;
            const buttonId = `curriculum-b-${i}`;
            const panelId = `curriculum-p-${i}`;
            return (
              <li
                key={l.n}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(5,26,46,.06)',
                  border: isOpen ? '1.5px solid #9E89FB' : '1.5px solid transparent',
                  transition: 'all .22s',
                }}
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 0,
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#051A2E',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: isOpen ? '#9E89FB' : '#F4F7FA',
                      color: isOpen ? '#fff' : '#051A2E',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'Urbanist,sans-serif',
                      fontWeight: 800,
                      fontSize: 16,
                      flexShrink: 0,
                      transition: 'all .22s',
                    }}
                  >
                    {String(l.n).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 17, color: '#051A2E' }}>{l.title}</div>
                    {!isOpen && (
                      <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {l.focus}
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.08em', textTransform: 'uppercase', flexShrink: 0 }}>
                    {l.dur}
                  </div>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: isOpen ? '#E9FA49' : '#F4F7FA',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      transition: 'all .22s',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#051A2E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .22s' }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{ padding: '0 24px 22px 90px', fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6 }}
                  >
                    {l.focus}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
