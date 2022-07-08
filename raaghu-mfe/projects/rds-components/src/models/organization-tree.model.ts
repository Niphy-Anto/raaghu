export class OrganizationTreeNode {
    constructor(
        public ItemCode: string,
        public ItemDescription: string,
        public level: number,
        public parentName: string,
        public children: OrganizationTreeNode[] = [],
        public selected: boolean = false
    ) {}
}
export class OrganizationTreeLabeles {
    public ParentItemPlaceholder: string;
    public ChildItemPlaceholder: string;
    public ParentDescriptionPlaceholder: string;
    public ChildDescriptionPlaceholder: string;
    ChildDescriptionEditPlaceholder:string;
    public ParentNodeTitle: string;
    public ChildNodeTitle: string;
}
export class OrganizationTreeType {
    public IconLabel: boolean;
    public Normal: boolean;
    public checkbox: boolean;
}