import { IQuest } from '@/interfaces/interfaces';

export const getQuests = async ():Promise<IQuest[]> => {
  const response = await fetch(`${process.env.API_URL}/quests`, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error('something went wrong!');
  }
  const quests = await response.json();
  return quests;
};

export const getSingleQuest = async (id: string):Promise<IQuest> => {
  const response = await fetch(`${process.env.API_URL}/quests/${id}`);
  const quest = await response.json();
  return quest;
};
