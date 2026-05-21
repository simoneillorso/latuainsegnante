export type HowItWorksStep = {
  n: string;
  title: string;
  body: string;
  color: string;
  icon: 'heart' | 'calendar' | 'git-merge';
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  { n: '01', title: 'Mi scrivi cosa ti serve', body: 'Due righe bastano: la lingua, il tuo obiettivo e quando puoi studiare. Ti rispondo in giornata.', color: '#9E89FB', icon: 'heart' },
  { n: '02', title: 'Costruisco il percorso su di te', body: 'Niente programmi standard: materiali, ritmo e contenuti cuciti sul tuo obiettivo reale.', color: '#FF09AD', icon: 'calendar' },
  { n: '03', title: 'Si comincia, al tuo ritmo', body: 'Lezioni 1-a-1 online o a Latina. Orari flessibili e progressi che vedi lezione dopo lezione.', color: '#1CB886', icon: 'git-merge' },
];

export const CERTIFICATIONS: string[] = [
  'Cambridge C2 · CELTA',
  'DELE C2 · Instituto Cervantes',
  'Goethe-Zertifikat',
  'HSK · cinese',
  'DITALS · italiano L2',
];

export type Promise = {
  icon: 'user-check' | 'calendar' | 'heart' | 'layers';
  color: string;
  title: string;
  body: string;
};

export const EASE_PROMISES: Promise[] = [
  { icon: 'user-check', color: '#9E89FB', title: 'Un metodo cucito su di te', body: 'Niente programmi preconfezionati. Partiamo dal tuo obiettivo reale, colloquio, viaggio, esame o famiglia, e costruiamo solo ciò che ti serve davvero.' },
  { icon: 'calendar', color: '#E9FA49', title: 'Orari che rispettano la tua vita', body: 'Lezioni 1-a-1 al mattino, di sera o nel weekend. Sposti quando vuoi fino a 24h prima, senza penali e senza stress.' },
  { icon: 'heart', color: '#FF09AD', title: 'Mai più ansia da libro', body: 'Materiali creati da me sul tuo livello: le canzoni, i podcast e le serie che ami. Impari la lingua che vivi, non quella dei manuali.' },
  { icon: 'layers', color: '#1CB886', title: 'Progressi che vedi nero su bianco', body: 'Un report di progresso ogni 4 lezioni. Sai sempre dove sei, dove stai andando e quanto manca al traguardo.' },
];

export type Stat = { n: string; l: string; c: string };

export const WHY_DEBORA_STATS: Stat[] = [
  { n: '12+', l: 'anni di insegnamento', c: '#9E89FB' },
  { n: '260+', l: 'studenti seguiti', c: '#E9FA49' },
  { n: '9', l: 'lingue parlate', c: '#1CB886' },
];

export type Testimonial = {
  name: string;
  role: string;
  lang: string;
  color: string;
  quote: string;
};

// Recensioni reali da Google (profilo Debora Vichi · 92 recensioni).
// Niente foto stock: la fiducia la dà la recensione verificata, non un volto inventato.
export const TESTIMONIALS: Testimonial[] = [
  { name: 'Rossella C.', role: 'Recensione Google', lang: 'tedesco', color: '#FF09AD',
    quote: 'Con lei studiare il tedesco è come andare sulle montagne russe: pensi sia spaventoso e alla fine ti diverti e vorresti rifarlo. Rende leggero ogni momento.' },
  { name: 'Alessia B.', role: 'Recensione Google', lang: 'inglese', color: '#9E89FB',
    quote: 'Ha colmato lacune che non avevo mai notato, nemmeno avendo fatto il liceo linguistico. Lezioni stimolanti, in vista di un possibile lavoro all\'estero.' },
  { name: 'Yolette C.', role: 'Recensione Google', lang: 'spagnolo', color: '#E9FA49',
    quote: 'In 10 lezioni ha insegnato a mio figlio il programma di un anno di spagnolo. Disponibile, professionale e molto divertente. Non c\'è due senza tre!' },
  { name: 'Vittorio S.', role: 'Recensione Google', lang: 'tedesco', color: '#1CB886',
    quote: 'Partito da zero col tedesco, col pacchetto ore mi ha portato a un A2 quasi B1, perfetto per il mio scopo. Soddisfatto del lavoro svolto, la consiglio.' },
  { name: 'Pamela R.', role: 'Recensione Google', lang: 'francese', color: '#9E89FB',
    quote: 'Le lezioni online di francese per mio figlio hanno dato risultati molto positivi: ha fatto la presentazione e ha preso 9. Straconsigliata!' },
  { name: 'Simone D.', role: 'Recensione Google', lang: 'cinese', color: '#E9FA49',
    quote: 'Ottima insegnante di cinese: insieme a lei ho messo le basi per un futuro studio della lingua. Sempre gentile, disponibile e molto preparata.' },
];

