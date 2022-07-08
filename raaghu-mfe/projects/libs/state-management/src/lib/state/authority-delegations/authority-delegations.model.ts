import { DateTime } from "luxon";

export interface DelegationsItem { 

}

export interface Delegation {
  username: string | undefined;
  startTime: DateTime;
  endTime: DateTime;
  id: number;
}
export interface UserName {
  name: string ;
  value: string;

}
export interface UserNames {
  items: UserName[]
}

