import dbConnection from '../connectdb';
import { User, UserType } from './model';
import { DeleteUserType, UserUpdateType } from './type';

export const createUser = async (data: UserType): Promise<void> => {
  await dbConnection;
  await User.create(data);
};

export const updateUser = async (data: UserUpdateType): Promise<void> => {
  await dbConnection;
  await User.findOneAndUpdate(
    {
      externalUserId: data.externalUserId,
    },
    {
      username: data.username,
      image_url: data.image_url,
    }
  );
};

export const deleteUser = async (data: DeleteUserType): Promise<void> => {
  await dbConnection;
  await User.deleteOne(data);
};
