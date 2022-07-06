import { DateTime } from "luxon"

export interface LoginAttemptsItem {
  tenancyName: string,
  userNameOrEmail: string,
  clientIpAddress: string,
  clientName: string,
  browserInfo: string,
  result: string,
  creationTime:DateTime
}

export interface LoginAttempts {
  totalCount:number
  items: LoginAttemptsItem[]
}

