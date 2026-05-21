import { Eyebrow } from '@/components/shared/Eyebrow';
import { waLink } from '@/data/site';

export const AboutCta = () => (
  <section style={{ padding: '60px 0 20px' }}>
    <div
      style={{
        background: '#E9FA49',
        borderRadius: 40,
        padding: '80px 72px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 40,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{ position: 'absolute', bottom: -60, right: 60, width: 240, height: 240, borderRadius: '50%', background: '#FF09AD', opacity: 0.18 }}
      />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: '#9E89FB', opacity: 0.3 }}
      />
      <div style={{ position: 'relative' }}>
        <Eyebrow color="#051A2E">Si parte?</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 62, lineHeight: 1, color: '#051A2E', letterSpacing: '-.03em', margin: '14px 0 18px' }}>
          Adesso mi conosci.
          <br />Tocca a te.
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, color: '#051A2E', lineHeight: 1.55, margin: 0, maxWidth: 460 }}>
          Prenota la tua prima lezione e capiremo insieme se posso essere davvero la tua insegnante.
        </p>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <a
          href="/#prenota"
          className="btn-primary"
          style={{ padding: '22px', fontSize: 15, background: '#051A2E', color: '#fff', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Prenota la prima lezione
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ padding: '20px', fontSize: 14, whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Scrivimi su WhatsApp
        </a>
      </div>
    </div>
  </section>
);
