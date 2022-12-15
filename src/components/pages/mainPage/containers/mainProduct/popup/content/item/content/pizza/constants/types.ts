import { IMainProductPizzaItem } from "store/slice/constants/types";

export interface IMainProductPopupPizzaItem extends IMainProductPizzaItem {
    onClose: () => void;
}

export interface IUseActiveSizeInfo {
    weightSmall: string;
    weightMedium: string;
    weightBig: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeBig: string;
    priceSmall: string;
    priceMedium: string;
    priceBig: string;
}

export interface ISizeAcordance {
    small: ISizeAcordanceItem;
    medium: ISizeAcordanceItem;
    big: ISizeAcordanceItem;
}

export interface ISizeAcordanceItem {
    price: string;
    size: string;
    weight: string;
}

export interface IDoughAcordance {
    classic: string
    slim: string
}