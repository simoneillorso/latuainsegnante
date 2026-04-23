import { Eyebrow } from '@/components/shared/Eyebrow';
import { CREDENTIALS } from '@/data/about-content';

export const Credentials = () => (
  <section style={{ padding: '60px 0' }}>
    <div
      style={{
        background: '#fff',
        borderRadius: 32,
        padding: '56px 56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 48,
        alignItems: 'center',
      }}
    >
      <div>
        <Eyebrow>Certificazioni & studi</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 36, color: '#051A2E', lineHeight: 1.1, letterSpacing: '-.02em', margin: '14px 0 16px' }}>
          I pezzi di carta
          <br />che contano davvero.
        </h2>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#3A4F63', lineHeight: 1.6, margin: 0 }}>
          Non sostituiscono il metodo, ma ci tengo a dirti che studiare bene le lingue l'ho imparato anch'io — in aula, da altri professori, esame dopo esame.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        {CREDENTIALS.map((c) => (
          <div key={c.t} style={{ background: '#F4F7FA', borderRadius: 16, padding: '16px 18px' }}>
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 15, color: '#051A2E' }}>{c.t}</div>
            <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80', marginTop: 4, lineHeight: 1.4 }}>{c.s}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
