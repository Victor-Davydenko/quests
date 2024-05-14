'use server';

import { IOrder } from '@/interfaces/interfaces';
import prisma from '../../prisma';

export const getQuests = async () => {
  const quests = await prisma.quest.findMany();
  return quests;
};

export const getSingleQuest = async (id: number) => {
  const quest = await prisma.quest.findUnique({
    where: {
      id,
    },
  });
  return quest;
};

export const createOrder = async (orderData: IOrder) => {
  try {
    await prisma.order.create({
      data: orderData,
    });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
