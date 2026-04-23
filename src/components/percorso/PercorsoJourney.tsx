const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type Step = {
  n: string;
  when: string;
  color: string;
  emoji: string;
  title: string;
  body: string;
  details: string[];
};

const STEPS: Step[] = [
  {
    n: '01',
    when: 'Giorno 0',
    color: '#9E89FB',
    emoji: '✉️',
    title: 'Mi scrivi',
    body: 'Due righe bastano: la lingua che vuoi imparare, l\'obiettivo, quando puoi studiare. Ti rispondo entro 24 ore con i prossimi slot disponibili.',
    details: [
      'Risposta garantita entro 24h',
      'Nessun modulo complicato',
      'Puoi scrivere anche su WhatsApp',
    ],
  },
  {
    n: '02',
    when: 'Settimana 1',
    color: '#E9FA49',
    emoji: '🎙️',
    title: 'Ci conosciamo — prima lezione',
    body: 'Sessanta minuti insieme. Non faccio un test: parliamo. Mi racconti la tua storia con la lingua, cosa ti blocca, cosa ti farebbe dire "ce l\'ho fatta". Prendo appunti e ti mando una mappa scritta del tuo punto di partenza.',
    details: [
      'Diagnosi del livello reale (non scolastico)',
      'Mappa dei blocchi emotivi e tecnici',
      'Obiettivo condiviso e misurabile',
    ],
  },
  {
    n: '03',
    when: 'Entro 48 ore',
    color: '#1CB886',
    emoji: '🗺️',
    title: 'Disegno il tuo piano',
    body: 'Niente programmi pre-confezionati. Costruisco il tuo percorso lezione per lezione, con materiali su misura, basandomi su quello che fai davvero nella vita — non su un manuale.',
    details: [
      'Piano personalizzato lezione per lezione',
      'Materiali scritti e audio creati apposta',
      'Calendario adatto ai tuoi orari veri',
    ],
  },
  {
    n: '04',
    when: 'Ogni settimana',
    color: '#FF09AD',
    emoji: '📚',
    title: 'Si lavora — le lezioni',
    body: 'Sessanta minuti 1-a-1, online o a Latina. Il 70% è pratica orale e scritta su situazioni reali. Tra una lezione e l\'altra ti do micro-esercizi via WhatsApp: 10 minuti al giorno, mai di più.',
    details: [
      'Lezioni 1-a-1 di 60 min, online o a Latina',
      'Micro-esercizi quotidiani via WhatsApp',
      'Feedback registrato, riascoltabile',
    ],
  },
  {
    n: '05',
    when: 'Ogni 4 lezioni',
    color: '#FFAE00',
    emoji: '📊',
    title: 'Check-up dei progressi',
    body: 'Ci fermiamo e misuriamo. Registri un audio sullo stesso argomento del primo giorno e lo confrontiamo. Senti la differenza con le tue orecchie — non con un voto. Poi decidiamo insieme se alzare l\'asticella.',
    details: [
      'Report di progresso scritto',
      'Confronto audio "prima e dopo"',
      'Ricalibrazione del piano, se serve',
    ],
  },
  {
    n: '06',
    when: 'Il tuo obiettivo',
    color: '#9E89FB',
    emoji: '🏆',
    title: 'Il traguardo — e dopo',
    body: 'Raggiungi quello per cui hai iniziato. Ricevi un attestato con livello di partenza, di arrivo e una valutazione spendibile nel CV. E un piano post-corso per non perdere quello che hai guadagnato.',
    details: [
      'Attestato con valutazione dettagliata',
      'Piano di mantenimento su misura',
      'Follow-up a 3 mesi incluso',
    ],
  },
];

export const PercorsoJourney = () => (
  <section style={{ padding: '20px 0 100px' }}>
    <div style={{ position: 'relative' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(180deg, #E7EFF8 0%, #C9DCF1 50%, #E7EFF8 100%)',
          transform: 'translateX(-50%)',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {STEPS.map((s, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={s.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 1fr',
                alignItems: 'start',
                gap: 0,
                marginBottom: 48,
              }}
            >
              {isLeft ? (
                <>
                  <div style={{ padding: '0 40px 0 0', display: 'flex', justifyContent: 'flex-end' }}>
                    <StepCard s={s} />
                  </div>
                  <CenterDot s={s} />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <CenterDot s={s} />
                  <div style={{ padding: '0 0 0 40px' }}>
                    <StepCard s={s} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const CenterDot = ({ s }: { s: Step }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, paddingTop: 24 }}>
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: s.color,
        display: 'grid',
        placeItems: 'center',
        fontSize: 24,
        flexShrink: 0,
        boxShadow: `0 8px 20px ${s.color}55`,
        zIndex: 1,
        position: 'relative',
      }}
    >
      {s.emoji}
    </div>
    <div
      style={{
        fontFamily: 'Urbanist,sans-serif',
        fontWeight: 800,
        fontSize: 11,
        color: s.color,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        background: '#fff',
        padding: '4px 10px',
        borderRadius: 99,
        border: `1.5px solid ${s.color}`,
        whiteSpace: 'nowrap',
        zIndex: 1,
        position: 'relative',
      }}
    >
      {s.when}
    </div>
  </div>
);

const StepCard = ({ s }: { s: Step }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 28,
      padding: '32px 28px',
      boxShadow: '0 4px 16px rgba(5,26,46,.07)',
      border: '1.5px solid #E7EFF8',
      maxWidth: 460,
      width: '100%',
    }}
  >
    <div
      style={{
        fontFamily: 'Urbanist,sans-serif',
        fontWeight: 800,
        fontSize: 11,
        color: '#fff',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        background: s.color === '#E9FA49' ? '#051A2E' : s.color,
        padding: '5px 12px',
        borderRadius: 99,
        display: 'inline-block',
        marginBottom: 14,
      }}
    >
      {s.n}
    </div>
    <h3
      style={{
        fontFamily: 'Urbanist,sans-serif',
        fontWeight: 700,
        fontSize: 26,
        color: '#051A2E',
        lineHeight: 1.2,
        margin: '0 0 12px',
      }}
    >
      {s.title}
    </h3>
    <p
      style={{
        fontFamily: 'Roboto,sans-serif',
        fontSize: 15,
        color: '#3A4F63',
        lineHeight: 1.65,
        margin: '0 0 20px',
      }}
    >
      {s.body}
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {s.details.map((d) => (
        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#051A2E' }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: s.color === '#E9FA49' ? '#E9FA49' : `${s.color}22`,
              color: s.color === '#E9FA49' ? '#051A2E' : s.color,
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            {checkIcon}
          </div>
          <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#3A4F63' }}>{d}</span>
        </div>
      ))}
    </div>
  </div>
);
