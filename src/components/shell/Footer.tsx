type Column = { h: string; items: string[] };

const COLUMNS: Column[] = [
  { h: 'Lingue', items: ['Inglese', 'Spagnolo', 'Francese', 'Tedesco', 'Italiano L2', 'Vedi tutte'] },
  { h: 'Scopri', items: ['Il metodo', 'Chi sono', 'Prezzi', 'Recensioni', 'Blog'] },
  { h: 'Supporto', items: ['Domande frequenti', 'Prima lezione', 'Prenotazione', 'Politica rimborsi'] },
  { h: 'Contatti', items: ['ciao@latuainsegnante.com', 'Latina, Italia', '+39 055 000 0000'] },
];

export const Footer = () => (
  <footer
    style={{
      marginTop: 120,
      background: '#051A2E',
      borderRadius: '40px 40px 0 0',
      padding: '72px 64px 32px',
      color: '#C9DCF1',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
        gap: 48,
        paddingBottom: 48,
        borderBottom: '1px solid rgba(201,220,241,.15)',
      }}
    >
      <div>
        <img
          src="/assets/logo-wordmark.png"
          style={{ height: 38, filter: 'brightness(0) invert(1)' }}
          alt="Debora Vichi"
        />
        <p
          style={{
            fontFamily: 'Roboto,sans-serif',
            fontSize: 14,
            color: '#C9DCF1',
            lineHeight: 1.6,
            marginTop: 18,
            maxWidth: 300,
            opacity: 0.8,
          }}
        >
          Debora Vichi — insegnante di lingue. Lezioni private 1-a-1 in dieci lingue, online o a Latina.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          {(['IG', 'FB', 'IN', 'TT'] as const).map((s) => (
            <a
              key={s}
              href="#"
              aria-label={`Debora Vichi su ${s}`}
              style={{
                width: 36,
                height: 36,
                borderRadius: 99,
                background: 'rgba(201,220,241,.08)',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'Urbanist,sans-serif',
                fontWeight: 700,
                fontSize: 12,
                color: '#fff',
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
      {COLUMNS.map((col) => (
        <div key={col.h}>
          <div
            style={{
              fontFamily: 'Urbanist,sans-serif',
              fontWeight: 700,
              fontSize: 12,
              color: '#9E89FB',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            {col.h}
          </div>
          {col.items.map((i) => (
            <a
              key={i}
              href="#"
              style={{
                display: 'block',
                fontFamily: 'Roboto,sans-serif',
                fontSize: 14,
                color: '#C9DCF1',
                padding: '6px 0',
                opacity: 0.85,
              }}
            >
              {i}
            </a>
          ))}
        </div>
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 28,
        fontFamily: 'Roboto,sans-serif',
        fontSize: 13,
        color: '#C9DCF1',
        opacity: 0.6,
      }}
    >
      <div>© {new Date().getFullYear()} Debora Vichi · P.IVA 06123450480</div>
      <div style={{ display: 'flex', gap: 24 }}>
        <a href="#" style={{ color: '#C9DCF1' }}>Privacy</a>
        <a href="#" style={{ color: '#C9DCF1' }}>Cookie</a>
        <a href="#" style={{ color: '#C9DCF1' }}>Termini</a>
      </div>
    </div>
  </footer>
);
