import { useEffect, useState } from 'react';
import { GREETINGS } from '@/data/languages';

export const RotatingGreeting = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % GREETINGS.length), 1800);
    return () => clearInterval(t);
  }, []);
  const g = GREETINGS[i]!;
  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        padding: '2px 18px',
        background: g.color,
        borderRadius: 99,
        color: '#051A2E',
        fontWeight: 700,
        transition: 'background .5s cubic-bezier(.2,.8,.2,1)',
        minWidth: 180,
        textAlign: 'center',
      }}
    >
      <span
        key={i}
        style={{ display: 'inline-block', animation: 'pop .5s cubic-bezier(.2,.8,.2,1)' }}
      >
        {g.word}
      </span>
    </span>
  );
};
