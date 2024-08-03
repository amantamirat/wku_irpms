import { Person } from "./Person";

export interface Student extends Person {
  department_id: string;
  student_id: string;
}