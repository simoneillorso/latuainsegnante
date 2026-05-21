// Unica fonte di verità per i dati di contatto e identità del sito.
// I valori marcati TODO sono placeholder: vanno sostituiti con i dati reali
// di Debora (vedi brief.md nella root del progetto). Cambiare qui = cambia ovunque.

export const SITE = {
  name: 'Debora Vichi',
  tagline: 'Insegnante di lingue',

  email: 'deboravichi20@gmail.com',

  whatsappDisplay: '+39 366 526 7109',
  whatsappNumber: '393665267109',
  phoneSchema: '+39-366-526-7109',

  city: 'Latina',
  country: 'IT',
  address: 'Viale dello Statuto 41, 04100 Latina LT',

  responseTime: 'Rispondo entro 24 ore',
  availability: { days: 'Lun – Ven', hours: '9:00 – 13:00 · 15:00 – 20:00' },

  piva: '03328610591',

  // tiktok '#' → nessun profilo: il Footer salta gli href '#'
  social: {
    instagram: 'https://www.instagram.com/languagespecialist_/',
    facebook: 'https://www.facebook.com/profile.php?id=100027949437327',
    linkedin: 'https://www.linkedin.com/in/debora-vichi-22b23b177/',
    tiktok: '#',
  },
} as const;

// Link WhatsApp con messaggio precompilato. Unico punto di verità per ogni CTA WhatsApp.
export const waLink = (msg = 'Ciao Debora! Vorrei informazioni sulle lezioni di lingua.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
