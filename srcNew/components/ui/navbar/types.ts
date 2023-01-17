import { HTMLAttributes } from "react";

export interface NavLinks {
    id: string;
    isAnchor: boolean;
    endpoint: string;
    title: string;
    to: string;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {}
