import { Eyebrow } from '@/components/shared/Eyebrow';
import type { TeacherStat } from '@/data/course-types';

type Props = {
  stats: TeacherStat[];
};

export const CourseTeacher = ({ stats }: Props) => (
  <section style={{ padding: '60px 0' }}>
    <div
      style={{
        background: '#fff',
        borderRadius: 40,
        padding: '64px 56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 56,
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-8px -8px -8px -8px', background: '#E9FA49', borderRadius: 32, transform: 'rotate(-2deg)' }} />
        <div
          role="img"
          aria-label="Debora Vichi al lavoro"
          style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4/5', background: "url('/assets/image-11.jpg') center/cover" }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            background: '#fff',
            borderRadius: 20,
            padding: '14px 18px',
            boxShadow: '0 10px 24px rgba(5,26,46,.12)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div aria-hidden="true" style={{ width: 40, height: 40, borderRadius: '50%', background: "url('/assets/logo-debora-vichi.png') center/cover" }} />
          <div>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 14, color: '#051A2E' }}>Debora Vichi</div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80' }}>La tua insegnante</div>
          </div>
        </div>
      </div>

      <div>
        <Eyebrow color="#FF09AD">Chi ti insegna</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 48, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
          Ho lavorato dentro aziende.
          <br />So che lingua serve davvero.
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 560 }}>
          Dodici anni di lezioni private e consulenze linguistiche per team internazionali. Ho preparato manager, founder, ricercatori e neolaureati. Non ti insegno il "business English da manuale" — ti insegno quello che ho sentito davvero nelle call e nei meeting in cui sono stata.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,auto)', gap: 32, justifyContent: 'start', margin: '28px 0 28px' }}>
          {stats.map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 34, color: '#051A2E', lineHeight: 1, letterSpacing: '-.02em' }}>{s.n}</div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <a
          href="/chi-sono"
          className="btn-ghost"
          style={{ padding: '16px 26px', fontSize: 14, whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}
        >
          Leggi la mia storia
        </a>
      </div>
    </div>
  </section>
);
