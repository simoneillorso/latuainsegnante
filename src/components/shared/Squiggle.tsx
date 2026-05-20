import type { CSSProperties } from 'react';

type Props = {
  color?: string;
  width?: number | string;
  style?: CSSProperties;
  draw?: boolean;
};

export const Squiggle = ({ color = '#E9FA49', width = 260, style, draw = true }: Props) => (
  <svg
    viewBox="0 0 260 16"
    width={width}
    height={16}
    preserveAspectRatio="none"
    aria-hidden="true"
    className={draw ? 'squiggle-draw' : undefined}
    style={{ display: 'block', ...style }}
  >
    <path
      d="M2 9 Q 22 -2, 42 8 T 82 8 T 122 8 T 162 8 T 202 8 T 258 8"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);
