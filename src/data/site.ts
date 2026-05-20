// Unica fonte di verità per i dati di contatto e identità del sito.
// I valori marcati TODO sono placeholder: vanno sostituiti con i dati reali
// di Debora (vedi brief.md nella root del progetto). Cambiare qui = cambia ovunque.

export const SITE = {
  name: 'Debora Vichi',
  tagline: 'Insegnante di lingue',

  // TODO(brief): email reale di Debora
  email: 'ciao@latuainsegnante.com',

  // TODO(brief): numero reale (WhatsApp). Formato display e formato wa.me (solo cifre, prefisso incluso).
  whatsappDisplay: '+39 333 000 0000',
  whatsappNumber: '39333000000',
  // TODO(brief): telefono per schema/JSON-LD (formato E.164 con trattini ok)
  phoneSchema: '+39-333-000-0000',

  city: 'Latina',
  country: 'IT',
  // TODO(brief): indirizzo studio per lezioni in presenza (via, civico, CAP)
  address: 'Latina, Italia',

  responseTime: 'Rispondo entro 24 ore',
  availability: { days: 'Lun – Sab', hours: '8:00 – 21:00' },

  // TODO(brief): P.IVA / C.F. reali
  piva: '06123450480',

  // TODO(brief): URL reali dei profili social (lascia '#' se non esiste il profilo)
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    tiktok: '#',
  },
} as const;
