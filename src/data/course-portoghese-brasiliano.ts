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

export const LANG_SLUG = 'portoghese-brasiliano';

export const HERO_TITLE: HeroTitle = {
  line1: 'Brasiliano',
  line2: 'vero',
  line3: 'come un carioca.',
};

export const COURSE: Course = {
  eyebrow: 'Português · Brasil',
  title: 'Portoghese brasiliano — viaggi lunghi, samba e business',
  subtitle: 'Il corso per chi vuole parlare un brasiliano che suona brasiliano. Per lavoro, viaggi lunghi, musica, amore. Senza libri di testo tristi.',
  lang: 'portoghese-brasiliano',
  level: 'A1 → B1',
  duration: '12 lezioni',
  lessonLen: '60 min',
  format: 'online o a Latina',
  students: 18,
  price: 400,
  pricePer: 40,
  rating: 5.0,
  reviews: 11,
  color: '#E9FA49',
};

export const LESSONS: Lesson[] = [
  { n: 1, title: 'Diagnosi e obiettivi', focus: 'Che Brasile ti interessa? Rio, São Paulo, Nordeste, business o musica. Decidiamo l\'angolo.', dur: '60 min' },
  { n: 2, title: 'Pronuncia brasiliana', focus: 'La "t" davanti alla "i" (tchi), la "d" dolce, vocali aperte. Il suono del Brasile.', dur: '60 min' },
  { n: 3, title: 'Presente e passato naturale', focus: '"Estou falando" vs "falei". I tempi che usi al 90% nella conversazione reale.', dur: '60 min' },
  { n: 4, title: 'Small talk e cultura', focus: 'Come si saluta davvero, come si chiede "tudo bem?", cosa NON chiedere. Rompiamo il ghiaccio come un carioca.', dur: '60 min' },
  { n: 5, title: 'Lavoro e email', focus: 'Reuniões virtuais, follow-up, scritto professionale. Il "prezado" e il "abraços" giusti.', dur: '60 min' },
  { n: 6, title: 'Check-point di metà corso', focus: 'Registrazione e confronto con la lezione 1. Vedi con orecchie tue quanto sei cambiato.', dur: '60 min' },
  { n: 7, title: 'Espressioni di strada', focus: '"Valeu", "beleza", "que saco". Quello che senti davvero, non il libro di testo.', dur: '60 min' },
  { n: 8, title: 'Canzoni come lezione', focus: 'Imparare attraverso Caetano, Marisa Monte, Criolo. Testi e grammatica nascosta.', dur: '60 min' },
  { n: 9, title: 'Regional: RJ, SP, NE', focus: 'Differenze di accento e vocabolario tra sud, sudeste e nordeste. Capisci tutti.', dur: '60 min' },
  { n: 10, title: 'Brasiliano del tuo settore', focus: 'Glossario su misura: tech, cooperazione, turismo, musica, agricoltura.', dur: '60 min' },
  { n: 11, title: 'Simulazione finale', focus: 'Conversazione lunga in simulazione (viaggio, reunião, pitch). Feedback dettagliato.', dur: '60 min' },
  { n: 12, title: 'Piano post-corso', focus: 'Playlist, podcast, serie Globo. Strumenti per continuare da solo a casa.', dur: '60 min' },
];

export const LESSON_EXTRAS: string[] = [
  'Materiali PDF personalizzati',
  'Registrazione audio di ogni lezione',
  'Playlist musicale e podcast brasiliani',
  'Supporto WhatsApp tra le lezioni',
];

export const FOR_WHOM: ForWhomItem[] = [
  { icon: '🏖️', title: 'Viaggi lunghi in Brasile', body: 'Due mesi, sei mesi, un anno. Vuoi non perderti nulla di quello che succede intorno a te.' },
  { icon: '🎶', title: 'Ami la musica brasiliana', body: 'Bossa nova, samba, MPB, funk carioca. La lingua ti apre strati di significato.' },
  { icon: '🤝', title: 'Fai business col Brasile', body: 'Clienti o partner brasiliani. Vuoi la lingua giusta, non un inglese-ponte.' },
  { icon: '❤️', title: 'Hai legami affettivi', body: 'Partner, amici, famiglia in Brasile. Parlare la loro lingua cambia tutto.' },
];

