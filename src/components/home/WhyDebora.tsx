import { Eyebrow } from '@/components/shared/Eyebrow';
import { WHY_DEBORA_STATS } from '@/data/home-content';

export const WhyDebora = () => (
  <section style={{ padding: '80px 0' }}>
    <div
      className="card-padded-xl"
      data-reveal=""
      style={{
        background: '#fff',
        borderRadius: 40,
        padding: '72px 72px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 64,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg viewBox="0 0 180 180" width="180" height="180" aria-hidden="true" style={{ position: 'absolute', top: -40, right: -40, opacity: 0.5 }}>
        <circle cx="90" cy="90" r="80" fill="none" stroke="#E9FA49" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      </svg>

      <div style={{ position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: '#C9DCF1',
            borderRadius: '58% 42% 54% 46% / 52% 58% 42% 48%',
            transform: 'scale(1.02)',
          }}
        />
        <img
          src="/assets/hero-debora.png"
          alt="Debora Vichi"
          loading="lazy"
          decoding="async"
          style={{ width: '100%', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 16px 24px rgba(5,26,46,.08))' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 10,
            background: '#E9FA49',
            color: '#051A2E',
            padding: '10px 16px',
            borderRadius: 99,
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 800,
            fontSize: 14,
            transform: 'rotate(8deg)',
            boxShadow: '0 8px 20px rgba(233,250,73,.5)',
            zIndex: 2,
          }}
        >
          Latina · online
        </div>
      </div>

      <div>
        <Eyebrow color="#9E89FB">Chi sono</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 52, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
          Mi chiamo Debora.
          <br />E non ti farò
          <br />studiare come a scuola.
        </h2>
        <p style={{ fontFamily: 'Roboto Slab,serif', fontStyle: 'italic', fontSize: 20, color: '#3A4F63', lineHeight: 1.55, margin: '0 0 22px', maxWidth: 540 }}>
          « Sono linguista, traduttrice ed esaminatrice certificata. Ma prima di tutto, sono una persona che ha imparato nove lingue per curiosità e amore. »
        </p>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 540 }}>
          Ho capito che non esiste un unico metodo: esiste il <b style={{ color: '#051A2E' }}>tuo</b> metodo. Lavoriamo sulle tue paure (sì, anche la grammatica), sulle tue abitudini, sul tempo vero che hai. Niente libri inutili — solo quello che ti serve per parlare, davvero.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 32 }}>
          {WHY_DEBORA_STATS.map((s) => {
            const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(s.n);
            const target = match ? match[1] : null;
            const suffix = match ? match[2] : '';
            return (
              <div key={s.l}>
                <div
                  className="count-up"
                  data-count={target ?? undefined}
                  data-count-suffix={suffix || undefined}
                  data-count-display={s.n}
                  style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 48, color: '#051A2E', lineHeight: 1, letterSpacing: '-.03em' }}
                >
                  {target ? `0${suffix}` : s.n}
                </div>
                <div style={{ width: 24, height: 4, background: s.c, borderRadius: 99, margin: '10px 0' }} />
                <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80' }}>{s.l}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <a href="/chi-sono#metodo" className="btn-ghost" style={{ padding: '18px 28px', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
            Scopri il metodo
          </a>
        </div>
      </div>
    </div>
  </section>
);
