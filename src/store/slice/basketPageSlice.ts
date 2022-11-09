import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPizzaDough, TPizzaSize } from "./mainProduct/types/mainProductTypes";
// import { sleep } from "../../helpers/sleep";


type TDeleteBasketItem = {
  typeProduct: string;
  idProduct: string;
  size?: string;
  dough?: string
};

export type TPostBasketItem = {
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
};

type TPostBasketList = {
  list: TPostBasketItem[];
  totalPrice: number;
  promoCodeRatio: number;
  promoCodeActive: boolean | null;
};

const initialState: TPostBasketList = {
  list: JSON.parse(localStorage.getItem("basketList") || "[]"), 
  totalPrice: 0,
  promoCodeRatio: 1,
  promoCodeActive: null,
};

export const basketPageSlice = createSlice({
  name: "basketPage",
  initialState,
  reducers: {
    postBasketItem: (state, action) => {
      if (state.list.length === 0) {
        state.list.push(action.payload)
      } else if (filterItems(state.list, action.payload, true).length === 0) {
          state.list.push(action.payload)
      } else {
        filterItems(state.list, action.payload, true)[0].quantity += 1
      }
    },
    deleteBasketItem: (state, action: PayloadAction<TDeleteBasketItem>) => {
      state.list = filterItems(state.list, action.payload, false)
    },
    setBasketTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    changePromoCodeRatio: (state, action : PayloadAction<number>) => {
     state.promoCodeRatio = action.payload
    },
    setPromoCodeActive: (state, action) => {
      state.promoCodeActive = action.payload
    },
    incrementQuantityItem: (state, action) => {
     const target = filterItems(state.list, action.payload, true)
     target[0].quantity += 1
    },
    decrementQuantityItem: (state, action) => {
      const target = filterItems(state.list, action.payload, true)
      target[0].quantity -= 1
     }
  },
});

function filterItems (list : TPostBasketItem[], action: TDeleteBasketItem, isAllFilter : boolean) {
  return list.filter(
    (item) =>
    isAllFilter ?
    (
      action.typeProduct === 'pizza' ? 
      item.typeProduct === action.typeProduct &&
      item.idProduct === action.idProduct &&
      item.size === action.size &&
      item.dough === action.dough : 
      item.typeProduct === action.typeProduct &&
      item.idProduct === action.idProduct 
    ) :
      !(
        action.typeProduct === 'pizza' ? 
        item.typeProduct === action.typeProduct &&
        item.idProduct === action.idProduct &&
        item.size === action.size &&
        item.dough === action.dough : 
        item.typeProduct === action.typeProduct &&
        item.idProduct === action.idProduct 
      )
      );
}

export default basketPageSlice.reducer;

export const { setPromoCodeActive, postBasketItem, deleteBasketItem, setBasketTotalPrice, changePromoCodeRatio, incrementQuantityItem, decrementQuantityItem } = basketPageSlice.actions;
