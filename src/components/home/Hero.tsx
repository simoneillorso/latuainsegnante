import { useEffect, useRef, useState } from 'react';
import { Dot } from '@/components/shared/Dot';
import { Squiggle } from '@/components/shared/Squiggle';
import { RotatingGreeting } from '@/components/shell/RotatingGreeting';

type FlagProps = {
  slug: string;
  top?: number;
  left?: number;
  right?: number;
  size: number;
  rot: number;
  delay: number;
  mouseY: number;
  intensity: number;
};

const FloatingFlag = ({ slug, top, left, right, size, rot, delay, mouseY, intensity }: FlagProps) => (
  <div
    aria-hidden="true"
    className="hero-flag"
    style={{
      position: 'absolute',
      top,
      left,
      right,
      width: size,
      height: size,
      borderRadius: 18,
      background: `url('/assets/lang-${slug}.png') center/cover`,
      boxShadow: '0 12px 24px rgba(5,26,46,.15)',
      transform: `rotate(${rot}deg) translateY(${mouseY * intensity}px)`,
      animation: `float 6s ease-in-out ${delay}s infinite`,
      transition: 'transform .3s ease-out',
      zIndex: 1,
    }}
  />
);

export const Hero = () => {
  const [mouseY, setMouseY] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax only on fine-pointer devices (desktop). Skips touch/mobile.
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      setMouseY((e.clientY - r.top - r.height / 2) / r.height);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={wrapRef} className="hero-section" style={{ position: 'relative', padding: '48px 0 80px' }}>
      <FloatingFlag slug="francese" top={40} left={-30} size={68} rot={-12} delay={0} mouseY={mouseY} intensity={30} />
      <FloatingFlag slug="spagnolo" top={280} right={-40} size={74} rot={14} delay={0.4} mouseY={mouseY} intensity={-25} />
      <FloatingFlag slug="tedesco" top={560} left={38} size={56} rot={-8} delay={0.8} mouseY={mouseY} intensity={20} />

      <span aria-hidden="true" className="hero-dot" style={{ position: 'absolute', top: 160, left: '52%', width: 14, height: 14, borderRadius: '50%', background: '#FF09AD', boxShadow: '0 6px 12px rgba(255,9,173,.3)' }} />
      <span aria-hidden="true" className="hero-dot" style={{ position: 'absolute', top: 100, left: '38%', width: 8, height: 8, borderRadius: '50%', background: '#E9FA49' }} />
      <span aria-hidden="true" className="hero-dot" style={{ position: 'absolute', top: 500, left: '46%', width: 10, height: 10, borderRadius: '50%', background: '#9E89FB' }} />

      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="hero-copy">
          <div className="hero-pill-with" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 99, padding: '8px 16px 8px 8px', boxShadow: '0 2px 8px rgba(5,26,46,.06)', marginBottom: 28 }}>
            <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: '50%', background: "url('/assets/logo-debora-vichi.png') center/cover" }} />
            <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 13, fontWeight: 600, color: '#051A2E' }}>
              Con <span style={{ color: '#1CB886' }}>Debora</span> · lezioni 1-a-1
            </div>
            <Dot color="#1CB886" size={8} style={{ marginLeft: 2, boxShadow: '0 0 0 4px rgba(28,184,134,.18)' }} />
          </div>

          <h1 className="hero-h1" style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 78, lineHeight: 1, color: '#051A2E', letterSpacing: '-.025em', margin: 0 }}>
            Dì <RotatingGreeting />
            <br />
            alla lingua che
            <br />
            hai sempre{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>voluto</span>
              <Squiggle color="#E9FA49" width={220} style={{ position: 'absolute', left: 0, right: 0, bottom: -4, width: '100%' }} />
            </span>{' '}
            parlare.
          </h1>

          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 19, fontWeight: 500, color: '#3A4F63', lineHeight: 1.55, marginTop: 28, maxWidth: 520 }}>
            Lezioni private 1-a-1 con <b style={{ color: '#051A2E', fontWeight: 700 }}>Debora Vichi</b>. Un metodo costruito sui tuoi obiettivi e sui tuoi tempi, senza libri che mettono ansia e senza orari rigidi.
          </p>

          <div className="hero-ctas" style={{ display: 'flex', gap: 12, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#prenota" className="btn-primary cta-breathe" style={{ padding: '20px 30px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              Prenota la tua lezione
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="/corsi" className="btn-ghost" style={{ padding: '18px 26px', fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              Scopri tutti i corsi
            </a>
          </div>

          <div className="hero-stars" style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 48 }}>
            <div style={{ display: 'flex' }}>
              {['image-student-1.jpg', 'image-student-2.jpg', 'image-student-3.jpg', 'image-student-4.jpg'].map((img, i) => (
                <div
                  key={img}
                  aria-hidden="true"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: `url('/assets/${img}') center/cover`,
                    border: '3px solid #C9DCF1',
                    marginLeft: i === 0 ? 0 : -12,
                  }}
                />
              ))}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: '#051A2E',
                  border: '3px solid #C9DCF1',
                  marginLeft: -12,
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'Urbanist,sans-serif',
                  fontWeight: 700,
                  fontSize: 12,
                  color: '#fff',
                }}
              >
                +260
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFAE00" aria-hidden="true">
                    <path d="M12 2l2.9 6.9L22 10l-5 4.9 1.2 7.1L12 18.5 5.8 22 7 14.9 2 10l7.1-1.1z" />
                  </svg>
                ))}
                <span style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 14, fontWeight: 700, color: '#051A2E', marginLeft: 4 }}>4.9/5</span>
              </div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 2 }}>260 studenti hanno imparato una nuova lingua</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" style={{ position: 'relative', minHeight: 640 }}>
          <div
            aria-hidden="true"
            className="hero-blob"
            style={{
              position: 'absolute',
              right: -20,
              top: 10,
              width: 520,
              height: 560,
              background: 'linear-gradient(165deg, #9E89FB 0%, #7b63ef 100%)',
              borderRadius: '56% 44% 52% 48% / 60% 58% 42% 40%',
              animation: 'blob 18s ease-in-out infinite',
            }}
          />
          <div
            aria-hidden="true"
            className="hero-dot"
            style={{
              position: 'absolute',
              right: -80,
              top: -30,
              width: 110,
              height: 110,
              borderRadius: '50%',
              background: '#E9FA49',
              transform: `translateY(${mouseY * -15}px)`,
            }}
          />
          <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true" className="hero-decor" style={{ position: 'absolute', left: -30, top: 260 }}>
            <circle cx="44" cy="44" r="40" fill="none" stroke="#1CB886" strokeWidth="3" strokeDasharray="3 8" strokeLinecap="round" />
          </svg>

          <picture>
            <source media="(max-width: 640px)" srcSet="/assets/hero-debora-mobile.webp" type="image/webp" />
            <source srcSet="/assets/hero-debora.webp" type="image/webp" />
            <img
              src="/assets/hero-debora.png"
              alt="Debora Vichi sorride alla camera, ritratto a figura intera"
              fetchPriority="high"
              decoding="async"
              className="hero-portrait"
              style={{
                position: 'absolute',
                right: 0,
                bottom: -20,
                height: 700,
                objectFit: 'contain',
                zIndex: 2,
                filter: 'drop-shadow(0 24px 40px rgba(5,26,46,.12))',
                transform: `translateY(${mouseY * -8}px)`,
                transition: 'transform .3s ease-out',
              }}
            />
          </picture>

          <div
            className="hero-card-slot"
            style={{
              position: 'absolute',
              left: -30,
              top: 80,
              background: '#fff',
              borderRadius: 20,
              padding: '16px 18px',
              boxShadow: '0 12px 30px rgba(5,26,46,.12)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              zIndex: 3,
              transform: `rotate(-4deg) translateY(${mouseY * 8}px)`,
              transition: 'transform .3s ease-out',
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1CB886', display: 'grid', placeItems: 'center', fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 18, color: '#fff' }}>
              4.9
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FFAE00" aria-hidden="true">
                    <path d="M12 2l2.9 6.9L22 10l-5 4.9 1.2 7.1L12 18.5 5.8 22 7 14.9 2 10l7.1-1.1z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 3 }}>★ Google · 260+ studenti</div>
            </div>
          </div>

          <div
            className="hero-card-extra"
            style={{
              position: 'absolute',
              right: -40,
              bottom: 140,
              background: '#fff',
              borderRadius: 20,
              padding: '16px 18px',
              boxShadow: '0 12px 30px rgba(5,26,46,.12)',
              zIndex: 3,
              minWidth: 200,
              transform: `rotate(3deg) translateY(${mouseY * -10}px)`,
              transition: 'transform .3s ease-out',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontSize: 11, fontWeight: 700, color: '#576C80', letterSpacing: '.12em', textTransform: 'uppercase' }}>Livello</div>
              <div style={{ background: '#9E89FB', color: '#051A2E', fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 11, borderRadius: 99, padding: '3px 10px' }}>B1 → B2</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
              <div style={{ flex: 1, height: 8, borderRadius: 99, background: '#E7EFF8', overflow: 'hidden' }}>
                <div style={{ width: '68%', height: '100%', background: 'linear-gradient(90deg,#1CB886,#E9FA49)', borderRadius: 99 }} />
              </div>
              <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 13, color: '#051A2E' }}>68%</div>
            </div>
          </div>

          <div className="hero-card-extra" style={{ position: 'absolute', right: 20, top: -10, zIndex: 3, transform: 'rotate(8deg)' }}>
            <div
              style={{
                background: '#FF09AD',
                color: '#fff',
                fontFamily: 'Urbanist,sans-serif',
                fontWeight: 800,
                fontSize: 18,
                padding: '10px 18px',
                borderRadius: 99,
                boxShadow: '0 8px 20px rgba(255,9,173,.35)',
              }}
            >
              Ciao, sono Debora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
