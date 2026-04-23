import type { Stat } from './home-content';

export const ABOUT_NUMBERS: Stat[] = [
  { n: '20', l: 'anni che studio lingue', c: '#E9FA49' },
  { n: '12', l: 'anni che le insegno', c: '#9E89FB' },
  { n: '500+', l: 'studenti accompagnati', c: '#FF09AD' },
  { n: '9', l: 'lingue parlate', c: '#1CB886' },
];

export type StoryChapter = {
  year: string;
  age: string;
  color: string;
  emoji: string;
  title: string;
  body: string;
  lesson: string;
};

export const STORY_CHAPTERS: StoryChapter[] = [
  { year: '2004', age: '14 anni', color: '#9E89FB', emoji: '✈️',
    title: 'Il primo fallimento (fortunato)',
    body: 'Bocciata al compito di inglese. La prof diceva che "non ero portata". Passo l\'estate in Irlanda da sola con 200 parole in tasca. Torno parlando. Capisco che la lingua non si studia — si vive.',
    lesson: 'La lingua non si studia — si vive.' },
  { year: '2008', age: '18 anni', color: '#E9FA49', emoji: '📚',
    title: 'Università, e troppa grammatica',
    body: 'Mi iscrivo a Lingue Orientali. Cinese, arabo, russo. Libri di grammatica alti mezzo metro. Ma i miei compagni Erasmus imparano più in un weekend di quello che io imparo in un semestre.',
    lesson: 'Un weekend in immersione vale più di un semestre di libri.' },
  { year: '2012', age: '22 anni', color: '#1CB886', emoji: '🔀',
    title: 'L\'anno che cambia tutto',
    body: 'Traduco per una piccola agenzia a Madrid. I clienti sono nervosi. Dicono: "ho studiato inglese per 15 anni e non so chiedere un caffè". Non ero nata per tradurre — ero nata per sbloccarli.',
    lesson: 'Non ero nata per tradurre — ero nata per sbloccare le persone.' },
  { year: '2014', age: '24 anni', color: '#FF09AD', emoji: '⚡',
    title: 'Prima lezione. Primo clic.',
    body: 'Una mia amica ha un colloquio in inglese tra 10 giorni. "Aiutami". Le smonto la paura, le do 3 frasi da padroneggiare, le faccio registrare un vocale al giorno. Passa il colloquio. Ne arrivano altri.',
    lesson: 'Smontare la paura vale più di qualsiasi grammatica.' },
  { year: '2018', age: '28 anni', color: '#FFAE00', emoji: '🏛️',
    title: 'Apro il mio studio a Latina',
    body: 'Mollo la traduzione. 4 studenti diventano 40, poi 100. Scrivo il mio metodo nero su bianco, ossessionata dall\'idea che "facile" sia un metodo, non un dono.',
    lesson: '"Facile" è un metodo, non un dono.' },
  { year: 'Oggi', age: '34 anni', color: '#9E89FB', emoji: '🌐',
    title: 'latuainsegnante.com',
    body: '500 studenti passati dal mio studio, online e dal vivo. Nove lingue insegnate. Un metodo rodato su chi odia studiare, chi non ha tempo, chi ha paura di parlare. E un\'idea ancora più chiara: non ti faccio studiare come a scuola.',
    lesson: 'Non ti faccio studiare come a scuola.' },
];

export type Belief = { icon: string; t: string; b: string };

export const BELIEFS: Belief[] = [
  { icon: '🎯', t: 'Prima l\'obiettivo, poi il metodo', b: 'Non partiamo mai dai libri. Partiamo da: cosa vuoi dire, a chi, in quanto tempo.' },
  { icon: '🫶', t: 'La paura conta più della grammatica', b: 'Il 90% di chi "non parla" ha solo paura di sbagliare. Ci lavoriamo su, con empatia.' },
  { icon: '📚', t: 'Meno libri, più vita vera', b: 'Serie, podcast, articoli, canzoni, email, WhatsApp. La lingua che usa la gente reale.' },
  { icon: '🔁', t: 'Ripetere, senza annoiarsi', b: 'La ripetizione è la madre dell\'apprendimento. Ma c\'è modo e modo di ripetere — ti insegno quelli intelligenti.' },
  { icon: '🪞', t: 'Sbagliare è la parte migliore', b: 'Ogni errore è un regalo. Ne prendiamo nota, ci ridiamo sopra, e il cervello lo fissa meglio di 10 pagine di teoria.' },
  { icon: '⚖️', t: 'Andare piano, ma non fermarsi mai', b: 'Meglio 15 minuti al giorno di 3 ore il sabato. Costruiamo insieme abitudini piccole e invincibili.' },
];

