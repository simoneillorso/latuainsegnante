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

export const LANG_SLUG = 'arabo';

export const HERO_TITLE: HeroTitle = {
  line1: 'Arabo',
  line2: 'moderno',
  line3: 'per iniziare sul serio.',
};

export const COURSE: Course = {
  eyebrow: 'Arabo · MSA',
  title: 'Arabo standard moderno — dalla scrittura al lavoro in Medio Oriente',
  subtitle: 'Un corso per partire dall\'alfabeto e arrivare a conversazioni di base, con un angolo forte sull\'arabo di lavoro e cultura. Niente dialetto generico, fondamenta solide.',
  lang: 'arabo',
  level: 'A0 → A2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 12,
  price: 500,
  pricePer: 48,
  rating: 4.9,
  reviews: 8,
  color: '#E9FA49',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Lavoro, cultura, viaggio, accademia: decidiamo l\'angolo e misuriamo tempo e motivazione.', dur: '60 min' },
  { n: 2, title: 'Alfabeto arabo — scrittura', focus: 'Le 28 lettere, legature, forme isolate/iniziali/mediali/finali. Primo approccio alla scrittura da destra a sinistra.', dur: '60 min' },
  { n: 3, title: 'Vocali e pronuncia', focus: 'Vocali brevi (fatha, damma, kasra), vocali lunghe, suoni enfatici. Distinguiamoli bene.', dur: '60 min' },
  { n: 4, title: 'Prime parole e saluti', focus: 'Salam, sabah al-khayr, kaifa al-hal. Ti presenti in situazione formale e informale.', dur: '60 min' },
  { n: 5, title: 'Struttura della frase', focus: 'Frase nominale vs verbale, ordine VSO tipico. Le logiche di base che rendono tutto più chiaro.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione di un monologo breve e confronto con la lezione 1. Misuriamo i progressi.', dur: '60 min' },
  { n: 7, title: 'Numeri, giorni, date', focus: 'Numeri arabi orientali e occidentali, date e orari. Essenziale per lavoro e viaggio.', dur: '60 min' },
  { n: 8, title: 'Vita quotidiana e cortesia', focus: 'Galateo medio-orientale, formule di cortesia, religious markers nel linguaggio ordinario.', dur: '60 min' },
  { n: 9, title: 'Dialetti vs MSA', focus: 'Differenza tra Modern Standard Arabic, egiziano, levantino, golfo. Quando usare cosa.', dur: '60 min' },
  { n: 10, title: 'Arabo del tuo settore', focus: 'Glossario su misura: diplomazia, commercio, cooperazione, media, cultura.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Dialogo simulato (fiera, incontro, accoglienza) di 30-40 minuti. Feedback scritto dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Materiali di Al Jazeera Learning Arabic, serie, podcast livello A2. Routine per crescere.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Tavole riassuntive dell\'alfabeto e dei verbi',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🤝', title: 'Lavori con il Medio Oriente', body: 'Partner del Golfo, Maghreb, Levante. Vuoi un biglietto da visita in arabo, non solo in inglese.' },
  { icon: '🌍', title: 'Cooperazione internazionale', body: 'ONG, organizzazioni multilaterali, giornalismo. L\'arabo apre porte che l\'inglese non tocca.' },
  { icon: '📚', title: 'Interesse accademico', body: 'Storia, religione, letteratura. Vuoi leggere fonti in lingua originale, almeno iniziare a provarci.' },
  { icon: '🧳', title: 'Viaggi in Medio Oriente', body: 'Non ti accontenti dei circuiti turistici. Vuoi sentire e capire la vita vera.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Leggerai l\'alfabeto arabo', d: 'In tutte le forme (isolata, iniziale, mediale, finale). Superato il primo muro di ogni studente.' },
  { n: '02', t: 'Scriverai a mano in arabo', d: 'Testi brevi, nomi, frasi semplici. Scorrimento da destra a sinistra naturale.' },
  { n: '03', t: 'Userai strutture base', d: 'Frase nominale, frase verbale, pronomi suffissi. Fondamenta per tutto il resto.' },
  { n: '04', t: 'Distinguerai MSA e dialetti', d: 'Sai quando usare MSA (media, formale) e quando provare un dialetto. Mappa chiara.' },
  { n: '05', t: 'Gestirai situazioni di base', d: 'Presentazione, piccola conversazione d\'ufficio, accoglienza di un ospite. Non sei più muto.' },
  { n: '06', t: 'Avrai una roadmap chiara', d: 'Sai cosa studiare dopo, quali podcast, serie, testi usare. Non ti fermi dopo il corso.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'B1', l: 'MSA certificata' },
  { n: '5+', l: 'anni di insegnamento' },
  { n: '2', l: 'paesi arabofoni visitati a lungo' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Francesca L.', role: 'Cooperazione · ONG Giordania', img: 'image-student-1.jpg', stars: 5, date: '2 mesi fa',
    text: 'Vado e torno dal Medio Oriente per lavoro. Parlavo solo inglese. Ora posso presentarmi in arabo e leggere i cartelli. Ho avuto due conversazioni in aeroporto ed è stato un momento.' },
  { name: 'Pietro M.', role: 'Giornalista freelance', img: 'image-student-4.jpg', stars: 5, date: '1 mese fa',
    text: 'Preparavo un reportage in Tunisia e mi serviva l\'alfabeto e qualche base. Debora ha scelto materiali intelligenti. Non parlo arabo ma leggo cartelli e giornali con difficoltà crescente.' },
  { name: 'Samira K.', role: 'Italiana di origini marocchine', img: 'image-student-2.jpg', stars: 5, date: '3 settimane fa',
    text: 'Volevo recuperare la lingua dei miei genitori (dialetto marocchino) partendo però dalle fondamenta del MSA. Percorso perfetto. Ora studio il darija con altre basi.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Insegni MSA o dialetto?', a: 'Il corso insegna MSA (Modern Standard Arabic). È la base per leggere, scrivere e capire i media. La lezione 9 introduce i dialetti; se ti interessa uno specifico (egiziano, levantino), lo approfondiamo in un percorso successivo.' },
  { q: 'L\'alfabeto è il mio incubo. Quanto ci mettiamo?', a: 'Nelle prime 3 lezioni lo vediamo a fondo. Con esercizi tra le lezioni (20 min al giorno) è fattibile. Se ti serve di più, estendiamo.' },
  { q: 'Arriverò davvero a parlare?', a: 'Arriverai a un A2 solido: presentazione, piccola conversazione, leggere testi semplici. Per B1 serve un\'estensione, la pianifichiamo in base ai tuoi obiettivi.' },
  { q: 'Fai lezioni in presenza?', a: 'Sì, nello studio di Latina. Oppure online. Spesso alterniamo.' },
  { q: 'Rate?', a: 'Sì, due o tre rate senza interessi.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'cinese', title: 'Cinese mandarino', eyebrow: 'Cinese · HSK', meta: '12 lezioni · A0–HSK4', price: '€ 520', color: '#FF09AD', img: 'image-student-3.jpg' },
  { slug: 'russo', title: 'Russo da zero', eyebrow: 'Russo · Fondamenta', meta: '12 lezioni · A0–A2', price: '€ 460', color: '#FFAE00', img: 'image-student-1.jpg' },
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
];
