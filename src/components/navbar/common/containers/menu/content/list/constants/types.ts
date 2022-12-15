import { ReactNode } from "react";

export interface INAV_LINKS {
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
