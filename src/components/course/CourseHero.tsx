import { Squiggle } from '@/components/shared/Squiggle';
import { BookingCard } from './BookingCard';
import type { Course, HeroTitle } from '@/data/course-types';

type Meta = { label: string; c: string; icon: string };

type Props = {
  course: Course;
  langSlug: string;
  heroTitle: HeroTitle;
};

export const CourseHero = ({ course, langSlug, heroTitle }: Props) => {
  const META: Meta[] = [
    { label: course.duration, c: '#E9FA49', icon: '📚' },
    { label: `${course.lessonLen} · 1-a-1`, c: '#9E89FB', icon: '⏱' },
    { label: course.format, c: '#1CB886', icon: '💻' },
    { label: course.level, c: '#FFAE00', icon: '🎯' },
  ];

  return (
    <section style={{ position: 'relative', padding: '20px 0 40px' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 60, left: '44%', width: 12, height: 12, borderRadius: '50%', background: '#FF09AD' }} />
      <span aria-hidden="true" style={{ position: 'absolute', top: 240, left: '56%', width: 8, height: 8, borderRadius: '50%', background: '#E9FA49' }} />
      <span aria-hidden="true" style={{ position: 'absolute', top: 440, left: '50%', width: 10, height: 10, borderRadius: '50%', background: '#1CB886' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#fff',
              borderRadius: 99,
              padding: '8px 18px 8px 10px',
              boxShadow: '0 2px 8px rgba(5,26,46,.06)',
              marginBottom: 24,
            }}
          >
            <div aria-hidden="true" style={{ width: 28, height: 28, borderRadius: 8, background: `url('/assets/lang-${langSlug}.png') center/cover` }} />
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 13, fontWeight: 700, color: '#051A2E' }}>{course.eyebrow}</div>
            <div aria-hidden="true" style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9DCF1' }} />
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 13, fontWeight: 600, color: '#576C80' }}>{course.level}</div>
          </div>

          <h1 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 68, lineHeight: 1.02, color: '#051A2E', letterSpacing: '-.025em', margin: '0 0 22px' }}>
            {heroTitle.line1}
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>{heroTitle.line2}</span>
              <Squiggle color="#E9FA49" width={440} style={{ position: 'absolute', left: 0, right: 0, bottom: -10, width: '100%' }} />
            </span>
            <br />
            {heroTitle.line3}
          </h1>

          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 19, fontWeight: 500, color: '#3A4F63', lineHeight: 1.55, maxWidth: 560, margin: '0 0 32px' }}>
            {course.subtitle}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            {META.map((m) => (
              <div
                key={m.label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', borderRadius: 99, padding: '10px 16px', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}
              >
                <span aria-hidden="true" style={{ width: 22, height: 22, borderRadius: 6, background: m.c, display: 'grid', placeItems: 'center', fontSize: 12 }}>
                  {m.icon}
                </span>
                <span style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 600, fontSize: 14, color: '#051A2E' }}>{m.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFAE00" aria-hidden="true">
                  <path d="M12 2l2.9 6.9L22 10l-5 4.9 1.2 7.1L12 18.5 5.8 22 7 14.9 2 10l7.1-1.1z" />
                </svg>
              ))}
              <span style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 14, fontWeight: 700, color: '#051A2E', marginLeft: 4 }}>{course.rating}</span>
              <span style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginLeft: 4 }}>({course.reviews} recensioni)</span>
            </div>
            <div aria-hidden="true" style={{ width: 1, height: 20, background: '#C9DCF1' }} />
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#576C80' }}>
              <b style={{ color: '#051A2E', fontFamily: 'Urbanist,sans-serif', fontWeight: 700 }}>{course.students}</b> studenti l'hanno fatto con me
            </div>
          </div>
        </div>

        <BookingCard course={course} />
      </div>
    </section>
  );
};
