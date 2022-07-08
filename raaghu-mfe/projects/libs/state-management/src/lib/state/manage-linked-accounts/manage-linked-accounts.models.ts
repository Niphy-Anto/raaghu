export interface ManageLinkedAccountsItem {
  tenantId: number;
  tenancyName: string;
  username: string;
  id: number;
}

export interface ManageLinkedAccounts {
  items: ManageLinkedAccountsItem[]
}