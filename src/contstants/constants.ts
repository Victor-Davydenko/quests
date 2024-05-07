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

export const defaultMapOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  rotateControl: false,
  clickableIcons: false,
  fullScreenControl: false,
};

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export const location = {
  lat: 49.84196491758953,
  lng: 24.03192517784678,
};
