import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { sleep } from "../../helpers/sleep";
import {
  TPizzaDoughInfo,
  TPizzaSizeInfo,
} from "./pizzaModalSlice";

type TDeleteBasketItem = {
  typeProduct: string;
  idProduct: number;
  pizzaSize?: number;
  pizzaDough?: TPizzaDoughInfo
};

export type TPostBasketItem = {
  typeProduct: string;
  idProduct: number;
  quantity: number;
  title: string;
  info: string;
  price: number;
  localTotalPrice: number;
  img: string;
  weightProduct: number;
  pizzaDough?: TPizzaDoughInfo;
  pizzaSize?: TPizzaSizeInfo;
  pizzaWeightProduct?: number;
};

type TPostBasketList = {
  list: TPostBasketItem[];
  totalPrice: number;
};

const initialState: TPostBasketList = {
  list: JSON.parse(localStorage.getItem("basketList") || "[]"),
  totalPrice: 0,
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
      // state.list[state.list.length - 1].quantity ? state.list[state.list.length - 1].quantity += 1 : state.list[state.list.length - 1].quantity = 1
      // state.list[state.list.length - 1].quantity = 1
    },
    deleteBasketItem: (state, action: PayloadAction<TDeleteBasketItem>) => {
      state.list = filterItems(state.list, action.payload, false)
    },
    getBasketTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    incrementQuantityItem: (state, action) => {
     const target = filterItems(state.list, action.payload, true)
     target[0].quantity += 1
     target[0].localTotalPrice = target[0].quantity * target[0].price
    },
    decrementQuantityItem: (state, action) => {
      const target = filterItems(state.list, action.payload, true)
      target[0].quantity -= 1
      target[0].localTotalPrice = target[0].quantity * target[0].price
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
      item.pizzaSize === action.pizzaSize &&
      item.pizzaDough === action.pizzaDough : 
      item.typeProduct === action.typeProduct &&
      item.idProduct === action.idProduct 
    ) :
      !(
        action.typeProduct === 'pizza' ? 
        item.typeProduct === action.typeProduct &&
        item.idProduct === action.idProduct &&
        item.pizzaSize === action.pizzaSize &&
        item.pizzaDough === action.pizzaDough : 
        item.typeProduct === action.typeProduct &&
        item.idProduct === action.idProduct 
      )
      );
}

export default basketPageSlice.reducer;

export const { postBasketItem, deleteBasketItem, getBasketTotalPrice, incrementQuantityItem, decrementQuantityItem } = basketPageSlice.actions;
