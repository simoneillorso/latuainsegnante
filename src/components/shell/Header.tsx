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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 8);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div style={{ position: 'sticky', top: 16, zIndex: 50, padding: '0 0 16px' }}>
      <header
        className="header-pill"
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
        <nav className="nav-desktop" aria-label="Principale" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
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
        <a
          href="#prenota"
          className="btn-primary header-cta-desktop"
          style={{ padding: '14px 22px', fontSize: 14, textDecoration: 'none', display: 'inline-block' }}
        >
          Prenota una lezione
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            background: '#051A2E',
            color: '#fff',
            border: 0,
            borderRadius: 99,
            width: 44,
            height: 44,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </header>

      <div
        id="mobile-drawer"
        className={`nav-drawer${open ? ' open' : ''}`}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: 6,
          background: '#fff',
          borderRadius: 24,
          padding: 14,
          marginTop: 10,
          boxShadow: '0 16px 40px rgba(5,26,46,.14)',
        }}
      >
        {NAV.map((n) => {
          const isActive = n.label === activeLabel;
          return (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              aria-current={isActive ? 'page' : undefined}
              style={{
                fontFamily: 'Urbanist,sans-serif',
                fontWeight: 600,
                fontSize: 16,
                color: isActive ? '#051A2E' : '#3A4F63',
                padding: '14px 16px',
                borderRadius: 14,
                background: isActive ? '#F4F7FA' : 'transparent',
                textDecoration: 'none',
              }}
            >
              {n.label}
            </a>
          );
        })}
        <a
          href="#prenota"
          onClick={() => setOpen(false)}
          className="btn-primary"
          style={{
            marginTop: 6,
            padding: '16px 18px',
            fontSize: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          Prenota una lezione
        </a>
      </div>
    </div>
  );
};
