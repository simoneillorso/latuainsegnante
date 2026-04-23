import { useEffect, useState } from 'react';

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Lingue', href: '/corsi/' },
  { label: 'Il percorso', href: '/il-percorso' },
  { label: 'Contattami', href: '/contattami' },
];

type Props = {
  activeLabel?: string;
};

export const Header = ({ activeLabel = 'Home' }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 8);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  return (
    <div style={{ position: 'sticky', top: 16, zIndex: 50, padding: '0 0 16px' }}>
      <header
        style={{
          background: '#fff',
          borderRadius: 99,
          padding: '10px 10px 10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled ? '0 10px 30px rgba(5,26,46,.10)' : '0 2px 8px rgba(5,26,46,.06)',
          transition: 'box-shadow .3s',
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }} aria-label="latuainsegnante — home">
          <img src="/assets/logo-wordmark.png" alt="Debora Vichi — la tua insegnante di lingue" style={{ height: 30 }} />
        </a>
        <nav aria-label="Principale" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {NAV.map((n) => {
            const isActive = n.label === activeLabel;
            return (
              <a
                key={n.label}
                href={n.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  fontFamily: 'Urbanist,sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  color: isActive ? '#051A2E' : '#3A4F63',
                  padding: '10px 16px',
                  borderRadius: 99,
                  background: isActive ? '#F4F7FA' : 'transparent',
                  transition: 'all .22s cubic-bezier(.2,.8,.2,1)',
                }}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <a href="#prenota" className="btn-primary" style={{ padding: '14px 22px', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
          Prenota una lezione
        </a>
      </header>
    </div>
  );
};
