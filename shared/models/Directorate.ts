import { Office } from "./Office";

export interface Directorate extends Office{
    description:string;
    director?: string;
  }