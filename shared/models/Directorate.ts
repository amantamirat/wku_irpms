import { Office } from "./Office";

export interface IDirectorate extends Office{
    description:string;
    director?: string;
  }