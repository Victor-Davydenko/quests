import { ICategory, ILangOption, IRoute } from '@/interfaces/interfaces';

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

export const langOptions:ILangOption[] = [
  { value: 'en', label: 'EN' },
  { value: 'uk', label: 'UK' },
];

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
export const SESSION_COOKIE = 'quest_session';
