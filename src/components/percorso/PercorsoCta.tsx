import { Eyebrow } from '@/components/shared/Eyebrow';

export const PercorsoCta = () => (
  <section style={{ padding: '0 0 40px' }}>
    <div
      style={{
        background: '#051A2E',
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
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, right: 60, width: 260, height: 260, borderRadius: '50%', background: '#9E89FB', opacity: 0.15 }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: '#E9FA49', opacity: 0.08 }} />

      <div style={{ position: 'relative' }}>
        <Eyebrow color="#9E89FB" style={{ marginBottom: 16 }}>Pronto a partire?</Eyebrow>
        <h2
          style={{
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 800,
            fontSize: 58,
            lineHeight: 1,
            color: '#fff',
            letterSpacing: '-.03em',
            margin: '0 0 20px',
          }}
        >
          Il percorso
          <br />inizia con
          <br />un messaggio.
        </h2>
        <p
          style={{
            fontFamily: 'Roboto,sans-serif',
            fontSize: 17,
            color: '#C9DCF1',
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 420,
            opacity: 0.85,
          }}
        >
          Scrivi la lingua, l'obiettivo e quando puoi studiare. Ti rispondo in 24 ore.
        </p>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <a
          href="/#prenota"
          className="btn-primary"
          style={{
            padding: '22px',
            fontSize: 15,
            background: '#E9FA49',
            color: '#051A2E',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          Prenota la prima lezione
        </a>
        <a
          href="#whatsapp"
          style={{
            padding: '20px',
            fontSize: 14,
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 600,
            color: '#C9DCF1',
            borderRadius: 14,
            border: '1.5px solid rgba(201,220,241,.2)',
          }}
        >
          Scrivimi su WhatsApp
        </a>
      </div>
    </div>
  </section>
);
