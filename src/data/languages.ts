export type Language = {
  slug: string;
  label: string;
  en: string;
  meta: string;
  popular: boolean;
  hello: string;
  students: number;
};

export const LANGS: Language[] = [
  { slug: 'inglese', label: 'Inglese', en: 'English', meta: 'A1 → C2 · IELTS · Cambridge', popular: true, hello: 'Hello', students: 120 },
  { slug: 'spagnolo', label: 'Spagnolo', en: 'Español', meta: 'DELE · conversazione', popular: true, hello: 'Hola', students: 98 },
  { slug: 'francese', label: 'Francese', en: 'Français', meta: 'DELF · DALF', popular: false, hello: 'Bonjour', students: 64 },
  { slug: 'tedesco', label: 'Tedesco', en: 'Deutsch', meta: 'Goethe · TestDaF', popular: false, hello: 'Hallo', students: 52 },
  { slug: 'italiano', label: 'Italiano L2', en: 'Italiano', meta: 'per stranieri · CILS', popular: true, hello: 'Ciao', students: 86 },
  { slug: 'portoghese', label: 'Portoghese', en: 'Português', meta: 'Europeo · CAPLE', popular: false, hello: 'Olá', students: 28 },
  { slug: 'portoghese-brasiliano', label: 'Portoghese BR', en: 'Brasileiro', meta: 'Brasiliano · CELPE', popular: false, hello: 'Oi', students: 24 },
  { slug: 'russo', label: 'Russo', en: 'Русский', meta: 'Cirillico · TORFL', popular: false, hello: 'Привет', students: 18 },
  { slug: 'cinese', label: 'Cinese', en: '中文', meta: 'HSK 1 → 4 · mandarino', popular: false, hello: '你好', students: 22 },
  { slug: 'arabo', label: 'Arabo', en: 'العربية', meta: 'standard moderno', popular: false, hello: 'مرحبا', students: 16 },
];

export type Greeting = { word: string; lang: string; color: string };

export const GREETINGS: Greeting[] = [
  { word: 'Ciao', lang: 'italiano', color: '#9E89FB' },
  { word: 'Hello', lang: 'inglese', color: '#FF09AD' },
  { word: 'Hola', lang: 'spagnolo', color: '#E9FA49' },
  { word: 'Bonjour', lang: 'francese', color: '#1CB886' },
  { word: 'Hallo', lang: 'tedesco', color: '#FFAE00' },
  { word: 'Olá', lang: 'portoghese', color: '#9E89FB' },
  { word: '你好', lang: 'cinese', color: '#FF09AD' },
  { word: 'Привет', lang: 'russo', color: '#1CB886' },
  { word: 'مرحبا', lang: 'arabo', color: '#E9FA49' },
];
