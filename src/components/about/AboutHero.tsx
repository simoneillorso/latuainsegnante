import { Squiggle } from '@/components/shared/Squiggle';

export const AboutHero = () => (
  <section style={{ position: 'relative', padding: '40px 0 60px' }}>
    <span aria-hidden="true" style={{ position: 'absolute', top: 80, left: '40%', width: 12, height: 12, borderRadius: '50%', background: '#FF09AD' }} />
    <span aria-hidden="true" style={{ position: 'absolute', top: 280, left: '8%', width: 8, height: 8, borderRadius: '50%', background: '#E9FA49' }} />
    <span aria-hidden="true" style={{ position: 'absolute', top: 520, left: '55%', width: 10, height: 10, borderRadius: '50%', background: '#1CB886' }} />

    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#fff',
            borderRadius: 99,
            padding: '8px 16px 8px 8px',
            boxShadow: '0 2px 8px rgba(5,26,46,.06)',
            marginBottom: 28,
          }}
        >
          <div aria-hidden="true" style={{ width: 28, height: 28, borderRadius: '50%', background: "url('/assets/logo-debora-vichi.png') center/cover" }} />
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 13, fontWeight: 700, color: '#051A2E' }}>Debora Vichi · Latina</div>
        </div>
        <h1 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 80, lineHeight: 1, color: '#051A2E', letterSpacing: '-.025em', margin: '0 0 24px' }}>
          Piacere,
          <br />
          sono{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>Debora</span>
            <Squiggle color="#E9FA49" width={260} style={{ position: 'absolute', left: 0, right: 0, bottom: -10, width: '100%' }} />
          </span>
          .
        </h1>
        <p style={{ fontFamily: 'Roboto Slab,serif', fontStyle: 'italic', fontSize: 22, color: '#3A4F63', lineHeight: 1.5, maxWidth: 540, margin: '0 0 20px' }}>
          «Parlo nove lingue. Non perché sia un genio — ma perché ho trovato il mio modo. E adesso aiuto te a trovare il tuo.»
        </p>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, color: '#3A4F63', lineHeight: 1.65, maxWidth: 520, margin: '0 0 32px' }}>
          Linguista, traduttrice, esaminatrice certificata. Ma soprattutto, una persona che ha passato vent'anni a capire perché imparare una lingua a scuola è così frustrante — e come renderlo, finalmente, facile.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/#prenota" className="btn-primary" style={{ padding: '18px 28px', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
            Prenota una lezione
          </a>
          <a href="#metodo" className="btn-ghost" style={{ padding: '16px 26px', fontSize: 14, whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}>
            Scopri il metodo
          </a>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: '-10px', background: '#9E89FB', borderRadius: '58% 42% 54% 46% / 52% 58% 42% 48%' }}
        />
        <div
          role="img"
          aria-label="Debora Vichi in primo piano"
          style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/5', background: "url('/assets/hero-debora.png') center/cover" }}
        />
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: -20,
            background: '#E9FA49',
            color: '#051A2E',
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 800,
            fontSize: 13,
            padding: '10px 16px',
            borderRadius: 99,
            transform: 'rotate(6deg)',
            boxShadow: '0 8px 20px rgba(233,250,73,.5)',
          }}
        >
          Ciao! 👋
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            left: -16,
            background: '#fff',
            borderRadius: 20,
            padding: '14px 18px',
            boxShadow: '0 10px 24px rgba(5,26,46,.12)',
          }}
        >
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 11, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase' }}>Parlo in</div>
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 20, color: '#051A2E', marginTop: 4 }}>
            🇬🇧 🇪🇸 🇫🇷 🇩🇪 🇵🇹 🇷🇺 🇨🇳 🇸🇦 🇮🇹
          </div>
        </div>
      </div>
    </div>
  </section>
);
