export interface UserUpdateType {
  username?: string | null;
  image_url?: string | null;
  externalUserId: string;
}

export interface DeleteUserType {
  externalUserId: string;
}
