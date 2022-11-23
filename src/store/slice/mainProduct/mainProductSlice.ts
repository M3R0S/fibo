import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainProductSlice, TSectionName } from "./types";

const initialState: IMainProductSlice = {
  endLoadingProduct: {
    pizza: false,
    pasta: false,
    soup: false,
    salad: false,
  },
  isEndLoadingProduct: false,
};

export const mainProduct = createSlice({
  name: "global",
  initialState,
  reducers: {
    setEndLoadingProduct: (
      state,
      action: PayloadAction<{ endpoint: TSectionName; result: boolean }>
    ) => {
      state.endLoadingProduct[action.payload.endpoint] = action.payload.result;
    },
    setIsEndLoadingProduct: (state, action: PayloadAction<boolean>) => {
      state.isEndLoadingProduct = action.payload;
    }
  },
});

export const {
  setEndLoadingProduct,
  setIsEndLoadingProduct,
} = mainProduct.actions;

export default mainProduct.reducer;
