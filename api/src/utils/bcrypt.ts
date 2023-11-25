import * as bcrypt from 'bcrypt';

export const encodePassword = (password: string) => {
  return bcrypt.hashSync(password, 6);
};

export const comparePassword = (
  password: string | Buffer,
  EnteredPassword: string,
) => {
  return bcrypt.compareSync(password, EnteredPassword);
};
