import type { FaqItem } from './home-content';

export type Course = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lang: string;
  level: string;
  duration: string;
  lessonLen: string;
  format: string;
  students: number;
  price: number;
  pricePer: number;
  rating: number;
  reviews: number;
  color: string;
};

export type Lesson = { n: number; title: string; focus: string; dur: string };

export type ForWhomItem = { icon: string; title: string; body: string };

export type Outcome = { n: string; t: string; d: string };

export type TeacherStat = { n: string; l: string };

export type Review = {
  name: string;
  role: string;
  img: string;
  stars: number;
  date: string;
  text: string;
};

export type RelatedCourse = {
  slug: string;
  title: string;
  eyebrow: string;
  meta: string;
  price: string;
  color: string;
  img: string;
};

export type HeroTitle = {
  line1: string;
  line2: string;
  line3: string;
};

export type CourseData = {
  COURSE: Course;
  LESSONS: Lesson[];
  LESSON_EXTRAS: string[];
  FOR_WHOM: ForWhomItem[];
  OUTCOMES: Outcome[];
  TEACHER_STATS: TeacherStat[];
  COURSE_REVIEWS: Review[];
  FAQ_COURSE: FaqItem[];
  RELATED_COURSES: RelatedCourse[];
  HERO_TITLE: HeroTitle;
};
