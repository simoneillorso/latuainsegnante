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

export const LANG_SLUG = 'tedesco';

export const HERO_TITLE: HeroTitle = {
  line1: 'Tedesco',
  line2: 'preciso',
  line3: 'che funziona.',
};

export const COURSE: Course = {
  eyebrow: 'Tedesco · DACH',
  title: 'Tedesco per lavorare nel DACH — Germania, Austria, Svizzera',
  subtitle: 'Un corso concreto per chi deve reggere call, mail e colloqui in tedesco. Senza paura dei casi, senza italianismi, con il tono giusto.',
  lang: 'tedesco',
  level: 'A2 → B2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o Firenze',
  students: 46,
  price: 460,
  pricePer: 44,
  rating: 4.9,
  reviews: 24,
  color: '#1CB886',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Conversazione iniziale per misurare il livello reale e decidere l\'angolo (Berlino, Vienna, Zurigo).', dur: '60 min' },
  { n: 2, title: 'Suoni tedeschi senza paura', focus: 'Umlaut, "ch" morbida e dura, ritmo della frase. Un accento comprensibile e sicuro.', dur: '60 min' },
  { n: 3, title: 'Casi — finalmente chiari', focus: 'Nominativo, accusativo, dativo attraverso frasi che userai ogni giorno. Via la tabella, dentro i pattern.', dur: '60 min' },
  { n: 4, title: 'Ordine delle parole', focus: 'Verbo in posizione 2, participio a fine frase. Quando smette di sembrare una tortura.', dur: '60 min' },
  { n: 5, title: 'Meeting e piccola burocrazia', focus: 'Chiedere chiarimenti, sintetizzare, chiedere un appuntamento. Anche al Bürgeramt.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registriamo un audio guidato e lo confrontiamo con la lezione 1. Visualizzi i progressi.', dur: '60 min' },
  { n: 7, title: 'Mail di lavoro tedesche', focus: 'Sehr geehrte, con anrede giusta, chiusure coerenti. Zero "Ciao" travestiti.', dur: '60 min' },
  { n: 8, title: 'Konjunktiv II e cortesia', focus: 'Le formule cortesi che fanno la differenza tra "posso" e "potrei". Molto usate, poco spiegate.', dur: '60 min' },
  { n: 9, title: 'Colloquio di lavoro', focus: 'Presentazione professionale, risposte alle domande classiche, gestione del silenzio.', dur: '60 min' },
  { n: 10, title: 'Tedesco del tuo settore', focus: 'Glossario costruito sui tuoi documenti. Dalla meccanica all\'IT, dal medico alla cultura.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Colloquio o meeting di 30-45 minuti registrato, feedback scritto passo-passo.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Abitudini sostenibili, podcast di Deutsche Welle, follow-up a 3 mesi.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Esercizi di grammatica mirati (casi, ordine)',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🏭', title: 'Lavori nel DACH', body: 'Call con clienti tedeschi, fornitori austriaci, colleghi svizzeri. Vuoi sostituire l\'inglese di comodo.' },
  { icon: '🧳', title: 'Pensi di trasferirti', body: 'Monaco, Vienna, Zurigo. Ti prepariamo al livello che serve per muoverti davvero.' },
  { icon: '🎓', title: 'Prepari Goethe o telc', body: 'Simulazioni orali e scritte di B1, B2, parte orale inclusa.' },
  { icon: '🔬', title: 'Sei ricercatore/medico', body: 'Vocabolario tecnico, presentazioni a congresso, relazioni formali.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Userai i casi senza pensarci', d: 'Accusativo, dativo, genitivo nei contesti ricorrenti diventano automatici.' },
  { n: '02', t: 'Metterai le parole a posto', d: 'Verbo in posizione 2, separabili e finale chiaro. Frasi che non ti fanno più sudare.' },
  { n: '03', t: 'Avrai un tono naturale', d: 'Cortese senza essere rigido, diretto senza essere brusco. Il bilanciamento giusto per il DACH.' },
  { n: '04', t: 'Scriverai mail formali giuste', d: 'Anrede, struttura, chiusure. Non sembri uno che usa un traduttore.' },
  { n: '05', t: 'Reggerai un colloquio', d: 'In 20 minuti racconti chi sei, cosa cerchi, perché sei la persona giusta.' },
  { n: '06', t: 'Sarai pronto a vivere lì', d: 'Capisci quel che senti in bar, ospedale, Bürgeramt. Non ti perdi in mezzo alla frase.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'C1', l: 'Goethe certificata' },
  { n: '9+', l: 'anni di insegnamento' },
  { n: '18', l: 'mesi vissuti a Berlino' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Marco B.', role: 'Ingegnere · Stuttgart', img: 'image-student-3.jpg', stars: 5, date: '1 mese fa',
    text: 'Lavoro in automotive tedesco da cinque anni e non ho mai veramente parlato la lingua. Con Debora ho recuperato sei mesi di bolletta di imbarazzo. Ora modero riunioni io.' },
  { name: 'Silvia M.', role: 'Dottoranda · Monaco', img: 'image-student-1.jpg', stars: 5, date: '3 settimane fa',
    text: 'Mi serviva B2 Goethe per la borsa di studio. Passato con 85/100. Il modulo sul Konjunktiv II vale metà del corso.' },
  { name: 'Daniele F.', role: 'Infermiere · Vienna', img: 'image-student-4.jpg', stars: 5, date: '2 mesi fa',
    text: 'Mi sono trasferito per contratto. Parte tedesca dell\'ospedale non scherza. Debora mi ha costruito il glossario clinico esatto che mi serviva.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'I casi sono il mio incubo. Funziona davvero?', a: 'Sì. Non li studiamo con le tabelle: li inseriamo in frasi ricorrenti del tuo contesto. Dopo 3-4 lezioni smettono di fare paura.' },
  { q: 'Si può puntare al Goethe B2?', a: 'Con un livello di partenza A2-B1 solido sì. Altrimenti estendiamo di 3-4 lezioni extra, costruendo il percorso su misura.' },
  { q: 'Lavoro in Svizzera. Lo Schwiizerdütsch?', a: 'Parliamo Hochdeutsch, che è la lingua dell\'ufficio anche in Svizzera. Introduciamo però i tratti principali che sentirai in giro.' },
  { q: 'Posso ripetere una lezione?', a: 'Sì. I punti difficili li riprendiamo senza costi extra finché non scorrono.' },
  { q: 'Rate di pagamento?', a: 'Due o tre rate senza interessi. Basta chiederlo al momento della prenotazione.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
  { slug: 'francese', title: 'Francese professionale', eyebrow: 'Francese · Carriera', meta: '12 lezioni · B1–C1', price: '€ 460', color: '#FF09AD', img: 'image-student-1.jpg' },
  { slug: 'italiano', title: 'Italiano L2 per stranieri', eyebrow: 'Italiano · CILS', meta: '12 lezioni · A1–B2', price: '€ 440', color: '#E9FA49', img: 'image-student-3.jpg' },
];
