import type {
  Course,
  Lesson,
  ForWhomItem,
  Outcome,
  TeacherStat,
  Review,
  RelatedCourse,
  HeroTitle,
} from './course-types';
import type { FaqItem } from './home-content';

export const LANG_SLUG = 'cinese';

export const HERO_TITLE: HeroTitle = {
  line1: 'Cinese',
  line2: 'possibile',
  line3: 'anche per te.',
};

export const COURSE: Course = {
  eyebrow: 'Cinese · HSK 1→4',
  title: 'Cinese mandarino — dal pinyin al business, un passo alla volta',
  subtitle: 'Un corso per demistificare il mandarino: toni, caratteri, HSK. In 12 lezioni parti da zero e arrivi fino a un HSK 2 solido con prospettiva su HSK 3-4.',
  lang: 'cinese',
  level: 'A0 → HSK 2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 19,
  price: 520,
  pricePer: 48,
  rating: 5.0,
  reviews: 12,
  color: '#FF09AD',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Business, viaggio, cultura, HSK: decidiamo l\'angolo e misuriamo curiosità e tempo disponibile.', dur: '60 min' },
  { n: 2, title: 'Toni senza terrore', focus: 'I 4 toni in pratica, con coppie minime. Tecniche per sentirli e riprodurli.', dur: '60 min' },
  { n: 3, title: 'Pinyin completo', focus: 'Iniziali, finali, pronunce particolari (q, x, zh). Leggi qualsiasi parola senza dubbi.', dur: '60 min' },
  { n: 4, title: 'Primi caratteri — radici', focus: 'Metodo per decifrare caratteri: radicali base, ordine dei tratti, logica visiva.', dur: '60 min' },
  { n: 5, title: 'Presentarsi in cinese', focus: '你好，我叫 …, 我是 …, 我从 … 来. Strutture base per dire chi sei.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione di una breve presentazione e confronto con la lezione 1. Progressi concreti.', dur: '60 min' },
  { n: 7, title: 'Numeri, date, tempo', focus: 'Dal 1 al 10.000 senza sbagliare, date, ore, giorni della settimana. Prezzi e quantità.', dur: '60 min' },
  { n: 8, title: 'Cibo, ristorante, taxi', focus: 'Ordinare in un ristorante cinese, prendere un taxi, chiedere la WeChat al fornitore.', dur: '60 min' },
  { n: 9, title: 'Business cinese — basics', focus: 'Scambiarsi biglietti da visita, email semplici, chat su WeChat. Galateo di lavoro.', dur: '60 min' },
  { n: 10, title: 'HSK 2 — visione d\'insieme', focus: 'Panoramica di ciò che serve per HSK 2 e roadmap verso HSK 3-4 se è il tuo obiettivo.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Conversazione simulata (meeting, viaggio, presentazione) di 30-40 minuti. Feedback dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'App (Pleco, HelloChinese), podcast, libri di lettura. Routine per continuare in autonomia.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Esercizi di scrittura dei caratteri',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🏭', title: 'Lavori con fornitori cinesi', body: 'Produzione, import-export. Vuoi capire cosa si dice quando i tuoi clienti parlano tra loro.' },
  { icon: '🧳', title: 'Viaggi in Cina per lavoro', body: 'Fiere, meeting, cene. Vuoi presentarti senza passare per qualcuno "che non ci prova".' },
  { icon: '🎓', title: 'Prepari HSK 1, 2 o 3', body: 'Strutturiamo il percorso con simulazioni identiche al formato HSK (ascolto, lettura, scrittura).' },
  { icon: '🎨', title: 'Ami cultura e filosofia', body: 'Calligrafia, cinema, filosofia. La lingua è il modo per entrare nella loro testa.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Dominerai i 4 toni', d: 'Non li confondi più nelle parole comuni. L\'orecchio si è allenato a sentirli in sequenza veloce.' },
  { n: '02', t: 'Leggerai il pinyin', d: 'Qualsiasi parola scritta in pinyin la leggi con tono corretto. Base per tutto il resto.' },
  { n: '03', t: 'Riconoscerai 300+ caratteri', d: 'I più comuni. Decodifichi cartelli, menu semplici, nomi di negozi.' },
  { n: '04', t: 'Ti presenterai in cinese', d: 'Conversazione base di 5 minuti sul tuo profilo, lavoro, provenienza. Fluente e con intonazione giusta.' },
  { n: '05', t: 'Gestirai situazioni di viaggio', d: 'Taxi, ristorante, hotel, piccola emergenza. Non dipendi da traduttori.' },
  { n: '06', t: 'Saprai costruire il percorso verso HSK 3-4', d: 'Dopo il corso hai mappa, materiali e routine per arrivarci con lezioni successive o in autonomia.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'HSK 5', l: 'certificata' },
  { n: '5+', l: 'anni di insegnamento' },
  { n: '8', l: 'mesi vissuti a Shanghai' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Carlo V.', role: 'Export manager · Prato', img: 'image-student-3.jpg', stars: 5, date: '2 mesi fa',
    text: 'Gestisco relazioni con fornitori cinesi da dieci anni. Sempre in inglese. Dopo questo corso ho detto due frasi in cinese a un cliente e mi ha fatto sconti che non avevo mai visto. Investimento che si ripaga.' },
  { name: 'Giulia M.', role: 'Studentessa Ca\' Foscari', img: 'image-student-2.jpg', stars: 5, date: '1 mese fa',
    text: 'Preparavo HSK 2. Passato con 190/200. Il modulo sui caratteri mi ha cambiato il modo di studiare: finalmente non sono più rebus senza chiave.' },
  { name: 'Matteo R.', role: 'Designer · Milano', img: 'image-student-4.jpg', stars: 5, date: '3 settimane fa',
    text: 'Faccio consulenze per brand cinesi. Capire i feedback in lingua madre è un altro mondo. Piano chiaro per arrivare a HSK 4 in un anno. Continuo con Debora.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'I toni sono davvero un muro?', a: 'Lo sono nelle prime 3 lezioni. Poi l\'orecchio si abitua. Lavoriamo con registrazioni e coppie minime — senza moralismi.' },
  { q: 'Quanti caratteri imparerò?', a: 'Con studio 2-3 ore settimana tra una lezione e l\'altra, 300-500 caratteri attivi. Abbastanza per HSK 2.' },
  { q: 'Imparerò a scrivere o solo a leggere?', a: 'Entrambe. Iniziamo con scrittura a mano su radicali, poi passiamo al pinyin-input (come fanno i cinesi oggi). Equilibrio sensato.' },
  { q: 'Posso preparare HSK 3 direttamente?', a: 'Se parti già da qualche base di pinyin e pochi caratteri sì. Ne parliamo nella chiamata gratuita.' },
  { q: 'Rate?', a: 'Sì, due o tre rate senza interessi.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'arabo', title: 'Arabo standard moderno', eyebrow: 'Arabo · MSA', meta: '12 lezioni · A0–A2', price: '€ 500', color: '#E9FA49', img: 'image-student-1.jpg' },
  { slug: 'russo', title: 'Russo da zero', eyebrow: 'Russo · Fondamenta', meta: '12 lezioni · A0–A2', price: '€ 460', color: '#FFAE00', img: 'image-student-3.jpg' },
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
];
