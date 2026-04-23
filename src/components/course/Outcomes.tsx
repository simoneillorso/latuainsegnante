import { Eyebrow } from '@/components/shared/Eyebrow';
import type { Outcome } from '@/data/course-types';

type Props = {
  outcomes: Outcome[];
};

export const Outcomes = ({ outcomes }: Props) => (
  <section style={{ padding: '80px 0' }}>
    <div
      style={{
        background: '#051A2E',
        borderRadius: 40,
        padding: '72px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: '#9E89FB', opacity: 0.25 }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: '#E9FA49', opacity: 0.18 }} />

      <div style={{ maxWidth: 720, marginBottom: 48, position: 'relative' }}>
        <Eyebrow color="#E9FA49">Cosa porti a casa</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: '#fff', letterSpacing: '-.02em', margin: '14px 0 0' }}>
          Sei risultati concreti
          <br />che noteranno anche i colleghi.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px 24px', position: 'relative' }}>
        {outcomes.map((it) => (
          <div key={it.n} style={{ paddingTop: 24, borderTop: '2px solid rgba(233,250,73,.4)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 14, color: '#E9FA49', letterSpacing: '.08em', marginBottom: 12 }}>{it.n}</div>
            <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.2, margin: '0 0 12px', minHeight: 54 }}>{it.t}</h3>
            <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#C9DCF1', lineHeight: 1.6, margin: 0 }}>{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
