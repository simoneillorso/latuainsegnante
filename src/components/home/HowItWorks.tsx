import { Eyebrow } from '@/components/shared/Eyebrow';
import { Squiggle } from '@/components/shared/Squiggle';
import { HOW_IT_WORKS_STEPS } from '@/data/home-content';

export const HowItWorks = () => (
  <section id="come-funziona" style={{ padding: '120px 0 40px' }}>
    <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
      <Eyebrow>Come funziona</Eyebrow>
      <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
        Imparare una lingua,
        <br />
        <span style={{ position: 'relative', display: 'inline-block' }}>
          in tre passi semplici.
          <Squiggle color="#9E89FB" width={440} style={{ position: 'absolute', left: 0, right: 0, bottom: -14, width: '100%' }} />
        </span>
      </h2>
      <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 18, color: '#3A4F63', lineHeight: 1.6, marginTop: 36 }}>
        Nessuna piattaforma da imparare, nessun contratto annuale, nessuna ansia da libro di testo. Parli con me, e partiamo.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, position: 'relative' }}>
      <svg
        aria-hidden="true"
        className="hiw-connector"
        style={{ position: 'absolute', top: 70, left: '16%', right: '16%', width: '68%', height: 20, zIndex: 0 }}
        viewBox="0 0 800 20"
        preserveAspectRatio="none"
      >
        <path d="M0 10 Q 200 -20, 400 10 T 800 10" fill="none" stroke="#C9DCF1" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      </svg>
      {HOW_IT_WORKS_STEPS.map((s, i) => (
        <div
          key={s.n}
          className="hiw-card"
          data-reveal=""
          style={{
            background: '#fff',
            borderRadius: 28,
            padding: '36px 30px 34px',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 2px 8px rgba(5,26,46,.06)',
            transition: 'all .3s cubic-bezier(.2,.8,.2,1)',
            ['--reveal-delay' as string]: `${i * 90}ms`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: s.color,
                display: 'grid',
                placeItems: 'center',
                transform: 'rotate(-6deg)',
              }}
            >
              <img src={`/assets/icon-${s.icon}.png`} alt="" style={{ width: 32, height: 32 }} />
            </div>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 56, fontWeight: 800, color: '#051A2E', letterSpacing: '-.04em', lineHeight: 1 }}>{s.n}</div>
          </div>
          <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 26, color: '#051A2E', lineHeight: 1.2, margin: '0 0 10px' }}>{s.title}</h3>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
        </div>
      ))}
    </div>

    <div style={{ textAlign: 'center', marginTop: 48 }}>
      <a href="#prenota" className="btn-primary" style={{ padding: '20px 32px', fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
        Scrivimi ora
      </a>
    </div>

    <style>{`
      .hiw-card:hover {
        box-shadow: 0 20px 40px rgba(5,26,46,.10);
        transform: translateY(-6px);
      }
    `}</style>
  </section>
);
