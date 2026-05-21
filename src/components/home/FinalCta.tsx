import { useState, type FormEvent } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { FORM_LANGUAGE_OPTIONS } from '@/data/home-content';
import { waLink } from '@/data/site';

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#051A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const FinalCta = () => {
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('inglese');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="prenota" style={{ padding: '80px 0' }}>
      <div
        className="card-padded-xl"
        style={{
          background: '#E9FA49',
          borderRadius: 40,
          padding: '80px 72px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, right: -40, width: 280, height: 280, borderRadius: '50%', background: '#FF09AD', opacity: 0.15 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -30, left: 40, width: 100, height: 100, borderRadius: '50%', background: '#9E89FB', opacity: 0.35 }} />
        <svg aria-hidden="true" style={{ position: 'absolute', top: 30, right: 100, opacity: 0.5 }} width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="26" fill="none" stroke="#051A2E" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
        </svg>

        <div style={{ position: 'relative' }}>
          <Eyebrow color="#051A2E">Si parte?</Eyebrow>
          <h2 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 800, fontSize: 64, lineHeight: 1, color: '#051A2E', letterSpacing: '-.03em', margin: '14px 0 16px' }}>
            Prenota
            <br />la tua lezione.
          </h2>
          <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 17, fontWeight: 500, color: '#051A2E', lineHeight: 1.55, maxWidth: 440 }}>
            Scegli la lingua, mandami la tua email e ti rispondo in 24 ore con disponibilità e dettagli.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 28, fontFamily: 'Roboto,sans-serif', fontSize: 14, color: '#051A2E', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{checkIcon} 1-a-1</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{checkIcon} 60 min</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{checkIcon} Online o Latina</div>
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 28,
              padding: '16px 26px',
              borderRadius: 99,
              background: '#25D366',
              color: '#fff',
              fontFamily: 'Urbanist,sans-serif',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              boxShadow: '0 8px 20px rgba(37,211,102,.35)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.52 11.97c-.21.58-1.2 1.11-1.68 1.18-.43.06-.97.09-1.56-.1-.36-.11-.82-.26-1.41-.52-2.48-1.07-4.11-3.57-4.23-3.74-.12-.16-1.01-1.34-1.01-2.56 0-1.22.63-1.82.86-2.07.23-.25.49-.31.66-.31l.48.01c.15 0 .36-.06.56.42.2.5.7 1.72.76 1.84.06.12.1.26.02.43-.08.16-.12.27-.25.41-.12.14-.26.32-.37.43-.12.13-.25.26-.11.51.15.25.64 1.06 1.38 1.72.94.84 1.74 1.11 1.99 1.23.25.13.4.11.54-.06.15-.16.63-.72.79-.97.17-.25.33-.21.56-.13.22.09 1.44.69 1.69.81.25.12.41.18.47.28.07.11.07.6-.14 1.18Z" />
            </svg>
            Oppure scrivimi su WhatsApp
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          aria-label="Prenota una lezione"
          style={{ background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 20px 40px rgba(5,26,46,.12)', position: 'relative' }}
        >
          <div style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 16, color: '#051A2E', marginBottom: 16 }}>Prenota ora</div>
          <label
            htmlFor="cta-lang"
            style={{ display: 'block', fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}
          >
            Quale lingua?
          </label>
          <select
            id="cta-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ width: '100%', padding: '14px 18px', borderRadius: 14, border: '1.5px solid #E7EFF8', background: '#F4F7FA', fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#051A2E', fontWeight: 500, marginBottom: 16, cursor: 'pointer' }}
          >
            {FORM_LANGUAGE_OPTIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
          <label
            htmlFor="cta-email"
            style={{ display: 'block', fontFamily: 'Urbanist,sans-serif', fontSize: 12, fontWeight: 700, color: '#576C80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}
          >
            La tua email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@email.it"
            style={{ width: '100%', padding: '14px 18px', borderRadius: 14, border: '1.5px solid #E7EFF8', background: '#F4F7FA', fontFamily: 'Roboto,sans-serif', fontSize: 15, color: '#051A2E', fontWeight: 500, marginBottom: 18, boxSizing: 'border-box' }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '18px', fontSize: 15, background: sent ? '#1CB886' : '#051A2E', color: '#fff' }}
          >
            {sent ? '✓ Ricevuto — ti scrivo oggi' : 'Prenota la lezione'}
          </button>
          <div style={{ fontFamily: 'Roboto,sans-serif', fontSize: 12, color: '#576C80', marginTop: 12, textAlign: 'center' }}>
            Risposta entro 24h. I tuoi dati restano con me.
          </div>
        </form>
      </div>
    </section>
  );
};
