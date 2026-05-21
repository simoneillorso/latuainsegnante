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

export const LANG_SLUG = 'portoghese';

export const HERO_TITLE: HeroTitle = {
  line1: 'Portoghese',
  line2: 'europeo',
  line3: 'con radici.',
};

export const COURSE: Course = {
  eyebrow: 'Portoghese · Europeu',
  title: 'Portoghese europeo — vivere, lavorare e capire Lisbona',
  subtitle: 'Un corso per chi si trasferisce in Portogallo o ha radici portoghesi e vuole parlare "de verdade", senza sembrare brasiliano.',
  lang: 'portoghese',
  level: 'A1 → B1',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 22,
  price: 400,
  pricePer: 40,
  rating: 4.9,
  reviews: 14,
  color: '#1CB886',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Capiamo insieme se il tuo interesse è Lisbona, l\'Alentejo, Porto o una ragione familiare.', dur: '60 min' },
  { n: 2, title: 'Pronuncia del PT-PT', focus: 'Vocali chiuse, "ão" nasale, la "s" finale sibilante. Le differenze che tradiscono un "parlante brasiliano".', dur: '60 min' },
  { n: 3, title: 'Presente + passato semplice', focus: 'I due tempi che coprono la maggior parte delle conversazioni quotidiane. Applicati a storie vere.', dur: '60 min' },
  { n: 4, title: 'Vita quotidiana in Portogallo', focus: 'Al mercato, al caffè, alla pastelaria. Lessico di uso quotidiano che nessun libro ti dà.', dur: '60 min' },
  { n: 5, title: 'Lavoro e piccola burocrazia', focus: 'Email, appuntamenti, Finanças, NIF. Le parole che ti servono per vivere lì.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione e confronto con la lezione 1. Vedi i progressi in modo concreto.', dur: '60 min' },
  { n: 7, title: 'Formale e informale', focus: '"Você", "tu", "o senhor": quando usare cosa senza fare figuracce.', dur: '60 min' },
  { n: 8, title: 'Ascoltare il portoghese vero', focus: 'Il portoghese parlato è velocissimo. Lavoriamo sull\'orecchio finché non diventa naturale.', dur: '60 min' },
  { n: 9, title: 'Differenze PT ↔ BR', focus: 'Le parole che cambiano radicalmente. Non confondere mai più "rapariga" con "moça".', dur: '60 min' },
  { n: 10, title: 'Portoghese del tuo settore', focus: 'Glossario professionale su misura — remoto in Portogallo, turismo, cultura, tech.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Conversazione di 30-45 minuti simulando una situazione reale (colloquio, appartamento, banca).', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Podcast, fado, serie RTP. Un percorso per non perdere ciò che hai costruito.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Playlist PT-PT: podcast, fado, film',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🇵🇹', title: 'Ti trasferisci in Portogallo', body: 'Lisbona, Porto, Algarve: vuoi integrarti davvero, non limitarti all\'inglese turistico.' },
  { icon: '👴', title: 'Hai radici portoghesi', body: 'Nonni, bisnonni, un passaporto da prendere. Vuoi parlare con la famiglia nella loro lingua.' },
  { icon: '💻', title: 'Lavori in remote a Lisbona', body: 'Colleghi portoghesi, Finanças, affitto. Ti serve una lingua credibile anche se lavori in inglese.' },
  { icon: '🎨', title: 'Ami fado, cinema, cultura PT', body: 'Pessoa, Saramago, Caetano (che è BR ma lo sai). Vuoi la lingua per goderne senza sottotitoli.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Parlerai PT europeo', d: 'Con il suono giusto. Nessuno ti scambierà per brasiliano — se non vuoi tu.' },
  { n: '02', t: 'Capirai i portoghesi veloci', d: 'Lisbonesi a 300 parole al minuto senza più perdere il filo.' },
  { n: '03', t: 'Userai registri giusti', d: '"Você", "tu", formale e informale. Senza offendere e senza sembrare distante.' },
  { n: '04', t: 'Sbrigherai pratiche', d: 'Dalle Finanças al medico, dal NIF al supermercato, non dipendi da qualcuno che traduce.' },
  { n: '05', t: 'Distinguerai PT ↔ BR', d: 'Vocabolario, pronuncia, strutture. Usi l\'uno o l\'altro con consapevolezza.' },
  { n: '06', t: 'Avrai materiale per crescere', d: 'Podcast, fado, film curati. Strumenti per non fermarti dopo il corso.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'CAPLE', l: 'livello avanzato' },
  { n: '6+', l: 'anni di insegnamento PT' },
  { n: '3', l: 'mesi all\'anno a Lisbona' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Luca P.', role: 'Frontend dev · Milano→Lisbona', img: 'image-student-3.jpg', stars: 5, date: '2 mesi fa',
    text: 'Mi sono trasferito a Lisbona l\'anno scorso. Facevo tutto in inglese, ma mi sentivo sempre fuori. Dopo il corso i colleghi portoghesi iniziano a parlarmi in portoghese spontaneamente. Vittoria.' },
  { name: 'Maria C.', role: 'Pensionata con radici in Alentejo', img: 'image-student-2.jpg', stars: 5, date: '1 mese fa',
    text: 'La mia nonna era di Évora. A 58 anni ho deciso di recuperare. Con Debora è stato un piacere: niente fretta, molta passione. Ora scrivo ai cugini senza traduttore.' },
  { name: 'Francesco T.', role: 'Architetto · Latina', img: 'image-student-4.jpg', stars: 5, date: '3 settimane fa',
    text: 'Collaborazioni con studio di Porto. Ho imparato abbastanza per gestire call in portoghese — e adesso mi odiano di meno quando mandano documenti da tradurre.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Vuoi insegnarmi PT o BR?', a: 'Questo corso è interamente dedicato al PT-PT (europeo). Se ti interessa il brasiliano abbiamo un corso separato.' },
  { q: 'Parto da zero. Bastano 12 lezioni?', a: 'Arrivi a un A2 solido. Se punti a B1 spendibile al lavoro, estendiamo di 4-6 lezioni. Ne parliamo nella chiamata gratuita.' },
  { q: 'Serve per il passaporto portoghese?', a: 'Il test CIPLE A2 è alla portata. Lo prepariamo con simulazioni identiche all\'esame.' },
  { q: 'Mi servono materiali specifici?', a: 'Solo un quaderno. Tutto il resto (audio, PDF, esercizi) lo fornisco io, taglio sulla tua persona.' },
  { q: 'Come prenoto la prima lezione?', a: 'Mi scrivi dal modulo o su WhatsApp con il tuo obiettivo. Concordiamo giorno e ora, e partiamo.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'portoghese-brasiliano', title: 'Portoghese brasiliano', eyebrow: 'Português BR', meta: '12 lezioni · A1–B1', price: '€ 400', color: '#E9FA49', img: 'image-student-3.jpg' },
  { slug: 'spagnolo', title: 'Spagnolo in scioltezza', eyebrow: 'Spagnolo · Lavoro', meta: '12 lezioni · A2–B2', price: '€ 420', color: '#FF09AD', img: 'image-student-1.jpg' },
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-2.jpg' },
];
