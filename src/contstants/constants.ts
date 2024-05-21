import { ICategory, IDictionary, IRoute } from '@/interfaces/interfaces';

export const routes: IRoute[] = [
  { path: '/', title: 'Квести' },
  { path: '/new', title: 'Новачкам' },
  { path: '/feedbacks', title: 'Відгуки' },
  { path: '/promo', title: 'Акції' },
  { path: '/contacts', title: 'Контакти' },
];

export const categories: ICategory[] = [
  { id: 'all_quests', title: 'Всі квести' },
  { id: 'adventures', title: 'Пригоди' },
  { id: 'horror', title: 'Жахи' },
  { id: 'mystic', title: 'Містика' },
  { id: 'detective', title: 'Детектив' },
  { id: 'sci-fi', title: 'Sci-fi' },
];

export const typeQestDictionary: IDictionary = {
  horror: 'Жахи',
  adventures: 'Пригоди',
  mystic: 'Містика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
};

export const questLevelDictionary: IDictionary = {
  easy: 'легкий',
  medium: 'середній',
  hard: 'складний',
};

export const SESSION_COOKIE = 'quest_session';
