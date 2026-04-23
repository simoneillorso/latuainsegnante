import { Eyebrow } from '@/components/shared/Eyebrow';
import { STORY_CHAPTERS } from '@/data/about-content';

export const Story = () => (
  <section style={{ padding: '80px 0' }}>
    <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
      <Eyebrow color="#9E89FB">La mia storia</Eyebrow>
      <h2
        style={{
          fontFamily: 'Urbanist,sans-serif',
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1.05,
          color: '#051A2E',
          letterSpacing: '-.02em',
          margin: '14px 0 16px',
        }}
      >
        Come sono arrivata qui.
      </h2>
      <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, color: '#3A4F63', lineHeight: 1.6 }}>
        Sei tappe, sei lezioni imparate sulla mia pelle. Prendile come un caffè insieme.
      </p>
    </div>

    <div style={{ position: 'relative', maxWidth: 960, margin: '0 auto' }}>
      {/* Gradient connecting line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: 30,
          bottom: 30,
          width: 3,
          transform: 'translateX(-1.5px)',
          background: 'linear-gradient(to bottom, #9E89FB 0%, #E9FA49 25%, #1CB886 50%, #FF09AD 70%, #FFAE00 85%, #9E89FB 100%)',
          borderRadius: 99,
          opacity: 0.5,
        }}
      />

      {STORY_CHAPTERS.map((c, i) => {
        const left = i % 2 === 0;
        return (
          <div
            key={c.year}
            style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 24, marginBottom: 48, alignItems: 'start' }}
          >
            {/* Card slot */}
            <div style={{ gridColumn: left ? 1 : 3, textAlign: left ? 'right' : 'left', order: left ? 0 : 2 }}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 24,
                  padding: '24px 26px',
                  boxShadow: '0 4px 20px rgba(5,26,46,.08)',
                  display: 'inline-block',
                  textAlign: 'left',
                  maxWidth: 420,
                  width: '100%',
                }}
              >
                {/* Emoji badge */}
                <div
                  aria-hidden="true"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: c.color + '28',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 26,
                    marginBottom: 16,
                  }}
                >
                  {c.emoji}
                </div>

                {/* Year + age row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div
                    style={{
                      background: c.color,
                      color: '#051A2E',
                      fontFamily: 'Urbanist,sans-serif',
                      fontWeight: 800,
                      fontSize: 13,
                      padding: '5px 12px',
                      borderRadius: 99,
                      letterSpacing: '.06em',
                    }}
                  >
                    {c.year}
                  </div>
                  <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80' }}>· {c.age}</div>
                </div>

                <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 22, color: '#051A2E', margin: '0 0 10px', lineHeight: 1.2 }}>{c.title}</h3>
                <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.65, margin: '0 0 16px' }}>{c.body}</p>

                {/* Lesson pull-quote */}
                <div
                  style={{
                    borderLeft: `3px solid ${c.color}`,
                    paddingLeft: 14,
                    marginTop: 4,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto Slab,serif',
                      fontStyle: 'italic',
                      fontSize: 13,
                      color: '#051A2E',
                      lineHeight: 1.5,
                      margin: 0,
                      opacity: 0.75,
                    }}
                  >
                    «{c.lesson}»
                  </p>
                </div>
              </div>
            </div>

            {/* Center node */}
            <div style={{ gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 22, gap: 8 }}>
              <div
                aria-hidden="true"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: c.color,
                  boxShadow: `0 0 0 4px #fff, 0 0 0 8px ${c.color}50`,
                  flexShrink: 0,
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 11, color: '#051A2E' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Empty slot (opposite side) */}
            <div style={{ gridColumn: left ? 3 : 1, order: left ? 2 : 0 }} />
          </div>
        );
      })}
    </div>
  </section>
);
