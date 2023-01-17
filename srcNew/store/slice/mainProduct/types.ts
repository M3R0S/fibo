import { SectionName } from "utils/types";


export type PizzaDough = "classic" | "slim";
export type PizzaSize = "small" | "medium" | "big";
export type MainProductQueryParams = SectionName;

export interface MainProductSlice {
    isIntersectingMainProduct: boolean;
    endLoadingMainProduct: EndLoadingMainProduct;
    isEndLoadingMainProduct: boolean;
}

export interface MainProductItem {
    id: string;
    type: SectionName;
    title: string;
    info: string;
    img: string;
    price: string;
    weight: string;
}

export interface MainProductPizzaItem extends MainProductItem {
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

export interface EndLoadingMainProduct {
    pizza: boolean;
    pasta: boolean;
    soup: boolean;
    salad: boolean;
}