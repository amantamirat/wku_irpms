import { Person } from "./Person";

export interface IStudent extends Person {
  department_id: string;
  student_id: string;
}