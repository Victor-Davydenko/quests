import { IOrder } from '@/interfaces/interfaces';
import prisma from '../../prisma';

export const getQuests = async () => {
  const quests = await prisma.quest.findMany();
  return quests;
};

export const getSingleQuest = async (id: string) => {
  const quest = await prisma.quest.findUnique({
    where: {
      id: +id,
    },
  });
  return quest;
};

export const createOrder = async (orderData: IOrder) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
