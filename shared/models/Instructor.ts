import { Person } from "./Person";

export interface Instructor extends Person {
  department_id: string;
  organizational_email: string;
}