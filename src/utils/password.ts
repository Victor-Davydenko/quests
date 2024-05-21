import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, +process.env.SALT!);
  return hashedPassword;
};

export const comparePassword = async (password: string, passwordFromDB: string): Promise<boolean> => {
  const hashedPassword = await bcrypt.compare(password, passwordFromDB);
  return hashedPassword;
};
