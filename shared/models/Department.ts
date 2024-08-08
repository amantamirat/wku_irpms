import { Office } from "./Office";

export interface IDepartment extends Office{
    college_id:string;
    head?:string;
    instructors:string[];
  }