// Quante recensioni reali esistono (Google) — claim verificabile, usato nel carosello.
export const TESTIMONIALS_COUNT = 92;

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
    name: 'Lezione singola',
    dot: '#9E89FB',
    price: '€50',
    per: '/ora',
    blurb: 'Quando vuoi, senza impegno.',
    features: [
      'Lezione 1-a-1, online o a Latina',
      'Materiali personalizzati inclusi',
      'Sposti fino a 24h prima',
      'Nessun vincolo, paghi solo questa',
    ],
    cta: 'Prenota una lezione',
    variant: 'ghost',
  },
  {
    name: 'Percorso Intermedio',
    dot: '#E9FA49',
    price: '€45',
    per: '/ora',
    blurb: '8 lezioni · €360 · risparmi €40 · valido 3 mesi.',
    features: [
      'Tutto della lezione singola',
      'Piano di studio personalizzato',
      'Accesso al gruppo WhatsApp studenti',
      'Report di progresso ogni 4 lezioni',
    ],
    cta: 'Inizia il percorso',
    variant: 'ghost',
    strike: '€50',
  },
  {
    name: 'Percorso Full',
    dot: '#1CB886',
    price: '€40',
    per: '/ora',
    blurb: '16 lezioni · €640 · risparmi €160 · valido 6 mesi.',
    features: [
      'Tutto del Percorso Intermedio',
      'Simulazione esame (se applicabile)',
      'Garanzia soddisfatti sulle prime 2 lezioni',
      'Priorità nella scelta degli orari',
    ],
    cta: 'Scegli il percorso Full',
    variant: 'primary',
    dark: true,
    recommended: true,
    strike: '€50',
  },
];

// Maggiorazione per le lingue meno comuni: +€5 a lezione su ogni tier.
export const PRICING_SURCHARGE = {
  langs: ['cinese', 'arabo', 'russo'],
  perLesson: 5,
};

export const PRICING_NOTE = 'Cinese, arabo e russo: +€5 a lezione su ogni percorso.';

export type FaqItem = { q: string; a: string };

export const FAQ_HOME: FaqItem[] = [
  { q: 'Le lezioni sono online o in presenza?', a: 'Entrambe. A Latina ci vediamo nel mio studio. Altrove, su Zoom o Google Meet — con materiali condivisi in tempo reale.' },
  { q: 'Cosa succede se devo spostare una lezione?', a: 'Nessun problema se mi avvisi almeno 24 ore prima. La riprogrammiamo quando vuoi. Tutto tramite un calendario online che gestisci tu.' },
  { q: 'Posso preparare un esame specifico (IELTS, DELE, Goethe…)?', a: 'Sì. Ho certificazioni C2 e abilitazioni in più lingue (Cambridge CELTA, DELE C2, Goethe, HSK, DITALS per l\'italiano) e ho preparato studenti a IELTS, TOEFL, Cambridge, DELE, DELF, Goethe, TestDaF. Guardiamo la data esame e costruiamo il percorso a ritroso.' },
  { q: 'Per bambini e ragazzi?', a: 'Lavoro con ragazzi dai 14 anni in su. Per i più piccoli posso consigliarti colleghi specializzati.' },
  { q: 'Come prenoto la prima lezione?', a: 'Mi scrivi dal modulo o su WhatsApp con la lingua e il tuo obiettivo. Concordiamo giorno e ora, e partiamo. I dettagli pratici li vediamo insieme al primo contatto.' },
];

export const FORM_LANGUAGE_OPTIONS: string[] = [
  'inglese', 'spagnolo', 'francese', 'tedesco', 'italiano L2',
  'portoghese', 'portoghese brasiliano', 'russo', 'cinese', 'arabo',
];
