export type HowItWorksStep = {
  n: string;
  title: string;
  body: string;
  color: string;
  icon: 'heart' | 'calendar' | 'git-merge';
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  { n: '01', title: 'Mi scrivi cosa ti serve', body: 'Due righe bastano: la lingua, il tuo obiettivo, quando puoi studiare. Ti rispondo in 24 ore.', color: '#9E89FB', icon: 'heart' },
  { n: '02', title: 'Sessione di orientamento', body: '30 minuti insieme per capire il livello di partenza e disegnare il percorso giusto per te.', color: '#E9FA49', icon: 'calendar' },
  { n: '03', title: 'Si comincia, al tuo ritmo', body: 'Lezioni 1-a-1 online o a Latina. Materiali su misura. Orari flessibili. Progressi visibili.', color: '#1CB886', icon: 'git-merge' },
];

export const CERTIFICATIONS: string[] = [
  'Cambridge CELTA',
  'DELE · Instituto Cervantes',
  'Goethe · C2',
  'DELF · C1',
  'CILS · esaminatrice',
];

export type Promise = {
  icon: 'user-check' | 'calendar' | 'heart' | 'layers';
  color: string;
  title: string;
  body: string;
};

export const EASE_PROMISES: Promise[] = [
  { icon: 'user-check', color: '#9E89FB', title: 'Un metodo solo per te', body: 'Niente programmi standard. Ogni lezione parte dai tuoi obiettivi reali — colloquio, viaggio, esame, famiglia.' },
  { icon: 'calendar', color: '#E9FA49', title: 'Orari che rispettano la tua vita', body: 'Lezioni 1-a-1 al mattino, sera, weekend. Sposti quando vuoi, fino a 24h prima.' },
  { icon: 'heart', color: '#FF09AD', title: 'Senza ansia da libro', body: 'Materiali fatti da me, adatti al tuo livello. Canzoni, podcast, serie che ti piacciono. La lingua che vivi.' },
  { icon: 'layers', color: '#1CB886', title: 'Progressi che vedi', body: 'Report ogni 4 lezioni. Sai sempre dove sei, dove stai andando e quando arriverai.' },
];

export type Stat = { n: string; l: string; c: string };

export const WHY_DEBORA_STATS: Stat[] = [
  { n: '12+', l: 'anni di insegnamento', c: '#9E89FB' },
  { n: '500+', l: 'studenti seguiti', c: '#E9FA49' },
  { n: '9', l: 'lingue parlate', c: '#1CB886' },
];

export type Testimonial = {
  img: string;
  name: string;
  role: string;
  lang: string;
  color: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { img: 'image-student-2.jpg', name: 'Giulia M.', role: 'Product Manager · Londra', lang: 'inglese', color: '#9E89FB',
    quote: 'In tre mesi ho passato il colloquio a Londra. Debora mi ha dato struttura, fiducia e un inglese che finalmente suona mio.' },
  { img: 'image-student-4.jpg', name: 'Marco R.', role: 'Architetto · Milano', lang: 'spagnolo', color: '#E9FA49',
    quote: 'Metodo chiaro, tanta pratica orale, zero ansia. Ora parlo con i colleghi di Madrid senza pensare in italiano.' },
  { img: 'image-student-1.jpg', name: 'Elena V.', role: 'Studentessa · Berlino', lang: 'tedesco', color: '#FF09AD',
    quote: 'Avevo paura della grammatica tedesca. Debora l\'ha resa la parte che amo di più. Goethe B2 superato al primo colpo.' },
  { img: 'image-student-3.jpg', name: 'Lorenzo B.', role: 'Chef · Parigi', lang: 'francese', color: '#1CB886',
    quote: 'Cercavo un corso che funzionasse con i miei turni. Debora ha trovato il modo. Oggi gestisco la mia brigata in francese.' },
];

export type PricingPlan = {
  name: string;
  dot: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  cta: string;
  variant: 'ghost' | 'primary';
  dark?: boolean;
  recommended?: boolean;
  strike?: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Singola',
    dot: '#9E89FB',
    price: '€40',
    per: '/ora',
    blurb: 'Quando vuoi, senza impegno.',
    features: [
      'Lezione 1-a-1, online o a Latina',
      'Materiali personalizzati inclusi',
      'Sposti fino a 24h prima',
      'Report di progresso ogni 4 lezioni',
    ],
    cta: 'Prenota una lezione',
    variant: 'ghost',
  },
  {
    name: 'Pacchetto 10',
    dot: '#E9FA49',
    price: '€34',
    per: '/ora',
    blurb: '10 lezioni · risparmi €60 · validi 4 mesi.',
    features: [
      'Tutto della lezione singola',
      'Piano di studio personalizzato',
      'Accesso al gruppo WhatsApp studenti',
      'Simulazione esame (se applicabile)',
      'Garanzia soddisfatti o rimborsati sulle prime 2 lezioni',
    ],
    cta: 'Inizia con il pacchetto',
    variant: 'primary',
    dark: true,
    recommended: true,
    strike: '€40',
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ_HOME: FaqItem[] = [
  { q: 'Le lezioni sono online o in presenza?', a: 'Entrambe. A Latina ci vediamo nel mio studio. Altrove, su Zoom o Google Meet — con materiali condivisi in tempo reale.' },
  { q: 'Cosa succede se devo spostare una lezione?', a: 'Nessun problema se mi avvisi almeno 24 ore prima. La riprogrammiamo quando vuoi. Tutto tramite un calendario online che gestisci tu.' },
  { q: 'Posso preparare un esame specifico (IELTS, DELE, Goethe…)?', a: 'Sì. Sono esaminatrice certificata per CILS e ho preparato studenti a IELTS, TOEFL, Cambridge, DELE, DELF, Goethe, TestDaF. Guardiamo la data esame e costruiamo il percorso a ritroso.' },
  { q: 'Per bambini e ragazzi?', a: 'Lavoro con ragazzi dai 14 anni in su. Per i più piccoli posso consigliarti colleghi specializzati.' },
  { q: 'Quando pago?', a: 'Prima della prima lezione. Bonifico o PayPal, nessun abbonamento ricorrente.' },
];

export const FORM_LANGUAGE_OPTIONS: string[] = [
  'inglese', 'spagnolo', 'francese', 'tedesco', 'italiano L2',
  'portoghese', 'portoghese brasiliano', 'russo', 'cinese', 'arabo',
];
