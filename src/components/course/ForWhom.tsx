import { Eyebrow } from '@/components/shared/Eyebrow';
import type { ForWhomItem } from '@/data/course-types';

type Props = {
  items: ForWhomItem[];
};

export const ForWhom = ({ items }: Props) => (
  <section style={{ padding: '60px 0' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, gap: 40 }}>
      <div style={{ maxWidth: 680 }}>
        <Eyebrow color="#9E89FB">Per chi è questo corso</Eyebrow>
        <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 52, lineHeight: 1.05, color: '#051A2E', letterSpacing: '-.02em', margin: '14px 0 0' }}>
          Se ti sei riconosciuto
          <br />in una di queste, è per te.
        </h2>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
      {items.map((it) => (
        <div key={it.title} style={{ background: '#fff', borderRadius: 24, padding: '28px 24px', boxShadow: '0 2px 8px rgba(5,26,46,.06)' }}>
          <div
            aria-hidden="true"
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#F4F7FA',
              display: 'grid',
              placeItems: 'center',
              fontSize: 30,
              marginBottom: 18,
            }}
          >
            {it.icon}
          </div>
          <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 19, color: '#051A2E', lineHeight: 1.25, margin: '0 0 8px' }}>{it.title}</h3>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#3A4F63', lineHeight: 1.6, margin: 0 }}>{it.body}</p>
        </div>
      ))}
    </div>
  </section>
);
