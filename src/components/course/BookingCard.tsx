import { useState } from 'react';
import type { Course } from '@/data/course-types';
import { coursePlans } from '@/data/pricing';
import { waLink } from '@/data/site';

type Props = {
  course: Course;
};

export const BookingCard = ({ course }: Props) => {
  const plans = coursePlans(course.lang);
  const [active, setActive] = useState<string>('full');
  const plan = plans.find((p) => p.key === active) ?? plans[1]!;
  const intermedio = plans[0]!;
  const savings = intermedio.perHour * plan.lessons - plan.total;

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
      <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>
        Scegli il tuo percorso
      </div>

      <div role="tablist" aria-label="Percorso" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, background: '#F4F7FA', borderRadius: 14, padding: 4, marginBottom: 22 }}>
        {plans.map((p) => (
          <button
            key={p.key}
            role="tab"
            aria-selected={active === p.key}
            onClick={() => setActive(p.key)}
            style={{
              background: active === p.key ? '#fff' : 'transparent',
              boxShadow: active === p.key ? '0 2px 6px rgba(5,26,46,.08)' : 'none',
              border: 0,
              borderRadius: 10,
              padding: '10px 6px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, color: '#051A2E' }}>{p.key === 'intermedio' ? 'Intermedio' : 'Full'}</div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 11, color: '#576C80', marginTop: 2 }}>{p.lessons} lezioni</div>
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 56, color: '#051A2E', letterSpacing: '-.03em', lineHeight: 1 }}>
          €{plan.perHour}
        </span>
        <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>/ora</span>
      </div>
      <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginBottom: 20 }}>
        {plan.lessons} lezioni · <b style={{ color: '#051A2E' }}>€{plan.total}</b> · {plan.validity}
        {savings > 0 && (
          <span style={{ color: '#1CB886', fontWeight: 700 }}> · risparmi €{savings}</span>
        )}
      </div>

      <div
        style={{
          background: '#F4F7FA',
          borderRadius: 16,
          padding: '14px 16px',
          fontFamily: 'Roboto,sans-serif',
          fontSize: 13,
          color: '#3A4F63',
          marginBottom: 18,
        }}
      >
        Confronto: <b style={{ color: '#051A2E' }}>Intermedio</b> {intermedio.lessons} lezioni a €{intermedio.perHour}/ora ·
        {' '}<b style={{ color: '#051A2E' }}>Full</b> {plans[1]!.lessons} lezioni a €{plans[1]!.perHour}/ora.
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
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
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
