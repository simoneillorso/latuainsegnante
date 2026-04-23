import { Eyebrow } from '@/components/shared/Eyebrow';
import { Squiggle } from '@/components/shared/Squiggle';

export const PercorsoHero = () => (
  <section style={{ padding: '60px 0 80px', textAlign: 'center', position: 'relative' }}>
    <span aria-hidden="true" style={{ position: 'absolute', top: 60, left: '12%', width: 10, height: 10, borderRadius: '50%', background: '#E9FA49' }} />
    <span aria-hidden="true" style={{ position: 'absolute', top: 140, right: '10%', width: 14, height: 14, borderRadius: '50%', background: '#FF09AD', boxShadow: '0 4px 10px rgba(255,9,173,.3)' }} />
    <span aria-hidden="true" style={{ position: 'absolute', top: 40, right: '28%', width: 8, height: 8, borderRadius: '50%', background: '#9E89FB' }} />

    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <Eyebrow style={{ marginBottom: 18 }}>Il percorso</Eyebrow>
      <h1
        style={{
          fontFamily: 'Urbanist,sans-serif',
          fontWeight: 700,
          fontSize: 76,
          lineHeight: 1,
          color: '#051A2E',
          letterSpacing: '-.025em',
          margin: '0 0 28px',
        }}
      >
        Dal primo messaggio{' '}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span style={{ position: 'relative', zIndex: 1 }}>al traguardo.</span>
          <Squiggle
            color="#E9FA49"
            width={480}
            style={{ position: 'absolute', left: 0, right: 0, bottom: -8, width: '100%' }}
          />
        </span>
      </h1>
      <p
        style={{
          fontFamily: 'Roboto,sans-serif',
          fontSize: 20,
          color: '#3A4F63',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        Nessuna sorpresa, nessun impegno a scatola chiusa. Ecco cosa succede — passo dopo passo — da quando mi scrivi a quando dici "ce l'ho fatta".
      </p>
    </div>
  </section>
);
