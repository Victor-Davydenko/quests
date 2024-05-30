'use server';

import { IOrder, IUser } from '@/interfaces/interfaces';
import { comparePassword, hashPassword } from '@/utils/password';
import { cookies } from 'next/headers';
import generateSessionCookie from '@/utils/session';
import { SESSION_COOKIE } from '@/contstants/constants';
import UserApiError from '@/exception/userException';
import ServerError from '@/exception/serverError';
import prisma from '../../prisma';

export const getQuests = async () => {
  try {
    const quests = await prisma.quest.findMany();
    return quests;
  } catch (e) {
    throw ServerError.UnknownError();
  }
};

export const getSingleQuest = async (id: number) => {
  try {
    const quest = await prisma.quest.findUnique({
      where: {
        id,
      },
    });
    return quest;
  } catch (e) {
    throw ServerError.UnknownError();
  }
};

export const createOrder = async (orderData: IOrder) => {
  try {
    await prisma.order.create({
      data: orderData,
    });
  } catch (e) {
    throw ServerError.UnknownError();
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
    throw UserApiError.UserAlreadyExists();
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
    throw ServerError.UnknownError();
  }
};

export const signInUser = async (email: string, password: string):Promise<void> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw UserApiError.BadCredentials();
  }
  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw UserApiError.BadCredentials();
  }

  const token = generateSessionCookie();
  cookies().set({
    name: SESSION_COOKIE,
    value: token,
    maxAge: +process.env.COOKIE_MAX_AGE!,
    httpOnly: true,
  });
};

export const logout = async () => {
  cookies().delete(SESSION_COOKIE);
};
