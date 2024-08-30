import { Office } from "./Office";

export interface ICollege extends Office{
    dean?: string;
    coordinator?: string;
    departments:string[];
  }

  //export tostring here implement