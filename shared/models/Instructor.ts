import { Person } from "./Person";

export interface IInstructor extends Person {
  department_id: string;
  organizational_email: string;
}