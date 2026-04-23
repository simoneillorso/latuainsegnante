import type { CSSProperties } from 'react';

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  style?: CSSProperties;
};

export const Breadcrumb = ({ items, style }: Props) => (
  <nav
    aria-label="Percorso di navigazione"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '24px 0 16px',
      fontFamily: 'Urbanist,sans-serif',
      fontSize: 13,
      fontWeight: 600,
      color: '#576C80',
      ...style,
    }}
  >
    {items.map((c, i) => {
      const last = i === items.length - 1;
      return (
        <span key={`${c.label}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {c.href && !last ? (
            <a href={c.href} style={{ color: '#576C80' }}>{c.label}</a>
          ) : (
            <span style={{ color: last ? '#051A2E' : '#576C80' }} aria-current={last ? 'page' : undefined}>{c.label}</span>
          )}
          {!last && <span aria-hidden="true" style={{ opacity: 0.5 }}>/</span>}
        </span>
      );
    })}
  </nav>
);
