import { MyModel } from "./MyModel";

export interface Person extends MyModel{
    user_id?:string;
    first_name: string;
    last_name: string;
  }