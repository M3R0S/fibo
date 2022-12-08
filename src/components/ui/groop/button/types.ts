import { ReactNode } from "react";

//? ButtonAddBasket

export interface IButtonAddInBasket extends IUseAddInBasket {
    className?: string;
}

export interface IUseAddInBasket {
    type: string;
    id: string;
    title: string;
    info: string;
    img: string;
    weight: string;
    price: string;
    dough?: string;
    size?: string;
    onClose: () => void;
}

//? ButtonBack

export interface IButtonBack {
    className?: string;
    children?: string | ReactNode;
}

//? ButtonNavigateBasket

export interface IButtonNavigateBasket {
    className?: string;
}

//? ButtonCallNumber

export interface IButtonCallNumber {
    className?: string;
}

//? ButtonClosePopup

export interface IButtonClosePopup {
    onClose: () => void;
    className: string;
}

//? ButtonHome

export interface IButtonNavigateMain {
    children?: ReactNode | string;
    className?: string;
}

//? ButtonLogin

export interface IButtonNavigateLogin {
    className?: string;
}

//? ButtonOrderCall

export interface IButtonOrderCall {
    className?: string;
}
