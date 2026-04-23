import { useState } from 'react';
import { Dot } from '@/components/shared/Dot';
import type { Course } from '@/data/course-types';

type Plan = 'pack' | 'single';

type Props = {
  course: Course;
};

export const BookingCard = ({ course }: Props) => {
  const [plan, setPlan] = useState<Plan>('pack');
  const price = plan === 'pack' ? course.price : course.pricePer;
  const unit = plan === 'pack' ? 'tutto incluso' : '/ora singola';

  return (
    <aside
      style={{
        position: 'sticky',
        top: 110,
        background: '#fff',
        borderRadius: 32,
        padding: '40px 32px 28px',
        boxShadow: '0 20px 40px rgba(5,26,46,.10)',
        border: '1.5px solid #E7EFF8',
        marginTop: 16,
      }}
      aria-label="Informazioni di prenotazione corso"
    >
      <div
        style={{
          position: 'absolute',
          top: -14,
          left: 24,
          background: '#FF09AD',
          color: '#fff',
          fontFamily: 'Urbanist,sans-serif',
          fontWeight: 800,
          fontSize: 11,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          padding: '8px 14px',
          borderRadius: 99,
          transform: 'rotate(-4deg)',
          boxShadow: '0 6px 14px rgba(255,9,173,.35)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        Prossimi posti disponibili
      </div>

      <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>
        Prezzo del corso
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 56, color: '#051A2E', letterSpacing: '-.03em', lineHeight: 1 }}>
          €{price}
        </span>
        <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>{unit}</span>
      </div>
      <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginBottom: 20 }}>
        {plan === 'pack' ? (
          (() => {
            const lessons = 12;
            const perHourInPack = Math.round(course.price / lessons);
            const savings = course.pricePer * lessons - course.price;
            if (savings <= 0) return <span>Prezzo chiuso, tutto incluso</span>;
            return (
              <span>
                €{course.pricePer} €<b style={{ color: '#1CB886' }}>{perHourInPack}</b>/ora · risparmi €{savings}
              </span>
            );
          })()
        ) : (
          <span>Paghi lezione per lezione</span>
        )}
      </div>

      <div role="tablist" aria-label="Piano di prenotazione" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, background: '#F4F7FA', borderRadius: 14, padding: 4, marginBottom: 22 }}>
        {(
          [
            { k: 'pack', l: 'Pacchetto 12', sub: 'consigliato' },
            { k: 'single', l: 'Singola', sub: 'senza impegno' },
          ] as const
        ).map((p) => (
          <button
            key={p.k}
            role="tab"
            aria-selected={plan === p.k}
            onClick={() => setPlan(p.k)}
            style={{
              background: plan === p.k ? '#fff' : 'transparent',
              boxShadow: plan === p.k ? '0 2px 6px rgba(5,26,46,.08)' : 'none',
              border: 0,
              borderRadius: 10,
              padding: '10px 6px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, color: '#051A2E' }}>{p.l}</div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 11, color: '#576C80', marginTop: 2 }}>{p.sub}</div>
          </button>
        ))}
      </div>

      <div
        style={{
          background: '#F4F7FA',
          borderRadius: 16,
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 18,
        }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#E9FA49', display: 'grid', placeItems: 'center' }}>
          <img src="/assets/icon-calendar.png" alt="" style={{ width: 22, height: 22 }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, color: '#051A2E' }}>Primo slot libero</div>
          <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80' }}>giovedì 30 apr · 18:30</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Dot color="#1CB886" size={6} />
          <span style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 11, fontWeight: 700, color: '#1CB886' }}>LIBERO</span>
        </div>
      </div>

      <a
        href="#prenota"
        className="btn-primary"
        style={{ width: '100%', padding: '18px', fontSize: 15, marginBottom: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, textDecoration: 'none', boxSizing: 'border-box' }}
      >
        Prenota la prima lezione
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
      <a
        href="#whatsapp"
        className="btn-ghost"
        style={{ width: '100%', padding: '16px', fontSize: 14, textDecoration: 'none', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}
      >
        Parliamone — WhatsApp
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, paddingTop: 18, borderTop: '1px solid #E7EFF8' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1CB886" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#3A4F63' }}>
          <b style={{ color: '#051A2E' }}>Soddisfatti o rimborsati</b> sulle prime 2 lezioni.
        </div>
      </div>
    </aside>
  );
};
