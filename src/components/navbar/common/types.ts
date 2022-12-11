import { ReactNode } from "react";

export interface INavLink {
    id: string;
    isAnchor: boolean;
    endpoint: string;
    title: string;
    to: string;
}

export interface INavbarMenuList {
    className: string;
    children?: ReactNode;
}

export interface INavbarMenuItem extends IUseNavbarMenuItem {
    title: string;
}

export interface IUseNavbarMenuItem {
    isAnchor: boolean;
    endpoint: string;
    to: string;
}

export interface IButtonBurgerMenu {
    className: string;
}
