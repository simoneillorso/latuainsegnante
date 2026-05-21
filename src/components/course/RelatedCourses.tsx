import { Eyebrow } from '@/components/shared/Eyebrow';
import type { RelatedCourse } from '@/data/course-types';
import { coursePlans } from '@/data/pricing';

type Props = {
  items: RelatedCourse[];
};

export const RelatedCourses = ({ items }: Props) => (
  <section style={{ padding: '60px 0' }}>
    <div style={{ marginBottom: 32 }}>
      <Eyebrow>Potrebbe interessarti</Eyebrow>
      <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.1, color: '#051A2E', letterSpacing: '-.02em', margin: '12px 0 0' }}>
        Altri corsi simili.
      </h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {items.map((c) => (
        <a
          key={c.title}
          href={`/corsi/${c.slug}`}
          className="related-card"
          style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 8px rgba(5,26,46,.06)', display: 'block', transition: 'transform .22s, box-shadow .22s' }}
        >
          <div style={{ height: 180, background: `url('/assets/${c.img}') center/cover`, position: 'relative' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `url('/assets/lang-${c.slug}.png') center/cover`,
                border: '2px solid #fff',
              }}
            />
          </div>
          <div style={{ padding: '22px 24px 24px' }}>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 11, fontWeight: 700, color: '#576C80', letterSpacing: '.14em', textTransform: 'uppercase' }}>{c.eyebrow}</div>
            <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 22, color: '#051A2E', margin: '8px 0 8px', lineHeight: 1.2 }}>{c.title}</h3>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginBottom: 16 }}>{c.meta}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ background: c.color, color: '#051A2E', fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, borderRadius: 99, padding: '8px 14px' }}>da €{coursePlans(c.slug)[1]!.perHour}/ora</span>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, color: '#051A2E', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Scopri
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>

    <style>{`
      .related-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 36px rgba(5,26,46,.12);
      }
    `}</style>
  </section>
);
