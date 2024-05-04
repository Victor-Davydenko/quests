import { IOrder, IQuest } from '@/interfaces/interfaces';

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

export const createOrder = async (orderData: IOrder) => {
  try {
    const response = await fetch('http://localhost:3001/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
