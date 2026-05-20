import { CERTIFICATIONS } from '@/data/home-content';

export const TrustStrip = () => (
  <section style={{ padding: '20px 0 0', marginTop: -20 }} aria-label="Certificazioni">
    <div
      className="trust-strip"
      style={{
        background: '#fff',
        borderRadius: 99,
        padding: '18px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(5,26,46,.06)',
        flexWrap: 'wrap',
        gap: 24,
      }}
    >
      <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.14em', textTransform: 'uppercase' }}>
        Certificazioni
      </div>
      {CERTIFICATIONS.map((b) => (
        <div
          key={b}
          style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 600, fontSize: 15, color: '#051A2E', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1CB886" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {b}
        </div>
      ))}
    </div>
  </section>
);
