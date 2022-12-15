export interface INavbarMenuItem extends IUseNavbarMenuItem {
    title: string;
}

export interface IUseNavbarMenuItem {
    isAnchor: boolean;
    endpoint: string;
    to: string;
}