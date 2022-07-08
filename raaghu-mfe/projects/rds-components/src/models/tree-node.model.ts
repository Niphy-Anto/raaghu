export class TreeNode {
    constructor(
        public ItemCode: string,
        public ItemDescription: string,
        public level: number,
        public children: TreeNode[] = [],
        public selected: boolean = false,
        public id?:any,
        public parentId?:any
    ) {}
}
export class TreeNodeLabeles {
    public ParentItemPlaceholder: string;
    public ChildItemPlaceholder: string;
    public ParentDescriptionPlaceholder: string;
    public ChildDescriptionPlaceholder: string;
    public ParentNodeTitle: string;
    public ChildNodeTitle: string;
}
export class TreeType {
    public IconLabel: boolean;
    public Normal: boolean;
    public checkbox: boolean;
}
