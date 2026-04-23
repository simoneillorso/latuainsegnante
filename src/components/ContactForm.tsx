import { useState, type FormEvent } from 'react';
import { FORM_LANGUAGE_OPTIONS } from '@/data/home-content';

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Urbanist,sans-serif',
  fontSize: 12,
  fontWeight: 700,
  color: '#576C80',
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: 14,
  border: '1.5px solid #E7EFF8',
  background: '#F4F7FA',
  fontFamily: 'Roboto,sans-serif',
  fontSize: 15,
  color: '#051A2E',
  fontWeight: 500,
  marginBottom: 18,
  boxSizing: 'border-box',
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lang, setLang] = useState('inglese');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div
        style={{
          background: '#fff',
          borderRadius: 32,
          padding: '64px 48px',
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(5,26,46,.08)',
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: '#E9FA49',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 24px',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#051A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: 'Urbanist,sans-serif', fontWeight: 700, fontSize: 28, color: '#051A2E', margin: '0 0 12px' }}>
          Messaggio ricevuto!
        </h3>
        <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 16, color: '#576C80', lineHeight: 1.6, margin: 0 }}>
          Ti rispondo entro 24 ore con disponibilità e dettagli sul percorso.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Modulo di contatto"
      style={{
        background: '#fff',
        borderRadius: 32,
        padding: '48px 40px',
        boxShadow: '0 4px 24px rgba(5,26,46,.08)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <div>
          <label htmlFor="ct-name" style={labelStyle}>Nome</label>
          <input
            id="ct-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mario Rossi"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="ct-email" style={labelStyle}>Email</label>
          <input
            id="ct-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mario@email.it"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <div>
          <label htmlFor="ct-phone" style={labelStyle}>Telefono (opzionale)</label>
          <input
            id="ct-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+39 333 000 0000"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="ct-lang" style={labelStyle}>Quale lingua?</label>
          <select
            id="ct-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            {FORM_LANGUAGE_OPTIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor="ct-message" style={labelStyle}>Il tuo messaggio</label>
      <textarea
        id="ct-message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        placeholder="Raccontami il tuo obiettivo, il livello di partenza, e quando vorresti iniziare..."
        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
      />

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', padding: '18px', fontSize: 16 }}
      >
        Invia messaggio
      </button>
      <p style={{ fontFamily: 'Roboto,sans-serif', fontSize: 13, color: '#576C80', marginTop: 14, textAlign: 'center' }}>
        Risposta entro 24h. I tuoi dati restano con me.
      </p>
    </form>
  );
};