export const OUTCOMES: Outcome[] = [
  { n: '01', t: 'Suonerai brasiliano', d: 'Non sembrerai uno che "parla portoghese": suonerai come un brasiliano in crescita. Grande differenza.' },
  { n: '02', t: 'Capirai musica e film', d: 'Rodrigo Amarante, Fernanda Montenegro, Criolo. Senza sottotitoli, senza perdere le battute.' },
  { n: '03', t: 'Farai small talk vero', d: 'Aprire una conversazione a São Paulo o a Salvador senza sembrare un turista in allarme.' },
  { n: '04', t: 'Reggerai una reunião', d: 'Colleghi brasiliani, cliente carioca. Parli senza bloccare il flusso della conversazione.' },
  { n: '05', t: 'Scriverai email calde', d: 'Il brasiliano è diretto e affettuoso. Trovi il tono giusto tra professionale e umano.' },
  { n: '06', t: 'Saprai cavartela ovunque', d: 'Dalla spiaggia di Copacabana al consolato. Anche quando non ti tendono una mano.' },
];

export const TEACHER_STATS: TeacherStat[] = [
  { n: 'CELPE', l: 'Bras avançado' },
  { n: '7+', l: 'anni di insegnamento BR' },
  { n: 'RJ+NE', l: 'vissuti in prima persona' },
];

export const COURSE_REVIEWS: Review[] = [
  { name: 'Alessia G.', role: 'Esperta di cooperazione · Roma', img: 'image-student-1.jpg', stars: 5, date: '2 mesi fa',
    text: 'Ho un progetto di un anno a Recife. Ho fatto il corso in tre mesi prima di partire. Sono arrivata e ho capito quello che mi diceva il tassista al primo incontro. Miracolo.' },
  { name: 'Giovanni R.', role: 'Musicista · Bologna', img: 'image-student-4.jpg', stars: 5, date: '1 mese fa',
    text: 'Suono bossa da anni senza capire i testi. Debora mi ha aperto un mondo. Ora canto consapevole di ogni parola. E non suono più gli stessi pezzi.' },
  { name: 'Paola S.', role: 'Imprenditrice · partner brasiliano', img: 'image-student-2.jpg', stars: 5, date: '3 settimane fa',
    text: 'Volevo parlare con la famiglia del mio compagno. Non lo hanno detto, ma ho visto che lui ha pianto quando ho fatto un discorso a un compleanno in portoghese. Valeu, Debora.' },
];

export const FAQ_COURSE: FaqItem[] = [
  { q: 'Qual è la differenza tra PT e BR?', a: 'Sono due varianti molto diverse, soprattutto nel parlato. Pronuncia, vocabolario, tu/você, intonazione. Questo corso è 100% BR.' },
  { q: 'Parto da zero. Vado bene?', a: 'Perfetto. Il portoghese brasiliano ha ottima resa rapida per un italiano. In 12 lezioni arrivi a un A2 solido — molti a un B1 piccolo.' },
  { q: 'Posso preparare il CELPE-Bras?', a: 'Sì, per Intermediário. Per Avançado consigliamo un\'estensione con materiali dedicati.' },
  { q: 'Uso molto la musica brasiliana nel mio lavoro: funziona?', a: 'Dicci un genere o un artista preferito e ci costruisco attorno lezioni mirate. Faccio già CM/BBPM, samba, MPB, bossa.' },
  { q: 'Rate?', a: 'Sì, in due o tre rate senza interessi.' },
];

export const RELATED_COURSES: RelatedCourse[] = [
  { slug: 'portoghese', title: 'Portoghese europeo', eyebrow: 'Portoghese · PT', meta: '12 lezioni · A1–B1', price: '€ 400', color: '#1CB886', img: 'image-student-2.jpg' },
  { slug: 'spagnolo', title: 'Spagnolo in scioltezza', eyebrow: 'Spagnolo · Lavoro', meta: '12 lezioni · A2–B2', price: '€ 420', color: '#FF09AD', img: 'image-student-3.jpg' },
  { slug: 'inglese', title: 'Conversazione professionale in inglese', eyebrow: 'Inglese · Business', meta: '12 lezioni · B2–C1', price: '€ 480', color: '#9E89FB', img: 'image-student-4.jpg' },
];
