import { useState } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import type { Language } from '@/data/languages';

type Filter = 'tutte' | 'popolari';

export type CourseCard = {
  lang: Language;
  price: number;
  level: string;
  eyebrow: string;
};

type Props = {
  courses: CourseCard[];
};

const Card = ({ card }: { card: CourseCard }) => {
  const [hover, setHover] = useState(false);
  const { lang, price, level, eyebrow } = card;
  return (
    <a
      href={`/corsi/${lang.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`Scopri il corso di ${lang.label}`}
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: 18,
        position: 'relative',
        boxShadow: hover ? '0 18px 36px rgba(5,26,46,.12)' : '0 2px 8px rgba(5,26,46,.06)',
        transform: hover ? 'translateY(-8px) rotate(-1deg)' : 'none',
        transition: 'all .3s cubic-bezier(.2,.8,.2,1)',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {lang.popular && (
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
          height: 140,
          borderRadius: 16,
          background: `url('/assets/lang-${lang.slug}.png') center/cover`,
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
          {lang.hello} 👋
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 11, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase' }}>
          {eyebrow}
        </div>
        <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 20, color: '#051A2E', marginTop: 6 }}>
          {lang.label}
        </div>
        <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 4 }}>
          {level} · {lang.students} studenti con me
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, paddingTop: 14, borderTop: '1px solid #E7EFF8' }}>
        <span
          style={{
            background: '#F4F7FA',
            color: '#051A2E',
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 99,
            padding: '8px 14px',
          }}
        >
          da € {price}
        </span>
        <div
          style={{
            fontFamily: 'Urbanist,sans-serif',
            fontWeight: 700,
            fontSize: 13,
            color: '#051A2E',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          Scopri
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform .22s' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export const CourseMenuGrid = ({ courses }: Props) => {
  const [filter, setFilter] = useState<Filter>('tutte');
  const filtered = filter === 'popolari' ? courses.filter((c) => c.lang.popular) : courses;

  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Tutti i corsi</Eyebrow>
          <h1 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 16px' }}>
            Dieci lingue,
            <br />un'unica{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>insegnante</span>
              <span
                aria-hidden="true"
                style={{ position: 'absolute', left: 0, right: 0, bottom: 12, height: 14, background: '#FF09AD', zIndex: 0, opacity: 0.25, borderRadius: 4 }}
              />
            </span>.
          </h1>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 18, color: '#3A4F63', lineHeight: 1.6, maxWidth: 600, marginTop: 20 }}>
            Scegli la lingua da cui ripartire. Ogni corso è un percorso di 12 lezioni 1-a-1, online o a Firenze, su misura del tuo obiettivo reale — che sia il lavoro, un viaggio lungo o tornare a casa con radici più chiare.
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Filtro corsi"
          style={{ display: 'flex', gap: 8, background: '#fff', borderRadius: 99, padding: 6, boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
        >
          {(['tutte', 'popolari'] as const).map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? '#051A2E' : 'transparent',
                color: filter === f ? '#fff' : '#051A2E',
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: 600,
                borderRadius: 99,
                border: 0,
                cursor: 'pointer',
                fontFamily: 'Urbanist,sans-serif',
              }}
            >
              {f[0]!.toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {filtered.map((c) => (
          <Card key={c.lang.slug} card={c} />
        ))}
      </div>
    </section>
  );
};
