import { Schema, model, Document } from 'mongoose';
import { IUser, Role } from '@shared/models/User';


interface IUserModel extends Omit<IUser, '_id'>, Document { }

const userSchema = new Schema<IUserModel>({
  email: { type: String, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  activated: { type: Boolean, required: true, default: false },
  roles: { type: [String], enum: Object.values(Role), required: true }
});

const User = model<IUserModel>('User', userSchema);

export default User;