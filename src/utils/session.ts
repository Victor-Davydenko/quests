import { v4 as uuidv4 } from 'uuid';

export const generateSessionCookie = () => {
  return uuidv4();
};

export const generateExpirationCookieTime = (hours: number) => {
  return new Date(new Date().setHours(new Date().getHours() + hours));
};
