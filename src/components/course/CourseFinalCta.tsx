import { Eyebrow } from '@/components/shared/Eyebrow';

export const CourseFinalCta = () => (
  <section id="prenota" style={{ padding: '60px 0 20px' }}>
    <div
      style={{
        background: '#E9FA49',
        borderRadius: 40,
        padding: '64px 64px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 40,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, right: 60, width: 220, height: 220, borderRadius: '50%', background: '#FF09AD', opacity: 0.18 }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: '#9E89FB', opacity: 0.35 }} />

      <div style={{ position: 'relative' }}>
        <Eyebrow color="#051A2E">Ultimo posto della prossima sessione</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 54, lineHeight: 1, color: '#051A2E', letterSpacing: '-.03em', margin: '14px 0 16px' }}>
          Iniziamo?
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, fontWeight: 500, color: '#051A2E', lineHeight: 1.55, maxWidth: 440, margin: 0 }}>
          Prenota la tua prima lezione, capiamo il livello di partenza e disegniamo il percorso giusto per te.
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
          href="#whatsapp"
          className="btn-ghost"
          style={{ padding: '20px', fontSize: 14, textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Scrivimi su WhatsApp
        </a>
        <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#051A2E', textAlign: 'center', marginTop: 6, opacity: 0.7 }}>
          Ti rispondo entro 24h · dati al sicuro
        </div>
      </div>
    </div>
  </section>
);
