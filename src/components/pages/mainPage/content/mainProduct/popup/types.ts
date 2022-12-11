import { IPopupQueryParams } from "store";

export interface IMainProductPopupApp {
    isOpened: boolean;
}

export interface IUseMainProductPopupContainer {
    isOpened: boolean;
    isLoading: boolean;
    contentLenght: number;
}

export interface IMainProductPopupContainer {
    onClose: () => void;
    params: IPopupQueryParams;
    isOpened: boolean;
}
