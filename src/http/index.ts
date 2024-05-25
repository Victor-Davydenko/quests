'use server';

import { IOrder, IUser } from '@/interfaces/interfaces';
import { comparePassword, hashPassword } from '@/utils/password';
import { cookies } from 'next/headers';
import { generateExpirationCookieTime, generateSessionCookie } from '@/utils/session';
import { SESSION_COOKIE } from '@/contstants/constants';
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

export const signUpUser = async (user: IUser):Promise<void> => {
  const { email, password } = user;
  const candidate = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (candidate) {
    throw new Error('user already exists');
  }
  try {
    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

const deleteExpiredSessions = async (userId: number) => {
  const sessions = await prisma.session.findMany({
    where: {
      userId,
    },
  });
  for (const session of sessions) {
    if (session.expiresAt < new Date()) {
      await prisma.session.delete({
        where: {
          id: session.id,
        },
      });
    }
  }
};
export const signInUser = async (email: string, password: string):Promise<void> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error('bad credentials');
  }
  const isPasswordCorrect = comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('bad credentials');
  }
  const session = await prisma.session.create({
    data: {
      token: generateSessionCookie(),
      userId: user.id,
      expiresAt: generateExpirationCookieTime(1),
    },
  });
  cookies().set({
    name: SESSION_COOKIE,
    value: session.token,
    maxAge: +process.env.COOKIE_MAX_AGE!,
    httpOnly: true,
  });
  await deleteExpiredSessions(user.id);
};

export const logout = async () => {
  const token = cookies().get(SESSION_COOKIE)?.value;
  await prisma.session.delete({
    where: {
      token,
    },
  });
  cookies().delete(SESSION_COOKIE);
};

export const checkSession = async () => {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const session = await prisma.session.findUnique({
    where: {
      token,
    },
  });
  if (!session) return null;
  return session;
};
