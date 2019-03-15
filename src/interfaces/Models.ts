import { Document } from 'mongoose';
import * as entities from './Entities';

export interface IUserModel extends entities.IUser, Document {
  setPassword: any,
  toAuthJSON: any,
  validatePassword: any,
}