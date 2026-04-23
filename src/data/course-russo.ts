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

export const LANG_SLUG = 'russo';

export const HERO_TITLE: HeroTitle = {
  line1: 'Russo',
  line2: 'reale',
  line3: 'da zero.',
};

export const COURSE: Course = {
  eyebrow: 'Russo · Fondamenta',
  title: 'Russo per iniziare a parlare davvero — cirillico e conversazione',
  subtitle: 'Il corso per chi parte (quasi) da zero e vuole, in 12 lezioni, leggere il cirillico, presentarsi, fare small talk e capire un menu in Russia o nei paesi CIS.',
  lang: 'russo',
  level: 'A0 → A2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o Firenze',
  students: 14,
  price: 460,
  pricePer: 44,
  rating: 4.9,
  reviews: 9,
  color: '#FFAE00',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Perché il russo? Lavoro, famiglia, viaggio, cultura. Strutturiamo il percorso attorno alla tua motivazione.', dur: '60 min' },
  { n: 2, title: 'Cirillico senza paura', focus: 'Le 33 lettere, la logica dei suoni, come leggerle in ordine. Esercizi fatti in coppia.', dur: '60 min' },
  { n: 3, title: 'Suoni russi particolari', focus: 'Ы, щ, ж, palatalizzazione. I suoni che ci sembrano strani e come abituare l\'orecchio.', dur: '60 min' },
  { n: 4, title: 'Presentarsi — storia tua', focus: 'Nome, età, professione, famiglia. Primi casi (nominativo, accusativo) in contesto.', dur: '60 min' },
  { n: 5, title: 'Verbi imperfettivi/perfettivi', focus: 'L\'aspetto verbale russo: non solo "tempo", ma "come" è l\'azione. In frasi reali.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione e confronto con la lezione 1. Rendiamo visibili i progressi.', dur: '60 min' },
  { n: 7, title: 'Small talk e cortesie', focus: 'Salutare, ringraziare, scusarsi, offrire tè. Il registro formale/informale in Russia.', dur: '60 min' },
  { n: 8, title: 'Casi — nominativo, accusativo, prepositivo', focus: 'Tre casi su sei, ma coprono già il 70% del parlato quotidiano.', dur: '60 min' },
  { n: 9, title: 'Viaggio e orientamento', focus: 'Taxi, metro, treno, albergo. Chiedere informazioni senza panico.', dur: '60 min' },
  { n: 10, title: 'Cibo, bar, ristorante', focus: 'Leggere menu russi, ordinare, pagare. Dalla pirozhki alla zuppa borsch.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Simulazione di 30-45 minuti (viaggio, telefonata, incontro). Feedback scritto dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'YouTube per A2, podcast semplici, app consigliate. Per continuare in autonomia.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Tavole riassuntive del cirillico e dei casi',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🛬', title: 'Viaggi in Russia o CIS', body: 'Mosca, San Pietroburgo, ma anche Armenia, Georgia, Kazakistan. Vuoi muoverti senza dipendere dall\'inglese.' },
  { icon: '💻', title: 'Lavori con aziende russofone', body: 'Clienti o fornitori. Vuoi capire mail e conversazioni informali anche se lavori in inglese.' },
  { icon: '❤️', title: 'Legami familiari o affettivi', body: 'Partner, amici, famiglia parlano russo. Ti serve la lingua per costruire davvero.' },
  { icon: '📚', title: 'Ami letteratura e cinema', body: 'Dostoevskij in originale, Tarkovskij senza sottotitoli. La lingua è la chiave.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Leggerai il cirillico', d: 'Menu, cartelli, insegne, chat. Dopo 2-3 lezioni l\'alfabeto non è più un ostacolo.' },
  { n: '02', t: 'Ti presenterai con disinvoltura', d: 'Chi sei, cosa fai, da dove vieni, perché impari russo. Conversazione base in piedi.' },
  { n: '03', t: 'Gestirai tre casi chiave', d: 'Nominativo, accusativo, prepositivo in automatico. Con questi 3 copri tanta parte del parlato quotidiano.' },
  { n: '04', t: 'Userai i verbi aspettualmente', d: 'Perfettivo vs imperfettivo — il concetto più russo, reso finalmente chiaro.' },
  { n: '05', t: 'Ti muoverai in viaggio', d: 'Hotel, trasporti, cibo, piccola emergenza. Non dipendi da cartelli in inglese.' },
  { n: '06', t: 'Avrai strumenti per crescere', d: 'Sai esattamente cosa ascoltare, leggere e fare ogni giorno per arrivare a un B1 in un anno.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'TORFL', l: 'B2 certificata' },
  { n: '6+', l: 'anni di insegnamento' },
  { n: '2', l: 'viaggi lunghi in Russia' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Andrea T.', role: 'Ricercatore · Mosca (progetto 1 anno)', img: 'image-student-3.jpg', stars: 5, date: '2 mesi fa',
    text: 'Dovevo partire in tre mesi per un anno di lavoro a Mosca. Debora ha impostato il percorso esattamente attorno a questo. Sono arrivato con un russo utile e mi sono integrato in poche settimane.' },
  { name: 'Silvia V.', role: 'Compagna di un russo · Firenze', img: 'image-student-2.jpg', stars: 5, date: '1 mese fa',
    text: 'La suocera non parla inglese. Dopo il corso riesco a reggere una cena di famiglia di 3 ore. Qualche incespicamento sì, ma capisco tutto e rispondo. Miracolo.' },
  { name: 'Nicolò B.', role: 'Appassionato di Dostoevskij', img: 'image-student-4.jpg', stars: 5, date: '3 settimane fa',
    text: 'Obiettivo romantico: leggere Delitto e Castigo in originale. Ancora lontano dal fine, ma adesso so muovermi in russo da turista consapevole. Piano lungo ma chiarissimo.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Parto davvero da zero. È fattibile?', a: 'Sì. Il corso è pensato per chi parte con zero cirillico. Nelle prime 3 lezioni acquisisci l\'alfabeto e iniziamo a costruire frasi semplici.' },
  { q: 'Arriverò davvero a un A2?', a: 'Sì, con studio minimo di 2-3 ore la settimana tra una lezione e l\'altra. Se sei consistente, puoi sfiorare B1.' },
  { q: 'I casi sono l\'ostacolo?', a: 'Presentiamo solo i 3 più usati. Gli altri li introduciamo in un pacchetto successivo, quando hai le fondamenta.' },
  { q: 'È un corso sulla cultura russa o solo sulla lingua?', a: 'Entrambe. Ogni lezione ha un piccolo gancio culturale: canzone, modo di dire, abitudine. La lingua si assimila meglio così.' },
  { q: 'Rate?', a: 'Sì, due o tre rate senza interessi. Si decide al momento della prenotazione.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'arabo', title: 'Arabo standard moderno', eyebrow: 'Arabo · MSA', meta: '12 lezioni · A0–A2', price: '€ 500', color: '#E9FA49', img: 'image-student-1.jpg' },
  { slug: 'cinese', title: 'Cinese mandarino', eyebrow: 'Cinese · HSK', meta: '12 lezioni · A0–HSK4', price: '€ 520', color: '#FF09AD', img: 'image-student-3.jpg' },
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
];
