import { Eyebrow } from '@/components/shared/Eyebrow';
import { PRICING_PLANS, PRICING_NOTE } from '@/data/home-content';

export const Pricing = () => (
  <section id="prezzi" style={{ padding: '80px 0' }}>
    <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
      <Eyebrow color="#1CB886">Prezzi trasparenti</Eyebrow>
      <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 14px' }}>
        Un prezzo. Zero sorprese.
      </h2>
      <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, color: '#3A4F63', lineHeight: 1.6 }}>
        Paghi solo le lezioni che fai. Nessun abbonamento, nessun contratto annuale.
      </p>
    </div>

    <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1120, margin: '0 auto', alignItems: 'start' }}>
      {PRICING_PLANS.map((plan, idx) => {
        const dark = !!plan.dark;
        const titleColor = dark ? '#E9FA49' : '#051A2E';
        const priceColor = dark ? '#fff' : '#051A2E';
        const perColor = dark ? '#C9DCF1' : '#576C80';
        const blurbColor = dark ? '#C9DCF1' : '#576C80';
        const checkColor = dark ? '#E9FA49' : '#1CB886';
        const itemColor = dark ? '#C9DCF1' : '#3A4F63';
        return (
          <div
            key={plan.name}
            className="pricing-card"
            data-reveal=""
            style={{
              background: dark ? '#051A2E' : '#fff',
              borderRadius: 32,
              padding: '44px 40px',
              boxShadow: dark ? 'none' : '0 2px 8px rgba(5,26,46,.06)',
              position: 'relative',
              overflow: 'hidden',
              ['--reveal-delay' as string]: `${idx * 100}ms`,
            }}
          >
            {dark && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: '#9E89FB',
                  opacity: 0.2,
                }}
              />
            )}
            {plan.recommended && (
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  background: '#E9FA49',
                  color: '#051A2E',
                  fontFamily: 'Urbanist,sans-serif',
                  fontWeight: 800,
                  fontSize: 11,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  borderRadius: 99,
                  transform: 'rotate(6deg)',
                }}
              >
                Consigliato
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, position: 'relative' }}>
              <div aria-hidden="true" style={{ width: 14, height: 14, borderRadius: '50%', background: plan.dot }} />
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 15, color: titleColor }}>{plan.name}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '8px 0 4px', position: 'relative' }}>
              <span className="pricing-price" style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 72, color: priceColor, letterSpacing: '-.03em', lineHeight: 1 }}>
                {plan.price}
              </span>
              <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: perColor }}>{plan.per}</span>
              {plan.strike && (
                <span style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 14, color: '#576C80', textDecoration: 'line-through', marginLeft: 12 }}>
                  {plan.strike}
                </span>
              )}
            </div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: blurbColor, marginBottom: 28, position: 'relative' }}>
              {plan.blurb}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'grid', gap: 12, position: 'relative' }}>
              {plan.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Roboto,sans-serif', fontSize: 15, color: itemColor }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={checkColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#prenota"
              className={plan.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}
              style={{ width: '100%', padding: '18px', fontSize: 14, textDecoration: 'none', display: 'inline-block', textAlign: 'center', boxSizing: 'border-box' }}
            >
              {plan.cta}
            </a>
          </div>
        );
      })}
    </div>

    <div style={{ textAlign: 'center', marginTop: 24, fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>
      {PRICING_NOTE}
    </div>

    <div style={{ textAlign: 'center', marginTop: 12, fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>
      Studente o under 25?{' '}
      <a href="#prenota" style={{ color: '#051A2E', fontWeight: 700, textDecoration: 'underline' }}>
        Sconto 15% — scrivimi.
      </a>
    </div>
  </section>
);
