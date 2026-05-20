import { useState, type FormEvent } from 'react';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { FORM_LANGUAGE_OPTIONS } from '@/data/home-content';

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
