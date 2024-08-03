import { Office } from "./Office";

export interface Department extends Office{
    college_id:string;
    head?:string;
    instructors:string[];
  }