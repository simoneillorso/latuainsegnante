import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { LANGS, type Language } from '@/data/languages';

const LangTile = ({ l, delay }: { l: Language; delay: number }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={`/corsi/${l.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`Scopri il corso di ${l.label}`}
      data-reveal=""
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: 16,
        position: 'relative',
        boxShadow: hover ? '0 18px 36px rgba(5,26,46,.12)' : '0 2px 8px rgba(5,26,46,.06)',
        transform: hover ? 'translateY(-8px) rotate(-1deg)' : undefined,
        transition: 'box-shadow .3s cubic-bezier(.2,.8,.2,1), transform .3s cubic-bezier(.2,.8,.2,1)',
        display: 'block',
        ['--reveal-delay' as string]: `${delay}ms`,
      }}
    >
      {l.popular && (
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            background: '#FF09AD',
            color: '#fff',
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 700,
            fontSize: 10,
            padding: '5px 10px',
            borderRadius: 99,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            zIndex: 2,
            transform: 'rotate(6deg)',
          }}
        >
          Top
        </div>
      )}
      <div
        style={{
          height: 116,
          borderRadius: 16,
          background: `url('/assets/lang-${l.slug}.png') center/cover`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            background: '#fff',
            borderRadius: 99,
            padding: '4px 10px',
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 700,
            fontSize: 12,
            color: '#051A2E',
            opacity: hover ? 1 : 0,
            transform: hover ? 'translateY(0)' : 'translateY(4px)',
            transition: 'all .22s',
          }}
        >
          {l.hello} 👋
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
        <div>
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 17, color: '#051A2E' }}>{l.label}</div>
          <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80', marginTop: 2 }}>{l.meta}</div>
        </div>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#051A2E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ transform: hover ? 'translateX(2px)' : 'none', transition: 'transform .22s' }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  );
};

export const Languages = () => {
  return (
    <section id="lingue" style={{ padding: '80px 0 40px' }}>
      <div className="lang-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Corsi</Eyebrow>
          <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 16px' }}>
            La lingua giusta
            <br />è quella che ti{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>emoziona</span>
              <span
                aria-hidden="true"
                style={{ position: 'absolute', left: 0, right: 0, bottom: 12, height: 14, background: '#FF09AD', zIndex: 0, opacity: 0.25, borderRadius: 4 }}
              />
            </span>.
          </h2>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 18, color: '#3A4F63', lineHeight: 1.6, maxWidth: 560, marginTop: 20 }}>
            Una sola insegnante per dieci lingue. Che sia per un viaggio, per il lavoro o per le tue radici di famiglia, costruiamo insieme il percorso giusto, dalla prima parola fino al tuo obiettivo.
          </p>
        </div>
      </div>

      <div className="lang-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
        {LANGS.map((l, i) => (
          <LangTile key={l.slug} l={l} delay={i * 50} />
        ))}
      </div>
    </section>
  );
};
