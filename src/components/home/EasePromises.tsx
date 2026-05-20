import { Eyebrow } from '@/components/shared/Eyebrow';
import { EASE_PROMISES } from '@/data/home-content';

export const EasePromises = () => (
  <section style={{ padding: '80px 0' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 40 }}>
      <div style={{ maxWidth: 680 }}>
        <Eyebrow color="#FF09AD">Perché è facile con me</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 0' }}>
          Le cose complicate,
          <br />le tolgo io.
        </h2>
      </div>
      <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.6, maxWidth: 380, marginBottom: 8 }}>
        Tu pensi a voler imparare. Al resto — piattaforma, materiali, calendario, grammatica — ci penso io.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
      {EASE_PROMISES.map((it, i) => (
        <div
          key={it.title}
          data-reveal=""
          style={{
            background: '#fff',
            borderRadius: 28,
            padding: '32px 26px 30px',
            boxShadow: '0 2px 8px rgba(5,26,46,.06)',
            position: 'relative',
            overflow: 'hidden',
            ['--reveal-delay' as string]: `${i * 80}ms`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -30,
              right: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: it.color,
              opacity: 0.18,
            }}
          />
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: it.color,
              display: 'grid',
              placeItems: 'center',
              marginBottom: 22,
              transform: 'rotate(-4deg)',
              position: 'relative',
            }}
          >
            <img src={`/assets/icon-${it.icon}.png`} alt="" style={{ width: 30, height: 30 }} />
          </div>
          <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 20, color: '#051A2E', lineHeight: 1.25, margin: '0 0 10px', position: 'relative' }}>{it.title}</h3>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#3A4F63', lineHeight: 1.6, margin: 0, position: 'relative' }}>{it.body}</p>
        </div>
      ))}
    </div>
  </section>
);
