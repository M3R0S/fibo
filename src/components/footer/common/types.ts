import { ReactNode } from "react"

export interface ILinkContact {
    id: string,
    src: string
}

export interface IPaymentSystem {
    id: string,
    src: string,
}

export interface ISocialNetwork {
    id: string,
    title: string,
    src: string
}

export interface IUiClassName {
    classNameWrapper?: string
}

export interface IUiChildren {
    children?: string | ReactNode
}