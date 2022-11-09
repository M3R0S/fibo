
export type TSectionName = "pizza" | "pasta" | "soup" | "salad";

export type TPizzaDough = "classic" | "slim"

export type TPizzaSize = "small" | "medium" | "big"

export type TMainProductGalleries = {
  id: string;
  title: string;
  endpoint: TSectionName;
  // idEllement: string;
}

export type TMainProductItem = {
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
  sizeSmall: string
  sizeMedium: string
  sizeBig: string
  priceSmall: string;
  priceMedium: string;
  priceBig: string;
}

export type TMainProductList = {
  id: string;
  type: TSectionName;
  title: string;
  info: string;
  img: string;
  price: string;
  weight: string;
}

export type TMainProductSlice = {
  loadingTime: number | null
};

export type TMainProductModalItemQuery = {
  type: string,
  id: string
}

export type TMainProductQueryParams = {
  popupId: string
  popupType: string
}