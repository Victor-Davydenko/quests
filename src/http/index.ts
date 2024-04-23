import { IQuest } from '@/interfaces/interfaces';

const getQuests = async ():Promise<IQuest[]> => {
  const response = await fetch(`${process.env.API_URL}/quests`, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error('something went wrong!');
  }
  const quests = await response.json();
  return quests;
};

export default getQuests;
