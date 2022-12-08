import { TPizzaDough, TPizzaSize } from "store";

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

export interface IPopupContentPizzaItem {
    onClose: () => void;
}

export interface IPopupContentPizzaInfo {
    size: string;
    dough: string;
    weight: string;
}

export interface IButtonDoughPizzaItem {
    id: TPizzaDough;
    children: string;
    setActive: (dough: TPizzaDough) => void;
    active: TPizzaDough;
}

export interface IButtonPizzaContainer {
    activeSize: TPizzaSize;
    setActiveSize: (activeSize: TPizzaSize) => void;
    activeDough: TPizzaDough;
    setActiveDough: (activeDough: TPizzaDough) => void;
}

export interface IButtonSizePizzaItem {
    id: TPizzaSize;
    children: string;
    active: TPizzaSize;
    setActive: (id: TPizzaSize) => void;
}

export interface IPizzaSizeButtonArray {
    id: TPizzaSize;
    info: string;
}

export interface IPizzaDoughButtonArray {
    id: TPizzaDough;
    info: string;
}
