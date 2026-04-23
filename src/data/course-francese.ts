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

export const LANG_SLUG = 'francese';

export const HERO_TITLE: HeroTitle = {
  line1: 'Francese',
  line2: 'elegante',
  line3: 'e naturale.',
};

export const COURSE: Course = {
  eyebrow: 'Francese · Carriera & studio',
  title: 'Francese professionale — tra Parigi, Bruxelles e Montréal',
  subtitle: 'Il corso per chi vuole parlare un francese attuale e cortese, superare un DELF o lavorare con colleghi francofoni senza imbarazzi.',
  lang: 'francese',
  level: 'B1 → C1',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o Firenze',
  students: 58,
  price: 460,
  pricePer: 44,
  rating: 4.9,
  reviews: 31,
  color: '#FF09AD',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Conversazione libera per capire dove sei davvero e dove vuoi arrivare: DELF, lavoro, studio, vita.', dur: '60 min' },
  { n: 2, title: 'Pronuncia e legami', focus: 'Nasali, "r" francese, liaison. Togliamo l\'accento italiano che blocca la fluidità.', dur: '60 min' },
  { n: 3, title: 'Registri formale e informale', focus: 'Vouvoyer vs tutoyer, email a un supérieur, messaggio a un collega. Quando e come.', dur: '60 min' },
  { n: 4, title: 'Meeting e call in francese', focus: 'Prendere la parola, non lasciarsi sovrastare, sintetizzare. Formule d\'ufficio vere.', dur: '60 min' },
  { n: 5, title: 'Scrittura professionale', focus: 'Email, note interne, résumés. La struttura francese è diversa dalla nostra.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione e confronto con la lezione 1. Mappa dei progressi e aggiustamenti.', dur: '60 min' },
  { n: 7, title: 'Subjonctif senza panico', focus: 'Quattro pattern che userai ogni giorno. Addio regole, benvenuti automatismi.', dur: '60 min' },
  { n: 8, title: 'Small talk e cultura', focus: 'Rapporto col cibo, con l\'ironia, con il silenzio. Non fare gaffe culturali.', dur: '60 min' },
  { n: 9, title: 'Francofonia: Belgio, Svizzera, Québec', focus: 'Differenze che contano se lavori o ti trasferisci fuori dalla Francia.', dur: '60 min' },
  { n: 10, title: 'Vocabolario del tuo settore', focus: 'Glossario su misura, esercizi su documenti reali della tua industria.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Colloquio o riunione di 30-45 minuti registrata, feedback scritto dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Routine di mantenimento, podcast e letture su misura, follow-up a 3 mesi.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Libreria di podcast e articoli su misura',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🗼', title: 'Lavori con partner francesi', body: 'Call, mail, riunioni. Smetti di affidarti all\'inglese-ponte e dici quello che vuoi davvero.' },
  { icon: '🎓', title: 'Prepari DELF o DALF', body: 'Strutturiamo il percorso con simulazioni orali e scritte identiche all\'esame.' },
  { icon: '🍁', title: 'Pensi al Québec', body: 'Vocabolario, accento e pratiche burocratiche: ti prepari a parlare un francese che lavora anche lì.' },
  { icon: '🎨', title: 'Ami cultura e letteratura', body: 'Leggiamo Maylis de Kerangal, ascoltiamo France Culture. La lingua passa dalle cose belle.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Parlerai con naturalezza', d: 'Senza italianismi, senza esitazioni lunghe. Pensi e rispondi in francese, anche nei momenti difficili.' },
  { n: '02', t: 'Userai il registro giusto', d: 'Formale con il direttore, caldo con il collega di fiducia, diretto al cliente. Ogni tono a posto.' },
  { n: '03', t: 'Scriverai email francesi vere', d: 'Formule native, sintesi elegante, apertura e chiusura giuste per ogni contesto.' },
  { n: '04', t: 'Gestirai il subjonctif', d: 'Senza bloccarti a metà frase. I pattern più comuni sono automatici.' },
  { n: '05', t: 'Capirai ogni accento francofono', d: 'Parigi, Marsiglia, Bruxelles, Montréal. Orecchio allenato a tutto il mondo francese.' },
  { n: '06', t: 'Saprai sostenere il DELF', d: 'Se l\'obiettivo è l\'esame, esci col livello e le tecniche per affrontarlo.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'DALF', l: 'C1 certificata' },
  { n: '8+', l: 'anni di insegnamento' },
  { n: '2', l: 'anni vissuti a Lione' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Laura C.', role: 'Consulente · Paris-Milan', img: 'image-student-2.jpg', stars: 5, date: '2 mesi fa',
    text: 'Lavoro metà tempo con un cliente parigino. Passavo giorni a preparare ogni call. Dopo il corso, improvvisa. Il modulo sui registri formali mi ha cambiato la voce professionale.' },
  { name: 'Paolo V.', role: 'Dottorando · letteratura', img: 'image-student-3.jpg', stars: 5, date: '1 mese fa',
    text: 'Mi serviva DALF C1 per una borsa. L\'ho superato. Le simulazioni della lezione 11 erano più dure dell\'esame: ci ho perso dormite ma è quello che serviva.' },
  { name: 'Giulia T.', role: 'Pasticcera · trasferita a Lione', img: 'image-student-1.jpg', stars: 5, date: '3 settimane fa',
    text: 'Mi sono trasferita per lavoro. Debora ha capito subito che mi serviva un francese da cucina vero, non da manuale. Ora il mio capo dice che scherzo come una francese.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Mi serve principalmente per lavoro. Il corso è giusto?', a: 'Sì. La metà delle lezioni è dedicata a meeting, scrittura e registri professionali, adattati al tuo settore.' },
  { q: 'Posso prepararmi al DELF o DALF?', a: 'Assolutamente. Per DELF B2 bastano le 12 lezioni; per DALF C1 consiglio un\'estensione — ne parliamo nella chiamata gratuita.' },
  { q: 'E se sono rimasto fermo al liceo?', a: 'Niente panico. Nella prima lezione valutiamo insieme. Se serve aggiungiamo un warm-up di 3 lezioni prima del programma.' },
  { q: 'Quanto è orientato al Québec?', a: 'La lezione 9 è dedicata alla francofonia. Se il Québec è il tuo obiettivo principale, adatto l\'intero corso sul francese canadese.' },
  { q: 'Si può pagare a rate?', a: 'Sì, in due o tre rate senza interessi. Basta chiederlo quando prenoti.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
  { slug: 'spagnolo', title: 'Spagnolo in scioltezza', eyebrow: 'Spagnolo · Lavoro', meta: '12 lezioni · A2–B2', price: '€ 420', color: '#E9FA49', img: 'image-student-3.jpg' },
  { slug: 'tedesco', title: 'Tedesco per il DACH', eyebrow: 'Tedesco · Lavoro', meta: '12 lezioni · A2–B2', price: '€ 460', color: '#1CB886', img: 'image-student-4.jpg' },
];
