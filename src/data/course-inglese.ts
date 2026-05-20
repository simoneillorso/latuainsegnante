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

export const LANG_SLUG = 'inglese';

export const HERO_TITLE: HeroTitle = {
  line1: 'Conversazione',
  line2: 'professionale',
  line3: 'in inglese.',
};

export const COURSE: Course = {
  eyebrow: 'Inglese · Business',
  title: 'Conversazione professionale in inglese',
  subtitle: 'Il corso che ti fa sentire a tuo agio in meeting, call e colloqui in lingua — anche quando il cliente parla veloce.',
  lang: 'inglese',
  level: 'B2 → C1',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 84,
  price: 480,
  pricePer: 45,
  rating: 4.9,
  reviews: 42,
  color: '#9E89FB',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi + obiettivi personali', focus: 'Prova di conversazione, identifichiamo i tuoi punti di forza e le tre aree da sbloccare.', dur: '60 min' },
  { n: 2, title: 'Meeting essentials', focus: 'Aprire, prendere la parola, interrompere educatamente, chiudere. Con role-play su caso reale.', dur: '60 min' },
  { n: 3, title: 'Presentare idee e numeri', focus: 'Storytelling dati, come introdurre slide, trigger visivi verbali.', dur: '60 min' },
  { n: 4, title: 'Email professionali moderne', focus: 'Dal follow-up al "bad news email" — tono, struttura, ritmo.', dur: '60 min' },
  { n: 5, title: 'Small talk che non è piccolo', focus: 'Il networking inizia prima del meeting. Formule, cultura, tempi giusti.', dur: '60 min' },
  { n: 6, title: 'Check-point + report di metà corso', focus: 'Registriamo un audio, confrontiamo con la lezione 1. Visualizzi i progressi.', dur: '60 min' },
  { n: 7, title: 'Negoziare e gestire obiezioni', focus: 'Linguaggio assertivo, softeners, fare domande strategiche.', dur: '60 min' },
  { n: 8, title: 'Colloqui — versione senior', focus: 'STAR method, rispondere a domande ostili, gestire il silenzio.', dur: '60 min' },
  { n: 9, title: 'Call internazionali e accenti', focus: 'Capire scozzesi, australiani, indiani senza farsi prendere dal panico.', dur: '60 min' },
  { n: 10, title: 'Linguaggio tecnico del tuo settore', focus: 'Costruiamo il glossario della tua industria, con esercizi su paper reali.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: '45 minuti di meeting completo registrato, feedback dettagliato scritto.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Routine di mantenimento, risorse su misura, un follow-up a 3 mesi.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio per riascolto',
  'Esercizi extra tra una lezione e l\'altra',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🎤', title: 'Fai meeting in inglese', body: 'Presentazioni, call con clienti, pitch. Smetti di farti anticipare dai colleghi.' },
  { icon: '🧳', title: 'Cerchi lavoro all\'estero', body: 'Prepariamo insieme il tuo elevator pitch, il CV in inglese e le domande da colloquio più cattive.' },
  { icon: '✉️', title: 'Scrivi email che funzionano', body: 'Dal tono giusto alla chiusura perfetta. Niente più "Dear Sirs" nel 2026.' },
  { icon: '🤝', title: 'Negozi, vendi, convinci', body: 'Il vocabolario commerciale che fa la differenza tra "ci penseremo" e "firmiamo".' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Parlerai senza frenare', d: 'Il tuo cervello smette di tradurre. Pensi e rispondi in inglese, anche sotto pressione.' },
  { n: '02', t: 'Userai il tono giusto', d: 'Sai quando essere diretto, quando ammorbidire, quando ascoltare. Il tono è tutto.' },
  { n: '03', t: 'Scriverai email che ottengono risposte', d: 'Template tuoi, non copiati da internet. Struttura, ritmo, call to action.' },
  { n: '04', t: 'Presenterai idee che stanno in piedi', d: 'Apertura, contenuto, chiusura. In 5 minuti o in 50 — con la stessa chiarezza.' },
  { n: '05', t: 'Gestirai le domande scomode', d: 'Niente più blackout. Hai tecniche per prendere tempo ed essere preciso.' },
  { n: '06', t: 'Avrai un piano per non tornare indietro', d: 'Dopo il corso sai esattamente cosa fare ogni settimana per non arrugginire.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: '12+', l: 'anni di esperienza' },
  { n: 'CELTA', l: 'Cambridge certificata' },
  { n: 'C2', l: 'IELTS 8.5 / CPE' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Giulia M.', role: 'PM, fintech · Londra', img: 'image-student-2.jpg', stars: 5, date: '2 mesi fa',
    text: 'Ho fatto questo corso prima di trasferirmi. Le lezioni sulle call internazionali mi hanno salvato. Dopo 3 settimane già gestivo meeting con team di 4 Paesi.' },
  { name: 'Andrea F.', role: 'Sales, SaaS B2B', img: 'image-student-3.jpg', stars: 5, date: '1 mese fa',
    text: 'Il modulo sulla negoziazione vale da solo il corso. Ho chiuso due deal in inglese con formule che non avrei saputo usare. Debora sa di cosa parla.' },
  { name: 'Chiara D.', role: 'Ricercatrice, pharma', img: 'image-student-1.jpg', stars: 5, date: '3 settimane fa',
    text: 'Pensavo mi servisse "solo" conversazione. In realtà ho rivoltato anche la scrittura. La simulazione finale era quasi identica a un colloquio vero che ho avuto dopo.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Cosa succede se cambio settore a metà corso?', a: 'Adattiamo le ultime lezioni. Il materiale del modulo "linguaggio tecnico" si rifà da capo sul tuo nuovo contesto — senza costi extra.' },
  { q: 'E se perdo una lezione?', a: 'Fino a 24h prima la sposti quando vuoi dal calendario. Oltre, puoi recuperarla con una registrazione personalizzata e un mini task.' },
  { q: 'Fornisci una certificazione finale?', a: 'Al termine ricevi un attestato di partecipazione con livello di partenza, arrivo e una lettera di valutazione spendibile nel CV.' },
  { q: 'Funziona se parto da un livello più basso di B2?', a: 'Ne parliamo nella lezione gratuita. Se sei B1 solido facciamo un warm-up di 3 lezioni dedicate prima di partire col programma.' },
  { q: 'Posso pagare a rate?', a: 'Sì, in due o tre rate senza interessi. Basta chiederlo quando prenoti.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'spagnolo', title: 'Spagnolo per il lavoro', eyebrow: 'Spagnolo · Business', meta: '12 lezioni · A2–B2', price: '€ 420', color: '#E9FA49', img: 'image-student-3.jpg' },
  { slug: 'tedesco', title: 'Tedesco in ufficio', eyebrow: 'Tedesco · DACH', meta: '12 lezioni · A2–B2', price: '€ 460', color: '#1CB886', img: 'image-student-4.jpg' },
  { slug: 'francese', title: 'Francese professionale', eyebrow: 'Francese · Carriera', meta: '12 lezioni · B1–C1', price: '€ 460', color: '#FF09AD', img: 'image-student-1.jpg' },
];
