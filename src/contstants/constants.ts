import { ICategory, IRoute } from '@/interfaces/interfaces';

export const routes: IRoute[] = [
  { path: '/', title: 'quests' },
  { path: '/contacts', title: 'contacts' },
];

export const categories: ICategory[] = [
  { id: 'all_quests', title: 'categories_all_quests' },
  { id: 'adventures', title: 'adventures' },
  { id: 'horror', title: 'horror' },
  { id: 'mystic', title: 'mystic' },
  { id: 'detective', title: 'detective' },
  { id: 'sci-fi', title: 'sci_fi' },
];

export const SESSION_COOKIE = 'quest_session';
