import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { FAQ_HOME } from '@/data/home-content';

export const FAQ = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow color="#FFAE00">Domande frequenti</Eyebrow>
          <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 52, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
            Tutto quello che
            <br />mi chiedono prima
            <br />di iniziare.
          </h2>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.6, marginBottom: 28 }}>
            Non trovi la tua risposta? Scrivimi — ti rispondo di persona, di solito entro il giorno.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              background: '#fff',
              borderRadius: 20,
              padding: '14px 20px',
              boxShadow: '0 2px 8px rgba(5,26,46,.06)',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: "url('/assets/logo-debora-vichi.png') center/cover",
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 14, color: '#051A2E' }}>Scrivimi direttamente</div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80' }}>ciao@latuainsegnante.com</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {FAQ_HOME.map((it, i) => {
            const isOpen = open === i;
            const panelId = `faq-home-panel-${i}`;
            const buttonId = `faq-home-button-${i}`;
            return (
              <div
                key={it.q}
                style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
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
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#051A2E',
                  }}
                >
                  <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 18 }}>{it.q}</span>
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
                      width="14"
                      height="14"
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
                    style={{ padding: '0 26px 24px', fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6 }}
                  >
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
