import {MyModel} from './MyModel';

export enum Role {
  ADMIN = 'ADMIN',
  INSTRUCTOR = 'INSTRUCTOR',
  PRESIDENT = 'PRESIDENT',
  DIRECTOR='DIRECTOR',
  COORDINATOR = 'COORDINATOR',
  DEAN='DEAN',
  HEAD='HEAD',
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
}

export interface IUser extends MyModel {
  email: string;
  username: string;
  password: string;
  activated: boolean;
  roles: Role[];
}

export const validateUser = (user: IUser): boolean => {
  return !!user.username && !!user.password && !!user.roles;
}
