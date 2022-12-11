import { ReactNode } from "react";

export interface ILINK_CONTACTS {
    id: string;
    src: string;
}

export interface IPAYMENT_SYSTEM {
    id: string;
    src: string;
}

export interface ISOCIAL_NETWORK {
    id: string;
    title: string;
    src: string;
}

export interface IFooterConstantsClassName {
    classNameWrapper?: string;
}

export interface IFooterConstantsChildren {
    children?: string | ReactNode;
}
