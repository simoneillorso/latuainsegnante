import { Eyebrow } from '@/components/shared/Eyebrow';
import { OFF_HOURS_TAGS } from '@/data/about-content';

export const OffHours = () => (
  <section style={{ padding: '60px 0' }}>
    <div
      style={{
        background: '#fff',
        borderRadius: 40,
        padding: '64px 56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: 56,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div
          role="img"
          aria-label="Momento quotidiano di Debora"
          style={{ borderRadius: 20, aspectRatio: '3/4', background: "url('/assets/image-10.jpg') center/cover" }}
        />
        <div
          role="img"
          aria-label="Paesaggio di Latina"
          style={{ borderRadius: 20, aspectRatio: '3/4', background: "url('/assets/image-12.jpg') center/cover", marginTop: 32 }}
        />
      </div>
      <div>
        <Eyebrow color="#FFAE00">Quando non insegno</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 46, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 20px' }}>
          La lingua non finisce
          <br />in aula.
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.7, margin: '0 0 16px' }}>
          Vivo a Latina, cammino tra il centro e le mie librerie di lingua preferite. Leggo romanzi in V.O. (in questo momento: un giallo norvegese che non capisco del tutto, ed è perfetto così).
        </p>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#3A4F63', lineHeight: 1.7, margin: '0 0 24px' }}>
          Ogni anno viaggio in un paese di cui non parlo la lingua, mi iscrivo a un corso intensivo e mi rimetto dall'altra parte del banco. Mi serve per ricordarmi cosa provi tu.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {OFF_HOURS_TAGS.map((t) => (
            <div
              key={t}
              style={{ background: '#F4F7FA', borderRadius: 99, padding: '10px 16px', fontFamily: 'Urbanist,sans-serif', fontWeight: 600, fontSize: 13, color: '#051A2E' }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
