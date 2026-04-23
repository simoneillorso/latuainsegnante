import type { CSSProperties } from 'react';

type Props = {
  color: string;
  size?: number;
  style?: CSSProperties;
};

export const Dot = ({ color, size = 10, style }: Props) => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      ...style,
    }}
  />
);
