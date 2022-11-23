export type TSectionName = "pizza" | "pasta" | "soup" | "salad";

export type TPizzaDough = "classic" | "slim";

export type TPizzaSize = "small" | "medium" | "big";

export type TMainProductQueryParams = TSectionName;

export interface IMainProductItem {
  id: string;
  type: TSectionName;
  title: string;
  info: string;
  img: string;
  price: string;
  weight: string;
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

export interface IMainProductList {
  id: string;
  type: TSectionName;
  title: string;
  info: string;
  img: string;
  price: string;
  weight: string;
}

export interface IEndLoadingProduct {
  pizza: boolean;
  pasta: boolean;
  soup: boolean;
  salad: boolean;
}

export interface IMainProductSlice {
  endLoadingProduct: IEndLoadingProduct;
  isEndLoadingProduct: boolean;
}
