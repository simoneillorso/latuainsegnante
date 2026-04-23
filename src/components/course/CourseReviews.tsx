import { Eyebrow } from '@/components/shared/Eyebrow';
import type { Review } from '@/data/course-types';

type Props = {
  reviews: Review[];
  rating: number;
  reviewCount: number;
};

export const CourseReviews = ({ reviews, rating, reviewCount }: Props) => (
  <section style={{ padding: '60px 0' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 40, flexWrap: 'wrap' }}>
      <div>
        <Eyebrow>Recensioni verificate</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 44, lineHeight: 1.1, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 0' }}>
          <b style={{ fontWeight: 800 }}>{rating}/5</b> su {reviewCount} studenti
          <br />che l'hanno finito.
        </h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ display: 'flex' }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: `url('/assets/image-student-${i + 1}.jpg') center/cover`,
                border: '3px solid #C9DCF1',
                marginLeft: i === 0 ? 0 : -10,
              }}
            />
          ))}
        </div>
        <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>storie reali, profili verificati</div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
      {reviews.map((r) => (
        <article key={r.name} style={{ background: '#fff', borderRadius: 24, padding: '28px 26px', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}>
          <div style={{ display: 'flex', gap: 3, marginBottom: 14 }} aria-label={`Valutazione ${r.stars} su 5`}>
            {Array.from({ length: r.stars }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFAE00" aria-hidden="true">
                <path d="M12 2l2.9 6.9L22 10l-5 4.9 1.2 7.1L12 18.5 5.8 22 7 14.9 2 10l7.1-1.1z" />
              </svg>
            ))}
          </div>
          <blockquote style={{ fontFamily: 'Roboto Slab,serif', fontStyle: 'italic', fontSize: 16, color: '#051A2E', lineHeight: 1.6, margin: '0 0 20px' }}>
            «{r.text}»
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #E7EFF8' }}>
            <div aria-hidden="true" style={{ width: 42, height: 42, borderRadius: '50%', background: `url('/assets/${r.img}') center/cover` }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 14, color: '#051A2E' }}>{r.name}</div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80' }}>{r.role}</div>
            </div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80' }}>{r.date}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
