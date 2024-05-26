import { v4 as uuidv4 } from 'uuid';

const generateSessionCookie = () => {
  return uuidv4();
};

export default generateSessionCookie;
