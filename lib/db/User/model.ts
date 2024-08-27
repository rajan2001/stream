import mongoose, { Model } from 'mongoose';

export interface UserType {
  username: string | null;
  email: string;
  role: string | any;
  externalUserId: string;
  image_url: string | null;
}

const UserSchema = new mongoose.Schema<UserType>({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide an email'],
    trim: true,
  },
  role: {
    type: String,
    default: 'FREE',
    enum: ['FREE', 'PRO'],
  },
  externalUserId: {
    type: String,
    required: true,
    unique: true,
  },
  image_url: {
    type: String,
    default: 'https://cdn.gepton.in/dev/xori.jpeg',
  },
});

export const User: Model<UserType> =
  mongoose.models.User || mongoose.model<UserType>('User', UserSchema);
