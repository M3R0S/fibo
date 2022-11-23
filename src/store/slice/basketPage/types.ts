export interface IBasketItem {
  id: string;
  typeProduct: string;
  idProduct: string;
  quantity: number;
  title: string;
  info: string;
  price: string;
  img: string;
  weight: string;
  dough?: string;
  size?: string;
}

export interface IBasketPageSlice {
  list: IBasketItem[];
  totalPrice: number;
  promoCodeRatio: number;
  promoCodeActive: boolean | null;
}
