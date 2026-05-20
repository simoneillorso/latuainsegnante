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

export const LANG_SLUG = 'spagnolo';

export const HERO_TITLE: HeroTitle = {
  line1: 'Spagnolo che',
  line2: 'si sente',
  line3: 'vero.',
};

export const COURSE: Course = {
  eyebrow: 'Spagnolo · Lavoro & viaggi',
  title: 'Spagnolo in scioltezza — lavoro, vita, América Latina',
  subtitle: 'Dal cliente di Madrid al partner di Buenos Aires, parli senza impalcature. Una lingua viva, con il tuo accento.',
  lang: 'spagnolo',
  level: 'A2 → B2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 72,
  price: 420,
  pricePer: 42,
  rating: 4.9,
  reviews: 36,
  color: '#E9FA49',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Una conversazione libera per capire il tuo punto di partenza reale e disegnare il percorso sui tuoi contesti.', dur: '60 min' },
  { n: 2, title: 'Pronuncia e ritmo', focus: 'La "r" senza ansia, vocali pure, stress tonico. Un accento che non si stanca dopo cinque minuti.', dur: '60 min' },
  { n: 3, title: 'Tempi del passato — davvero', focus: 'Pretérito, imperfecto, perfecto: quando usarli senza pensarci. Con storie vere da raccontare.', dur: '60 min' },
  { n: 4, title: 'Lavoro: riunioni e mail', focus: 'Agenda, follow-up, proposte. Spagnolo di ufficio, non di libro di testo.', dur: '60 min' },
  { n: 5, title: 'Small talk che rompe il ghiaccio', focus: 'Con clienti spagnoli, messicani, argentini: cosa chiedere, cosa non chiedere mai.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione guidata e confronto con la lezione 1. Vedi i progressi nero su bianco.', dur: '60 min' },
  { n: 7, title: 'Spagnolo d\'America', focus: 'Differenze chiave tra España e Latinoamérica. Vocabolario, usi, malintesi da evitare.', dur: '60 min' },
  { n: 8, title: 'Negoziare in modo naturale', focus: 'Softeners, proporre alternative, dire "no" con eleganza. Role-play su un caso reale.', dur: '60 min' },
  { n: 9, title: 'Congiuntivo senza paura', focus: 'Il grande spauracchio, scomposto in tre pattern che userai ogni giorno.', dur: '60 min' },
  { n: 10, title: 'Linguaggio del tuo settore', focus: 'Costruiamo il tuo glossario di lavoro, esercizi su articoli/documenti reali.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Meeting o conversazione da viaggio di 30-45 minuti registrata, feedback dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Routine settimanale di mantenimento, serie/podcast su misura, follow-up a 3 mesi.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Playlist di serie spagnole e latinoamericane',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🌎', title: 'Lavori con Spagna o Latam', body: 'Clienti, fornitori, colleghi. Vuoi smettere di passare all\'inglese quando la call si fa lunga.' },
  { icon: '✈️', title: 'Viaggi a lungo in Sud America', body: 'Non vuoi solo "cavartela": vuoi fare amicizia, chiedere informazioni, capire le barzellette.' },
  { icon: '🎓', title: 'Stai preparando il DELE', body: 'Strutturiamo il percorso verso B2 o C1 con simulazioni sulle parti orali e scritte.' },
  { icon: '❤️', title: 'Vuoi rispolverarlo', body: 'L\'hai studiato al liceo, lo parli "un po\'" ma ti blocchi. Riapriamo il rubinetto con calma.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Parlerai in modo fluido', d: 'Non traduci più dall\'italiano. Pensi in spagnolo, anche quando sei stanco.' },
  { n: '02', t: 'Capirai anche i veloci', d: 'Madrileni a 200 parole al minuto o caraibici che mangiano le consonanti: non ti perdi più il filo.' },
  { n: '03', t: 'Scriverai email eleganti', d: 'Tono giusto per ogni contesto, formule di cortesia native, nessuna traduzione goffa.' },
  { n: '04', t: 'Userai i congiuntivi giusti', d: 'Senza pensarci. Con gli automatismi delle strutture che usi davvero.' },
  { n: '05', t: 'Distinguerai España e Latam', d: 'Sai adattare il vocabolario al tuo interlocutore. Non chiami "coche" l\'auto in Argentina.' },
  { n: '06', t: 'Avrai una routine sostenibile', d: '20 minuti al giorno ben spesi per non perdere nulla del lavoro fatto.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: '10+', l: 'anni con studenti ispanofoni' },
  { n: 'DELE', l: 'C2 Instituto Cervantes' },
  { n: '3', l: 'paesi Latam frequentati' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Elena P.', role: 'Export manager · Latina', img: 'image-student-1.jpg', stars: 5, date: '1 mese fa',
    text: 'Gestisco un portafoglio in Messico e Colombia. Dopo questo corso mi sono ritrovata a chiudere una call di 90 minuti senza passare mai all\'inglese. Il modulo sulle differenze regionali è oro.' },
  { name: 'Matteo R.', role: 'Digital nomad · Bogotá', img: 'image-student-4.jpg', stars: 5, date: '3 settimane fa',
    text: 'Ho fatto il corso prima di partire per sei mesi in Colombia. Sono partito con B1 arrugginito e sono tornato con amici. Debora mi ha fatto lavorare sull\'ascolto in modo che altri corsi ignorano.' },
  { name: 'Sara B.', role: 'Ricercatrice UNAM', img: 'image-student-2.jpg', stars: 5, date: '2 mesi fa',
    text: 'Preparavo il DELE B2 e mi serviva una spinta su orale e redazione. Ho superato con 87/100. Le simulazioni erano più toste dell\'esame vero.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Mi interessa solo lo spagnolo di Spagna (o solo Latam). Va bene?', a: 'Perfetto. Nella prima lezione scegliamo l\'angolazione e io adatto materiali, esempi e correzioni a quel target.' },
  { q: 'Se ho fatto solo scuola di 20 anni fa parto da zero?', a: 'Quasi mai. Nella lezione gratuita facciamo un placement informale. Se serve inseriamo 2-3 lezioni ponte di "riscaldamento".' },
  { q: 'Si può preparare il DELE con questo corso?', a: 'Sì, è la struttura naturale per B2. Per C1 consigliamo un pacchetto esteso — ne parliamo insieme.' },
  { q: 'Posso ripetere una lezione se non mi è chiara?', a: 'Certo. I nodi difficili (congiuntivo, pretéritos) li riprendiamo finché non scorrono, senza costi extra.' },
  { q: 'Posso pagare a rate?', a: 'Sì, due o tre rate senza interessi. Lo decidiamo al momento della prenotazione.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
  { slug: 'portoghese-brasiliano', title: 'Portoghese brasiliano per viaggi e lavoro', eyebrow: 'Português BR', meta: '12 lezioni · A1–B1', price: '€ 400', color: '#1CB886', img: 'image-student-3.jpg' },
  { slug: 'francese', title: 'Francese professionale', eyebrow: 'Francese · Carriera', meta: '12 lezioni · B1–C1', price: '€ 460', color: '#FF09AD', img: 'image-student-1.jpg' },
];
