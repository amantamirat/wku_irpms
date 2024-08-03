import { MyModel } from "./MyModel";

// /shared/models/User.ts
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

export interface User extends MyModel {
  username: string;
  password: string;
  activated: boolean;
  lastSeen?:string;
  roles: Role[];
}
