
export type TSectionName = "pizza" | "pasta" | "soup" | "salad";

export type TMainPositionItem = {
  id: string;
  type: TSectionName;
  title: string;
  info: string;
  img: string;
  price: number;
  weightProductSmall?: number;
  weightProductMedium?: number;
  weightProductBig?: number;
  weightProduct?: number;
  priceSmall?: number;
  priceMedium?: number;
  priceBig?: number;
};

export type TMainPositionSlice = {
  openModal: boolean
  typeModal: string
  idModal: string
  loadingTime: number | null
};

export type TMainPositionModalItemQuery = {
  type: string,
  id: string
}

export type TMainPositionQueryParams = {
  popupId: string
  pupupType: string
}