import { ABOUT_NUMBERS } from '@/data/about-content';

export const AboutNumbers = () => (
  <section style={{ padding: '40px 0' }} aria-label="I numeri di Debora">
    <div
      style={{
        background: '#051A2E',
        borderRadius: 32,
        padding: '40px 56px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: '#E9FA49', opacity: 0.15 }}
      />
      {ABOUT_NUMBERS.map((s) => (
        <div key={s.l} style={{ position: 'relative' }}>
          <div style={{ width: 24, height: 4, background: s.c, borderRadius: 99, marginBottom: 12 }} />
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 56, color: '#fff', lineHeight: 1, letterSpacing: '-.03em' }}>{s.n}</div>
          <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#C9DCF1', marginTop: 10 }}>{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);