export type MethodPhase = {
  n: string;
  color: string;
  name: string;
  time: string;
  title: string;
  body: string;
  deliverables: string[];
};

export const METHOD_PHASES: MethodPhase[] = [
  { n: '01', color: '#9E89FB', name: 'Ascolto', time: '1 sessione',
    title: 'Ti ascolto, non ti valuto.',
    body: 'Niente test di livello travestito da conversazione. Mi racconti la tua storia con la lingua: cosa hai provato, cosa ti blocca, cosa ti farebbe dire "ce l\'ho fatta". Io prendo appunti e ti rimando una foto del tuo punto di partenza.',
    deliverables: [
      'Diagnosi del livello reale (non scolastico)',
      'Mappa dei tuoi blocchi emotivi e tecnici',
      'Obiettivo SMART condiviso per 3 mesi',
    ] },
  { n: '02', color: '#E9FA49', name: 'Disegno', time: '48 ore dopo',
    title: 'Disegno un percorso solo per te.',
    body: 'Niente programmi pre-confezionati. Costruisco il tuo piano sulla base del tuo obiettivo, del tempo che hai, del settore in cui vivi, delle serie che guardi e persino delle canzoni che ti piacciono. Ogni lezione ha un perché.',
    deliverables: [
      'Piano lezione per lezione personalizzato',
      'Materiali scritti e audio su misura',
      'Calendario adatto ai tuoi orari reali',
    ] },
  { n: '03', color: '#1CB886', name: 'Pratica', time: 'ogni settimana',
    title: 'Pratichiamo in modo intenso ma sostenibile.',
    body: 'Le lezioni sono laboratori: il 70% è pratica orale e scritta su situazioni vere. Ti do "missioni" leggere tra una lezione e l\'altra: 10 minuti al giorno, mai di più. La costanza batte l\'intensità.',
    deliverables: [
      'Lezioni 1-a-1 di 60 minuti, online o a Latina',
      'Micro-esercizi quotidiani via WhatsApp',
      'Feedback registrato, riascoltabile',
    ] },
  { n: '04', color: '#FF09AD', name: 'Misura', time: 'ogni 4 lezioni',
    title: 'Misuriamo i progressi — senza finti voti.',
    body: 'Ogni 4 lezioni ci fermiamo per fare il punto. Ti faccio registrare un audio sullo stesso argomento del primo giorno, e confrontiamo. Vedrai la differenza con le tue orecchie. E decidiamo insieme se alzare l\'asticella.',
    deliverables: [
      'Report di progresso scritto',
      'Confronto audio "prima e dopo"',
      'Ricalibrazione del piano, se serve',
    ] },
];

export type Credential = { t: string; s: string };

export const CREDENTIALS: Credential[] = [
  { t: 'Cambridge CELTA', s: 'Certified English Language Teaching to Adults' },
  { t: 'DELE · C2', s: 'Instituto Cervantes de Madrid' },
  { t: 'Goethe · C2', s: 'Goethe-Institut München' },
  { t: 'DELF · C1', s: 'Alliance Française' },
  { t: 'Laurea magistrale', s: 'Lingue orientali · Ca\' Foscari' },
  { t: 'Esaminatrice CILS', s: 'Università per Stranieri di Siena' },
];

export const OFF_HOURS_TAGS: string[] = [
  '📖 Lettrice compulsiva',
  '🎧 Podcast multilingue',
  '🇯🇵 Prossimo viaggio: Kyoto',
  '☕ Caffè doppio',
  '🖋 Blog irregolare',
];
