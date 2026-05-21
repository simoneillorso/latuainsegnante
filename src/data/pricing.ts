import { PRICING_SURCHARGE } from './home-content';

// Modello prezzi canonico (allineato a PRICING_PLANS della home):
// Intermedio 8 lezioni @ €45/ora · Full 16 lezioni @ €40/ora.
// Cinese/arabo/russo: +€5 a lezione su ogni percorso.
export type CoursePlan = {
  key: 'intermedio' | 'full';
  name: string;
  lessons: number;
  perHour: number;
  total: number;
  validity: string;
  recommended?: boolean;
};

export function coursePlans(lang: string): CoursePlan[] {
  const sur = PRICING_SURCHARGE.langs.includes(lang.toLowerCase()) ? PRICING_SURCHARGE.perLesson : 0;
  const inter = 45 + sur;
  const full = 40 + sur;
  return [
    { key: 'intermedio', name: 'Percorso Intermedio', lessons: 8, perHour: inter, total: inter * 8, validity: 'valido 3 mesi' },
    { key: 'full', name: 'Percorso Full', lessons: 16, perHour: full, total: full * 16, validity: 'valido 6 mesi', recommended: true },
  ];
}
