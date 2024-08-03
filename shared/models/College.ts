import { Office } from "./Office";

export interface College extends Office{
    dean?: string;
    coordinator?: string;
    departments:string[];
  }