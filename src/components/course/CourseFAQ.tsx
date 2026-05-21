import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import type { FaqItem } from '@/data/home-content';
import { waLink } from '@/data/site';

type Props = {
  faq: FaqItem[];
};

export const CourseFAQ = ({ faq }: Props) => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ padding: '60px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <Eyebrow color="#FFAE00">Domande sul corso</Eyebrow>
          <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 46, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
            Le cose che
            <br />mi chiedono prima
            <br />di iscriversi.
          </h2>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6 }}>
            Non trovi la tua risposta?{' '}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" style={{ color: '#051A2E', fontWeight: 700, textDecoration: 'underline' }}>
              Scrivimi su WhatsApp
            </a>{' '}
            — rispondo entro il giorno.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          {faq.map((it, i) => {
            const isOpen = open === i;
            const buttonId = `course-faq-b-${i}`;
            const panelId = `course-faq-p-${i}`;
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
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#051A2E',
                  }}
                >
                  <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 17 }}>{it.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 30,
                      height: 30,
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
                    style={{ padding: '0 24px 22px', fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6 }}
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
