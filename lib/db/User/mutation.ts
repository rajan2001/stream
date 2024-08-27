import dbConnection from '../connectdb';
import { User, UserType } from './model';

export const createUser = async (data: UserType): Promise<void> => {
  await dbConnection;
  await User.create(data);
};
