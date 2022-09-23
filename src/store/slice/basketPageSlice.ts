import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sleep } from "../../helpers/sleep";
import {
  TPizzaDoughInfo,
  TPizzaSizeInfo,
} from "./pizzaModalSlice";

type TDeleteBasketItem = {
  typeProduct: string;
  idProduct: number;
};

export type TPostBasketItem = {
  typeProduct: string;
  idProduct: number;
  title: string;
  pText: string;
  price: number;
  img: string;
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
      state.list.push(action.payload);
    },
    deleteBasketItem: (state, action: PayloadAction<TDeleteBasketItem>) => {
      state.list = state.list.filter(
        (item) =>
          !(
            item.typeProduct === action.payload.typeProduct &&
            item.idProduct === action.payload.idProduct
          )
      );
    },
    getBasketTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    }
  },
});

export default basketPageSlice.reducer;

export const { postBasketItem, deleteBasketItem, getBasketTotalPrice } = basketPageSlice.actions;
