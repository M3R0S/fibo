import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketItem, IBasketPageSlice } from "../types";

const initialState: IBasketPageSlice = {
  list: JSON.parse(localStorage.getItem("basketList") || "[]"),
  totalPrice: priceReduce(JSON.parse(localStorage.getItem("basketList") || "[]")),
  promoCodeRatio: 1,
  promoCodeActive: null,
};

export const basketPageSlice = createSlice({
  name: "basketPage",
  initialState,
  reducers: {
    postBasketItem: (state, action: PayloadAction<IBasketItem>) => {
      const listUpdate = state.list.concat(action.payload);

      if (state.list.length === 0 || filterItems(state.list, action.payload.id).length === 0) {
        state.list = listUpdate;
      } else {
        filterItems(state.list, action.payload.id)[0].quantity += 1;
      }

      updatePriceAndLocalStorage(state, listUpdate, state.promoCodeRatio);
    },

    deleteBasketItem: (state, action: PayloadAction<string>) => {
      const listUpdate = filterItems(state.list, action.payload, false);

      state.list = listUpdate;

      updatePriceAndLocalStorage(state, listUpdate, state.promoCodeRatio);
    },

    changePromoCodeRatio: (state, action: PayloadAction<number>) => {
      const promoCodeRatioUpdate = action.payload;
      state.promoCodeRatio = action.payload;

      updatePriceAndLocalStorage(state, state.list, promoCodeRatioUpdate);
    },

    setPromoCodeActive: (state, action) => {
      state.promoCodeActive = action.payload;
    },

    incrementQuantityItem: (state, action: PayloadAction<string>) => {
      const listUpdate = [...state.list];
      filterItems(listUpdate, action.payload)[0].quantity += 1;

      updatePriceAndLocalStorage(state, listUpdate, state.promoCodeRatio);
    },

    decrementQuantityItem: (state, action: PayloadAction<string>) => {
      const listUpdate = [...state.list];
      filterItems(listUpdate, action.payload)[0].quantity -= 1;

      updatePriceAndLocalStorage(state, listUpdate, state.promoCodeRatio);
    },

    setQuantityItem: (state, action: PayloadAction<{ quantity: number; id: string }>) => {
      const listUpdate = [...state.list];
      filterItems(listUpdate, action.payload.id)[0].quantity = action.payload.quantity;

      updatePriceAndLocalStorage(state, listUpdate, state.promoCodeRatio);
    },

    clearBasket: (state) => {
      state.list = [];
      localStorage.removeItem("basketList");
      state.totalPrice = 0;
    },
  },
});

function updatePriceAndLocalStorage(
  state: IBasketPageSlice,
  listUpdate: IBasketItem[],
  promoCodeRatio: number = 1
) {
  localStorage.setItem("basketList", JSON.stringify(listUpdate));
  state.totalPrice = priceReduce(listUpdate, promoCodeRatio);
}

function priceReduce(list: IBasketItem[], promoCodeRatio: number = 1) {
  return (
    list.reduce(
      (sum: number, item: IBasketItem) => (sum += Number(item.price) * item.quantity),
      0
    ) * promoCodeRatio
  );
}

function filterItems(list: IBasketItem[], id: string, findOneItem: boolean = true) {
  if (findOneItem) {
    return list.filter((item) => item.id === id);
  } else {
    return list.filter((item) => item.id !== id);
  }
}

export const {
  setPromoCodeActive,
  postBasketItem,
  deleteBasketItem,
  changePromoCodeRatio,
  incrementQuantityItem,
  decrementQuantityItem,
  setQuantityItem,
  clearBasket,
} = basketPageSlice.actions;

export const basketPageReducer = basketPageSlice.reducer;
