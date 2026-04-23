import { Eyebrow } from '@/components/shared/Eyebrow';
import { BELIEFS } from '@/data/about-content';

export const Beliefs = () => (
  <section style={{ padding: '60px 0' }}>
    <div style={{ maxWidth: 780, marginBottom: 48 }}>
      <Eyebrow color="#FF09AD">Cosa credo</Eyebrow>
      <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 16px' }}>
        Sei idee su cui
        <br />si regge tutto il resto.
      </h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {BELIEFS.map((it) => (
        <div
          key={it.t}
          style={{ background: '#fff', borderRadius: 24, padding: '28px 26px', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#F4F7FA',
              display: 'grid',
              placeItems: 'center',
              fontSize: 28,
              marginBottom: 18,
            }}
          >
            {it.icon}
          </div>
          <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 19, color: '#051A2E', lineHeight: 1.25, margin: '0 0 8px' }}>{it.t}</h3>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#3A4F63', lineHeight: 1.6, margin: 0 }}>{it.b}</p>
        </div>
      ))}
    </div>
  </section>
);
