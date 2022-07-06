
export interface AuditLogsItem {
  

  userId: number,
  userName: string,
  impersonatorTenantId: number,
  impersonatorUserId: number,
  serviceName: string,
  methodName: string,
  parameters: string,
  //executionTime: string,
  executionDuration: number,
  clientIpAddress: string,
  clientName: string,
  browserInfo: string,
  exception: string,
  customData: string,
  id: number
}

export interface AuditLogs {
  items: AuditLogsItem[]
}

export interface ChangeLogsItem {
  
  // userId: number ;
  //   userName: string ;
  //   changeTime: string;
  //   entityTypeFullName: string ;
  //   entityChangeSetId: number;
  //   id: number;
  //   skipCount:number;
  //   maxResultCount:number;
}

export interface ChangeLogs {
  items: ChangeLogsItem[]
}



