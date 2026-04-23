import type { ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
};

export const Eyebrow = ({ children, color = '#576C80', style }: Props) => (
  <div
    style={{
      fontFamily: 'Urbanist,sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {children}
  </div>
);
