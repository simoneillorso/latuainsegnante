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

export const LANG_SLUG = 'italiano';

export const HERO_TITLE: HeroTitle = {
  line1: 'Italiano',
  line2: 'naturale',
  line3: 'per la vita vera.',
};

export const COURSE: Course = {
  eyebrow: 'Italiano L2 · CILS',
  title: 'Italiano per stranieri — vivere, lavorare e sentirsi a casa',
  subtitle: 'Il corso di italiano per chi è già qui (o sta arrivando). Non solo regole: la lingua che si parla davvero a Latina, in ufficio, al mercato.',
  lang: 'italiano',
  level: 'A1 → B2',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 68,
  price: 440,
  pricePer: 42,
  rating: 4.9,
  reviews: 38,
  color: '#9E89FB',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Prima conversazione in italiano per capire dove sei e cosa ti serve davvero: vita, lavoro, studio.', dur: '60 min' },
  { n: 2, title: 'Pronuncia senza accento pesante', focus: 'Vocali italiane, doppie, accento tonico. Piccoli aggiustamenti che ti fanno capire al primo colpo.', dur: '60 min' },
  { n: 3, title: 'Presente e passato prossimo', focus: 'I due tempi che coprono l\'80% delle conversazioni quotidiane, via storie della tua vita.', dur: '60 min' },
  { n: 4, title: 'Italiano da ufficio', focus: 'Email, riunioni, piccole burocrazie. Il lessico formale che ti serve davvero al lavoro.', dur: '60 min' },
  { n: 5, title: 'Congiuntivo leggero', focus: 'Il temuto congiuntivo in modo pratico: tre pattern sicuri che usano anche gli italiani.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione guidata a confronto con la lezione 1. Vedi in modo concreto quanto sei cresciuto.', dur: '60 min' },
  { n: 7, title: 'Burocrazia italiana spiegata', focus: 'Codice fiscale, permesso di soggiorno, medico di base. Le parole che servono per davvero.', dur: '60 min' },
  { n: 8, title: 'Espressioni idiomatiche vere', focus: 'Quelle che senti al bar, sui social, nelle serie italiane. Senza più sentirti fuori dalle battute.', dur: '60 min' },
  { n: 9, title: 'Italiano regionale', focus: 'Differenze tra Nord, Centro e Sud senza pregiudizi. Capire i colleghi di ogni regione.', dur: '60 min' },
  { n: 10, title: 'Italiano del tuo settore', focus: 'Glossario su misura della tua professione. Dalla ricerca alla ristorazione, dal design all\'IT.', dur: '60 min' },
  { n: 11, title: 'Simulazione CILS o meeting finale', focus: 'Simulazione d\'esame o meeting di 30-45 minuti, con feedback scritto dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Routine settimanale, podcast italiani, un film al mese. Per non perdere nulla dopo il corso.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Playlist di podcast e serie italiane',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🇮🇹', title: 'Vivi o ti trasferisci in Italia', body: 'Vuoi fare la spesa, parlare col medico, affittare casa senza tradurre ogni frase.' },
  { icon: '💼', title: 'Lavori in un\'azienda italiana', body: 'Colleghi, clienti, riunioni: vuoi un italiano credibile e professionale.' },
  { icon: '🎓', title: 'Prepari CILS o CELI', body: 'Strutturiamo il percorso con simulazioni identiche all\'esame, orale incluso.' },
  { icon: '❤️', title: 'Hai radici o amori italiani', body: 'Famiglia italiana, partner italiano. Vuoi condividere di più, non solo tradurre.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Parlerai italiano sciolto', d: 'Senza tradurre dall\'inglese o dalla tua lingua. Pensi direttamente in italiano nelle situazioni di tutti i giorni.' },
  { n: '02', t: 'Capirai gli italiani veri', d: 'Non quelli dei libri. Parlati veloci, diminutivi, battute: tutto il vissuto della lingua.' },
  { n: '03', t: 'Userai il congiuntivo quando serve', d: 'Senza bloccarti. Con i pattern che usano anche i madrelingua, non quelli della grammatica scolastica.' },
  { n: '04', t: 'Scriverai email credibili', d: 'Giri di frasi naturali, formule di cortesia giuste, registri adatti a ogni contesto.' },
  { n: '05', t: 'Gestirai la burocrazia', d: 'Parole chiave dei moduli, chiamate agli uffici, conversazioni con il commercialista.' },
  { n: '06', t: 'Avrai una routine per crescere', d: 'Sai cosa ascoltare, cosa leggere, quanto tempo dedicare ogni settimana per non tornare indietro.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: '10+', l: 'anni con studenti stranieri' },
  { n: 'CILS', l: 'esaminatrice certificata' },
  { n: '5', l: 'lingue parlate — capisco i tuoi blocchi' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Sarah J.', role: 'Marketing · Londra→Latina', img: 'image-student-1.jpg', stars: 5, date: '1 mese fa',
    text: 'Ho fatto altri corsi di italiano prima. Questo è l\'unico che mi ha insegnato l\'italiano che si parla davvero qui. Il modulo sulla burocrazia mi ha salvato quando ho fatto la partita IVA.' },
  { name: 'Kai W.', role: 'Designer · Berlino', img: 'image-student-4.jpg', stars: 5, date: '2 mesi fa',
    text: 'Lavoro remoto per un\'agenzia a Milano e mi vergognavo di scrivere in italiano. Dopo il corso, mi scrivono i colleghi: "scrivi meglio di molti di noi". Exaggerato ma carino.' },
  { name: 'Ana F.', role: 'Ricercatrice · São Paulo→Pisa', img: 'image-student-2.jpg', stars: 5, date: '3 settimane fa',
    text: 'Preparavo il CILS B2 per il dottorato. Passato al primo colpo. Le simulazioni della lezione 11 sono quasi identiche alla parte orale dell\'esame.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Non parlo italiano per niente. Posso comunque iniziare?', a: 'Sì. Iniziamo in italiano semplice, con appoggi in inglese/spagnolo/francese solo dove serve davvero. In 4-5 lezioni la bilancia si sposta.' },
  { q: 'Il corso prepara al CILS o CELI?', a: 'Sì, per B1/B2. Per livelli superiori valutiamo un\'estensione. Ti do simulazioni identiche all\'esame reale.' },
  { q: 'Parlate solo italiano durante le lezioni?', a: 'Quasi sempre sì. All\'inizio uso la tua lingua madre come rete di sicurezza sui punti difficili, poi sempre meno.' },
  { q: 'Posso fare lezioni in presenza a Latina?', a: 'Certo, nello studio di Latina. Oppure online. Spesso facciamo mix.' },
  { q: 'Come prenoto la prima lezione?', a: 'Mi scrivi dal modulo o su WhatsApp con il tuo obiettivo. Concordiamo giorno e ora, e partiamo.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
  { slug: 'spagnolo', title: 'Spagnolo in scioltezza', eyebrow: 'Spagnolo · Lavoro', meta: '12 lezioni · A2–B2', price: '€ 420', color: '#E9FA49', img: 'image-student-3.jpg' },
  { slug: 'francese', title: 'Francese professionale', eyebrow: 'Francese · Carriera', meta: '12 lezioni · B1–C1', price: '€ 460', color: '#FF09AD', img: 'image-student-1.jpg' },
];
