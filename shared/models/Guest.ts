import { Person } from "./Person";

export interface Guest extends Person {
  organization: string;
}